import ListStudents from './components/ListStudents';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';
import ThirdParty from './components/Third-Party';
import { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import { Miles, Peter, GlobalStyles } from "./components/DarkMode";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("Miles");
  const themeToggler = () => {
    theme === "Miles" ? setTheme("Peter") : setTheme("Miles");
  };
    return (
      <ThemeProvider theme={theme === "Miles" ? Peter : Miles}>
          <Router>
            <GlobalStyles />
          <Header />
            <div className="container">
            <button onClick={() => themeToggler()}>Change Spider-Men</button>
              <Switch>
                  <Route path="/" exact component={ListStudents}></Route>
                  <Route path="/reports" component={ListStudents}></Route>
                  <Route path="/add-report" component={AddStudent}></Route>
                  <Route path="/update-report/:id" component={UpdateStudent}></Route> 
                  <Route path="/delete-report/:id" component={DeleteStudent}></Route> 
                  <Route path="/view-report/:id" component={ViewStudent}></Route>
                  <Route path="/general-reports" component={ThirdParty}></Route> 
              </Switch>
            </div>
            <Footer />
            
          </Router>
      </ThemeProvider>
  );
}

export default App;