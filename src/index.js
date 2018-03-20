import './sass/spinner.scss';
import './sass/logo.scss';
import './jquery-ui';
import './sass/main.scss';

import alert from './Components/alert';
import api from './utils/api';
import genApiUrl from './utils/apiurl';
import queryString from './utils/querystring';

import IntroCard from './Components/Cards/Intro';
import YesNoCard from './Components/Cards/YesNo';
import FinalCard from './Components/Cards/Final';

const survey = { };
let question = -1;

const parseSurvey = (json) => {
  if (json.survey === undefined) {
    alert('danger', 'Failed to load Survey Data');
  }
  survey.info = json.survey;
  survey.items = json.items;

  window.surveyName = survey.info.name;

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
  if (survey.items[question].data.type === 'yesNo') {
    YesNoCard(survey.items[question].question);
    return;
  }
  // test.
  return 1;
});
