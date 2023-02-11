import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Por favor introduzca un mensaje." });
    return;
  }
  if (!chatId) {
    res
      .status(400)
      .json({ answer: "Por favor introduzca un Id de Chat valido." });
    return;
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text:
      response ||
      "TodocaGPT no se le hizo posible conseguir una respuesta para eso!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "TodocaGPT",
      name: "TodocaGPT",
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/chatgpt-todoca.appspot.com/o/Logo%20512x512.png?alt=media&token=3e3098c7-9ff6-4799-82a4-445660eb29df",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
//res.status(200).json({ name: "John Doe" });
