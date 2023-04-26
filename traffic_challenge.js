// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

const { log } = console;

document.addEventListener("DOMContentLoaded", () => {
  //save the buttons and lights in variable
  const stopButton = document.getElementById("stop");
  const stopLight = document.querySelector(".light.stop");

  const cautionButton = document.getElementById("caution");
  const cautionLight = document.querySelector(".light.caution");

  const goButton = document.getElementById("go");
  const goLight = document.querySelector(".light.go");

  const goAutomaticButton = document.getElementById("goAutomatic");
  const stopAutomatic = document.getElementById("stopAutomatic");

  //turn the light on/off with the button
  stopButton.addEventListener("click", (e) => {
    //this turns other lights off when a button is clicked
    cautionLight.classList.remove("on");
    goLight.classList.remove("on");

    //this turns the light on/off
    if (stopLight.classList.contains("on")) {
      stopLight.classList.remove("on");
    } else {
      stopLight.classList.add("on");
    }
  });

  cautionButton.addEventListener("click", (e) => {
    stopLight.classList.remove("on");
    goLight.classList.remove("on");

    if (cautionLight.classList.contains("on")) {
      cautionLight.classList.remove("on");
    } else {
      cautionLight.classList.add("on");
    }
  });

  goButton.addEventListener("click", (e) => {
    cautionLight.classList.remove("on");
    stopLight.classList.remove("on");

    if (goLight.classList.contains("on")) {
      goLight.classList.remove("on");
    } else {
      goLight.classList.add("on");
    }
  });

  //turn the lights on with a hover on the light itself
  stopLight.addEventListener("mouseover", (e) => {
    stopLight.classList.add("on");
  });
  stopLight.addEventListener("mouseout", (e) => {
    stopLight.classList.remove("on");
  });
  cautionLight.addEventListener("mouseover", (e) => {
    cautionLight.classList.add("on");
  });
  cautionLight.addEventListener("mouseout", (e) => {
    cautionLight.classList.remove("on");
  });
  goLight.addEventListener("mouseover", (e) => {
    goLight.classList.add("on");
  });
  goLight.addEventListener("mouseout", (e) => {
    goLight.classList.remove("on");
  });

  //add the automatic pattern
  goAutomaticButton.addEventListener("click", (e) => {
    stopLight.classList.remove("on");
    cautionLight.classList.remove("on");
    goLight.classList.add("on");

    const automaticTimer = setInterval(automaticSeries, 1000);

    function automaticSeries() {
      if (goLight.classList.contains("on")) {
        stopLight.classList.remove("on");
        cautionLight.classList.add("on");
        goLight.classList.remove("on");
      } else if (
        cautionLight.classList.contains("on") &&
        stopLight.classList.contains("on")
      ) {
        stopLight.classList.remove("on");
        cautionLight.classList.remove("on");
        goLight.classList.add("on");
        currentLight = stopLight;
      } else if (cautionLight.classList.contains("on")) {
        stopLight.classList.add("on");
        cautionLight.classList.remove("on");
        goLight.classList.remove("on");
        currentLight = stopLight;
      } else if (stopLight.classList.contains("on")) {
        cautionLight.classList.add("on");
        goLight.classList.remove("on");
        currentLight = cautionLight;
      }
    }

    stopAutomatic.addEventListener("click", () => {
      clearInterval(automaticTimer);
      stopLight.classList.add("on");
      cautionLight.classList.remove("on");
      goLight.classList.remove("on");
    });
  });
});
