import React from 'react';

export default function ProductCard({ id, name, desc }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={`/images/${id}.jpg`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
