import {Routes , Route} from 'react-router-dom'
import Home from "../src/routes/home/home";
import Navbar from "../src/routes/navbar/navbar";
import SignIn from "../src/routes/sign-in/sign-in";


const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  )
};

export default App;
