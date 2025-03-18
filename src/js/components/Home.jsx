// src/js/components/Home.jsx
import React from "react";
import ReactDom from "react-dom";
import PropTypes from 'prop-types'


function SimpleCounter(porps){
  return (
    <div className="bigCounter">
      <div className="calendar">
	  <i className="fa-regular fa-clock"></i>
      </div>
      <div className="four">{porps.digiFour % 10}</div>
      <div className="three">{porps.digiThree % 10}</div>
      <div className="two">{porps.digiTwo % 10}</div>
      <div className="one">{porps.digiOne % 10}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digiFour: PropTypes.number,
  digiThree: PropTypes.number,
  digiTwo: PropTypes.number,
  digiOne: PropTypes.number,
};

let counter = 0;

function updateCounter() {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = counter % 10;
  
  // Re-renderizar el componente con los valores actualizados
  ReactDom.render(
    <SimpleCounter digiOne={one} digiTwo={two} digiThree={three} digiFour={four} />,
    document.querySelector('#app')
  );
}

setInterval(function () {
  counter++; 
  updateCounter(); // Llamar a la función que actualizará el render
}, 1000);

// Inicializa el contador con los valores iniciales
updateCounter();

export default Home;