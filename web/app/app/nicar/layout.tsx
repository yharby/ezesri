import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ezesri -- NICAR 2026',
  description: 'Unlocking official GIS data without the pain. NICAR 2026 presentation.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NicarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
