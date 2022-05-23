import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
`

export const Contatos = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    background-color: #ECECEC;
    justify-content: space-between;
    align-items: center;
    
`

export const Pic = styled.img`
    max-width: 80%;
    border-radius: 50%;
    margin: auto;
`


export const Text = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 14px;
    width: 90%;
    text-align: start;
    justify-content: center;
    min-height: 10%;
`

export const LeftText = styled.p`
    font-family: 'Times New Roman', Times, serif;
    font-size: 14px;
    width: 90%;
    text-align: start;
    margin-left: 10%;
`

export const Space = styled.div`
    margin-bottom: 90%;
`
export const Skills = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1%;
`


export const Nome = styled.h1`
    font-family: 'Times New Roman', Times, serif;
    font-size: 28px;
    text-transform: uppercase;
`

export const Tecnologo = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    
`

export const LangIcon = styled.img`
    height: 7.5vh;
    margin-right: 10px;
`

export const Language = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 1%;
`