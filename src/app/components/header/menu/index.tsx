"use client"
import Link from "next/link";
import {MenuLinksList} from "@/app/data/MenuLinksList";
import styles from "./index.module.css";
import {useState} from "react";
export const Menu = () => {
    const [isActive, setIsActive ]= useState(false);
    return (

        <header className={"flex items-center justify-between p-4 md:p-0 py-4"}>
            <Link href={"../"} id={"logo"}>
                <img src="/assets/img/logo.svg" alt="logo" className={"h-20"}/>
            </Link>

            <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>

                <button className={`${styles.btnMobile}`}>
                    <span className={`${styles.hamburger}`} onClick={()=> setIsActive(!isActive)}></span>
                </button>
                <ul className={`${styles.menu} flex items-center justify-center gap-6`}>
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




// "use client"
// import Link from "next/link";
// import {MenuLinksList} from "@/app/data/MenuLinksList";
// import styles from "./index.module.css";
// import {useState} from "react";
// import {Layout} from "@/app/components/Layout/Layout";
//
// export const Menu = () => {
//     const [isActive, setIsActive] = useState(false);
//     return (
//
//         <header className={" bg-deep-gray w-full p-4"}>
//
//             <Layout>
//
//                 <div className={"flex items-center justify-between p-4 md:p-0 py-4"}>
//                     <Link href={"../"} id={"logo"}>
//                         <img src="/assets/img/logo.svg" alt="logo" className={"h-20"}/>
//                     </Link>
//
//                     <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
//
//                         <button className={`${styles.btnMobile}`}>
//                             <span className={`${styles.hamburger}`} onClick={() => setIsActive(!isActive)}></span>
//                         </button>
//                         <ul className={`${styles.menu} flex items-center justify-center gap-4`}>
//                             {MenuLinksList.map((link) => (
//                                 <li key={link.id} className={"uppercase text-lg py-2 px-4 text-gray-300"}
//                                     onClick={() => setIsActive(false)}>
//                                     <Link href={link.href}>
//                                         {link.value}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//
//             </Layout>
//         </header>
//
//     )
// }