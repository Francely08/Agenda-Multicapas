getData();

  async function getData(){
       const response= await fetch('http://www.raydelto.org/agenda.php')
    //    console.log(response,'nitido');
       let data= await response.text();
    //    console.log(typeof data);
       //length=  JSON.parse(data);
    //    console.log(typeof length);
       var dataArray=data.replace() 
       var temp="";
       for(i=0;i<data.length;i++)
       {
        console.log(data.toString())
        
    //       temp+="<tr>";
    //       temp+="<td>"+data.drinks[i].strDrink+"</td>";
    //       temp+="<td>"+data.drinks[i].strInstructions+"</td>";
       }

    // document.getElementById("data").innerHTML=temp;
     }