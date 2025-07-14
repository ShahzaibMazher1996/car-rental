'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT SIDE: Logo + Nav */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="CarLoans Canada" className="h-8 w-auto" />
              <span className="text-xs text-gray-400">
                Powered by <span className="font-bold text-red-600">Equifax</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 items-center">
              <Link href="#" className="text-sm text-gray-700 hover:text-green-600">Current Rates</Link>
              <Link href="#" className="text-sm text-gray-700 hover:text-green-600">Used Car Guide</Link>
              <Link href="#" className="text-sm text-gray-700 hover:text-green-600">Car Loan Calculator</Link>
              <div className="relative group">
                <button className="flex items-center text-sm text-gray-700 hover:text-green-600">
                  Resources
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded p-2">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                </div>
              </div>
            </nav>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="inline-block rounded-full bg-[#003333] px-8 py-2 text-sm font-semibold text-white hover:bg-green-800 transition"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
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
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-1 px-4 py-3">
            <Link href="#" className="block text-gray-700 py-2">Current Rates</Link>
            <Link href="#" className="block text-gray-700 py-2">Used Car Guide</Link>
            <Link href="#" className="block text-gray-700 py-2">Car Loan Calculator</Link>
            <details className="py-2">
              <summary className="cursor-pointer text-gray-700">Resources</summary>
              <div className="pl-4 mt-1 space-y-1">
                <Link href="#" className="block text-gray-700">Blog</Link>
                <Link href="#" className="block text-gray-700">FAQ</Link>
              </div>
            </details>
            <Link
              href="#"
              className="inline-block w-full text-center rounded-full bg-green-900 px-4 py-2 text-white font-semibold hover:bg-green-800 transition"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
