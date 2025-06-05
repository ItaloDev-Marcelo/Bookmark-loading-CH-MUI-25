import "./App.css";
import Header from './pages/subPages/header';
import Main from './pages/subPages/main';
import Footer from './pages/subPages/footer';
import NavBar from "./components/Nav/layout";
function App() {
  return (
     <>
        <NavBar/>
        <Header/> 
        <Main/>
        <Footer/>
     </>
  );
}

export default App;
