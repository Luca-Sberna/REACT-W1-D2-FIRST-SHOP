import './App.css';
import AllTheBooks from './components/AllTheBooks';
import Footer from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </>
  );
}

export default App;
