import logo from './logo.svg';
import BlockchainViewer from './components/BlockchainViewer';
import Navbar from './components/NavBar';
import { Footer } from "./components/Footer";
import Step from './components/Steps';
import Test from './components/Blocks';

function App() {
  return (
    <div>
      <Navbar />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
