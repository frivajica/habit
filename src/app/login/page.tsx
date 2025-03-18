import { SignInButton } from "../components/SignInButton";

export default async function Login() {
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="bg-gray-900 p-4 rounded-sm grid justify-center gap-4">
        <p className="text-center">Inicia sesión con Google para guardar tus registros</p>
        <SignInButton />
      </div>
    </div>
  );
}
