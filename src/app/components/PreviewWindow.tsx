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
      <PromptInput />
    </fieldset>
  )
}
