"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const navigate = useNavigate()
 const [mobileOpen, setMobileOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false) 
  return (
     <>
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-around px-4">
        
        {/* Logo */}
       <img 
  src={logo} 
  alt="Logo" 
  className="h-12 cursor-pointer" 
  onClick={() => navigate("/")} 
/>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <div className="relative group">
            <a href="/products" className="hover:text-primary flex items-center">
              Products
              <svg
                className="ml-1 h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <a href="/products/genius-strix" className="block px-4 py-2 hover:bg-gray-100">Genius Strix</a>
              <a href="/products/cogni-campux" className="block px-4 py-2 hover:bg-gray-100">Cogni CampuX</a>
              <a href="/products/hms-hostello" className="block px-4 py-2 hover:bg-gray-100">HMS Hostello</a>
            </div>
          </div>

          <a href="/pricing" className="hover:text-primary">Pricing</a>
          <a href="/support" className="hover:text-primary">Help & Support</a>
          <a href="/talk-to-sale" className="hover:text-primary">Talk to Sales</a>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button onClick={() => setFormOpen(true)}>Get Started</Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden px-4 pb-4 bg-white border-b transition-all duration-200 ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-2 font-medium">
          <a href="/products" className="hover:text-primary">Products</a>
          <a href="/pricing" className="hover:text-primary">Pricing</a>
          <a href="/support" className="hover:text-primary">Help & Support</a>
          <a href="/talk-to-sale" className="hover:text-primary">Talk to Sales</a>
          <Button onClick={() => setFormOpen(true)} className="mt-2 w-full">Get Started</Button>
        </div>
      </nav>
    </header>
    {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
   
    
    
    </>
  )
}
