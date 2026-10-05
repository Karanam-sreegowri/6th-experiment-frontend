import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard</p>

      <Link to="/profile">Go to Profile</Link>

      <br />
      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;