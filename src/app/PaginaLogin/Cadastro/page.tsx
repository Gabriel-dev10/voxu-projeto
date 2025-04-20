"use client";

import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-black">
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-white text-2xl font-bold text-center mb-8">REGISTRAR</h2>

        <label className="text-white mb-2 block">Nome</label>
        <div className="flex items-center bg-transparent border border-gray-500 rounded px-3 py-2 mb-4">
          <User className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            placeholder="Digite seu nome"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <label className="text-white mb-2 block">Email</label>
        <div className="flex items-center bg-transparent border border-gray-500 rounded px-3 py-2 mb-4">
          <Mail className="text-gray-400 mr-2" size={18} />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label className="text-white mb-2 block">Senha</label>
        <div className="flex items-center bg-transparent border border-gray-500 rounded px-3 py-2 mb-6">
          <Lock className="text-gray-400 mr-2" size={18} />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <label className="text-white mb-2 block">Repita a Senha</label>
        <div className="flex items-center bg-transparent border border-gray-500 rounded px-3 py-2 mb-6">
          <Lock className="text-gray-400 mr-2" size={18} />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => router.back()}
            className="bg-transparent text-white border border-gray-500 px-4 py-2 rounded hover:bg-gray-700"
          >
            Voltar
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded"
          >
            Registrar
          </button>
        </div>

        <p className="text-center text-gray-300 text-sm">
          Já tem uma conta?{" "}
          <a href="/PaginaLogin" className="text-blue-400 hover:underline">
            Acesse aqui
          </a>
        </p>
      </div>
    </div>
  );
}
