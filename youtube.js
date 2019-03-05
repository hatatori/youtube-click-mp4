
  // s = ytplayer.config.args.adaptive_fmts
  s = ytplayer.config.args.url_encoded_fmt_stream_map

  k = decodeURIComponent(s)
  corte = k.split("url=")
  corte.shift()
  d = []
  estilo = "position:fixed;bottom:10px;left:10px;z-index:100;"
  for(i=0;i<corte.length;i++){
    try{
      link = corte[i].split("\&")
      if(i != corte.length-1){
        link.pop()
        link.pop()
      }

      link = link.join("\&")
      //.replace(/\&itag=\d+|,itag=\d+/g,"")
      //.replace(/,itag=\d+/g,"")
      //.replace(/\,/g,"")
      //.replace(/\&itag=\d+/g,"")
      d.push("<a target='blank' href='"+link+"'><button>"+i+"</button></a>")
      console.log(d)
    }catch(err){}
  }

  d = d.join("")
  div = document.createElement("div")
  div.id="bloco"
  div.setAttribute("style",estilo)
  div.innerHTML = d
  document.body.appendChild(div)
