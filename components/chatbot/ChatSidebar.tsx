"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getChatbotContext, getChatbotContextFromPath, getContextualRecentChats, RECENT_CHATS, SOLUTIONS } from "./data";
import { SolutionId } from "./types";

const SOLUTION_GROUPS = [
  {
    id: "hr",
    name: "HR Solutions",
    items: [
      { id: "talent-acquisition", name: "Talent Acquisition", href: "/solutions/hr/talent-acquisition" },
      { id: "employee-onboarding", name: "Employee Onboarding", href: "/solutions/hr/employee-onboarding" },
      { id: "learning-development", name: "Learning & Development", href: "/solutions/hr/learning-development" },
      { id: "performance-reviews", name: "Performance & Reviews", href: "/solutions/hr/performance-reviews" },
      { id: "payroll-benefits", name: "Payroll & Benefits", href: "/solutions/hr/payroll-benefits" },
      { id: "employee-support", name: "Employee Support", href: "/solutions/hr/employee-support" },
      { id: "offboarding", name: "Offboarding", href: "/solutions/hr/offboarding" },
    ],
  },
  {
    id: "sales",
    name: "Sales",
    items: [
      { id: "lead-management", name: "Lead Management", href: "/solutions/sales/lead-management" },
      { id: "lead-qualification", name: "Lead Qualification", href: "/solutions/sales/lead-qualification" },
      { id: "sales-outreach", name: "Sales Outreach", href: "/solutions/sales/sales-outreach" },
      { id: "meeting-scheduling", name: "Meeting & Scheduling", href: "/solutions/sales/meeting-scheduling" },
      { id: "opportunity-management", name: "Opportunity Management", href: "/solutions/sales/opportunity-management" },
      { id: "sales-analytics", name: "Sales Analytics", href: "/solutions/sales/sales-analytics" },
    ],
  },
  {
    id: "support",
    name: "Customer Support",
    items: [
      { id: "support-workflow", name: "Ticket Management", href: "/solutions/customer-support/support-workflow" },
      { id: "agent-assist", name: "Agent Assist", href: "/solutions/customer-support/agent-assist" },
      { id: "knowledge-resolution", name: "Knowledge & Resolution", href: "/solutions/customer-support/knowledge-resolution" },
      { id: "escalation", name: "Escalation", href: "/solutions/customer-support/escalation" },
      { id: "customer-communication", name: "Customer Communication", href: "/solutions/customer-support/customer-communication" },
      { id: "support-analytics", name: "Support Analytics", href: "/solutions/customer-support/support-analytics" },
    ],
  },
  {
    id: "it",
    name: "IT Solutions",
    items: [
      { id: "it-support", name: "IT Support", href: "/solutions/it/it-support" },
      { id: "service-operations", name: "Service Operations", href: "/solutions/it/service-operations" },
      { id: "email-automation", name: "Email Automation", href: "/solutions/it/email-automation" },
    ],
  },
] as const;

export default function ChatSidebar({
  selectedSolution,
  selectedContextId,
  selectedChat,
  onSelectSolution,
  onSelectContext,
  onResetContext,
  onSelectChat,
  onNewChat,
  onClose,
  light = false,
}: {
  selectedSolution: SolutionId;
  selectedContextId?: string | null;
  selectedChat: string | null;
  onSelectSolution: (solutionId: SolutionId, contextId?: string | null) => void;
  onSelectContext?: (solutionId: SolutionId, contextId: string | null) => void;
  onResetContext?: () => void;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  onClose?: () => void;
  light?: boolean;
}) {
  const pathname = usePathname();
  const contextualSelection = selectedContextId ? getChatbotContext(selectedContextId) : getChatbotContextFromPath(pathname);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    hr: false,
    sales: false,
    support: false,
    it: false,
  });

  const bg = light ? "bg-white" : "bg-[#090909]";
  const border = light ? "border-slate-200" : "border-white/10";
  const divider = light ? "border-slate-200" : "border-white/8";
  const labelCls = light ? "text-slate-500" : "text-slate-500";

  const newChatCls = light
    ? "flex w-full items-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-left text-[12px] font-semibold text-white transition-colors hover:bg-slate-800"
    : "flex w-full items-center gap-2 rounded-lg border border-white/12 px-3 py-2.5 text-left text-[12px] font-medium text-white transition-colors hover:border-[#0066FF]/60 hover:bg-white/[0.03]";

  const chatBtnCls = (active: boolean) => light
    ? active
      ? "bg-[#0066FF]/10 text-slate-900 ring-1 ring-inset ring-[#0066FF]/20"
      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    : active
      ? "bg-[#0066FF]/10 text-white ring-1 ring-inset ring-[#0066FF]/20"
      : "text-slate-400 hover:bg-white/[0.04] hover:text-white";

  const scrollThumbCls = light
    ? "[&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:hover:bg-slate-400"
    : "[&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-thumb]:hover:bg-white/25";

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((current) => ({
      ...current,
      [groupId]: !current[groupId],
    }));
  };

  const showContextualView = Boolean(contextualSelection);
  const contextualRecentChats = getContextualRecentChats(contextualSelection?.id ?? selectedContextId ?? null);

  return (
    <aside className={`flex h-full min-h-0 w-full shrink-0 flex-col border-b ${border} ${bg} lg:w-[220px] lg:border-b-0 lg:border-r`}>
      <div className={`sticky top-0 z-10 flex-shrink-0 px-4 pb-2 pt-3 ${bg}`}>
        <Link href="/" className="inline-flex items-center justify-start bg-transparent" aria-label="Go to SoloBuildAI home" style={{ background: "transparent" }}>
          <Image
            src="/images/solobuild-logo.png"
            alt="SoloBuildAI"
            width={96}
            height={22}
            className="block h-auto w-[96px] max-w-full object-contain align-middle bg-transparent"
            style={{ background: "transparent" }}
            priority
          />
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className={`absolute right-3 top-3 rounded-lg p-1.5 transition-colors lg:hidden ${
              light ? "text-slate-400 hover:bg-slate-100" : "text-slate-500 hover:bg-white/5 hover:text-white"
            }`}
          >
            ×
          </button>
        )}
      </div>

      <div className={`sidebar-scroll-content flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden px-3 pb-5 ${scrollThumbCls} [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full`} style={{ scrollbarWidth: "thin" }}>
        <div className="pt-0">
              <div className="mb-2 px-2">
            <p className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${labelCls}`}>
              Solutions
            </p>
            {showContextualView && onResetContext && (
              <button
                type="button"
                onClick={() => {
                  onResetContext();
                  onClose?.();
                }}
                className={`mt-2 inline-flex items-center gap-1 text-[11px] font-medium ${light ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"}`}
              >
                <span aria-hidden="true">←</span>
                <span>All Solutions</span>
              </button>
            )}
          </div>

          <div className="space-y-1.5">
            {showContextualView && contextualSelection ? (
              <div className="rounded-lg">
                <div className="space-y-1 pt-1 pl-0">
                  <div className={`block rounded-md px-2.5 py-1.5 text-[12px] leading-5 ${
                    light ? "text-slate-700" : "text-slate-200"
                  }`}>
                    {contextualSelection.id === "talent-acquisition"
                      ? "HR Solutions / Talent Acquisition"
                      : `${contextualSelection.groupId === "hr" ? "HR Solutions" : contextualSelection.groupId === "sales" ? "Sales" : contextualSelection.groupId === "support" ? "Customer Support" : contextualSelection.groupId === "it" ? "IT Solutions" : contextualSelection.name} / ${contextualSelection.name}`}
                  </div>

                  {contextualSelection.menuItems.length === 0 ? (
                    <div className={`rounded-md px-2.5 py-1.5 text-[12px] ${light ? "text-slate-500" : "text-slate-400"}`}>
                      Coming Soon
                    </div>
                  ) : (
                    contextualSelection.menuItems.map((item) => {
                      if (item.isComingSoon) {
                        return (
                          <div key={item.id} className={`rounded-md px-2.5 py-1.5 text-[12px] ${light ? "text-slate-500" : "text-slate-400"}`}>
                            {item.name}
                          </div>
                        );
                      }

                      const linkProps = item.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {};

                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          {...linkProps}
                          onClick={() => onClose?.()}
                          className={`block rounded-md px-2.5 py-1.5 text-[12px] leading-5 transition-colors ${
                            light
                              ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                          }`}
                        >
                          {item.name}
                        </a>
                      );
                    })
                  )}
                </div>
              </div>
            ) : (
              SOLUTION_GROUPS.map((group) => {
                const isExpanded = expandedGroups[group.id];
                const isSelectedGroup = selectedSolution === group.id;
                const hasActiveItem = group.items.some((item) => pathname === item.href);
                const active = isSelectedGroup || hasActiveItem;

                return (
                  <div key={group.id} className="rounded-lg">
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.id)}
                      className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-[12px] font-medium transition-colors ${
                        active
                          ? "border border-[#0066FF]/20 bg-[#0066FF]/10 text-[#0066FF]"
                          : light
                            ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            : "text-slate-300 hover:bg-white/[0.03] hover:text-white"
                      }`}
                      aria-expanded={isExpanded}
                    >
                      <span className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${isExpanded ? "rotate-0" : "-rotate-90"}`}
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m5 7 5 6 5-6" />
                        </svg>
                        <span>{group.name}</span>
                      </span>
                    </button>

                    <div className={`grid transition-all duration-200 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="space-y-1 pt-1 pl-4">
                          {group.items.map((item) => {
                            const itemActive = pathname === item.href;

                            if (group.id === "hr" || group.id === "sales" || group.id === "support" || group.id === "it" || item.id === "talent-acquisition") {
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => {
                                    const contextId = group.id === "support" && item.id === "support-workflow"
                                      ? "ticket-management"
                                      : item.id;
                                    if (onSelectContext) {
                                      onSelectContext(group.id, contextId);
                                    } else {
                                      onSelectSolution(group.id, contextId);
                                    }
                                    onClose?.();
                                  }}
                                  className={`block w-full rounded-md px-2.5 py-1.5 text-left text-[12px] leading-5 transition-colors ${
                                    itemActive
                                      ? "border border-[#0066FF]/20 bg-[#0066FF]/10 font-medium text-[#0066FF]"
                                      : light
                                        ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                        : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
                                  }`}
                                >
                                  {item.name}
                                </button>
                              );
                            }

                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="mt-5 px-1">
          <button onClick={onNewChat} className={newChatCls}>
            <span className="text-base leading-none text-[#0066FF]">+</span>
            New Chat
          </button>
        </div>

        <div className="mt-5">
          <p className={`px-2 text-[9px] font-semibold uppercase tracking-[0.2em] ${labelCls}`}>Recent Chats</p>
          <div className="mt-2 space-y-0.5">
            {(showContextualView ? contextualRecentChats : RECENT_CHATS).map((chat) => (
              <button
                key={chat.id}
                onClick={() => {
                  onSelectChat(chat.id);
                  onClose?.();
                }}
                className={`w-full rounded-lg px-2.5 py-2.5 text-left transition-colors ${chatBtnCls(selectedChat === chat.id)}`}
              >
                <span className={`block truncate text-[12px] font-medium ${light ? (selectedChat === chat.id ? "text-slate-900" : "text-slate-600") : ""}`}>
                  {chat.title}
                </span>
                <span className={`mt-1 flex items-center justify-between gap-2 text-[10px] ${light ? "text-slate-400" : "text-slate-600"}`}>
                  <span>{showContextualView ? "HR" : SOLUTIONS.find((s) => s.id === chat.solutionId)?.shortName}</span>
                  <span>{chat.time}</span>
                </span>
              </button>
            ))}
          </div>

          <div className={`my-4 border-t ${divider}`} />
        </div>
      </div>
    </aside>
  );
}
