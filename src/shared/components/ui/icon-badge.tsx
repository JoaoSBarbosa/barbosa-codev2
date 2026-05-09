import {ComponentPropsWithoutRef, ComponentType, ElementType, SVGProps} from "react";
import {cn} from "./utils";


type IconBadgeProps<T extends ElementType> = {
    as?: T;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    iconColor?: string;
    className?: string;
    iconClassName?: string;
} & ComponentPropsWithoutRef<T>;

export function IconBadge<T extends ElementType = "div">({
                                                             as,
                                                             icon: Icon,
                                                             iconColor,
                                                             className,
                                                             iconClassName,
                                                             ...props
                                                         }: IconBadgeProps<T>) {
    const Component = as || "div";

    return (
        <Component
            className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent",
                className
            )}
            {...props}
        >
            <Icon
                className={cn("h-5 w-5", iconClassName)}
                style={iconColor ? {color: iconColor} : undefined}
            />
        </Component>
    );

}
