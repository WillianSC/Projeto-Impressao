export default function Perfil() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Editar Perfil</h1>
  
        <form className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded bg-zinc-800 text-white focus:outline-none"
              placeholder="Seu nome"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded bg-zinc-800 text-white focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>
  
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }  