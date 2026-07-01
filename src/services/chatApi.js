const BASE_URL = "/api";

const defaultHeaders = {
  accept: "application/json",
};

const handleResponse = async (response, defaultMessage) => {
  if (!response.ok) {
    let errorMessage = defaultMessage;

    try {
      const error = await response.json();
      errorMessage = error.message || error.detail || defaultMessage;
    } catch {
      // Ignore JSON parsing errors (e.g. HTML error pages)
      if (response.status === 413) {
        errorMessage = "The uploaded file is too large.";
      }
    }

    throw new Error(errorMessage);
  }

  return response.json();
};

export const chatApi = {
  /**
   * ==========================
   * USER ENDPOINTS
   * ==========================
   */

  async getWelcome() {
    const response = await fetch(`${BASE_URL}/welcome`, {
      method: "GET",
      headers: defaultHeaders,
    });

    return handleResponse(response, "Failed to load welcome message.");
  },

  async askQuestion(text, limit = 5) {
    const response = await fetch(
      `${BASE_URL}/nlp/answer/books_chunks`,
      {
        method: "POST",
        headers: {
          ...defaultHeaders,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          limit,
        }),
      }
    );

    return handleResponse(response, "Failed to get chatbot response.");
  },

  /**
   * ==========================
   * ADMIN ENDPOINTS
   * ==========================
   */

  async uploadBook(file, metadata) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("data", JSON.stringify(metadata));

    const response = await fetch(`${BASE_URL}/upload/books`, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formData,
    });

    return handleResponse(response, "Failed to upload book.");
  },

  async processBookChunks(
    file,
    chunkSize = 512,
    overlap = 50
  ) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("chunk_size", chunkSize);
    formData.append("over_lap", overlap);

    const response = await fetch(
      `${BASE_URL}/file_process/books/chunks`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      }
    );

    return handleResponse(response, "Failed to process book.");
  },

  async getBookInfo() {
    const response = await fetch(
      `${BASE_URL}/nlp/get_info/books_chunks`,
      {
        method: "GET",
        headers: defaultHeaders,
      }
    );

    return handleResponse(
      response,
      "Failed to load collection information."
    );
  },
};