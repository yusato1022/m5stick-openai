import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    // methodを明示的に許可
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: "ごきげんよう",
    });

    res.status(200).json({
      reply: response.output_text,
    });
  } catch (e) {
    console.error("OpenAI error:", e);
    res.status(500).json({
      error: e.message,
    });
  }
}
