import { LuEllipsis, LuFlag } from "react-icons/lu";
import DropdownMenu from "../ui/DropdownMenu";

function PostReport() {
  const handleReport = () => {
    console.log("Report Post");
  };

  return (
    <DropdownMenu
      trigger={<LuEllipsis className="w-5 h-5 cursor-pointer" />}
      items={[
        {
          label: "Report Post",
          icon: <LuFlag className="w-4 h-4" />,
          className: "text-red-500 hover:text-red-600",
          onClick: handleReport,
        },
      ]}
    />
  );
}

export default PostReport;