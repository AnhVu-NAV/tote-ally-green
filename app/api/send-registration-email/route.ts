import { NextResponse, type NextRequest } from "next/server"
import { Resend } from "resend"

// Nếu bạn đang dùng Edge, bỏ dòng dưới. Resend chạy Node tốt hơn:
export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

function sanitize(s: unknown) {
  return String(s ?? "").trim()
}

function isPhoneVN(p: string) {
  // đơn giản: 9–11 số, cho phép +84
  return /^(\+?84|0)\d{8,10}$/.test(p.replace(/\s+/g, ""))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const type = sanitize(body.type) || "consultation"
    const customerName = sanitize(body.customerName)
    const customerAddress = sanitize(body.customerAddress)
    const customerPhone = sanitize(body.customerPhone)
    const message = sanitize(body.message)

    // Validate tối thiểu
    const errors: string[] = []
    if (!customerName) errors.push("Thiếu họ và tên")
    if (!customerAddress) errors.push("Thiếu địa chỉ")
    if (!customerPhone || !isPhoneVN(customerPhone)) errors.push("Số điện thoại không hợp lệ")
    if (!message) errors.push("Thiếu nội dung tư vấn")

    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 })
    }

    const html = `
      <h2>📩 Đăng ký tư vấn mới</h2>
      <p><b>Loại:</b> ${type}</p>
      <p><b>Khách hàng:</b> ${customerName}</p>
      <p><b>Địa chỉ:</b> ${customerAddress}</p>
      <p><b>Số điện thoại:</b> ${customerPhone}</p>
      <p><b>Nội dung tư vấn:</b></p>
      <div style="white-space:pre-wrap;border-left:4px solid #eee;padding-left:12px">${message}</div>
      <hr />
      <p style="color:#888">Email gửi từ website.</p>
    `

    // Gửi về hộp thư của bạn
    await resend.emails.send({
      from: "System Toteallygreen <toteallygreen.system@resend.dev>",
      to:  "toteallygreen.official@gmail.com",
      subject: `Đăng ký tư vấn — ${customerName}`,
      html,
    })

    // (Tuỳ chọn) gửi auto-reply cho khách nếu bạn muốn:
    // if (body.customerEmail) {
    //   await resend.emails.send({
    //     from: process.env.FROM_IDENTITY || "Website <noreply@yourdomain.com>",
    //     to: body.customerEmail,
    //     subject: "Xác nhận đã nhận đăng ký tư vấn",
    //     html: `<p>Chào ${customerName},</p><p>Chúng tôi đã nhận được thông tin tư vấn của bạn và sẽ liên hệ sớm nhất.</p>`,
    //   })
    // }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error sending consultation email:", err)
    return NextResponse.json({ ok: false, error: "Failed to process registration" }, { status: 500 })
  }
}
