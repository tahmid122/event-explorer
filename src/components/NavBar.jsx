import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import LoadingSpinner from "./LoadingSpinner";

const NavBar = () => {
  const { user, logOutUser, loading } = use(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "Successfully Logged Out.",
          icon: "success",
        });
      })
      .catch((error) => console.log(error.message));
  };
  const links = (
    <>
      <li>
        <NavLink className={"rounded-none"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"rounded-none"} to={"/my-reviews"}>
          My Reviews
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow nav-bar"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="text-2xl md:text-3xl font-semibold hidden sm:block"
        >
          Ev<span className="text-primary font-extrabold">ent</span> Explo
          <span className="text-primary font-extrabold">rer</span>
        </Link>
        <Link to={"/"} className="text-2xl md:text-3xl font-semibold sm:hidden">
          E.Explo
          <span className="text-primary font-extrabold">rer</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 nav-bar">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex gap-4 items-center">
            <Link to={"/profile"}>
              <div
                className="tooltip tooltip-bottom flex items-center justify-center "
                data-tip={user.displayName}
              >
                {user.photoURL ? (
                  <img
                    referrerPolicy="no-referrer"
                    className="w-10  rounded-full border border-primary"
                    src={user.photoURL}
                    alt="image"
                  />
                ) : (
                  <FaUserCircle size={40} />
                )}
              </div>
            </Link>
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
