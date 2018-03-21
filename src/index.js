import './sass/spinner.scss';
import './sass/logo.scss';
import './jquery-ui';
import './sass/main.scss';

import alert from './Components/alert';
import api from './utils/api';
import loading from './Components/loading';
import thankyou from './Components/thankyou';
import genApiUrl from './utils/apiurl';
import queryString from './utils/querystring';

import Card from './Containers/Card';

import IntroCard from './Components/Cards/Intro';
import YesNoCard from './Components/Cards/YesNo';
import ScaleCard from './Components/Cards/Scale';
import MultipleChoice from './Components/Cards/MultipleChoice';
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
    responses[i] = { id: json.items[i].id, response: 'Not provided' };
  }
  window.surveyName = survey.info.name;

  IntroCard(survey.info.name);
};

const thanks = () => {
  Card(null, thankyou, footer('return'));
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
  if (survey.items.length === question) {
    FinalCard();
    return;
  }
  let type = '';
  let card = 'unknown type';
  if (question === 0) { type = 'first'; }
  if (survey.items[question].data.type === 'yesNo') {
    card = YesNoCard(survey.items[question].question, responses[question].response);
  }
  if (survey.items[question].data.type === 'scale') {
    card = ScaleCard(survey.items[question].question, responses[question].response,
      survey.items[question].data.left, survey.items[question].data.right);
  }
  if (survey.items[question].data.type === 'multipleChoice') {
    card = MultipleChoice(survey.items[question].question,
      survey.items[question].data.choices, responses[question].response);
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
    card = YesNoCard(survey.items[question].question, responses[question].response);
  }
  if (survey.items[question].data.type === 'scale') {
    card = ScaleCard(survey.items[question].question, responses[question].response,
      survey.items[question].data.left, survey.items[question].data.right);
  }
  if (survey.items[question].data.type === 'multipleChoice') {
    card = MultipleChoice(survey.items[question].question,
      survey.items[question].data.choices, responses[question].response);
  }
  Card(survey.info.name, card, footer(type), false);
  return 1;
});

$(document).on('click', '.btnSubmit', () => {
  Card(null, loading, null, true);

  api('post', `/v2/survey/${window.surveyId}`, { responses: JSON.stringify(responses) }, thanks);
});

$(document).on('click', '.btnReturn', () => {
  window.location = 'https://www.vatusa.net';
});

$(document).on('click', '.btnResp', (e) => {
  $('.btnResp').removeClass(['btn-primary']).addClass('btn-outline-primary');
  $(e.currentTarget).removeClass('btn-outline-primary').addClass('btn-primary');
  responses[question] = { id: survey.items[question].id, response: $(e.currentTarget).html() };
});
