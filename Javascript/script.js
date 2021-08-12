gsap.registerPlugin("ScrollTrigger");

const d1 = document.querySelector(".description1__home");
const d2 = document.querySelector(".description2__home");
const title = document.querySelector(".title__home");
const blur = document.querySelector(".blur");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const twot = document.querySelector("#twot");
const three = document.querySelector("#three");
const threet = document.querySelector("#threet");
const four = document.querySelector("#four");
const fourt = document.querySelector("#fourt");
const five = document.querySelector("#five");
const fivet = document.querySelector("#fivet");
const six = document.querySelector("#six");
const sixt = document.querySelector("#sixt");
const bg = document.querySelector("#bg");
const arrow = document.querySelector(".ca3-scroll-down-link");

//Animación del avión
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".avion",
    start: "80px top",
    pin: true,
    end: "bottom bottom",
    
    // pinSpacing: false,
  }
});

tl
  .to(arrow, { autoAlpha: 1, duration: 0.00001 })
  .to(arrow, { autoAlpha: 0, duration: 0.00001 })
  .to(".pl3", { opacity: 1, duration: 0.1 })
  .to(".pl5", { opacity: 1, duration: 0.1 })
  .to(".pl7", { opacity: 1, duration: 0.1 })
  .to(".pl9", { opacity: 1, duration: 0.1 })
  .to(".pl11", { opacity: 1, duration: 0.1 })
  .to(".pl13", { opacity: 1, duration: 0.1 })
  .to(".pl15", { opacity: 1, duration: 0.1 })
  .to(".pl17", { opacity: 1, duration: 0.1 })
  .to(".pl19", { opacity: 1, duration: 0.1 })
  .to(".pl21", { opacity: 1, duration: 0.1 })
  .to(".pl23", { opacity: 1, duration: 0.1 })
  .to(".pl25", { opacity: 1, duration: 0.1 })
  .to(".pl27", { opacity: 1, duration: 0.1 })
  .to(".pl29", { opacity: 1, duration: 0.1 })
  .to(".pl31", { opacity: 1, duration: 0.1 })
  .to(".pl33", { opacity: 1, duration: 0.1 })
  .to(".pl35", { opacity: 1, duration: 0.1 })
  .to(".pl37", { opacity: 1, duration: 0.1 })
  .to(".pl39", { opacity: 1, duration: 0.1 })
  .to(".pl41", { opacity: 1, duration: 0.1 })
  .to(".pl43", { opacity: 1, duration: 0.1 })
  .to(".pl45", { opacity: 1, duration: 0.1 })
  .to(".pl47", { opacity: 1, duration: 0.1 })
  .to(".pl49", { opacity: 1, duration: 0.1 })
  .to(".pl51", { opacity: 1, duration: 0.1 })
  .to(".pl53", { opacity: 1, duration: 0.1 })
  .to(".pl55", { opacity: 1, duration: 0.1 })
  .to(".pl57", { opacity: 1, duration: 0.1 })
  .to(".pl59", { opacity: 1, duration: 0.1 })
  .to(".pl61", { opacity: 1, duration: 0.1 })
  .to(".pl63", { opacity: 1, duration: 0.1 })
  .to(".pl65", { opacity: 1, duration: 0.1 })
  .to(".pl67", { opacity: 1, duration: 0.1 })
  .to(".pl69", { opacity: 1, duration: 0.1 });

//Animación del texto inicial
const tlb = gsap.timeline({
    scrollTrigger: {
      trigger: ".avion",
      start: "80px top",
      end: "170% bottom",
      pin: true,
      
    // pinSpacing: false,
    }
});
tlb.to(title, { opacity: 1, duration: 2 })
.to(".sp1", { opacity: 1, duration: 1 })
.to(".sp2", { opacity: 1, duration: 1 })
.to(d2, { opacity: 1, duration: 1 });


//Animación del teléfono
/*const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".phone-container",
    // markers: true,
    start: "top top",
    end: "100% top",
    pin: true
  },
  onComplete: function () {
    tl2.play("start");
  }
  // repeat: -1
});
tl2
  .to(blur, { opacity: 1, duration: 0.5 })
  .to(blur, { scale: "0.1", opacity: 0, x: "-25vw" })
  .to(bg, { opacity: 1 })
  .to(one, {
    opacity: 1
  })
  .to(one, { opacity: 0, duration: 0.001 })
  .add("start")
  .to(two, { opacity: 1, duration: 1.5 })
  .to(twot, { opacity: 1, duration: 1.5 })
  .to(twot, { opacity: 0, duration: 2 })

  .to(three, { opacity: 1, duration: 1.5 })
  .to(threet, { opacity: 1, duration: 1.5 })
  .to(threet, { opacity: 0, duration: 2 })

  .to(four, { opacity: 1, duration: 1.5 })
  .to(fourt, { opacity: 1, duration: 1.5 })
  .to(fourt, { opacity: 0, duration: 2 })

  .to(five, { opacity: 1, duration: 1.5 })
  .to(fivet, { opacity: 1, duration: 1.5 })
  .to(one, { opacity: 0, duration: 0.001 })
  .to(two, { opacity: 0, duration: 0.001 })
  .to(three, { opacity: 0, duration: 0.001 })
  .to(four, { opacity: 0, duration: 0.001 })
  .to(five, { opacity: 0, duration: 0.001 })
  .to(six, { opacity: 1, duration: 1.5 })
  .to(fivet, { opacity: 0, duration: 2 })
  .to(six, { opacity: 0 });*/

//Fijación del carrusel
const tl2b = gsap.timeline({
  scrollTrigger: {
    trigger: ".swiper-container",
    start: "center center",
    end: "200% bottom",
    pin: true,
  }
});
//Animación del interior de avión
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".inner",
    start: "top top",
    scrub: true,
    end: "200% bottom",
    pin: true
  }
});
tl3
  .to(".in2", { opacity: 1, duration: 0.1 })
  .to(".in4", { opacity: 1, duration: 0.1 })
  .to(".in6", { opacity: 1, duration: 0.1 })
  .to(".in8", { opacity: 1, duration: 0.1 })
  .to(".in10", { opacity: 1, duration: 0.1 })
  .to(".in12", { opacity: 1, duration: 0.1 })
  .to(".in14", { opacity: 1, duration: 0.1 })
  .to(".in16", { opacity: 1, duration: 0.1 })
  .to(".in18", { opacity: 1, duration: 0.1 })
  .to(".in20", { opacity: 1, duration: 0.1 })
  .to(".in22", { opacity: 1, duration: 0.1 })
  .to(".in24", { opacity: 1, duration: 0.1 })
  .to(".in26", { opacity: 1, duration: 0.1 })
  .to(".in28", { opacity: 1, duration: 0.1 })
  .to(".in30", { opacity: 1, duration: 0.1 })
  .to(".in32", { opacity: 1, duration: 0.1 })
  .to(".in34", { opacity: 1, duration: 0.1 })
  .to(".in36", { opacity: 1, duration: 0.1 })
  .to(".in38", { opacity: 1, duration: 0.1 })
  .to(".in40", { opacity: 1, duration: 0.1 })
  .to(".in42", { opacity: 1, duration: 0.1 })
  .to(".in44", { opacity: 1, duration: 0.1 })
  .to(".in46", { opacity: 1, duration: 0.1 })
  .to(".in48", { opacity: 1, duration: 0.1 })
  .to(".in50", { opacity: 1, duration: 0.1 })
  .to(".in52", { opacity: 1, duration: 0.1 })
  .to(".in54", { opacity: 1, duration: 0.1 })
  .to(".in56", { opacity: 1, duration: 0.1 })
  .to(".in58", { opacity: 1, duration: 0.1 })
  .to(".in60", { opacity: 1, duration: 0.1 })
  .to(".in62", { opacity: 1, duration: 0.1 })
  .to(".in64", { opacity: 1, duration: 0.1 })
  .to(".in66", { opacity: 1, duration: 0.1 })
  .to(".in68", { opacity: 1, duration: 0.1 })
  .to(".in70", { opacity: 1, duration: 0.1 })
  .to(".in72", { opacity: 1, duration: 0.1 });


//Funcionamiento del menú
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}



// Selector de idiomas;

i18next.init(
  {
    lng: "en",
    // debug: true,
    resources: {
      en: {
        translation: {
          h1: "Welcome to Fly Blue",
          home: "Home",
          about: "About us",
          partners: "Partners",
          contact: "Contact",
          // p1: "Let’s fly together, wherever you want, ",

          app1:
            "Download Fly Blue, choose your destination and the quantity of passengers.",
          app2:
            "Select the date of your trip and we will find the best options for you.",
          app3:
            "Choose your favourite aircraft and book your flight. We will take charge of the rest.",
          app4:
            "You can also subscribe, earn miles, get discounts, free seats, travel insurance, hotels and more.",
          app5:
            "You can also subscribe, earn miles, get discounts, free seats, travel insurance, hotels and more."
        }
      },
      de: {
        translation: {
          h1: "hello welt"
        }
      },
      es: {
        translation: {
          h1: "Bienvenido a Fly Blue",
          home: "Inicio",
          about: "Nosotros",
          partners: "Patrocinadores",
          contact: "Contacto",
          p1:
            "Volemos juntos, donde quieras,<br/><span >cuando quieras.</span> ",

          app1:
            "Descarga Fly Blue, elije tu destino y la cantidad de pasajeros.",
          app2:
            "Selecciona la fecha de tu viaje y nosotros encontraremos las mejores opciones para tí.",
          app3:
            "Elija su avión favorito y reserve su vuelo. Nosotros nos encargamos del resto.",
          app4:
            "También puede suscribirse, ganar millas, obtener descuentos, asientos gratis, seguro de viaje, hoteles y más."
        }
      }
    }
  },
  function (err, t) {
    // init set content
    updateContent();
  }
);

function updateContent() {
  document.getElementById("output").innerHTML = i18next.t("h1");
  document.getElementById("_home").innerHTML = i18next.t("home");
  document.getElementById("_about").innerHTML = i18next.t("about");
  document.getElementById("_partners").innerHTML = i18next.t("partners");
  document.getElementById("_contact").innerHTML = i18next.t("contact");
  // document.getElementById("_p1").innerHTML = i18next.t("p1");
  // document.getElementById("_app1").innerHTML = i18next.t("app1");
  // document.getElementById("_app2").innerHTML = i18next.t("app2");
  // document.getElementById("_app3").innerHTML = i18next.t("app3");
  // document.getElementById("_app4").innerHTML = i18next.t("app4");
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});




// Código del select personalizado
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);