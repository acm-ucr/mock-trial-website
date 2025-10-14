import React from "react";

export default function MockTrialLayout() {
    return (
        <>

            <div className="flex flex-col min-h-screen" style={{ backgroundColor: "rgb(233, 244, 251)" }}>
                {/* Header Space */}


                {/* Main Content */}
                <div className="mt-8 sm:mt-12 md:-mt-70 flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-8">
                    <div className="w-full max-w-2xl">
                        {/* Blue Box with Yellow Border */}
                        <div className="bg-yellow-400 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl">
                            <div className="bg-blue-700 text-white text-center py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 rounded-xl sm:rounded-2xl">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
                                    Mock Trial is a competitive team based activity where students simulate a real trial. Students act as both the attorneys and witnesses in the trial. Students are scored based on their arguments and performance.
                                </p>
                            </div>
                        </div>

                        {/* To join email section */}
                        <div className="text-center sm:mt-10 md:mt-12 md:-mb-50">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                                To join, email
                            </h2>
                            <div className="inline-block bg-yellow-400 px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full">
                                <a
                                    href="mailto:mocktrialucr@gmail.com"
                                    className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 underline break-all"
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