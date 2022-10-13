import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { CheckBox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { TextInput, TextInputIcon } from "./components/InputText";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";

export function App() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center text-gray-100 bg-gray-900 px-8">
      <header className="flex flex-col items-center">
        <Logo className="mb-4" />
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch mt-10 gap-4 w-full max-w-[400px]">
        <label htmlFor="email">
          <Text size="sm" className="block font-semibold mb-1">
            Endereço de email
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" placeholder="digite seu email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password">
          <Text size="sm" className="block font-semibold mb-1">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="digite seu senha" type="password" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2 items-center">
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray-100">
            Lembrar-me de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="mt-8 flex flex-col items-center justify-center gap-4">
        <a href="#" className="transition-all duration-300 hover:opacity-70">
          <Text
            size="sm"
            className="text-gray-400 underline underline-offset-2"
          >
            esqueceu sua senha?
          </Text>
        </a>

        <a href="#" className="transition-all duration-300 hover:opacity-70">
          <Text
            size="sm"
            className="text-gray-400 underline underline-offset-2"
          >
            Não possui conta? Crie uma agora!
          </Text>
        </a>
      </footer>
    </main>
  );
}
