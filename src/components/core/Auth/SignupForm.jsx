// src\components\core\Auth\SignupForm.jsx
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants";


function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.BENEFICIARY);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    category: "",
    contactNumber: "+91", //*
    aadharNumber: "",
  })

  const {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    age,
    gender,
    category,
    contactNumber,
    aadharNumber,
  } = formData


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {

    e.preventDefault();
    // const formattedContactNumber = contactNumber.startsWith('+91') ? contactNumber : `+91${contactNumber}`;

    const signupData = {
      ...formData,
      
    };
    

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.contactNumber, navigate));

    // Reset
    setFormData({
     firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    category: "",
    otp: "",
    contactNumber: "",
    aadharNumber: "",
    });
    setAccountType(ACCOUNT_TYPE.BENEFICIARY);
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
      {/* <div className="flex gap-x-4"> */}
      <label className="flex-1">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-customGray">
          First Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleOnChange}
          placeholder="Enter first name"
          className="form-style w-full"
        />
      </label>
      <label className="flex-1">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-customGray">
          Middle Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="middleName"
          value={middleName}
          onChange={handleOnChange}
          placeholder="Enter middle name"
          className="form-style w-full"
        />
      </label>
      <label className="flex-1">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-customGray">
          Last Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleOnChange}
          placeholder="Enter last name"
          className="form-style w-full"
        />
      </label>
      {/* </div> */}

      <label className="w-full">
        <p className="text-[0.875rem] leading-[1.375rem] text-customGray">
          Date of Birth <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleOnChange}
          placeholder="Enter date of birth"
          className="form-style w-full"
        />
      </label>

      <div className="flex gap-x-4">
        <label className="w-full">
          <p className="text-[0.875rem] leading-[1.375rem] text-customGray">
            Age <sup className="text-pink-200">*</sup>
          </p>
          <select
            required
            name="age"
            value={age}
            onChange={handleOnChange}
            className="form-style w-full"
          >
            <option value="" disabled>Select age</option>
            {Array.from({ length: 81 }, (_, i) => i + 10).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] leading-[1.375rem] text-customGray">
            Gender <sup className="text-pink-200">*</sup>
          </p>
          <select
            required
            name="gender"
            value={gender}
            onChange={handleOnChange}
            className="form-style w-full"
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="w-full">
        <p className="text-[0.875rem] leading-[1.375rem] text-customGray">
          Category <sup className="text-pink-200">*</sup>
        </p>
        <select
          required
          name="category"
          value={category}
          onChange={handleOnChange}
          className="form-style w-full"
        >
          <option value="" disabled>Select category</option>
          <option value="General">General</option>
          <option value="Other Backward Class (OBC)">Other Backward Class (OBC)</option>
          <option value="Scheduled Caste (SC)">Scheduled Caste (SC)</option>
          <option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
        </select>
      </label>


      <label className="flex-1">
        <p className="text-[0.875rem] leading-[1.375rem] text-customGray">
          Contact Number <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="contactNumber"
          value={contactNumber}
          onChange={handleOnChange}
          placeholder="Enter contact number"
          className="form-style w-full"
        />
      </label>

      <label className="flex-1">
        <p className="text-[0.875rem] leading-[1.375rem] text-customGray">
          Aadhar Number <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="aadharNumber"
          value={aadharNumber}
          onChange={handleOnChange}
          placeholder="Enter Aadhar number"
          className="form-style w-full"
        />
      </label>

      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-[#1a73e8] hover:bg-[#003f88] py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Create Account
      </button>

    </form>
  )
}

export default SignupForm
