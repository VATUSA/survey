import Card from '../../Containers/Card';
import footer from './Footer';
import button from '../button';

const YesNoCard = (question) => {
  Card(window.surveyName,
  `<p>${question}</p>
  ${button('btn-outline-primary btn-lg btn-block btnResp', 'Yes')}
  ${button('btn-outline-primary btn-lg btn-block btnResp', 'No')}
  `, footer());
};

export default YesNoCard;
