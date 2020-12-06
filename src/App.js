import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'

import Start from './components/Start'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Question4 from './components/Question4'
import Question5 from './components/Question5'
import Question6 from './components/Question6'
import Question7 from './components/Question7'
import Question8 from './components/Question8'
import DonaldTrump from './components/DonaldTrump'

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
            <Question8 />
          </Route>
          <Route path="/pgcr/donald-trump">
            <DonaldTrump />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
