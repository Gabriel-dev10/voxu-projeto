export default function ChatWindow() {
    return (
      <div className="w-2/3 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-4">06/04/2025</p>
          <div className="space-y-4">
            <div className="text-right">
              <p className="bg-blue-600 inline-block p-2 rounded-lg">
                oi
              </p>
              <p className="text-xs text-gray-400 mt-1">11:31</p>
            </div>
            <div className="text-right">
              <p className="bg-blue-600 inline-block p-2 rounded-lg">
                Tudo bem?
              </p>
              <p className="text-xs text-gray-400 mt-1">11:34</p>
            </div>
            <div className="text-left">
              <p className="bg-gray-200 text-black inline-block p-2 rounded-lg">
                ok
              </p>
              <p className="text-xs text-gray-400 mt-1">11:35</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Digite..."
            className="w-full p-3 rounded bg-white text-black"
          />
        </div>
      </div>
    )
  }
  