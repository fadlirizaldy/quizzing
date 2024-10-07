import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { IQuizType, QUIZ_TYPE } from "../utils";

const Homepage = () => {
  return (
    <Layout>
      <div className="pt-10 mx-4">
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
            {QUIZ_TYPE.map((data: IQuizType) => (
              <div
                key={data.id}
                className="h-64 cursor-pointer border border-slate-200 pb-7 rounded-lg transition-all hover:-translate-y-1"
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

      <Footer />
    </Layout>
  );
};

export default Homepage;
