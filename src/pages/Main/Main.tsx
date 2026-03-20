import { Separator } from '@/components/ui/separator';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { LucideMenu, Home, ArrowRight, LucideChevronsLeft, LucideChevronsRight, ArrowLeft, Github, LucidePalette } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

export default function Main() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Today />
            <Footer />
        </div>
    );
}

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            setMobileMenuOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'today') {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    interface ColorThemes {
        [key: string]: {
            light: { [key: string]: string };
            dark: { [key: string]: string };
        };
    }

    const colorThemes: ColorThemes = {
        black: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.145 0 0)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.145 0 0)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.145 0 0)',
                '--primary': 'oklch(0.205 0 0)',
                '--primary-foreground': 'oklch(0.985 0 0)',
                '--secondary': 'oklch(0.97 0 0)',
                '--secondary-foreground': 'oklch(0.205 0 0)',
                '--muted': 'oklch(0.97 0 0)',
                '--muted-foreground': 'oklch(0.556 0 0)',
                '--accent': 'oklch(0.97 0 0)',
                '--accent-foreground': 'oklch(0.205 0 0)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.922 0 0)',
                '--input': 'oklch(0.922 0 0)',
                '--ring': 'oklch(0.708 0 0)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.145 0 0)',
                '--sidebar-primary': 'oklch(0.205 0 0)',
                '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
                '--sidebar-accent': 'oklch(0.97 0 0)',
                '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
                '--sidebar-border': 'oklch(0.922 0 0)',
                '--sidebar-ring': 'oklch(0.708 0 0)',
            },
            dark: {
                '--background': 'oklch(0.145 0 0)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.205 0 0)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.205 0 0)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.922 0 0)',
                '--primary-foreground': 'oklch(0.205 0 0)',
                '--secondary': 'oklch(0.269 0 0)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.269 0 0)',
                '--muted-foreground': 'oklch(0.708 0 0)',
                '--accent': 'oklch(0.269 0 0)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.556 0 0)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.205 0 0)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
                '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
                '--sidebar-accent': 'oklch(0.269 0 0)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.556 0 0)',
            },
        },
        red: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.637 0.237 25.331)',
                '--primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.637 0.237 25.331)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.637 0.237 25.331)',
                '--sidebar-primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.637 0.237 25.331)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.637 0.237 25.331)',
                '--primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.637 0.237 25.331)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.637 0.237 25.331)',
                '--sidebar-primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.637 0.237 25.331)',
            },
        },
        rose: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.645 0.246 16.439)',
                '--primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.645 0.246 16.439)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.645 0.246 16.439)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.645 0.246 16.439)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.645 0.246 16.439)',
                '--primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.645 0.246 16.439)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.645 0.246 16.439)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.645 0.246 16.439)',
            },
        },
        orange: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.705 0.213 47.604)',
                '--primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.705 0.213 47.604)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.705 0.213 47.604)',
                '--sidebar-primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.705 0.213 47.604)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.646 0.222 41.116)',
                '--primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.646 0.222 41.116)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.646 0.222 41.116)',
                '--sidebar-primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.646 0.222 41.116)',
            },
        },
        green: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.723 0.219 149.579)',
                '--primary-foreground': 'oklch(0.982 0.018 155.826)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.723 0.219 149.579)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.723 0.219 149.579)',
                '--sidebar-primary-foreground': 'oklch(0.982 0.018 155.826)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.723 0.219 149.579)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.696 0.17 162.48)',
                '--primary-foreground': 'oklch(0.393 0.095 152.535)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.527 0.154 150.069)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.696 0.17 162.48)',
                '--sidebar-primary-foreground': 'oklch(0.393 0.095 152.535)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.527 0.154 150.069)',
            },
        },
        blue: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.623 0.214 259.815)',
                '--primary-foreground': 'oklch(0.97 0.014 254.604)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.623 0.214 259.815)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.623 0.214 259.815)',
                '--sidebar-primary-foreground': 'oklch(0.97 0.014 254.604)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.623 0.214 259.815)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.546 0.245 262.881)',
                '--primary-foreground': 'oklch(0.379 0.146 265.522)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.488 0.243 264.376)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.546 0.245 262.881)',
                '--sidebar-primary-foreground': 'oklch(0.379 0.146 265.522)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.488 0.243 264.376)',
            },
        },
        yellow: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.795 0.184 86.047)',
                '--primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.795 0.184 86.047)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.795 0.184 86.047)',
                '--sidebar-primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.795 0.184 86.047)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.795 0.184 86.047)',
                '--primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.554 0.135 66.442)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.795 0.184 86.047)',
                '--sidebar-primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.554 0.135 66.442)',
            },
        },
        violet: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.606 0.25 292.717)',
                '--primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.606 0.25 292.717)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.606 0.25 292.717)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.606 0.25 292.717)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.541 0.281 293.009)',
                '--primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.541 0.281 293.009)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.541 0.281 293.009)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.541 0.281 293.009)',
            },
        },
    };
    type ThemeKey = keyof typeof colorThemes;

    const [theme, setTheme] = useState('black');

    const applyTheme = (themeKey: string) => {
        setTheme(themeKey);
        const theme = colorThemes[themeKey as ThemeKey];
        if (!theme) return;
        const url = new URL(window.location.href);
        url.searchParams.set('theme', themeKey);
        window.history.replaceState({}, '', url.toString());
        if (theme.light) {
            Object.entries(theme.dark).forEach(([key, value]) => {
                document.documentElement.style.setProperty(String(key), String(value));
            });
        }
        const darkRoot = document.querySelector('.dark');
        if (theme.dark && darkRoot) {
            Object.entries(theme.dark).forEach(([key, value]) => {
                (darkRoot as HTMLElement).style.setProperty(String(key), String(value));
            });
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlTheme = params.get('theme');
        if (urlTheme && colorThemes[urlTheme]) {
            applyTheme(urlTheme);
        }
    }, []);

    return (
        <header id={'header'} className="sticky top-0 z-50 h-0 w-auto">
            <div
                className={`supports-[backdrop-filter]:bg-background/60 border-b-primary sticky z-50 container mx-4 mt-4 flex h-16 w-auto items-center justify-between rounded-2xl px-3 backdrop-blur`}
            >
                <div className="flex items-center gap-4">
                    <Select value={theme} onValueChange={(value: string) => applyTheme(value)}>
                        <SelectTrigger className={`bg-primary-foreground`}>
                            <LucidePalette />
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(colorThemes).map((key) => (
                                <SelectItem key={key} value={key}>
                                    <LucidePalette /> {key.charAt(0).toUpperCase() + key.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Link to="/Wordle" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <h1 className="text-2xl font-bold">Wordle Solutions</h1>
                    </Link>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link
                                    to="/Wordle"
                                    className="flex items-center gap-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollToSection('today');
                                    }}
                                >
                                    <div className={'flex items-center gap-2'}>
                                        <span>Home</span>
                                        <Home className="h-4 w-4" />
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link to="https://github.com/An0n-00/Wordle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <div className={'flex items-center gap-2'}>
                                        <span>GitHub</span>
                                        <Github className="h-4 w-4" />
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <LucideMenu />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col">
                        <div className="flex flex-col space-y-4 py-4">
                            <Link
                                to="/Wordle"
                                className="hover:bg-muted flex items-center gap-2 rounded-md px-4 py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollToSection('hero');
                                }}
                            >
                                <Home className="h-5 w-5" />
                                <span>Home</span>
                            </Link>
                            <Link
                                to="https://github.com/An0n-00/Wordle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:bg-muted flex items-center gap-2 rounded-md px-4 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Github className="h-4 w-4" />
                                <span>GitHub</span>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

type WordleData = {
    id: number;
    solution: string;
    print_date: string;
    days_since_launch: number;
    editor: string;
};

function formatDate(date: Date) {
    return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

export function Today() {
    const [date, setDate] = useState(() => {
        const now = new Date();
        return now;
    });
    const [data, setData] = useState<WordleData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // check if ?date=YYYY-MM-DD is present in the url and if it is a valid date
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlDate = params.get('date');
        if (urlDate) {
            const d = new Date(urlDate);
            if (!isNaN(d.getTime())) {
                setDate(d);
            }
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        const url = `https://cors-anywhere.com/https://www.nytimes.com/svc/wordle/v2/${formatDate(date)}.json`;
        fetch(url)
            .then(async (res) => {
                if (!res.ok) {
                    toast.error('Error fetching data: No data for this date.');
                    throw new Error('No data for this date.');
                }
                const data = await res.json();
                toast.success('Data fetched successfully!');
                // add ?date=YYYY-MM-DD to the url without reloading the page
                const url = new URL(window.location.href);
                url.searchParams.set('date', formatDate(date));
                window.history.replaceState({}, '', url.toString());
                return data;
            })
            .then(setData)
            .catch((e) => {
                toast.error('Error fetching data: ' + e.message);
                setError(e.message);
            })
            .finally(() => setLoading(false));
    }, [date]);

    const goTo = (days: number) => setDate((d) => addDays(d, days));

    return (
        <section id="today" className="relative container mx-auto flex min-h-[100vh] w-full flex-col items-center px-4 py-16 text-center">
            <div className="z-1 container mx-auto mt-8 flex flex-col items-center text-center sm:mt-16">
                <h1 className="mb-6 flex flex-wrap items-center justify-center gap-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
                    <span className="text-primary">Wordle Solutions</span>
                </h1>
                <p className="text-muted-foreground mb-8 max-w-[800px] text-base md:text-xl">
                    This website provides you the solution of today&apos;s Wordle along with the solutions of previous days and also the ones in the near future. YES THIS WEBSITE CAN PREDICT THE
                    FUTURE!
                </p>
                <Card className="bg-card/80 border-border w-full max-w-md border-2 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            {loading && 'Loading...'}
                            {error && 'Error'}
                            {!loading && !error && (!data || !data.print_date) && 'The Future seems too cloudy!'}
                            {data && data.print_date && `Solution for ${data.print_date}`}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            {data && data.editor ? (
                                `Editor: ${data.editor}`
                            ) : !loading && !error && (!data || !data.editor) ? (
                                <>
                                    Please go back to today.<br></br>
                                    <Button onClick={() => setDate(new Date())} className="mt-4 w-full text-sm">
                                        Today
                                    </Button>
                                </>
                            ) : (
                                ''
                            )}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        {loading && <span className="text-primary animate-pulse">Loading...</span>}
                        {error && (
                            <>
                                <span className="text-destructive">
                                    <strong>{error}.</strong>
                                    <br></br> <strong>It looks like you may have clicked a button too many times, or the server might be temporarily unavailable.</strong>
                                    <br></br>
                                    <br></br> Please avoid abusing this service. We rely on the free and generous API provided by the 
                                    <a className="underline" href="https://github.com/Rob--W/cors-anywhere">
                                        CORS Anywhere - Community-Hosted Instance
                                    </a>
                                    , which is available for everyone to use. Excessive or abusive use can lead to rate limits or even getting blocked — so please don't push the limits. You also might
                                    have gotten this error on load or after one button click. That is normal. Just bare with me👍<br></br>
                                    <br></br>
                                    If this error persists, please do not hesitate to open an issue on{' '}
                                    <a className="underline" href="https://github.com/An0n-00/wordle/issues">
                                        GitHub
                                    </a>
                                    .<br></br>
                                    Thanks for your understanding. An0n-00
                                </span>
                                <Button onClick={() => setDate(new Date())} className="mt-4 w-full text-sm">
                                    Try Again (Today)
                                </Button>
                            </>
                        )}
                        {data && !error && !loading && typeof data.solution === 'string' && data.solution && (
                            <>
                                <span
                                    className="from-primary to-secondary text-primary-foreground relative w-full cursor-pointer rounded-xl bg-gradient-to-r py-2 font-mono text-4xl font-bold tracking-widest shadow-lg transition-transform duration-200 select-all hover:scale-105 active:scale-95"
                                    title="Click to copy"
                                    onClick={() => {
                                        navigator.clipboard.writeText(data.solution);
                                        toast.success('Copied to clipboard!');
                                    }}
                                >
                                    <span className="dark:text-secondary-foreground inline-block">{typeof data.solution === 'string' ? data.solution.toUpperCase() : ''}</span>
                                </span>
                                <Button onClick={() => setDate(new Date())} className="mt-4 w-full text-sm">
                                    Today
                                </Button>
                                <div className="flex w-full gap-2">
                                    <Button variant="outline" onClick={() => goTo(-7)} className="hidden flex-1 text-sm sm:flex">
                                        <LucideChevronsLeft />
                                        -1w
                                    </Button>
                                    <Button variant="outline" onClick={() => goTo(-1)} className="flex-1 text-sm">
                                        <ArrowLeft />
                                        Yesterday
                                    </Button>
                                    <Button variant="outline" onClick={() => goTo(1)} className="flex-1 text-sm">
                                        Tomorrow
                                        <ArrowRight />
                                    </Button>
                                    <Button variant="outline" onClick={() => goTo(7)} className="hidden flex-1 text-sm sm:flex">
                                        +1w
                                        <LucideChevronsRight />
                                    </Button>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
                <div className="mt-6 flex w-full justify-center">
                    <Calendar mode="single" selected={date} onSelect={(d) => d && setDate(d)} className="bg-background rounded-md border" />
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="bg-primary/60 absolute -top-48 -left-48 h-[40vw] max-h-[600px] min-h-[300px] w-[40vw] max-w-[600px] min-w-[300px] rounded-full blur-[128px]"></div>
                    <div className="bg-primary/20 absolute -top-32 -left-32 h-[30vw] max-h-[400px] min-h-[200px] w-[30vw] max-w-[400px] min-w-[200px] rounded-full blur-[96px]"></div>
                    <div className="bg-primary/10 absolute -top-16 -left-16 h-[20vw] max-h-[200px] min-h-[100px] w-[20vw] max-w-[200px] min-w-[100px] rounded-full blur-[64px]"></div>
                </div>
                <div className="absolute right-0 bottom-0 h-full w-full">
                    <div className="bg-primary/60 absolute -right-48 -bottom-48 h-[40vw] max-h-[600px] min-h-[300px] w-[40vw] max-w-[600px] min-w-[300px] rounded-full blur-[128px]"></div>
                    <div className="bg-primary/20 absolute -right-32 -bottom-32 h-[30vw] max-h-[400px] min-h-[200px] w-[30vw] max-w-[400px] min-w-[200px] rounded-full blur-[96px]"></div>
                    <div className="bg-primary/10 absolute -right-16 -bottom-16 h-[20vw] max-h-[200px] min-h-[100px] w-[20vw] max-w-[200px] min-w-[100px] rounded-full blur-[64px]"></div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer id={'footer'} className="bg-secondary py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-6 grid grid-cols-2 gap-6 md:mb-8 md:grid-cols-4 md:gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-3 flex items-center gap-2 md:mb-4">
                            <h1 className="text-2xl font-bold">Wordle Solutions</h1>
                        </div>
                        <p className="text-muted-foreground text-xs md:text-sm">Get the answer to today's Wordle and explore past and future solutions. Powered by the community, for the community.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">Links</h3>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <Link to="https://github.com/An0n-00/wordle" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    GitHub Repository
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://github.com/An0n-00/wordle#readme"
                                    className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    About Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://github.com/An0n-00/wordle/issues"
                                    className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Report Issue
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">Resources</h3>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <Link
                                    to="https://www.nytimes.com/games/wordle/index.html"
                                    className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Play Wordle
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.cors-anywhere.com" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    CORS Anywhere - Community-Hosted Instance
                                </Link>
                            </li>
                            <li>
                                <Link to="https://ui.shadcn.com" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    ShadCN UI
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">Contact</h3>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <Link to="https://github.com/An0n-00" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    An0n-00 on GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Separator className="mb-6 md:mb-8" />
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="text-muted-foreground text-xs md:text-sm">
                        © {new Date().getFullYear()} Wordle Solutions by{' '}
                        <a href="https://github.com/An0n-00/wordle" className="underline" target="_blank" rel="noopener noreferrer">
                            An0n-00
                        </a>
                        . All rights reserved.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 md:mt-0">
                        <Link
                            to="#footer"
                            className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                            onClick={(e) => {
                                e.preventDefault();
                                toast.success('We do not use/collect any kinds of cookies💪');
                            }}
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
