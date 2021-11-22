import { useState } from 'react';
import UserContext from '../contexts/UserContexts.js';
import NewSubscriptionContext from '../contexts/NewSubscriptionContext.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle.js';
import Home from './Home.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import ViewPlan from './ViewPlan/ViewPlan.js';
import Subscribe from './Subscribe/Subscribe.js';
import Shipping from './Shipping/Shipping.js';

export default function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [newSubscription, setNewSubscription] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NewSubscriptionContext.Provider value={{ newSubscription, setNewSubscription}}>
                <BrowserRouter>
                <GlobalStyle />
                    <Switch>
                        <Route path='/home' component={Home} exact />
                        <Route path='/signup' component={SignUp} exact />
                        <Route path='/login' component={LogIn} exact />
                        <Route path='/' component={ViewPlan} exact />
                        <Route path='/subscribe' component={Subscribe} exact />
                        <Route path='/shipping' component={Shipping} exact />
                        <Redirect to='/home' />
                    </Switch>
                </BrowserRouter>
            </NewSubscriptionContext.Provider>
        </UserContext.Provider>
    );
}
