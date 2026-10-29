import {
    Login, 
    DistributionRuns,
    StockRequests,
    StockSummary,
    ReturnApprovals
} from "@/pages";


export const routes = [
    {
        route: "/",
        title: "Stock Summary",
        page: <StockSummary />
    },
    {
        route: "/login",
        title: "Login",
        page: <Login />
    },
    {
        route: "/distribution-runs",
        title: "Distribution Runs",
        page: <DistributionRuns />
    },
    {
        route: "/stock-requests",
        title: "Stock Requests",
        page: <StockRequests />
    },
    {
        route: "/stock-summary",
        title: "Stock Summary",
        page: <StockSummary />
    },
    {
        route: "/return-approvals",
        title: "Return Approvals",
        page: <ReturnApprovals />
    }
]