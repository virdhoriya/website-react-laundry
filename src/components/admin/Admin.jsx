import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="fixed inset-0 bg-white z-[999] text-center p-16">
      <h3>Admin Login</h3>
      <Link to="/" className="text-purple-500 hover:underline block mt-4">back to home</Link>
    </div>
  );
};

export default Admin;
