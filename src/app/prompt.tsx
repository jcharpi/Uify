"use client"

import { VisaChevronDownTiny } from "@visa/nova-icons-react"
import {
  Button,
  Combobox,
  DropdownContainer,
  Input,
  InputContainer,
  Label,
  Listbox,
  ListboxContainer,
  ListboxItem,
  UtilityFragment,
} from "@visa/nova-react"
import {
  UseComboboxState,
  UseComboboxStateChangeOptions,
  useCombobox,
} from "downshift"

type Item = { value: string }

const items: Item[] = [
  { value: "Option A" },
  { value: "Option B" },
  { value: "Option C" },
  { value: "Option D" },
  { value: "Option E" },
]

export const itemToString = (item: Item | null) => (item ? item.value : "")

export const stateReducer = <ItemType,>(
  state: UseComboboxState<ItemType>,
  { type, changes }: UseComboboxStateChangeOptions<ItemType>
) =>
  type === useCombobox.stateChangeTypes.ItemMouseMove ||
  type === useCombobox.stateChangeTypes.MenuMouseLeave
    ? {
        ...changes,
        highlightedIndex: state.highlightedIndex,
      }
    : changes

export default function Prompt() {
  const {
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    inputValue,
    isOpen,
  } = useCombobox({
    items: items,
    itemToString,
    stateReducer,
  })
  const { id: listboxId, ...listboxProps } = getMenuProps()
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
          width: "75vh",
          maxWidth: "90vw",
          minHeight: "fit-content",
          margin: "10vh auto 0 auto",
          borderRadius: "var(--size-rounded-medium)",
        }}
      >
        <h2
          className="v-typography-headline-1"
          style={{
            color: "var(--palette-default-text)",
            textAlign: "center",
            margin: "var(--size-responsive-20) 0",
          }}
        >
          Component Generator
        </h2>
        <h3
          className="v-typography-subtitle-1 v-typography-color-subtle"
          style={{
            textAlign: "center",
          }}
        >
          Describe your UI component and get React Code that makes use of
          Visa&apos;s Design System
        </h3>

        <div style={{ marginTop: "var(--size-responsive-30)" }}>
          <Combobox>
            <UtilityFragment vFlex vFlexCol vGap={4}>
              <DropdownContainer>
                <Label {...getLabelProps()}>Select Model</Label>
                <UtilityFragment vFlexRow>
                  <InputContainer>
                    <Input
                      aria-haspopup="listbox"
                      name="model-selector"
                      type="text"
                      style={{
                        paddingLeft: "var(--size-responsive-12)",
                        paddingRight: "var(--size-responsive-12)",
                      }}
                      {...getInputProps({
                        "aria-expanded": isOpen,
                        "aria-owns": listboxId,
                      })}
                    />
                    <Button
                      aria-label="expand"
                      buttonSize="small"
                      colorScheme="tertiary"
                      iconButton
                      style={{
                        marginLeft: "var(--size-responsive-8)",
                        marginRight: "var(--size-responsive-8)",
                      }}
                      {...getToggleButtonProps()}
                    >
                      <VisaChevronDownTiny />
                    </Button>
                  </InputContainer>
                </UtilityFragment>
              </DropdownContainer>
            </UtilityFragment>
            {isOpen && (
              <ListboxContainer>
                <Listbox id={listboxId} {...listboxProps}>
                  {items.map((item, index) => (
                    <ListboxItem
                      className={
                        highlightedIndex === index
                          ? "v-listbox-item-highlighted"
                          : ""
                      }
                      key={`model-option-${index}`}
                      style={{
                        paddingLeft: "var(--size-responsive-12)",
                        paddingRight: "var(--size-responsive-12)",
                      }}
                      {...getItemProps({
                        "aria-selected": inputValue === item.value,
                        index,
                        item,
                      })}
                    >
                      {item.value}
                    </ListboxItem>
                  ))}
                </Listbox>
              </ListboxContainer>
            )}
          </Combobox>
        </div>
      </div>
    </div>
  )
}
