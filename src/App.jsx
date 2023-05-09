import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { List } from './components/List/List';
import { Route, Routes } from 'react-router';
import { Profile } from './components/Profile/Profile';

function App() {

  const [userData, setData] = useState([])

  useEffect(() => {
    axios.get("https://reqres.in/api/users")
      .then(json => setData(json.data.data));

  }, []);
  return (
    <section>
      <Routes>
        <Route exact path='/' element={<List userData={userData}> </List>}>
        </Route>
        <Route path='/user/:userId' element={<Profile userData={userData} />}></Route>
        {/* <h1>User list</h1> */}
      </Routes>
    </section>
  )
}

export default App;
