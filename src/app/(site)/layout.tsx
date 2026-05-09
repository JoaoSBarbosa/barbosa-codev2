import {Navigation} from "@/shared/layout/header/Navigation";
import {SiteFooter} from "@/shared/layout/footer/SiteFooter";

export default function SiteLa({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navigation/>
            {children}
            <SiteFooter/>
        </div>
    )
}