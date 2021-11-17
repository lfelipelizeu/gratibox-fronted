import { useState } from 'react';
import UserContext from '../contexts/UserContexts.js';
import Home from './Home.js';

export default function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
      <UserContext.Provider value={{ user, setUser }}>
        <Home />
      </UserContext.Provider>
    );
}
