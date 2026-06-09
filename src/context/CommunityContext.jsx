import { createContext, useContext, useState } from "react";

const CommunityContext = createContext();

export const useCommunity = () => useContext(CommunityContext);

function CommunityProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const createPost = (post) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <CommunityContext.Provider
      value={{
        posts,
        createPost,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
}

export default CommunityProvider;