const restaurantes = [
    {
        nombre: 'Pacifico Mar',
        direccion: 'Av 85 Nr 45-85 Barranquilla',
        descripcion: 'Comida del mar',
        imagen:'1.jpg'
    },
    {
        nombre: 'Italiano 65',
        direccion: 'Av 45 # 1 - 85 Medellín',
        descripcion: 'Italiana',
        imagen:'2.jpg'
    },
    {
        nombre: 'Fritos y Más',
        direccion: 'Calle 45 Medellín',
        descripcion: 'Rápida',
        imagen:'3.jpg'
    },
    {
        nombre: 'Pollo Fritos',
        direccion: 'Cr 32 #56-89 Bogotá',
        descripcion: 'Frito',
        imagen:'4.jpg'
    }
];

for(let j=0;j<restaurantes.length;j++){
    // console.log("el restultado es :" + [j] + restaurantes[j].nombre);
    
    valoresNombre = restaurantes[j].nombre;
    valoresDireccion = restaurantes[j].direccion;
    valoresDescripcion = restaurantes[j].descripcion;

    document.getElementById("labelNombre"+[j+1]).innerHTML = valoresNombre;
    document.getElementById("labelDireccion"+[j+1]).innerHTML = valoresDireccion;
    document.getElementById("labelDescripcion"+[j+1]).innerHTML = valoresDescripcion;
}
