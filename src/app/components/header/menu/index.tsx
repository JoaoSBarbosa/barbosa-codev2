import Link from "next/link";
import {MenuLinksList} from "@/app/data/MenuLinksList";

export const Menu = () => {
    return (

        <header className={"flex items-center justify-between py-4"}>
            <Link href={"../"}>
                <img src="/assets/img/logo.svg" alt="logo" className={"h-20"}/>
            </Link>

            <nav>
                <ul className={"flex items-center justify-center gap-6"}>
                    {MenuLinksList.map((link) => (
                        <li key={link.id} className={"uppercase text-lg py-2 px-4"}>
                            <Link href={link.href}>
                                {link.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}