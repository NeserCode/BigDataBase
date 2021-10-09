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
		this.initApp()
		this.changeColor()
	},
	data() {
		return {
			counter: 0,
			useString: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~©·—‘’“”…、。《》【】一上不与东个中为么乐也了于云享人什他代们优会但体你使值入全关其再决制前力办加努势北华卷历去受古台同向员咨品哪喜因困国地多大天奔如学宇完官宙定实室寄察将少就山己常平年幸度开式归彩很得心忙快怕总惫想感成我或所才打扫扮据控数断新方无时是智暇暖最有本权李条来果查树欢死每比气没河法波活济浪温滴漫灰点熟爬爱生用由电疲痛百的看真知矾码研砥砺碌社福秀种究空笨算系紫累纳终经绿网群者而联能腾自致色若苦蓝虚蛋行装西要觉解计让讯论访评识词询语请贵赢走路输迎这进远退通道都配野锌问间阅阳难雅青页驭验鱼鼎龄！（），：；？￥',
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
				"锌灰 \n色彩来自 中国色 http://zhongguose.com/",
				"李紫 \n色彩来自 中国色 http://zhongguose.com/",
			],
			helloColor: [
				'#de1c31', //唐菖蒲红
				'#fa7e23', //美人焦橙
				'#fed71a', //佛手黄
				'#1ba784', //竹绿
				'#15559a', //海涛蓝
				'#22a2c3', //海青
				'#30161c', //卵石紫
			],
			allColors:[
				'青矾绿 | #2c9678',
				'品蓝 | #2b73af',
				'紫灰 | #2b1216',
				'古鼎灰 | #5d3f51',
				'李紫 | #36292f',
				'锌灰 | #7a7374',
				'唐菖蒲红 | #de1c31',
				'美人焦橙 | #fa7e23',
				'佛手黄 | #fed71a',
				'竹绿 | #1ba784',
				'海涛蓝 | #15559a',
				'海青 | #22a2c3',
				'卵石紫 | #30161c',
				'色彩来自 中国色 http://zhongguose.com/'
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
					text: "奔波是一种快乐 ，让我们真实地感受生活 ;疲惫是一种享受 ，让我们无暇空虚",
					step: 34,
					bit: 65,
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
		changeColor: function(index) {
			let target = document.querySelector('span.hello')

			if (index >= 0){
				target.style.setProperty('--hello-color', this.helloColor[index])
				return 1;
			}else return 0;
		},
		initApp: function() {
			let i = 1,
				j = 1

			document.querySelector('.colorinfo').style.width = '1ch'
			console.log('欢迎访问大数据实验室官网')
			console.log("查看本页使用的所有色彩，请于控制台输入：\nApp.data().allColors.forEach((item)=>{console.log(item)})")
			console.log("查看所有寄语，请于控制台输入：\nApp.data().motto.forEach((item)=>{console.log(item.text)})")
			console.log("查看本页使用的所有字符，请于控制台输入：\nApp.data().useString")

			this.interval = setInterval(() => {
				if (this.animateKeyword(i)) i = i == this.motto.length - 1 ? 0 : i + 1
				if (this.changeColor(j)) j = j == this.helloColor.length - 1 ? 0 : j + 1
			}, 10000)
		}
	}
};
Vue.createApp(App).mount('#app');
