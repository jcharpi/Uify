import { Button, Utility } from "@visa/nova-react"

interface ExampleButtonProps {
  displayText: string
  onClick: (text: string) => void
}

function ExampleButton({ displayText, onClick }: ExampleButtonProps) {
  return (
    <Button
      colorScheme="secondary"
      onClick={() => onClick(displayText)}
      style={{
        flex: "0 1 auto",
        minWidth: "fit-content",
        padding: "var(--size-responsive-8) var(--size-responsive-16)",
        borderColor: "var(--palette-default-active-hover)",
      }}
    >
      {displayText}
    </Button>
  )
}

interface ExampleSelectProps {
  onExampleClick: (text: string) => void
}

export default function ExampleSelect({ onExampleClick }: ExampleSelectProps) {
  return (
    <div style={{ margin: "var(--size-responsive-20) 0" }}>
      <Utility vFlex vFlexCol vGap={4}>
        <div
          className="v-typography-body-2-medium"
          style={{ color: "var(--palette-default-text-subtle)" }}
        >
          TRY ONE OF THESE EXAMPLES
        </div>
        <Utility vFlex vFlexRow vFlexWrap vGap={8}>
          <ExampleButton
            displayText="Responsive login"
            onClick={onExampleClick}
          />
          <ExampleButton
            displayText="User profile card"
            onClick={onExampleClick}
          />
          <ExampleButton
            displayText="Payment method form"
            onClick={onExampleClick}
          />
        </Utility>
      </Utility>
    </div>
  )
}
