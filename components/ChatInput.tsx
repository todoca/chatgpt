"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //TODO:useSWR to get model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    // Get Prompt into input
    const input = prompt.trim();
    setPrompt("");
    //Message
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    // Toast notification
    const notification = toast.loading("TodocaGPT esta meditando...");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("TodocaGPT ya mato con clase", { id: notification });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent  focus:outline-none flex-1"
          value={prompt}
          disabled={!session}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Escribe tu mensaje aqui..."
        />
        <button
          disabled={!prompt || !session}
          className="bg-[#11A37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-300 transition-all duration-200 ease-out"
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* ModelSelection */}</div>
    </div>
  );
};

export default ChatInput;
