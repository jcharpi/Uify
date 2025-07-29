"use client"

import CodeWindow from "./components/CodeWindow"
import ComponentUsedListbox from "./components/ComponentUsedListbox"
import PreviewWindow from "./components/PreviewWindow"

interface GenerationProps {
  handleNewComponent?: () => void
}

export default function Generation({
  handleNewComponent: handleNewComponent,
}: GenerationProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "var(--size-responsive-20)",
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

      {/* Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 2fr",
          gap: "var(--size-responsive-20)",
          height: "88vh",
          marginTop: "var(--size-responsive-20)",
        }}
      >
        {/* First Box - 1/5 column */}
        <div
          style={{
            padding: "var(--size-responsive-20)",
            backgroundColor: "var(--palette-default-surface-1)",
            borderRadius: "var(--size-rounded-medium)",
            boxShadow: "var(--elevation-large)",
          }}
        >
          <ComponentUsedListbox handleNewComponent={handleNewComponent} />
        </div>

        {/* Second Box - 2/5 columns */}
        <div
          style={{
            padding: "var(--size-responsive-20)",
            backgroundColor: "var(--palette-default-surface-1)",
            borderRadius: "var(--size-rounded-medium)",
            boxShadow: "var(--elevation-large)",
          }}
        >
          <CodeWindow />
        </div>

        {/* Third Box - 2/5 columns */}
        <div
          style={{
            padding: "var(--size-responsive-20)",
            backgroundColor: "var(--palette-default-surface-1)",
            borderRadius: "var(--size-rounded-medium)",
            boxShadow: "var(--elevation-large)",
          }}
        >
          <PreviewWindow />
        </div>
      </div>
    </div>
  )
}
