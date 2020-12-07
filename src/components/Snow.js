import styled, { css } from 'styled-components'


export default function Snow() {
  return (
    <SnowContainer>
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
      <SnowFlake />
    </SnowContainer>
  );
}

const randInt = (number) => {
  return Math.floor(Math.random() * Math.floor(number));
}

function createCSS() {
  let styles = '';

  for (let i = 0; i < 80; i += 1) {

    const randomX = (randInt(1000000) * 0.0001) + 'vw';
    const randomOffset =  (randInt(200000) - 100000) * 0.0001 + 'vw';
    const randomXEnd =  `calc(${randomX} + ${randomOffset})`;
    const randomXEndYoyo =  `calc(${randomX} + (${randomOffset} / 2))`;
    const randomYoyoTime =  (randInt(50000) + 30000) / 100000;
    const randomYoyoY =  (randomYoyoTime * 100) + 'vh';
    const randomScale =  randInt(10000) * 0.0001;
    const fallDuration =  (randInt(20) + 10) + 's';
    const fallDelay =  (randInt(30) * -1) + 's';

     styles += `
        &:nth-child(${i}) {
          opacity: calc(${randInt(10000)} * 0.0001);
          transform: translate(${randomX}, -10px) scale(${randomScale});
          animation: fall-${i} ${fallDuration} ${fallDelay} linear infinite;
        }

        @keyframes fall-${i} {
          ${randomYoyoTime * 100}% {
            transform: translate(${randomXEnd}, ${randomYoyoY}) scale(${randomScale});
          }
          
          to {
            transform: translate(${randomXEndYoyo}, 100vh) scale(${randomScale});
          }
        }
     `
  }

  return css`${styles}`;
}

const SnowFlake = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  ${createCSS()};
`

const SnowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 0;
`