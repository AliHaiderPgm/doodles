import { BookOpenText, Building, Building2, Calendar, FileText, Globe, Goal, House, Sparkle } from "lucide-react"

export const CarouselItems = [
    {
        id: 1,
        color: 'text-purple-500',
        title: 'AI',
        icon: Sparkle,
        description: "Ask anything. Notion will answer.",
        image: '/doodles/GroovyDoodle.svg',
    },
    {
        id: 2,
        color: 'text-yellow-500',
        title: 'Docs',
        icon: FileText,
        description: "Simple, powerful, beautiful. Next-gen notes & docs.",
        image: '/doodles/PettingDoodle.svg',
    },
    {
        id: 3,
        color: 'text-red-500',
        title: 'Wikis',
        icon: BookOpenText,
        description: "Centralize your knowledge. No more hunting for answers.",
        image: '/doodles/CoffeeDoddle.svg',
    },
    {
        id: 4,
        color: 'text-blue-500',
        title: 'Projects',
        icon: Goal,
        description: "Connected and flexible, to tackle any project.",
        image: '/doodles/RunningDoodle.svg',
    },
    {
        id: 5,
        color: 'text-orange-500',
        title: 'Calender',
        icon: Calendar,
        description: "Manage your time and projects, together.",
        image: '/doodles/SprintingDoodle.svg',
    },
    {
        id: 6,
        color: 'text-gray-500',
        title: 'Sites',
        icon: Globe,
        description: "Publish anything, fast.",
        image: '/doodles/ZombieingDoodle.svg',
    },
]