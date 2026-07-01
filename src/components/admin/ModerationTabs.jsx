import {
  FiAlertTriangle,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ModerationTabs({
  activeTab,
  setActiveTab,
  counts = {},
}) {
  const {
    posts = 0,
    comments = 0,
    reports = 0,
  } = counts;

  const tabs = [
    {
      id: "posts",
      label: "Pending Posts",
      icon: FiFileText,
      count: posts,
    },
    {
      id: "comments",
      label: "Pending Comments",
      icon: FiMessageSquare,
      count: comments,
    },
    {
      id: "reports",
      label: "Open Reports",
      icon: FiAlertTriangle,
      count: reports,
    },
  ];

  return (
    <div className="mb-6 flex flex-wrap gap-3 md:flex-nowrap">
      {tabs.map(({ id, label, icon: Icon, count }) => (
        <Button
          key={id}
          variant={activeTab === id ? "primary" : "secondary"}
          onClick={() => setActiveTab(id)}
          aria-pressed={activeTab === id}
          className="flex flex-1 items-center justify-center gap-2"
        >
          <Icon size={18} />

          <span>{label}</span>

          <Badge
            variant={activeTab === id ? "light" : "secondary"}
            size="sm"
          >
            {count}
          </Badge>
        </Button>
      ))}
    </div>
  );
}