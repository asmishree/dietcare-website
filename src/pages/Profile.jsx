import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Profile() {
    let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    toast.success("Logout Success")
  };

  return (
    <div>
      <button
        className="btn btn-outline-success me-2"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
