import React from "react";

export default function MockTrialLayout() {
  return (
    <>
      <div
        className="flex min-h-screen flex-col"
        style={{ backgroundColor: "rgb(233, 244, 251)" }}
      >
        {/* Header Space */}

        {/* Main Content */}
        <div className="mt-8 flex flex-1 items-center justify-center px-4 py-8 sm:mt-12 sm:px-6 md:-mt-70 md:px-8">
          <div className="w-full max-w-2xl">
            {/* Blue Box with Yellow Border */}
            <div className="rounded-2xl bg-yellow-400 p-1.5 sm:rounded-3xl sm:p-2">
              <div className="rounded-xl bg-blue-700 px-4 py-8 text-center text-white sm:rounded-2xl sm:px-6 sm:py-10 md:px-8 md:py-12">
                <p className="text-base leading-relaxed font-bold sm:text-lg md:text-xl lg:text-2xl">
                  Mock Trial is a competitive team based activity where students
                  simulate a real trial. Students act as both the attorneys and
                  witnesses in the trial. Students are scored based on their
                  arguments and performance.
                </p>
              </div>
            </div>

            {/* To join email section */}
            <div className="text-center sm:mt-10 md:mt-12 md:-mb-50">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl">
                To join, email
              </h2>
              <div className="inline-block rounded-full bg-yellow-400 px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4">
                <a
                  href="mailto:mocktrialucr@gmail.com"
                  className="text-sm font-semibold break-all text-gray-900 underline sm:text-base md:text-lg lg:text-xl"
                >
                  mocktrialucr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Space */}

        <div className="h-4 sm:h-6 md:h-8"></div>
      </div>
    </>
  );
}
