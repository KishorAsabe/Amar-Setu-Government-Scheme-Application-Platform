// src\components\core\Auth\LoginForm.jsx
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// import { login } from "../../../services/operations/authAPI"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../Common/Tab"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)
  const [formData, setFormData] = useState({
    aadharCardNumber: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { aadharCardNumber, email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    // Add the appropriate login logic here
    // dispatch(login(formData, navigate))
  }

  const tabData = [
    {
      id: 1,
      tabName: "Beneficiary",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Operator",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]

  return (
    <div>
      {/* Tab */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col gap-y-4">
        {accountType === ACCOUNT_TYPE.STUDENT ? (
          <label className="w-full flex flex-col">
            <p className=" sm:ml-[-27.75rem] xs:ml-[-14.5rem] mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Aadhar Card Number <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="aadharCardNumber"
              value={aadharCardNumber}
              onChange={handleOnChange}
              placeholder="Enter Aadhar Card Number"
              className="form-style w-full"
            />
          </label>
        ) : (
          <>
            <label className="w-full flex flex-col">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Email Address <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email address"
                className="form-style w-full"
              />
            </label>
            <label className="relative w-full flex flex-col">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="form-style w-full !pr-10"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </>
        )}
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm
