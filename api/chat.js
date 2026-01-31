import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_M5,
});

export default async function handler(req, res) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "ごきげんよう" }
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
