import './section4.css'
import Section4Data from './section4Data'


function Section4() {
    return (
        <div className='section4MainWrap'>
            <div className='section4MainHeading'>Our Blog Posts</div>
            <div className='section4SubHeading'>sju werije weiruhwie weiruwe iuweiurwe wieurhw iwueri uiweewru</div>
            <div className='section4ContentWrap'>
                {Section4Data.map((item, index) => (
                    <div className='section4ImgWrap' key={index}>
                        <img src={item.image} alt="" className='section4Img' />
                        <div className='section4ProductName'>{item.productName}</div>
                        <div className='section4BlogAuthor'>By <span className='authorName'>{item.authorName}</span> / {item.date}</div>
                        <div className='section4ProductDescription'>
                            {item.description}
                        </div>
                        <div className='section4BtnWrap'>
                            <button className='section4Btn'>READ MORE</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section4