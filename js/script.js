function nuevaTarea(){
	var contenedor = document.getElementById('contenedor_nuevatarea');
	document.getElementById('contenedor_nuevatarea').value=" ";
	var textarea = document.getElementById('texto').value;
	//COMPARA QUE TAREA SEA VALIDA
	if(textarea == null || textarea.length == 0){
		alert("ingrese tarea");
		return false;
	}
	//crear todos los nodos
	var container_div = document.createElement('div');//div contenedor hijo de contenedor
	var checkbox_span = document.createElement('input');//checkbox
	var contenedor_lista = document.createElement('span');
	var tex_span = document.createTextNode(textarea);//hijo de contenedor_lista
	var eliminar_span = document.createElement('i');//icono basurero
	var corazon_span = document.createElement('i');//icono corazon

	container_div.classList.add("div", "col-md-12");
	checkbox_span.setAttribute("type", "checkbox");
	eliminar_span.classList.add("glyphicon", "glyphicon-trash");
	corazon_span.classList.add("glyphicon", "glyphicon-heart")
	/*checkbox_span.type='checkbox';
	checkbox_span.setAttribute('class', 'glyphicon glyphicon-trash')
	eliminar_span.setAttribute('class', 'glyphicon glyphicon-heart');
	corazon_span.setAttribute('class', 'glyphicon glyphicon-heart');*/
	//asigno hijos
	contenedor_lista.appendChild(tex_span)
	container_div.appendChild(contenedor_lista);
	container_div.appendChild(checkbox_span);
	container_div.appendChild(eliminar_span);
	container_div.appendChild(corazon_span);
	contenedor.appendChild(container_div);

	checkbox_span.addEventListener("click", function(){
		contenedor_lista.classList.toggle("tachado");
	})

	corazon_span.addEventListener("click", function(){
		corazon_span.classList.toggle("corazon");
	})

	eliminar_span.addEventListener("click", function(){
		contenedor.removeChild(container_div);
	})

}