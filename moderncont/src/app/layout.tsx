import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './StyledComponentsRegistry'
import ClientThemeProvider from './ClientThemeProvider'
import BaseLayout from '@/components/BaseLayout/BaseLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Moderncont',
    description: 'Moderncont',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry key="styled-components-registry">
                    <ClientThemeProvider key="client-theme-provider">
                        <BaseLayout>{children}</BaseLayout>
                    </ClientThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
