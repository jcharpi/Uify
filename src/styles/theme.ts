// Theme-related styles and constants with complete Visa palette
export const theme = {
  colors: {
    // Active palette
    active: {
      default: 'var(--palette-default-active)',
      hover: 'var(--palette-default-active-hover)',
      pressed: 'var(--palette-default-active-pressed)',
      subtle: 'var(--palette-default-active-subtle)',
      accent: 'var(--palette-default-active-accent)',
    },

    // Surface palette
    surface: {
      1: 'var(--palette-default-surface-1)',
      2: 'var(--palette-default-surface-2)',
      3: 'var(--palette-default-surface-3)',
      highlight: 'var(--palette-default-surface-highlight)',
      lowlight: 'var(--palette-default-surface-lowlight)',
    },

    // Text palette (placeholder for when you provide the text values)
    text: {
      primary: 'var(--palette-default-text-primary)',
      secondary: 'var(--palette-default-text-secondary)',
      tertiary: 'var(--palette-default-text-tertiary)',
      disabled: 'var(--palette-default-text-disabled)',
      inverse: 'var(--palette-default-text-inverse)',
    },
  }
} as const;