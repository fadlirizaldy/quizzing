import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDataAuth {
  id?: string;
  username: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<IDataAuth>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPostLogin = async () => {
    setIsLoading(true);
    console.log("DATA", data);
    try {
      const response = await fetch(
        `http://localhost:3000/users?username=${data?.username}&password=${data?.password}`
      );
      const responseData: IDataAuth[] = await response.json();

      if (responseData.length === 0) {
        toast.error("Username or password is wrong", {
          autoClose: 1500,
        });
        return;
      }

      if (responseData.length > 0) {
        const lastUrl = localStorage.getItem("lastUrl");
        localStorage.setItem("token", responseData[0].id!);
        toast.success("Success Login!", {
          autoClose: 1500,
        });
        navigate(lastUrl || "/");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPostLogin();
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="py-3 px-5 rounded-md border border-slate-200 w-1/3">
        <h1 className="text-xl text-center font-semibold">Quizzing Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <div className="mt-5">
            <p className="text-slate-700">
              Username <span className="text-red-500 font-bold">*</span>
            </p>
            <input
              name="username"
              type="text"
              placeholder="Please input the username.."
              className="px-2 py-1 rounded-md border border-slate-300 w-full"
              required
              onChange={(e) =>
                setData((prev: any) => {
                  return { ...prev, [e.target.name]: e.target.value };
                })
              }
            />
            <p className="text-slate-700 mt-2">
              Password <span className="text-red-500 font-bold">*</span>
            </p>
            <input
              name="password"
              type="password"
              placeholder="Please input the username.."
              className="px-2 py-1 rounded-md border border-slate-300 w-full"
              required
              onChange={(e) =>
                setData((prev: any) => {
                  return { ...prev, [e.target.name]: e.target.value };
                })
              }
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="p-2 border border-slate-400 rounded-md"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
            <button
              type="submit"
              className="p-2 border border-slate-400 rounded-md bg-green-500 text-white"
              disabled={isLoading}
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
