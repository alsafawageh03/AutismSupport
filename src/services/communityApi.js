/* ===========================================
   Axios Instance
=========================================== */

import apiClient from "./apiClient"

import { ReactionType } from "../constants/enums";
/* ===========================================
   API
=========================================== */

export const communityApi = {
  /* ======================================================
      POSTS
  ======================================================= */

  async getPosts(pageNumber = 1, pageSize = 10) {
    const { data } = await apiClient.get("/Posts", {
      params: {
        pageNumber,
        pageSize,
      },
    });

    return data;
  },

  async getPost(postId) {
    const { data } = await apiClient.get(`/Posts/${postId}`);
    return data;
  },

  async createPost(content, photo = null) {
    const formData = new FormData();

    formData.append("Content", content);

    if (photo) {
      formData.append("Photo", photo);
    }

    const { data } = await apiClient.post("/Posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  },

  async deletePost(postId) {
    const { data } = await apiClient.delete(`/Posts/${postId}`);
    return data;
  },

  /* ======================================================
      COMMENTS
  ======================================================= */

  async getComments(postId) {
    const { data } = await apiClient.get(`/Comments/post/${postId}`);
    return data;
  },

  async createComment(postId, content) {
    const { data } = await apiClient.post("/Comments", {
      postId,
      content,
    });

    return data;
  },

  async deleteComment(commentId) {
    const { data } = await apiClient.delete(`/Comments/${commentId}`);
    return data;
  },

  /* ======================================================
      REACTIONS
  ======================================================= */

async addReaction(targetType, targetId) {
  const payload = {
    targetType,
    targetId,
    reactionType: 0,
  };

  console.log("Reaction payload:", payload);

  const { data } = await apiClient.post("/Reactions", payload);

  return data;
},

  async getMyPostReaction(postId) {
    const { data } = await apiClient.get(
      `/Posts/${postId}/reactions/me`
    );

    return data;
  },

  async getPostReactionCount(postId) {
    const { data } = await apiClient.get(
      `/Posts/${postId}/reactions/count`
    );

    return data;
  },

  // Future endpoint if backend provides it
  async getMyCommentReaction(commentId) {
    try {
      const { data } = await apiClient.get(
        `/Comments/${commentId}/reactions/me`
      );

      return data;
    } catch {
      return {
        succeeded: false,
        data: false,
      };
    }
  },

  async getCommentReactionCount(commentId) {
    try {
      const { data } = await apiClient.get(
        `/Comments/${commentId}/reactions/count`
      );

      return data;
    } catch {
      return {
        succeeded: false,
        data: 0,
      };
    }
  },

  /* ======================================================
      REPORTS
  ======================================================= */

  async reportContent(targetType, targetId, reason) {
    const { data } = await apiClient.post("/Reports", {
      targetType,
      targetId,
      reason,
    });

    return data;
  },

  /* ======================================================
      MODERATION
  ======================================================= */

  async getModerationQueue() {
    const { data } = await apiClient.get(
      "/admin/Moderation/queue"
    );

    return data;
  },

  async moderatePost(id, status, note = "") {
    const { data } = await apiClient.put(
      `/Posts/${id}/moderate`,
      {
        id,
        status,
        note,
      }
    );

    return data;
  },

  async moderateComment(id, status, note = "") {
    const { data } = await apiClient.put(
      `/Comments/${id}/moderate`,
      {
        id,
        status,
        note,
      }
    );

    return data;
  },

  /* ======================================================
      HELPERS
  ======================================================= */

  async refreshPost(postId) {
    const [post, reaction, count] = await Promise.all([
      this.getPost(postId),
      this.getMyPostReaction(postId),
      this.getPostReactionCount(postId),
    ]);

    return {
      ...post.data,
      isReacted: reaction.data,
      reactionsCount: count.data,
    };
  },

  async refreshComments(postId) {
    const response = await this.getComments(postId);

    if (!response.succeeded) return [];

    const comments = response.data ?? [];

    const enriched = await Promise.all(
      comments.map(async (comment) => {
        const [liked, count] = await Promise.all([
          this.getMyCommentReaction(comment.id),
          this.getCommentReactionCount(comment.id),
        ]);

        return {
          ...comment,
          isReacted: liked.data ?? false,
          reactionsCount: count.data ?? comment.reactionsCount ?? 0,
        };
      })
    );

    return enriched;
  },
};

export default communityApi;