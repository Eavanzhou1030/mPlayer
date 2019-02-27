import { getHistoryList, getMode, getUserId } from '@/assets/js/storage'
import { playMode } from '../assets/js/config';

const state = {
  audioEle: null, //audio元素
  mode: Number(getMode()) || playMode.listloop, // 播放模式，默认列表循环
  playing: false, // 播放状态
  playlist: [], //播放列表
  orderlist: [], //顺序列表
  currentIndex: -1, //当前的音乐索引
  historyList: getHistoryList() || [], // 播放历史列表
  uid: getUserId() || null, //网易云用户uid
}

export default state
