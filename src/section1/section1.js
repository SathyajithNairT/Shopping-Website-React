import './section1.css'
import Section1Data from './section1Data'
import { useState } from 'react'

// import img from './images/1.jpg'


function Section1() {

    const [displayedItems, setDisplayedItems] = useState({
        section1A: Section1Data.slice(0, 4),
        section1B: Section1Data.slice(4, 8)
    })

    // console.log(displayedItems)


    return (
        <div className='section1MainWrap'>
            <div className='section1MainHeading'>Trending Products</div>
            <div className='section1SubHeading'>huw uiwer weuy werwewr weygua asudyg uaysiua iuashd</div>
            <div className='section1ContentWrap'>
                {Object.keys(displayedItems).map((key) => (
                    <div key={key} className={key}>
                        {displayedItems[key].map((item) => (
                            <div key={item.id} className='section1ImgWrap'>
                                <img src={item.image} alt="" className='section1images' />
                                {item.hasOffer && (
                                    <div className='section1OfferFlag'>
                                        <div style={{ margin: "0.6rem" }}>
                                            -{item.offer}%
                                        </div>
                                    </div>
                                )}
                                {item.isNew && (
                                    <div className='section1NewFlag'>
                                        <div style={{ margin: "0.4rem" }}>
                                            NEW
                                        </div>
                                    </div>
                                )}
                                
                                <div className='section1ProductDescription'>
                                    {item.description}
                                    <span className='section1Price'> ₹{item.price}</span><span className='section1PrevPrice'> ₹{item.prevPrice}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className='section1BtnWrap'>
                    <button className='section1Btn'>LOAD MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Section1