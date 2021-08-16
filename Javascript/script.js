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
    markers: true,
    scrub: true,
    start: "top top",
    end: "600% bottom",
    pin: true,
    
  },
  // onComplete: function () {
  //   tl2.play("start");
  // }
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
  // .add("start")
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
    debug: true,
    resources: {
      en: {
        translation: {
          h1: "Welcome to Fly Blue",
          home: "Home",
          about: "About us",
          partners: "Partners",
          contact: "Contact",
          sp1: "Let’s fly together, ",
          sp2: "wherever you want,",
          sp3: "whenever you want.",

          app1:
            "Download Fly Blue, choose your destination and the quantity of passengers.",
          app2:
            "Select the date of your trip and we will find the best options for you.",
          app3:
            "Choose your favourite aircraft and book your flight. We will take charge of the rest.",
          app4:
            "You can also subscribe, earn miles, get discounts, free seats, travel insurance, hotels and more.",
            cp1: "Because our planet matters, we take actions to offset the carbon print of every flight. We are becoming carbon neutral by 2027, <a href>learn how.</a>",
            ct2: "Comfort, privacy and speed.", 
            cp2: "With a modern fleet available worldwide, we bring you the possibility of booking a flight at any time and with the best support. Wherever you need to get, we will take you while providing the best onboard service to you.",
            ct3: "Highest safety standards and the best service.",
            cp3: "Safety is our most important value, that is why every flight is operated according to the highest international safety standards while it is monitored from our operations center 24/7. We audit our whole fleet every day, to make sure you get the best aircrafts available around the world.",
            description__download: "<h3>Download now and start<br/> flying with us.</h3>",
            ft1: "Site map",
            ft2: "Our group",
            Investments: "Investments",
            joinyourfleet: "Join your fleet",
            ft3: "Contact us",
            num1: "North America",
            num2: "Latin America & Caribbean",
            num3: "Europe, Asia & Oceania"
        }
      },
      fr:{
        translation: {
          h1: "Bienvenue chez Fly Blue",
          home: "Début",
          about: "Nous",
          partners: "Sponsors",
          contact: "Contact",
          sp1: "Volons ensemble, ",
          sp2:"où vous voulez",
          sp3: "quand vous voulez.",
          app1:
            "Téléchargez Fly Blue, choisissez votre destination et le nombre de passagers.",
          app2:
            "Sélectionnez la date de votre voyage et nous trouverons les meilleures options pour vous.",
          app3:
            "Choisissez votre avion préféré et réservez votre vol. Nous nous occupons du reste.",
          app4:
            "Vous pouvez également vous inscrire, gagner des miles, obtenir des réductions, des sièges gratuits, une assurance voyage, des hôtels et plus encore.",
          cp1: "Parce que notre planète est importante, nous prenons des mesures pour compenser l'empreinte carbone de chaque vol. Nous deviendrons neutres en carbone d'ici 2027, <a href> découvrez comment. </a>",
          ct2: "Confort, intimité et rapidité",
          cp2: "Avec une flotte moderne disponible partout dans le monde, nous vous offrons la possibilité de réserver un vol à tout moment et avec le meilleur accompagnement. Où que vous alliez, nous vous emmènerons tout en vous offrant le meilleur service à bord.",
          ct3: "Les normes de sécurité les plus élevées et le meilleur service.",
          cp3: "La sécurité est notre valeur la plus importante, c'est pourquoi chaque vol est effectué conformément aux normes de sécurité internationales les plus élevées tout en étant surveillé depuis notre centre d'opérations 24/7. Nous auditons l'ensemble de notre flotte chaque jour, pour nous assurer que vous obtenez le meilleur avion disponible dans le monde. monde.",
          description__download: "<h3> Téléchargez maintenant et commencez <br/> à voler avec nous. </h3>",
          ft1: "Navigation",
          ft2: "Notre groupe",
          Investments: "Investissements",
          joinyourfleet: "Rejoignez votre flotte",
          ft3: "Nous contacter",
          num1: "Amérique du Nord",
          num2: "Amérique latine et Caraïbes",
          num3: "Europe, Asie et Océanie",
      }},
      it:{
        translation: {
          h1: "Benvenuti in Fly Blue",
          home: "Inizio",
          about: "Noi",
          partners: "Sponsors",
          contact: "Contatto",
          sp1: "Voliamo insieme,",
          sp2:"dove vuoi,",
          sp3: "quando vuoi.",
          app1:
            "Scarica Fly Blue, scegli la tua destinazione e il numero di passeggeri.",
          app2:
            "Seleziona la data del tuo viaggio e troveremo le migliori opzioni per te.",
          app3:
            "Scegli il tuo aereo preferito e prenota il tuo volo. Al resto pensiamo noi.",
          app4:
            "Puoi anche abbonarti, guadagnare miglia, ottenere sconti, posti gratuiti, assicurazione di viaggio, hotel e altro.",
          cp1: "Poiché il nostro pianeta è importante, intraprendiamo azioni per compensare l'impronta di carbonio di ogni volo. Stiamo diventando carbon neutral entro il 2027, <a href>impara come.</a>",
          ct2: "Comfort, privacy e velocità.",
          cp2: "Con una flotta moderna disponibile in tutto il mondo, ti offriamo la possibilità di prenotare un volo in qualsiasi momento e con il miglior supporto. Ovunque tu abbia bisogno di arrivare, ti porteremo fornendoti il ​​miglior servizio a bordo.",
          ct3: "I più elevati standard di sicurezza e il miglior servizio.",
          cp3: "La sicurezza è il nostro valore più importante, ecco perché ogni volo è operato secondo i più alti standard di sicurezza internazionali mentre è monitorato dal nostro centro operativo 24/7. Controlliamo l'intera flotta ogni giorno, per assicurarci di ottenere i migliori aeromobili disponibile in tutto il mondo.",
          description__download: "<h3>Scarica ora e inizia<br/> a volare con noi.</h3>",
          ft1: "Mappa del sito",
          ft2: "Il nostro gruppo",
          Investments: "Investimenti",
          joinyourfleet: "Unisciti alla tua flotta",
          ft3: "Contattaci",
          num1: "Nord America",
          num2: "America Latina e Caraibi",
          num3: "Europa, Asia e Oceania",
      }},
      pt:{
        translation: {
          h1: "Bem-vindo ao Fly Blue",
          home: "Iniciar",
          about: "Nós",
          partners: "Patrocinadores",
          contact: "Contato",
          sp1: "Vamos voar juntos,",
          sp2:"onde você quiser,",
          sp3: "quando quiser.",
          app1:
            "Baixe Fly Blue, escolha seu destino e a quantidade de passageiros.",
          app2:
            "Selecione a data da sua viagem e nós encontraremos as melhores opções para você.",
          app3:
            "Escolha o seu avião preferido e reserve o seu voo. Nós cuidamos do resto.",
          app4:
            "Você também pode se inscrever, ganhar milhas, obter descontos, assentos grátis, seguro de viagem, hotéis e muito mais.",
          cp1: "Como nosso planeta é importante, agimos para compensar a pegada de carbono de cada voo. Estaremos nos tornando neutros em carbono até 2027, <a href> saiba como. </a>",
          ct2: "Conforto, privacidade e rapidez.",
          cp2: "Com uma frota moderna disponível em todo o mundo, oferecemos-lhe a possibilidade de reservar um voo a qualquer momento e com o melhor apoio. Onde você precisar chegar, nós o levaremos e lhe prestaremos o melhor serviço a bordo.",
          ct3: "Os mais elevados padrões de segurança e o melhor serviço.",
          cp3: "A segurança é o nosso valor mais importante, por isso todos os voos são operados de acordo com os mais altos padrões de segurança internacionais e são monitorados por nosso centro de operações 24/7. Verificamos toda a frota todos os dias para garantir que você obtenha as melhores aeronaves disponíveis em todo o mundo.",
          description__download: "<h3> Baixe agora e comece <br/> a voar conosco. </h3>",
          ft1: "Mapa do site",
          ft2: "Nosso grupo",
          Investments: "Investimentos",
          joinyourfleet: "Junte-se à sua frota",
          ft3: "Contate-Nos",
          num1: "América do Norte",
          num2: "América Latina e Caribe",
          num3: "Europa, Ásia e Oceania",
      }},
      es: {
        translation: {
          h1: "Bienvenido a Fly Blue",
          home: "Inicio",
          about: "Nosotros",
          partners: "Patrocinadores",
          contact: "Contacto",
          sp1: "Volemos juntos, ",
          sp2:"donde quieras",
          sp3: "cuando quieras.",
          app1:
            "Descarga Fly Blue, elije tu destino y la cantidad de pasajeros.",
          app2:
            "Selecciona la fecha de tu viaje y nosotros encontraremos las mejores opciones para tí.",
          app3:
            "Elija su avión favorito y reserve su vuelo. Nosotros nos encargamos del resto.",
          app4:
            "También puede suscribirse, ganar millas, obtener descuentos, asientos gratis, seguro de viaje, hoteles y más.",
          cp1: "Debido a que nuestro planeta es importante, tomamos medidas para compensar la huella de carbono de cada vuelo. Nos convertiremos en carbono neutral para 2027, <a href> aprenda cómo. </a>",
          ct2: "Confort, privacidad y velocidad",
          cp2: "Con una moderna flota disponible en todo el mundo, te brindamos la posibilidad de reservar un vuelo en cualquier momento y con el mejor soporte. Donde sea que necesite llegar, lo llevaremos mientras le brindamos el mejor servicio a bordo.",
          ct3: "Los más altos estándares de seguridad y el mejor servicio.",
          cp3: "La seguridad es nuestro valor más importante, es por eso que cada vuelo se opera de acuerdo con los más altos estándares internacionales de seguridad mientras es monitoreado desde nuestro centro de operaciones 24/7. Auditamos toda nuestra flota todos los días, para asegurarnos de que obtenga las mejores aeronaves disponibles en todo el mundo.",
          description__download: "<h3>Descarga ahora y comienza <br/> a volar con nosotros.</h3>",
          ft1: "Navegación",
          ft2: "Nuestro grupo",
          Investments: "Inversiones",
          joinyourfleet: "Únete a tu flota",
          ft3: "Contáctenos",
          num1: "Norteamérica",
          num2: "Latinoamérica y Caribe",
          num3: "Europa, Asia y Oceanía"
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
  document.querySelector(".sp1").innerHTML = i18next.t("sp1");
  document.querySelector(".sp2").innerHTML = i18next.t("sp2");
  document.querySelector(".sp3").innerHTML = i18next.t("sp3");
  document.querySelector(".cp1").innerHTML = i18next.t("cp1");
  document.querySelector(".ct2").innerHTML = i18next.t("ct2");
  document.querySelector(".cp2").innerHTML = i18next.t("cp2");
  document.querySelector(".ct3").innerHTML = i18next.t("ct3");
  document.querySelector(".cp3").innerHTML = i18next.t("cp3");
  document.querySelector(".description__download").innerHTML = i18next.t("description__download");
  document.querySelector(".ft1").innerHTML = i18next.t("ft1");
  document.getElementById("_about2").innerHTML = i18next.t("about");
  document.getElementById("_partners2").innerHTML = i18next.t("partners");
  document.getElementById("_contact2").innerHTML = i18next.t("contact");
  document.querySelector(".ft2").innerHTML = i18next.t("ft2");
  document.querySelector(".Investments").innerHTML = i18next.t("Investments");
  document.querySelector(".joinyourfleet").innerHTML = i18next.t("joinyourfleet");
  document.querySelector(".ft3").innerHTML = i18next.t("ft3");
  document.querySelector(".num1").innerHTML = i18next.t("num1");
  document.querySelector(".num2").innerHTML = i18next.t("num2");
  document.querySelector(".num3").innerHTML = i18next.t("num3");
  



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




//Custom Select
/* Features needed to make the selectCustom work for mouse users.

- Toggle custom select visibility when clicking the "box"
- Update custom select value when clicking in a option
- Navigate through options when using keyboard up/down
- Pressing Enter or Space selects the current hovered option
- Close the select when clicking outside of it
- Sync both selects values when selecting a option. (native or custom)

*/

const elSelectNative = document.getElementsByClassName("js-selectNative")[0];
const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomBox = elSelectCustom.children[0];
const elSelectCustomOpts = elSelectCustom.children[1];
const customOptsList = Array.from(elSelectCustomOpts.children);
const optionsCount = customOptsList.length;
const defaultLabel = elSelectCustomBox.getAttribute("data-value");

let optionChecked = "";
let optionHoveredIndex = -1;

// Toggle custom select visibility when clicking the box
elSelectCustomBox.addEventListener("click", e => {
  const isClosed = !elSelectCustom.classList.contains("isActive");

  if (isClosed) {
    openSelectCustom();
  } else {
    closeSelectCustom();
  }
});

function openSelectCustom() {
  elSelectCustom.classList.add("isActive");
  // Remove aria-hidden in case this was opened by a user
  // who uses AT (e.g. Screen Reader) and a mouse at the same time.
  elSelectCustom.setAttribute("aria-hidden", false);

  if (optionChecked) {
    const optionCheckedIndex = customOptsList.findIndex(
    el => el.getAttribute("data-value") === optionChecked);

    updateCustomSelectHovered(optionCheckedIndex);
  }

  // Add related event listeners
  document.addEventListener("click", watchClickOutside);
  document.addEventListener("keydown", supportKeyboardNavigation);
}

function closeSelectCustom() {
  elSelectCustom.classList.remove("isActive");

  elSelectCustom.setAttribute("aria-hidden", true);

  updateCustomSelectHovered(-1);

  // Remove related event listeners
  document.removeEventListener("click", watchClickOutside);
  document.removeEventListener("keydown", supportKeyboardNavigation);
}

function updateCustomSelectHovered(newIndex) {
  const prevOption = elSelectCustomOpts.children[optionHoveredIndex];
  const option = elSelectCustomOpts.children[newIndex];

  if (prevOption) {
    prevOption.classList.remove("isHover");
  }
  if (option) {
    option.classList.add("isHover");
  }

  optionHoveredIndex = newIndex;
}

function updateCustomSelectChecked(value, text) {
  const prevValue = optionChecked;

  const elPrevOption = elSelectCustomOpts.querySelector(
  `[data-value="${prevValue}"`);

  const elOption = elSelectCustomOpts.querySelector(`[data-value="${value}"`);

  if (elPrevOption) {
    elPrevOption.classList.remove("isActive");
  }

  if (elOption) {
    elOption.classList.add("isActive");
  }

  elSelectCustomBox.textContent = text;
  optionChecked = value;
}

function watchClickOutside(e) {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    closeSelectCustom();
  }
}

function supportKeyboardNavigation(e) {
  // press down -> go next
  if (event.keyCode === 40 && optionHoveredIndex < optionsCount - 1) {
    let index = optionHoveredIndex;
    e.preventDefault(); // prevent page scrolling
    updateCustomSelectHovered(optionHoveredIndex + 1);
  }

  // press up -> go previous
  if (event.keyCode === 38 && optionHoveredIndex > 0) {
    e.preventDefault(); // prevent page scrolling
    updateCustomSelectHovered(optionHoveredIndex - 1);
  }

  // press Enter or space -> select the option
  if (event.keyCode === 13 || event.keyCode === 32) {
    e.preventDefault();

    const option = elSelectCustomOpts.children[optionHoveredIndex];
    const value = option && option.getAttribute("data-value");

    if (value) {
      elSelectNative.value = value;
      updateCustomSelectChecked(value, option.textContent);
    }
    closeSelectCustom();
  }

  // press ESC -> close selectCustom
  if (event.keyCode === 27) {
    closeSelectCustom();
  }
}

// Update selectCustom value when selectNative is changed.
elSelectNative.addEventListener("change", e => {
  const value = e.target.value;
  const elRespectiveCustomOption = elSelectCustomOpts.querySelectorAll(
  `[data-value="${value}"]`)[
  0];

  updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
});

// Update selectCustom value when an option is clicked or hovered
customOptsList.forEach(function (elOption, index) {
  elOption.addEventListener("click", e => {
    const value = e.target.getAttribute("data-value");

    // Sync native select to have the same value
    elSelectNative.value = value;
    updateCustomSelectChecked(value, e.target.textContent);
    closeSelectCustom();
  });

  elOption.addEventListener("mouseenter", e => {
    updateCustomSelectHovered(index);
  });

  // TODO: Toggle these event listeners based on selectCustom visibility
});


//Segundo select
const elSelectNative2 = document.getElementsByClassName("segundoNative")[0];
const elSelectCustom2 = document.getElementsByClassName("segundoCustom")[0];
const elSelectCustomBox2 = elSelectCustom2.children[0];
const elSelectCustomOpts2 = elSelectCustom2.children[1];
const customOptsList2 = Array.from(elSelectCustomOpts2.children);
const optionsCount2 = customOptsList2.length;
const defaultLabel2 = elSelectCustomBox2.getAttribute("data-value");

let optionChecked2 = "";
let optionHoveredIndex2 = -1;

// Toggle custom select visibility when clicking the box
elSelectCustomBox2.addEventListener("click", e => {
  const isClosed = !elSelectCustom2.classList.contains("isActive");

  if (isClosed) {
    openSelectCustom();
  } else {
    closeSelectCustom();
  }
});

function openSelectCustom() {
  elSelectCustom2.classList.add("isActive");
  // Remove aria-hidden in case this was opened by a user
  // who uses AT (e.g. Screen Reader) and a mouse at the same time.
  elSelectCustom2.setAttribute("aria-hidden", false);

  if (optionChecked2) {
    const optionChecked2Index = customOptsList2.findIndex(
    el => el.getAttribute("data-value") === optionChecked2);

    updateCustomSelectHovered(optionChecked2Index);
  }

  // Add related event listeners
  document.addEventListener("click", watchClickOutside);
  document.addEventListener("keydown", supportKeyboardNavigation);
}

function closeSelectCustom() {
  elSelectCustom2.classList.remove("isActive");

  elSelectCustom2.setAttribute("aria-hidden", true);

  updateCustomSelectHovered(-1);

  // Remove related event listeners
  document.removeEventListener("click", watchClickOutside);
  document.removeEventListener("keydown", supportKeyboardNavigation);
}

function updateCustomSelectHovered(newIndex) {
  const prevOption = elSelectCustomOpts2.children[optionHoveredIndex2];
  const option = elSelectCustomOpts2.children[newIndex];

  if (prevOption) {
    prevOption.classList.remove("isHover");
  }
  if (option) {
    option.classList.add("isHover");
  }

  optionHoveredIndex2 = newIndex;
}

function updateCustomSelectChecked(value, text) {
  const prevValue = optionChecked2;

  const elPrevOption = elSelectCustomOpts2.querySelector(
  `[data-value="${prevValue}"`);

  const elOption = elSelectCustomOpts2.querySelector(`[data-value="${value}"`);

  if (elPrevOption) {
    elPrevOption.classList.remove("isActive");
  }

  if (elOption) {
    elOption.classList.add("isActive");
  }

  elSelectCustomBox2.textContent = text;
  optionChecked2 = value;
}

function watchClickOutside(e) {
  const didClickedOutside = !elSelectCustom2.contains(event.target);
  if (didClickedOutside) {
    closeSelectCustom();
  }
}

function supportKeyboardNavigation(e) {
  // press down -> go next
  if (event.keyCode === 40 && optionHoveredIndex2 < optionsCount2 - 1) {
    let index = optionHoveredIndex2;
    e.preventDefault(); // prevent page scrolling
    updateCustomSelectHovered(optionHoveredIndex2 + 1);
  }

  // press up -> go previous
  if (event.keyCode === 38 && optionHoveredIndex2 > 0) {
    e.preventDefault(); // prevent page scrolling
    updateCustomSelectHovered(optionHoveredIndex2 - 1);
  }

  // press Enter or space -> select the option
  if (event.keyCode === 13 || event.keyCode === 32) {
    e.preventDefault();

    const option = elSelectCustomOpts2.children[optionHoveredIndex2];
    const value = option && option.getAttribute("data-value");

    if (value) {
      elSelectNative2.value = value;
      updateCustomSelectChecked(value, option.textContent);
    }
    closeSelectCustom();
  }

  // press ESC -> close selectCustom
  if (event.keyCode === 27) {
    closeSelectCustom();
  }
}

// Update selectCustom value when selectNative is changed.
elSelectNative.addEventListener("change", e => {
  const value = e.target.value;
  const elRespectiveCustomOption = elSelectCustomOpts2.querySelectorAll(
  `[data-value="${value}"]`)[
  0];

  updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);
});

// Update selectCustom value when an option is clicked or hovered
customOptsList2.forEach(function (elOption, index) {
  elOption.addEventListener("click", e => {
    const value = e.target.getAttribute("data-value");

    // Sync native select to have the same value
    elSelectNative.value = value;
    updateCustomSelectChecked(value, e.target.textContent);
    closeSelectCustom();
  });

  elOption.addEventListener("mouseenter", e => {
    updateCustomSelectHovered(index);
  });

  // TODO: Toggle these event listeners based on selectCustom visibility
});