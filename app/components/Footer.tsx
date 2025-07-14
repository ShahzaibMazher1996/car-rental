export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 mt-12 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-600">Email: support@example.com</p>
          <p className="text-gray-600">Phone: (555) 123-4567</p>
          <p className="text-gray-600">Address: 123 Auto Lane, Toronto, ON</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-green-900">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-900">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-green-900">Contact</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-900"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-600 hover:text-green-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-green-900"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">Subscribe for updates</p>
          <button className="bg-green-900 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p>&copy; 2025 Auto Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}
