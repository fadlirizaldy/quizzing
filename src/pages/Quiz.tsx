import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { IQuizType } from "../utils";

const QuizPage = () => {
  let { quizId } = useParams();

  const [dataPage, setDataPage] = useState<IQuizType | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizDetail = async () => {
      const response = await fetch(`http://localhost:3000/quiz_list/${quizId}`);
      const responseData = await response.json();
      setDataPage(responseData);
    };

    fetchQuizDetail();
  }, []);

  return (
    <Layout>
      <div className="flex gap-5 mt-6">
        <img src={dataPage?.icon} alt="" className="w-36 h-36" />
        <div className="">
          <h2 className="font-semibold text-2xl">{dataPage?.title}</h2>
          <p className="text-slate-500 w-2/3">{dataPage?.description}</p>
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p>Question : 10</p>
        <p>Time : 10:00</p>
      </div>

      <div className="mt-4">
        <button
          className="py-2 px-5 border border-slate-200 rounded-lg text-white bg-green-500"
          onClick={() => navigate(`/quiz/${quizId}/test`)}
        >
          Start Quiz
        </button>
      </div>
    </Layout>
  );
};

export default QuizPage;
