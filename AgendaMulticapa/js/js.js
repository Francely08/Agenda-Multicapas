getData();
  
  async function getData(){
   let temp="";
   fetch('http://www.raydelto.org/agenda.php')
   .then(res => res.json())
   .then(res =>{
      for(let element of res){
         temp+="<tr>";
         temp+="<td>"+element['nombre']+"</td>";
         temp+="<td>"+element['apellido']+"</td>";
         temp+="<td>"+element['telefono']+"</td></tr>";

      }
      document.getElementById("data").innerHTML=temp;
   })
   .catch( err => console.error(err));
     }
     let loginForm = document.getElementById("myForm");

     loginForm.addEventListener("submit", (e) => {
       e.preventDefault();
     
       let username = document.getElementById("nm");
       let password = document.getElementById("ap");
       let telf = document.getElementById("tl");
     
       if (username.value == "" || password.value == "" ||telf.value =="") {
         alert("Anormal asi no,  como que vacio!");
       } else {
         fetch('http://www.raydelto.org/agenda.php', {
               method: 'POST',
               headers: {
                  "accept": "application/json",
               },
               body: JSON.stringify({ nombre:username.value, apellido: password.value ,telefono:telf.value})
            })
            .then(res => res.json())
            .then(res=> {
                  console.log('success');
         }).catch( err => alert(err));
     
         username.value = "";
         password.value = "";
         telf.value="";
       }
     });
     