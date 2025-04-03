export default function Footer() {
    return (
      <footer className="w-full bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-semibold">VoxU</div>
  
          <nav className="flex space-x-4 ml-45">
            <a href="#" className="hover:text-gray-400 font-semibold">Home</a>
            <a href="#" className="hover:text-gray-400 font-semibold">Ajuda</a>
            <a href="#" className="hover:text-gray-400 font-semibold">Termos de Uso</a>
          </nav>
  
          <p className="text-sm text-gray-400 mt-4 md:mt-0">© 2025 VoxU - Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }