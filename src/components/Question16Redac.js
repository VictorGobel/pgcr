import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { toast } from 'react-toastify';


export default function Question16Redac() {
  const history = useHistory();
  const [input, setInput] = useState('');

  const notify = () => toast.dark("Personellement j'aurai utilisé plus d'arguments...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const goToNextPage = () => {
    history.replace("/pgcr/vaccin");
  }

  const validate = () => {
    if(input.split(' ').length >= 500) {
      goToNextPage();
    } else {
      notify()
    }
  }

  return (
    <QuestionContainer>
      <Title>Penses tu que les compétences sont innées ou acquises ?</Title>
      <AnswerContainer>
        <AnswerInput value={input} onInput={e => setInput(e.target.value)} />
      </AnswerContainer>
      <ValidateButton onClick={validate}>Valider</ValidateButton>
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


const ValidateButton = styled.div`
  position: relative;
  font-size: 24px;
  text-shadow: 5px 5px black;
  margin-top: 40px;
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
`

const AnswerInput = styled.textarea`
  resize: none;
  margin-top: 40px;
  height: 2500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  text-shadow: 5px 5px black;
  background: none;
  margin: 0;
  padding: 0;
  outline: none;
  color: inherit;
  font: inherit;
  font-size: 20px;
  text-align: center;
`

const Title = styled.div`
font-size: 30px;
text-align: center;
text-align: center;
text-shadow: 5px 5px black;
animation: float 4s ease-in-out infinite;
/* animation: scale 4s ease-in-out infinite; */
/* animation: rotate 4s linear infinite; */
/* animation: shadow 2.5s ease-in-out infinite; */

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
  z-index: 1;

  @media (max-width: 800px) {
    margin: 30px 15px;
  }
`
