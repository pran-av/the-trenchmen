import "./globals.css";

export const metadata = {
  title: 'The Trenchmen',
  description: 'Solving Problems for Early-Stage Startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
