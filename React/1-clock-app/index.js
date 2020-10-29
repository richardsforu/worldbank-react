
let indianClock=document.querySelector('#indianClock');
let dubaiClock=document.querySelector('#dubaiClock');
let americanClock=document.querySelector('#americanClock');

function jsClock(props){

    let date=new Date().toLocaleTimeString('en-US',{timeZone:props});
    let ui=`
      <div class='card'>
            <div class='card-header'>
            <span>${props}</span>
            </div>
            <div class='card-body'>
            <p> ${date} </p>
            </div>
      </div>
    `
    return ui;
}


let indianClockV1=document.querySelector('#indianClockV1');
let dubaiClockV1=document.querySelector('#dubaiClockV1');
let americanClockV1=document.querySelector('#americanClockV1');

function reactClock(props){

    let date=new Date().toLocaleTimeString('en-US',{timeZone:props});
    let ui=
      <div class='card'>
            <div class='card-header'>
            <span>{props}</span>
            </div>
            <div class='card-body'>
            <p> {date} </p>
            </div>
      </div>
    
    return ui;
}
setInterval(() => {

    indianClock.innerHTML=jsClock('Asia/Kolkata');// OD
    dubaiClock.innerHTML=jsClock('Asia/Dubai');
    americanClock.innerHTML=jsClock('America/Los_Angeles');

    //-----------------

    ReactDOM.render(reactClock('Asia/Kolkata'),indianClockV1); // VD
    ReactDOM.render(reactClock('Asia/Dubai'),dubaiClockV1);
    ReactDOM.render(reactClock('America/Los_Angeles'),americanClockV1);


},1000);
