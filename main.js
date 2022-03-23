 var btn1= document.querySelector(".btn1")
 var btn2= document.querySelector("#btn2")

    btn1.addEventListener("click", showname)
    btn2.addEventListener("click", showlastname)

    function showname(){
      var name= document.querySelector("#name")
      alert("El nombre es: "+ name.value)
    }

    function showlastname(){
        var lastname= document.querySelector("#lastname")
        alert("el Apellido es:"+ lastname.value)
    }