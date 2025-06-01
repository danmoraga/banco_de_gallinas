


function addChicken() {
  const elementChickenNumber = document.getElementById("pollos")
  const chickenNumber = elementChickenNumber.textContent
  //x Añadir nuevo imput
  // capturar el valor del input
  const nuevoValorAgregar = document.getElementById("agregarRestarCantidad").value
  const nuevaCantidad = Number(chickenNumber) + Number(nuevoValorAgregar)
  // sumar el valor al valor final de pollos
  //crear un if
  if(nuevoValorAgregar) {
  elementChickenNumber.textContent = nuevaCantidad
  } else{
    alert("pon un numero")
  }
}

function restChicken() {
  const elementChickenNumber = document.getElementById("pollos")
  const chickenNumber = elementChickenNumber.textContent
  const nuevoValorRestar = document.getElementById("agregarRestarCantidad").value
  const newChickenNumber = Number(chickenNumber) - Number(nuevoValorRestar)
  if(nuevoValorRestar) {
    if (newChickenNumber <0) {
      alert("numero invalido")
    } else { 
      elementChickenNumber.textContent = newChickenNumber
    } 
  } else{
    alert("pon un numero")
  }
  
  
}

