import './App.css';
import TopNav from './components/TopNav'
import Project from './components/Project';
import Landing from './components/Landing'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
    <TopNav /> 
    <Landing 
    firstValue="Hello, My Name is Devdatt Pandit"
    secondValue="And I am a Web Developer."
    />
    <Project 
    name="Welcome to my projects"
    interval={20000}
    images={[
      'https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg',
      'https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg',
      'https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg?size=626&ext=jpg',
      'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg',
      'https://download.asrock.com/Wallpaper/2020_Wallpaper_AQUA-logo_4096x2160.jpg',
      'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg',
    ]}
    />
    <Landing/>
    <Resume/>
    <Landing/>
    <About />
    <Landing />
    <Contact />
    <Landing />
    <Footer />
    </div>
  );
}

export default App;
