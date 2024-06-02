import { Exp, ExpImg, Page, Subtitulo } from "./style";


export default function SecondPage(){
    return(
        <Page>
            <Subtitulo>Experiências</Subtitulo>
            <Exp>
                <ExpImg src="brasaoIcó.jpeg"/>
                <p>
                    <b>Prefeitura de Icó (01/2024 - 04/2024)</b><br />
                    Fiz um bico trabalhando na análise e correção de problemas no banco de dados e
                    na API dos sistemas da secretaria de saúde do município de Icó bem como a integração
                    da API com o banco.
                </p>
            </Exp>
            <Exp>
                <ExpImg src="logo_gi.png"/>
                <p>
                    <b>Grupo Intra EAD (08/2022 - 06/2023)</b><br />
                    Fiz um freela no projeto do site Ineves. O Ineves é um site de cursos online na área da 
                    saúde, meu trabalho foi basicamente integrar um novo frontend num código legado pré-existente 
                    e consertar alguns bugs. Foi utilizado principalmente PHP e um pouco de Javascript.
                </p>
            </Exp>
            <Exp>
                <ExpImg src="myfood.png"/>
                <p>
                    <b>MyFood Icó (02/2022 - 07/2022)</b><br />
                    Meu primeiro trabalho "de verdade" foi numa empresa local daqui da cidade, o My food
                    é um app de delivery de comida que atende Icó e região. Meu trabalho era ampliar
                    o banco de dados do sistema numa época em que a empresa estava se expandindo para 
                    cidades vizinhas. Utilizei principalmente MySql e C#.
                </p>
            </Exp>
            <Exp>
                <ExpImg src="univs.png"/>
                <p>
                    <b>Fábrica de software (08/2019 - 11/2021)</b><br />
                    Projeto que participei na faculdade. O projeto consistia em um grupo de alunos, 
                    supervisionados por dois professores pegarem trabalhos de software de verdade para desenvolver. 
                    No período em que participei do projeto fizemos dois sistemas: um dashboard online para a secretaria 
                    de saúde de meu município, 
                    utilizamos principalmente php e javascript e eu participei da parte do front end. O segundo foi um aplicativo 
                    mobile feito em react native voltado para o varejo local,
                     neste eu participei mais da parte de análise de requisitos e gerência de equipe, programei bem pouco.</p>
            </Exp>
            <Exp>
                <ExpImg src="univs.png"/>
                <p>
                    <b>Partymaker (08/2020 - 11/2021)</b><br />
                    Meu projeto de conclusão de curso. Foi um sistema online que servia como um intermediário entre organizadores
                     de eventos, confeiteiros e cozinheiros e pessoas dispostas a contratar um destes dois anteriores, 
                     como um linkedin do buffet. Foi feito em php. Prints deste sistema podem ser vistos em meu portfólio 
                     linkado na área de informações de contato.
                </p>
            </Exp>
            <Subtitulo>Escolaridade</Subtitulo>
            <Exp>
                <ExpImg src="univs.png"/>
                <p>
                    <b>Ensino Superior – Centro Universitário Vale do Salgado (Univs)</b><br />
                    Período: 02/2019 - 02/2022 <br />
                    Curso: Análise e Desenvolvimento de Sistemas. <br />
                    Universidade pertencente ao grupo Unileão. <br />

                </p>
            </Exp>
            <Exp>
                <ExpImg src="vivina.jpg"/>
                <p>
                    <b>Ensino Médio – E.E.M Vivina Monteiro</b><br />
                    Período: 02/2016 - 12/2018
                </p>
            </Exp>
            {/*<Subtitulo>Cursos</Subtitulo>
            <Exp>
                <ExpImg src="udemy.jpg"/>
                <p>
                    <b>Formação NodeJS – Udemy</b><br />
                    Carga horária: 50 horas <br />
                    Curso de Node JS na plataforma Udemy.


                </p>
            </Exp>
            <Exp>
                <ExpImg src="udemy.jpg"/>
                <p>
                    <b>ReactJS – Udemy</b><br />
                    Carga horária: 22 horas <br />
                    Curso de React JS na plataforma Udemy.


                </p>
            </Exp>*/}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Subtitulo >Meu diploma e meus certificados podem ser vistos em meu portfólio linkado na área de informações de contato.</Subtitulo>
        </Page>
    )
}