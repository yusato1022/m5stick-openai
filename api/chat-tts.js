export const config = {
  runtime nodejs,
};

import OpenAI from openai;

const client = new OpenAI({
  apiKey process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const text = ごきげんよう。今日はどのようなご用件でしょうか？;

    const response = await client.audio.speech.create({
      model gpt-4o-mini-tts,
      voice alloy,
      input text,
      format wav,
    });

    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader(Content-Type, audiowav);
    res.status(200).send(buffer);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error e.message });
  }
}
