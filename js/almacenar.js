

    const input = document.getElementById('item');
    const btnAgregar = document.getElementById('agregar');
    const btnLimpiar = document.getElementById('limpiar');
    let ul = document.getElementById('contenedor');

    //primero verifico que ya no exista
    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    lista.forEach(element => {

        const li = document.createElement("li");
         li.innerHTML=element;
         ul.appendChild(li);
         
    });

btnAgregar.addEventListener("click",()=>{

    const texto = input.value.trim();

    if(texto !==""){
    lista.push(texto); 
      console.log(lista); 

      const li = document.createElement("li");
        li.textContent = texto;
        ul.appendChild(li);

        //guardar en localStorage
        localStorage.setItem("lista",JSON.stringify(lista));

    }
    else{
        alert("Escribe algo para agregar a la lista");
    }

    input.value="";
    input.focus();
    
      
});

btnLimpiar.addEventListener('click',()=>{

    lista=[];
    ul.innerHTML = "";
    localStorage.removeItem('lista');

});

