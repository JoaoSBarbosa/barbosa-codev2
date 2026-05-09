import {cn} from "../../components/ui/utils";

type Spacing =
    | "0"
    | "2"
    | "4"
    | "6"
    | "8"
    | "10"
    | "12"
    | "16"
    | "20"
    | "24"
    | "32"
    | "40"
    | "48"
    | "64";

type TextSize =
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl";

type FontWeight =
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold";

type Align =
    | "text-left"
    | "text-center"
    | "text-right";

type SectionInfoProps = {
    title: string;
    description?: string;
    marginBottom?: Spacing;
    marginTop?: Spacing;
    titleSize?: TextSize;
    titleWeight?: FontWeight;
    descriptionSize?: TextSize;
    align?: Align;
    className?: string;
};

export const SectionInfo = ({
                                title,
                                description,
                                marginBottom = "12",
                                marginTop = "0",
                                titleSize = "text-3xl",
                                titleWeight = "font-bold",
                                descriptionSize = "text-xl",
                                align = "text-left",
                                className,
                            }: SectionInfoProps) => {
    return (
        <div
            className={cn(
                `mb-${marginBottom}`,
                `mt-${marginTop}`,
                align,
                className
            )}
        >
            <h2
                className={cn(
                    "mb-4 md:text-4xl",
                    titleSize,
                    titleWeight
                )}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={cn(
                        "max-w-2xl text-muted-foreground",
                        descriptionSize
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
};