// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { merchant_id, order_id, payment_id, payhere_amount, captured_amount, status_code, status_message } = req
  res.status(200).json({ merchant_id, order_id, payment_id, payhere_amount, captured_amount, status_code, status_message })
}
