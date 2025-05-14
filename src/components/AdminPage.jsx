
import React, { useState } from "react";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [datetime, setDatetime] = useState("");
  const [photo, setPhoto] = useState(null);
  const [menu, setMenu] = useState([]);
  const [menuInput, setMenuInput] = useState("");

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const eventInfo = { title, venue, datetime, photo };
    localStorage.setItem("eventInfo", JSON.stringify(eventInfo));
    alert("Informasi acara disimpan!");
  };

  const handleMenuSubmit = (e) => {
    e.preventDefault();
    if (menuInput.trim() !== "") {
      const updatedMenu = [...menu, menuInput];
      setMenu(updatedMenu);
      setMenuInput("");
      localStorage.setItem("menuList", JSON.stringify(updatedMenu));
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">
        Admin - Kelola Undangan
      </h1>

      {/* Informasi Acara */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Informasi Acara</h2>
        <form onSubmit={handleEventSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul Acara"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Tempat"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />

          <div>
            <label className="block mb-1">Foto Anak yang Ulang Tahun</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Simpan Info
          </button>
        </form>
      </div>

      {/* Menu Makanan */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Menu Makanan Dewasa</h2>
        <form onSubmit={handleMenuSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Masukkan menu"
            value={menuInput}
            onChange={(e) => setMenuInput(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Tambah
          </button>
        </form>
        <ul className="list-disc pl-5 text-gray-700">
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
