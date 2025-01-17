import AuthContext from "api/auth-context";
import MobileLayout from "pages/MobileLayout";
import NotFoundPage from "pages/NotFoundPage";
import CalendarPage from "pages/calendar/CalendarPage";
import GoalPage from "pages/goal/GoalPage";
import HomePage from "pages/home/HomePage";
import LoginPage from "pages/login/LoginPage";
import PloggingPage from "pages/plogging/PloggingPage";
import PostPage from "pages/post/PostPage";
import RankingPage from "pages/ranking/RankingPage";
import ScorePage from "pages/score/ScorePage";
import SettingPage from "pages/setting/SettingPage";
import SignupPage from "pages/signup/SignupPage";

import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <MobileLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/signup" element={authCtx.isLoggedIn ? <Navigate to="/" /> : <SignupPage />} />
        <Route path="/login" element={authCtx.isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/setting" element={!authCtx.isLoggedIn ? <Navigate to="/" /> : <SettingPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/plogging" element={<PloggingPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MobileLayout>
  );
}

export default App;
