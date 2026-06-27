import { useEffect, useState } from "react";


const genderMap = {
  1: "Male",
  2: "Female",
  3: "Other",
  4: "Prefer not to say",
};

const supportNeedsLevelMap = {
  1: "Light Support",
  2: "Medium Support",
  3: "High Support",
};


const fallbackProfile = {
  name: "Omar Mohamed",
  age: "6 years old",
  gender: "Male",
  supportLevel: "Medium Support",
  preferredSchedule: "Visual schedule",
  challenges: ["Sensory sensitivity", "Social interaction", "Routine changes"],
  communication: ["Visual cards", "Short sentences", "Gestures"],
  strengths: ["Memory", "Pattern recognition", "Drawing"],
};

function useChildProfile() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchChildProfile() {
      try {
        setLoading(true);

       const token =
 "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWxpIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJhbGkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhaG03MDc3NjZAZ21haWwuY29tIiwiUGhvbmVOdW1iZXIiOiI5MDkzODMyIiwiSWQiOiIxNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzgyNjY5OTEwLCJpc3MiOiJTY2hvb2xQcm9qZWN0IiwiYXVkIjoiV2ViU2l0ZSJ9.LmnML99rTT7TU-HJpVYzinSClwS8IS9_iZ4EN_m093k";

const response = await fetch("https://autism.runasp.net/api/child-profiles", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

        if (!response.ok) {
          throw new Error("Failed to fetch child profile");
        }

        const data = await response.json();
        const firstProfile = data.data;

        if (firstProfile) {
          setProfile({
            name: firstProfile.nickname || fallbackProfile.name,
            age: firstProfile.ageInYears
              ? `${firstProfile.ageInYears} years old`
              : fallbackProfile.age,
            gender: genderMap[firstProfile.gender] || fallbackProfile.gender,

         supportLevel:
  supportNeedsLevelMap[firstProfile.supportNeedsLevel] ||
  fallbackProfile.supportLevel,
  
            preferredSchedule: firstProfile.prefersVisualSchedules
              ? "Visual schedule"
              : fallbackProfile.preferredSchedule,
            challenges:
              firstProfile.mainDailyChallenges || fallbackProfile.challenges,
            communication:
              firstProfile.communicationMethods || fallbackProfile.communication,
            strengths:
              firstProfile.strengthsAndInterests || fallbackProfile.strengths,
          });
        }
      } catch (err) {
        setError(err.message);
        setProfile(fallbackProfile);
      } finally {
        setLoading(false);
      }
    }

    fetchChildProfile();
  }, []);

  return { profile, loading, error };
}

export default useChildProfile;