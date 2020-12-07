import styled, { css } from 'styled-components'
import './Santa.scss'

export default function Santa() {
  return (
    <SantaContainer>
      <div class="container">
          <div class="santa">
            <div class="head">
              <div class="face">
                <div class="redhat">
                  <div class="whitepart"></div>
                  <div class="redpart"></div>
                  <div class="hatball"></div>
                </div>
                <div class="eyes"></div>
                <div class="beard">
                  <div class="nouse"></div>
                  <div class="mouth"></div>
                </div>
              </div>
              <div class="ears"></div>
            </div>
            <div class="body"></div>
          </div>
        </div>
      </SantaContainer>
  );
}

const SantaContainer = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
`