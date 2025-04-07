"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">

      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-17" />
        <h1 className="text-3xl font-semibold">VoxU</h1>
      </div>

      <div className="flex space-x-4 mr-20">
        <a href="/Publicacao" className="hover:underline font-semibold">Publicações</a>
        <a href="/PaginaComunidade" className="hover:underline font-semibold">Comunidades</a>
        <a href="/Mensagem" className="hover:underline font-semibold">Mensagem</a>
      </div>

      <div className="flex space-x-2">
        <button className="bg-blue-600 px-3 py-1 rounded cursor-pointer">Perfil</button>
      </div>
      
    </nav>
  );
}