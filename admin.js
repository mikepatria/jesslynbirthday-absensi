<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin - Kelola Undangan</title>
  <script defer src="/admin.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body class="bg-blue-50 min-h-screen font-sans">
  <div class="max-w-3xl mx-auto py-10 px-4">
    <h1 class="text-2xl font-bold mb-6 text-blue-800">Admin - Kelola Undangan</h1>

    <!-- Informasi Acara -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Informasi Acara</h2>
      <form id="event-form" class="space-y-4">
        <input type="text" id="title" placeholder="Judul Acara" class="w-full border rounded px-3 py-2">
        <input type="text" id="venue" placeholder="Tempat" class="w-full border rounded px-3 py-2">
        <input type="datetime-local" id="datetime" class="w-full border rounded px-3 py-2">

        <div>
          <label class="block mb-1">Foto Anak yang Ulang Tahun</label>
          <input type="file" id="photo" accept="image/*" class="w-full">
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Simpan Info</button>
      </form>
    </div>

    <!-- Menu Makanan -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Menu Makanan Dewasa</h2>
      <form id="menu-form" class="flex gap-2 mb-4">
        <input type="text" id="menu-input" placeholder="Masukkan menu" class="flex-1 border rounded px-3 py-2">
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Tambah</button>
      </form>
      <ul id="menu-list" class="list-disc pl-5 text-gray-700">
        <!-- Menu akan ditampilkan di sini -->
      </ul>
    </div>
  </div>
</body>
</html>
