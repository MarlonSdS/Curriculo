import {Page, Contatos, Pic, LeftText, Text, Space, Skills, Nome, Tecnologo, LangIcon, Language} from './style'
import {FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaAddressCard, FaLocationArrow} from 'react-icons/fa'
import {MdSchool, MdPlace} from 'react-icons/md'

export default function FirstPage(){
    return(
        <Page>
            <Contatos>
                <Pic src='mainpic.jpeg'/>
                <Text>
                    <b>Objetivo:</b><br />
                    <LeftText>
                        Desenvolver sistemas back end e front end voltados para a web e 
                        principalmente em Javascript e Python, mas posso utilizar 
                        outras tecnologias ou até trabalhar em outras àreas se necessário.
                    </LeftText>

                </Text>
                <Text>
                    <b>Informações de contato:</b><br /><br />
                    <b><FaEnvelope /> e-Mail:</b><br />
                    <LeftText><a href="mailto:marlonfms2012@gmail.com">marlonfms2012@gmail.com</a></LeftText>
                    <b><FaWhatsapp /> Celular:</b><br />
                    <LeftText><a href="https://wa.me/5588996469864">(88) 99646-9864</a></LeftText>
                    <b><FaLinkedin /> Linkedin: </b><br />
                    <LeftText><a href='https://www.linkedin.com/in/marlon-dos-santos-17469417b'>https://www.linkedin.com/in/marlon-dos-santos-17469417b</a></LeftText>
                    <b><FaGithub /> Github:</b><br />
                    <LeftText><a href="https://www.github.com/MarlonSdS">https://www.github.com/MarlonSdS</a></LeftText>
                    <b><FaAddressCard /> Portfólio: </b><br />
                    <LeftText><a href="http://marlonsds.github.io">http://marlonsds.github.io</a></LeftText>
                </Text>
                <Space></Space>
            </Contatos>
            <Skills>
                <div>
                    <Nome>Marlon Santana dos Santos</Nome>
                    <Tecnologo><MdSchool /> Tecnólogo em Análise e Desnvolvimento de sistemas pelo Centro Universitário Vale do Salgado</Tecnologo>
                    <Tecnologo><MdPlace /> Icó - CE</Tecnologo>
                </ div>
                <Tecnologo>Linguagens / Frameworks / Tecnologias</Tecnologo>
                <Language>
                    <LangIcon src='ts.png'/>
                    <Text>
                        <div>
                            <b>Typescript / Node / React / Vue</b>
                            <p>A stack que mais domino. Já fiz vários projetos com estas tecnologias e tenho dois 
                                certificados, um de node e outro de react, mas domino mais vue.</p>
                        </div>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='pitao.png'/>
                    <Text>
                        <div>
                            <b>Python / Django</b>
                            <p>A linguagem que eu mais desejo me aprofundar. É muito prática e útil para fazer automação de tarefas.
                                Fiz um curso de django e o utilizei um pouco no trabalho, é bem eficiente.
                            </p>
                        </div>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='cpp.png' />
                    <Text>
                        <b>C++</b>
                        <p>Todo mundo deveria saber C++, é a mãe de muitas lingugens. Esta eu aprendi
                            apenas por hobbie no meu tempo livre e confesso que não cheguei a usar em 
                            projetos profissionais.
                        </p>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='csharp.png' />
                    <Text>
                        <b>C#</b>
                        <p>Linguagem que aprendi por causa de um dos meus trabalhos anteriores.
                            É uma linguagem muito robusta e ótima para se trabalhar em projetos modernos.
                        </p>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='php.png'/>
                    <Text>
                        <div>
                            <b>PHP / Laravel</b>
                            <p>Tive contato com php na faculdade e confesso que não me aprofundei muito na época mas
                                ano passado tive que usar bastante o php para um projeto freela que participei e acho
                                que posso me aprofundar mais nessa linguagem num futuro próximo.
                            </p>
                        </div>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='mysql.png'/>
                    <Text>
                        <div>
                            <b>MySQL</b>
                            <p>Eu não poderia me dizer programador sem saber mysql. É a linguagem de bd mais comum. 
                                E sei o suficiente para trabalhar</p>
                        </div>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='java.png'/>
                    <Text>
                        <div>
                            <b>Java / Spring</b>
                            <p>Também usei apenas durante a faculdade mas o java e principalmente o spring eu usei bem mais que o php 
                            então creio que eu teria mais facilidade de me aprofundar se necessário.
                            </p>
                        </div>
                    </Text>
                </Language>
            </Skills>
        </Page>
    )
}