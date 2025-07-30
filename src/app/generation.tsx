/**
 * Generation Component
 *
 * Results page that displays the generated component code, component suggestions,
 * and live preview. Provides a three-panel layout showing components used,
 * generated code, and component preview.
 *
 * @author Josh Charpentier
 * @created 2025
 */

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
        minWidth: "800px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header>
        <h1
          className="v-typography-display-1"
          style={{
            color: "var(--palette-default-surface-1)",
            padding: "var(--size-responsive-20)",
          }}
        >
          Uify
        </h1>
      </header>

      <main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "var(--size-responsive-20)",
            margin: "var(--size-responsive-20)",
          }}
          className="grid-responsive"
        >
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
      </main>
    </div>
  )
}
