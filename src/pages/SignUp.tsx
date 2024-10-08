import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDataAuth {
  username: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IDataAuth>();

  const fetchPostRegister = async () => {
    setIsLoading(true);
    const body = { id: nanoid(), ...data };
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (response.status === 201) {
        toast.success("Success Register! Login to continue", {
          autoClose: 1000,
        });
        navigate("/login");
      }
      console.log("RESPONSEEE POST REG", response);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPostRegister();
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="py-3 px-5 rounded-md border border-slate-200 w-1/3">
        <h1 className="text-xl text-center font-semibold">Quizzing Signup</h1>

        <form action="" className="mt-5" onSubmit={handleSubmit}>
          <div>
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
              type="password"
              name="password"
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
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button
              type="submit"
              className="p-2 border border-slate-400 rounded-md bg-green-500 text-white"
              disabled={isLoading}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
