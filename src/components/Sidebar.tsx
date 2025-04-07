export default function Sidebar() {
    return (
      <div className="w-64 bg-black text-white p-6 flex flex-col justify-between h-screen">
        <div>
          <h2 className="text-xl font-bold mb-6">Página inicial</h2>
          <p className="text-sm text-gray-400 mb-2">Filtrar</p>
          <ul className="space-y-2 text-sm">
            <li>Comunidades</li>
            <li>Cursos</li>
            <li>Top</li>
          </ul>
        </div>
        <div className="text-xs text-gray-500 space-y-1">
          <p>© 2024 UniverLAB. All rights reserved.</p>
          <p className="underline cursor-pointer">Privacy Policy</p>
          <p className="underline cursor-pointer">Terms of Service</p>
          <p className="underline cursor-pointer">Cookie Settings</p>
        </div>
      </div>
    )
  }
  