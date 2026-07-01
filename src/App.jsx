 
 
 import ProgressTracking from "./pages/progress/ProgressTracking"; 
 import DailyInsights from "./pages/dailyInsights/DailyInsights";
 
 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";
import ProfileProvider from "./context/ProfileContext";
import TrackingProvider from "./context/TrackingContext";
import CommunityProvider from "./context/CommunityContext";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgottenPassword from "./pages/auth/ForgotPassword";

import CreateChildProfile from "./pages/child/CreateChildProfile";
import ChildProfile from "./pages/child/ChildProfile";

import Assessment from "./pages/assessment/Assessment";
import Report from "./pages/report/Report";

import Dashboard from "./pages/dashboard/Dashboard";
import Community from "./pages/community/Community";
import Chatbot from "./pages/chat/Chatbot";
import MotionAnalysis from "./pages/motionAnalysis/MotionAnalysis";
import Learning from "./pages/learning/Learning";
import ResourceDetails from "./pages/learning/ResourceDetails";
import Profile from "./pages/profile/Profile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";
import Moderation from "./pages/community/Moderation";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProfileProvider>
          <TrackingProvider>
            <CommunityProvider>
              <BrowserRouter>
                <Routes>
                  <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgottenPassword />} />
                  </Route>

                  <Route
                    path="/create-child-profile"
                    element={
                      <ProtectedRoute requiresProfile={false}>
                        <CreateChildProfile />
                      </ProtectedRoute>
                    }
                  />

                  <Route element={<ProtectedRoute requiresProfile={true} />}>
                    <Route element={<MainLayout />}>
                      <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      <Route path="/assessment" element={<Assessment />} />
                      <Route path="/report" element={<Report />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/child" element={<ChildProfile />} />
                      <Route path="/daily-insights" element={<DailyInsights />} />
                      <Route path="/progress-tracking" element={<ProgressTracking />} />
                      <Route path="/community" element={<Community />} />
                      {/* <Route element={<AdminRoute/>}> */}
                        <Route path="/admin/moderation" element={<Moderation />} /> 
                        <Route path="/admin/knowledgebase" element={<AdminDashboard />} /> 
                        {/* </Route> */}
                      <Route path="/chatbot" element={<Chatbot />} />
                      <Route path="/motionAnalysis" element={<MotionAnalysis />} />
                      <Route path="/learning" element={<Learning />} />
                      <Route path="/learning/:id" element={<ResourceDetails />} />
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                  </Route>

                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </BrowserRouter>
            </CommunityProvider>
          </TrackingProvider>
        </ProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;