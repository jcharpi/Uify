import { Button, Utility } from "@visa/nova-react"

function ExampleButton({ displayText }: { displayText: string }) {
  return (
    <Button
      colorScheme="secondary"
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

export default function ExampleSelect() {
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
          <ExampleButton displayText="Responsive login" />
          <ExampleButton displayText="User profile card" />
          <ExampleButton displayText="Payment method form" />
        </Utility>
      </Utility>
    </div>
  )
}
