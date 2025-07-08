import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // Updated to remove extension
import NotFound from "./pages/NotFound"; // Updated to remove extension
import Login from "./pages/Login"; // Updated to remove extension
import Signup from "./pages/Signup"; // Updated to remove extension
import ForStudents from "./pages/ForStudents"; // Updated to remove extension
import ForTeachers from "./pages/ForTeachers"; // Updated to remove extension
import Resources from "./pages/Resources"; // Updated to remove extension
import Courses from "./pages/Courses"; // Updated to remove extension
import FindTutor from "./pages/FindTutor"; // Updated to remove extension
import VerifyEmail from "./pages/VerifyEmail"; // Updated to remove extension
import RequestPasswordReset from "./pages/RequestPasswordReset"; // Updated to remove extension
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard"; // Updated to remove extension
import Chat from "./pages/Chat";
import AdminDashboard from "./pages/AdminDashboard";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/for-students" element={<ForStudents />} />
        <Route path="/for-teachers" element={<ForTeachers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/courses极客时间" element={<Courses />} />
        <Route path="/find-tutor" element={<FindTutor />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/request-password-reset" element={<RequestPasswordReset />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
