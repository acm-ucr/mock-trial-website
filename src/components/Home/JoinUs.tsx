import React from "react";

export default function MockTrialLayout() {
    return (
        <>

            <div className=" bg-sky-200 flex flex-col">
                {/* Header Space */}


                {/* Main Content */}
                <div className="mt-32 flex-1 flex items-center justify-center px-2">
                    <div className="w-full max-w-2xl">
                        {/* Blue Box with Yellow Border */}
                        <div className="bg-yellow-400 p-2 rounded-3xl">
                            <div className="bg-blue-700 text-white text-center py-12 px-8 rounded-2xl">
                                <p className="text-2xl font-bold leading-relaxed">
                                    Mock Trial is a competitive team based activity where students simulate a real trial. Students act as both the attorneys and witnesses in the trial. Students are scored based on their arguments and performance.
                                </p>
                            </div>
                        </div>

                        {/* To join email section */}
                        <div className="text-center mt-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                To join, email
                            </h2>
                            <div className="inline-block bg-yellow-400 px-8 py-4 rounded-full">
                                <a
                                    href="mailto:mocktrialucr@gmail.com"
                                    className="text-xl font-semibold text-gray-900 no-underline"
                                >
                                    mocktrialucr@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Space */}

                <div className="h-8"></div>
            </div>
        </>
    );
}