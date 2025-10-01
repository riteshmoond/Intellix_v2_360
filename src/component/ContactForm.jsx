import React, { useState } from "react";
import logo from '../assets/logo.png';
import Image from '../assets/formimage.png';

export default function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        institution: "",
        contact: "",
        email: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // validation check
        if (!formData.name || !formData.institution || !formData.contact || !formData.email) {
            setError("⚠️ Please fill in all the fields");
            return;
        }

        setError(""); // clear error
        console.log("Form Submitted ✅", formData);

        // yaha aap API call ya backend submit kar sakte ho
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-3xl md:h-[500px] overflow-hidden relative">
                
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 z-20"
                    aria-label="Close"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Left Side Form */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-2">
                        <img src={logo} alt="" className="h-15 w-auto mr-2" />
                    </div>
                    <h2 className="text-3xl font-serif mb-1 mt-2">
                        Get In touch <span className="inline-block ml-1">&rarr;</span>
                    </h2>

                    {/* Error Message */}
                    {error && (
                        <div className="text-red-600 text-sm mb-3 font-medium">{error}</div>
                    )}

                    {/* Form */}
                    <form className="mt-2 flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="institution"
                            placeholder="Enter name of your institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="contact"
                            placeholder="Enter your contact number"
                            value={formData.contact}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
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
                </div>
            </div>
        </div>
    );
}
