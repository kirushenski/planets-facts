const sizes = {
  mobile: 768,
  tablet: 1200,
}

export const queries = Object.fromEntries(
  Object.entries(sizes).map(([name, value]) => [name, `(max-width: ${value - 1}px)`])
) as Record<keyof typeof sizes, string>
