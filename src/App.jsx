import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Context providers
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProfileProvider } from "./context/ProfileContext";
import { TrackingProvider } from "./context/TrackingContext";
import { CommunityProvider } from "./context/CommunityContext";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

// Protected route wrapper
import ProtectedRoute from "./components/ProtectedRoute";

// Auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgottenPassword from "./pages/auth/ForgotPassword";

// Child profile creation
import CreateChildProfile from "./pages/child/CreateChildProfile";

// Assessment and report pages (new)
import Assessment from "./pages/assessment/Assessment";
import Report from "./pages/report/Report";

// Main authenticated pages
import Dashboard from "./pages/dashboard/Dashboard";
import Community from "./pages/community/Community";
import PostDetails from "./pages/community/PostDetails";
import Learning from "./pages/learning/Learning";
import ResourceDetails from "./pages/learning/ResourceDetails";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProfileProvider>
          <TrackingProvider>
            <CommunityProvider>
              <BrowserRouter>
                <Routes>
                  {/* Public routes – AuthLayout */}
                  <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgottenPassword />}
                    />
                  </Route>

                  {/* Child profile creation – requires auth but not profile */}
                  <Route
                    path="/create-child-profile"
                    element={
                      <ProtectedRoute requiresProfile={false}>
                        <CreateChildProfile />
                      </ProtectedRoute>
                    }
                  />

                  {/* Protected routes – require both auth and profile */}
                  <Route element={<ProtectedRoute requiresProfile={true} />}>
                    <Route element={<MainLayout />}>
                      {/* Redirect root to dashboard */}
                      <Route
                        path="/"
                        element={<Navigate to="/dashboard" replace />}
                      />

                      {/* Assessment flow */}
                      <Route path="/assessment" element={<Assessment />} />
                      <Route path="/report" element={<Report />} />

                      {/* Main app pages */}
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/community" element={<Community />} />
                      <Route path="/community/:id" element={<PostDetails />} />
                      <Route path="/learning" element={<Learning />} />
                      <Route
                        path="/learning/:id"
                        element={<ResourceDetails />}
                      />
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                  </Route>

                  {/* Catch-all – redirect to home */}
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
