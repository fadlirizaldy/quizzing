import { useEffect, useState } from "react";
import Topbar from "../components/test/Topbar";

const TOTAL_QUESTION = 10;

const TestPage = () => {
  const [questionList, setQuestionList] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answeredQuestion, setAnsweredQuestion] = useState(
    Object.fromEntries(Array.from({ length: 10 }, (_, i) => [i + 1, undefined]))
  );

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
        );

        if (response.status === 429) {
          console.error("Too many requests. Waiting to retry...");
          // setTimeout(fetchQuestion, 10000); // Retry after 10 seconds
        } else {
          const responseData = await response.json();
          if (questionList.length === 0) {
            setQuestionList(
              responseData.results.map((data: any) => ({
                ...data,
                options: [data.correct_answer, ...data.incorrect_answers].sort(
                  () => Math.random() - 0.5
                ),
              }))
            );
          }
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestion();
  }, []);

  console.log("ques", questionList);

  return (
    <div className="h-screen overflow-hidden">
      <Topbar />

      <section className="flex h-full">
        <div className="border border-r-2 w-1/6 p-3">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(10)].map((data, idx) => (
              <div
                key={idx}
                className={`p-2 border border-slate-400 h-10 flex items-center justify-center cursor-pointer text-sm ${
                  idx + 1 === currentQuestion
                    ? "bg-slate-200"
                    : answeredQuestion[idx + 1]
                    ? "bg-green-500 text-white"
                    : "bg-white hover:bg-slate-50"
                }`}
                onClick={() => setCurrentQuestion(idx + 1)}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/6 h-full p-10">
          {questionList.length > 0 &&
            questionList?.map((data, idx) => {
              return (
                <div
                  className={`${
                    idx + 1 !== currentQuestion ? "hidden" : "block"
                  }`}
                >
                  <h3 className="text-lg font-semibold">
                    {idx + 1}.{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: data?.question }}
                    ></span>
                  </h3>
                  <form className="flex flex-col gap-2 mt-2 ms-3">
                    {data?.options?.map((item, idx2) => (
                      <div
                        key={idx2}
                        className="flex items-center gap-2 w-fit"
                        onClick={() => {
                          setAnsweredQuestion((prev) => ({
                            ...prev,
                            [idx + 1]: item,
                          }));
                          setTimeout(() => {
                            setCurrentQuestion((prev) => prev + 1);
                          }, 1000);
                        }}
                      >
                        <input
                          type="radio"
                          name="option"
                          value={item}
                          className="cursor-pointer"
                          checked={answeredQuestion[idx + 1] === item}
                        />
                        <label className="cursor-pointer">{item}</label>
                      </div>
                    ))}
                  </form>
                </div>
              );
            })}

          <div className="flex items-center justify-center gap-2 mt-10">
            {currentQuestion > 1 && (
              <button
                className="px-2 py-1 border border-slate-200 w-24 bg-gray-200 rounded-md"
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
              >
                {"<"} Previous
              </button>
            )}
            {currentQuestion !== TOTAL_QUESTION && (
              <button
                className="px-2 py-1 border border-slate-200 w-24 bg-green-500 rounded-md text-white"
                onClick={() => setCurrentQuestion((prev) => prev + 1)}
              >
                Next {">"}
              </button>
            )}
            {currentQuestion === TOTAL_QUESTION && (
              <button
                className="px-2 py-1 border border-slate-200 w-24 bg-green-500 rounded-md text-white"
                // onClick={() => setCurrentQuestion((prev) => prev + 1)}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default TestPage;
