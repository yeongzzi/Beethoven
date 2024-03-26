import useStore from '../../store/useStore';
import CastItem from './CastIem';

const CastList = () => {
    const { data } = useStore();

    return (
        <div className='cast'>
            <ul>
                {
                    data.map(item => <CastItem key={item.id} item={item} />)
                }
            </ul>
        </div>
    );
};

export default CastList;