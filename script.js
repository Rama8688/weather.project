const ApiKey='0b1d43c673d1f8afbe935da770f31623'


// accessing all required the html elements
const input=document.getElementById('inputval')
const btnEle=document.getElementById('btn')
const Tempele=document.getElementById('temp')
const Discription=document.getElementById('description')
const Location=document.getElementById('location')
const iconele=document.getElementById('icon')

// adding the eventlisteners to the button ele
btnEle.addEventListener('click',(e)=>{
  debugger;
  
    // condition for checking weather user entered a location 
    if(input.value==''){
      console.log(input.value)
        alert('enter the location')
    }else{
    //store the location entered by user
    let loc=input.value
    // api url
    url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${ApiKey}`

    //using fetch method to fetch the location weather details
   fetch(url)
   .then((data)=>data.json())
   .then(da=>{
    console.log(da)
    // object distructuring
    const {name}=da;
    const {feels_like}=da.main;
    const{description}=da.weather[0]
    const{icon}=da.weather[0]
    console.log(icon)

    // assigining the values to html elements
    Location.innerText=name
    Tempele.innerText=Math.round(feels_like-273)
    Discription.innerText=description
    iconele.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
   })
   .catch(()=>{
     alert('plz enter a valid location')
   })
   
}
//to make input value empty
input.value=''
})


