
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








