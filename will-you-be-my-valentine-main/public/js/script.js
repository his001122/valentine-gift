const answers_no = {
    english: [
        "No",
        "Are you sure Sushmi?",
        "Are you really sure Sushmi??",
        "Are you really realy sure Sushmi???",
        "Think again Sushmi?",
        "Don't believe in second chances Sushmi?",
        "Why are you being so cold Sushmi?",
        "Maybe we can talk about it Sushmi?",
        "I am not going to ask again Sushmi!",
        "Ok now this is hurting my feelings Sushmi!",
        "You are now just being mean Sushmi!",
        "Why are you doing this to me Sushmi?",
        "Please give me a chance Sushmi!",
        "I am begging you to stop Sushmi!",
        "Ok, Let's just start over Sushmi.."
    ],
    french: [
        "Non",
        "Tu es sûr Sushmi?",
        "Tu es vraiment sûr Sushmi??",
        "Tu es vraiment vraiment sûr Sushmi???",
        "Réfléchis encore Sushmi?",
        "Tu ne crois pas aux deuxièmes chances Sushmi?",
        "Pourquoi tu es si froid Sushmi?",
        "Peut-être, on peut en parler Sushmi?",
        "Je ne vais pas demander encore une fois Sushmi!",
        "D'accord, maintenant ca me fait mal Sushmi!",
        "Tu es juste méchant Sushmi!",
        "Pourquoi tu me fais ça Sushmi?",
        "Donnez-moi une chance plz Sushmi!",
        "Je te supplie d'arrêter Sushmi!",
        "D'accord, recommençons Sushmi.."
    ],
    thai: [
        "ไม่อ่ะ Sushmi " ,
        "แน่ใจจริงๆหรอคะ Sushmi?",
        "แน่ใจจริงๆ จริงๆนะคะ Sushmi?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ? Sushmi",
        "ลองคิดดูอีกทีหน่อยสิคะ.. Sushmi",
        "ขอโอกาศที่สองทีค่ะ.. Sushmi",
        "อย่าเย็นชาสิคะ กระซิกๆ Sushmi",
        "ขอร้องนะคะ Sushmi",
        "น้าาาๆๆๆๆๆ Sushmi",
        "เราจะร้องไห้เอานะ กระซิกๆ Sushmi",
        "จะเอางี้ๆจริงหรอคะ Sushmi",
        "ฮือออออ Sushmi",
        "ขอโอกาศครั้งที่สองที่ค่ะ! Sushmi",
        "ขอร้องละค่าาา Sushmi",
        "โอเคค่ะ.. งั้นเริ่มใหม่ ! Sushmi"
    ]
};

answers_yes = {
    "english": "Yes",
    "french": "Oui",
    "Thailand": "เย่ คืนดีกันแล้วน้า"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin Sushmii🎀🎀?";
    } else if (language === "thai") {
        questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว Sushmii🎀🎀?";
    } else {
        questionHeading.textContent = "Will you be my valentine Sushmii🎀🎀?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Awww, à bientôt :3";
    } else if (language === "thai") {
        successMessage.textContent = "เย่ๆๆๆ คืนดีกันแล้วน้าาา🥹♥️";
    } else {
        successMessage.textContent = "Yaaayyyy, Lub youuu My gurll🥹♥️";
    }
}