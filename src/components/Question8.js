import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from 'react';


export default function Question8() {
  const history = useHistory();
  const [input, setInput] = useState('');

  const goToNextPage = () => {
    history.replace("/pgcr/question9");
  }

  const goToErrorPage = () => {
    history.replace("/pgcr/donald-trump");
  }

  const validSudoku = () => {
    if(input === '5') {
      goToNextPage();
    } else if(input !== '') {
      goToErrorPage();
    }
  }

  const sudokuBoard = [
    [ 5, 3, 4,  6, 7, 8,  9, 1, 2 ],
    [ 6, 7, 2,  1, 9, 5,  3, 4, 8 ],
    [ 1, 9, 8,  3, 4, 2,  5, 6, 7 ],
  
    [ 8, 5, 9,  7, 6, 1,  4, 2, 3 ],
    [ 4, 2, 6,  8, -1, 3,  7, 9, 1 ],
    [ 7, 1, 3,  9, 2, 4,  8, 5, 6 ],
  
    [ 9, 6, 1,  5, 3, 7,  2, 8, 4 ],
    [ 2, 8, 7,  4, 1, 9,  6, 3, 5 ],
    [ 3, 4, 5,  2, 8, 6,  1, 7, 9 ],
  ];

  return (
    <QuestionContainer>
      <Title>Complète ce Sudoku</Title>
      <SudokuContainer>
        {
          sudokuBoard.map((line) => {
            return line.reduce((accumulator, number) => {
              if(number === -1) {
                return [...accumulator, <SudokuInput minLength="0" maxLength="1" value={input} onInput={e => setInput(e.target.value)} />]
              }
             return [...accumulator, <SudokuNumber>{number}</SudokuNumber>]
            }, [])
          })
        }
      </SudokuContainer>
      <ConfirmButton onClick={validSudoku}>Valider</ConfirmButton>
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


const ConfirmButton = styled.div`
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

const SudokuInput = styled.input`
  height: 40px;
  width: 40px;
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
  font-size: inherit;
  text-align: center;
`

const SudokuNumber = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  text-shadow: 5px 5px black;

  &:nth-child(3n) {
    border-right: 1px solid white;
  }

  &:nth-child(3n + 1) {
    border-left: 1px solid white;
  }

  &:nth-child(-n + 9) {
    border-top: 1px solid white;
  }

  &:nth-child(-n + 36):not(:nth-child(-n + 27)) {
    border-top: 1px solid white;
  }

  &:nth-child(-n + 63):not(:nth-child(-n + 54)) {
    border-top: 1px solid white;
  }

  &:nth-child(-n + 27):not(:nth-child(-n + 18)) {
    border-bottom: 1px solid white;
  }

  &:nth-child(-n + 54):not(:nth-child(-n + 45)) {
    border-bottom: 1px solid white;
  }

  &:nth-child(-n + 81):not(:nth-child(-n + 72)) {
    border-bottom: 1px solid white;
  }
`

const SudokuContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(9, 40px);
  grid-template-rows:  repeat(9, 40px);
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
`

const Title = styled.div`
font-size: 30px;
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

  @media (max-width: 800px) {
    margin: 30px 15px;
  }
`
