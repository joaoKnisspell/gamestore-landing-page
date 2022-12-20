import styled from "styled-components"
import { MdGames } from 'react-icons/md'

const HeaderContainer = styled.header`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-image: url("/img/banner.jpg");
    background-size: cover;
    background-repeat:no-repeat;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    .fade{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width:100%;
        background-color:rgba(0,0,0,0.7);
    }
    .headerContent{
        z-index: 1;
        color: #ffffff;
        h1{
            font-weight: 700;
            font-size: 80px;
            line-height: 90px;
            margin: 0;
            width: 900px;
        }
        p{
            font-size: 20px;
            font-weight: 300;
            letter-spacing: 8px;
            margin: 1em 0;
        }
        .logo{
            background-color: #ffa500;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            color: #ffffff;
            width: 200px;
            margin: 2em auto;
            border: 2px solid #ffa500;
            border-radius: 50px;
            transition: .5s;
            height: 55px;
            h2{
                font-size:20px;
            }
            :hover{
                background-color:transparent;
                color: #ffa500;
            }
        }
    }
    @media screen and (max-width:500px){
        background-position: center;
        .headerContent{
            margin: 0 2em;
            h1{
                font-size:30px;
                width: auto;
                line-height:45px;
            }
            p{
                font-size: 16px;
                line-height: 25px;
                letter-spacing:6px;
                margin-top: 2em;
            }
            .logo{

            }
        }
    }
`

const Banner = () => {
    return(
        <HeaderContainer>
            <div className="fade" />
            <div className="headerContent">
                <h1>Gaming That Knows No Limits</h1>
                <p>The Most Advanced Technology In The Market</p>
                <div className="logo">
                <MdGames size={23}/>
                <h2>GameStore</h2>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Banner