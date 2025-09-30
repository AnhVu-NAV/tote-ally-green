import { Phone, Facebook, Instagram, Globe, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-green-700/20 py-12">
      {/* bỏ container để full width */}
      <div className="w-full">
        {/* Card full chiều ngang */}
        <div className="w-full rounded-none shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Cột trái: nền xanh đậm + logo */}
            <div className="bg-[#17542a] md:col-span-2 flex items-center justify-center py-10 px-6">
              <Image
                src="/images/tote-logo.png"
                alt="Tote-Ally Green Logo"
                width={220}
                height={120}
                className="object-contain drop-shadow "
                priority
              />
            </div>

            {/* Cột phải: nền xanh tươi */}
            <div className="bg-[#70b227] md:col-span-3 text-white px-6 sm:px-8 py-8 relative">
              <h3 className="text-xl sm:text-2xl font-extrabold mb-4">
                Vui lòng liên hệ với chúng tôi qua:
              </h3>

              <div className="space-y-3">
                <Line icon={<Phone className="w-5 h-5" />} text="Hotline: 0354667104" />
                <Line
                  icon={<Facebook className="w-5 h-5" />}
                  text="Fanpage: Tote-Ally Green"
                  href="https://www.facebook.com/profile.php?id=61581129946899"
                />
                <Line
                  icon={<Mail className="w-5 h-5" />}
                  text="Email: toteallygreen.official@gmail.com"
                  href="mailto:toteallygreen.official@gmail.com"
                />
                <Line
                  icon={<Instagram className="w-5 h-5" />}
                  text="Instagram: tote.ally_green"
                  href="https://www.instagram.com/tote.ally_green"
                />
                <Line
                  icon={<Globe className="w-5 h-5" />}
                  text="Website: toteallygreen.vercel.app"
                  href="https://toteallygreen.vercel.app/"
                />
              </div>

              <p className="mt-8 text-center text-white/90 font-semibold">
                Since 2025
              </p>
            </div>
          </div>
        </div>

        {/* dòng bản quyền */}
        <div className="text-center mt-6">
          <p className="text-sm text-green-900/70">
            © 2025 Tote-Ally Green. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

/** Item hàng ngang: icon + text/link */
function Line({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode
  text: string
  href?: string
}) {
  const Inner = (
    <span className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
      {icon}
      <span className="font-medium">{text}</span>
    </span>
  )

  return (
    <div className="flex items-center">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="underline-offset-4 hover:underline"
        >
          {Inner}
        </a>
      ) : (
        Inner
      )}
    </div>
  )
}
