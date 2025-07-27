import { ChangeEvent } from "react"
import { InputContainer, Label, Textarea, Utility } from "@visa/nova-react"

const id = "descriptionInput"

interface DescriptionInputProps {
  value: string
  onChange: (value: string) => void
}

export default function DescriptionInput({ value, onChange }: DescriptionInputProps) {
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
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
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
