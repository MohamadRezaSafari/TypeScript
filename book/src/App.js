import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/pricing.css'
import Header from './components/header';
import Footer from './components/footer';
import Prices from './components/prices';

function App() {
  return (
    <>
      <Header></Header>
      <Prices></Prices>
      <Footer></Footer>
    </>
  );
}

export default App;
