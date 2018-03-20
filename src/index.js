import './sass/spinner.scss';
import './sass/logo.scss';

import alert from './Components/alert';
import api from './utils/api';
import genApiUrl from './utils/apiurl';
import queryString from './utils/querystring';

const survey = { };

const parseSurvey = (json) => {
  if (json.survey === undefined) {
    alert('danger', 'Failed to load Survey Data');
  }
  survey.info = json.survey;
  survey.items = json.items;

  console.dir(survey);
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
