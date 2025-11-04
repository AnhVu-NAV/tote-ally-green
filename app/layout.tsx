import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Analytics from "@/components/Analytics"
import { GA_ID, isGAEnabled } from "@/lib/gtag"
import { Suspense } from "react"   // <-- thêm dòng này

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tote-Ally Green - Túi Vải Thân Thiện Môi Trường",
  description:
    "Một chiếc túi ngàn hành động xanh. Cùng chúng tôi bảo vệ môi trường với những chiếc túi vải thân thiện.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={nunito.className}>
        {children}

        {isGAEnabled && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'ad_storage': 'denied',
                  'analytics_storage': 'granted'
                });
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>

            {/* bọc Analytics bằng Suspense để tránh CSR bailout */}
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </>
        )}
      </body>
    </html>
  )
}
