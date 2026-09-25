import { notFound } from "next/navigation";
import ComingSoon from "@/components/ui/ComingSoon";
import PageLayout from "@/components/layout/PageLayout";
import { CHATBOT_CONTEXTS } from "@/components/chatbot/data";

export function generateStaticParams() {
  return Object.values(CHATBOT_CONTEXTS)
    .filter((context) => ["sales", "support", "it"].includes(context.groupId))
    .flatMap((context) => context.menuItems)
    .filter((item) => item.href)
    .map((item) => {
      const [, , context, itemId] = item.href!.split("/");
      return { context, item: itemId };
    });
}

export default async function ComingSoonPage({
  params,
}: {
  params: Promise<{ context: string; item: string }>;
}) {
  const { context: contextId, item: itemId } = await params;
  const context = CHATBOT_CONTEXTS[contextId];
  const menuItem = context?.menuItems.find((item) => item.id === itemId);

  if (!context || !menuItem || !["sales", "support", "it"].includes(context.groupId)) notFound();

  return (
    <PageLayout>
      <ComingSoon title={`${menuItem.name} - ${context.name}`} />
    </PageLayout>
  );
}
