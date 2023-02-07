const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getElement = (selection)=>{
    const element = document.querySelector(selection);
    if (element) {
        return element
    } else {
        throw new Error ("please check your selection ")
    }
}

const examTime = getElement(".exam-time");
const deadline = getElement(".deadline");
const items = document.querySelectorAll(".deadline-format h4")

const futureDate = new Date(2023,2,6,8,00,0);
const futureYear = futureDate.getFullYear();
let futureMonth = futureDate.getMonth();
let futureDay = futureDate.getDay()
const futureHours= futureDate.getHours();
const futureMinute = futureDate.getMinutes();
const date = futureDate.getDate();

futureMonth = months[futureMonth];
futureDay = weekdays[futureDay];

examTime.textContent =`futa exam start on ${futureDay} ${date} ${futureMonth} ${futureYear}`

const  futureTime = futureDate.getTime();

function getRemainingTime(){
   const currentTime=new Date().getTime();
    // TIME DIFFERENT
    const t = futureTime - currentTime;
    // CACULATING VALUES IN MILLISECONDS 
    const oneDay = 24*60*60*1000;
    const oneHour = 60* 60 * 1000;
    const oneMinute = 60 *1000;

    let days = t/oneDay;
    days= Math.floor(days)
    let hours = (t % oneDay) / oneHour;
    hours= Math.floor(hours)
    const minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    let values =[days, hours, minutes, seconds]
     function formatValues (item) {
        if(item<10){
          return (item=`0${item}`) 
        }
        return item
     } 
    items.forEach(function(item,index){
       item.textContent=formatValues(values[index]);
    })
    if(t<0) {
        clearInterval(countdown)
    }

}
let countdown = setInterval(getRemainingTime,1000)




















