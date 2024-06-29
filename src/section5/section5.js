import './section5.css'


function Section5() {
    return (
        <div className='section5MainWrap'>
            <div className='section5SubWrap'>
                <div className='section5MainHeading'>Get Discount Info</div>
                <div className='section5Content'>
                    Subscribe to the Hexstock mailing list to recieve updates on new arrivals, special offers
                    <span className='section5ContentSpan'>and other discount information.</span>
                </div>
                <div className='section5Footer'>
                    Subscribe to our newsletter
                </div>
                <div className='section5BottomLine'></div>
            </div>
            <div className='section5BtnWrap'>
                <button className='section5Btn'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default Section5