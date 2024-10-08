import React from "react";

const TestPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-14 border border-b-2 flex items-center justify-center">
        <h4 className="font-medium text-lg">10:00</h4>
      </div>

      <section className="flex h-full">
        <div className="border border-r-2 w-1/5 p-3">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(15)].map((data, idx) => (
              <div className="p-2 border border-slate-400 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-50 text-sm">
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default TestPage;
