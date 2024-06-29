import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Carousel from './carousel/carousel';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import Section6 from './section6/section6';

function App() {
  return (
    <div className='appJsWrap'>
      <div>
        <Header />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Section1 />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Section6 />
      </div>
    </div>
  );
}

export default App;
