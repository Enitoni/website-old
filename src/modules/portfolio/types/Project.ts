export type ProjectLink = {
  type: "code" | "canonical"
  href: string
}

export type ProjectTheme = {
  primary: string
  accent: string
}

export type Project = {
  name: string
  icon: React.ReactNode
  shortDescription: string
  longDescription: React.ReactNode
  theme: ProjectTheme
  links: ProjectLink[]
}
