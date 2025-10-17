export default function JoinUsComponent() {
  return (
    <>
      <div
        className="bg-mocktrial-lightblue font-mocktrial-montserrat flex min-h-screen flex-col"
        
      >
        <div className="mt-8 flex flex-1 items-center justify-center px-4 py-8 sm:mt-12 sm:px-6 md:-mt-70 md:px-8">
          <div className="w-full max-w-2xl">
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
