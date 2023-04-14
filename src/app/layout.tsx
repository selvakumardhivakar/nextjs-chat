import './globals.css'

export const metadata = {
  title: 'Comrade',
  description: 'created by vuelancer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
