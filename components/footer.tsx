import { Phone, Facebook, Instagram, Globe } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/tote-logo.png"
                alt="Tote-Ally Green Logo"
                width={120}
                height={80}
                className="object-contain"
              />
              <span className="text-3xl font-bold text-white">Tote-Ally Green</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Vui lòng liên hệ với chúng tôi qua:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                <Phone className="w-5 h-5" />
                <span>Hotline: 0354667104</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                <Facebook className="w-5 h-5" />
                <a href="https://www.facebook.com/profile.php?id=61581129946899&mibextid=wwXIfr&rdid=kw21Z1Ll88JjJtSO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F179QRyxrTz%2F%3Fmibextid%3DwwXIfr#"><span>Fanpage: Tote-Ally Green </span></a>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                <Globe className="w-5 h-5" />
                <span>Email: toteallygreen.official@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                <Instagram className="w-5 h-5" />
                <a href="https://www.instagram.com/tote.ally_green?igsh=MXR2cWtmYnluNWY4MA%3D%3D&utm_source=qr"><span>Instagram: tote.ally_green</span></a>
              </div>
              <div className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                <Globe className="w-5 h-5" />
                <a href="https://toteallygreen.vercel.app/"><span>Website: toteallygreen.vercel.app</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500 mt-8 pt-2 text-center">
          {/* <Image
            src="/images/tote-logo.png"
            alt="Tote-Ally Green"
            width={200}
            height={120}
            className="mx-auto object-contain opacity-80"
          /> */}
          <p className="text-green-200 mt-2">© 2025 Tote-Ally Green. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
