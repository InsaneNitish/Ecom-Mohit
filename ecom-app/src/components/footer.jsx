export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Sumritra Electronics</h2>
            <p>Your trusted destination for mobile, laptop & LCD repairs, and accessories in Piro, Bhojpur, Bihar.</p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Customer Support</a></li>
              <li><a href="#" className="hover:text-blue-600">Shops</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>📞 Rohit: 8541070259</li>
              <li>📞 Krishna: 7070078926</li>
              <li>📞 Mandal: 9142456394</li>
              <li>📧 sumitrahelp@gmail.com</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-3">Shops</h3>
            <ul className="space-y-2">
              <li>Repairing Centre: Piro, Bhojpur, Bihar (Near DSP Office)</li>
              <li>Accessories Wholesale: Piro, Bhojpur, Bihar (In front of Style Bazaar)</li>
            </ul>
          </div>
        </div>
        <div className="border-t text-center text-sm py-4">
          © {new Date().getFullYear()} Sumritra Electronics. All rights reserved.
        </div>
      </footer>
    );
  }
  