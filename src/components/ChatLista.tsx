export default function ChatList() {
    return (
      <div className="w-1/3 bg-blue-800 p-6 text-white overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6">Mensagens</h2>
        <p className="uppercase text-sm mb-4">Chat +</p>
        <div className="space-y-4">
          {Array.from({ length: 4}).map((_, contato) => (
            <div
              key={contato}
              className="bg-gray-200 text-black rounded-lg p-4 flex justify-between items-center"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-bold">Usuario</p>
                  <p className="text-xs text-gray-600">Curso</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>
              <button className="text-blue-700 text-xl">&gt;</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
  