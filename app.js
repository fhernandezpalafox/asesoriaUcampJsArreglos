//alert("Bienvenidos a la asesoria");

//areglo de objetos
const personas = ['Felipe', 'Oscar', 'Pedro'];

console.log(personas);

console.log(personas[0]);

console.log(personas.length);

//Funciones relacionadas con JS 

function agregar(){
    //const nuevo = prompt('Ingrese nombre');
    //personas.push(nuevo);
    //console.log(personas);

    const dato = document.getElementById('txtElemento').value;
    
    //console.log(dato);
    //alert(dato);
    
    //primera forma
    /*if(dato.length > 0){
        personas.push(dato);
        console.log(personas);
        document.getElementById('txtElemento').value = '';
    }else {
        alert('Ingrese un elemento');
    }*/

    //segunda forma
    if(dato !== ''){
        personas.push(dato);
        console.log(personas);
        //mando llamar la funcion mostrar
        mostrar(dato);
        document.getElementById('txtElemento').value = '';  
    }else {
        alert('Ingrese un elemento');
    }
  

   // personas.push(dato);
   // console.log(personas);
}

function mostrar(elemento){
    const ul  = document.getElementById('lista');
    ul.innerHTML = '';
    
    if(elemento !== ''){
        const ul  = document.getElementById('lista');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(elemento));
        ul.appendChild(li);
    }else {
        const ul  = document.getElementById('lista');
       
        personas.forEach(element => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        });
    }
    
}



function eliminar(){
    //personas.pop();
    //console.log(personas);

    const dato = document.getElementById('txtElemento').value;
    if(dato !== ''){
        personas.pop();
        console.log(personas);
        document.getElementById('txtElemento').value = '';  
    }else {
        alert('Ingrese un elemento');
    }
}

