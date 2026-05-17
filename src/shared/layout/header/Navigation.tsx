"use client";

import Image from "next/image";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {ThemeToggle} from "../../components/ThemeToggle";
import {navigationItems} from "./data/navigation-items.data";

type NavigationItem = (typeof navigationItems)[number];

const focusStyles =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function BrandLink() {
    return (
        <a
            href="/#conteudo"
            className={`flex h-12 w-32 items-center rounded-md transition-opacity hover:opacity-90 sm:h-14 sm:w-44 lg:h-16 lg:w-56 ${focusStyles}`}
            aria-label="Ir para o início"
        >
            <Image
                src="/assets/img/logo.svg"
                alt="Barbosa Code"
                width={224}
                height={64}
                priority
                className="h-full w-full object-contain"
            />
        </a>
    );
}

function NavigationLink({
                            item,
                            onClick,
                        }: {
    item: NavigationItem;
    onClick?: () => void;
}) {
    const href = item.href.startsWith("#") ? `/${item.href}` : item.href;

    return (
        <a
            href={href}
            className={`relative rounded-md px-3 py-2 text-sm lg:text-lg font-medium text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground ${focusStyles}
            md:after:absolute md:after:left-3 md:after:right-3 md:after:bottom-1 md:after:h-0.5 md:after:bg-primary md:after:origin-left md:after:scale-x-0 md:after:transition-transform md:after:duration-200
            md:hover:after:scale-x-100 md:focus-visible:after:scale-x-100`}
            onClick={onClick}
        >
            {item.label}
        </a>
    );
}

function DesktopNavigation() {
    return (
        <div className="hidden items-center gap-2 md:flex">
            {navigationItems.map((item) => (
                <NavigationLink key={item.href} item={item}/>
            ))}
            <div className="ml-2">
                <ThemeToggle/>
            </div>
        </div>
    );
}

function MobileMenuButton({
                              isOpen,
                              onClick,
                          }: {
    isOpen: boolean;
    onClick: () => void;
}) {
    const Icon = isOpen ? X : Menu;

    return (
        <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-foreground/10 ${focusStyles}`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={onClick}
        >
            <Icon className="h-6 w-6"/>
        </button>
    );
}

function MobileActions({
                           isOpen,
                           onMenuClick,
                       }: {
    isOpen: boolean;
    onMenuClick: () => void;
}) {
    return (
        <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle/>
            <MobileMenuButton isOpen={isOpen} onClick={onMenuClick}/>
        </div>
    );
}

function MobileNavigation({onNavigate}: { onNavigate: () => void }) {
    return (
        <div
            id="mobile-navigation"
            className="border-t border-border bg-background shadow-lg md:hidden"
        >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
                {navigationItems.map((item) => (
                    <NavigationLink key={item.href} item={item} onClick={onNavigate}/>
                ))}
            </div>
        </div>
    );
}

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="section-band-dark sticky top-0 z-50 py-4 border-border bg-background shadow-sm">
            <nav
                className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8"
                aria-label="Navegação principal"
            >
                <BrandLink/>
                <DesktopNavigation/>
                <MobileActions
                    isOpen={mobileMenuOpen}
                    onMenuClick={() => setMobileMenuOpen((open) => !open)}
                />
            </nav>

            {mobileMenuOpen ? (
                <MobileNavigation onNavigate={() => setMobileMenuOpen(false)}/>
            ) : null}
        </header>
    );
}
