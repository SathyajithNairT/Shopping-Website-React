import { useState, useEffect } from 'react'
import './carousel.css'
import CarouselData from './carouselData'




function Carousel() {

    var data = Object.values(CarouselData)
    // console.log(data)

    const [carousels, setCarousel] = useState(data)
    // console.log(carousels);

    function rotateArray() {
        setCarousel((prevCarouselArray) => {
            const currentArray = [...prevCarouselArray]
            const firstElement = currentArray.shift()
            currentArray.push(firstElement)
            return currentArray
        })
    }


    useEffect(() => {
        const IntervalId = setInterval(rotateArray, 5000)
        return () => clearInterval(IntervalId)
    }, [])


    return (
        <div className='carouselMainWrap'>
            <div className='carouselContentWrap'>
                <img src={carousels[0].image} alt="" className='carouselImage' />
                <div className='carouselWordings'>
                    <div className='carouselCaption'>
                        {carousels[0].carouselCaption} <span style={{ display: 'block' }}>{carousels[0].carouselCaptionSpan}</span>
                    </div>
                    <div className='carouselDescription'>
                        {carousels[0].carouselDescription}
                    </div>
                    <div className='carouselBtnWrap'>
                        <button className='carouselBtn' id={carousels[0].id}>DISCOVER NOW</button>
                    </div>
                </div>
                <div className='carouselNavigationWrap'>
                    {carousels.map((item, index) => index !== 0 && (
                        <div className='carouselNavigationContent' key={item.id}>
                            <img src={item.image} alt="" className='carouselNavigationContentImage' />
                            <div className='carouselWordingsNavigation'>
                                <div className='carouselCaptionNavigation'>
                                    {item.carouselCaption} <span style={{ display: 'block' }}>{item.carouselCaptionSpan}</span>
                                </div>
                                <div className='carouselBtnWrapNavigation'>
                                    Discover Now
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel