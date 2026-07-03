import React from "react";

export default function Footer() {
  return (
    <div className="mt-8 border-t border-gray-300 py-4">
      <p className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </div>
  );
}
