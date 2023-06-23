import IconCircle from '../atoms/IconCircle';
import './DesktopNav.css';
import { AiFillAppstore } from 'react-icons/ai';
import { LiaMapSolid } from "react-icons/lia";
import { FaUser,  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AppContext } from '../../store/Context';
import { useContext } from 'react';
import SearchCity from '../atoms/SearchCity';
import ToggleMode from '../molecules/ToggleMode';
import ImageCircle from '../atoms/ImageCircle';

const DesktopNav = () => {
    const { theme } = useContext(AppContext);
    return (
    <div className="bgcontainer">
    <div className='desktopnav' style={{background: theme  === 'dark' ? 'rgba(50, 50, 50, 0.15)' : 'rgba(256, 256, 256, 0.4)' }}>
        <div className="innverdiv">
    <div className="sec-one">
    <ImageCircle 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMYbul3KRVEYGPjAa4unHv9I5ja3Um6FEKei9I1ZuASAQWNdG9BTRk7w-Htzqqj5_hdc&usqp=CAU' 
    alt='Logo' 
    />
    <IconCircle Icon={AiFillAppstore} />
    <IconCircle Icon={LiaMapSolid} />
    </div>
    <div className="sec-two">
    <div className="locationname">
        Carlifornia, LA
    </div> 
    <div className="locationIcon">
    <FaLocationDot />
    </div> 
    </div>
    <div className="sec-three">
     <SearchCity />
    </div>
    <div className="sec-four">
    <ToggleMode />
    </div>
    <div className="sec-five">
        18:16
    </div>
    <div className="sec-six">
    <IconCircle Icon={FaUser} />
    </div>
    </div>
    </div>
    </div>
    )
};

export default DesktopNav;