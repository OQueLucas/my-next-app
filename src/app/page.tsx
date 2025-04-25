import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <div className=" p-4 rounded">
      Conteúdo adaptável ao tema
      <ThemeSwitch />
    </div>
  );
}
