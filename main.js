 var btn1= document.querySelector(".btn1")
 var btn2= document.querySelector("#btn2")
 var res= document.querySelector("#res")
 var dato1= 5
 var dato2= 10
 var respuesta= dato1 + dato2
 

 console.log(respuesta);

    btn1.addEventListener("click", showname)
    btn2.addEventListener("click", showlastname)

    function showname(){
      var name= document.querySelector("#name")
      res.innerHTML= name.value
      
    }

    function showlastname(){
        var lastname= document.querySelector("#lastname")
        alert("el Apellido es:"+ lastname.value)
        
    }