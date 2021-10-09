// let newFile = {
// 	type:'javascript'
// }

// ;(function(){console.log(newFile.type);})()

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
					text: "nobody can do everything in somewhere",
					step: 33,
					bit: 33,
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
			return false;
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
			let i = 1;

			document.querySelector('.colorinfo').style.width = '1ch'
			console.log("查看本页使用的所有色彩，请于控制台输入：\nApp.data().colorfrom.forEach((item)=>{console.log(item)})");

			this.interval = setInterval(() => {
				if (this.animateKeyword(i)) i = i == this.motto.length - 1 ? 0 : i + 1;
			}, 9999)
		}
	}
};
Vue.createApp(App).mount('#app');
