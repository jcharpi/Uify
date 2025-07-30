/**
 * Code Window Component
 *
 * Displays the generated React code with syntax highlighting and copy functionality.
 * Shows the React icon and provides a copy-to-clipboard button for easy code sharing.
 *
 * @author Josh Charpentier
 * @created 2025
 */

import { useState } from "react"
import { Button, Label } from "@visa/nova-react"
import { VisaCopyTiny } from "@visa/nova-icons-react"
import Image from "next/image"
import { generatedCode } from "../data/generatedCode"

export default function CodeWindow() {
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <fieldset>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--size-responsive-16)",
          height: "var(--size-responsive-48)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-responsive-8)",
          }}
        >
          <Label tag="legend" className="v-typography-headline-3">
            Generated Code
          </Label>
          <Image src="/react.svg" alt="React" width={24} height={24} />
        </div>

        <Button
          buttonSize="small"
          iconTwoColor
          onClick={handleCopyCode}
          style={{
            padding: "var(--size-responsive-18) var(--size-responsive-18)",
            fontSize: "var(--typography-button-large-font-size)",
          }}
        >
          <VisaCopyTiny />
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>

      <div
        style={{
          backgroundColor: "var(--palette-default-text-subtle)",
          borderRadius: "var(--size-rounded-medium)",
          padding: "var(--size-responsive-20)",
          height: "80vh",
          overflow: "auto",
        }}
      >
        <pre
          style={{
            color: "var(--palette-default-surface-1)",
            fontFamily: "monospace",
            fontSize: "var(--typography-body-2-font-size)",
            lineHeight: "var(--typography-body-2-line-height)",
            whiteSpace: "pre-wrap",
            margin: 0,
          }}
        >
          {generatedCode}
        </pre>
      </div>
    </fieldset>
  )
}
