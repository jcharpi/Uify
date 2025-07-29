import { useState } from "react"
import ModelCombobox from "./ModelCombobox"
import DescriptionInput from "./DescriptionInput"
import ExampleSelect from "./ExampleSelect"
import { Button } from "@visa/nova-react"

interface PromptInputProps {
  onGenerate?: () => void
  isGenerating?: boolean
}

export default function PromptInput({
  onGenerate,
  isGenerating = false,
}: PromptInputProps) {
  const [description, setDescription] = useState("")

  const handleExampleClick = (exampleText: string) => {
    setDescription(exampleText)
  }

  const handleGenerate = () => {
    if (isGenerating) return
    onGenerate?.()
  }

  return (
    <div
      style={{
        padding: "var(--size-responsive-20)",
        backgroundColor: "var(--palette-default-surface-1)",
        height: "40vh",
        width: "750px",
        maxWidth: "90vw",
        minHeight: "fit-content",
        margin: "15vh auto 15vh auto",
        borderRadius: "var(--size-rounded-medium)",
        boxShadow: "var(--elevation-large)",
        border: "2px solid var(--palette-default-border)",
      }}
    >
      <h2
        className="v-typography-headline-1"
        style={{
          color: "var(--palette-default-text)",
          textAlign: "center",
          margin: "var(--size-responsive-20) 0",
        }}
      >
        Component Generator
      </h2>
      <h3
        className="v-typography-subtitle-1 v-typography-color-subtle"
        style={{
          textAlign: "center",
        }}
      >
        Describe your UI component and get React Code that makes use of
        Visa&apos;s Design System
      </h3>

      <div style={{ marginTop: "var(--size-responsive-30)" }}>
        <DescriptionInput value={description} onChange={setDescription} />
        <ExampleSelect onExampleClick={handleExampleClick} />
        <ModelCombobox />
      </div>
      <Button
        alternate
        onClick={handleGenerate}
        style={{
          position: "static",
          margin: "var(--size-responsive-40) auto",
          display: "block",
          padding: "var(--size-responsive-12) var(--size-responsive-24)",
          fontSize: "var(--typography-button-large-font-size)",
        }}
      >
        {isGenerating ? "Generating..." : "Generate"}
      </Button>
    </div>
  )
}
