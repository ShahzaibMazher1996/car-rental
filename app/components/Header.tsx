'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Current Rates', href: '#' },
  { name: 'Used Car Guide', href: '#' },
  { name: 'Car Loan Calculator', href: '#' },
];

const resourceLinks = [
  { name: 'Blog', href: '#' },
  { name: 'FAQ', href: '#' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo + Nav */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="CarLoans Canada"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xs text-gray-400">
                Powered by <span className="font-semibold text-[#f3443e]">XYZ</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#f3443e] focus:outline-none focus:ring-2 focus:ring-[#f3443e] transition"
                >
                  {link.name}
                </Link>
              ))}

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-[#f3443e] focus:outline-none focus:ring-2 focus:ring-[#f3443e] transition"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Resources
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="absolute z-20 mt-2 w-40 bg-white rounded shadow-lg p-2">
                    {resourceLinks.map(link => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f3443e]/10 rounded transition"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#f3443e] px-6 py-2 text-sm font-semibold text-white hover:bg-[#d93933] focus:outline-none focus:ring-2 focus:ring-[#f3443e] transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          mobileOpen ? 'max-h-screen py-4 px-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="space-y-3 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-[#f3443e] transition"
            >
              {link.name}
            </Link>
          ))}

          <details className="group">
            <summary className="cursor-pointer text-gray-700 hover:text-[#f3443e] transition">
              Resources
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              {resourceLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-[#f3443e] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="#"
            className="block text-center mt-3 rounded-full bg-[#f3443e] px-6 py-2 text-white font-semibold hover:bg-[#d93933] transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
