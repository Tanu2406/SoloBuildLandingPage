import Navbar from "@/components/layout/Navbar";
import ChatbotShell from "@/components/chatbot/ChatbotShell";

export const metadata = { title: "SoloBuildAI Assistant" };

export default function AssistantPage() {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Navbar />
      <div className="pt-[58px]">
        <ChatbotShell light fullHeight />
      </div>
    </div>
  );
}
