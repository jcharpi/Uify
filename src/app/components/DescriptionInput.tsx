import { InputContainer, Label, Textarea, Utility } from "@visa/nova-react"

const id = "descriptionInput"

export default function DescriptionInput() {
  return (
    <div style={{ margin: "var(--size-responsive-20) 0" }}>
      <Utility vFlex vFlexCol vGap={4}>
        <Label htmlFor={id}>Describe your component</Label>
        <InputContainer className="v-flex-row">
          <Textarea
            aria-required="true"
            fixed
            id={id}
            name={id}
            style={{
              blockSize: "80px",
              margin: "var(--size-responsive-4)",
              fontSize: "var(--typography-body-1-font-size)",
            }}
          />
        </InputContainer>
      </Utility>
    </div>
  )
}
