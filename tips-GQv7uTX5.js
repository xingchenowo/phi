const t=hook.define({name:"Tips",description:"Just some tips",contents:[{type:"script",meta:[t=>function(t){!function i(){let n=null;!function(t,e,i,n){let r=null;function a(){r=requestAnimationFrame(a),e()&&(cancelAnimationFrame(r),i(),t.removeEventListener("mousedown",a),t.removeEventListener("mouseup",o),t.removeEventListener("mouseleave",o),t.removeEventListener("touchstart",a),t.removeEventListener("touchend",o),t.removeEventListener("touchcancel",o))}function o(){cancelAnimationFrame(r),n()}t.addEventListener("mousedown",a),t.addEventListener("mouseup",o),t.addEventListener("mouseleave",o),t.addEventListener("touchstart",a,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o)}(t,(()=>(null==n&&(n=performance.now()),performance.now()-n>3473?1:0)),(()=>{hook.fireModal("<p>Tip</p>",`<p>${e.getTip()}</p>`),i()}),(()=>n=null))}()}(t(".title"))]}]}),e={firstTip:null,tips:[],addTip(t,{first:e=!1}={}){e&&(this.firstTip=t);const i=this.tips.reduce(((t,e)=>Math.max(t,e.weight)),0);this.tips.push({content:t,weight:i||1})},getTip(){if(this.firstTip){const t=this.firstTip;return this.firstTip=null,t}this.tips.every((t=>t.weight<1))&&this.tips.forEach((t=>t.weight*=2));const t=this.tips.reduce(((t,e)=>t+e.weight),0),e=Math.random()*t;let i=0;for(const t of this.tips)if(i+=t.weight,e<i)return t.weight*=.5,t.content;throw new Error("NoIdeaException")}};e.addTip("开启tips:tips:tips:tips...",{first:!0}),e.addTip("不提供逆向教程，也不提供谱面下载"),e.addTip("反馈bug时记得带上设备以及浏览器名称和版本号！"),e.addTip("用键盘打歌是怎样的体验？"),e.addTip("<ruby>奥拓普雷<rp>(</rp><rt>Autoplay</rt><rp>)</rp></ruby>先生，永远的音游之光"),e.addTip("上传并选择视频文件播放可以将背景替换为视频！<br><sub>(需要浏览器支持)</sub>"),e.addTip("在【曲名】处输入“/pz”可以打开Phizone的对话框！"),e.addTip("在【曲名】处输入“/random”以加载随机歌曲！"),e.addTip("长按“播放”按钮可以打开皮肤选择器！"),e.addTip("今天又是元气满满的一天~"),e.addTip("lchzh is the best!"),e.addTip('<a href="https://afdian.net/a/lchzh3473"target="_blank">我很可爱，请给我钱</a>'),e.addTip('<b style="background-clip:text;-webkit-background-clip:text;color:transparent;background-image:linear-gradient(90deg,red,orange,lime,blue,magenta);width:fit-content;margin-left:auto;margin-right:auto;">这是一条彩虹色的Tip！</b>'),e.addTip("#锟斤拷锟叫凤拷锟斤拷锟脚碉拷也只锟斤拷Tips]"),e.addTip("flag{qwq}"),e.addTip('<img src="//wsrv.nl/?url=www.digital-typhoon.org/globe/color/1979/2048x2048/GMS179101209.globe.1.jpg"style="width:50vmin;clip-path:circle(49.5%)"/><br>1979-10-12 09:00 UTC'),e.addTip('<code style="white-space:pre;text-align:left;display:inline-block;font-size:1.5em">try{\n  tip(brain.makeATip());\n}\ncatch(NoIdeaException e){\n  e.printStackTrace();\n}</code>');export{t as default};
//# sourceMappingURL=tips-GQv7uTX5.js.map