/**
 * Prompt Component
 *
 * Main input interface for the Uify component generator. Allows users to describe
 * UI components, select examples, and generate React code using Visa's Design System.
 * Handles navigation between prompt input and generation result views.
 *
 * @author Josh Charpentier
 * @created 2025
 */

"use client"

import { useState } from "react"
import PromptInput from "./components/PromptInput"
import Generation from "./generation"

export default function Prompt() {
  const [description, setDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showGeneration, setShowGeneration] = useState(false)

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
    setDescription("")
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
      <header>
        <h1
          className="v-typography-display-1"
          style={{
            color: "var(--palette-default-surface-1)",
          }}
        >
          Uify
        </h1>
      </header>

      <main>
        <section
          aria-labelledby="component-generator-heading"
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
            id="component-generator-heading"
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
            <PromptInput
              description={description}
              onDescriptionChange={setDescription}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
