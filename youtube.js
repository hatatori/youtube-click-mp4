

function cria(){

	estilo = "width:40px;height:40px;background-color:tomato;border-radius:100%;display:flex;justify-content:center;align-items:center;position:fixed;top:10px;right:300px;z-index:50;color:white;cursor:pointer;font-size:14;font-family:monospace;"

	div = document.createElement("div");
	div.id="bol"
	div.setAttribute("style",estilo)
	div.innerHTML = "mp3"

	v = document.querySelector("#masthead > #container")

	v.appendChild(div)

	bol.onclick=function(){
		url = window.location.href.match(/v=(.*)/)[1]
		op()
	}

}

window.onload=function(){
	cria()
}


function op(){

	
	url = "https://www.youtube.com/get_video_info?video_id="+url;

	x = new XMLHttpRequest()

	x.open("GET",url,true);
	x.send();

	x.onreadystatechange =function(e){
		if (this.readyState == 4 && this.status == 200){
			s = e.target.response

			u = s.split("&")
			for(i in u){
				if(u[i].match("url_encoded_fmt_stream_map")){
					var v = u[i]
					v = decodeURI(v)
					v = decodeURIComponent(v)
				}

			}


			link2 = v.split("url")
			link2 = link2[2].replace(/&type.+?\".+\"/g,"")
			link2 = link2.replace(/,+?=/g,"")
			.replace(/,quality.+?\&/)
			.replace(/,itag.+?\&/)
			.replace(/undefined.*/,"")
			.replace(/,.+?\".+\"/g,"")
			link2 = link2.substring(1)

			if(link2.match(/itag/g).length > 2)
				link2 = link2.substr(0,link2.lastIndexOf("&itag"))

			window.open(link2)


		}

	}
}