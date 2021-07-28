function calcular(precio,descuento){
	/* esta variable indica el porcentaje total del producto
	que el usuario pagara */
	const porcentajeAPagar = 100 - descuento

	const precioConDescuento = (precio * porcentajeAPagar)/100

	return precioConDescuento
	
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcular(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}