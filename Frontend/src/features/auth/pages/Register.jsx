import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth';
const Register = () => {

  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin({ email, username, password });
      navigate("/");
    };

    if (loading) {
      return (
        <main className="bg-gray-800 h-screen text-amber-300 text-4xl">
          Loading....
        </main>
      );
    }


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      {/* The card container: expands padding on medium screens and up */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        {/* Header Section with added margin-bottom for "breathing space" */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Enter your credentials to create your account
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Username Field Group */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
              Username
            </label>
            <input
              type="test"
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:border-blue-500 outline-none transition-all duration-200"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          {/* Email Field Group */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:border-blue-500 outline-none transition-all duration-200"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Password Field Group */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Password
              </label>
            </div>
            <input
              type="password"
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:border-blue-500 outline-none transition-all duration-200"
              placeholder="••••••••"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md shadow-blue-200 transition duration-300 transform active:scale-[0.99] hover:shadow-lg">
              Register
            </button>
          </div>
        </form>

        {/* Footer Section */}
        <div className="mt-10 pt-8 border-t border-gray-50 text-center">
          <p className="text-gray-500 text-sm">
            Do have account?{" "}
            <Link
              className="text-blue-600 hover:underline font-semibold"
              to={"/login"}
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register
