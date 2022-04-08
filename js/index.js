(function(){
//	编写入口函数
	var innit = function(){
		listen();
	}
//	监听事件函数
	function listen(){
		sendBtn.addEventListener('click',listenInputEvent)
		
	}
	
	window.onkeydown = function(e){
		if(e.which == 13){
			listenInputEvent()
		}
	}
		
	
	function listenInputEvent(){
		var text = inputNode.value;
		if(text){
			render(text,"right");
			ajaxsend(text);
			inputNode.value = null;
		}
		
	}
	
	function ajaxsend(txt){
		ajax({
			url:"https://api.hyfarsight.com/test/testRequest/robotChat",
			method: "POST",
	        data: { txt: txt },
	        onSuccess: function (res) {
	        render(res.responseTxt, 'left');
	        }
		})
	}
	
	
//	渲染聊天内容
	function render(text,direct){
		if(direct == "right"){
			renderHtml(text,"./img/avatar.jpg","avatar-container")
		}else{
			renderHtml(text,"./img/robot.jpg","robot-container")
		}
	}
	function renderHtml(text,url,name){
        var chatcontainer = document.createElement("div");
        chatcontainer.className = "chat-container " +name;
        var img = document.createElement("img");
        img.src = url;
        var chattxt = document.createElement("div");
        chattxt.className = "chat-txt";
        chattxt.innerHTML = text;
        chatcontainer.append(img);
        chatcontainer.append(chattxt);
        contentContainer.append(chatcontainer);
	}

	innit();
})();

