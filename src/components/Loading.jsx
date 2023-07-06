import React, { useState, useEffect } from 'react';

const Loading = () => {

    return (
        <div className="fixed z-[100] flex items-center justify-center w-full min-h-screen backdrop-blur-md">
            <div className="flex flex-col items-center">
                <svg
                    className="animate-spin h-10 w-10 text-white mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-4a4.001 4.001 0 01-4-4V7l-4 5.291z"
                    ></path>
                </svg>
                <p className="text-white font-Bellefair md:text-lg lg:text-2xl">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;
