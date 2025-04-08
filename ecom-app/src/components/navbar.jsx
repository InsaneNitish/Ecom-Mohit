import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', link: '/' },
  {
    name: 'Shops',
    subItems: [
      { name: 'Repairing Shop', link: '/repair' },
      { name: 'Accessories Shop', link: '/accessories' },
    ],
  },
  {
    name: 'Customer Support',
    subItems: [
      { name: 'Rohit: 8541070259', link: '#' },
      { name: 'Krishna: 7070078926', link: '#' },
      { name: 'Mandal: 9142456394', link: '#' },
      { name: 'Email: sumitrahelp@gmail.com', link: '#' },
    ],
  },
  {
    name: 'Address',
    subItems: [
      { name: 'Repairing Centre: Piro, Bhojpur, Bihar (Near DSP Office)', link: '#' },
      { name: 'Accessories Wholesale: Piro, Bhojpur, Bihar (In front of Style Bazaar)', link: '#' },
    ],
  },
  {
    name: 'Services',
    subItems: [
      { name: 'Mobile Repairing', link: '/repair' },
      { name: 'Laptop Repairing', link: '/repair' },
      { name: 'LCD Repair', link: '/repair' },
    ],
  },
];

const Dropdown = ({ items }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute bg-white shadow-xl rounded-xl mt-2 p-4 w-72 space-y-2 z-10"
  >
    {items.map((item, idx) => (
      <a
        key={idx}
        href={item.link}
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
      >
        {item.name}
      </a>
    ))}
  </motion.div>
);

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});

  const toggleMobileSubMenu = (index) => {
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand/Logo */}
          <h1 className="text-xl font-bold text-blue-600">Sumritra Electronics</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button className="flex items-center space-x-1 font-medium text-gray-800 hover:text-blue-600 transition">
                  <span>{item.name}</span>
                  {item.subItems && <ChevronDown size={16} />}
                </button>
                <AnimatePresence>
                  {openIndex === index && item.subItems && (
                    <Dropdown items={item.subItems} />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Slide-in */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 space-y-4 px-4 pb-4 overflow-hidden"
            >
              {menuItems.map((item, index) => (
                <div key={index} className="border-b pb-2">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubMenu(index)}
                        className="w-full flex justify-between items-center text-left text-gray-800 font-semibold"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`transform transition-transform ${
                            expandedMobileMenus[index] ? 'rotate-180' : ''
                          }`}
                          size={18}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMobileMenus[index] && (
                          <motion.ul
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="ml-4 mt-2 space-y-1 text-gray-600"
                          >
                            {item.subItems.map((sub, idx) => (
                              <li key={idx}>
                                <a href={sub.link} className="block hover:text-blue-600">
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.link} className="block text-gray-800 hover:text-blue-600">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </>
  );
}
