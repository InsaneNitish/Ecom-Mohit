import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Sumritra Electronics</h1>
        <p className="text-gray-700 text-lg">
          Your one-stop solution for mobile, laptop & LCD repair and accessories in Piro, Bhojpur, Bihar.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Services</h2>
          <p className="text-gray-600 mb-4">Mobile, Laptop, LCD Repairing</p>
          <Link to="#" className="text-blue-600 font-medium hover:underline">Explore Services</Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Accessories Shop</h2>
          <p className="text-gray-600 mb-4">High-quality mobile accessories at wholesale prices</p>
          <Link to="/accessories" className="text-blue-600 font-medium hover:underline">Visit Accessories</Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h2>
          <p className="text-gray-600 mb-4">Need help? Contact our support team.</p>
          <Link to="#" className="text-blue-600 font-medium hover:underline">Get Support</Link>
        </div>
      </section>
    </div>
  );
}