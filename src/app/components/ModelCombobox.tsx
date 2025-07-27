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

const items: Item[] = [{ value: "Claude Opus 4" }, { value: "Deepseek R1" }]

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

export default function ModelCombobox() {
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
  const { id: listboxId, ref, ...listboxProps } = getMenuProps()

  return (
    <Combobox style={{ position: "relative" }}>
      <UtilityFragment vFlex vFlexCol vGap={4}>
        <DropdownContainer>
          <Label {...getLabelProps()}>Select Model</Label>
          <UtilityFragment vFlexRow>
            <InputContainer>
              <Input
                aria-haspopup="listbox"
                name="model-selector"
                type="text"
                readOnly
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
                  padding: "var(--size-responsive-8)",
                }}
                {...getToggleButtonProps()}
              >
                <VisaChevronDownTiny />
              </Button>
            </InputContainer>
          </UtilityFragment>
        </DropdownContainer>
      </UtilityFragment>
      {/* Keep menu element always in DOM but hide with CSS display property
          instead of conditional rendering to avoid Downshift errors */}
      <div
        ref={ref}
        {...listboxProps}
        style={{
          display: isOpen ? "block" : "none",
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: "var(--elevation-xsmall)",
        }}
      >
        <ListboxContainer>
          <Listbox id={listboxId}>
            {items.map((item, index) => (
              <ListboxItem
                className={
                  highlightedIndex === index ? "v-listbox-item-highlighted" : ""
                }
                key={`model-option-${index}`}
                style={{
                  paddingLeft: "var(--size-responsive-12)",
                  paddingRight: "var(--size-responsive-12)",
                  outline: "none",
                  boxSizing: "border-box",
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
      </div>
    </Combobox>
  )
}
