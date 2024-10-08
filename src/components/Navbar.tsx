import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-14 border border-b-2 flex items-center">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <h2
          className="font-semibold italic cursor-pointer"
          onClick={() => navigate("/")}
        >
          Quizzing
        </h2>
        <div className="flex items-center gap-3 text-sm">
          <button
            className="px-2 py-1 rounded-md border border-slate-300"
            onClick={() => navigate("/sign-up")}
          >
            Signup
          </button>
          <button
            className="px-2 py-1 rounded-md border border-slate-300 bg-green-500 text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
