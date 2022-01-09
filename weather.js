let inputf = document.getElementById('inputf');
let btnss = document.getElementById('btnss');
let alert = document.getElementById('alert');
let img1 = document.getElementById("img1");
let API = "d7fc9449b2cc8d834fc518c4f9c06a68"
let city1 = inputf.value;
console.log(city1)




btnss.addEventListener('click' , intercity);


function intercity()
{
    let city = inputf.value;
    console.log(city);

    if(city == "")
    {
        let alert = document.getElementById('alert');
        alert.style.display = "block"
        alert.innerText = " Enter a valid city";
    }
    else{

    //   alert.style.display = " none"

 
    
    // document.getElementById('whcontainerid').style.display = 'flex';
    // document.getElementById('containerid').style.display = 'none';

   

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
    .then(Response=>Response.json())
    .then((text)=>{
        console.log(text.cod)

          if(text.cod == '404')
          {
            let alert = document.getElementById('alert');
            alert.style.display = "block"
            alert.innerText = ` ${city} is not a valid city`;
            document.getElementById('whcontainerid').style.display = 'none';
            document.getElementById('containerid').style.display = 'flex';
          }
          else{
                   
            document.getElementById('whcontainerid').style.display = 'flex';
           document.getElementById('containerid').style.display = 'none';

            document.getElementById('tempp').innerText = (Math.round(text.main.temp-273));  // temp
       
            document.getElementById('mist').innerText = ( text.weather[0].description); // mist
      
            document.getElementById('city').innerText =  text.name, // city 
        
            document.getElementById('country').innerText = text.sys.country;  // country
        
            document.getElementById('feels3').innerText = ( Math.round(text.main.feels_like-273)  );  // feels 
             document.getElementById('humidity3').innerText = ( text.main.humidity);
             if(text.weather[0].description == "mist")
             {
                img1.src = "mist.jfif"
             }
             else if(text.weather[0].description == "haze")
             {
                img1.src = "haze.jfif"
             }
             else if(text.weather[0].description == "broken clouds" ||text.weather[0].description == "overcast clouds" )
             {
                img1.src = "clouds.jfif"
             }
             else if(text.weather[0].description == "rain")
             {
                img1.src = "rain.jfif"
             }
             else if(text.weather[0].description == "clear sky")
             {
                img1.src = "clear_sky.jfif"
             }
             else 
             {
              {
                img1.src = "clouds.jfif"
             }
             }
           }              // humidity
         }
       )
     }
    }

let arrow = document.getElementById('arrow');
arrow.addEventListener('click',()=>{
    document.getElementById('whcontainerid').style.display = 'none';
    document.getElementById('containerid').style.display = 'flex';
    alert.style.display = "none";
    inputf.value = "";
})


 


