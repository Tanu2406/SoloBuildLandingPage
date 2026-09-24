import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import ChatbotShell from "@/components/chatbot/ChatbotShell";

export const metadata = { title: "SoloBuildAI Assistant" };

export default function AssistantPage() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Navbar />
      <div className="pt-[58px]">
        <Suspense fallback={<div className="h-[calc(100vh-58px)] w-screen bg-black" />}>
          <ChatbotShell light fullHeight />
        </Suspense>
      </div>
    </div>
  );
}
