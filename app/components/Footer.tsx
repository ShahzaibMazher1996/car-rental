export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 mt-12 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-600">Email: support@example.com</p>
          <p className="text-gray-600">Phone: (555) 123-4567</p>
          <p className="text-gray-600">Address: 123 Auto Lane, Toronto, ON</p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#f3443e] transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#f3443e] transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#f3443e] transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#f3443e] transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-gray-600">
            {/* Facebook */}
            <a href="#" className="hover:text-[#f3443e] transition-colors duration-300" aria-label="Facebook">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.5 9.87v-6.99h-2.1v-2.88h2.1V9.41c0-2.07 1.23-3.22 3.12-3.22.9 0 1.84.16 1.84.16v2.02h-1.04c-1.02 0-1.34.63-1.34 1.27v1.54h2.28l-.36 2.88h-1.92v6.99A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:text-[#f3443e] transition-colors duration-300" aria-label="Twitter">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 19c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.52A8.18 8.18 0 0022 5.92a8.333 8.333 0 01-2.357.637 4.115 4.115 0 001.804-2.263 8.273 8.273 0 01-2.605.982 4.107 4.107 0 00-7.003 3.742A11.656 11.656 0 013 4.87a4.082 4.082 0 001.27 5.468 4.093 4.093 0 01-1.86-.507v.05a4.107 4.107 0 003.292 4.025 4.1 4.1 0 01-1.853.07 4.108 4.108 0 003.832 2.85A8.233 8.233 0 012 17.54 11.616 11.616 0 008 19" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-[#f3443e] transition-colors duration-300" aria-label="Instagram">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 11-7.999.001 4 4 0 017.999-.001z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">Subscribe for updates</p>
          <button className="bg-[#f3443e] text-white px-6 py-2 rounded-full hover:bg-[#c5302b] transition duration-300 w-full max-w-xs">
            SUBSCRIBE
          </button>
        </div>
      </div>

    </footer>
  );
}
