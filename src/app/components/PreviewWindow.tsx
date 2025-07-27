import { Label } from "@visa/nova-react"

export default function PreviewWindow() {
  return (
    <fieldset>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--size-responsive-16)",
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
          backgroundColor: "var(--palette-default-surface-1)",
          borderRadius: "var(--size-rounded-medium)",
          height: "80vh",
          overflow: "auto",
          display: "flex",
        }}
      >
        <div
          style={{
            color: "var(--palette-default-text-subtle)",
          }}
        >
          Component preview will appear here
        </div>
      </div>
    </fieldset>
  )
}
