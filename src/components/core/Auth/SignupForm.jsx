// src\components\core\Auth\SignupForm.jsx
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// import { sendOtp, verifyOtp } from "../../../services/operations/authAPI"
// import { setSignupData } from "../../../slices/authSlice"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
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
  })

  const {
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    age,
    gender,
    category,
    otp,
    contactNumber,
    aadharNumber,
  } = formData

  const [isOtpSent, setIsOtpSent] = useState(false)

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // Add the appropriate signup logic here
    dispatch(signup(formData, navigate))
  }

  const getOtp = async () => {
    try {
      // Call your API to send OTP
      // await sendOtp({ contactNumber })
      setIsOtpSent(true)
      toast.success("OTP sent to your contact number!")
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.")
    }
  }

  const verifyOtp = async () => {
    try {
      // Call your API to verify OTP
      // await verifyOtp({ contactNumber, otp })
      toast.success("OTP verified successfully!")
    } catch (error) {
      toast.error("Invalid OTP. Please try again.")
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
      <div className="flex gap-x-4">
        <label className="flex-1">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
      </div>

      <label className="flex items-center w-full gap-x-4">
        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Date of Birth <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={handleOnChange}
          placeholder="Enter date of birth"
          className="form-style flex-1"
        />
      </label>

      <label className="flex items-center w-full gap-x-4">
        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Age <sup className="text-pink-200">*</sup>
        </p>
        <select
          required
          name="age"
          value={age}
          onChange={handleOnChange}
          className="form-style flex-1"
        >
          <option value="" disabled>Select age</option>
          {Array.from({ length: 81 }, (_, i) => i + 10).map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center w-full gap-x-4">
        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Gender <sup className="text-pink-200">*</sup>
        </p>
        <select
          required
          name="gender"
          value={gender}
          onChange={handleOnChange}
          className="form-style flex-1"
        >
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className="flex items-center w-full gap-x-4">
        <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Category <sup className="text-pink-200">*</sup>
        </p>
        <select
          required
          name="category"
          value={category}
          onChange={handleOnChange}
          className="form-style flex-1"
        >
          <option value="" disabled>Select category</option>
          <option value="General">General</option>
          <option value="Other Backward Class (OBC)">Other Backward Class (OBC)</option>
          <option value="Scheduled Caste (SC)">Scheduled Caste (SC)</option>
          <option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
        </select>
      </label>

      <div className="flex items-center w-full gap-x-4 mt-4">
        <label className="flex-1 flex items-center gap-x-2">
          <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Contact Number <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="contactNumber"
            value={contactNumber}
            onChange={handleOnChange}
            placeholder="Enter contact number"
            className="form-style flex-1"
          />
        </label>
        <button
          type="button"
          onClick={getOtp}
          className="bg-pink-500 text-white py-2 px-4 rounded"
        >
          Get OTP
        </button>
      </div>


      {isOtpSent && (
        <div className="flex items-center w-full gap-x-4 mt-4">
          <label className="flex-1 flex items-center gap-x-2">
            <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
              OTP <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="otp"
              value={otp}
              onChange={handleOnChange}
              placeholder="Enter OTP"
              className="form-style flex-1"
            />
          </label>
          <button
            type="button"
            onClick={verifyOtp}
            className="bg-caribbeangreen-500 text-white py-2 px-4 rounded"
          >
            Verify OTP
          </button>
        </div>
      )}

<div className="flex items-center w-full gap-x-4 mt-4">
  <label className="flex-1 flex items-center gap-x-2">
    <p className="text-[0.875rem] leading-[1.375rem] text-richblack-5">
      Aadhar Number <sup className="text-pink-200">*</sup>
    </p>
    <input
      required
      type="text"
      name="aadharNumber"
      value={aadharNumber}
      onChange={handleOnChange}
      placeholder="Enter Aadhar number"
      className="form-style flex-1"
    />
  </label>
</div>

      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Create Account
      </button>

    </form>
  )
}

export default SignupForm
