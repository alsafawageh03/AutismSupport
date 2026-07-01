
import { CgSpinner } from "react-icons/cg";

import EmptyState from "../../components/ui/EmptyState";

import ModerationTabs from "../../components/admin/ModerationTabs";
import ModerationCard from "../../components/admin/ModerationCard";
import ReportCard from "../../components/admin/ReportCard";

import Title from "../../components/ui/Title";

import { useAdminModeration } from "../../hooks/useAdminModeration";

export default function Moderation() {
  const {
    activeTab,
    setActiveTab,
    queue,
    loading,
    handleDecision,
  } = useAdminModeration();

  const tabCounts = {
    posts: queue.pendingPosts.length,
    comments: queue.pendingComments.length,
    reports: queue.openReports.length,
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <CgSpinner className="h-8 w-8 animate-spin text-[var(--color-primary)]" />
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-[var(--bg-page)] py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      {/* Header */}
      
      <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
        

        <div className="max-w-7xl mx-auto"  >
                  <Title 
          title="Moderation Panel"
          subtitle=" Review community posts, comments and reports."
        />
      
        </div>
      </div>

      {/* Tabs */}
      <ModerationTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={tabCounts}
      />

      {/* Posts */}
      {activeTab === "posts" &&
        (queue.pendingPosts.length === 0 ? (
          <EmptyState
            title="No Pending Posts"
            description="There are currently no posts awaiting moderation."
          />
        ) : (
          <div className="space-y-4">
            {queue.pendingPosts.map((item) => (
              <ModerationCard
                key={item.id}
                type="post"
                item={item}
                onDecision={handleDecision}
              />
            ))}
          </div>
        ))}

      {/* Comments */}
      {activeTab === "comments" &&
        (queue.pendingComments.length === 0 ? (
          <EmptyState
            title="No Pending Comments"
            description="There are currently no comments awaiting moderation."
          />
        ) : (
          <div className="space-y-4">
            {queue.pendingComments.map((item) => (
              <ModerationCard
                key={item.id}
                type="comment"
                item={item}
                onDecision={handleDecision}
              />
            ))}
          </div>
        ))}

      {/* Reports */}
      {activeTab === "reports" &&
        (queue.openReports.length === 0 ? (
          <EmptyState
            title="No Open Reports"
            description="Everything looks clean. No reports require attention."
          />
        ) : (
          <div className="space-y-4">
            {queue.openReports.map((report) => (
              <ReportCard
                key={report.id ?? report.targetId}
                report={report}
              />
            ))}
          </div>
        ))}
    </div>
    </div>
  );
}