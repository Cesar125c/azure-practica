export type IconName =
  | 'architecture'
  | 'check'
  | 'cloud'
  | 'code'
  | 'cost'
  | 'github'
  | 'home'
  | 'lock'
  | 'rocket'
  | 'server'
  | 'workflow'

export interface NavItem {
  label: string
  href: string
}

export interface Concept {
  title: string
  description: string
  icon: IconName
}

export interface Service {
  name: string
  description: string
  icon: IconName
}

export interface Recommendation {
  projectType: string
  service: string
  reason: string
}

export interface ComparisonRow {
  aspect: string
  local: string
  azure: string
}

export interface FlowStep {
  title: string
  caption?: string
  icon: IconName
}
