import { useState } from "react";

function Tabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <div
        className="
          flex
          gap-2
          bg-[var(--gray-100)]
          p-1
          rounded-xl
          mb-4
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1
              py-2
              rounded-lg
              text-sm
              font-medium
              transition
              ${
                activeTab === tab.id
                  ? "bg-[var(--white)] shadow-sm text-[var(--primary-600)]"
                  : "text-[var(--text-secondary)]"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{activeContent?.content}</div>
    </div>
  );
}

export default Tabs;