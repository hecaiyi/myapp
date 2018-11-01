mui.plusReady(function() {
//	console.log(11111)
	mui('.mui-bar').on('tap', '.mui-active', function() {
//		console.log(22222)
		mui.openWindow({
			url: 'kind.html',
			id: 'kind.html',
			styles: {
			  
			},
			show: {
				autoShow: true
			},
			waiting: {
				autoShow: true,
				title: '客官正在加载中，请稍后...'
			}
		})
	})
})

var listNav = new Vue({
	el: '#listNav',
	data: {
		list: []
	},
	methods: {
		getKindList: function () {
			var that = this;
			mui.get('http://route.showapi.com/126-2', {
		        showapi_appid: 79062,
		        showapi_sign: 'cd403c88b63d4f04908edb88c4e7a670'
		      }, function (result) {
//		      	console.log(result)
		      })
		}
	},
	created: function () {
		 this.getKindList();
	}
})