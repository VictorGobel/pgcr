import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function Question6() {
  const history = useHistory();

  const goToNextPage = () => {
    history.replace("/pgcr/question7");
  }

  const goToErrorPage = () => {
    history.replace("/pgcr/donald-trump");
  }

  return (
    <QuestionContainer>
      <Title>Si tu étais président des Etats-Unis, qu'est ce que tu tweeterais ?</Title>
      <AnswerContainer>
        <Answer onClick={goToErrorPage}>The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.</Answer>
        <Answer onClick={goToErrorPage}>Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault.</Answer>
        <Answer onClick={goToNextPage}>Yes We Can !</Answer>
        <Answer onClick={goToErrorPage}>Why would Kim Jong-un insult me by calling me "old," when I would NEVER call him "short and fat?" Oh well, I try so hard to be his friend - and maybe someday that will happen!</Answer>
      </AnswerContainer>
    </QuestionContainer>
  );
}

const colorRed1 = '#ffb8b8';
const colorRed2 = '#ff7f7f';

const colorBlue1 = '#b8caff';
const colorBlue2 = '#6c91ff';

const colorYellow1 = '#f9f7bd';
const colorYellow2 = '#fffa64';

const colorGreen1 = '#c9ffb8';
const colorGreen2 = '#83ff5b';


const Answer = styled.div`
  position: relative;
  font-size: 24px;
  text-shadow: 5px 5px black;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  color: ${colorGreen1};
  text-decoration: none;

  &:hover {
    color: ${colorGreen2};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colorGreen2};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const AnswerContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
font-size: 30px;
text-align: center;
text-shadow: 5px 5px black;
/* animation: float 4s ease-in-out infinite; */
/* animation: scale 4s ease-in-out infinite; */
/* animation: rotate 4s linear infinite; */
animation: shadow 2.5s ease-in-out infinite;

@keyframes shadow {
	0% {
		text-shadow: 0px 0px black, 0px 0px black, 0px 0px black, 0px 0px black, 0px 0px black, 0px 0px black;
	}
	50% {
		text-shadow: 0px 60px 7px black, 0px -60px 7px black, 60px 0px 7px black, -60px 0px 7px black, 30px 30px 7px black, -30px 30px 7px black, 30px -30px 7px black, -30px -30px 7px black;
	}
	100% {
		text-shadow: 0px 0px black, 0px 0px black, 0px 0px black, 0px 0px black, 0px 0px black, 0px 0px black;
	}
}

@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

@keyframes scale {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes rotate {
	0% {
		transform: rotateZ(0deg);
	}
	25% {
		transform: rotateZ(3deg);
	}
	75% {
		transform: rotateZ(-3deg);
	}
	100% {
		transform: rotateZ(0deg);
	}
}
`

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 160px;

  @media (max-width: 800px) {
    margin: 30px 15px;
  }
`
