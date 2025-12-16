"use client";

import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-bear-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">🐻 BareSpoon</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-bear-200 transition-colors">Home</a>
            <a href="#recipes" className="hover:text-bear-200 transition-colors">Recipes</a>
            <a href="#ingredients" className="hover:text-bear-200 transition-colors">Ingredients</a>
            <a href="#about" className="hover:text-bear-200 transition-colors">About</a>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="hover:text-bear-200 transition-colors">Home</a>
              <a href="#recipes" className="hover:text-bear-200 transition-colors">Recipes</a>
              <a href="#ingredients" className="hover:text-bear-200 transition-colors">Ingredients</a>
              <a href="#about" className="hover:text-bear-200 transition-colors">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
