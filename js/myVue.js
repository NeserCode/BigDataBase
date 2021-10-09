// let newFile = {
// 	type:'javascript'
// }

// ;(function(){console.log(newFile.type)})()

// ;(function(){
//  if ( newFile.type == 'javascript' )
//   console.log(" Hello,World! ");
//  else if ( newFile.type == 'c' )
//   printf(" Hello,World! ");
//  else if ( newFile.type == 'java' )
//   System.out.println(" Hello,World! ")
//  else if ( newFile.type == 'python' )
//   print('Hello World')
//  else if ( newFile.type == 'php' )
//   print_r("Hello World");
// })()

const App = {
	mounted() {
		this.initApp();
	},
	data() {
		return {
			counter: 0,
			interval: null,
			bigData: {
				pickName: '大数据',
				name: '大数据智能与云计算中心',
				nameSub: '实验室',
			},
			colorfrom: [
				"青矾绿 \n色彩来自 中国色 http://zhongguose.com/",
				"品蓝 \n色彩来自 中国色 http://zhongguose.com/",
				"紫灰 \n色彩来自 中国色 http://zhongguose.com/",
				"古鼎灰 \n色彩来自 中国色 http://zhongguose.com/",
				"李紫 \n色彩来自 中国色 http://zhongguose.com/",
				"锌灰 \n色彩来自 中国色 http://zhongguose.com/"
			],
			motto: [{
					text: "没有人能学完所有知识 ，这算是常识",
					step: 16,
					bit: 32,
				},
				{
					text: "每个人都是天才 ，但如果你用爬树的能力评断一条鱼 ，他将终其一生觉得自己是个笨蛋",
					step: 38,
					bit: 74,
				},
				{
					text: "无论有多少困难 ，心若向阳 ，就一定会有解决的办法 ，因为办法总比困难多",
					step: 34,
					bit: 65,
				},
				{
					text: "走不通的路 ，就由代码来打开",
					step: 13,
					bit: 26,
				},
				{
					text: "断了退路 ，才能向前",
					step: 9,
					bit: 18,
				},
				{
					text: "再努力一点 ，就一点",
					step: 9,
					bit: 18,
				},
				{
					text: "宇宙山河浪漫 ，生活点滴温暖 ，都值得我前进",
					step: 20,
					bit: 39,
				},
				{
					text: "才华要配得上野心",
					step: 8,
					bit: 16,
				},
				{
					text: "察势者智 ，驭势者赢",
					step: 9,
					bit: 18,
				},
				{
					text: "为什么要努力 ,因为喜欢的东西很贵 ,想去的地方很远 ,爱的人很优秀",
					step: 31,
					bit: 59,
				},
				{
					text: "忙碌是一种幸福 ，让我们没时间体会痛苦 ;奔波是一种快乐 ，让我们真实地感受生活 ;疲惫是一种享受 ，让我们无暇空虚",
					step: 53,
					bit: 101,
				},
				{
					text: "成熟与年龄无关 ，而是一种阅历 ;优雅与装扮无关 ，而是一种气度",
					step: 29,
					bit: 55,
				},
				{
					text: "哪怕累死自己 ，也要卷死同学",
					step: 13,
					bit: 26,
				}
			]
		}
	},
	methods: {
		getColorInfoAnimation: function(e) {
			if (e.target.classList[0] == 'colorinfo') {
				if (e.target.style.width == '7ch') return 0
				else e.target.style.width = '7ch'
			}
		},
		setColorInfoHidden: function() {
			let arr = document.querySelectorAll('.colorinfo')
			arr.forEach((item) => {
				item.style.width = '1ch'
			})
		},
		keepDarg: function() {
			return false
		},
		animateKeyword: function(index) {
			let target = document.querySelector('.motto .mottoText')
			if (index >= 0) {
				target.style.width = "0"
				target.innerHTML = this.motto[index].text
				target.style.setProperty('--bit', `${this.motto[index].bit}ch`)
				target.style.setProperty('--step', this.motto[index].step)
				return 1
			} else return 0
		},
		initApp: function() {
			let i = 1

			document.querySelector('.colorinfo').style.width = '1ch'
			console.log('欢迎访问大数据实验室官网')
			console.log("查看本页使用的所有色彩，请于控制台输入：\nApp.data().colorfrom.forEach((item)=>{console.log(item)})")
			console.log("查看所有寄语，请于控制台输入：\nApp.data().motto.forEach((item)=>{console.log(item.text)})")

			this.interval = setInterval(() => {
				if (this.animateKeyword(i)) i = i == this.motto.length - 1 ? 0 : i + 1
			}, 10000)
		}
	}
};
Vue.createApp(App).mount('#app');
