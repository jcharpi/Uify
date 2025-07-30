/**
 * Prompt Input Component
 *
 * Reusable input interface for component generation. Contains description input,
 * example selection, model combobox, and generate button. Used both in the main
 * prompt view and as a preview in the generation results.
 *
 * @author Josh Charpentier
 * @created 2025
 */

import { useState } from "react"
import ModelCombobox from "./ModelCombobox"
import DescriptionInput from "./DescriptionInput"
import ExampleSelect from "./ExampleSelect"
import { Button } from "@visa/nova-react"

interface PromptInputProps {
  onGenerate?: () => void
  isGenerating?: boolean
  description?: string
  onDescriptionChange?: (value: string) => void
}

export default function PromptInput({
  onGenerate,
  isGenerating = false,
  description: externalDescription,
  onDescriptionChange,
}: PromptInputProps) {
  const [internalDescription, setInternalDescription] = useState("")

  // Use external description if provided, otherwise use internal state
  const description = externalDescription ?? internalDescription
  const setDescription = onDescriptionChange ?? setInternalDescription

  const handleExampleClick = (exampleText: string) => {
    setDescription(exampleText)
  }

  const handleGenerate = () => {
    if (isGenerating) return
    onGenerate?.()
  }

  return (
    <>
      <DescriptionInput value={description} onChange={setDescription} />
      <ExampleSelect onExampleClick={handleExampleClick} />
      <ModelCombobox />
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
    </>
  )
}
