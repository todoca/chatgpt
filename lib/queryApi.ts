import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      max_tokens: 1000,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `A TodocaGPT no se le hizo posible encontrar una respuesta para tu inquietud! (Error: ${err.message})`
    );
  return res;
};

export default query;
