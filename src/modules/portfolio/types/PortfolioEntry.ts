export type PortfolioLink = {
  type: "code" | "canonical"
  link: string
}

export type PortfolioTheme = {
  primary: string
  accent: string
}

export type PortfolioEntry = {
  name: string
  icon: React.ReactNode
  shortDescription: string
  longDescription: React.ReactNode
  theme: PortfolioTheme
  links: PortfolioLink[]
}
