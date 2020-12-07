import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

import Santa from './Santa'


export default function End() {
  const history = useHistory();

  return (
    <EndContainer>
      <Title>Félicitation</Title>
      <DescriptionContainer>
        <Description>
          Bien joué ! Tu as réussi à sauver Noël en déjouant les plan du machiavélique Donald Trump. <br />
          Le vaccins va pouvoir être fabriqué et Marion ne gagnera pas d'argent ! <br />
          Benjamin Pommier est fier de toi !
        </Description>
      </DescriptionContainer>
      <SantaContainer>
        <Santa />
      </SantaContainer>
    </EndContainer>
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

const SantaContainer = styled.div`
  margin-top: 120px;
`
const Description = styled.div`
  font-size: 20px;
  text-align: center;
  text-shadow: 3px 3px #ff000036;
`

const DescriptionContainer = styled.div`
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
animation: wtf 5s linear infinite;
/* animation: float 4s ease-in-out infinite; */
/* animation: scale 4s ease-in-out infinite; */
/* animation: rotate 4s linear infinite; */

@keyframes wtf {
	0% {
    transform: scale(1) rotateZ(0deg);
  }
	10% {
    transform: scale(1) rotateZ(360deg);
  }
	20% {
    transform: scale(1.3) rotateZ(2160deg);
	}
	100% {
    transform: scale(1) rotateZ(2160deg);
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

const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 160px 160px 50px;
  z-index: 1;

  @media (max-width: 800px) {
    margin: 30px 15px;
  }
`
