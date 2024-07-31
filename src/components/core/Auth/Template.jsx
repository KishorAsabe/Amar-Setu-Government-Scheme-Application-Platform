// src\components\core\Auth\Template.jsx
import { useSelector } from "react-redux"

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto w-11/12 max-w-[600px] md:mx-0">
          <div className="flex justify-center ">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-customGray">
              {title}
            </h1>
          </div>

          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-800">{description1}</span>{" "}
            <span className="font-edu-sa font-bold italic text-blue-100">
              {description2}
            </span>
          </p>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>

      )}
    </div>
  )
}

export default Template
