import type { Metadata } from 'next'
import { Inter, DM_Sans, Josefin_Sans } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryProvider } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })
const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Sanjay and Shreevasuki Associates',
    description: 'Charted accountants providing comprehensive financial solutions for businesses across India.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={josefinSans.className}>
                <ReactQueryProvider>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
                        {children}
                    </TooltipProvider>
                </ReactQueryProvider>
            </body>
        </html>
    )
}
