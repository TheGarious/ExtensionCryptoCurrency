var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.coingecko.com/api/v3/coins/bitcoin", true);
xhr.onreadystatechange = function(channel) {
		var data = JSON.parse(xhr.responseText);
		console.log(data);
		var elm  = document.getElementById("content");
		if(data["stream"] === null){
			var xhrContent = new XMLHttpRequest();
			xhrContent.open("GET", "https://api.twitch.tv/kraken/channels/GamishouTv?client_id=fw2ccsj5a5by6da4u9v1hxpf1mv4vj", true);
			xhrContent.onreadystatechange = function(channel) {
				if(xhrContent.readyState == 4) {
					var data = JSON.parse(xhrContent.responseText);
					elm.innerHTML = '<div>'
						+ "<div class='title'>Stream Offline</div>"
						+"<hr><div><img class='logo' src="+data["logo"]+"></img>"
						+"<div class='game'>" + "" + "</div>";

				}
			};
			xhrContent.send()
		}
		else
		{

		}

};
xhr.send();