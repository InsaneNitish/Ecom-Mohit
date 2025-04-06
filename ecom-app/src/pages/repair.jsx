export default function RepairPage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Repair Services</h1>
  
        <p className="mb-6 text-gray-700">
          We offer expert repair services for a wide range of electronic devices. Our team is skilled in handling issues with mobile phones, laptops, and LCDs.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">📱 Mobile Repair</h2>
            <p>We fix screen cracks, battery issues, charging ports, and software problems for all mobile brands.</p>
          </div>
  
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">💻 Laptop Repair</h2>
            <p>Hardware upgrades, keyboard replacement, screen repair, and virus removal for all laptop brands.</p>
          </div>
  
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">🖥️ LCD Repair</h2>
            <p>Fast and professional LCD repair and replacement for TVs, monitors, and more.</p>
          </div>
        </div>
      </div>
    );
  }
  