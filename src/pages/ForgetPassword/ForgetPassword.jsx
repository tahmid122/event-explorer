import React, { use, useEffect } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const { state } = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Reset Email sent!",
          text: "Please check your mailbox.",
          icon: "success",
        });
        window.location.href = "https://www.gmail.com";
      })
      .catch((error) => toast.error(error.message));
  };
  useEffect(() => {
    document.title = "Forget Password";
  }, []);
  return (
    <div className="my-12 w-11/12 mx-auto p-3 min-h-[calc(100vh-80px)]">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 mb-10">
          Recover Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={state ? state : ""}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary w-full">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
