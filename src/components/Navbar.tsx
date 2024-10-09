import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthStore } from "../store";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const user = useAuthStore((state) => state.user);
  const setAuthed = useAuthStore((state) => state.setIsLoggedIn);
  const isAuthed = useAuthStore((state) => state.isLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:3000/users?id=${token}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data[0]);
          setAuthed(true);
        });
    }
  }, [setAuthed, token]);

  const handleLogout = () => {
    setAuthed(false);
    setUser(undefined as any);
    Cookies.remove("token");
  };

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
          {isAuthed ? (
            <>
              <h5>Hi! {user?.username}</h5>
              <button
                className="px-2 py-1 rounded-md border border-slate-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
