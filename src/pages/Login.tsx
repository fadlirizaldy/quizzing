import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="py-3 px-5 rounded-md border border-slate-200 w-1/3">
        <h1 className="text-xl text-center font-semibold">Quizzing Login</h1>

        <form action="">
          <div className="mt-5">
            <p className="text-slate-700">
              Username <span className="text-red-500 font-bold">*</span>
            </p>
            <input
              type="text"
              placeholder="Please input the username.."
              className="px-2 py-1 rounded-md border border-slate-300 w-full"
              required
            />
            <p className="text-slate-700 mt-2">
              Password <span className="text-red-500 font-bold">*</span>
            </p>
            <input
              type="password"
              placeholder="Please input the username.."
              className="px-2 py-1 rounded-md border border-slate-300 w-full"
              required
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              className="p-2 border border-slate-400 rounded-md"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
            <button
              type="submit"
              className="p-2 border border-slate-400 rounded-md bg-green-500 text-white"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
