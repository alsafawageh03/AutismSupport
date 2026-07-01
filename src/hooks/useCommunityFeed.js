import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";

import { communityApi } from "../services/communityApi";
import { TargetType } from "../constants/enums";

export function useCommunityFeed() {
  /* ============================================================
      State
  ============================================================ */

  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);

  const [activePostComments, setActivePostComments] = useState({});

  const [commentInputs, setCommentInputs] = useState({});

  /* ============================================================
      Load Community Feed
  ============================================================ */

  const loadFeed = useCallback(async () => {
    try {
      setLoading(true);

      const response = await communityApi.getPosts(1, 10);

      if (!response?.succeeded) {
        setPosts([]);
        return;
      }

      const items = response.data?.items ?? [];

      const enrichedPosts = await Promise.all(
        items.map(async (post) => {
          try {
            const [likedRes, countRes] = await Promise.all([
              communityApi.getMyPostReaction(post.id),
              communityApi.getPostReactionCount(post.id),
            ]);

            return {
              ...post,
              isReacted: likedRes.data ?? false,
              reactionsCount:
                countRes.data ??
                post.reactionsCount ??
                0,
            };
          } catch {
            return {
              ...post,
              isReacted: false,
              reactionsCount:
                post.reactionsCount ?? 0,
            };
          }
        })
      );

      setPosts(enrichedPosts);
    } catch (error) {
      console.error("Failed to load feed:", error);

      toast.error(
        error?.response?.data?.message ??
          "Failed to load community feed."
      );

      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFeed();
  }, [loadFeed]);

    /* ============================================================
      Create Post
  ============================================================ */

  const handleCreatePost = useCallback(
    async (content, photo = null) => {
      if (!content?.trim() && !photo) {
        toast.error("Please enter some content or choose a photo.");
        return false;
      }

      try {
        const response = await communityApi.createPost(
          content,
          photo
        );

        if (!response?.succeeded) {
          toast.error(
            response?.message ??
              "Failed to create post."
          );
          return false;
        }

        toast.success(
          response?.data ??
            "Post submitted for moderation."
        );

        await loadFeed();

        return true;
      } catch (error) {
        console.error("Create post failed:", error);

        toast.error(
          error?.response?.data?.message ??
            "Failed to create post."
        );

        return false;
      }
    },
    [loadFeed]
  );

  /* ============================================================
      Delete Post
  ============================================================ */

  const handleDeletePost = useCallback(
    async (postId) => {
      try {
        const response =
          await communityApi.deletePost(postId);

        if (!response?.succeeded) {
          toast.error(
            response?.message ??
              "Failed to delete post."
          );
          return false;
        }

        setPosts((prev) =>
          prev.filter((post) => post.id !== postId)
        );

        toast.success(
          response?.message ??
            "Post deleted successfully."
        );

        return true;
      } catch (error) {
        console.error("Delete post failed:", error);

        toast.error(
          error?.response?.data?.message ??
            "Failed to delete post."
        );

        return false;
      }
    },
    []
  );

  /* ============================================================
      Toggle Comments
  ============================================================ */

  const toggleComments = useCallback(
    async (postId) => {
      // Close if already opened
      if (activePostComments[postId]) {
        setActivePostComments((prev) => {
          const updated = { ...prev };
          delete updated[postId];
          return updated;
        });

        return;
      }

      try {
        const comments =
          await communityApi.refreshComments(postId);

        const enrichedComments = await Promise.all(
          comments.map(async (comment) => {
            try {
              const [liked, count] =
                await Promise.all([
                  communityApi.getMyCommentReaction(
                    comment.id
                  ),
                  communityApi.getCommentReactionCount(
                    comment.id
                  ),
                ]);

              return {
                ...comment,
                isReacted: liked.data ?? false,
                reactionsCount:
                  count.data ??
                  comment.reactionsCount ??
                  0,
              };
            } catch {
              return {
                ...comment,
                isReacted: false,
                reactionsCount:
                  comment.reactionsCount ?? 0,
              };
            }
          })
        );

        setActivePostComments((prev) => ({
          ...prev,
          [postId]: enrichedComments,
        }));
      } catch (error) {
        console.error(
          "Loading comments failed:",
          error
        );

        toast.error(
          "Failed to load comments."
        );
      }
    },
    [activePostComments]
  );

  /* ============================================================
      Comment Input
  ============================================================ */

  const setCommentInputForPost = useCallback(
    (postId, value) => {
      setCommentInputs((prev) => ({
        ...prev,
        [postId]: value,
      }));
    },
    []
  );

  /* ============================================================
      Create Comment
  ============================================================ */
  

  const handleSendComment = useCallback(
    async (postId) => {
      const content = commentInputs[postId];

      if (!content?.trim()) {
        toast.error("Comment cannot be empty.");
        return false;
      }

      try {
        const response =
          await communityApi.createComment(
            postId,
            content
          );

        if (!response?.succeeded) {
          toast.error(
            response?.message ??
              "Failed to create comment."
          );
          return false;
        }

        toast.success(
          response?.data ??
            "Comment submitted for moderation."
        );

        setCommentInputs((prev) => ({
          ...prev,
          [postId]: "",
        }));

        // Refresh approved comments only
        const comments =
          await communityApi.refreshComments(postId);

        setActivePostComments((prev) => ({
          ...prev,
          [postId]: comments,
        }));

        return true;
      } catch (error) {
        console.error(
          "Create comment failed:",
          error
        );

        toast.error(
          error?.response?.data?.message ??
            "Failed to create comment."
        );

        return false;
      }
    },
    [commentInputs]
  );

  /* ============================================================
      Delete Comment
  ============================================================ */

  const handleDeleteComment = useCallback(
    async (commentId, postId) => {
      try {
        const response =
          await communityApi.deleteComment(
            commentId
          );

        if (!response?.succeeded) {
          toast.error(
            response?.message ??
              "Failed to delete comment."
          );

          return false;
        }

        setActivePostComments((prev) => ({
          ...prev,
          [postId]: (prev[postId] || []).filter(
            (comment) =>
              comment.id !== commentId
          ),
        }));

        toast.success(
          response?.message ??
            "Comment deleted successfully."
        );

        return true;
      } catch (error) {
        console.error(
          "Delete comment failed:",
          error
        );

        toast.error(
          error?.response?.data?.message ??
            "Failed to delete comment."
        );

        return false;
      }
    },
    []
  );
    /* ============================================================
      React to Post / Comment
  ============================================================ */

  const handleReact = useCallback(
    async (
      targetId,
      targetType = TargetType.Post
    ) => {
      try {
        if (targetType === TargetType.Post) {
          const post = posts.find(
            (p) => p.id === targetId
          );

          if (!post) return false;

          // Backend doesn't support removing reactions yet
          if (post.isReacted) return true;

          const response =
            await communityApi.addReaction(
              TargetType.Post,
              targetId,
             
            );

          if (!response?.succeeded) {
            toast.error(
              response?.message ??
                "Failed to react."
            );
            return false;
          }

          setPosts((prev) =>
            prev.map((post) =>
              post.id === targetId
                ? {
                    ...post,
                    isReacted: true,
                    reactionsCount:
                      (post.reactionsCount || 0) + 1,
                  }
                : post
            )
          );

          return true;
        }

        // ==========================
        // Comment Reaction
        // ==========================

        const response =
          await communityApi.addReaction(
            TargetType.Comment,
            targetId,
            
          );

        if (!response?.succeeded) {
          toast.error(
            response?.message ??
              "Failed to react."
          );
          return false;
        }

        setActivePostComments((prev) => {
          const updated = { ...prev };

          Object.keys(updated).forEach((postId) => {
            updated[postId] = updated[postId].map(
              (comment) =>
                comment.id === targetId
                  ? {
                      ...comment,
                      isReacted: true,
                      reactionsCount:
                        (comment.reactionsCount || 0) + 1,
                    }
                  : comment
            );
          });

          return updated;
        });

        return true;
      } catch (error) {
  console.error("Reaction failed:", error);

  toast.error(
    error?.response?.data?.message ??
    "Failed to react."
  );

  return false;
}
    },
    [posts]
  );

  /* ============================================================
      Report Content
  ============================================================ */

  const handleReportContent = useCallback(
    async (
      targetId,
      reason,
      targetType = TargetType.Post
    ) => {
      if (!reason?.trim()) {
        toast.error(
          "Please enter a report reason."
        );
        return false;
      }

      try {
        const response =
          await communityApi.reportContent(
            targetType,
            targetId,
            reason
          );

        if (!response?.succeeded) {
          toast.error(
            response?.message ??
              "Failed to submit report."
          );

          return false;
        }

        toast.success(
          "Report submitted successfully."
        );

        return true;
      } catch (error) {
        console.error(
          "Report failed:",
          error
        );

        toast.error(
          error?.response?.data?.message ??
            "Failed to submit report."
        );

        return false;
      }
    },
    []
  );

  /* ============================================================
      Refresh Feed
  ============================================================ */

  const refreshFeed = loadFeed;

  /* ============================================================
      Hook API
  ============================================================ */

  return {
    loading,

    posts,

    activePostComments,

    commentInputs,

    handleCreatePost,

    handleDeletePost,

    toggleComments,

    handleSendComment,

    handleDeleteComment,

    handleReact,

    handleReportContent,

    setCommentInputForPost,

    refreshFeed,
  };
}

export default useCommunityFeed;