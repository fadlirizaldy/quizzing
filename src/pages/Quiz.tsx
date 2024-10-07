import { useParams } from "react-router-dom";

const QuizPage = () => {
  let { userId } = useParams();
  return (
    <div>
      <h2>QuizPage</h2>
      <p>ID: {userId}</p>
    </div>
  );
};

export default QuizPage;
