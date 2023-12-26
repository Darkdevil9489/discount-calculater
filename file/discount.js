 function calculate(){
  let price= Number(document.getElementById("price").value);
  let discount= Number(document.getElementById("discount").value);
 let ans= price-(price*discount/100);
         let out= document.getElementById("answer")
        out.innerHTML= "Price "+ans+" Rs";
        document.getElementById("price").value="";
        document.getElementById("discount").value="";

  }