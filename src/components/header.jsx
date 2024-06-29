import './header.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderNavData from './headerNavData';


function Header() {
    return (
        <div className='headerMainWrap'>
            <div className='headerContentWrap'>
                <div className='logo'>
                    Hexstock
                </div>
                <div className='pageNavigation'>
                    {HeaderNavData.map((item, index) =>
                        <div key={index} className='headerIcon'>

                            {item.iconName} {item.iconDropdown}

                            <div className='headerIconDropdown'>
                                <p className='dropdownHeading'>{item.iconName}</p>
                                <div className='dropdownContents'>Products</div>
                                <div className='dropdownContents'>Reach out to us</div>
                            </div>
                        </div>
                    )}
                </div>
                {/* <div className='headerIconDropdown'>
                    <div className='dropdownContents'>Products</div>
                    <div className='dropdownContents'>Reach out to us</div>
                </div> */}
                <div className='headerFunctionality'>
                    <div className='headerIcon'>
                        <FaSearch /> Search
                    </div>
                    <div className='headerIcon'>
                        <IoBagHandleOutline /> Cart (4)
                    </div>
                    <div className='headerIcon'>
                        <RxHamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header