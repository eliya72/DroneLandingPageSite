let showSideBar = () => {
    event.preventDefault();
    let sidebar = document.querySelector(".sidebar__wrapper");
    let burger = document.querySelector(".burger-menu");
    let closeBurger = document.querySelector(".closeSidemenu");

    sidebar.style.display = "flex";
    burger.style.display = "none";
    closeBurger.style.display = "block";
}

let hideSideBar = () => {
    event.preventDefault();
    let sidebar = document.querySelector(".sidebar__wrapper");
    let burger = document.querySelector(".burger-menu");
    let closeBurger = document.querySelector(".closeSidemenu");

    sidebar.style.display = "none";
    burger.style.display = "block";
    closeBurger.style.display = "none";
}

let sidebarLinks = document.querySelectorAll('.sidebar__wrapper .nav__link');

sidebarLinks.forEach((e) => {
    e.addEventListener("click", () => {
        hideSideBar();
        window.location.href = e.getAttribute('href'); 
    });
});

let nav_Link = document.querySelectorAll(".nav__link");
let sections = document.querySelectorAll("section");
let nav = document.querySelector(".nav");
let navHeight = nav.offsetHeight;

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, navHeight);
});

function updateActiveLink() {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll(".nav__link");
    let scrollPosition = window.scrollY + 100;

    sections.forEach((section, idx) => {
        let sectionTop = section.offsetTop;
        let sectionBottom = section.offsetTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            links.forEach(link => link.classList.remove("active"));
            links[idx].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

document.querySelectorAll(".nav__link").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        let hash = e.target.hash;

        window.scrollTo({
            top: document.querySelector(hash).offsetTop - 65,
            behavior: "smooth"
        });
    });
});

let currentIndex = 0;
let totalImages = 5;
let mainImage = document.querySelector(".main-image__carousel");
let indicators = document.querySelectorAll(".carousel-indicators li");

let updateImages = () => {
    indicators.forEach((indicators) => indicators.classList.remove("active"));
    mainImage.src = `img/Bob46${currentIndex}.svg`;
    indicators[currentIndex].classList.add("active");
}

let thumbsChange = (num) => {
    currentIndex = num;
    updateImages();
}

document.querySelector(".carousel-control-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImages();
});

document.querySelector(".carousel-control-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImages();
});


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carouselExampleIndicators");
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        // console.log(e);
        // console.log(e.touches[0].clientX);
    });

    carousel.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
        // console.log(e.touches[0].clientX);
    });

    carousel.addEventListener("touchend", () => {
        if (touchStartX - touchEndX > 80) {
            document.querySelector(".carousel-control-next").click();
        } else if (touchEndX - touchStartX > 80) {
            document.querySelector(".carousel-control-prev").click();
        }
    });
});


let readMoreBtn = document.querySelectorAll(".text-specifications-one-row__wrapper");

readMoreBtn.forEach((e) => {
    e.addEventListener("click", () => {

        const parent = e.closest(".text-specifications__wrapper");

        const moreInfo = parent.querySelector(".more-info-specifications");
        const plusButton = parent.querySelector(".plus-specifications");
        const plusSign = parent.querySelector(".plus-sign-specifications__wrapper");
        const minusSign = parent.querySelector(".minus-sign-specifications__wrapper");

        moreInfo.classList.toggle("visible");

        plusButton.classList.toggle("changeColorPlus");

        plusSign.classList.toggle("hidden");
        minusSign.classList.toggle("show");
    });
});

let flag = document.querySelectorAll(".change-language-image-toggle");
let toggle = false;

let timeout;

flag.forEach((e) => {
    e.addEventListener("click", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            toggle = !toggle;

            if (toggle) {
                e.src = "img/flag_uk.svg"
                updateLanguage("deutsch");
            } else {
                e.src = "img/flag_de-4x3.svg";
                updateLanguage("english");
            }
        }, 200); 
    });
});


function updateLanguage(lang) {
    document.querySelectorAll(".model").forEach(el => el.textContent = data[lang].model);
    document.querySelectorAll(".highlights").forEach(el => el.textContent = data[lang].highlights);
    document.querySelectorAll(".specification").forEach(el => el.textContent = data[lang].specification);
    document.querySelectorAll(".showcase").forEach(el => el.textContent = data[lang].showcase);
    document.querySelectorAll(".preorder").forEach(el => el.textContent = data[lang].preorder);
    document.querySelector(".user__sidebar__log-in").textContent = data[lang].logInMain;
    document.querySelector(".my-cart").textContent = data[lang].myCartMain;
    document.querySelector(".main-text__wrapper h1").textContent = data[lang].h1Main;
    document.querySelector(".main-text__wrapper h2").textContent = data[lang].h2Main;
    document.querySelector(".two-main-text__wrapper p").textContent = data[lang].pMain;
    document.querySelector(".preorder-main__wrapper h3").textContent = data[lang].h3Main;
    document.querySelector(".preorder-main__wrapper h4").textContent = data[lang].h4Main;
    document.querySelector(".preorder-button__product").textContent = data[lang].buttonPreorderMain;
    document.querySelector(".h1-highlights").textContent = data[lang].highlightsSection;
    document.querySelector(".first-text-highlights h4").textContent = data[lang].h41Highlights;
    document.querySelector(".second-text-highlights h4").textContent = data[lang].h42Highlights;
    document.querySelector(".third-text-highlights h4").textContent = data[lang].h43Highlights;
    document.querySelector(".fourth-text-highlights h4").textContent = data[lang].h44Highlights;
    document.querySelector(".fifth-text-highlights h4").textContent = data[lang].h45Highlights;
    document.querySelector(".sixth-text-highlights h4").textContent = data[lang].h46Highlights;
    document.querySelector(".h1-specifications").textContent = data[lang].h1Specifications;
    document.querySelector(".text-h4-show-more__specifications").textContent = data[lang].h41Specifications;
    document.querySelector(".info-specifications1").innerHTML = data[lang].h41SpecificationsText1;
    document.querySelector(".info-specifications2").innerHTML = data[lang].h42SpecificationsText1;
    document.querySelector(".info-specifications3").innerHTML = data[lang].h43SpecificationsText1;
    document.querySelector(".info-specifications4").innerHTML = data[lang].h44SpecificationsText1;
    document.querySelector(".after-show-more1").innerHTML = data[lang].h41AfterShowMoreSpecifications;
    document.querySelector(".after-show-more2").innerHTML = data[lang].h42AfterShowMoreSpecifications;
    document.querySelector(".after-show-more3").innerHTML = data[lang].h43AfterShowMoreSpecifications;
    document.querySelector(".after-show-more4").innerHTML = data[lang].h44AfterShowMoreSpecifications;
    document.querySelector(".after-show-more5").innerHTML = data[lang].h45AfterShowMoreSpecifications;
    document.querySelector(".after-show-more6").innerHTML = data[lang].h46AfterShowMoreSpecifications;
    document.querySelector(".after-show-more7").innerHTML = data[lang].h47AfterShowMoreSpecifications;
    document.querySelector(".after-show-more8").innerHTML = data[lang].h48AfterShowMoreSpecifications;
    document.querySelector(".h1-showcase").innerHTML = data[lang].h1Showcase;
    document.querySelector(".h4-showcase").innerHTML = data[lang].h4Showcase;
    document.querySelector(".preorder-button__preorder").textContent = data[lang].buttonPreorderPreorder;
    document.querySelector(".text-preorder__wrapper h1").textContent = data[lang].h1Preorder;
    document.querySelector(".text-preorder__wrapper h4").textContent = data[lang].h4Preorder;
    document.querySelector(".row-column-form-preorder label").textContent = data[lang].labelNameFormPreorder;
    document.querySelector(".row-column-form-preorderTwo label").textContent = data[lang].labelSurnameFormPreorder;
    document.querySelector(".row-column-form-preorderThird label").textContent = data[lang].labelNumberFormPreorder;
    document.querySelector(".row-column-form-preorderFour label").textContent = data[lang].labelEmailFormPreorder;
    document.querySelector(".additional-info-preorder label").textContent = data[lang].labelAdditionalFormPreorder;
    document.querySelector(".privacy-consent-preorder label").innerHTML = `${data[lang].privacyConcentFirstPart} 
    <i class="privacy-policy-hover">${data[lang].privacyConcentSecondPart}</i>`;
    document.querySelector(".privacy-policy-hover").setAttribute("data-tip", data[lang].privacyTooltip);
    document.querySelector(".footer-h4-form__wrapper h4").innerHTML = data[lang].footerh4SubText;
    document.querySelector(".subscribe-form__footer label").innerHTML = data[lang].footerEnterEmail;
    document.querySelector(".confirm-email-subscription__footer").innerHTML = data[lang].footerConfirmSub;
    document.querySelector(".left-part__footer p").innerHTML = `${data[lang].footerpCopyrightFirstPart}<span class="year-copyrights-update">2024 </span>${data[lang].footerpCopyrightSecondPart}`;
    document.querySelector(".footer-email-office").innerHTML = data[lang].footerEmailOffice;
    document.querySelector(".footer-hours-office").innerHTML = data[lang].footerHoursOffice;
    document.querySelector(".footer-number-office").innerHTML = data[lang].footerNumberOffice;
    document.querySelector(".footer-address-office").innerHTML = data[lang].footerAddressOffice;
}


// LANGUAGE SECTION

const data = {
    "english":
    {
        "model": "Model BOB46",
        "highlights": "Highlights",
        "specification": "Specifications",
        "showcase": "Showcase",
        "preorder": "Preorder",
        "logInMain": "Log In",
        "myCartMain": "My Cart",
        "h1Main": "THE BEST 6 INCH CINEMATIC DRONE",
        "h2Main": "WITH THE LATEST DJI O4 AIR UNIT PRO",
        "pMain": "Experience the next generation of pre-built FPV drones with EliDrones’ latest offering, setting a new standard in Bind-And-Fly simplicity and performance.",
        "h3Main": "CLICK TO PREORDER NOW",
        "h4Main": "ONLY FROM $669.99",
        "buttonPreorderMain": "PREORDER",
        "highlightsSection": "HIGHLIGHTS:",
        "h41Highlights": "No props in view from 40° degrees in both FPV feed and Action camera feed.",
        "h42Highlights": "Front facing and reversible Action camera mounting options.",
        "h43Highlights": "Larger body length to allow for bigger batteries for more flight time.",
        "h44Highlights": "Small size for easy transport for content creation in remote locations.",
        "h45Highlights": "Encased body to protect electronics from dirt and debris when filming.",
        "h46Highlights": "Optional hand catch stick for seamless flight-to-handheld shots.",
        "h1Specifications": "SPECIFICATIONS:",
        "h41Specifications": "FC: BLITZ Mini F722",
        "h41SpecificationsText1": "MCU: STM32 F722<br>Gyro: ICM42688<br>Barometer: DPS310<br>OSD Chip: AT7456<br>Flash: 8MB (Blackbox flash)<br>UARTS: 6<br>I2C serial: SDA/SLA pads<br>LED controller: Yes<br>Beeper pad: Yes<br>",
        "h42Specifications": "ESC: BLITZ Mini E55 4-IN-1 ESC",
        "h42SpecificationsText1": "Input Voltage: 2-6S<br>Max. Continuous Current: 55A<br>Max. Burst Current: 65A <br>MCU: G071<br>BEC: No<br>Firmware: BLHeli32<br>Current Sensor: Yes<br>Telemetry: Supported<br>",
        "h43Specifications": "Video Transmission: DJI O4 Air Unit Pro",
        "h43SpecificationsText1": "Image Sensor: 1/1.3-inch CMOS Sensor<br>Lens: FOV: 155°<br>- The equivalent focal length: 12 mm<br>- Aperture: f/2.8<br>- Focus: 0.6 m to ∞<br>ISO Range: 100-25600 (Auto)/100-25600 (Manual)<br>Video Resolution: <br>- 4K (4:3): 3840×2880@30/48/50/60fps<br>- 4K (16:9): 3840×2160@30/48/50/60/100/120fps<br>- 2.7K (4:3): 2888×2016@30/48/50/60fps<br>- 2.7K (16:9): 2688×1512@30/48/50/60/100/120fps<br>- 1080p (4:3): 1440×1080@30/48/50/60/100/120fps<br>- 1080p (16:9): 1920×1080@30/48/50/60/100/120fps<br>Video Format: MP4<br>Max Video Bitrate: 130 Mbps<br>Color Mode: Normal Mode; D-Log M Internal Memory: 4GB<br>Supported SD cards: microSD cards (max. 512GB)<br></br>",
        "h434pecifications": "Motor: XING2 2207 1750KV  motors",
        "h44SpecificationsText1": "KV: 1750KV<br>Weight(included wire): 30.5g<br>Dimension: φ29*19.25mm<br>Interphase Resistance: 74.23mΩ<br>Input Volts: 25.2V / 16.8V<br>Peak Current: 36.3A / 46.05A<br>Max Watt: 898W / 706.9W<br>Mounting Holes: 16*16 φ3mm<br>Rotor Specifications: Unibell<br>Shaft Diameter: 5mm<br>Shaft Protruding Length: 13.5mm<br>Lead: 160mm/20AWG<br>Magnet: N52H Curved<br>Configuration: 12N14P<br></br>",
        "h41AfterShowMoreSpecifications": "Weight: 455±5g",
        "h42AfterShowMoreSpecifications": "Takeoff Weight: Approx.697±5g (With 6S 1480mAh)",
        "h43AfterShowMoreSpecifications": "Dimensions (L×W×H): 181*135*44mm",
        "h44AfterShowMoreSpecifications": "Max. Speed: 170 km/h",
        "h45AfterShowMoreSpecifications": "Max.Takeoff Altitude: 7000 m",
        "h46AfterShowMoreSpecifications": "Max. Hover Time: Approx. 13 mins (6S 1480mAh)",
        "h47AfterShowMoreSpecifications": "Max. Wind Speed Resistance: Level 7",
        "h48AfterShowMoreSpecifications": "Operating Temperature: -20° to 40° C",
        "h1Showcase": "The BOB46 doesn't compromise in any areas.",
        "h4Showcase": "It allows the content creators to have maximum options to be used in almost every scenario.",
        "buttonPreorderPreorder": "PREORDER",
        "h1Preorder": "FILL THE FORM",
        "h4Preorder": "TO JOIN THE WAITING LIST",
        "labelNameFormPreorder": "First Name:",
        "labelSurnameFormPreorder": "Second Name:",
        "labelNumberFormPreorder": "Contact Number:",
        "labelEmailFormPreorder": "E-Mail:",
        "labelAdditionalFormPreorder": "If you have any additional notes about this order, please write:",
        "privacyConcentFirstPart": "I have read and accept the",
        "privacyConcentSecondPart": "privacy policy:",
        "privacyTooltip": "As for now we do not have any privacy policy whatsoever 😉",
        "footerh4SubText": "Want To Subscribe To The Newsletters?",
        "footerEnterEmail": "Enter Your E-Mail:",
        "footerConfirmSub": "Confirm",
        "footerpCopyrightFirstPart": "Copyright ©",
        "footerpCopyrightSecondPart": "EliDrones Ltd. All Rights Reserved.",
        "footerEmailOffice": "E-Mail:",
        "footerHoursOffice": "Office Hours:",
        "footerNumberOffice": "Contact Number:",
        "footerAddressOffice": "Address:",
    }, 
    "deutsch":
    {
        "model": "Modell BOB46",
        "highlights": "Höhepunkte",
        "specification": "Spezifikationen",
        "showcase": "Schaufenster",
        "preorder": "Vorbestellung",
        "logInMain": "Einloggen",
        "myCartMain": "Mein Warenkorb",
        "h1Main": "DIE BESTE 6-ZOLL-KINODROHNE",
        "h2Main": "MIT DER NEUESTEN DJI O4 AIR UNIT PRO",
        "pMain": "Erleben Sie die nächste Generation von vorgefertigten FPV-Drohnen mit dem neuesten Angebot von EliDrones, das einen neuen Standard in der Einfachheit und Leistung von Bind-And-Fly setzt.",
        "h3Main": "ZUM VORBESTELLEN KLICKEN",
        "h4Main": "NUR AB $669.99",
        "buttonPreorderMain": "VORBESTELLEN",
        "highlightsSection": "HÖHEPUNKTE:",
        "h41Highlights": "Keine Requisiten im Blickfeld von 40° Grad sowohl im FPV-Feed als auch im Action-Kamera-Feed.",
        "h42Highlights": "Nach vorne gerichtete und umkehrbare Montageoptionen für Action-Kameras.",
        "h43Highlights": "Größere Gehäuselänge für größere Batterien für mehr Flugzeit.",
        "h44Highlights": "Kleine Größe für einfachen Transport zur Erstellung von Inhalten an abgelegenen Orten.",
        "h45Highlights": "Optionale Handgriffstange für nahtlose Flug-zu-Hand-Aufnahmen.",
        "h46Highlights": "Gekapseltes Gehäuse zum Schutz der Elektronik vor Schmutz und Fremdkörpern beim Filmen.",
        "h1Specifications": "SPEZIFIKATIONEN:",
        "h41Specifications": "FC: BLITZ Mini F722",
        "h41SpecificationsText1": "MCU: STM32 F722<br>Gyro: ICM42688<br>Barometer: DPS310<br>OSD-Chip: AT7456<br>Flash: 8 MB (Blackbox-Flash)<br>UARTS: 6<br>I2C-Seriell: SDA/SLA-Pads<br>LED-Controller: Ja<br>Summer-Pad: Ja<br>",
        "h42Specifications": "ESC: BLITZ Mini E55 4-IN-1 ESC",
        "h42SpecificationsText1": "Eingangsspannung: 2-6S<br>Max. Dauerstrom: 55A<br>Max. Spitzenstrom: 65A <br>MCU: G071<br>BEC: Nein<br>Firmware: BLHeli32<br>Stromsensor: Ja<br>Telemetrie: Unterstützt<br>",
        "h43Specifications": "Videoübertragung: DJI O4 Air Unit Pro",
        "h43SpecificationsText1": "Bildsensor: 1/1,3-Zoll-CMOS-Sensor<br>Objektiv: Sichtfeld (FOV): 155°<br>- Äquivalente Brennweite: 12 mm<br>- Blende: f/2.8<br>- Fokus: 0,6 m bis ∞<br>ISO-Bereich: 100-25600 (Auto) / 100-25600 (Manuell)<br>Videoauflösung: <br>- 4K (4:3): 3840×2880@30/48/50/60fps<br>- 4K (16:9): 3840×2160@30/48/50/60/100/120fps<br>- 2.7K (4:3): 2888×2016@30/48/50/60fps<br>- 2.7K (16:9): 2688×1512@30/48/50/60/100/120fps<br>- 1080p (4:3): 1440×1080@30/48/50/60/100/120fps<br>- 1080p (16:9): 1920×1080@30/48/50/60/100/120fps<br>Videoformat: MP4<br>Max. Videobitrate: 130 Mbps<br>Farbmodus: Normalmodus; D-Log M<br>Interner Speicher: 4GB<br>Unterstützte SD-Karten: microSD-Karten (max. 512GB)<br></br>",
        "h434pecifications": "Motor: XING2 2207 1750KV Motoren",
        "h44SpecificationsText1": "KV-Wert: 1750KV<br>Gewicht (inkl. Kabel): 30,5g<br>Abmessungen: φ29*19,25mm<br>Phasenwiderstand: 74,23mΩ<br>Eingangsspannung: 25,2V / 16,8V<br>Spitzenstrom: 36,3A / 46,05A<br>Max. Leistung: 898W / 706,9W<br>Montagelöcher: 16*16 φ3mm<br>Rotor-Spezifikation: Unibell<br>Wellen-Durchmesser: 5mm<br>Herausragende Wellenlänge: 13,5mm<br>Kabellänge: 160mm/20AWG<br>Magnet: N52H Gebogen<br>Konfiguration: 12N14P<br></br>",
        "h41AfterShowMoreSpecifications": "Gewicht: 455±5g",
        "h42AfterShowMoreSpecifications": "Abfluggewicht: ca. 697±5g (mit 6S 1480mAh)",
        "h43AfterShowMoreSpecifications": "Abmessungen (L×B×H): 181×135×44mm",
        "h44AfterShowMoreSpecifications": "Max. Geschwindigkeit: 170 km/h",
        "h45AfterShowMoreSpecifications": "Max. Startflughöhe: 7000 m",
        "h46AfterShowMoreSpecifications": "Max. Schwebeflugzeit: ca. 13 Min. (6S 1480mAh)",
        "h47AfterShowMoreSpecifications": "Max. Windbeständigkeit: Stufe 7",
        "h48AfterShowMoreSpecifications": "Betriebstemperatur: -20° bis 40° C",
        "h1Showcase": "Der BOB46 macht in keinem Bereich Kompromisse.",
        "h4Showcase": "Er ermöglicht es den Content-Erstellern, maximale Optionen in fast jedem Szenario zu nutzen.",
        "buttonPreorderPreorder": "VORBESTELLEN",
        "h1Preorder": "FORMULAR AUSFÜLLEN",
        "h4Preorder": "UM AUF DIE WARTELISTE ZU KOMMEN",
        "labelNameFormPreorder": "Vorname:",
        "labelSurnameFormPreorder": "Nachname:",
        "labelNumberFormPreorder": "Kontakt Nummer:",
        "labelEmailFormPreorder": "E-Mail:",
        "labelAdditionalFormPreorder": "Falls Sie zusätzliche Anmerkungen zu dieser Bestellung haben, bitte hier schreiben:",
        // "privacyConcentFirstPart": "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie:",
        "privacyConcentFirstPart": "Ich habe die",
        "privacyConcentSecondPart": "Datenschutzerklärung gelesen und akzeptiere sie:",
        "privacyTooltip": "Derzeit haben wir keine Datenschutzrichtlinie 😉",
        "footerh4SubText": "Möchten Sie den Newsletter abonnieren?",
        "footerEnterEmail": "Geben Sie Ihre E-Mail ein:",
        "footerConfirmSub": "Bestätigen",
        "footerpCopyrightFirstPart": "Copyright ©",
        "footerpCopyrightSecondPart": "EliDrones Ltd. Alle Rechte vorbehalten.",
        "footerEmailOffice": "E-Mail:",
        "footerHoursOffice": "Bürozeiten:",
        "footerNumberOffice": "Kontakt Nummer:",
        "footerAddressOffice": "Adresse:",
    }
}

let newYear = document.querySelector(".year-copyrights-update");
let d = new Date();
let year = d.getFullYear();
newYear.innerHTML = year;

