import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", 
	name: "福賀 久留美",
	bio: "これ以上下がらないで！",
	typewriter: {
		enable: false, 
		speed: 400, 
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3546612003506542",
		},
				{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "/qq/", // 🎯 指向刚才建好的页面
		},
	],
};