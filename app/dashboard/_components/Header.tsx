"use client";
import React, { useState } from 'react';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                AI Mock Interview
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#dashboard"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
            >
              <span>Dashboard</span>
            </a>
            <a
              href="#questions"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
            >
              <span>Questions</span>
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50">
                <span>How it Works?</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-2">
                  <a
                    href="#getting-started"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Getting Started
                  </a>
                  <a
                    href="#interview-process"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Interview Process
                  </a>
                  <a
                    href="#ai-feedback"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    AI Feedback
                  </a>
                  <a
                    href="#improvement-tips"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Improvement Tips
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
              Start Interview
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              <a
                href="#dashboard"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </a>
              <a
                href="#questions"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-lg font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Questions
              </a>
              <div className="px-3 py-2">
                <div className="text-gray-900 font-medium mb-2">How it Works?</div>
                <div className="pl-4 space-y-1">
                  <a
                    href="#getting-started"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Getting Started
                  </a>
                  <a
                    href="#interview-process"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Interview Process
                  </a>
                  <a
                    href="#ai-feedback"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Feedback
                  </a>
                  <a
                    href="#improvement-tips"
                    className="text-gray-600 hover:text-blue-600 block py-1 text-sm transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Improvement Tips
                  </a>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Interview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;