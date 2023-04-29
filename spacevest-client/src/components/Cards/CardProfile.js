import React from "react";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("../../assets/img/team-1-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              JP Morgan
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Mumbai, India
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="mr-2 text-lg text-blueGray-400"></i>
              ESG Score - 80%  ||  ESG Rating - A
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Sector - Financials
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Exchange - NASDAQ
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              Industry - Diversified Banks
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-user mr-2 text-lg text-blueGray-400"></i>
              Employees - 256710
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-chart-simple mr-2 text-lg text-blueGray-400"></i>
              Stock Price - 729.29
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h1><b>Description</b></h1>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                JPMorgan Chase & Co. is a multinational investment bank and financial services holding company that provides a range of financial services, including investment banking, asset management, and consumer banking.
                </p>

                <h1><b>Sustainable Goals</b></h1>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                Reduce carbon emissions by 30% by 2025 and achieve net-zero carbon emissions by 2040.
                </p>
                <a
                  href="https://www.jpmorganchase.co"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Company Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
