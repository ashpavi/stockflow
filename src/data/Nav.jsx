import { Summary, NotepadText, Package, RotateCcw } from 'lucide-react';


export const sidebarNav = [
    { label: "Stock Summary", icon: Summary, to:"/stock-summary", activePaths:["/","/stock-summary"] },
    { label: "Stock Requests", icon: NotepadText, to:"/stock-requests", badge: 3 },
    { label: "Distribution Runs", icon: Package, to:"/distribution-runs" },
    { label: "Return Approvals", icon: RotateCcw, to:"/return-approvals", badge: 2 },
]