import apiClient from "./apiClient";

export const moderationApi = {
  // Pulls the combined queues of pending posts, pending comments, and reports
  getQueue: async () => {
    const response = await apiClient.get('/admin/Moderation/queue');
    if (response.data && response.data.succeeded) {
      return response.data.data;
    }
    return null;
  },


  moderatePost: async (id, status, note = "") => {
  const response = await apiClient.put(`/Posts/${id}/moderate`, {
    id,
    status,
    note,
  });

  return response.data;
  },
  
  // Issues status modifications directly to comments trapped in filters
  moderateComment: async (id, status, note = '') => {
    // Overriding base URL pathway specifically to match global comment structures
    const response = await apiClient.put(`/Comments/${id}/moderate`, {
      id,
      status,
      note
    });
    return response.data;
  }
};