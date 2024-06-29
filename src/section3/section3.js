import './section3.css'
import Section3Data from './section3Data'
import LogoArray from './section3Logos'


function Section3() {
    return (
        <div className='section3MainWrap'>
            <div className='mainHeading'>Sale Off</div>
            <div className='subHeading'>dshui se iewriwue wier iuew iwerhiuwe iewru ie eri auy ydfd siudfhw</div>
            <div className='contentWrap'>
                {Section3Data.map((item) => (
                    < div className='imgWrap' key={item.id}>
                        <img src={item.image} alt="" className='contentImg' />
                        {item.hasOffer && (
                            <div className='section3OfferFlag'>
                                <div style={{ margin: "0.6rem" }}>
                                    -{item.offer}%
                                </div>
                            </div>
                        )}
                        <div className='section3NewFlag'>
                            <div style={{ margin: "0.4rem" }}>
                                NEW
                            </div>
                        </div>
                        <div className='productDatails'>
                            <div className='section3ProductName'>{item.productName}</div>
                            <div className='section3Price'>₹{item.price} <span className='section3PrevPrice'>₹{item.prevPrice}</span></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='section3LogoWrap'>
                {LogoArray.map((item, index) => (
                    <div className='section3LogoSubWrap' key={index}>
                        <img src={item} alt="" className='section3Logo' />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Section3