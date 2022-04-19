import { useState } from 'react'
import LogoTitle from '../../assets/images/www.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'l', 'i', 'a', 'm']
  const jobarray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          I'm
          <img src={LogoTitle} alt="LogoTitle"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          software engineer
        </h1>
        <hr />
        <h2>.Net Developer / React / Javascript </h2>
        <Link to="/contact" className="flat-button">
          Contact me
        </Link>
      </div>
    </div>
  )
}

export default Home
