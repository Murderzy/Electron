const API_KEY = "ef35bafa715e168ac8fd984854fff84c";





  window.addEventListener('click',()=>{
   
    document.getElementById("button").onclick=  ()=>{
        alert("work");

         let str = document.getElementById("city").value;
        
        alert(str);
        const response =fetch(`https://api.openweathermap.org/data/2.5/weather?q=${str}&appid=${API_KEY}`);

         if (response.ok) { // если HTTP-статус в диапазоне 200-299
       
       let json = response.json();
       document.getElementById("text").innerText =`Your city - ${str}    Temp - ${json.temperature}`;
       alert("OK");
     } else {
       alert("Ошибка HTTP: " + response.status);
     }
     document.getElementById("text").innerText = "Your city - Kiev    Temp - +17";
    }
  })