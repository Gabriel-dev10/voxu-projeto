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
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-black">

      <div className="relative z-10 bg-opacity-80 p-8 bg-[url('/logovoxu2.png')] bg-cover bg-center rounded-lg shadow-lg w-96">
        <h2 className="text-[#FFFF] text-2xl font-bold text-center mb-6">REGISTRAR</h2>

        <div className="relative mb-4">
          <label className="text-black text-sm">Nome:</label>
          <div className="flex items-center border border-gray-900 rounded-lg bg-transparent px-3 py-2">
            <User className="text-black w-5 h-5 mr-2" />
            <input className="bg-transparent flex-1 outline-none text-white placeholder-black" type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
          </div>
        </div>

        <div className="relative mb-4">
          <label className="text-black text-sm">Email:</label>
          <div className="flex items-center border border-gray-900 rounded-lg bg-transparent px-3 py-2">
            <Mail className="text-black w-5 h-5 mr-2" />
            <input className="bg-transparent flex-1 outline-none text-white placeholder-black" type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className="relative mb-4">
          <label className="text-black text-sm">Senha:</label>
          <div className="flex items-center border border-gray-900 rounded-lg bg-transparent px-3 py-2">
            <Lock className="text-black w-5 h-5 mr-2" />
            <input className="bg-transparent flex-1 outline-none text-white placeholder-black" type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
          </div>
        </div>

        <button onClick={() => router.push("/")} className="w-full bg-black hover:bg-blue-500 text-white py-2 rounded-lg cursor-pointer transition duration-200">
          Registrar
        </button>
      </div>
    </div>
  );
}