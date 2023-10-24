import Image from 'next/image'
import Navbar from './components/Navbar'
import Maincomp1 from './components/Maincomp1';
import Maincomp2 from './components/Maincomp2';
import Maincomp3 from './components/Maincomp3';
import Posts from "./Jsonfiles/posts.json";
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
    
      <div className='' style={{ position: 'relative' }}>
  <img src='/Group (2).png' style={{ 
    position: 'absolute',
    top:"18%",
    left:"45%",
    zIndex: -1,
    width: '720px', // Set the desired width for the image
  }}/>
  <Navbar/>
  <Maincomp1/>
  <Maincomp2/>
  <Maincomp3 data={Posts.Posts} />
</div>
<Footer/>
    </>
  )
}