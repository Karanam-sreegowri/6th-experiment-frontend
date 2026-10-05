import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <p>Name: Admin User</p>
      <p>Email: admin@example.com</p>

      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
}

export default Profile;