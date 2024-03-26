import useStore from '../../store/useStore';

const InfoCharacter = () => {
    const { selChar } = useStore();
    const { character } = selChar
    const { subTitle, des } = selChar.profChar

    return (
        <div className='infoChar'>
            <p className="title">{character}</p>
            <p className="subTitle">{subTitle}</p>
            <p className="des" style={{ whiteSpace: 'pre-line' }}>{des}</p>
        </div>
    );
};

export default InfoCharacter;