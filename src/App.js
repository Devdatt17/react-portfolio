import './App.css';
import TopNav from './components/TopNav'
import Project from './components/Project';
import Landing from './components/Landing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <TopNav /> 
    <Landing />     
    <Project name="Welcome to my projects"/>
    <Landing/>
    <Footer />
    </div>
  );
}

export default App;
