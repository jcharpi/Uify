import { Label, Listbox, ListboxContainer, ListboxItem } from "@visa/nova-react"

const id = "componentUsedListbox"

const options = ["Input", "Combobox", "Textarea"]

export default function ComponentUsedListbox() {
  return (
    <fieldset style={{ boxShadow: "var(--elevation-large)" }}>
      <Label
        id={`${id}-label`}
        tag="legend"
        className="v-typography-headline-3 v-typography-color-subtle"
        style={{ marginBottom: "var(--size-responsive-16)" }}
      >
        Components Used
      </Label>
      <ListboxContainer>
        <Listbox id={id} tag="div">
          {options.map((option, index) => (
            <ListboxItem
              key={`${id}-option-${index}`}
              tag="div"
              style={{
                padding: "var(--size-responsive-16)",
                minHeight: "var(--size-responsive-60)",
                pointerEvents: "none",
              }}
            >
              <Label tag="span" className="v-typography-headline-2">
                {option}
              </Label>
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxContainer>
    </fieldset>
  )
}
