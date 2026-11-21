import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true, // 启用音乐播放器功能
	showFloatingPlayer: true, // 显示悬浮播放器 UI
	floatingEntryMode: "fab", // 悬浮入口模式："default" 为独立悬浮播放器，"fab" 为集成到通用 FAB 组
	
	mode: "meting", // 音乐播放器模式，可选 "local" 或 "meting"
	
	// 已为你替换为一个公共 API。如果这个还是卡住，可以尝试把注释掉的另一行取消注释
	meting_api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
	// meting_api: "https://meting.mysqil.com/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
	
	id: "18623580663", // ⚠️ 请把这里的数字换成你自己网易云歌单的 ID
	server: "netease", // 音乐源服务器（网易云音乐）
	type: "playlist", // 播单类型
};