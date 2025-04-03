"use client";

import { User, PlayCircle,ArrowDown} from "lucide-react";

const perguntas = [
  { name: "Maria Eduarda", info: "Enfermagem" },
  { name: "José Felipe", info: "Engenharia de Software" },
  { name: "Jessica", info: "Medicina" },
  { name: "Douglas Barbosa", info: "Coordenador. Engenharia de Software" },
];

export default function QuestoesPopulares() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">

      <div className="bg-blue-900 w-full md:w-1/2 flex flex-col items-center py-10 px-4">
        <h1 className="text-white text-3xl font-bold mb-6">Questões populares</h1>
        <div className="text-center mb-6">
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-800 transition">
            Como posso te ajudar?
            <span className="ml-2 text-lg">🧠</span>
          </button>
        </div>

        {perguntas.map((quest, index) => (
          <div key={index} className="bg-gray-200 w-full md:w-4/5 p-4 rounded-lg shadow-lg mb-4">
            <div className="flex items-center mb-2">
              <User className="text-black w-6 h-6 mr-2" />
              <div>
                <h3 className="font-bold text-black">{quest.name}</h3>
                <p className="text-black">{quest.info}</p>
              </div>
            </div>
            <p className="text-black text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-black text-white">
        <div className="w-full md:w-4/5 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="p-4 flex items-center">
            <User className="text-white w-6 h-6 mr-2" />
            <div>
              <h3 className="font-bold">Marcelo Garrido</h3>
              <p className="text-sm">Professor. Engenharia de Software</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/logo.png" 
              alt="Thumbnail do vídeo"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Projeto de controle de chuva</h2>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex justify-center py-4">
              <button>
                <ArrowDown className="w-10 h-10 text-white cursor-pointer hover:scale-110 transition" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}