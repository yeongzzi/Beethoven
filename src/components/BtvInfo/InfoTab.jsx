import useStore from '../../store/useStore';

const InfoTab = () => {
    const { selTab, setSelTab } = useStore();
    const handleSelTab = (tab) => setSelTab(tab);

    return (
        <div className='infoTab'>
            <ul>
                <li onClick={() => handleSelTab('char')} className={selTab === 'char' ? 'active' : ''}>등장인물</li>
                <li onClick={() => handleSelTab('prof')} className={selTab === 'prof' ? 'active' : ''}>프로필</li>
                <li onClick={() => handleSelTab('actv')} className={selTab === 'actv' ? 'active' : ''}>작품활동</li>
                <li onClick={() => handleSelTab('news')} className={selTab === 'news' ? 'active' : ''}>뉴스</li>
            </ul>
        </div>
    );
};

export default InfoTab;