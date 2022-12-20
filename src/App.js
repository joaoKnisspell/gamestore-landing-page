import './App.css';
import { useState } from 'react'

import Banner from './components/banner';
import Marca from './components/marca';
import Footer from './components/footer';

function App() {

  const [marcas] = useState([
    {
      nome:"PlayStation",
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8FFFF"
    },
    {
      nome:"Xbox",
      corPrimaria:"#A6D157",
      corSecundaria:"#E9FFE3"
    },
    {
      nome:"Nintendo",
      corPrimaria:"#E06B69",
      corSecundaria:"rgba(241, 97, 101, 0.15)"
    }
  ]);

  const [produtos] = useState([
    {
      id:1,
      nome:"PlayStation 5 - console",
      preco:"399.99",
      imagem:"/img/ps-console.jpg",
      marca:"PlayStation"
    },
    {
      id:2,
      nome:"Dualsense controller",
      preco:"49.99",
      imagem:"/img/ps-controller.jpg",
      marca:"PlayStation"
    },
    {
      id:3,
      nome:"Pulse 3D headset",
      preco:"99.99",
      imagem:"/img/ps-headset.png",
      marca:"PlayStation"
    },
    {
      id:4,
      nome:"Fifa 23",
      preco:"39.99",
      imagem:"/img/ps-fifa23.jpg",
      marca:"PlayStation"
    },

    {
      id:5,
      nome:"Xbox series X - console",
      preco:"399.99",
      imagem:"/img/xb-console.jpg",
      marca:"Xbox"
    },
    {
      id:6,
      nome:"Xbox controller",
      preco:"49.99",
      imagem:"/img/xb-controller.jpg",
      marca:"Xbox"
    },
    {
      id:7,
      nome:"Pulse 3D headset",
      preco:"99.99",
      imagem:"/img/xb-headset.jpg",
      marca:"Xbox"
    },
    {
      id:8,
      nome:"Forza Horizon",
      preco:"39.99",
      imagem:"/img/xb-forza.jpg",
      marca:"Xbox"
    },

    {
      id:9,
      nome:"Nintendo Switch",
      preco:"299.99",
      imagem:"/img/ns-console.jpg",
      marca:"Nintendo"
    },
    {
      id:10,
      nome:"Switch - controller",
      preco:"79.99",
      imagem:"/img/ns-controller.jpg",
      marca:"Nintendo"
    },
    {
      id:11,
      nome:"Mario Kart - controller",
      preco:"109.99",
      imagem:"/img/ns-mario.jpg",
      marca:"Nintendo"
    },
    {
      id:12,
      nome:"Sonic",
      preco:"29.99",
      imagem:"/img/ns-sonic.jpg",
      marca:"Nintendo"
    }
  ])

  return (
    <div className="App">
      <Banner />
      {marcas.map(marca => (
          <Marca key={marca.nome} marcaNome={marca.nome} corPrimaria={marca.corPrimaria} corSecundaria={marca.corSecundaria} produtos={produtos} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
