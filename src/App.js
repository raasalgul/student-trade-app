import './App.css';
import Header from './components/header/Header';
import {tabs} from './components/constants/Contants';
import { useReducer,React,createContext } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

export const UserInfoContext = createContext()

const initialState = {"userId":"1234"}

const reducer =(state,action) =>{
  switch(action.type){
    case 'userState':
      //state=action.payload
      return action.payload
    default:
      return state 
  }
}

function App() {
  const [userInfo,dispatch] = useReducer(reducer,initialState)
  return (
    <UserInfoContext.Provider value={{userInfoState:userInfo, userInfoDispatch:dispatch}}>
    <Router>
    <div className="App">
      <Header/>
      <Switch>
         <Route
            path={tabs.Home.url}
            component={tabs.Home.file}
          />
        <Route
            path={tabs.Profile.url}
            component={tabs.Profile.file}
          />
        <Route
            path={tabs.About.url}
            component={tabs.About.file}
          />
        <Route
            path={tabs.Contact_us.url}
            component={tabs.Contact_us.file}
          />
          <Route
            path={tabs.Sign_in.url}
            component={tabs.Sign_in.file}
          />
          <Route
            path={tabs.Sign_up.url}
            component={tabs.Sign_up.file}
          />
     <Route exact path="/">
    <Redirect to="/sign-in" />
</Route>
</Switch>
    </div>
    </Router>
    </UserInfoContext.Provider>
  );
}

export default App;
