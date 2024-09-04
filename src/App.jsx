/* eslint-disable no-unused-vars */
// import styled from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Order from "./pages/Order";
import HORPage from "./pages/HORPage";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import Notification from "./ui/NotificationWindow";
import Checkout from "./pages/Checkout";
import BannerNotification from "./ui/BannerNotification";
{
  /* <GlobalStyles /> */
}

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 60 * 1000,
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <BannerNotification>
          <Notification>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="/home" element={<Landing />} />

                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route path="reservations" element={<Order />} />
                <Route path="order" element={<Order />} />
                <Route path="cuisine" element={<HORPage />} />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route
                path="/login?"
                element={
                  <ProtectedRoute>
                    {/* <HORPage /> */}
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Notification>
        </BannerNotification>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
