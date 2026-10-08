import { Summary, NotepadText, Package, RotateCcw } from 'lucide-react';


export const sidebarNav = [
    { label: "Stock Summary", icon: Summary },
    { label: "Stock Requests", icon: NotepadText, badge: 3 },
    { label: "Distribution Runs", icon: Package },
    { label: "Return Approvals", icon: RotateCcw, badge: 2 },
]