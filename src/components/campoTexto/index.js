import styled from 'styled-components';
const InputContainer = styled.div`
    margin:1em 0;

    input{
        width: 100%;
        margin-top:0.5em;
        font-size: 16px;
        box-sizing:border-box;
        padding: 1em;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        outline: none;
        border: none;
    }

    .input-color{
        padding:5px 1em;
        height: 40px;
    }

    span{
        display: block;
    }
`

const CampoTexto = ({ labelName, placeholder, valor, setValor, type = 'text' }) => {
    return(
        <InputContainer>
            <label>
                <span>{labelName}</span>
                <input className={`input-${type}`} required value={valor} onChange={(event) => setValor(event.target.value)} type={type} placeholder={placeholder} />
            </label>
        </InputContainer>
    )
}

export default CampoTexto;