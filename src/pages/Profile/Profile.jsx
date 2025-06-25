import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    if (name || photoURL) {
      let obj = {
        displayName: name.trim() ? name : user.displayName,
        photoURL: photoURL.trim() ? photoURL : user.photoURL,
      };
      updateUserProfile(obj)
        .then(() => {
          Swal.fire({
            title: "Updated!",
            text: "Profile Update Successful.",
            icon: "success",
          });
          navigate("/profile");
        })
        .catch((error) => toast.error(error.message));
    } else {
      setError("Must add Name or PhotoURL");
    }
  };
  useEffect(() => {
    document.title = "My Profile";
  }, []);
  return (
    <div className="my-12 w-11/12 mx-auto p-3 space-y-5 flex flex-col items-center justify-center">
      <div className="flex md:flex-row flex-col md:items-end gap-6 w-full md:w-auto">
        {user?.photoURL ? (
          <img
            referrerPolicy="no-referrer"
            className="w-52 h-52 rounded"
            src={user.photoURL}
            alt=""
          />
        ) : (
          <img
            className="w-52 h-52 rounded"
            src="https://i.ibb.co.com/RGRxPqnG/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-fema.jpg"
            alt="photo"
          />
        )}

        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl">
            <span className="font-bold">Name:</span>{" "}
            {user ? user.displayName : ""}
          </h1>
          <p className="text-xl sm:text-2xl">
            <span className="font-bold">Email: </span>
            {user?.email}
          </p>
          <p className="text-xl sm:text-2xl">
            <span className="font-bold">PhotoURL: </span>
            {user?.photoURL ? (
              <a href={user?.photoURL} className="underline">
                Photo
              </a>
            ) : (
              "none"
            )}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-6/12">
        <h4 className="text-xl sm:text-2xl font-semibold">Update Profile</h4>
        <form onSubmit={handleUpdate} className="w-full mt-3">
          <div className="flex sm:flex-row flex-col items-center justify-between gap-2 sm:gap-6">
            <input
              className="w-full outline-none rounded border border-slate-200 py-3 px-5"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="w-full outline-none rounded border border-slate-200 py-3 px-5"
              type="text"
              name="photoURL"
              placeholder="Your PhotoURL"
            />
          </div>
          {error && (
            <p className="text-sm text-center text-red-600 mt-2">{error}</p>
          )}
          <button type="submit" className="btn btn-primary w-full mt-3">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
