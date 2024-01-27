import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ThumbnailRow from './Components/ThumbnailRow/ThumbnailRow';
import img1 from '../src/Assets/images/thumbnails/1.jpg'
import img2 from '../src/Assets/images/thumbnails/2.jpg'
import img3 from '../src/Assets/images/thumbnails/3.jpg'
import img4 from '../src/Assets/images/thumbnails/4.jpg'
import img5 from '../src/Assets/images/thumbnails/5.jpg'
import img6 from '../src/Assets/images/thumbnails/6.jpg'
import img7 from '../src/Assets/images/thumbnails/7.jpg'
import img8 from '../src/Assets/images/thumbnails/8.jpg'
import img9 from '../src/Assets/images/thumbnails/9.jpg'
import img10 from '../src/Assets/images/thumbnails/10.jpg'
import img11 from '../src/Assets/images/thumbnails/11.jpg'
import img12 from '../src/Assets/images/thumbnails/12.jpg'
import img13 from '../src/Assets/images/thumbnails/13.jpg'
import img14 from '../src/Assets/images/thumbnails/14.jpg'
import img15 from '../src/Assets/images/thumbnails/15.jpg'
import img16 from '../src/Assets/images/thumbnails/16.jpg'
import img17 from '../src/Assets/images/thumbnails/17.jpg'
import img18 from '../src/Assets/images/thumbnails/18.jpg'
import img19 from '../src/Assets/images/thumbnails/19.jpg'
import img20 from '../src/Assets/images/thumbnails/20.jpg'
import img21 from '../src/Assets/images/thumbnails/21.jpg'
import img22 from '../src/Assets/images/thumbnails/22.jpg'
import img23 from '../src/Assets/images/thumbnails/23.png'
import img24 from '../src/Assets/images/thumbnails/24.jpg'
import img25 from '../src/Assets/images/thumbnails/25.jpg'
import img26 from '../src/Assets/images/thumbnails/26.jpg'
import img27 from '../src/Assets/images/thumbnails/27.jpg'
import img28 from '../src/Assets/images/thumbnails/28.jpg'
import img29 from '../src/Assets/images/thumbnails/29.jpg'
import img30 from '../src/Assets/images/thumbnails/30.jpg'
import img31 from '../src/Assets/images/thumbnails/31.jpg'
import img32 from '../src/Assets/images/thumbnails/32.jpg'
import img33 from '../src/Assets/images/thumbnails/33.jpg'
import img34 from '../src/Assets/images/thumbnails/34.jpg'
import img35 from '../src/Assets/images/thumbnails/35.jpg'

function App() {
  const imgArr = [img1, img2, img3, img4, img5, img6, img7]
  const imgArr2 = [img8, img9, img10, img11, img12, img13, img14]
  const imgArr3 = [img15, img16, img17, img18, img19, img20, img21]
  const imgArr4 = [img22, img23, img24, img25, img26, img27, img28]
  const imgArr5 = [img29, img30, img31, img32, img33, img34, img35]
  return (
    <div>
      <Navbar />
      <ThumbnailRow title = "Popular on Netflix" imgArr = {imgArr}/>
      <ThumbnailRow title = "Continue Watching for Nikita" imgArr = {imgArr2}/>
      <ThumbnailRow title = "Hindi Movies & TV" imgArr = {imgArr3}/>
      <ThumbnailRow title = "Top 10 Movies in the U.S Today" imgArr = {imgArr4}/>
      <ThumbnailRow title = "Top 10 Movies in the U.S Today" imgArr = {imgArr5}/>
    </div>
  );
}

export default App;
