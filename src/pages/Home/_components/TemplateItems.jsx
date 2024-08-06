import { Box, Calendar, CheckCircle2, Flag, NotepadText, Plane } from "lucide-react";

export const TemplateItems = [
    {
        id: 1,
        icon: Flag,
        title: 'Product roadmap',
        getTemplate: true,
        color: 'text-blue-500',
    },
    {
        id: 2,
        icon: CheckCircle2,
        title: 'Idea generation',
        getTemplate: true,
        color: 'text-green-500',
    },
    {
        id: 3,
        icon: NotepadText,
        title: 'Project management',
        getTemplate: true,
        color: 'text-orange-500',
    },
    {
        id: 4,
        icon: Plane,
        title: 'Product development',
        getTemplate: true,
        color: 'text-red-500',
    },
    {
        id: 5,
        icon: Calendar,
        title: 'Marketing strategy',
        getTemplate: true,
        color: 'text-purple-500',
    },
    {
        id: 6,
        icon: Box,
        title: 'Customer development',
        getTemplate: true,
        color: 'text-yellow-500',
    }
]