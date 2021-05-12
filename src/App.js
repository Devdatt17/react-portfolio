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
    height="100"
    />
    <Project 
    name="Projects I have worked on"
    interval={20000}
    images={[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
      'https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
      'https://images.unsplash.com/photo-1615118265620-d8decf628275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    ]}
    />
    <Landing 
    height="60"
    />
    <Resume/>
    <Landing 
    height="20"
    />
    <About />
    <Landing 
    height="20"
    />
    <Contact/>
    <Landing     
    height="60"
    />
    <Footer />
    </div>
  );
}

export default App;
