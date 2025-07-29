import {
  Button,
  Label,
  Listbox,
  ListboxContainer,
  ListboxItem,
} from "@visa/nova-react"
import { VisaLinkTiny, VisaReloadTiny } from "@visa/nova-icons-react"

const id = "componentUsedListbox"

const options = [
  {
    name: "Input",
    url: "https://design.visa.com/components/input/?code_library=react&version=2.5.4",
  },
  {
    name: "Combobox",
    url: "https://design.visa.com/components/combobox/?code_library=react&version=2.5.4",
  },
  {
    name: "Button",
    url: "https://design.visa.com/components/button/?code_library=css&version=1.6.2",
  },
]

interface ComponentUsedListboxProps {
  handleNewComponent?: () => void
}

export default function ComponentUsedListbox({
  handleNewComponent: handleNewComponent,
}: ComponentUsedListboxProps) {
  return (
    <fieldset style={{ boxShadow: "var(--elevation-large)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--size-responsive-16)",
        }}
      >
        <Label
          id={`${id}-label`}
          tag="legend"
          className="v-typography-headline-3 v-typography-color-subtle"
        >
          Components Used
        </Label>

        <Button
          buttonSize="small"
          onClick={handleNewComponent}
          style={{
            padding: "var(--size-responsive-18) var(--size-responsive-18)",
            fontSize: "var(--typography-button-large-font-size)",
          }}
        >
          <VisaReloadTiny />
          New Component
        </Button>
      </div>
      <ListboxContainer>
        <Listbox id={id} tag="div">
          {options.map((option, index) => (
            <ListboxItem
              key={`${id}-option-${index}`}
              tag="div"
              style={{
                padding: "var(--size-responsive-16)",
                minHeight: "var(--size-responsive-60)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Label tag="span" className="v-typography-body-1">
                {option.name}
              </Label>
              <a
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--palette-default-text-subtle)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <VisaLinkTiny />
              </a>
            </ListboxItem>
          ))}
        </Listbox>
      </ListboxContainer>
    </fieldset>
  )
}
