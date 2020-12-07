import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { toast } from 'react-toastify';


export default function Vaccin() {
  const history = useHistory();
  const [pression, setPression] = useState('0.1');
  const [temp, setTemp] = useState('0.2');
  const [delta, setDelta] = useState('0.3');
  const [germes, setGerme] = useState('0.4');

  const goToNextPage = () => {
    history.replace("/pgcr/fin");
  }

  const notify = () => toast.dark('Hmmm, quelque chose semble étrange.', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const validate = () => {
    if(
        (pression === '0.1' || pression === '0,1') &&
        (temp === '0.2' || temp === '0,2') &&
        (delta === '0.3' || delta === '0,3') &&
        (germes === '0.4' || germes === '0,4')
      ) {
      goToNextPage();
    } else {
      notify();
    }
  }

  return (
    <QuestionContainer>
      <Title>Nous vous faisons confiance</Title>
      <AnswerContainer>
        <AnswerInputContainer>
          Pression
          <AnswerInput minLength="0" maxLength="16" value={pression} onInput={e => setPression(e.target.value)} />
        </AnswerInputContainer>
        <AnswerInputContainer>
          Temperature
          <AnswerInput minLength="0" maxLength="16" value={temp} onInput={e => setTemp(e.target.value)} />
        </AnswerInputContainer>
        <AnswerInputContainer>
          Delta t
          <AnswerInput minLength="0" maxLength="16" value={delta} onInput={e => setDelta(e.target.value)} />
        </AnswerInputContainer>
        <AnswerInputContainer>
          n_germes
          <AnswerInput minLength="0" maxLength="16" value={germes} onInput={e => setGerme(e.target.value)} />
        </AnswerInputContainer>
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
  color: ${colorBlue1};
  text-decoration: none;

  &:hover {
    color: ${colorBlue2};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colorBlue2};
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const AnswerInputContainer = styled.div`
  margin: 40px 25px 0;
  text-align: center;
`

const AnswerInput = styled.input`
  height: 30px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 1px solid grey;
  text-shadow: 5px 5px black;
  background: none;
  margin: 10px 0 0;
  padding: 10px 10px 0;
  outline: none;
  color: inherit;
  font: inherit;
  font-size: 20px;
`

const Title = styled.div`
font-size: 30px;
text-align: center;
text-align: center;
text-shadow: 5px 5px black;
/* animation: float 4s ease-in-out infinite; */
/* animation: scale 4s ease-in-out infinite; */
animation: rotate 4s linear infinite;
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
