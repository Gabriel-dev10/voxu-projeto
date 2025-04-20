'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-black">
      <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-white text-2xl font-bold text-center mb-8">ACESSAR</h2>

        <label className="text-white mb-2 block">Email</label>
        <div className="flex items-center bg-transparent border border-gray-500 rounded px-3 py-2 mb-4">
          <Mail className="text-gray-400 mr-2" size={18} />
          <input
            type="email"
            placeholder="Digite seu email"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
          />
        </div>

        <label className="text-white mb-2 block">Senha</label>
        <div className="flex items-center bg-transparent border border-gray-500 rounded px-3 py-2 mb-6">
          <Lock className="text-gray-400 mr-2" size={18} />
          <input
            type={mostrarSenha ? 'text' : 'password'}
            placeholder="Digite sua senha"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
          />
          <Eye
            className="text-gray-400 ml-2 cursor-pointer"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            size={18}
          />
        </div>

        <div className="flex justify-center items-center mb-6">
          <button
           onClick={() => router.push("/")}
           className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded">
            Entrar
          </button>
        </div>

        <p className="text-center text-gray-300 text-sm">
          Não tem uma conta?{' '}
          <a href="/PaginaLogin/Cadastro" className="text-blue-400 hover:underline">
            Cadastre-se
          </a>
        </p>
        <p className="text-center text-gray-300 text-sm">
          <a href="/PaginaLogin/EsqueciSenha" className="text-blue-400 hover:underline">
          Esqueceu a senha?
          </a>
        </p>
      </div>
    </div>
  );
}
