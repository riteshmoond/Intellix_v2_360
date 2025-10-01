import React from "react"
import logo from '../assets/logo.png';
import Image from '../assets/formimage.png'

export default function ContactForm({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-3xl md:h-[500px] overflow-hidden relative">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 z-20"
                    aria-label="Close"
                    onClick={ onClose }
                >
                    &times;
                </button>

                <div className="flex-1 p-8 flex flex-col justify-center">

                    <div className="flex items-center mb-2">
                        <img
                            src={logo}
                            alt=""
                            className="h-15 w-auto mr-2"
                        />
                    </div>
                    <h2 className="text-3xl font-serif mb-1 mt-2">Get In touch <span className="inline-block ml-1">&rarr;</span></h2>
                    {/* Form */}
                    <form className="mt-4 flex flex-col gap-3">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M15.5 14a5.5 5.5 0 10-11 0v.5A2.5 2.5 0 007 17h6a2.5 2.5 0 002.5-2.5V14z" /><circle cx="10" cy="7" r="4" /></svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M3 10V7a7 7 0 0114 0v3" /><rect x="3" y="10" width="14" height="7" rx="2" /><path d="M7 14h.01" /></svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Enter name of your institution"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M2 8.5V6a2 2 0 012-2h12a2 2 0 012 2v2.5" /><rect x="2" y="8.5" width="16" height="7.5" rx="2" /><path d="M6 12h.01" /></svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your contact number"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M4 4h12v12H4z" /><path d="M22 6l-10 7L2 6" /></svg>
                            </span>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Side: Image with overlay */}
                <div className="hidden md:flex flex-1 relative items-center justify-center bg-black">
                    <img
                        src={Image}
                        alt="Form Visual"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-tr-xl rounded-br-xl z-10"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                    </div>
                </div>
            </div>
        </div>
    )
}
