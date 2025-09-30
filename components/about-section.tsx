export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[600px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trang%20web%20%281%29.png-0WNlj22rvxVX8GpgbxU2yzwfMgCAHt.jpeg"
              alt="Tote-Ally Green Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex items-center justify-center h-full p-8 md:p-16">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-3xl mr-3">🌿</span>
                <h2 className="text-2xl md:text-3xl font-bold text-green-600">
                  "Tote-Ally Green – Mang xanh theo bạn"
                </h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Chúng tôi tin rằng mỗi chiếc túi không chỉ để đựng đồ, mà còn là người đồng hành lan toả lối sống xanh.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Một chiếc túi tote có thể thay thế hàng trăm túi nilon, biến hành động nhỏ thành tác động lớn vì một môi trường bền vững
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
