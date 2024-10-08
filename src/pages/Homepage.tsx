import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { IQuizType } from "../utils";
import { useEffect, useState } from "react";

const Homepage = () => {
  const navigate = useNavigate();

  const [quizTypeList, setQuizTypeList] = useState<IQuizType[]>();

  useEffect(() => {
    const fetchQuizList = async () => {
      const response = await fetch("http://localhost:3000/quiz_list");
      const responseData = await response.json();
      setQuizTypeList(responseData);
    };

    fetchQuizList();
  }, []);

  return (
    <Layout>
      <div className="pt-10">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-bold text-3xl">Welcome to Quizzing</h1>
          <p className="w-1/2 text-center text-gray-600">
            Your ultimate destination for fun, learning, and discovery! Dive
            into a world of quizzes designed to challenge your mind, expand your
            knowledge, and spark your curiosity.
          </p>
        </div>

        <section className="mt-10 mx-14">
          <h2 className="text-lg font-semibold">Pick a quiz</h2>
          <div className="grid grid-cols-4 gap-4 mt-2">
            {quizTypeList?.map((data: IQuizType) => (
              <div
                key={data.id}
                className="h-64 cursor-pointer border border-slate-200 pb-7 rounded-lg transition-all hover:-translate-y-1"
                onClick={() => navigate(`/quiz/${data.id}`)}
              >
                <img
                  src={data.icon}
                  alt=""
                  className="object-cover h-3/4 w-full"
                />
                <div className="p-2">
                  <h4 className="font-semibold">{data.title}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage;
