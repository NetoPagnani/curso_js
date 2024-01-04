
function relogio(){
  function getTimeFromSecond(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {
      hour12: false,
      timeZone: "GMT",
    });
  }
  
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;
  
  function startClock() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSecond(segundos);
    }, 1000);
  }
  
  document.addEventListener("click", function (e) {
    const el = e.target;
  
    if (el.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
  
    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      startClock();
    }
  
    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }
  });
  
}

relogio();

