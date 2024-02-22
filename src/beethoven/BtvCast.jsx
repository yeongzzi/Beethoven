import CastItem from './CastIem';
import { BtvCastStyled } from './style';

const BtvCast = ({ data, handleSelChar }) => {
    return (
        <BtvCastStyled>
            <div className='cast'>
                <ul>
                    {
                        data.map(item => <CastItem key={item.id} item={item} handleSelChar={handleSelChar} />)
                    }
                </ul>
            </div>
        </BtvCastStyled>
    );
};

export default BtvCast; 