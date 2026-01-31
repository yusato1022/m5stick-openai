export default function handler(req, res) {
  res.status(200).json({
    keyExists: !!process.env.OPENAI_API_KEY_M5,
    keyLength: process.env.OPENAI_API_KEY_M5
      ? process.env.OPENAI_API_KEY_M5.length
      : 0
  });
}
