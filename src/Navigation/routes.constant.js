import SignupPage from "../pages/signup.page"
import DashboardPage from "../pages/dashboard.page"
import LoginPage from "../pages/Login.page"
import LandingPage from "../pages/Landing.page"
import HospitalBookingPage from "../pages/hospitalBooking.page"
import MedHistoryPage from "../pages/medHistory.page"



export const privateRoutes = [
    {
        path:"/dashboard",
        components:<DashboardPage />
    },
    {
        path:"/hospitals",
        components:<HospitalBookingPage />
    },
    {
        path:"/medhistory",
        components:<MedHistoryPage />
    },
]

export const publicRoutes = [
    {
        path:"/",
        components:<LandingPage />
    },
    {
        path:"/signup",
        components:<SignupPage />
    },
    {
        path:"/login",
        components:<LoginPage />
    },
]