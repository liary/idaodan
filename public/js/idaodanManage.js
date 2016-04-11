(function(){
	var idaodan = angular.module("idaodan", ['mdl.directives']);
	
	idaodan.controller("indaodanCtrl",function($scope,$http,$compile,$location,$sce,$timeout){
		
		$scope.page = 0;

		$scope.ilists = [
				{
					"create_time": "2016-04-08 13:32:02",
					"hate": "358",
					"height": "0",
					"id": "17949882",
					"love": "685",
					"name": "陈莴笋",
					"profile_image": "http://mpic.spriteapp.cn/profile/large/2016/03/02/56d6aa8c693f3_mini.jpg",
					"text": "\n        女生为什么要污？\n    ",
					"type": "41",
					"video_uri": "http://mvideo.spriteapp.cn/video/2016/0407/5705dbfdeb477_wpd.mp4",
					"videotime": "0",
					"voicelength": "0",
					"voicetime": "0",
					"voiceuri": "",
					"weixin_url": "http://m.budejie.com/detail-17949882.html/",
					"width": "0"
				},
				{
					"create_time": "2016-04-08 13:26:01",
					"hate": "96",
					"height": "0",
					"id": "17963504",
					"image0": "http://mpic.spriteapp.cn/x/640x400/ugc/2016/04/08/57071bdfb062b.jpg",
					"image1": "http://mpic.spriteapp.cn/x/640x400/ugc/2016/04/08/57071bdfb062b.jpg",
					"image2": "http://mpic.spriteapp.cn/x/640x400/ugc/2016/04/08/57071bdfb062b.jpg",
					"image3": "http://mpic.spriteapp.cn/x/640x400/ugc/2016/04/08/57071bdfb062b.jpg",
					"love": "534",
					"name": "啊上上上上上帝",
					"profile_image": "http://mpic.spriteapp.cn/profile/large/2016/03/23/56f236b30bf65_mini.jpg",
					"text": "\n        你们的老公，拿着不谢\n    ",
					"type": "10",
					"videotime": "0",
					"voicetime": "0",
					"voiceuri": "",
					"weixin_url": "http://m.budejie.com/detail-17963504.html/",
					"width": "0"
				}];
		
		$(".inav li").eq(0).addClass('active');
		$.ajax({
		    type: 'post',
		    url: 'https://route.showapi.com/255-1',
		    dataType: 'jsonp',
		    data: {
		        // "showapi_timestamp": formatterDateTime(),
		         "showapi_appid": '17155', 
		         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  
		 		
		    },
		    jsonp: 'jsonpcallback', 
		    error: function(XmlHttpRequest, textStatus, errorThrown) {
		        alert("操作失败!");
		    },
		    success: function(result) {
		        $timeout(function() {
				  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
				  console.log($scope.ilists)
				});
		    }
		});
		$scope.pageTo = function() {
			if (!$scope.page) {$scope.page = 0};
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.nextPage = function() {
			if (!$scope.page) {$scope.page = 0};
			$scope.page += 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.prePage = function() {
			if (!$scope.page) {$scope.page = 0};
			if($scope.page < 0) {
				return alert("您已经在最前页！");
			}
			$scope.page -= 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		var searchEleBox ;
		var currentPosition,timer;  
	
		$scope.gotop = function() {
			// window.scrollTo(0,0);
			timer = setInterval(function(){
				currentPosition=document.documentElement.scrollTop || document.body.scrollTop;   
				currentPosition-=10;  
				if(currentPosition>0) {  
					window.scrollTo(0,currentPosition);  
				}  else  {  
					window.scrollTo(0,0);  
					clearInterval(timer);  
				}  	
			},1);
		}
		$scope.sShow = function() {
			$scope.isShow = 1;
			$('.i-sr').css('opacity','0.01');
		}
		$scope.sHide = function() {
			$scope.isShow = 0;
			$('.i-sr').css('opacity','1');
		}
		$scope.search = function() {
			var searchParam = $(".isearch").val();
			$scope.sHide();
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "title": searchParam
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        // $scope.ilists = result.showapi_res_body.pagebean.contentlist;
			        $scope.ilists = []
			        var nd = $(".ilist");
			        // $compile(nd)($scope)
			        $timeout(function() {
			        console.log("search")
					  console.log($scope.ilists)
					  $scope.searchParam = searchParam;
					  $scope.gotop();
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $(".isearch").val('');
					});
			    }
			});
		}
		$scope.reclist =   [
			{
				"ct": "2016-04-03 16:30:30.953",
				"img": "http://img5.hao123.com/data/3_ef0ed774b3abce6de096dc295ef5dcdb_430",
				"title": "在一网吧看到的厕所标志，要不要这么污",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.942",
				"img": "http://img.hao123.com/data/3_628128a1fbce7bb68cf76b75db9cf3a5_430",
				"title": "这就尴尬了。",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.930",
				"img": "http://sc3.hao123img.com/data/b7ac0dab66a9ffc2443c3533e82df5b8_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.920",
				"img": "http://sc4.hao123img.com/data/29a573f413ac851a32144358d5cdf1cd_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:00:18.815",
				"img": "http://img.hao123.com/data/3_3fe4e352c0697587ff7ebcd74802d5e6_430",
				"title": "吃了个已婚的鸡",
				"type": 2
			}];
		$scope.trustSrc = function(url){
		    return $sce.trustAsResourceUrl(url);
		}
	});

	idaodan.controller("idaodanCtrl",function($scope,$http,$compile,$location,$sce,$timeout){
		
		$scope.page = 0;
		
		console.log($scope)
		$.ajax({
		    type: 'post',
		    url: 'https://route.showapi.com/255-1',
		    dataType: 'jsonp',
		    data: {
		        // "showapi_timestamp": formatterDateTime(),
		         "showapi_appid": '17155', //这里需要改成自己的appid
		         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
		 		 "type": 29
		    },
		    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
		    error: function(XmlHttpRequest, textStatus, errorThrown) {
		        alert("操作失败!");
		    },
		    success: function(result) {
		        $timeout(function() {
				  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
				  console.log($scope.ilists)
				});
		    }
		});
		
		$(".inav li").eq(3).addClass('active');
		$scope.pageTo = function() {
			if (!$scope.page) {$scope.page = 0};
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 29
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.nextPage = function() {
			if (!$scope.page) {$scope.page = 0};
			$scope.page += 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 29
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.prePage = function() {
			if (!$scope.page) {$scope.page = 0};
			if($scope.page < 0) {
				return alert("您已经在最前页！");
			}
			$scope.page -= 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			         "showapi_appid": '17155', 
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  
			 		 "page": $scope.page,
			 		 "type": 29
			    },
			    jsonp: 'jsonpcallback', 
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		var searchEleBox ;
		var currentPosition,timer;  
	
		$scope.gotop = function() {
			// window.scrollTo(0,0);
			timer = setInterval(function(){
				currentPosition=document.documentElement.scrollTop || document.body.scrollTop;   
				currentPosition-=10;  
				if(currentPosition>0) {  
					window.scrollTo(0,currentPosition);  
				}  else  {  
					window.scrollTo(0,0);  
					clearInterval(timer);  
				}  	
			},1);
		}
		$scope.sShow = function() {
			$scope.isShow = 1;
			$('.i-sr').css('opacity','0.01');
		}
		$scope.sHide = function() {
			$scope.isShow = 0;
			$('.i-sr').css('opacity','1');
		}
		$scope.search = function() {
			var searchParam = $(".isearch").val();
			$scope.sHide();
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			         "showapi_appid": '17155', 
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  
			 		 "title": searchParam,
			 		 "type": 29
			    },
			    jsonp: 'jsonpcallback', 
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        var nd = $(".ilist");
			        $timeout(function() {
			        console.log("search")
					  console.log($scope.ilists)
					  $scope.searchParam = searchParam;
					  $scope.gotop();
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $(".isearch").val('');
					});
			    }
			});
		}
		$scope.reclist =   [
			{
				"ct": "2016-04-03 16:30:30.953",
				"img": "http://img5.hao123.com/data/3_ef0ed774b3abce6de096dc295ef5dcdb_430",
				"title": "在一网吧看到的厕所标志，要不要这么污",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.942",
				"img": "http://img.hao123.com/data/3_628128a1fbce7bb68cf76b75db9cf3a5_430",
				"title": "这就尴尬了。",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.930",
				"img": "http://sc3.hao123img.com/data/b7ac0dab66a9ffc2443c3533e82df5b8_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.920",
				"img": "http://sc4.hao123img.com/data/29a573f413ac851a32144358d5cdf1cd_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:00:18.815",
				"img": "http://img.hao123.com/data/3_3fe4e352c0697587ff7ebcd74802d5e6_430",
				"title": "吃了个已婚的鸡",
				"type": 2
			}];
		$scope.trustSrc = function(url){
		    return $sce.trustAsResourceUrl(url);
		}
	});

	idaodan.controller("pdaodanCtrl",function($scope,$http,$compile,$location,$sce,$timeout){

		$(".inav li").eq(1).addClass('active');
		$scope.page = 0;
		$.ajax({
		    type: 'post',
		    url: 'https://route.showapi.com/255-1',
		    dataType: 'jsonp',
		    data: {
		         "showapi_appid": '17155', 
		         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135', 
		 		 "type": '10'
		    },
		    jsonp: 'jsonpcallback', 
		    error: function(XmlHttpRequest, textStatus, errorThrown) {
		        alert("操作失败!");
		    },
		    success: function(result) {
		        $timeout(function() {
				  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
				  console.log($scope.ilists)
				});
		    }
		});
		$scope.pageTo = function() {
			if (!$scope.page) {$scope.page = 0};
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 10
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.nextPage = function() {
			if (!$scope.page) {$scope.page = 0};
			$scope.page += 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 10
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.prePage = function() {
			if (!$scope.page) {$scope.page = 0};
			if($scope.page < 0) {
				return alert("您已经在最前页！");
			}
			$scope.page -= 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 10
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		var searchEleBox ;
		var currentPosition,timer;  
	
		$scope.gotop = function() {
			// window.scrollTo(0,0);
			timer = setInterval(function(){
				currentPosition=document.documentElement.scrollTop || document.body.scrollTop;   
				currentPosition-=10;  
				if(currentPosition>0) {  
					window.scrollTo(0,currentPosition);  
				}  else  {  
					window.scrollTo(0,0);  
					clearInterval(timer);  
				}  	
			},1);
		}
		$scope.sShow = function() {
			$scope.isShow = 1;
			$('.i-sr').css('opacity','0.01');
		}
		$scope.sHide = function() {
			$scope.isShow = 0;
			$('.i-sr').css('opacity','1');
		}
		$scope.search = function() {
			var searchParam = $(".isearch").val();
			$scope.sHide();
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "title": searchParam,
			 		 "type": 10
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        // $scope.ilists = result.showapi_res_body.pagebean.contentlist;
			        $scope.ilists = []
			        var nd = $(".ilist");
			        // $compile(nd)($scope)
			        $timeout(function() {
			        console.log("search")
					  console.log($scope.ilists)
					  $scope.searchParam = searchParam;
					  $scope.gotop();
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $(".isearch").val('');
					});
			    }
			});
		}
		$scope.reclist =   [
			{
				"ct": "2016-04-03 16:30:30.953",
				"img": "http://img5.hao123.com/data/3_ef0ed774b3abce6de096dc295ef5dcdb_430",
				"title": "在一网吧看到的厕所标志，要不要这么污",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.942",
				"img": "http://img.hao123.com/data/3_628128a1fbce7bb68cf76b75db9cf3a5_430",
				"title": "这就尴尬了。",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.930",
				"img": "http://sc3.hao123img.com/data/b7ac0dab66a9ffc2443c3533e82df5b8_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.920",
				"img": "http://sc4.hao123img.com/data/29a573f413ac851a32144358d5cdf1cd_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:00:18.815",
				"img": "http://img.hao123.com/data/3_3fe4e352c0697587ff7ebcd74802d5e6_430",
				"title": "吃了个已婚的鸡",
				"type": 2
			}];
		$scope.trustSrc = function(url){
		    return $sce.trustAsResourceUrl(url);
		}
	});

	idaodan.controller("vdaodanCtrl",function($scope,$http,$compile,$location,$sce,$timeout){
		
		$scope.page = 0;
		$(".inav li").eq(2).addClass('active');
		$.ajax({
		    type: 'post',
		    url: 'https://route.showapi.com/255-1',
		    dataType: 'jsonp',
		    data: {
		        // "showapi_timestamp": formatterDateTime(),
		         "showapi_appid": '17155', //这里需要改成自己的appid
		         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
		 		 "type": 41
		    },
		    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
		    error: function(XmlHttpRequest, textStatus, errorThrown) {
		        alert("操作失败!");
		    },
		    success: function(result) {
		        // $scope.ilists = result.showapi_res_body.pagebean.contentlist;
		        // console.log("begin")
		        // console.log($scope.ilists)
		        // $compile($(".ilist"))($scope);
		        // console.log($scope)
		        $timeout(function() {
				  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
				  console.log($scope.ilists)
				});
		    }
		});
		$scope.pageTo = function() {
			if (!$scope.page) {$scope.page = 0};
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 41
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.nextPage = function() {
			if (!$scope.page) {$scope.page = 0};
			$scope.page += 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 41
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		$scope.prePage = function() {
			if (!$scope.page) {$scope.page = 0};
			if($scope.page < 0) {
				return alert("您已经在最前页！");
			}
			$scope.page -= 1;
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "page": $scope.page,
			 		 "type": 41
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        $scope.ilists = []
			        console.log("pageto")
			        var nd = $(".ilist");
			        $timeout(function() {
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $scope.gotop();
					});
			    }
			});
		}
		var searchEleBox ;
		var currentPosition,timer;  
	
		$scope.gotop = function() {
			// window.scrollTo(0,0);
			timer = setInterval(function(){
				currentPosition=document.documentElement.scrollTop || document.body.scrollTop;   
				currentPosition-=10;  
				if(currentPosition>0) {  
					window.scrollTo(0,currentPosition);  
				}  else  {  
					window.scrollTo(0,0);  
					clearInterval(timer);  
				}  	
			},1);
		}
		$scope.sShow = function() {
			$scope.isShow = 1;
			$('.i-sr').css('opacity','0.01');
		}
		$scope.sHide = function() {
			$scope.isShow = 0;
			$('.i-sr').css('opacity','1');
		}
		$scope.search = function() {
			var searchParam = $(".isearch").val();
			$scope.sHide();
			$.ajax({
			    type: 'post',
			    url: 'https://route.showapi.com/255-1',
			    dataType: 'jsonp',
			    data: {
			        // "showapi_timestamp": formatterDateTime(),
			         "showapi_appid": '17155', //这里需要改成自己的appid
			         "showapi_sign": '9471c0d3cddd4f55b6765e5f6d904135',  //这里需要改成自己的应用的密钥secret，
			 		 "title": searchParam,
			 		 "type": 41
			    },
			    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
			    error: function(XmlHttpRequest, textStatus, errorThrown) {
			        alert("操作失败!");
			    },
			    success: function(result) {
			        // $scope.ilists = result.showapi_res_body.pagebean.contentlist;
			        $scope.ilists = []
			        var nd = $(".ilist");
			        // $compile(nd)($scope)
			        $timeout(function() {
			        console.log("search")
					  console.log($scope.ilists)
					  $scope.searchParam = searchParam;
					  $scope.gotop();
					  $scope.ilists = result.showapi_res_body.pagebean.contentlist;
					  $(".isearch").val('');
					});
			    }
			});
		}
		$scope.reclist =   [
			{
				"ct": "2016-04-03 16:30:30.953",
				"img": "http://img5.hao123.com/data/3_ef0ed774b3abce6de096dc295ef5dcdb_430",
				"title": "在一网吧看到的厕所标志，要不要这么污",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.942",
				"img": "http://img.hao123.com/data/3_628128a1fbce7bb68cf76b75db9cf3a5_430",
				"title": "这就尴尬了。",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.930",
				"img": "http://sc3.hao123img.com/data/b7ac0dab66a9ffc2443c3533e82df5b8_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:30:30.920",
				"img": "http://sc4.hao123img.com/data/29a573f413ac851a32144358d5cdf1cd_0",
				"title": "第一眼，差点以为妹子没穿",
				"type": 2
			},
			{
				"ct": "2016-04-03 16:00:18.815",
				"img": "http://img.hao123.com/data/3_3fe4e352c0697587ff7ebcd74802d5e6_430",
				"title": "吃了个已婚的鸡",
				"type": 2
			}];
		$scope.trustSrc = function(url){
		    return $sce.trustAsResourceUrl(url);
		}
	});
})();
