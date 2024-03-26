import InfoCharacter from './InfoCharacter';
import InfoProfile from './InfoProfile';
import InfoActivity from './InfoActivity';
import InfoNews from './InfoNews';
import useStore from '../../store/useStore';

const InfoContent = () => {
    const { selTab } = useStore();

    return (
        <div className="infoContent">
            {selTab === 'char' && <InfoCharacter />}
            {selTab === 'prof' && <InfoProfile />}
            {selTab === 'actv' && <InfoActivity />}
            {selTab === 'news' && <InfoNews />}
        </div>
    );
};

export default InfoContent;