function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
}

var showPopup = getCookie('showPopup')
const popup = document.getElementById('popup')

if(showPopup == 'false'){
    popup.style.display = 'none'
} else {
    popup.style.display = 'flex'
}

function setShowPopup(){
    setCookie('showPopup', 'false', 30)
    popup.style.display = 'none'
}

function closePopup(){
    popup.style.display = 'none'
}