import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import ChildSummaryCard from "../../components/dashboard/ChildSummaryCard";
import ProgressChart from "../../components/dashboard/ProgressChart";
import InsightCards from "../../components/dashboard/InsightCards";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";
import ReminderWidget from "../../components/dashboard/ReminderWidget";

function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ChildSummaryCard />
            <ReminderWidget />
          </div>

          <ProgressChart />
          <ActivityTimeline />
        </div>

        <InsightCards />
      </div>
    </div>
  );
}

export default Dashboard;