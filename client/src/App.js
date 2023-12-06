import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { words } from './words';
function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <content>{words.content}</content>
        <Footer />
      </div>
      </>
  );
}

export default App;
