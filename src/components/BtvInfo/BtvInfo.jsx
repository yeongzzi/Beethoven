import InfoTab from './InfoTab';
import InfoContent from './InfoContent';
import { BtvInfoStyled } from '../style';

const BtvInfo = () => {

    return (
        <BtvInfoStyled>
            <div className='btvInfo'>
                <InfoTab />
                <InfoContent />
            </div>
        </BtvInfoStyled>
    );
};

export default BtvInfo;