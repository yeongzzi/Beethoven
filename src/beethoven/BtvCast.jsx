import { BtvCastStyled } from './style';
import CastItem from './CastIem';
import useStore from '../store/useStore';

const BtvCast = () => {
    const { data } = useStore();

    return (
        <BtvCastStyled>
            <div className='cast'>
                <ul>
                    {
                        data.map(item => <CastItem key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </BtvCastStyled>
    );
};

export default BtvCast; 