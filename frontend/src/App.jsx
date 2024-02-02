import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import RootLayoutOffWidgets from "./pages/RootOffWidgets";
import ErrorPage from "./pages/Error";
import SearchPage from "./pages/Search";
import PlanningPage from "./pages/Planning";
import ApplicantList from "./pages/ApplicantList";
import TripRegisterPage from "./pages/TripResgister";
import TripDetailPage from "./pages/TripDetail";
import ChatPage from "./pages/Chat";
import PracticePage from "./pages/PracticeInfinite";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import YonghwanPage from "./test/YonghwanPage";
import YejinPage from "./test/YejinPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayoutOffWidgets />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/applicantList",
        element: <ApplicantList />,
      },
      {
        path: "/planning",
        element: <PlanningPage />,
      },

      {
        path: "/Mypage",
        element: <Mypage />,
      },
      {
        path: "/register",
        element: <TripRegisterPage />,
      },
      {
        path: "/detail",
        element: <TripDetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    
    ],
  },

  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "chatRoomTest",
        element: <ChatPage />,
      },
      {
        path: "practice",
        element: <PracticePage />,
      },
      {
        path: "login/oauth2/code/kakao",
        element: <Login />,
      },
      {
        path: "login/oauth2/code/naver",
        element: <Login />,
      },
      {
        path: "/yonghwan",
        element: <YonghwanPage />
      },
      {
        path: "/yejin",
        element: <YejinPage />
      }
    ],
  },
]);

function App() {
  return (
    <div className="font-spoqa">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
