import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { TextInput, TextInputIcon } from "./components/InputText";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100 bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo className="mb-4" />
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch mt-10 gap-4 w-full max-w-[400px]">
        <div>
          <label htmlFor="email" className="pb-2">
            <Text size="sm" className="font-semibold">
              Endereço de email
            </Text>
          </label>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="digite seu email" />
          </TextInput.Root>
        </div>
        <div>
          <label htmlFor="password" className="pb-2">
            <Text size="sm" className="font-semibold">
              Sua senha
            </Text>
          </label>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="digite seu senha" type="password" />
          </TextInput.Root>
        </div>

        <Button type="submit">Entrar na plataforma</Button>
      </form>
    </div>
  );
}
