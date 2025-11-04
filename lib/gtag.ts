export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""

export const isGAEnabled = GA_ID && process.env.NODE_ENV === "production"

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export const pageview = (url: string) => {
  if (!isGAEnabled) return
  window.gtag("config", GA_ID, {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!isGAEnabled) return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}
