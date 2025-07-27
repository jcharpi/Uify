export default function Prompt() {
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
          height: "60vh",
          width: "60vh",
          maxWidth: "90vw",
          margin: "10vh auto 0 auto",
          borderRadius: "var(--size-rounded-medium)",
        }}
      >

      </div>
    </div>
  )
}
