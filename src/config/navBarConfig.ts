import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

/**
 * 导航栏菜单配置（完整版，保留了原版所有下拉菜单结构）
 */
export const navBarConfig: NavBarConfig = {
	links: [
		// 预设链接：首页
		LinkPreset.Home,
		// 预设链接：归档
		LinkPreset.Archive,

		// 自定义一级下拉菜单：外部链接集合（这里放你的B站和QQ）
		{
			name: "社交",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/3546612003506542", // 你的B站
					external: true,
					icon: "fa7-brands:bilibili",
				},
								{
					name: "QQ",
					url: "/qq/", // 🎯 指向刚才建好的页面
					external: false, // 或直接删掉 external 这一行
					icon: "fa7-brands:qq",
				},
			],
		},

		// 自定义一级下拉菜单：个人内容页面（原版保留，未删减）
		{
			name: "内容",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "番剧",
					url: "/anime/",
					icon: "material-symbols:movie",
				},
				{
					name: "日记",
					url: "/diary/",
					icon: "material-symbols:book",
				},
				{
					name: "相册",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
				{
					name: "设备",
					url: "/devices/",
					icon: "material-symbols:devices",
					external: false, 
				},
			],
		},

		// 自定义一级下拉菜单：关于相关（原版保留）
		{
			name: "关于",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "关于我",
					url: "/about/",
					icon: "material-symbols:person",
				},
				{
					name: "友链",
					url: "/friends/",
					icon: "material-symbols:group",
				},
			],
		},

		// 自定义一级下拉菜单：其他页面（原版保留，未删减）
		{
			name: "更多",
			url: "#", 
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "项目",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "技能",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				LinkPreset.AITools,
				{
					name: "时间线",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};