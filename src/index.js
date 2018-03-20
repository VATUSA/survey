import './sass/spinner.scss';
import './sass/logo.scss';
import './jquery-ui';
import './sass/main.scss';

import alert from './Components/alert';
import api from './utils/api';
import genApiUrl from './utils/apiurl';
import queryString from './utils/querystring';

import Card from './Containers/Card';

import IntroCard from './Components/Cards/Intro';
import YesNoCard from './Components/Cards/YesNo';
import ScaleCard from './Components/Cards/Scale';
import FinalCard from './Components/Cards/Final';
import footer from './Components/Cards/Footer';

const survey = { };
let question = -1;
const responses = [];

const parseSurvey = (json) => {
  if (json.survey === undefined) {
    alert('danger', 'Failed to load Survey Data');
  }
  survey.info = json.survey;
  survey.items = json.items;
  let i;
  for (i = 0; i < json.items.length; i += 1) {
    responses[i] = null;
  }
  window.surveyName = survey.info.name;
  console.dir(survey.items);

  IntroCard(survey.info.name);
};

$(document).ready(() => {
  window.apiUrl = genApiUrl();
  window.surveyId = queryString('id');

  if (window.surveyId === null || window.surveyId.length < 5) {
    alert('danger', 'Invalid Survey ID');
    return;
  }
  api('get', `/v2/survey/${window.surveyId}`, {}, parseSurvey);
});

/* Events */
$(document).on('click', '.btnNext', () => {
  question += 1;
  if (survey.items.length < question) {
    FinalCard();
    return;
  }
  let type = '';
  let card = 'unknown type';
  if (question === 0) { type = 'first'; }
  if (survey.items[question].data.type === 'yesNo') {
    card = YesNoCard(survey.items[question].question, responses[question]);
  }
  if (survey.items[question].data.type === 'scale') {
    card = ScaleCard(survey.items[question].question, responses[question],
      survey.items[question].data.left, survey.items[question].data.right);
  }
  Card(window.surveyName, card, footer(type), true);
});

$(document).on('click', '.btnPrev', () => {
  question -= 1;
  if (question < 0) question = 0;
  let type = '';
  let card = '';
  if (question === 0) { type = 'first'; }
  if (survey.items[question].data.type === 'yesNo') {
    card = YesNoCard(survey.items[question].question, responses[question]);
  } else if (survey.items[question].data.type === 'scale') {
    card = ScaleCard(survey.items[question].question, responses[question],
      survey.items[question].data.left, survey.items[question].data.right);
  }
  Card(survey.info.name, card, footer(type), false);
  return 1;
});

$(document).on('click', '.btnResp', (e) => {
  $('.btnResp').removeClass(['btn-primary']).addClass('btn-outline-primary');
  $(e.currentTarget).removeClass('btn-outline-primary').addClass('btn-primary');
  responses[question] = $(e.currentTarget).html();
  console.dir(responses);
});
