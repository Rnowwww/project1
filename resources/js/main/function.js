// Swapping Page with association Button

function shopDisplay() {
  let shopBlockDisplay = document.getElementById('shopPage');
  shopBlockDisplay.classList.remove("shopPage");
  shopBlockDisplay.classList.add("shopPageDisplay");
  let mainBlockDisplay = document.querySelector('#mainPage')
  mainBlockDisplay.classList.remove("mainPage");
  mainBlockDisplay.classList.add("mainPageNone");
}


function mainDisplay(){
  let shopBlockDisplay = document.getElementById('shopPage');
  shopBlockDisplay.classList.remove("shopPageDisplay");
  shopBlockDisplay.classList.add("shopPage");
  let mainBlockDisplay = document.querySelector('#mainPage')
  mainBlockDisplay.classList.remove("mainPageNone");
  mainBlockDisplay.classList.add("mainPage");
  let invBlockDisplay = document.getElementById('inventoryPage');
  invBlockDisplay.classList.remove("invPageDisplay");
  invBlockDisplay.classList.add("inventoryPage");
}

function invDisplay(){
  let invBlockDisplay = document.getElementById('inventoryPage');
  invBlockDisplay.classList.remove("inventoryPage");
  invBlockDisplay.classList.add("invPageDisplay");
  let mainBlockDisplay = document.querySelector('#mainPage')
  mainBlockDisplay.classList.remove("mainPage");
  mainBlockDisplay.classList.add("mainPageNone");
}




// Display Wings


function wingsDisplay() {
  if('wings' in localStorage) {
    wings_counter.innerHTML = String(localStorage.getItem('wings')).replace(/(.)(?=(\d{3})+$)/g,'$1 ');
  } else {
    wings_counter.innerHTML = String(wings).replace(/(.)(?=(\d{3})+$)/g,'$1 ');
  }
}

function incrementPerClick() {
  if('wings' in localStorage){
    wings = parseInt(localStorage.getItem('wings')) + wingsPCLocalStorage();
    localStorage.setItem('wings', wings)
  } else {
    wings += wingsPerClick;
    localStorage.setItem('wings', wings);
  }
  wingsDisplay(); 
}


function wingsPCLocalStorage() {
  if('wingsPC' in localStorage) {
    return parseInt(localStorage.getItem('wingsPC'));
  } else {
    localStorage.setItem('wingsPC', wingsPerClick);
    return wingsPerClick;
  }
}

function wingsPSLocalStorage() {
  if('wingsPS' in localStorage) {
    return parseInt(localStorage.getItem('wingsPS'));
  } else {
    localStorage.setItem('wingsPS', wingsPerSecond);
    return wingsPerSecond;
  }
}


function spendMoney() {
  
}

// Function : Buying stuff in store

setInterval(incrementPerSecond, 1000);

function incrementPerSecond() {
  if('wings' in localStorage){
    wings = parseInt(localStorage.getItem('wings')) + wingsPSLocalStorage();
    localStorage.setItem('wings', wings);
  } else {
    wings += wingsPSLocalStorage();
  }
  wingsDisplay();
}



//Store 

function buyFacebook() {

  if('wingsPC' in localStorage) {
    wingsPerClick += facebookFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += facebookFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }

  facebookInv.classList.remove("facebookInvNone");
  facebookInv.classList.add("facebookInv");
}

function buyTwitter() {

  if('wingsPS' in localStorage) {
    wingsPerSecond += twitterFactory;
    localStorage.setItem('wingsPS', wingsPerSecond);
  } else {
    wingsPerSecond += twitterFactory;
    localStorage.setItem('wingsPS', wingsPerSecond);
  }
  twitterInv.classList.remove("facebookInvNone");
  twitterInv.classList.add("facebookInv");
}


function buyUberEats() {
  
  if('wingsPC' in localStorage) {
    wingsPerClick += uberEatsFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += uberEatsFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }  
  
  uberEatsInv.classList.remove("uberEatsInvNone");
  uberEatsInv.classList.add("uberEatsInv");
}

function buyQuizz() {
  
  if('wingsPC' in localStorage) {
    wingsPerClick += quizzFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  } else {
    wingsPerClick += quizzFactory;
    localStorage.setItem('wingsPC', wingsPerClick);
  }  
  
  quizzInv.classList.remove("quizzInvNone");
  quizzInv.classList.add("quizzInv");
}








