import { ChatMessage, ChatbotContextConfig, ConnectedTool, RecentChat, SolutionContext, SolutionId } from "./types";

export const CHATBOT_CONTEXTS: Record<string, ChatbotContextConfig> = {
  "talent-acquisition": {
    id: "talent-acquisition",
    groupId: "hr",
    name: "Talent Acquisition",
    landingHref: "/solutions/hr/talent-acquisition",
    menuItems: [
      { id: "hiring", name: "Hiring", href: "https://solobuildai.vercel.app/", external: true },
      { id: "candidates", name: "Candidates", href: "https://solobuildai.vercel.app/candidates", external: true },
      { id: "screening-reports", name: "Screening Reports", href: "https://solobuildai.vercel.app/screening-reports", external: true },
      { id: "ai-recruiters", name: "AI Recruiters", href: "https://solobuildai.vercel.app/recruiters", external: true },
      { id: "interviews", name: "Interviews", href: "https://solobuildai.vercel.app/interviews", external: true },
      { id: "activity", name: "Activity", href: "https://solobuildai.vercel.app/activity", external: true },
    ],
  },
  "employee-onboarding": {
    id: "employee-onboarding",
    groupId: "hr",
    name: "Employee Onboarding",
    landingHref: "/solutions/hr/employee-onboarding",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  "learning-development": {
    id: "learning-development",
    groupId: "hr",
    name: "Learning & Development",
    landingHref: "/solutions/hr/learning-development",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  "performance-reviews": {
    id: "performance-reviews",
    groupId: "hr",
    name: "Performance & Reviews",
    landingHref: "/solutions/hr/performance-reviews",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  "payroll-benefits": {
    id: "payroll-benefits",
    groupId: "hr",
    name: "Payroll & Benefits",
    landingHref: "/solutions/hr/payroll-benefits",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  "employee-support": {
    id: "employee-support",
    groupId: "hr",
    name: "Employee Support",
    landingHref: "/solutions/hr/employee-support",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  "offboarding": {
    id: "offboarding",
    groupId: "hr",
    name: "Offboarding",
    landingHref: "/solutions/hr/offboarding",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  sales: {
    id: "sales",
    groupId: "sales",
    name: "Sales",
    landingHref: "/solutions/sales",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  "customer-support": {
    id: "customer-support",
    groupId: "support",
    name: "Customer Support",
    landingHref: "/solutions/customer-support",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
  it: {
    id: "it",
    groupId: "it",
    name: "IT Solutions",
    landingHref: "/solutions/it",
    menuItems: [{ id: "coming-soon", name: "Coming Soon", isComingSoon: true }],
  },
};

export function getChatbotContext(contextId: string | null | undefined) {
  if (!contextId) return null;
  return CHATBOT_CONTEXTS[contextId] ?? null;
}

export function getChatbotContextFromPath(pathname: string | null | undefined) {
  if (!pathname) return null;

  return (
    Object.values(CHATBOT_CONTEXTS).find((context) => {
      const landingHref = context.landingHref;
      return pathname === landingHref || pathname.startsWith(`${landingHref}/`);
    }) ?? null
  );
}

export const SOLUTIONS: SolutionContext[] = [
  {
    id: "hr",
    name: "HR Solutions",
    shortName: "HR",
    icon: "people",
    topics: ["Leave requests", "Employee onboarding", "Payroll", "Attendance", "Hiring", "Employee documents"],
    tools: ["HR System", "Document Management", "Email & Calendar", "Identity Management", "People Analytics"],
    actions: ["View pending leave requests", "Check joining formalities", "Verify documents", "Update employee profile", "Generate HR report"],
    starter: "Help me with my pending HR tasks",
    response: "I found several pending HR tasks. I can help you review, prioritize, and take action on them. Here’s a summary of what I found:",
    summary: ["3 pending leave requests", "2 pending joining formalities", "1 pending document verification", "1 pending profile update"],
  },
  {
    id: "sales",
    name: "Sales",
    shortName: "Sales",
    icon: "chart",
    topics: ["Leads", "Sales pipeline", "Follow-ups", "Customer information", "Sales reports"],
    tools: ["CRM", "Email & Calendar", "Sales Analytics", "Customer Database"],
    actions: ["Summarize open opportunities", "Find overdue follow-ups", "Review top leads", "Draft a sales report"],
    starter: "Give me a summary of sales performance",
    response: "I reviewed the current sales workspace and found a few useful signals for your team:",
    summary: ["12 active opportunities", "4 follow-ups due today", "3 high-intent leads", "1 stalled deal needing attention"],
  },
  {
    id: "support",
    name: "Customer Support",
    shortName: "Support",
    icon: "headset",
    topics: ["Customer tickets", "Issue resolution", "Support requests", "Customer information", "Escalations"],
    tools: ["Support Desk", "Customer Database", "Knowledge Base", "Email & Calendar"],
    actions: ["Review urgent tickets", "Find unresolved escalations", "Summarize customer issues", "Prepare a support report"],
    starter: "Show me the latest customer support update",
    response: "I checked the support workspace and organized the issues that need the most attention:",
    summary: ["5 tickets awaiting response", "2 priority escalations", "8 issues resolved today", "1 knowledge gap identified"],
  },
  {
    id: "it",
    name: "IT Solutions",
    shortName: "IT",
    icon: "terminal",
    topics: ["System access", "IT tickets", "Password/access requests", "Device issues", "Technical support"],
    tools: ["IT Service Desk", "Identity Management", "Device Management", "Knowledge Base"],
    actions: ["Review access requests", "Find unresolved IT tickets", "Check device issues", "Generate an IT report"],
    starter: "Help me review system access requests",
    response: "I checked the IT workspace and found these requests ready for review:",
    summary: ["4 access requests pending", "2 tickets awaiting approval", "3 device issues in progress", "1 password reset escalation"],
  },
  {
    id: "operations",
    name: "Operations",
    shortName: "Operations",
    icon: "workflow",
    topics: ["Tasks", "Approvals", "Reports", "Business operations", "Workflow status"],
    tools: ["Workflow Hub", "Operations Database", "Email & Calendar", "Business Analytics"],
    actions: ["Review pending approvals", "Check workflow status", "Summarize operations", "Generate an operations report"],
    starter: "What needs my attention in operations?",
    response: "I reviewed the operations workspace and grouped the work that needs attention:",
    summary: ["7 tasks in progress", "3 approvals waiting", "2 workflows delayed", "1 report ready to review"],
  },
];

export const RECENT_CHATS: RecentChat[] = [
  { id: "hr-tasks", title: "Pending HR tasks help", solutionId: "hr", time: "2m ago", message: "Help me with my pending HR tasks" },
  { id: "sales-summary", title: "Sales performance summary", solutionId: "sales", time: "1h ago", message: "Give me a summary of sales performance" },
  { id: "support-update", title: "Customer support update", solutionId: "support", time: "3h ago", message: "Show me the latest customer support update" },
  { id: "access-request", title: "System access request", solutionId: "it", time: "5h ago", message: "Help me review system access requests" },
  { id: "team-report", title: "Team performance report", solutionId: "operations", time: "1d ago", message: "What needs my attention in operations?" },
];

export const TALENT_ACQUISITION_RECENT_CHATS: RecentChat[] = [
  { id: "ta-candidate-screening", title: "Candidate screening help", solutionId: "hr", time: "2m ago", message: "Review candidates and summarize screening flags" },
  { id: "ta-hiring-pipeline", title: "Hiring pipeline update", solutionId: "hr", time: "18m ago", message: "Check hiring status across active roles" },
  { id: "ta-interview-scheduling", title: "Interview scheduling", solutionId: "hr", time: "42m ago", message: "Coordinate interviews and follow-ups" },
  { id: "ta-resume-review", title: "Resume review", solutionId: "hr", time: "1h ago", message: "Summarize candidate strengths and risks" },
];

export function getContextualRecentChats(contextId: string | null | undefined): RecentChat[] {
  if (contextId === "talent-acquisition") return TALENT_ACQUISITION_RECENT_CHATS;
  return RECENT_CHATS.filter((chat) => chat.solutionId === "hr");
}

export function getSolution(solutionId: SolutionId) {
  if (solutionId === "talent-acquisition") return SOLUTIONS[0];
  return SOLUTIONS.find((solution) => solution.id === solutionId) ?? SOLUTIONS[0];
}

export function getConnectedTools(solution: SolutionContext): ConnectedTool[] {
  return solution.tools.map((name) => ({ name, status: "Demo mode" }));
}

export function createConversation(solution: SolutionContext): ChatMessage[] {
  return [
    { id: `${solution.id}-user`, role: "user", content: solution.starter },
    {
      id: `${solution.id}-assistant`,
      role: "assistant",
      content: solution.response,
      summary: solution.summary,
      showActivity: true,
    },
  ];
}

