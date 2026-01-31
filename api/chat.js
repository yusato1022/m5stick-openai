export default function handler(req, res) {
  res.status(200).json({
    keyExists: !!process.env.OPENAI_API_KEY,
    keyLength: process.env.OPENAI_API_KEY
      ? process.env.OPENAI_API_KEY.length
      : 0
  });
}
