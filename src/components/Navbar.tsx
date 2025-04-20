"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-3xl font-semibold flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <h1 className="text-3xl">VoxU</h1>
        </div>

        <nav className="flex space-x-4 mt-4 md:mt-0">
          <a href="/Publicacao" className="hover:text-gray-400 font-semibold">Publicações</a>
          <a href="/PaginaComunidade" className="hover:text-gray-400 font-semibold">Comunidades</a>
          <a href="/Mensagem" className="hover:text-gray-400 font-semibold">Mensagem</a>
        </nav>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded cursor-pointer">Perfil</button>
        </div>

      </div>
    </nav>
  );
}
