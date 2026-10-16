import {
    Login, DistributionRuns,
    StockRequests,
    StockSummary,
    ReturnApprovals
} from "@/pages";


export const routes = [
    {
        route: "/",
        page: <StockSummary />
    },
    {
        route: "/login",
        page: <Login />
    },
    {
        route: "/distribution-runs",
        page: <DistributionRuns />
    },
    {
        route: "/stock-requests",
        page: <StockRequests />
    },
    {
        route: "/stock-summary",
        page: <StockSummary />
    },
    {
        route: "/return-approvals",
        page: <ReturnApprovals />
    }
]