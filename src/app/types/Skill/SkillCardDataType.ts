import {LanguagesType} from "@/app/types/Skill/LanguagesType";
import {ToolsType} from "@/app/types/Skill/ToolsType";

export type SkillCardDataType = {
    id: number;
    pathImage: string;
    skillTitle: string;
    skillDescription: string;
    languages: LanguagesType[],
    tools: ToolsType[]
}