interface Props {
    nome: string
    curso: string
    texto: string
    imagem?: string
  }
  
  export default function CardPublicacao({ nome, curso, texto, imagem }: Props) {
    return (
      <div className="bg-gray-200 rounded-xl p-4 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div>
            <p className="font-semibold text-sm">{nome}</p>
            <p className="text-xs text-gray-600">{curso}</p>
          </div>
        </div>
        {imagem && (
          <img
            src={imagem}
            alt="Imagem da publicação"
            className="w-full rounded-lg"
          />
        )}
        <p className="text-sm text-gray-800">{texto}</p>
      </div>
    )
  }
  