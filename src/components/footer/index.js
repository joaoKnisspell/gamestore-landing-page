import styled from "styled-components"

const Rodape = styled.footer`
    height: 70px;
    background-color: #ffffff;
    color: gray;
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Footer = () => {
    return(
        <Rodape>
            <span>Desenvolvido por João Knisspell</span>
        </Rodape>
    )
}

export default Footer