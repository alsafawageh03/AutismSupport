import { useState, useEffect, useCallback } from "react";
import { moderationApi } from "../services/moderationApi";
import { toast } from "react-hot-toast";

export function useAdminModeration() {
  const [activeTab, setActiveTab] = useState("posts");

  const [queue, setQueue] = useState({
    pendingPosts: [],
    pendingComments: [],
    openReports: [],
  });

  const [loading, setLoading] = useState(true);

  /**
   * Load moderation queue
   */
const fetchQueue = useCallback(async () => {
  try {
    setLoading(true);

    const queue = await moderationApi.getQueue();

    console.log("Queue:", queue);

    if (!queue) {
      setQueue({
        pendingPosts: [],
        pendingComments: [],
        openReports: [],
      });
      return;
    }

    setQueue({
      pendingPosts: queue.pendingPosts ?? [],
      pendingComments: queue.pendingComments ?? [],
      openReports: queue.openReports ?? [],
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to load moderation queue.");
  } finally {
    setLoading(false);
  }
}, []);

  useEffect(() => {
    fetchQueue();
  }, [fetchQueue]);

  /**
   * Remove moderated item locally
   */
    const removeItem = useCallback((type, id) => {
      setQueue((prev) => ({
        ...prev,

        pendingPosts:
          type === "post"
            ? prev.pendingPosts.filter((item) => item.id !== id)
            : prev.pendingPosts,

        pendingComments:
          type === "comment"
            ? prev.pendingComments.filter((item) => item.id !== id)
            : prev.pendingComments,
      }));
    }, []);
  /**
   * Approve / Reject
   */
  const handleDecision = async (
    type,
    id,
    status,
    note = ""
  ) => {
    try {
      let response;

      if (type === "post") {
        response = await moderationApi.moderatePost(id, status, note);
      } else if (type === "comment") {
        response = await moderationApi.moderateComment(id, status, note);
      } else {
        throw new Error(`Unknown moderation type: ${type}`);
      }

      if (response?.succeeded) {
        removeItem(type, id);

        toast.success(
          response.message ??
          `${type} updated successfully.`
        );

        return true;
      }

      toast.error(
        response?.message ??
        `Failed to update ${type}.`
      );

      return false;
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ??
        error?.message ??
        `Failed to update ${type}.`
      );

      return false;
    }
  };

  /**
   * Manual refresh
   */
  const refreshQueue = fetchQueue;  

  return {
    loading,

    activeTab,
    setActiveTab,

    queue,

    handleDecision,

    refreshQueue,
  };
}