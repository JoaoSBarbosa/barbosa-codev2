"use client"
import Link from "next/link";
import {MenuLinksList} from "@/app/data/MenuLinksList";
import styles from "./index.module.css";
import {useState} from "react";
export const Menu = () => {
    const [isActive, setIsActive ]= useState(false);
    return (

        <header className={"flex items-center justify-between p-4 mb-12 2xl:mb-20"}>
            <Link href={"../"} id={"logo"}>
                <img src="/assets/img/logo.svg" alt="logo" className={"h-14 2xl:h-20"}/>
            </Link>

            <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>

                <button className={`${styles.btnMobile}`}>
                    <span className={`${styles.hamburger}`} onClick={()=> setIsActive(!isActive)}></span>
                </button>
                <ul className={`${styles.menu} flex items-center justify-center gap-2`}>
                    {MenuLinksList.map((link) => (
                        <li key={link.id} className={"uppercase text-lg py-2 px-4 text-gray-300"} onClick={()=> setIsActive(false)}>
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
