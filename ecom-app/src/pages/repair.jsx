export default function RepairPage() {
  const equipmentImages = ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8"]; // Add or remove based on actual files

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Repair Services</h1>

      <p className="mb-6 text-gray-700">
        We offer expert repair services for a wide range of electronic devices. Our team is skilled in handling issues with mobile phones, laptops, and LCDs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      {/* New Repairing Equipments Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛠️ Repairing Equipments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {equipmentImages.map((img, idx) => (
            <div key={idx} className="bg-white shadow-sm rounded-lg overflow-hidden">
              <img
                src={`/images/${img}.jpg`}
                alt={`Repair Equipment ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
