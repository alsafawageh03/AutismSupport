import { createContext, useContext, useState } from "react";

const TrackingContext = createContext();

export const useTracking = () => useContext(TrackingContext);

function TrackingProvider({ children }) {
  const [trackingData, setTrackingData] = useState([]);

  return (
    <TrackingContext.Provider
      value={{
        trackingData,
        setTrackingData,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export default TrackingProvider;