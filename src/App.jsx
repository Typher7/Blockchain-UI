import logo from './logo.svg';
import BlockchainViewer from './components/BlockchainViewer';
import Navbar from './components/NavBar';
import { Footer } from "./components/Footer";
import Step from './components/Steps';

function App() {
  return (
    <div>
      <Navbar />
      <Step />
      <Footer />
    </div>
  );
}

export default App;
