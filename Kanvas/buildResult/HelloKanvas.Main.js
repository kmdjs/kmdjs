﻿//create by kmdjs   https://github.com/kmdjs/kmdjs 
(function(n){function l(n,t,u){var f=i.createElement("script"),s;u&&(s=isFunction(u)?u(n):u,s&&(f.charset=s)),a(f,t,n),f.async=!0,f.src=n,o=f,e?r.insertBefore(f,e):r.appendChild(f),o=null}function a(n,t,i){function u(i){n.onload=n.onerror=n.onreadystatechange=null,c.debug||r.removeChild(n),n=null,t(i)}var f="onload"in n;f?(n.onload=u,n.onerror=function(){throw"bad request!__"+i+"  404 (Not Found) ";}):n.onreadystatechange=function(){/loaded|complete/.test(n.readyState)&&u()}}function v(n,t){var r,i;if(n.lastIndexOf)return n.lastIndexOf(t);for(r=t.length,i=n.length-1-r;i>-1;i--)if(t===n.substr(i,r))return i;return-1}var h="HelloKanvas",i=document,c={},r=i.head||i.getElementsByTagName("head")[0]||i.documentElement,e=r.getElementsByTagName("base")[0],o,u={},t;u.get=function(n,i){var f,e,o,u,r,s;for(typeof n=="string"&&(n=[n]),r=0,u=n.length;r<u;r++)v(n[r],".")==-1&&(n[r]=h+"."+n[r]);for(f=!0,e=[],r=0,u=n.length;r<u;r++)t.modules[n[r]]?e.push(t.modules[n[r]]):f=!1;if(f)i.apply(null,e);else for(o=0,u=n.length,r=0;r<u;r++)s=[],l(n[r]+".js",function(){if(o++,o==u){for(var r=0;r<u;r++)t.modules[n[r]]&&s.push(t.modules[n[r]]);i.apply(null,s)}})},u.exec=function(n){for(var u,o,s,r=0,f=n.length;r<f;r++){var i=n[r],e=[],h=new Function(i.a,i.b);for(u=0,o=i.d.length;u<o;u++)e.push(t.modules[i.d[u]]);s=h.apply(null,e),t.modules[i.c]=s}},n.kmdjs=u;var f=!1,y=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,s=function(){};s.extend=function(n){function i(){!f&&this.ctor&&this.ctor.apply(this,arguments)}var e=this.prototype,u,r,t;f=!0,u=new this,f=!1;for(t in n)t!="statics"&&(u[t]=typeof n[t]=="function"&&typeof e[t]=="function"&&y.test(n[t])?function(n,t){return function(){var r=this._super,i;return this._super=e[n],i=t.apply(this,arguments),this._super=r,i}}(t,n[t]):n[t]);for(r in this)this.hasOwnProperty(r)&&r!="extend"&&(i[r]=this[r]);if(n.statics)for(t in n.statics)t=="ctor"?n.statics[t].call(i):i[t]=n.statics[t];return i.prototype=u,i.prototype.constructor=i,i.extend=arguments.callee,i},n.__class=s,t={},t.modules={},n.__modules=t.modules,t.all=[{"a":[],"b":"var e=__class.extend({ctor:function(){for(this.audios={},this.res={},this.loadedCount=0,this.resCount=-1,this.FILE_PATTERN=/(\\w+:\\/{2})?((?:\\w+\\.){2}\\w+)?(\\/?[\\S]+\\/|\\/)?([\\w\\-%\\.]+)(?:\\.)(\\w+)?(\\?\\S+)?/i,this.ns=3,this.sounds=[],i=0;i<this.ns;i++)this.sounds.push([]);this.playing=[],this.soundsCount=0},get:function(e){return this.res[e]},loadRes:function(e){this.resCount=e.length;for(var n=0;n<e.length;n++)\"audio\"==this._getTypeByExtension(e[n].src.match(this.FILE_PATTERN)[5])?this.loadAudio(e[n].id,e[n].src):this.loadImage(e[n].id,e[n].src)},loadImage:function(e,n){var t=document.createElement(\"img\"),a=this;t.onload=function(){a._handleLoad(this,e),t.onreadystatechange=null},t.onreadystatechange=function(){(\"loaded\"==t.readyState||\"complete\"==t.readyState)&&(a._handleLoad(this,e),t.onload=null)},t.onerror=function(){},t.src=n},loadAudio:function(e,n){var t=document.createElement(\"audio\");t.autoplay=!1,this.res[e]=t,t.src=null,t.preload=\"auto\",t.onerror=function(){},t.onstalled=function(){};var a=this,o=function(){a.playing[e]=0;for(var t=0;t<a.ns;t++)a.sounds[t][e]=new Audio(n);a.loadedCount++,a.handleProgress(a.loadedCount,a.resCount),a._clean(this),this.removeEventListener&&this.removeEventListener(\"canplaythrough\",o,!1),a.checkComplete()};t.addEventListener(\"canplaythrough\",o,!1),t.src=n,null!=t.load&&t.load()},checkComplete:function(){this.loadedCount===this.resCount&&this.handleComplete()},complete:function(e){this.handleComplete=e},progress:function(e){this.handleProgress=e},playSound:function(e){this.sounds[this.playing[e]][e].play(),++this.playing[e],this.playing[e]>=this.ns&&(this.playing[e]=0)},_handleLoad:function(e,n){this._clean(e),this.res[n]=e,this.loadedCount++,this.handleProgress&&this.handleProgress(this.loadedCount,this.resCount),this.checkComplete()},_getTypeByExtension:function(e){switch(e){case\"jpeg\":case\"jpg\":case\"gif\":case\"png\":case\"webp\":case\"bmp\":return\"img\";case\"ogg\":case\"mp3\":case\"wav\":return\"audio\"}},_clean:function(e){e.onload=null,e.onstalled=null,e.onprogress=null,e.onerror=null}});return e","c":"Kanvas.Loader","d":[]},{"a":[],"b":"var t=__class.extend({statics:{DEG_TO_RAD:.017453292519943295},ctor:function(t,e,n,i,a,s){return this.a=null==t?1:t,this.b=e||0,this.c=n||0,this.d=null==i?1:i,this.tx=a||0,this.ty=s||0,this},identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(e,n,i,a,s,o,r,h,l){if(s%360)var c=s*t.DEG_TO_RAD,u=Math.cos(c),d=Math.sin(c);else u=1,d=0;return o||r?(o*=t.DEG_TO_RAD,r*=t.DEG_TO_RAD,this.append(Math.cos(r),Math.sin(r),-Math.sin(o),Math.cos(o),e,n),this.append(u*i,d*i,-d*a,u*a,0,0)):this.append(u*i,d*i,-d*a,u*a,e,n),(h||l)&&(this.tx-=h*this.a+l*this.c,this.ty-=h*this.b+l*this.d),this},append:function(t,e,n,i,a,s){var o=this.a,r=this.b,h=this.c,l=this.d;return this.a=t*o+e*h,this.b=t*r+e*l,this.c=n*o+i*h,this.d=n*r+i*l,this.tx=a*o+s*h+this.tx,this.ty=a*r+s*l+this.ty,this}});return t","c":"Kanvas.Matrix2D","d":[]},{"a":["Matrix2D"],"b":"var t=__class.extend({ctor:function(){this.scaleX=this.scaleY=1,this.x=this.y=this.rotation=this.regX=this.regY=this.skewX=this.skewY=0,this._matrix=new Matrix2D,this.events={}},updateContext:function(t){var e=this._matrix.identity().appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY);t.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)},on:function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},execEvent:function(t){var e=this.events[t.type];if(e)for(var n=0,i=e.length;i>n;n++)e[n].call(this)}});return t","c":"Kanvas.DisplayObject","d":["Kanvas.Matrix2D"]},{"a":["DisplayObject"],"b":"var e=__modules[\"Kanvas.DisplayObject\"].extend({ctor:function(e){this._super(),this.img=e},draw:function(e){e.drawImage(this.img,0,0)}});return e","c":"Kanvas.Bitmap","d":["Kanvas.DisplayObject"]},{"a":[],"b":"var t=__class.extend({statics:{ctor:function(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.requestInterval=function(t,e){function a(){var o=(new Date).getTime(),r=o-n;r>=e&&(t.call(),n=(new Date).getTime()),i.value=requestAnimFrame(a)}if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setInterval(t,e);var n=(new Date).getTime(),i=new Object;return i.value=requestAnimFrame(a),i},window.clearRequestInterval=function(t){window.cancelAnimationFrame?window.cancelAnimationFrame(t.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(t.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(t.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(t.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(t.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(t.value):clearInterval(t)},this.requestInterval=requestInterval,this.clearRequestInterval=clearRequestInterval}}});return t","c":"Kanvas.RAF","d":[]},{"a":["RAF","DisplayObject"],"b":"var n=__modules[\"Kanvas.DisplayObject\"].extend({ctor:function(n){this._super(),this.option=n,this.currentFrameIndex=0,this.animationFrameIndex=0,this.currentAnimation=\"walk\",this._rect=[0,0,10,10],this.img=this.option.imgs[0];var e=this;this.loop=RAF.requestInterval(function(){var n=e.option,t=n.animations[e.currentAnimation].frames,i=t.length;e.animationFrameIndex++,e.animationFrameIndex>i-1&&(e.animationFrameIndex=0),e._rect=n.frames[t[e.animationFrameIndex]],e._rect.length>4&&(e.img=n.imgs[e._rect[4]])},1e3/this.option.framerate)},draw:function(n){n.drawImage(this.img,this._rect[0],this._rect[1],this._rect[2],this._rect[3],0,0,this._rect[2],this._rect[3])}});return n","c":"Kanvas.Sprite","d":["Kanvas.RAF","Kanvas.DisplayObject"]},{"a":["DisplayObject"],"b":"var e=__modules[\"Kanvas.DisplayObject\"].extend({ctor:function(){this._super(),this.children=[]},draw:function(e){for(var t=0,n=this.children.length;n>t;t++){var i=this.children[t];e.save(),i.updateContext(e),i.draw(e),e.restore()}},add:function(e){arguments.length>1?this.children.push.apply(this.children,Array.prototype.slice.call(arguments)):this.children.push(e)},_getHitChild:function(e,t,n){var i=this.children.length;e.clearRect(0,0,e.canvas.width,e.canvas.height);for(var a=i-1;a>=0;a--){var r=this.children[a];if(e.save(),r.updateContext(e),r.draw(e),e.restore(),e.getImageData(t,n,1,1).data[3]>1)return r}}});return e","c":"Kanvas.Container","d":["Kanvas.DisplayObject"]},{"a":["Container"],"b":"var t=__modules[\"Kanvas.Container\"].extend({ctor:function(t){this._super(),this.canvas=\"string\"==typeof t?document.querySelector(t):t,this.ctx=this.canvas.getContext(\"2d\"),this.width=this.canvas.width,this.height=this.canvas.height,this.hitCanvas=document.createElement(\"canvas\"),this.hitCanvas.width=this.width,this.hitCanvas.height=this.height,this.hitCtx=this.hitCanvas.getContext(\"2d\"),Function.prototype.bind=function(){var t=this,e=Array.prototype.slice.call(arguments),n=e.shift();return function(){return t.apply(n,e.concat(Array.prototype.slice.call(arguments)))}},this.canvas.addEventListener(\"click\",this._handleClick.bind(this),!1),this.offset=this._getXY(this.canvas)},update:function(){this.ctx.clearRect(0,0,this.width,this.height),this.draw(this.ctx)},_handleClick:function(t){var e=this._getHitChild(this.hitCtx,t.pageX-this.offset[0],t.pageY-this.offset[1]);e&&e.execEvent(t)},_getClientXY:function(t){var e=0,n=0;if(t)if(document.documentElement.getBoundingClientRect&&t.getBoundingClientRect){var i={left:0,top:0,right:0,bottom:0};try{i=t.getBoundingClientRect(),n=i.left,e=i.top}catch(a){return alert(1),[0,0]}}else for(;t.offsetParent;)e+=t.offsetTop,n+=t.offsetLeft,t=t.offsetParent;return[n,e]},_getXY:function(t){var e=this._getClientXY(t);return e[0]=e[0]+this._getScrollLeft(),e[1]=e[1]+this._getScrollTop(),e},_getScrollLeft:function(t){var e;return e=t?t.scrollLeft:Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),e||0},_getScrollTop:function(t){var e;return e=t?t.scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop),e||0}});return t","c":"Kanvas.Stage","d":["Kanvas.Container"]},{"a":["DisplayObject"],"b":"var t=__modules[\"Kanvas.DisplayObject\"].extend({ctor:function(t,e,n){this._super(),this.text=t,this.font=e,this.color=n,this.textAlign=\"left\",this.textBaseline=\"top\"},draw:function(t){t.fillStyle=this.color,t.font=this.font,t.textAlign=this.textAlign||\"left\",t.textBaseline=this.textBaseline||\"top\",t.fillText(this.text,0,0)}});return t","c":"Kanvas.Txt","d":["Kanvas.DisplayObject"]},{"a":["DisplayObject"],"b":"var t=__modules[\"Kanvas.DisplayObject\"].extend({ctor:function(t,e,n){this._super(),this.r=t||1,this.color=e||\"black\",this.isHollow=n},draw:function(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),this.isHollow?(t.strokeStyle=this.color,t.stroke()):(t.fillStyle=this.color,t.fill())}});return t","c":"Kanvas.Shape.Circle","d":["Kanvas.DisplayObject"]},{"a":["Loader","Bitmap","Sprite","Stage","Txt","Container","RAF","Circle"],"b":"var e=__class.extend({ctor:function(){var n,e=new Loader;e.loadRes([{id:\"kmd\",src:\"img/kmd.png\"},{id:\"pig\",src:\"img/pig.png\"},{id:\"hero\",src:\"img/hero-m.png\"}]),e.complete(function(){var r=new Bitmap(e.get(\"kmd\"));r.x=100,r.y=100,a.add(r),n=new Bitmap(e.get(\"pig\")),n.x=164,n.y=334,n.regX=64,n.regY=64,a.add(n),n.on(\"click\",function(){alert(\"i am a pig\")});var i={framerate:10,imgs:[e.get(\"hero\"),e.get(\"pig\")],frames:[[64,64,64,64],[128,64,64,64],[192,64,64,64],[256,64,64,64],[320,64,64,64],[384,64,64,64],[448,64,64,64]],animations:{walk:{frames:[0,1,2,3,4,5,6],next:\"run\",speed:2,loop:!1},jump:{}}},t=new Sprite(i);t.y=200,a.add(t)});var a=new Stage(\"#ourCanvas\"),r=new Txt(\"Hello Kanvas!\",\"bold 36px Arial\",\"green\");r.x=140,r.y=100,r.regX=100,r.regY=20,r.skewX=30,r.skewY=-30,r.rotation=20,a.add(r),a.update();var i=new Txt(\"KMD:Kill AMD and CMD!\",\"bold 26px Arial\",\"red\");i.y=400,i.on(\"click\",function(){alert(this.text)});var t=new Txt(\"Click Me!\",\"bold 46px Arial\",\"blue\");t.y=230,t.x=50,t.on(\"click\",function(){alert(this.text)}),a.add(i,t);var o=new Circle(55,\"red\");o.x=30,o.y=30,o.on(\"click\",function(){alert(\"i'm a red ball!\")});var l=new Circle(35,\"green\");l.x=30,l.y=30,l.on(\"click\",function(){alert(\"i'm a green ball!\")});var d=new Circle(18,\"yellow\");d.x=30,d.y=30,a.add(o,l,d);var c=new Container;c.x=268,c.y=58;var g=new Circle(48,\"#777777\"),m=new Txt(\"Container!\",\"bold 16px Arial\",\"white\");m.regX=40,m.regY=8,c.add(g,m),a.add(c),c.on(\"click\",function(){alert(\"i am a Container!\")}),RAF.requestInterval(function(){r.rotation++,n&&n.rotation--,a.update()},15)}});return e","c":"HelloKanvas.Main","d":["Kanvas.Loader","Kanvas.Bitmap","Kanvas.Sprite","Kanvas.Stage","Kanvas.Txt","Kanvas.Container","Kanvas.RAF","Kanvas.Shape.Circle"]}],u.exec(t.all),new t.modules["HelloKanvas.Main"]})(this)