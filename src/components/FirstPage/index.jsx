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
                        principalmente em javascript e PHP, mas posso utilizar 
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
                    <LangIcon src='js.png'/>
                    <Text>
                        <div>
                            <b>Javascript / Node / React</b>
                            <p>A stack que mais domino. Já fiz vários projetos com estas tecnologias e tenho dois 
                                certificados, um de node e outro de react</p>
                        </div>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='php.png'/>
                    <Text>
                        <div>
                            <b>PHP</b>
                            <p>Tive contato com php na faculdade e confesso que não me aprofundei muito na época mas
                                recentemente tive que usar bastante o php para um projeto freela que participei e acho
                                que posso me aprofundar mais nessa linguagem num futuro próximo.
                            </p>
                        </div>
                    </Text>
                </Language>
                <Language>
                    <LangIcon src='pitao.png'/>
                    <Text>
                        <div>
                            <b>Python / Django</b>
                            <p>Esta ainda estou estudando. Me interessei bastante pelo python e como tenho interesse mais em 
                                desenvolvimento web estou estudando django.</p>
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