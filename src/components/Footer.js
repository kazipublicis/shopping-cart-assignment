import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div className="container mx-auto px-10 text-gray-700 p-4 ml-6">
        {`Copyright © 2011- ${new Date().getFullYear()}`}
        <p className="text-gray-800">Sabka Bazaar Grocery Supplies Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
