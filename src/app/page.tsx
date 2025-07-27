import Prompt from "./prompt"

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--palette-default-active)",
      }}
    >
      <Prompt></Prompt>
    </div>
  )
}
