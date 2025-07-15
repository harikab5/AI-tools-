import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Save login state to localStorage
    localStorage.setItem('loggedIn', 'true');

    toast.success('Login successful!');
    navigate('/home ');
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-[#1E1E1E] p-8 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-white"
          required
        />
        <button
          type="submit"
          className="bg-[#D8B4FE] text-black font-semibold w-full py-2 rounded hover:bg-[#b08ed1]"
        >
          Login
        </button>
      </form>
    </div>
  );
}