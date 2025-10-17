export default function MockTrialLayout() {
  return (
    <>
      <div
        className="font-mocktrial-montserrat flex min-h-screen flex-col"
        style={{ backgroundColor: "mocktrial-seablue" }}
      >
        <div className="mt-8 flex flex-1 items-center justify-center px-4 py-8 sm:mt-12 sm:px-6 md:-mt-70 md:px-8">
          <div className="w-full max-w-2xl">
            <div className="bg-mocktrial-yellow rounded-2xl p-1.5 sm:rounded-3xl sm:p-2">
              <div className="bg-mocktrial-blue rounded-xl px-4 py-8 text-center text-white sm:rounded-2xl sm:px-6 sm:py-10 md:px-8 md:py-12">
                {/* <p className="text-base leading-relaxed font-semibold sm:text-lg md:text-xl lg:text-2xl">
                  Mock Trial is a competitive team based activity where students
                  simulate a real trial. Students act as both the attorneys and
                  witnesses in the trial. Students are scored based on their
                  arguments and performance.
                </p> */}
              </div>
            </div>

            <div className="text-center sm:mt-15 md:mt-12 md:-mb-50">
              <p className="text-mocktrial-darkblue mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">
                To join, email
              </p>
              <div className="bg-mocktrial-yellow inline-block rounded-full px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4">
                <div className="text-mocktrial-darkblue text-sm font-semibold break-all underline sm:text-base md:text-lg lg:text-xl">
                  mocktrialucr@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-4 sm:h-6 md:h-8"></div>
      </div>
    </>
  );
}
