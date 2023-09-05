import Link from "next/link";
export default function Login() {
  return (
    <>
    <div className="w-80">
      <h2 className="text-lg font-bold text-center mb-4">Login</h2>
      <div className="bg-white shadow-md rounded-md p-4 space-y-4">
        <div>
          <label className="block text-sm font-bold mb-2">E-mail:</label>
          <input
            type="email"
            className="w-full bg-gray-50 border rounded px-2 py-1 text-sm text-gray-800"
          ></input>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Senha:</label>
          <input
            type="password"
            className="w-full bg-gray-50 border rounded px-2 py-1 text-sm text-gray-800"
          ></input>
        </div>
        <div>
          <Link href="/">
            <p className="text-sm">Esqueci minha senha</p>
          </Link>
        </div>
        <div>
          <button className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white shadow  w-full">
            Entrar
          </button>
        </div>
        <div>
          <button className="text-sm bg-gray-500 hover:bg-gray-200 px-4 py-1 rounded text-white shadow  w-full">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
