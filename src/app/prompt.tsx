"use client"

import { useState } from "react"
import ModelCombobox from "./components/ModelCombobox"
import DescriptionInput from "./components/DescriptionInput"
import ExampleSelect from "./components/ExampleSelect"
import { Button } from "@visa/nova-react"
import Generation from "./generation"

export default function Prompt() {
  const [description, setDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showGeneration, setShowGeneration] = useState(false)

  const handleExampleClick = (exampleText: string) => {
    setDescription(exampleText)
  }

  const handleGenerate = () => {
    if (isGenerating) return
    setIsGenerating(true)
    setTimeout(() => {
      setShowGeneration(true)
    }, 2000)
  }

  const handleNewComponent = () => {
    setShowGeneration(false)
    setIsGenerating(false)
  }

  if (showGeneration) {
    return <Generation handleNewComponent={handleNewComponent} />
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <h1
        className="v-typography-display-1"
        style={{
          color: "var(--palette-default-surface-1)",
        }}
      >
        Uify
      </h1>

      {/* White Box */}
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
    </div>
  )
}
