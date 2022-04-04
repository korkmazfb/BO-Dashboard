const apiKey = '728e3def87';

let liveDiv, selectMenu, weerIcon, info1, info2, info3, info4;

const startLiveWeer = () => {

  liveDiv = document.getElementById('live');
  selectMenu = document.getElementById('city');

  selectMenu.addEventListener('change', laadWeerbericht);

  weerIcon = document.querySelector('#live img');
  info1 = document.querySelector('#live h1');
  info2 = document.querySelector('#live h2');
  info3 = document.querySelector('#live p');
  info4 = document.querySelector('#live h3');

  setTimeout(laadWeerbericht, 1000);
}

const laadWeerbericht = () => {
  let plaats = haalGeselecteerdePlaats();

  console.log(plaats)

  let url = `https://weerlive.nl/api/json-data-10min.php?key=${apiKey}&locatie=${plaats}`;


  weerIcon.src = 'img/loading.gif';

  setTimeout(() => {

    info1.innerHTML = '';
    info2.innerHTML = '';
    info3.innerHTML = '';
    info4.innerHTML = '';

    laadJSON(url)
  }, 1500);
}

const haalGeselecteerdePlaats = () => {

  let selectedIndex = selectMenu.selectedIndex;
  return selectMenu.options[selectedIndex].value;


}

const laadJSON = (url) => {
  const aanvraag = new XMLHttpRequest();

  aanvraag.onreadystatechange = () => {
    if (aanvraag.readyState === 4 && aanvraag.status === 200) {
      let jsonText = aanvraag.responseText;

      const weerbericht = JSON.parse(jsonText);

      toonWeerbericht(weerbericht);
    }
  };

  aanvraag.open("GET", url, true);

  aanvraag.send();
};

const toonWeerbericht = (weerbericht) => {

  let weer = weerbericht.liveweer[0];
  console.log(weerbericht)

  weerIcon.src = `img/icons/${weer.image}.png`;

  info1.innerHTML = weer.plaats;
  info2.innerHTML = weer.samenv;
  info3.innerHTML = weer.verw;
  info4.innerHTML = weer.temp + '\u2103';

}

window.addEventListener('DOMContentLoaded', startLiveWeer);
