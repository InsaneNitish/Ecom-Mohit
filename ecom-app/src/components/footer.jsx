export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Sumritra Electronics</h2>
          <p>Your trusted destination for mobile, laptop & LCD repairs, and accessories in Piro, Bhojpur, Bihar.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Customer Support</a></li>
            <li><a href="#" className="hover:text-blue-600">Shops</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>📞 Rohit: 8541070259</li>
            <li>📞 Krishna: 7070078926</li>
            <li>📞 Mandal: 9142456394</li>
            <li>📧 sumitrahelp@gmail.com</li>
          </ul>
        </div>

        {/* Shop Locations */}
        <div className="col-span-1 xl:col-span-1 space-y-6">
          {/* Shop 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold mb-1">Repairing Centre</h3>
            <p className="text-sm text-gray-600 mb-2">Piro, Bhojpur, Bihar (Near DSP Office)</p>
            <div className="w-full h-40 rounded overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?q=sumitra+mobile+repairing+shop+piro&output=embed"
                loading="lazy"
                allowFullScreen
                title="Repairing Centre Map"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=sumitra+mobile+repairing+shop+piro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Shop 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-semibold mb-1">Accessories Wholesale</h3>
            <p className="text-sm text-gray-600 mb-2">Piro, Bhojpur, Bihar (In front of Style Bazaar)</p>
            <div className="w-full h-40 rounded overflow-hidden mb-2">
              <iframe
                className="w-full h-full"
                src="https://maps.google.com/maps?q=sumitra+mobile+repairing+shop+piro&output=embed"
                loading="lazy"
                allowFullScreen
                title="Accessories Wholesale Map"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=sumitra+mobile+repairing+shop+piro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 text-center text-sm py-4">
        © {new Date().getFullYear()} Sumritra Electronics. All rights reserved.
      </div>
    </footer>
  );
}
