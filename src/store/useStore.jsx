import { create } from "zustand";
import dataList from '../assets/api/beethovenData'

const useStore = create((set) => ({
    data: dataList,
    selChar: dataList[0],
    selImg: dataList[0].imgList[0],
    selTab: 'char',
    updateSelChar: (id) => {
        const selectedChar = dataList.find(item => item.id === id);
        set({
            selChar: selectedChar,
            selImg: selectedChar.imgList[0],
            selTab: 'char'
        });
    },
    updateSelImg: (no) => {
        set((state) => ({ selImg: state.selChar.imgList[no - 1] }))
        // set({ selImg: state.selChar.imgList[no - 1]})  // 이미지를 선택하면 preview에 해당 이미지가 나타난다
    },
    setSelTab: (tab) => {
        set({ selTab: tab })
    },
    isBlank: (value) => {
        return value.trim() === ''
    }







}))

export default useStore;
