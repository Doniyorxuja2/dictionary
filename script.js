const keyBoard = document.querySelector(".keyboard");
const transcription = document.querySelector("#transcription");
const Audiomp3 = document.querySelector("#Audio");
const search = document.querySelector(".search");
const inputWrapper = document.querySelector(".input-wrapper");
const Soz = document.querySelector(".soz");
const main = document.querySelector(".main");

const eror = document.querySelector(".eror");
const erorWrapper = document.querySelector(".eror-wrapper");

const nounWrapper = document.querySelector(".noun-mein");
const verbWrapper = document.querySelector(".verb-mein");
const footerWrap = document.querySelector(".footer_Wrap");

const synonim = document.querySelector(".synonim");
let playAudio;
const getData = async (soz) => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${soz}`
  );
  const data = await res.json();
  console.log(data);
  if (res.status !== 200) {
    erorWrapper.classList.remove("hidden");
    main.classList.add("hidden");
    footerWrap.classList.add("hidden");
  } else {
    return data;
  }
};

// getData("hello").then((data) => console.log(data));

const jamlanma = (dictionary) => {
  Soz.value = "";
  keyBoard.textContent = `${dictionary[0].word}`;
  transcription.textContent = `${dictionary[0].phonetic}`;
  //
  // playAudio.pause();
  playAudio = new Audio(`${dictionary[0].phonetics[0].audio}`);
  Audiomp3.addEventListener("click", (e) => {
    playAudio.play();
  });

  //
  // noun
  if (nounWrapper) {
    nounWrapper.textContent = "";
  }
  dictionary[0].meanings[0].definitions.forEach((e) => {
    const divEl = document.createElement("div");
    divEl.style.display = "flex";
    divEl.style.justifyContent = "space-beatween";
    divEl.style.alignItems = "center";
    divEl.style.gap = "15px";
    divEl.style.paddingTop = "5px";
    divEl.style.paddingBottom = "5px";
    const spanEl = document.createElement("span");
    spanEl.style.height = "5px";
    spanEl.style.width = "5px";
    spanEl.style.background = "#8F19E8";
    spanEl.style.borderRadius = "50%";
    const pEl = document.createElement("p");
    pEl.textContent = `${e.definition}`;
    divEl.append(spanEl);
    divEl.append(pEl);
    nounWrapper.append(divEl);
  });
  if (synonim) {
    synonim.textContent = "";
  }
  dictionary[0].meanings[0].synonyms.forEach((e) => {
    const spanEl = document.createElement("span");
    spanEl.style.marginRight = "5px";
    spanEl.style.color = "#A445ED";
    spanEl.style.fontWeight = "700";
    spanEl.style.fontSize = "20px";
    spanEl.style.lineHeight = "24px";
    spanEl.textContent = `${e}`;
    synonim.append(spanEl);
  });
  if (verbWrapper) {
    verbWrapper.textContent = "";
  }

  dictionary[0].meanings[1].definitions.forEach((e) => {
    const divEl = document.createElement("div");
    divEl.style.display = "flex";
    divEl.style.justifyContent = "space-beatween";
    divEl.style.alignItems = "center";
    divEl.style.gap = "15px";
    divEl.style.paddingTop = "5px";
    divEl.style.paddingBottom = "5px";
    const spanEl = document.createElement("span");
    spanEl.style.height = "5px";
    spanEl.style.width = "5px";
    spanEl.style.background = "#8F19E8";
    spanEl.style.borderRadius = "50%";
    const pEl = document.createElement("p");
    pEl.textContent = `${e.definition}`;
    divEl.append(spanEl);
    divEl.append(pEl);
    verbWrapper.append(divEl);
  });

  //
};

const getName = async (soz) => {
  const data = await getData(soz);
  return data;
};
inputWrapper.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Soz.value == "" || Soz.value.trim() == "") {
    inputWrapper.style.border = "2px solid red";
    eror.classList.remove("hidden");
    main.classList.add("hidden");
    footerWrap.classList.add("hidden");
  } else {
    const dictionary = Soz.value.trim();

    erorWrapper.classList.add("hidden");
    eror.classList.add("hidden");
    main.classList.remove("hidden");
    footerWrap.classList.remove("hidden");
    inputWrapper.style.border = "none";
    getName(dictionary).then((data) => jamlanma(data));
  }
});
