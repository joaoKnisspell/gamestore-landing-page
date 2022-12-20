import styled from "styled-components";

import Produto from "../produto";

const MarcaContainer = styled.section`
    font-family: 'Inter', sans-serif;
    padding: 3em 10%;
    width: 100vw;
    box-sizing: border-box;
    //background-color: #E8FFFF;
    h3{
        color: #212121;
        font-size: 32px;
        font-weight: 400;
        border-bottom: 3px solid; //#82CFFA
        padding-bottom:15px;
        display: inline-block;
        margin-bottom:1em;
    }
    .produtosContainer{
        display: flex;
        justify-content: space-evenly;
        flex-wrap:wrap;
        gap:1.5em 0;
    }
`

const Marca = ( { marcaNome, corPrimaria, corSecundaria, produtos } ) => {
    return(
       produtos.length > 0 && <MarcaContainer style={ { backgroundColor:corSecundaria } }>
            <h3 style={ { borderColor:corPrimaria } }>{marcaNome}</h3>
            <div className="produtosContainer">

            {produtos.map((produto) => ( 
              (produto.marca === marcaNome) ? 
              <Produto id={produto.id} key={produto.id} produtoNome={produto.nome} produtoPreco={produto.preco} produtoImagem={produto.imagem} />
              : ''
            ))}
            </div>   
        </MarcaContainer>
    )
}

export default Marca;