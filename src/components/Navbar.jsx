import { useState } from "react";
import logo from '../assets/logo.png';
import { Menu, X } from "lucide-react"; // optional icons for hamburger

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = () => {
    const q = query.trim();
    if (!q) return;
    onSearch(q);
    setQuery("");
    setMobileOpen(false); // close mobile menu after search
  };

  const handleCategory = (cat) => {
    onSearch(cat);
    setMobileOpen(false); // close mobile menu after selecting
  };

  return (
    <nav className="bg-[#f3faff] shadow-md fixed top-0 w-full z-50 border-b">
      <div className="max-w-6xl mx-auto flex justify-between md:h-20 items-center py-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#" onClick={() => window.location.reload()} className="flex items-center">
            <img src={logo} alt="logo" className="w-28 h-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("technology")}>Technology</li>
          <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("ipl")}>IPL</li>
          <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("finance")}>Finance</li>
          <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("politics")}>Politics</li>
          <li><a href="#all-news" className="text-red-600 hover:underline">Agencies</a></li>
        </ul>

        {/* Search & Hamburger */}
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="e.g. Research"
            className="w-48 md:w-64 px-3 py-1 border rounded outline-none"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
            Search
          </button>

          {/* Hamburger Menu Button */}
          <button className="md:hidden ml-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f3faff] shadow-md border-t">
          <ul className="flex flex-col gap-2 p-4 font-medium">
            <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("technology")}>Technology</li>
            <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("ipl")}>IPL</li>
            <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("finance")}>Finance</li>
            <li className="cursor-pointer hover:text-red-500" onClick={() => handleCategory("politics")}>Politics</li>
            <li><a href="#all-news" className="text-red-600 hover:underline">Agencies</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
