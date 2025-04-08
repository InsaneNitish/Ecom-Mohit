import React, { useState } from 'react';
import ProductCard from '../components/productcard';

const accessoriesData = [
  {
    title: "Back Covers",
    products: [
      { id: "p1", name: "Galaxy Grip Case", desc: "Premium shockproof cover." },
      { id: "p2", name: "Neo Flex TPU Cover", desc: "Flexible and clear design." },
      { id: "p18", name: "Carbon Fiber Armor", desc: "Tough armor protection." },
      { id: "p19", name: "Glitter Shield Back", desc: "Stylish glitter finish." },
      { id: "p20", name: "Rugged Defender Case", desc: "Heavy-duty grip." },
      { id: "p21", name: "Transparent Flex Cover", desc: "Slim clear design." },
    ],
  },
  {
    title: "Tempered Glass",
    products: [
      { id: "p3", name: "9H Ultra Clear Glass", desc: "Smooth touch feel." },
      { id: "p7", name: "Privacy Guard Glass", desc: "Anti-peep glass." },
      { id: "p9", name: "Edge-to-Edge Tempered", desc: "Full screen protection." },
      { id: "p13", name: "Anti-Glare Tempered", desc: "Reduces reflections." },
      { id: "p14", name: "Matte Finish Glass", desc: "Silky matte look." },
    ],
  },
  {
    title: "Touch Screen",
    products: [
      { id: "p45", name: "MeeToo Touch Screen", desc: "Smooth touch feel." },
      { id: "p46", name: "Diamond Touch Screen", desc: "Anti-peep glass." },
      { id: "p47", name: "OG Touch Screen", desc: "Full screen protection." },
      { id: "p48", name: "Crown Touch Screen", desc: "Reduces reflections." },
    ],
  },
  {
    title: "Chargers",
    products: [
      { id: "p4", name: "Samsung 25W Fast Charger", desc: "USB-C PD adapter." },
      { id: "p5", name: "Mi Dual Port Adapter", desc: "Charge 2 devices." },
      { id: "p6", name: "Realme Dart Charger", desc: "30W quick charge." },
      { id: "p12", name: "OnePlus Warp Charge", desc: "65W charger." },
      { id: "p15", name: "Boat Quick Charge 3.0", desc: "Durable and fast." },
    ],
  },
  {
    title: "Data Cables",
    products: [
      { id: "p8", name: "USB-C Nylon Cable", desc: "Durable braided cable." },
    ],
  },
  {
    title: "NeckBands",
    products: [
      { id: "p24", name: "OnePlus Bullets Z2", desc: "Rich bass, fast charging." },
      { id: "p27", name: "OnePlus Bass Edition", desc: "Deep bass performance." },
      { id: "p25", name: "Realme Buds Wireless", desc: "Clear sound & comfort." },
    ],
  },
  {
    title: "Lens Covers",
    products: [
      { id: "p35", name: "Tempered Lens Protector", desc: "Scratch-resistant glass." },
      { id: "p36", name: "Matte Lens Guard", desc: "Smooth matte finish." },
    ],
  },
  {
    title: "Stickers",
    products: [
      { id: "p38", name: "Logo Sticker Pack", desc: "Set of 5 logo stickers." },
      { id: "p39", name: "Cartoon Vibe Pack", desc: "Cute anime designs." },
      { id: "p40", name: "Retro Emoji Set", desc: "90s vibe emojis." },
      { id: "p41", name: "Colorful Tech Set", desc: "Bright tech prints." },
      { id: "p42", name: "Gaming Logo Series", desc: "FPS, RPG, MOBA styles." },
      { id: "p43", name: "Space Art Stickers", desc: "Galaxy-inspired visuals." },
      { id: "p44", name: "Neon Style Mix", desc: "High-glow neons." },
    ],
  },
  {
    title: "KDM Products",
    products: [
      { id: "p49", name: "Power bank", desc: "Set of 5 logo stickers." },
      { id: "p50", name: "KDM USB cables data ", desc: "Cute anime designs." },
      { id: "p51", name: "car charger", desc: "90s vibe emojis." },
      { id: "p52", name: "Adapter", desc: "Bright tech prints." },
      { id: "p53", name: "KDM earphone", desc: "FPS, RPG, MOBA styles." },
    ],
  },
  {
    title: "Victel",
    products: [
      { id: "p54", name: "USB cable", desc: "Set of 5 logo stickers." },
      { id: "p55", name: "Earphone", desc: "Cute anime designs." },
      { id: "p56", name: "Adapter", desc: "90s vibe emojis." },
      { id: "p57", name: "Battery", desc: "Bright tech prints." },
    
    ],
  },
];

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...accessoriesData.map((c) => c.title)];

  const filteredData =
    selectedCategory === "All"
      ? accessoriesData
      : accessoriesData.filter((c) => c.title === selectedCategory);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 sm:mb-0">Mobile Accessories</h1>
        <select
          className="border border-gray-300 rounded px-4 py-2 text-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filteredData.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                desc={product.desc}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
