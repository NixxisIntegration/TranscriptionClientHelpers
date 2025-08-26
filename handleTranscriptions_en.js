var listSentiments = [
  { name: "positive", color: "00CC83" },
  { name: "neutral", color: "4D626A" },
  { name: "negative", color: "FF4747" }
];

var listEmotions = [
  { name: "adoration", color: "64B5F6" },
  { name: "amusement", color: "4DB6AC" },
  { name: "anger", color: "C62828" },
  { name: "awe", color: "29B6F6" },
  { name: "confusion", color: "FF9800" },
  { name: "contempt", color: "EF6C00" },
  { name: "contentment", color: "4CAF50" },
  { name: "desire", color: "E91E63" },
  { name: "disappointment", color: "7B1FA2" },
  { name: "disgust", color: "558B2F" },
  { name: "distress", color: "880E4F" },
  { name: "ecstatic", color: "03A9F4" },
  { name: "elation", color: "009688" },
  { name: "embarrassment", color: "C2185B" },
  { name: "fear", color: "B71C1C" },
  { name: "interest", color: "3F51B5" },
  { name: "pain", color: "D32F2F" },
  { name: "realization", color: "1E88E5" },
  { name: "relief", color: "8BC34A" },
  { name: "sadness", color: "1976D2" },
  { name: "negative surprise", color: "D32F2F" },
  { name: "positive surprise", color: "26A69A" },
  { name: "sympathy", color: "9C27B0" },
  { name: "triumph", color: "00796B" },
  { name: "neutral", color: "9E9E9E" },
];

var listLanguages = [
  { name: "English", flag: "🇺🇸", code: "en_US" },
  { name: "French", flag: "🇫🇷", code: "fr_FR" },
];

var lang_fr_FR = {
  all: "tout",
  darkMode: "Mode sombre",
  lightMode: "Mode lumière",
  displayMode: "Mode d'affichage",
  language: "Langue",
  settings: "Paramètres",
  callSummary: "Résumé de l'appel",
  transcription: "Transcription",
  sentiments: "Sentiments",
  sentiment: "Sentiment",
  emotions: "Émotions",
  emotion: "Émotion",
  positive: "Positif",
  neutral: "Neutre",
  negative: "Négatif",
  adoration: "adoration",
  amusement: "amusement",
  anger: "colère",
  awe: "émerveillement",
  confusion: "confusion",
  contempt: "mépris",
  contentment: "contentement",
  desire: "désir",
  disappointment: "déception",
  disgust: "dégoût",
  distress: "détresse",
  ecstatic: "extatique",
  elation: "exaltation",
  embarrassment: "embarras",
  fear: "peur",
  interest: "intérêt",
  pain: "douleur",
  realization: "prise de conscience",
  relief: "soulagement",
  sadness: "tristesse",
  negativesurprise: "surprise négative",
  positivesurprise: "surprise positive",
  sympathy: "sympathie",
  triumph: "triomphe",
  speaker: "Interlocuteur"
};

var lang_en_US = {
  all: "all",
  darkMode: "Dark Mode",
  lightMode: "Light Mode",
  displayMode: "Display Mode",
  language: "Language",
  settings: "Settings",
  callSummary: "Call Summary",
  transcription: "Transcription",
  sentiments: "Sentiments",
  sentiment: "Sentiment",
  emotions: "Emotions",
  emotion: "Emotion",
  positive: "Positive",
  neutral: "Neutral",
  negative: "Negative",
  adoration: "adoration",
  amusement: "amusement",
  anger: "anger",
  awe: "awe",
  confusion: "confusion",
  contempt: "contempt",
  contentment: "contentment",
  desire: "desire",
  disappointment: "disappointment",
  disgust: "disgust",
  distress: "distress",
  ecstatic: "ecstatic",
  elation: "elation",
  embarrassment: "embarrassment",
  fear: "fear",
  interest: "interest",
  pain: "pain",
  realization: "realization",
  relief: "relief",
  sadness: "sadness",
  negativesurprise: "negative surprise",
  positivesurprise: "positive surprise",
  sympathy: "sympathy",
  triumph: "triumph",
  speaker: "Speaker"
};

var obj = JSON.parse(document.body.innerText);
var listTranscription = obj.paragraphs;

document.body.innerHTML = "";

function getDataName(text) {
  var listWord = text.split('_');
  var dataName = '';
  listWord.forEach((word, i) => dataName += (i == 0 ? word[0].toLowerCase() : word[0].toUpperCase()) + word.substring(1));
  return dataName;
}

var divBody = document.createElement("div");
divBody.className = "body-container";
document.body.appendChild(divBody);

var bgBody = document.createElement("div");
bgBody.className = "background-image";
document.body.appendChild(bgBody);

// Left
var leftContainer = document.createElement("div");
leftContainer.className = "left-container";
divBody.appendChild(leftContainer);

// Center Container
var centerContainer = document.createElement("div");
centerContainer.className = "center-container";
divBody.appendChild(centerContainer);

// Right Container
var rightContainer = document.createElement("div");
rightContainer.className = "right-container";
divBody.appendChild(rightContainer);

// Sentiment
var sentimentCard = document.createElement("div");
sentimentCard.className = "card-container";
sentimentCard.id = "sentimentCardId";
leftContainer.appendChild(sentimentCard);

var sentimentHeader = document.createElement("div");
sentimentHeader.className = "card-header";
sentimentCard.appendChild(sentimentHeader);

var sentimentsTitle = document.createElement("h1");
sentimentsTitle.innerText = "Sentiments";
sentimentsTitle.dataset.name = "lang-sentiments";
sentimentsTitle.className = "container-title flex-1 mt-4";
sentimentHeader.appendChild(sentimentsTitle);

var btnToggleSentiment = document.createElement("button");
btnToggleSentiment.className = "collapsible active mt-4 ml-10";
btnToggleSentiment.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1412 0.1412 0.1412);fill-opacity:1;"/>
</svg>`
sentimentHeader.appendChild(btnToggleSentiment);

var sentimentsCardBody = document.createElement("div");
sentimentsCardBody.className = "card-body content active";
sentimentCard.appendChild(sentimentsCardBody);

var sentimentWrapProgess = document.createElement("div");
sentimentWrapProgess.className = "progress-wrapper"
sentimentsCardBody.appendChild(sentimentWrapProgess);

var sentimentsBody = document.createElement("div");
sentimentsBody.className = "bg-content sentiment-list";
sentimentsCardBody.appendChild(sentimentsBody);

function calPercentSentiment(name) {
  let objData = JSON.parse(JSON.stringify(obj));
  var listData = [];
  for (var i = 0; i < objData.paragraphs.length; i++) {
    listData = [...listData, ...obj.paragraphs[i].utterances]
  }

  var listCurrentSentiment = listData.filter(item => { var checkSentiment = item.sentiment ?? 'neutral'; return checkSentiment === name });
  var percent = listCurrentSentiment.length * 100 / listData.length;
  return percent.toFixed(2);
}

for (var i = 0; i < listSentiments.length; i++) {
  var percent = calPercentSentiment(listSentiments[i].name);
  if (percent != 0) {
    var sentimentProgessItem = document.createElement("div");
    sentimentProgessItem.className = "progress-item";
    sentimentProgessItem.dataset.sentiment = `sentiment-${listSentiments[i].name}`;
    sentimentProgessItem.style.backgroundColor = `#${listSentiments[i].color}`;
    sentimentProgessItem.style.flex = percent;
    sentimentWrapProgess.appendChild(sentimentProgessItem);

    var sentimentProgessItemPercent = document.createElement("span");
    sentimentProgessItemPercent.innerText = `${percent}%`;
    sentimentProgessItem.appendChild(sentimentProgessItemPercent);
  }

  var sentimentWrap = document.createElement("div");
  sentimentWrap.className = 'sentiment-wrap';
  sentimentsBody.appendChild(sentimentWrap);
  var sentiment = document.createElement("div");
  sentiment.className = `tag`;
  sentiment.dataset.sentiment = `sentiment-${listSentiments[i].name}`;
  sentiment.style.backgroundColor = `#${listSentiments[i].color}`;

  sentimentWrap.appendChild(sentiment);

  var sentimentText = document.createElement("span");
  sentimentText.dataset.name = `lang-${getDataName(listSentiments[i].name)}`;
  sentimentText.innerText = listSentiments[i].name;
  sentimentWrap.appendChild(sentimentText);
}

// Emotions
function filterEmotion() {
  let objData = JSON.parse(JSON.stringify(obj));
  var listData = [];
  var tempEmotions = []
  for (var i = 0; i < objData.paragraphs.length; i++) {
    listData = [...listData, ...obj.paragraphs[i].utterances]
  }

  for (var j = 0; j < listData.length; j++) {
    var checkEmotion = listData[j].emotion ? listData[j].emotion.toLowerCase() : 'neutral';
    // Normalize for matching: remove spaces and underscores, lowercase
    var normCheckEmotion = checkEmotion.replace(/[_ ]/g, '');
    var isExisted = tempEmotions.find(e => e.name.replace(/[_ ]/g, '').toLowerCase() === normCheckEmotion);
    if (isExisted) {
      var getIndex = tempEmotions.indexOf(isExisted);
      tempEmotions[getIndex].count = tempEmotions[getIndex].count + 1;
    } else {
      var temp = listEmotions.find(e => e.name.replace(/[_ ]/g, '').toLowerCase() === normCheckEmotion);
      if (temp) {
        tempEmotions.push({ ...temp, count: 1 });
      } else {
        // fallback for unknown emotions
        tempEmotions.push({ name: checkEmotion, color: '9E9E9E', count: 1 });
      }
    }
  }
  return tempEmotions;
};

var emotions = filterEmotion();

var emotionCard = document.createElement("div");
emotionCard.className = "card-container";
emotionCard.id = "emotionCardId";
leftContainer.appendChild(emotionCard);

var emotionHeader = document.createElement("div");
emotionHeader.className = "card-header";
emotionCard.appendChild(emotionHeader);

var divEmotionTitle = document.createElement("h1");
divEmotionTitle.innerText = "Emotions";
divEmotionTitle.dataset.name = "lang-emotions";
divEmotionTitle.className = "container-title flex-1 mt-4";
emotionHeader.appendChild(divEmotionTitle);

var btnToggleEmotion = document.createElement("button");
btnToggleEmotion.className = "collapsible active mt-4 ml-10";
btnToggleEmotion.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1412 0.1412 0.1412);fill-opacity:1;"/>
</svg>`
emotionHeader.appendChild(btnToggleEmotion);

var emotionCardBody = document.createElement("div");
emotionCardBody.className = "card-body content active";
emotionCard.appendChild(emotionCardBody);

var emotionsBody = document.createElement("div");
emotionsBody.className = "emotions-body";
emotionCardBody.appendChild(emotionsBody);

var Emotions = (props) => ({
  name: props.name,
  color: props.color,
});

var chartWrappper = document.createElement("canvas");
chartWrappper.id = "chartCanvas";
emotionCardBody.appendChild(chartWrappper);

var emotionWrapper = document.createElement("div");
emotionWrapper.className = 'bg-content';
emotionCardBody.appendChild(emotionWrapper);

for (var i = 0; i < emotions.length; i++) {
  var emotion = document.createElement("div");
  emotion.className = `emotion-tag`;
  emotionWrapper.appendChild(emotion);

  var emotionColor = document.createElement("div");
  emotionColor.className = "tag";
  emotionColor.style.backgroundColor = `#${emotions[i].color}`;
  emotion.appendChild(emotionColor);

  var dataName = getDataName(emotions[i].name.split(' ').join(''));
  var emotionName = document.createElement("span");
  emotionName.dataset.name = `lang-${dataName}`;
  emotionName.innerText = emotions[i].name.split("_").join(" ");
  emotion.appendChild(emotionName);
}

// Settings
var settingCard = document.createElement("div");
settingCard.className = "card-container";
settingCard.id = "settingCardId";
leftContainer.appendChild(settingCard);

var settingHeader = document.createElement("div");
settingHeader.className = "card-header";
settingCard.appendChild(settingHeader);

var settingTitle = document.createElement("h1");
settingTitle.innerText = "Settings";
settingTitle.dataset.name = "lang-settings";
settingTitle.className = "container-title flex-1 mt-4";
settingHeader.appendChild(settingTitle);

var btnToggleSetting = document.createElement("button");
btnToggleSetting.className = "collapsible active mt-4 ml-10";
btnToggleSetting.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1412 0.1412 0.1412);fill-opacity:1;"/>
</svg>`
settingHeader.appendChild(btnToggleSetting);

var settingCardBody = document.createElement("div");
settingCardBody.className = "card-body content active";
settingCard.appendChild(settingCardBody);

var languageContainer = document.createElement("div");
languageContainer.className = "language-container";
settingCardBody.appendChild(languageContainer);

var languageLabel = document.createElement("h3");
languageLabel.className = "form-label"
languageLabel.dataset.name = "lang-language";
languageLabel.innerText = "Language";
languageContainer.appendChild(languageLabel);

var languageWrapper = document.createElement("div");
languageWrapper.className = "language-wrapper";
languageContainer.appendChild(languageWrapper);

function changeLanguage() {
  var lang = document.getElementById('languageSelect').value;
  var langElms = document.querySelectorAll('*[data-name^="lang-"]');
  for (var i = 0; i < langElms.length; i++) {
    var langVar = langElms[i].dataset.name.replace('lang-', '');
    langElms[i].innerText = window["lang_" + lang][langVar];
  }
}

var languageSelect = document.createElement("select");
languageSelect.id = "languageSelect";
languageSelect.name = "language";
languageSelect.onchange = changeLanguage;
languageWrapper.appendChild(languageSelect);

for (var i = 0; i < listLanguages.length; i++) {
  var select = document.createElement("option");
  select.value = listLanguages[i].code;
  select.text = listLanguages[i].name;
  languageSelect.append(select);
}

var displayContainer = document.createElement("div");
displayContainer.id = "toggleId";
settingCardBody.appendChild(displayContainer);

var displayLabel = document.createElement("h3");
displayLabel.className = "form-label"
displayLabel.dataset.name = "lang-displayMode";
displayLabel.innerText = "Display mode";
displayContainer.appendChild(displayLabel);

var displayMode = document.createElement("label");
displayMode.className = "switch";
displayContainer.appendChild(displayMode);
var displayInput = document.createElement("input");
displayInput.id = "switchId";
displayInput.type = "checkbox";
displayInput.onclick = switchChange;
displayMode.appendChild(displayInput);
var displaySpan = document.createElement("span");
displaySpan.className = "slider round";
displayMode.appendChild(displaySpan);

var lightMode = document.createElement("div");
lightMode.className = "mode light";
var lightModeText = document.createElement("div");
lightMode.appendChild(lightModeText);
lightModeText.innerText = 'Light Mode';
lightModeText.dataset.name = 'lang-lightMode';
var lightModeIcon = document.createElement("div");
lightModeIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 5.5C4.25 3.567 5.817 2 7.75 2C9.683 2 11.25 3.567 11.25 5.5C11.25 6.47709 10.8503 7.35991 10.2042 7.99541C10.0112 8.18524 9.84122 8.43189 9.75954 8.73139L9.41356 10H6.08644L5.74046 8.73139C5.65878 8.43189 5.48883 8.18524 5.29584 7.99541C4.64973 7.35991 4.25 6.47709 4.25 5.5ZM6.35917 11H9.14083L8.96859 11.6316C8.90926 11.8491 8.71168 12 8.4862 12H7.0138C6.78832 12 6.59074 11.8491 6.53141 11.6316L6.35917 11ZM7.75 1C5.26472 1 3.25 3.01472 3.25 5.5C3.25 6.75601 3.76523 7.89258 4.5946 8.70834C4.69136 8.80352 4.75044 8.9019 4.77569 8.9945L5.56665 11.8947C5.74463 12.5473 6.33737 13 7.0138 13H8.4862C9.16263 13 9.75537 12.5473 9.93335 11.8947L10.7243 8.9945C10.7496 8.9019 10.8086 8.80352 10.9054 8.70834C11.7348 7.89258 12.25 6.75601 12.25 5.5C12.25 3.01472 10.2353 1 7.75 1Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1412 0.1412 0.1412);fill-opacity:1;"/>
</svg>`
displayMode.appendChild(lightMode);
lightMode.appendChild(lightModeIcon);


var darkMode = document.createElement("div");
darkMode.className = "mode dark";
var darkModeText = document.createElement("div");
darkMode.appendChild(darkModeText);
darkModeText.innerText = 'Dark Mode';
darkModeText.dataset.name = 'lang-darkMode';
var darkModeIcon = document.createElement("div");
darkModeIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.85032 3.0153C10.4276 3.21621 12.4563 5.37119 12.4563 8C12.4563 10.7614 10.2177 13 7.45629 13C5.70158 13 4.15722 12.0961 3.26465 10.7271C4.66791 10.3479 6.58077 9.42526 7.42438 7.17555C7.97709 5.70162 8.00857 4.23763 7.85032 3.0153ZM13.4563 8C13.4563 4.68629 10.77 2 7.45629 2C7.38577 2 7.31552 2.00122 7.24555 2.00364C7.09984 2.00867 6.96358 2.07706 6.87247 2.19089C6.78136 2.30471 6.74447 2.45263 6.77147 2.59591C7.00024 3.81021 7.05064 5.32413 6.48805 6.82444C5.68804 8.95787 3.68609 9.66359 2.41062 9.89533C2.25698 9.92325 2.1252 10.0213 2.05438 10.1605C1.98356 10.2997 1.98182 10.4639 2.04969 10.6046C3.01873 12.6128 5.07502 14 7.45629 14C10.77 14 13.4563 11.3137 13.4563 8Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1412 0.1412 0.1412);fill-opacity:1;"/>
</svg>`
displayMode.appendChild(darkMode);
darkMode.appendChild(darkModeIcon);

// Transcription
const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}


var transcriptionCard = document.createElement("div");
transcriptionCard.className = "card-container";
transcriptionCard.id = "transcriptionId";
centerContainer.appendChild(transcriptionCard);

var divHeader = document.createElement("div");
divHeader.className = "card-header transcription-header";
transcriptionCard.appendChild(divHeader);

var title = document.createElement("h1");
title.innerText = "Transcription";
title.dataset.name = "lang-transcription"
title.className = "container-title flex-1 mt-4";
divHeader.appendChild(title);

var bgFilter = document.createElement("div");
bgFilter.className = "filter-wrapper";
divHeader.appendChild(bgFilter);

var listFilter = [{ name: 'all', color: '111815' }, ...listSentiments];

for (var i = 0; i < listFilter.length; i++) {
  var filterContainer = document.createElement("div");
  filterContainer.className = "filter-container";
  bgFilter.appendChild(filterContainer);

  var filterInput = document.createElement("input");
  filterInput.id = `filter-${listFilter[i].name}`;
  filterInput.type = "radio";
  filterInput.name = "filter_mode";
  filterInput.value = listFilter[i].name;
  filterInput.onclick = filterChange;
  filterContainer.appendChild(filterInput);

  var filterMode = document.createElement("label");
  filterMode.dataset.name = `lang-${getDataName(listFilter[i].name)}`;
  filterMode.className = "filter-item";
  filterMode.dataset.sentiment = `sentiment-${listFilter[i].name}-text`;
  filterMode.for = listFilter[i].name;
  filterMode.innerText = listFilter[i].name;
  filterContainer.appendChild(filterMode);
  filterMode.style.color = `#${listFilter[i].color}`

  function renderTranscription() {
    var details = document.createElement("div");
    details.className = "card-body sentiment-chat pt-0";
    transcriptionCard.appendChild(details);

    for (var i = 0; i < listTranscription.length; i++) {
      for (var j = 0; j < listTranscription[i].utterances.length; j++) {
        var paragraph = document.createElement("div");
        paragraph.className = "speaker speaker-" + listTranscription[i].speaker;
        details.appendChild(paragraph);

        var avatar = document.createElement("div");
        avatar.className = "avatar";
        var wrapperSpeaker = document.createElement("div");
        wrapperSpeaker.className = "name-wrapper"
        var nameWrapper = document.createElement("div");
        nameWrapper.className = "wrapper";
        wrapperSpeaker.appendChild(nameWrapper);
        var nameSpeaker = document.createElement("span");
        nameSpeaker.className = "name";
        var nameSpan = document.createElement("span");
        nameSpan.className = "name";
        var tagSpeaker = document.createElement("div");
        tagSpeaker.className = "tag-speaker";
        var tooltipSentimentWrapper = document.createElement("div");
        tooltipSentimentWrapper.className = "tooltip-sentiment tooltip";

        var tooltipSentiment = document.createElement("span");
        tooltipSentiment.className = "tooltip-text"
        tooltipSentiment.innerText = "Sentiment"
        tooltipSentiment.dataset.name = "lang-sentiment"

        tagSpeaker.appendChild(tooltipSentimentWrapper);


        if (listTranscription[i].speaker == "0") {
          avatar.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.8147 11.9499L5.28344 13.2051C5.10705 13.2345 4.95979 13.3558 4.89723 13.5234L2.29933 20.4808C2.05066 21.1202 2.72008 21.7302 3.33375 21.4234L14.0458 16.0674C14.0157 15.8827 14 15.6932 14 15.5C14 13.567 15.567 12 17.5 12C18.4928 12 19.389 12.4133 20.026 13.0773L21.3337 12.4234C21.8865 12.147 21.8865 11.3582 21.3337 11.0818L3.33375 2.08177C2.72008 1.77494 2.05066 2.38498 2.29933 3.02443L4.89723 9.98182C4.95979 10.1493 5.10705 10.2707 5.28344 10.3001L12.8147 11.5553C12.9236 11.5735 12.9972 11.6765 12.9791 11.7855C12.965 11.8698 12.899 11.9358 12.8147 11.9499ZM20 15.5C20 16.8807 18.8807 18 17.5 18C16.1193 18 15 16.8807 15 15.5C15 14.1193 16.1193 13 17.5 13C18.8807 13 20 14.1193 20 15.5ZM22 20.875C22 22.4315 20.7143 24 17.5 24C14.2857 24 13 22.4374 13 20.875V20.772C13 19.7929 13.7937 19 14.7727 19H20.2273C21.2063 19 22 19.793 22 20.772V20.875Z" fill="#085673" style="fill:#085673;fill:color(display-p3 0.0296 0.3382 0.4504);fill-opacity:1;"/>
  </svg>`;
        } else {
          nameSpan.innerText = ` ${listTranscription[i].speaker}`;
          avatar.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 14.0503V14.0002H4.25278C3.01076 14.0002 2.00391 15.007 2.00391 16.2491V17.169C2.00391 17.7411 2.18231 18.2989 2.51427 18.7648C4.05643 20.9292 6.5794 22.0013 10.0004 22.0013C10.3578 22.0013 10.7055 21.9896 11.0433 21.9662C11.0149 21.8152 11 21.6595 11 21.5002V16.5003C11 15.2908 11.8589 14.2819 13 14.0503ZM10.0004 2.00488C12.7618 2.00488 15.0004 4.24346 15.0004 7.00488C15.0004 9.76631 12.7618 12.0049 10.0004 12.0049C7.23894 12.0049 5.00036 9.76631 5.00036 7.00488C5.00036 4.24346 7.23894 2.00488 10.0004 2.00488ZM14 15.0003H13.5C12.6716 15.0003 12 15.6719 12 16.5003V21.5002C12 22.3287 12.6716 23.0002 13.5 23.0002H21.5C22.3284 23.0002 23 22.3287 23 21.5002V16.5003C23 15.6719 22.3284 15.0003 21.5 15.0003H21V13.7502C21 12.7837 20.2165 12.0002 19.25 12.0002H15.75C14.7835 12.0002 14 12.7837 14 13.7502V15.0003ZM15.5 13.7502C15.5 13.6122 15.6119 13.5002 15.75 13.5002H19.25C19.3881 13.5002 19.5 13.6122 19.5 13.7502V15.0003H15.5V13.7502Z" fill="#4D626A" style="fill:#4D626A;fill:color(display-p3 0.3020 0.3854 0.4157);fill-opacity:1;"/>
  </svg>`;
        }
        nameSpeaker.innerText = `Speaker`;
        nameSpeaker.dataset.name = 'lang-speaker';

        nameWrapper.appendChild(nameSpeaker);
        nameWrapper.appendChild(nameSpan);

        var sentimentName = document.createElement("div");
        var emotionName = document.createElement("div");
        var emotionNameText = document.createElement("span");
        var layerBgEmotionName = document.createElement("div");
        var tooltipText = document.createElement("span");
        emotionName.className = "emotion-name tooltip";
        tooltipText.className = "tooltip-text"
        tooltipText.innerText = "Emotion"
        tooltipText.dataset.name = "lang-emotion"
        emotionName.appendChild(layerBgEmotionName);
        emotionName.appendChild(emotionNameText);
        emotionName.appendChild(tooltipText);
        layerBgEmotionName.className = "layer-bg"
        tooltipSentimentWrapper.appendChild(tooltipSentiment);
        tooltipSentimentWrapper.appendChild(sentimentName);
        tagSpeaker.appendChild(emotionName);

        wrapperSpeaker.appendChild(tagSpeaker);

        paragraph.appendChild(wrapperSpeaker);
        paragraph.appendChild(avatar);

        var utterance = document.createElement("span");

        var checkSentiment = listTranscription[i].utterances[j].sentiment ?? 'neutral';
        sentimentName.innerText = checkSentiment;
        sentimentName.dataset.name = `lang-${checkSentiment}`;
        // if (document.getElementById("switchId").checked) {

        // }
        var temp = listSentiments.find(
          (e) => e.name === checkSentiment
        );
        if (temp) {
          tagSpeaker.style.backgroundColor = `#${temp.color}`;
          tagSpeaker.dataset.sentiment = `sentiment-${temp.name}`
        }


        var checkEmotion = listTranscription[i].utterances[j].emotion ? listTranscription[i].utterances[j].emotion.toLowerCase() : 'neutral';
        emotionNameText.innerText = checkEmotion.replace(/_/g, ' ');
        emotionNameText.dataset.name = `lang-${getDataName(checkEmotion.replace(/[_ ]/g, ''))}`;
        // Normalize for matching: remove spaces and underscores, lowercase
        var normCheckEmotion = checkEmotion.replace(/[_ ]/g, '');
        var temp = listEmotions.find(
          (e) => e.name.replace(/[_ ]/g, '').toLowerCase() === normCheckEmotion
        );
        if (temp) {
          emotionName.style.color = `#${temp.color}`;
          var color = hex2rgb(temp.color)
          emotionNameText.style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.1)`;
        }


        utterance.innerText = listTranscription[i].utterances[j].text ?? 'neutral';
        paragraph.appendChild(utterance);
      }
    }
  }
}

function filterChange() {
  var data = this.value;
  let objData = JSON.parse(JSON.stringify(obj));
  if (data !== 'all') {
    listTranscription = [];
    for (var i = 0; i < objData.paragraphs.length; i++) {
      var listData = [];
      if (objData.paragraphs[i].utterances.length) {
        listData = objData.paragraphs[i].utterances.filter(item => { var checkSentiment = item.sentiment ?? 'neutral'; return checkSentiment === data });
        var paragraph = objData.paragraphs[i];
        paragraph.utterances = listData;
        listTranscription.push(paragraph);
      }
    }
  } else {
    listTranscription = objData.paragraphs;
  }
  var element = document.getElementsByClassName('sentiment-chat');
  if (element) {
    element[0].parentNode.removeChild(element[0]);
  }
  renderTranscription();
  changeLanguage();
};

// Call Summary
if (obj.summary) {
  var summaryCard = document.createElement("div");
  summaryCard.className = "card-container summary-container";
  summaryCard.id = "summaryId";
  rightContainer.appendChild(summaryCard);

  var summaryElm = document.getElementById("summaryId");

  var summaryContent = `<div class="card-header">`;
  summaryContent += `<h1 class="container-title flex-1" data-name="lang-callSummary">Call Summary</h1>`;
  summaryContent += `<button class="collapsible active"></button>`;
  summaryContent += `</div>`;
  summaryContent += `<div class="card-body content active"><div class="bg-content">${obj.summary}</div>`;
  summaryContent += `</div>`;

  summaryElm.innerHTML = summaryContent;
}

function switchChange() {
  var sentiment = this.value;
  var neutralElms = document.querySelectorAll('*[data-sentiment="sentiment-neutral"]');
  var neutralTextElm = document.querySelectorAll('*[data-sentiment="sentiment-neutral-text"]');
  var allTextElm = document.querySelectorAll('*[data-sentiment="sentiment-all-text"]');

  if (document.getElementById("switchId").checked) {
    document.body.classList.add("dark-mode");
    drawChart(true)
    listSentiments = [
      { name: "positive", color: "00CC83" },
      { name: "neutral", color: "D6DEE1" },
      { name: "negative", color: "FF4747" }
    ];
    for (var i = 0; i < neutralElms.length; i++) {
      neutralElms[i].style.backgroundColor = '#D6DEE1';
    }
    for (var i = 0; i < neutralTextElm.length; i++) {
      neutralTextElm[i].style.color = '#D6DEE1';
    }
    for (var i = 0; i < allTextElm.length; i++) {
      allTextElm[i].style.color = '#FFFFFF';
    }
  } else {
    document.body.classList.remove("dark-mode");
    listSentiments = [
      { name: "positive", color: "00CC83" },
      { name: "neutral", color: "4D626A" },
      { name: "negative", color: "FF4747" }
    ];
    drawChart(false);
    for (var i = 0; i < neutralElms.length; i++) {
      neutralElms[i].style.backgroundColor = '#4D626A';
    }
    for (var i = 0; i < neutralTextElm.length; i++) {
      neutralTextElm[i].style.color = '#4D626A';
    }
    for (var i = 0; i < allTextElm.length; i++) {
      allTextElm[i].style.color = '#111815';
    }
  }
};

var coll = document.getElementsByClassName("collapsible");
var i;

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.parentNode.nextElementSibling;
    if (content.classList.contains("active")) {
      content.style.maxHeight = null;
      content.classList.remove("active");
    } else {
      content.classList.add("active");
      content.style.maxHeight = content.scrollHeight + 16 + "px";
    }
  });
}

// Draw chart

const chartCanvas = document.getElementById("chartCanvas");
chartCanvas.width = 400;
chartCanvas.height = 340;

const ctx = chartCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
  ctx.restore();
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, fillColor, strokeColor) {
  ctx.save();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

class PieChart {
  constructor(options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
    this.titleOptions = options.titleOptions;
    this.totalValue = Object.values(this.options.data).reduce((a, b) => a + b, 0);
    this.radius = Math.min(this.canvas.width / 2, this.canvas.height / 2) - options.padding;
  }

  drawSlices() {
    let colorIndex = 0;
    let startAngle = -Math.PI / 2;

    for (let categ in this.options.data) {
      const val = this.options.data[categ];
      const sliceAngle = (2 * Math.PI * val) / this.totalValue;

      drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.radius,
        startAngle,
        startAngle + sliceAngle,
        this.colors[colorIndex % this.colors.length],
        this.options.darkMode ? "rgba(39, 51, 53, 1)" : "rgba(222, 239, 248, 1)",
      );

      startAngle += sliceAngle;
      colorIndex++;
    }

    if (this.options.doughnutHoleSize) {
      drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.options.doughnutHoleSize * this.radius,
        0,
        2 * Math.PI,
        this.options.darkMode ? "rgba(39, 51, 53, 1)" : "rgba(222, 239, 248, 1)",
        this.options.darkMode ? "rgba(39, 51, 53, 1)" : "rgba(222, 239, 248, 1)",
      );

      drawArc(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.options.doughnutHoleSize * this.radius,
        0,
        2 * Math.PI,
        this.options.darkMode ? "rgba(39, 51, 53, 1)" : "rgba(222, 239, 248, 1)"
      );
    }
  }

  drawLabels(mouseX, mouseY) {
    let colorIndex = 0;
    let startAngle = -Math.PI / 2;
    for (let categ in this.options.data) {
      const val = this.options.data[categ];
      const sliceAngle = (2 * Math.PI * val) / this.totalValue;
      let labelX =
        this.canvas.width / 2 +
        (this.radius / 2) * Math.cos(startAngle + sliceAngle / 2);
      let labelY =
        this.canvas.height / 2 +
        (this.radius / 2) * Math.sin(startAngle + sliceAngle / 2);

      if (this.options.doughnutHoleSize) {
        const offset = (this.radius * this.options.doughnutHoleSize) / 2;
        labelX =
          this.canvas.width / 2 +
          (offset + this.radius / 2) * Math.cos(startAngle + sliceAngle / 2) - 10;
        labelY =
          this.canvas.height / 2 +
          (offset + this.radius / 2) * Math.sin(startAngle + sliceAngle / 2) + 6;
      }

      const labelText = Math.round((100 * val) / this.totalValue);
      this.ctx.fillStyle = "#F2F2F2";
      this.ctx.font = "14px Inter";
      this.ctx.fillText(labelText + "%", labelX, labelY);
      startAngle += sliceAngle;
    }
  }

  draw() {
    this.drawSlices();
    this.drawLabels();
  }
}

function drawChart(isDarkMode) {
  const dataChart = Object.assign(...emotions.map((e) => ({ [e.name]: e.count })));
  const dataChartColor = emotions.map(e => `#${e.color}`);

  const myPiechart = new PieChart({
    canvas: chartCanvas,
    padding: 20,
    data: dataChart,
    colors: dataChartColor,
    doughnutHoleSize: 0.75,
    darkMode: isDarkMode,
  });
  myPiechart.draw();

  // chartCanvas.addEventListener("mousemove", (e) => {
  //   handleMouseMove(e);
  // });

  // function handleMouseMove(e) {
  //   mouseX = parseInt(e.clientX - e.offsetX);
  //   mouseY = parseInt(e.clientY - e.offsetY);
  //   var hit = false;
  //   myPiechart.drawLabels(mouseX, mouseY);
  // }
}

function init() {
  /* Init mode */
  document.getElementById("filter-all").checked = true;
  renderTranscription();
  filterEmotion();
  drawChart(false);
  var element = document.getElementsByTagName('body')[0];
  var style = window.getComputedStyle(element);
  setTimeout(() => {
    if (style.backgroundColor === "rgba(0, 0, 0, 0)" || style.backgroundColor === "rgb(0, 0, 0)") {
      document.getElementById("switchId").checked = true;
      switchChange();
    }
  }, 1000)
}

init();