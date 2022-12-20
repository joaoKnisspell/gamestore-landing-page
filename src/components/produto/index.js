import styled from "styled-components";

const ProdutoContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 230px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    border-radius: 10px;
    padding: 0.5em;
    background-color: #ffffff;
    padding: 1em;
    position: relative;
    img{
        width: 160px;
    }
    .cardText{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size:18px;
        h4{
            color: #212121;
            font-weight: 600;
            margin:1em 0 0.5em 0 ;
        }
        p{
            font-weight: 400;
        }
    }
`

const Produto = ( { produtoNome, produtoPreco, produtoImagem } ) => {
    return(
        <ProdutoContainer>
            <img src={produtoImagem} alt={produtoNome} /> 
            <div className="cardText">
                <h4>{produtoNome}</h4>
                <p>${produtoPreco}</p>
            </div>
        </ProdutoContainer>
    )
}

export default Produto;