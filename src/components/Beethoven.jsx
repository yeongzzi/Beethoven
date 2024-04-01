import { BeethovenStyled } from './style.js'
import BtvCast from './BtvCast/BtvCast.jsx';
import BtvInfo from './BtvInfo/BtvInfo.jsx';
import BtvGallery from './BtvGallery/BtvGallery.jsx';

const Beethoven = () => {

    return (
        <BeethovenStyled>
            <div className='wrap'>
                <h1><a href="/">Beethoven</a></h1>
                <BtvCast />
                <div className='bottomWrap'>
                    <BtvGallery />
                    <BtvInfo />
                </div>
            </div>
        </BeethovenStyled>
    );
};

export default Beethoven;