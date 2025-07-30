/**
 * Preview Window Component
 *
 * Shows a live preview of the generated component by rendering the PromptInput
 * component as an example. Provides visual feedback of what the generated code produces.
 *
 * @author Josh Charpentier
 * @created 2025
 */

import { Label } from "@visa/nova-react"
import PromptInput from "./PromptInput"

export default function PreviewWindow() {
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
            Component Preview
          </Label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <div
          style={{
            padding: "var(--size-responsive-20)",
            borderRadius: "var(--size-rounded-medium)",
            boxShadow: "var(--elevation-medium)",
            border: "2px solid var(--palette-default-border)",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <PromptInput />
        </div>
      </div>
    </fieldset>
  )
}
