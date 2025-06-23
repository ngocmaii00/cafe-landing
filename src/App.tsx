import Footer from "./common/Footer";
import Header from "./common/Header";
import Characteristics from "./components/Characteristics";
import Home from "./components/Home";
import MoveTop from "./components/MoveTop";
import Stories from "./components/Stories";

function App() {
  return (
    <div>
      <MoveTop />
      <Header />
      <Home />
      <Stories />
      <Characteristics />
      <Footer />
    </div>
  );
}

export default App;
