const secretListItem = document.getElementsByClassName("secret")[0];

window.onload = () => {
    const current = new Date();
    const showTime  = new Date("March 22, 2022 12:00:00");
    if(current >= showTime){
      secretListItem.classList.remove("d-none");
    }  
};