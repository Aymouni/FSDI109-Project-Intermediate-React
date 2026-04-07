import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function Profile() {
  const user = useContext(GlobalContext).user;

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-1">My Profile</h1>
      <p className="text-center text-muted mb-4">Your personal information</p>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-4 text-center h-100">
            <img
              src={user.avatar}
              alt="avatar"
              className="rounded-circle mx-auto mb-3 object-fit-cover"
              width="150"
              height="150"
            />
            <h5 className="fw-bold">
              {user.firstName} {user.lastName}
            </h5>
            <p className="text-muted">{user.email}</p>
            <button className="btn btn-outline-success btn-sm mt-2">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm p-4 h-100">
            <h5 className="fw-bold text-center mb-3">Shipping Address</h5>
            <hr />
            <p>
              <span className="fw-bold">Street:</span> {user.address.street}
            </p>
            <p>
              <span className="fw-bold">City:</span> {user.address.city}
            </p>
            <p>
              <span className="fw-bold">State:</span> {user.address.state}
            </p>
            <p>
              <span className="fw-bold">ZIP:</span> {user.address.zip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
