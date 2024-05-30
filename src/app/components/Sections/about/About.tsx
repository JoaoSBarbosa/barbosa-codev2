import {Layout} from "@/app/components/Layout/Layout";
import {RootSection} from "@/app/components/RootSecttion/RootSection";

export const About = () => {
    return (
        <RootSection>
            <Layout>
                <div className={"flex text-gray-300 flex-col items-center justify-center my-20"}>
                    <h1 className={"text-3xl mb-10"}>Olá, eu sou o João</h1>
                    <p className={"my-4 max-w-screen-lg text-center text-xl"}>Sou desenvolvedor Full stack graduando em
                        Análise e Desenvolvimento de Sistemas, com experiência
                        com
                        Spring, SASS, Bootstrap, TypeScript, ReactJs, Angular, NodeJs, SQL, MySQL, Git, Jira, testes
                        unitários, testes de integração e metodologia ágil Scrum e Kanban.</p>
                </div>
            </Layout>

        </RootSection>

    )
}