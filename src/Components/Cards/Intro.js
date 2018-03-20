import Card from '../../Containers/Card';
import footer from './Footer';

const IntroCard = (name) => {
  Card('VATUSA Survey Application',
  `
    Welcome to the VATUSA Survey Application.  Thank you for taking the time to answer
    some questions to help better VATUSA.  You are about to take the survey: <b>${name}</b>.
  `, footer('first'));
};

export default IntroCard;
