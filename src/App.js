import {Routes , Route} from 'react-router-dom'
import Home from "../src/routes/home/home";
import Navbar from "../src/routes/navbar/navbar";
import Authentication from "../src/routes/authentication/authentication";
import Shop from "./routes/shop/shop"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path="shop" element={<Shop />}/>
      <Route path="auth" element={<Authentication  />}/>
      </Route>
    </Routes>
  )
};

export default App;
