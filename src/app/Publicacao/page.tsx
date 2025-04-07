import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import CardPublicacao from '@/components/CardPublicacao';

export default function Publicacoes() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 bg-blue-800 overflow-y-auto">
        <Navbar />
        <div className="p-8">
          <h1 className="text-3xl text-white font-bold mb-6">Publicações</h1>

          <div className="space-y-6">
            <CardPublicacao
              nome="Maria Eduarda"
              curso="Enfermagem"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius..."
            />
            <CardPublicacao
              nome="Marcio Garrido"
              curso="Professor. Engenharia de software"
              texto="Projeto de análise de chuva de maricá com python"
              imagem="/grafico.png"
            />
            <CardPublicacao
              nome="Maria Eduarda"
              curso="Enfermagem"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
