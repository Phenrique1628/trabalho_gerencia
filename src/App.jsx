import "./assets/main.css"
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import image1 from "/1.png"
import image2 from "/2.png"
import image3 from "/3.png"
import image4 from "/4.png"
import image5 from "/5.png"
import image6 from "/6.png"
import image7 from "/7.png"
import image8 from "/8.png"

function App() {

  return (
    <>
  <Header/>
  <div className="cards">
    <div className="cardOverall">
      <div className="img">
      <img src={image1} alt="1" />
      </div>
      <div className="name">
      <h2>Camisa Gamer</h2>
      </div>

      <div className="desc">
        <h3>Estampa inspirada em controles e um design moderno em neon</h3>
      </div>
      <div className="price">R$ 99,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image2} alt="2" />
      </div>
      <div className="name">
      <h2>Pá Gamer</h2>
      </div>

      <div className="desc">
        <h3>Um acessório inusitado com estilo gamer e acabamento em neon.</h3>
      </div>
      <div className="price">R$ 59,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image3} alt="3" />
      </div>
      <div className="name">
      <h2>Ventilador Gamer</h2>
      </div>

      <div className="desc">
        <h3>Potência e estilo com iluminação neon para refrescar suas partidas.</h3>
      </div>
      <div className="price">R$ 149,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image4} alt="4" />
      </div>
      <div className="name">
      <h2>Carro Gamer</h2>
      </div>

      <div className="desc">
        <h3>Miniatura colecionável com visual futurista e detalhes em neon gamer.</h3>
      </div>
      <div className="price">R$ 199,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image5} alt="5" />
      </div>
      <div className="name">
      <h2>Garrafa Gamer</h2>
      </div>

      <div className="desc">
        <h3>Design ergonômico com estampa gamer em neon, perfeita para hidratar durante as jogatinas.</h3>
      </div>
      <div className="price">R$ 39,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image6} alt="6" />
      </div>
      <div className="name">
      <h2>Churrasqueira Gamer</h2>
      </div>

      <div className="desc">
        <h3>Churrasco com estilo: iluminação neon e tema gamer para os verdadeiros mestres da grelha.</h3>
      </div>
      <div className="price">R$ 299,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image7} alt="7" />
      </div>
      <div className="name">
      <h2>Violão Gamer</h2>
      </div>

      <div className="desc">
        <h3>Som autêntico com design moderno e detalhes em neon, unindo música e games.</h3>
      </div>
      <div className="price">R$ 249,90</div>
    </div>
    <div className="cardOverall">
      <div className="img">
      <img src={image8} alt="8" />
      </div>
      <div className="name">
      <h2>Liquidificador Gamer</h2>
      </div>

      <div className="desc">
        <h3>Prepare suas poções energéticas com estilo neon gamer e tecnologia moderna.</h3>
      </div>
      <div className="price">R$ 119,90</div>
    </div>
  </div>
  <Footer/>
    </>
  )
}

export default App