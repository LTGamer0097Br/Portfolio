import './Cstyle.css'



import React from 'react'
import {useState, useEffect} from 'react'

const Carousel = (props) => {
  const {children} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  // Set the length to match current children from props
  useEffect(() => {
      setLength(children.length/2-1)
  }, [children])

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }else{
      setCurrentIndex(prevState => 0)
    }
  }

  const prev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
      }else{
        setCurrentIndex(prevState => length-1)
      }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="left-arrow" onClick={prev}>
          &lt;
        </button>
        <div className="carousel-content-wrapper">
          <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {children}
          </div>
        </div>
        <button className="right-arrow" onClick={next}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel