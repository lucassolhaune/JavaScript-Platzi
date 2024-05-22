function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage) / 100 //Calculamos el descuento
    const priceWidthDiscount = price - discount // El precio con el descuento

    return priceWidthDiscount // Me devuelve el precio con el descuento
}
const originalPrice = 100 //Precio original
const discountPercentage = 20 //Descuento 
const finalPrice = calculateDiscountedPrice( originalPrice, discountPercentage) //Llamando a la funcion y pasandole los parametro definidos arriba me devolvera el descuento del producto
console.log("original price: "+ originalPrice)//Imprime precio original
console.log("Discount: "+ discountPercentage+ "%")//Imprime el descuento al precio del producto
console.log("Price with discount: "+ finalPrice) //Imprime precio final 
