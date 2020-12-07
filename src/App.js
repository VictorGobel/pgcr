import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Start from './components/Start'
import StartMarion from './components/StartMarion'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import Question6 from './components/Question6'
import Question7 from './components/Question7'
import Question8Sudoku from './components/Question8Sudoku'
import Question9Buttons from './components/Question9Buttons'
import Question10 from './components/Question10'
import Question11 from './components/Question11'
import Question12 from './components/Question12'
import Question13 from './components/Question13'
import Question14 from './components/Question14'
import Question15Lapins from './components/Question15Lapins'
import Question16Redac from './components/Question16Redac'
import Vaccin from './components/Vaccin'
import DonaldTrump from './components/DonaldTrump'

import Snow from './components/Snow'

const MainContainer = styled.div`
  color: white;
  background-color: #282c34;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Router>
      <MainContainer>

        <Snow />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pgcr/question1">
            <Question1 />
          </Route>
          <Route path="/pgcr/question2">
            <Question2 />
          </Route>
          <Route path="/pgcr/question3">
            <Question3 />
          </Route>
          <Route path="/pgcr/question4">
            <Question4 />
          </Route>
          <Route path="/pgcr/question5">
            <Question5 />
          </Route>
          <Route path="/pgcr/question6">
            <Question6 />
          </Route>
          <Route path="/pgcr/question7">
            <Question7 />
          </Route>
          <Route path="/pgcr/question8">
            <Question8Sudoku />
          </Route>
          <Route path="/pgcr/question9">
            <Question9Buttons />
          </Route>
          <Route path="/pgcr/question10">
            <Question10 />
          </Route>
          <Route path="/pgcr/donald-trump">
            <DonaldTrump />
          </Route>
          <Route path="/pgcr/start-marion">
            <StartMarion />
          </Route>
          <Route path="/pgcr/question11">
            <Question11 />
          </Route>
          <Route path="/pgcr/question12">
            <Question12 />
          </Route>
          <Route path="/pgcr/question13">
            <Question13 />
          </Route>
          <Route path="/pgcr/question14">
            <Question14 />
          </Route>
          <Route path="/pgcr/question15">
            <Question15Lapins />
          </Route>
          <Route path="/pgcr/question16">
            <Question16Redac />
          </Route>
          <Route path="/pgcr/vaccin">
            <Vaccin />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
        <ToastContainer />
      </MainContainer>
    </Router>
  );
}

export default App;
