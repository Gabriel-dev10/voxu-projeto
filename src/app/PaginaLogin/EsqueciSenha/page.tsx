"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const acharLogin = () => {
    setShowPopup(true);
  };

  const fecharpopup = () => {
    setShowPopup(false);
    router.push("/PaginasLogin/Login");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-black">
      <div className="relative z-10 bg-opacity-80 p-8 bg-[url('/logovoxu2.png')] bg-cover bg-center rounded-lg shadow-lg w-120">
        <h2 className="text-[#FFFF] text-2xl font-bold text-center mb-6">Esqueci minha senha</h2>
        <h2 className="text-sm text-red-600 text-1x1 font-bold text-center p-3">Informe seu e-mail e enviaremos um cdigo de redefinição.</h2>
        

        <div className="relative mb-4">
          <label className="text-black text-sm">Email:</label>
          <div className="flex items-center border border-gray-900 rounded-lg bg-transparent px-3 py-2">
            <Mail className="text-black w-5 h-5 mr-2" />
            <input
              className="bg-transparent flex-1 outline-none text-white placeholder-black"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={acharLogin}
          className="w-full bg-black hover:bg-blue-500 text-white py-2 rounded-lg cursor-pointer transition duration-200"
        >
          Entrar
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-20 z-40">
          <div className="bg-[url('/logovoxu2.png')] bg-cover bg-center p-20 rounded-lg shadow-lg w-120 z-30">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Código enviado</h3>
            <p className="text-white text-center">Um código foi enviado, verifique seu e-mail para continuar.</p>
            <button
              onClick={fecharpopup}
              className="mt-4 w-full bg-black hover:bg-black text-white py-2 rounded-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}