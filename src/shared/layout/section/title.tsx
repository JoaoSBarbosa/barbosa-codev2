export enum MarginBottom {
    MB6 = "mb-6",
    MB12 = "mb-12",
    MB16 = "mb-16",
    MB32 = "mb-32",
}

export enum TextSize {
    SM = "text-sm",
    BASE = "text-base",
    LG = "text-lg",
    XL = "text-xl",
    "2XL" = "text-2xl",
    "3XL" = "text-3xl",
    "4XL" = "text-4xl",
}

export enum FontWeight {
    NORMAL = "font-normal",
    MEDIUM = "font-medium",
    SEMIBOLD = "font-semibold",
    BOLD = "font-bold",
    EXTRABOLD = "font-extrabold",
}

export enum TextColor {
    DEFAULT = "text-foreground",
    MUTED = "text-muted-foreground",
    PRIMARY = "text-primary",
    SECONDARY = "text-secondary-foreground",
}

type SectionTitleProps = {
    title: string;
    className?: string;
    marginBottom?: MarginBottom;
    size?: TextSize;
    weight?: FontWeight;
    color?: TextColor;
};

export const SectionTitle = ({
                                 title,
                                 className = "",
                                 marginBottom = MarginBottom.MB6,
                                 size = TextSize["3XL"],
                                 weight = FontWeight.BOLD,
                                 color = TextColor.DEFAULT,
                             }: SectionTitleProps) => {
    return (
        <h2
            className={`${marginBottom} ${size} ${weight} ${color} md:text-4xl ${className}`}
        >
            {title}
        </h2>
    );
};