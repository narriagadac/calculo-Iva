function calculoIVA()
{
  var Nombre=document.getElementById("nombre").value;
  var Cantidad=document.getElementById("cantidad").value;
  var Precio=document.getElementById("precio").value;
  var Descuento=document.getElementById("descuento").value;

  if (Nombre =="" || Cantidad=="" || Precio== "" || Descuento==""){
    alert("Por favor complete los campos");
   // return false;
  }else{
   /*CALCULO IVA*/
   var Total1=Cantidad*Precio;
   var Totaltotal=(Total1*Descuento)/100;
   
   var TotalFinal=Total1-Totaltotal;
   var Neto=TotalFinal/1.19;
   var Iva=Neto*0.19;
          
   
    document.getElementById("neto").value=Math.round(Neto);
    document.getElementById("iva").value=Math.round(Iva);
    
    document.getElementById("totalfinal").value=TotalFinal;
  }
    
      
       

}



function limpiar(){
	document.getElementById("nombre").value="";
	document.getElementById("cantidad").value="";
	document.getElementById("precio").value="";
	document.getElementById("descuento").value="";

	document.getElementById("errorIVA").innerHTML="";

  document.getElementById("neto").value="";
  document.getElementById("iva").value="";
  document.getElementById("totalfinal").value="";
}


function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}

function camposVacios(){
  if ((nombre == "") || (cantidad == "") || (precio == "") || (descuento == "")) {  
    alert("Los campos no pueden quedar vacios");
   
  }
}
