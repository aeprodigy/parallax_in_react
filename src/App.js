
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import ImageOne from './Components/ImageOne';
import ImageThree from './Components/ImageThree';
import ImageTwo from './Components/ImageTwo';
import TextInfo from './Components/TextInfo';

function App() {
  const bg = "https://pixabay.com/images/id-3608029/"
  return (
    <div className="App">
    <ImageOne/>
    <TextInfo/>
    <ImageTwo/>
    <TextInfo/>
    <ImageThree/>
    </div>
  );
}

export default App;
