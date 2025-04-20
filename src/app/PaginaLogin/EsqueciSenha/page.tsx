"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const enviarCodigo = () => {
    setShowPopup(true);
  };

  const fecharPopup = () => {
    setShowPopup(false);
    router.push("/PaginasLogin/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-black">
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-white text-2xl font-bold text-center mb-8">ESQUECI MINHA SENHA</h2>
        <p className="text-sm text-white text-center mb-6">
          Informe seu e-mail e enviaremos um código de redefinição.
        </p>

        <div className="mb-4">
          <label className="text-white text-sm">E-mail:</label>
          <div className="flex items-center border border-gray-500 rounded-lg bg-transparent px-3 py-2 mt-1">
            <Mail className="text-white w-5 h-5 mr-2" />
            <input
              className="bg-transparent flex-1 outline-none text-white placeholder-gray-300"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={enviarCodigo}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg transition duration-200"
        >
          Enviar código
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h3 className="text-lg font-semibold text-white text-center mb-2">Código enviado!</h3>
            <p className="text-white text-center mb-4">
              Verifique seu e-mail e siga as instruções para redefinir sua senha.
            </p>
            <button
              onClick={fecharPopup}
              className="w-full bg-black hover:bg-yellow-600 white py-2 rounded-lg transition duration-200"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
