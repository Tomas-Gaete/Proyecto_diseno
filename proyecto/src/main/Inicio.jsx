import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const API_url = "https://api.rawg.io/api/games?key=a401ea2cd25341bba41b31571184b645";

function Inicio() {
  const [juegos, setJuegos] = useState([]);
  const [destacados, setDestacados] = useState([]);
  const [ofertas, setOfertas] = useState([]);
  const [mejorVendidos, setMejorVendidos] = useState([]);

  useEffect(() => {
    axios.get(API_url)
      .then((response) => {
        console.log(response.data);
        const allGames = response.data.results;
        setJuegos(allGames);
        setDestacados(allGames.slice(0, 5));
        setOfertas(allGames.slice(15, 25));
        setMejorVendidos(allGames.slice(5, 15)); 
      });
  }, []);

  const renderJuegosCarousel = (juegosArray) => {
    const chunkedJuegos = [];
    for (let i = 0; i < juegosArray.length; i += 5) {
      chunkedJuegos.push(juegosArray.slice(i, i + 5));
    }

    return (
      <Carousel controls={true}>
        {chunkedJuegos.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between">
              {chunk.map((juego) => (
                <div key={juego.id} className="d-inline-block w-20" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                  <img
                    className="d-block w-100 h-80"
                    src={juego.background_image}
                    alt={juego.name}
                    style={{ objectFit: 'cover', height: '80%', width: '100%' }}
                  />
                  <div>
                    <h5>{juego.name}</h5>
                    <p>Valoración: {juego.metacritic}%</p>
                    <p>Fecha de lanzamiento: {new Date(juego.released).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  const renderDestacados = (juegosArray) => {
    return (
      <Carousel controls={true}>
        {juegosArray.map((juego) => (
          <Carousel.Item key={juego.id}>
            <img
              className="d-block w-100 h-100"
              src={juego.background_image}
              alt={juego.name}
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
            <Carousel.Caption>
              <h3>{juego.name}</h3>
              <p>Valoración: {juego.metacritic}%</p>
              <p>Fecha de lanzamiento: {new Date(juego.released).toLocaleDateString()}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <div>
      <div className="container">
        <div>
          <h2>Destacados</h2>
          {renderDestacados(destacados)}
        </div>

        <div>
          <h2>Ofertas</h2>
          {renderJuegosCarousel(ofertas)}
        </div>

        <div>
          <h2>Mejor Vendidos</h2>
          {renderJuegosCarousel(mejorVendidos)}
        </div>
      </div>
    </div>
  );
}

export default Inicio;



