// Garden Gnome Software - Skin
// Pano2VR 7.1.2/20913
// Filename: ????VR-SKIN (2).ggsk
// Generated 2025-04-22T17:30:20

function pano2vrSkin(player,base) {
	player.addVariable('vis_aptInfo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aptInfo_pc', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_logo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hide', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hambur', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aptinfo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_ad', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_lanhouse', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_films', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__header=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:280px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__header.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__header.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__header.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__header.style.transition='';
				if (me.__header.ggCurrentLogicStateVisible == 0) {
					me.__header.style.visibility=(Number(me.__header.style.opacity)>0||!me.__header.style.opacity)?'inherit':'hidden';
					me.__header.ggVisible=true;
				}
				else {
					me.__header.style.visibility="hidden";
					me.__header.ggVisible=false;
				}
			}
		}
		me.__header.logicBlock_visible();
		me.__header.ggUpdatePosition=function (useTransition) {
		}
		el=me.__82=document.createElement('div');
		el.ggId="\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:2px 2px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__82.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__82.ggUpdatePosition=function (useTransition) {
		}
		el=me._title=document.createElement('div');
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		hs+='margin:0 20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		el=me.__84=document.createElement('div');
		el.ggId="\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__84.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__84.ggUpdatePosition=function (useTransition) {
		}
		me._title.appendChild(me.__84);
		el=me.__83=document.createElement('div');
		els=me.__83__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__83.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__83.ggUpdateText();
		player.addListener('changenode', function() {
			me.__83.ggUpdateText();
		});
		el.appendChild(els);
		me.__83.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__83.ggUpdatePosition=function (useTransition) {
		}
		me._title.appendChild(me.__83);
		me.__82.appendChild(me._title);
		el=me._hamburgar=document.createElement('div');
		el.ggId="hamburgar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		hs+='margin:0 20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hamburgar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hamburgar.onclick=function (e) {
			player.openUrl("https:\/\/woozipsa.com\/","");
		}
		me._hamburgar.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 53px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._hamburgar.appendChild(me._image_1);
		me.__82.appendChild(me._hamburgar);
		me.__header.appendChild(me.__82);
		me.divSkin.appendChild(me.__header);
		el=me.__75=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\ud0c0\uc785\/\uacf5\uac04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 48%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__75.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__75.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__75.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__75.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__75.style.transition='';
				if (me.__75.ggCurrentLogicStateVisible == 0) {
					me.__75.style.visibility=(Number(me.__75.style.opacity)>0||!me.__75.style.opacity)?'inherit':'hidden';
					me.__75.ggVisible=true;
				}
				else {
					me.__75.style.visibility="hidden";
					me.__75.ggVisible=false;
				}
			}
		}
		me.__75.logicBlock_visible();
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		el=me.__79=document.createElement('div');
		el.ggId="\ud0c0\uc785";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__79.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__79.ggUpdatePosition=function (useTransition) {
		}
		el=me.__80=document.createElement('div');
		el.ggId="\ud0c0\uc785-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 9px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__80.ggUpdatePosition=function (useTransition) {
		}
		el=me.__81=document.createElement('div');
		els=me.__81__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785-\ud3c9\ud615";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Mukta\", sans-serif; font-weight: 700; font-style: normal;";
		els.setAttribute('style',hs);
		me.__81.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("%1 TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__81.ggUpdateText();
		player.addListener('changenode', function() {
			me.__81.ggUpdateText();
		});
		el.appendChild(els);
		me.__81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__81.ggUpdatePosition=function (useTransition) {
		}
		me.__80.appendChild(me.__81);
		me.__79.appendChild(me.__80);
		me.__75.appendChild(me.__79);
		el=me.__76=document.createElement('div');
		el.ggId="\uacf5\uac04";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		el.ggId="\uacf5\uac04-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 9px;';
		hs+='height : 99%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		el=me.__78=document.createElement('div');
		els=me.__78__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04-\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__78.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__78.ggUpdateText();
		player.addListener('changenode', function() {
			me.__78.ggUpdateText();
		});
		el.appendChild(els);
		me.__78.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__78.ggUpdatePosition=function (useTransition) {
		}
		me.__77.appendChild(me.__78);
		me.__76.appendChild(me.__77);
		me.__75.appendChild(me.__76);
		me.divSkin.appendChild(me.__75);
		el=me.__74=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((98% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__74.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__74.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__74.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__74.style.transition='';
				if (me.__74.ggCurrentLogicStateVisible == 0) {
					me.__74.style.visibility=(Number(me.__74.style.opacity)>0||!me.__74.style.opacity)?'inherit':'hidden';
					me.__74.ggVisible=true;
				}
				else {
					me.__74.style.visibility="hidden";
					me.__74.ggVisible=false;
				}
			}
		}
		me.__74.logicBlock_visible();
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_right';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="right";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((49px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._right);
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC42Mjc0NTEiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._svg_2_1);
		me.__74.appendChild(me._container_3);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_left';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((49px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._left);
		el=me._svg_1_1=document.createElement('div');
		els=me._svg_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC42Mjc0NTEiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._svg_1_1);
		me.__74.appendChild(me._container_4);
		me.divSkin.appendChild(me.__74);
		el=me.__67=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9_\uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__67.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__67.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__67.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__67.style.transition='';
				if (me.__67.ggCurrentLogicStateVisible == 0) {
					me.__67.style.visibility=(Number(me.__67.style.opacity)>0||!me.__67.style.opacity)?'inherit':'hidden';
					me.__67.ggVisible=true;
				}
				else {
					me.__67.style.visibility="hidden";
					me.__67.ggVisible=false;
				}
			}
		}
		me.__67.logicBlock_visible();
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__68=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me.__71=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_10=document.createElement('div');
		els=me._scrollarea_10__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 269.336px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 575px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_10.ggScrollByX = function(diffX) {
			if(!me._scrollarea_10.ggHorScrollVisible || diffX == 0 || me._scrollarea_10.ggHPercentVisible >= 1.0) return;
			me._scrollarea_10.ggScrollPosX = (me._scrollarea_10__horScrollFg.offsetLeft + diffX);
			me._scrollarea_10.ggScrollPosX = Math.max(me._scrollarea_10.ggScrollPosX, 0);
			me._scrollarea_10.ggScrollPosX = Math.min(me._scrollarea_10.ggScrollPosX, me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth);
			me._scrollarea_10__horScrollFg.style.left = me._scrollarea_10.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_10.ggScrollPosX / (me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth);
			me._scrollarea_10__content.style.left = -(Math.round((me._scrollarea_10.ggContentWidth * (1.0 - me._scrollarea_10.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_10.ggContentLeftOffset + 'px';
			me._scrollarea_10.ggScrollPosXPercent = (me._scrollarea_10__horScrollFg.offsetLeft / me._scrollarea_10__horScrollBg.offsetWidth);
		}
		me._scrollarea_10.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_10.ggHorScrollVisible || diffX == 0 || me._scrollarea_10.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_10.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_10.ggScrollPosX >= me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth)) {
					me._scrollarea_10.ggScrollPosX = Math.min(me._scrollarea_10.ggScrollPosX, me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_10.ggScrollPosX <= 0)) {
					me._scrollarea_10.ggScrollPosX = Math.max(me._scrollarea_10.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_10__horScrollFg.style.left = me._scrollarea_10.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_10.ggScrollPosX / (me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth);
			me._scrollarea_10__content.style.left = -(Math.round((me._scrollarea_10.ggContentWidth * (1.0 - me._scrollarea_10.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_10.ggContentLeftOffset + 'px';
			me._scrollarea_10.ggScrollPosXPercent = (me._scrollarea_10__horScrollFg.offsetLeft / me._scrollarea_10__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_10.ggScrollByY = function(diffY) {
			if(!me._scrollarea_10.ggVertScrollVisible || diffY == 0 || me._scrollarea_10.ggVPercentVisible >= 1.0) return;
			me._scrollarea_10.ggScrollPosY = (me._scrollarea_10__vertScrollFg.offsetTop + diffY);
			me._scrollarea_10.ggScrollPosY = Math.max(me._scrollarea_10.ggScrollPosY, 0);
			me._scrollarea_10.ggScrollPosY = Math.min(me._scrollarea_10.ggScrollPosY, me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
			me._scrollarea_10__vertScrollFg.style.top = me._scrollarea_10.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_10.ggScrollPosY / (me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
			me._scrollarea_10__content.style.top = -(Math.round((me._scrollarea_10.ggContentHeight * (1.0 - me._scrollarea_10.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_10.ggContentTopOffset + 'px';
			me._scrollarea_10.ggScrollPosYPercent = (me._scrollarea_10__vertScrollFg.offsetTop / me._scrollarea_10__vertScrollBg.offsetHeight);
		}
		me._scrollarea_10.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_10.ggVertScrollVisible || diffY == 0 || me._scrollarea_10.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_10.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_10.ggScrollPosY >= me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight)) {
					me._scrollarea_10.ggScrollPosY = Math.min(me._scrollarea_10.ggScrollPosY, me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_10.ggScrollPosY <= 0)) {
					me._scrollarea_10.ggScrollPosY = Math.max(me._scrollarea_10.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_10__vertScrollFg.style.top = me._scrollarea_10.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_10.ggScrollPosY / (me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
			me._scrollarea_10__content.style.top = -(Math.round((me._scrollarea_10.ggContentHeight * (1.0 - me._scrollarea_10.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_10.ggContentTopOffset + 'px';
			me._scrollarea_10.ggScrollPosYPercent = (me._scrollarea_10__vertScrollFg.offsetTop / me._scrollarea_10__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_10.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_10.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_10.ggHPercentVisible);
					me._scrollarea_10.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_10.clientWidth - (me._scrollarea_10.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_10.clientWidth - (me._scrollarea_10.ggVertScrollVisible ? 2 : 0))) * me._scrollarea_10.ggHPercentVisible);
					me._scrollarea_10.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_10.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_10.ggVPercentVisible);
					me._scrollarea_10.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_10.clientHeight - (me._scrollarea_10.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_10.clientHeight - (me._scrollarea_10.ggHorScrollVisible ? 2 : 0))) * me._scrollarea_10.ggVPercentVisible);
					me._scrollarea_10.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_10__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_10.ggDragInertiaX *= 0.96;
				me._scrollarea_10.ggDragInertiaY *= 0.96;
				me._scrollarea_10.ggScrollByX(me._scrollarea_10.ggDragInertiaX);
				me._scrollarea_10.ggScrollByY(me._scrollarea_10.ggDragInertiaY);
				if (Math.abs(me._scrollarea_10.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_10.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_10__content.onmouseup = null;
			me._scrollarea_10__content.onmousemove = null;
			me._scrollarea_10__content.ontouchend = null;
			me._scrollarea_10__content.ontouchmove = null;
			me._scrollarea_10__content.onpointerup = null;
			me._scrollarea_10__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_10.ggIsDragging = false; }, 100);
		}
		me._scrollarea_10__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_10.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_10.ggDragStartY) > 10) me._scrollarea_10.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_10.ggDragLastX) * me._scrollarea_10.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_10.ggDragLastY) * me._scrollarea_10.ggVPercentVisible;
			me._scrollarea_10.ggDragInertiaX = -diffX;
			me._scrollarea_10.ggDragInertiaY = -diffY;
			me._scrollarea_10.ggDragLastX = eventX;
			me._scrollarea_10.ggDragLastY = eventY;
			me._scrollarea_10.ggScrollByX(-diffX);
			me._scrollarea_10.ggScrollByY(-diffY);
		}
		me._scrollarea_10__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_10.ggDragLastX = me._scrollarea_10.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_10.ggDragLastY = me._scrollarea_10.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_10__content.onmouseup = me._scrollarea_10__content.mousetouchend;
			me._scrollarea_10__content.ontouchend = me._scrollarea_10__content.mousetouchend;
			me._scrollarea_10__content.onmousemove = me._scrollarea_10__content.mousetouchmove;
			me._scrollarea_10__content.ontouchmove = me._scrollarea_10__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_10__content.onpointerup = me._scrollarea_10__content.ontouchend;
				me._scrollarea_10__content.onpointermove = me._scrollarea_10__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_10__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_10__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_10__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_10__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_10__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_10.ggScrollPosY = 0;
		me._scrollarea_10.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_10.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_10.ggDragInertiaY *= 0.96;
					me._scrollarea_10.ggScrollByY(me._scrollarea_10.ggDragInertiaY);
					if (Math.abs(me._scrollarea_10.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_10.ggDragLastY;
				me._scrollarea_10.ggDragInertiaY = diffY;
				me._scrollarea_10.ggDragLastY = e.clientY;
				me._scrollarea_10.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_10.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_10.ggDragInertiaY *= 0.96;
					me._scrollarea_10.ggScrollByY(me._scrollarea_10.ggDragInertiaY);
					if (Math.abs(me._scrollarea_10.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_10.ggDragLastY;
				me._scrollarea_10.ggDragInertiaY = diffY;
				me._scrollarea_10.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_10.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_10.ggScrollHeight;
			if (e.offsetY < me._scrollarea_10.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_10.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_10__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_10.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_10.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_10.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_10.ggScrollByYSmooth(30 * me._scrollarea_10.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_10__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : -10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_10.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_10.ggScrollPosY / me._scrollarea_10.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_10__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_10__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_10.ggVertScrollVisible = true;
				if(me._scrollarea_10.ggVertScrollVisible) {
					me._scrollarea_10.ggAvailableWidth = me._scrollarea_10.clientWidth - 2;
					if (me._scrollarea_10.ggHorScrollVisible) {
						me._scrollarea_10.ggAvailableHeight = me._scrollarea_10.clientHeight - 2;
						me._scrollarea_10.ggAvailableHeightWithScale = me._scrollarea_10.getBoundingClientRect().height - me._scrollarea_10__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_10__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_10.ggAvailableHeight = me._scrollarea_10.clientHeight;
						me._scrollarea_10.ggAvailableHeightWithScale = me._scrollarea_10.getBoundingClientRect().height;
						me._scrollarea_10__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_10__vertScrollBg.style.height = me._scrollarea_10.ggAvailableHeight + 'px';
					me._scrollarea_10.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_10.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_10.ggVPercentVisible > 1.0) me._scrollarea_10.ggVPercentVisible = 1.0;
					me._scrollarea_10.ggScrollHeight =  Math.round(me._scrollarea_10__vertScrollBg.offsetHeight * me._scrollarea_10.ggVPercentVisible);
					me._scrollarea_10__vertScrollFg.style.height = me._scrollarea_10.ggScrollHeight + 'px';
					me._scrollarea_10.ggScrollPosY = me._scrollarea_10.ggScrollPosYPercent * me._scrollarea_10.ggAvailableHeight;
					me._scrollarea_10.ggScrollPosY = Math.min(me._scrollarea_10.ggScrollPosY, me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
					me._scrollarea_10__vertScrollFg.style.top = me._scrollarea_10.ggScrollPosY + 'px';
					if (me._scrollarea_10.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_10.ggScrollPosY / (me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
						me._scrollarea_10__content.style.top = -(Math.round((me._scrollarea_10.ggContentHeight * (1.0 - me._scrollarea_10.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_10.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_10.ggAvailableWidth = me._scrollarea_10.clientWidth;
					me._scrollarea_10.ggScrollPosY = 0;
					me._scrollarea_10.ggScrollPosYPercent = 0.0;
					me._scrollarea_10__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_10__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_10.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_10.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_10);
					me._scrollarea_10.ggUpdatePosition();
				}
			}
		}
		el=me._container_20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__620px_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__620px_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 180;
		el.ggHeight = 110.4;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__620px_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__620px_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__620px_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__620px_.childNodes[currElement].clientHeight < me.__620px_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__620px_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__620px_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__620px_.childNodes[currElement].style.overflow = 'hidden';
						me.__620px_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__620px_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__620px_.childNodes[currElement].scrollHeight);
						me.__620px_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__620px_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__620px_.ggUpdating == true) return;
			me.__620px_.ggUpdating = true;
			var el=me.__620px_;
			var curNumCols = 0;
			curNumCols = me.__620px_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__620px_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__620px_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__620px_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__620px_.getFilteredNodes(tourNodes, filter);
			me.__620px_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__620px_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__620px_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__620px_.ggWidth) + 'px';
				parameter.width=me.__620px_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__620px__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__620px_.ggNodeCount = me.__620px_.ggNumFilterPassed;
			me.__620px_.ggAutoPosition(true);
			me.__620px_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__620px_.parentNode && me.__620px_.parentNode.classList.contains('ggskin_subelement') && me.__620px_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__620px_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-620px \uc774\uc0c1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40.8381%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__620px_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__620px_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 620))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__620px_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__620px_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__620px_.style.transition='';
				if (me.__620px_.ggCurrentLogicStateVisible == 0) {
					me.__620px_.style.visibility=(Number(me.__620px_.style.opacity)>0||!me.__620px_.style.opacity)?'inherit':'hidden';
					me.__620px_.ggVisible=true;
				}
				else {
					me.__620px_.style.visibility="hidden";
					me.__620px_.ggVisible=false;
				}
			}
		}
		me.__620px_.logicBlock_visible();
		me.__620px_.ggCurrentLogicStateVisible = -1;
		me.__620px_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__620px_.childNodes.length; i++) {
				var child=me.__620px_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__620px_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*40.8381)/100.0;
			me.__620px_.ggUpdate();
		}
		me._container_20.appendChild(me.__620px_);
		el=me.__480px_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__480px_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 110;
		el.ggHeight = 88.8;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__480px_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__480px_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__480px_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__480px_.childNodes[currElement].clientHeight < me.__480px_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__480px_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__480px_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__480px_.childNodes[currElement].style.overflow = 'hidden';
						me.__480px_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__480px_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__480px_.childNodes[currElement].scrollHeight);
						me.__480px_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__480px_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__480px_.ggUpdating == true) return;
			me.__480px_.ggUpdating = true;
			var el=me.__480px_;
			var curNumCols = 0;
			curNumCols = me.__480px_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__480px_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__480px_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__480px_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__480px_.getFilteredNodes(tourNodes, filter);
			me.__480px_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__480px_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__480px_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__480px_.ggWidth) + 'px';
				parameter.width=me.__480px_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__480px__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__480px_.ggNodeCount = me.__480px_.ggNumFilterPassed;
			me.__480px_.ggAutoPosition(true);
			me.__480px_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__480px_.parentNode && me.__480px_.parentNode.classList.contains('ggskin_subelement') && me.__480px_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__480px_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-480px \uc774\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32.848%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 110px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__480px_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__480px_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 440)) && 
				((player.getViewerSize(true).width > 390))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__480px_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__480px_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__480px_.style.transition='';
				if (me.__480px_.ggCurrentLogicStateVisible == 0) {
					me.__480px_.style.visibility=(Number(me.__480px_.style.opacity)>0||!me.__480px_.style.opacity)?'inherit':'hidden';
					me.__480px_.ggVisible=true;
				}
				else {
					me.__480px_.style.visibility="hidden";
					me.__480px_.ggVisible=false;
				}
			}
		}
		me.__480px_.logicBlock_visible();
		me.__480px_.ggCurrentLogicStateVisible = -1;
		me.__480px_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__480px_.childNodes.length; i++) {
				var child=me.__480px_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__480px_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*32.848)/100.0;
			me.__480px_.ggUpdate();
		}
		me._container_20.appendChild(me.__480px_);
		el=me.__620_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__620_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 91.2;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__620_.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__620_.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__620_.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__620_.childNodes[currElement].clientHeight < me.__620_.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__620_.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__620_.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__620_.childNodes[currElement].style.overflow = 'hidden';
						me.__620_.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__620_.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__620_.childNodes[currElement].scrollHeight);
						me.__620_.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__620_.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__620_.ggUpdating == true) return;
			me.__620_.ggUpdating = true;
			var el=me.__620_;
			var curNumCols = 0;
			curNumCols = me.__620_.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__620_.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__620_.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__620_.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__620_.getFilteredNodes(tourNodes, filter);
			me.__620_.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__620_.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__620_.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__620_.ggWidth) + 'px';
				parameter.width=me.__620_.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__620__Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__620_.ggNodeCount = me.__620_.ggNumFilterPassed;
			me.__620_.ggAutoPosition(true);
			me.__620_.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__620_.parentNode && me.__620_.parentNode.classList.contains('ggskin_subelement') && me.__620_.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__620_.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-620 \uc774\ud558";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33.7358%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__620_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__620_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 503)) && 
				((player.getViewerSize(true).width < 620))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__620_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__620_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__620_.style.transition='';
				if (me.__620_.ggCurrentLogicStateVisible == 0) {
					me.__620_.style.visibility=(Number(me.__620_.style.opacity)>0||!me.__620_.style.opacity)?'inherit':'hidden';
					me.__620_.ggVisible=true;
				}
				else {
					me.__620_.style.visibility="hidden";
					me.__620_.ggVisible=false;
				}
			}
		}
		me.__620_.logicBlock_visible();
		me.__620_.ggCurrentLogicStateVisible = -1;
		me.__620_.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__620_.childNodes.length; i++) {
				var child=me.__620_.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__620_.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*33.7358)/100.0;
			me.__620_.ggUpdate();
		}
		me._container_20.appendChild(me.__620_);
		el=me.__320px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__320px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 160;
		el.ggHeight = 112.8;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__320px_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__320px_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__320px_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__320px_1.childNodes[currElement].clientHeight < me.__320px_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__320px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__320px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__320px_1.childNodes[currElement].style.overflow = 'hidden';
						me.__320px_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__320px_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__320px_1.childNodes[currElement].scrollHeight);
						me.__320px_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__320px_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__320px_1.ggUpdating == true) return;
			me.__320px_1.ggUpdating = true;
			var el=me.__320px_1;
			var curNumCols = 0;
			curNumCols = me.__320px_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__320px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__320px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__320px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__320px_1.getFilteredNodes(tourNodes, filter);
			me.__320px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__320px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__320px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__320px_1.ggWidth) + 'px';
				parameter.width=me.__320px_1.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__320px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__320px_1.ggNodeCount = me.__320px_1.ggNumFilterPassed;
			me.__320px_1.ggAutoPosition(true);
			me.__320px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__320px_1.parentNode && me.__320px_1.parentNode.classList.contains('ggskin_subelement') && me.__320px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__320px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-320px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41.7258%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 160px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__320px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__320px_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 390))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__320px_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__320px_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__320px_1.style.transition='';
				if (me.__320px_1.ggCurrentLogicStateVisible == 0) {
					me.__320px_1.style.visibility=(Number(me.__320px_1.style.opacity)>0||!me.__320px_1.style.opacity)?'inherit':'hidden';
					me.__320px_1.ggVisible=true;
				}
				else {
					me.__320px_1.style.visibility="hidden";
					me.__320px_1.ggVisible=false;
				}
			}
		}
		me.__320px_1.logicBlock_visible();
		me.__320px_1.ggCurrentLogicStateVisible = -1;
		me.__320px_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__320px_1.childNodes.length; i++) {
				var child=me.__320px_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__320px_1.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*41.7258)/100.0;
			me.__320px_1.ggUpdate();
		}
		me._container_20.appendChild(me.__320px_1);
		el=me.__503px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__503px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 130;
		el.ggHeight = 113;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me.__503px_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me.__503px_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me.__503px_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me.__503px_1.childNodes[currElement].clientHeight < me.__503px_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me.__503px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me.__503px_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me.__503px_1.childNodes[currElement].style.overflow = 'hidden';
						me.__503px_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me.__503px_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me.__503px_1.childNodes[currElement].scrollHeight);
						me.__503px_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me.__503px_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__503px_1.ggUpdating == true) return;
			me.__503px_1.ggUpdating = true;
			var el=me.__503px_1;
			var curNumCols = 0;
			curNumCols = me.__503px_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__503px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__503px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__503px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__503px_1.getFilteredNodes(tourNodes, filter);
			me.__503px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__503px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__503px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__503px_1.ggWidth) + 'px';
				parameter.width=me.__503px_1.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__503px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__503px_1.ggNodeCount = me.__503px_1.ggNumFilterPassed;
			me.__503px_1.ggAutoPosition(true);
			me.__503px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__503px_1.parentNode && me.__503px_1.parentNode.classList.contains('ggskin_subelement') && me.__503px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__503px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-503px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41.7998%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__503px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__503px_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 503)) && 
				((player.getViewerSize(true).width > 440))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__503px_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__503px_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__503px_1.style.transition='';
				if (me.__503px_1.ggCurrentLogicStateVisible == 0) {
					me.__503px_1.style.visibility=(Number(me.__503px_1.style.opacity)>0||!me.__503px_1.style.opacity)?'inherit':'hidden';
					me.__503px_1.ggVisible=true;
				}
				else {
					me.__503px_1.style.visibility="hidden";
					me.__503px_1.ggVisible=false;
				}
			}
		}
		me.__503px_1.logicBlock_visible();
		me.__503px_1.ggCurrentLogicStateVisible = -1;
		me.__503px_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__503px_1.childNodes.length; i++) {
				var child=me.__503px_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__503px_1.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*41.7998)/100.0;
			me.__503px_1.ggUpdate();
		}
		me._container_20.appendChild(me.__503px_1);
		me._scrollarea_10__content.appendChild(me._container_20);
		me.__71.appendChild(me._scrollarea_10);
		el=me._title_1_10=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-title_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_1_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__73=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131-\ub9c9\ub300";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_10.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		els=me.__72__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__72.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ub300\uad6c\uc131", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__72.ggUpdateText();
		el.appendChild(els);
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_10.appendChild(me.__72);
		me.__71.appendChild(me._title_1_10);
		me.__68.appendChild(me.__71);
		el=me.__69=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		els=me.__70__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__70.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__70.ggUpdateText();
		el.appendChild(els);
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		me.__69.appendChild(me.__70);
		el=me._container_13=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_13.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._container_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_23=document.createElement('div');
		els=me._image_23__img=document.createElement('img');
		els.className='ggskin ggskin_image_23';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_23.ggUpdatePosition=function (useTransition) {
		}
		me._container_13.appendChild(me._image_23);
		me.__69.appendChild(me._container_13);
		me.__68.appendChild(me.__69);
		me.__67.appendChild(me.__68);
		me.divSkin.appendChild(me.__67);
		el=me.__main=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8 \uc815\ubcf4-MAIN";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__main.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aptInfo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__main.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__main.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__main.style.transition='';
				if (me.__main.ggCurrentLogicStateVisible == 0) {
					me.__main.style.visibility=(Number(me.__main.style.opacity)>0||!me.__main.style.opacity)?'inherit':'hidden';
					me.__main.ggVisible=true;
				}
				else {
					me.__main.style.visibility="hidden";
					me.__main.ggVisible=false;
				}
			}
		}
		me.__main.logicBlock_visible();
		me.__main.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8 \uc815\ubcf4 \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px 20px 0px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 722px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 553.6px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 2 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 2 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.96;
				me._scrollarea_1.ggDragInertiaY *= 0.96;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 261.12px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 261.12px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 68%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 86.5%;';
		hs+='pointer-events:auto;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._scrollarea_1.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 2) || (!me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 2;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 2;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__65=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__65;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc544\ud30c\ud2b8 \uc870\uac10\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 172px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__66;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__66__img=document.createElement('img');
		els.className='ggskin ggskin__66';
		hs=basePath + 'images/_66.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc870\uac10\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me.__65.appendChild(me.__66);
		me._scrollarea_1__content.appendChild(me.__65);
		el=me.__56=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__56;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc544\ud30c\ud2b8 \uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me._title_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._title_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="title_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__64;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc2a4\ud06c\ub864-\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me._title_1.appendChild(me.__64);
		el=me.__63=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__63;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__63__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud06c\ub864-\uc544\ud30c\ud2b8\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__63.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ub3d9 \uc601\ubb34\uc608\ub2e4\uc74c \ud3ec\ub808\uc2a4\ud2b8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__63.ggUpdateText();
		el.appendChild(els);
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me._title_1.appendChild(me.__63);
		me.__56.appendChild(me._title_1);
		el=me.__57=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__57;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud45c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__62=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__62;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me._td3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._td3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._td3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="td-\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 19%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._td3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc704\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._td3.ggUpdateText();
		el.appendChild(els);
		me._td3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._td3.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me._td3);
		el=me._th2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._th2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._th2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="th-\uc704\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(182,182,182,1);';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 81%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._th2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacbd\uc0c1\ubd81\ub3c4 \uc548\ub3d9\uc2dc \ud48d\uc0b0\uc74d \ub9c9\uace1\ub9ac \uc0b0 14-15\ubc88\uc9c0 \uc77c\ub300", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._th2.ggUpdateText();
		el.appendChild(els);
		me._th2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._th2.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me._th2);
		el=me._line3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._line3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="line-\uc704\uce58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ebebeb;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -12px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line3.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me._line3);
		me.__57.appendChild(me.__62);
		el=me.__61=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__61;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub300\uc9c0\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me._td2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._td2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._td2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="td-\ub300\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 19%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._td2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc9c0\uba74\uc801", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._td2.ggUpdateText();
		el.appendChild(els);
		me._td2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._td2.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me._td2);
		el=me._th1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._th1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._th1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="th-\ub300\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(182,182,182,1);';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 81%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._th1.ggUpdateText=function() {
			var params = [];
			var hs = player._("49,996,000 m", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._th1.ggUpdateText();
		el.appendChild(els);
		me._th1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._th1.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me._th1);
		el=me._line2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._line2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="line-\ub300\uc9c0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ebebeb;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -12px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line2.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me._line2);
		me.__57.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__60;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc5f0\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._td1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._td1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._td1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="td-\uc5f0\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 19%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._td1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc5f0\uba74\uc801\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._td1.ggUpdateText();
		el.appendChild(els);
		me._td1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._td1.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._td1);
		el=me._th0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._th0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._th0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="th-\uc5f0\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(182,182,182,1);';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 81%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._th0.ggUpdateText=function() {
			var params = [];
			var hs = player._("1213223565", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._th0.ggUpdateText();
		el.appendChild(els);
		me._th0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._th0.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._th0);
		el=me._line1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._line1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="line-\uc5f0\uba74\uc801";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ebebeb;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -12px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line1.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._line1);
		me.__57.appendChild(me.__60);
		el=me.__59=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__59;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uac74\ucd95\uaddc\ubaa8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 10%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._td0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._td0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._td0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="td-\uac74\ucd95\uaddc\ubaa8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 19%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._td0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac74\ucd95\uaddc\ubaa8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._td0.ggUpdateText();
		el.appendChild(els);
		me._td0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._td0.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me._td0);
		el=me._th=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._th;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._th__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="th-\uac74\ucd95\uaddc\ubaa8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(182,182,182,1);';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 81%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._th.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc9c0\ud558 1\uce35 - \uc9c0\uc0c1 14~22\uce35", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._th.ggUpdateText();
		el.appendChild(els);
		me._th.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._th.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me._th);
		el=me._line0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._line0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="line-\uac74\ucd95\uaddc\ubaa8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ebebeb;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -12px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line0.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me._line0);
		me.__57.appendChild(me.__59);
		el=me.__58=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__58;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc138\ub300\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me._td=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._td;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._td__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="td-\uc138\ub300\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 19%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._td.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ub300\uc218", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._td.ggUpdateText();
		el.appendChild(els);
		me._td.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._td.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me._td);
		el=me._t4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._t4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._t4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uc138\ub300\uc218";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(182,182,182,1);';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 81%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._t4.ggUpdateText=function() {
			var params = [];
			var hs = player._("75\u3134\u3147\u3139\u3134\u3139\u3134\u3147\u3139\u3134\u3147\u3139\u3134\u3147\u3139\u3134 \n\ucd1d 944\uc138\ub300", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t4.ggUpdateText();
		el.appendChild(els);
		me._t4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t4.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me._t4);
		el=me._line=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._line;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="line-\uc138\ub300\uc218";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ebebeb;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -12px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me._line);
		me.__57.appendChild(me.__58);
		me.__56.appendChild(me.__57);
		me._scrollarea_1__content.appendChild(me.__56);
		el=me.__52=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__52;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc544\uc774\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 440px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__53;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc544\uc774\uc18c-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__55=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__55;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc544\uc774\uc18c-\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__55);
		el=me.__54=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__54;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__54__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\uc774\uc18c-\ud0c0\uc785\uba85";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 900;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__54.ggUpdateText=function() {
			var params = [];
			var hs = player._("75A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__54.ggUpdateText();
		el.appendChild(els);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__54);
		me.__52.appendChild(me.__53);
		el=me._image_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._image_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 283px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 283px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__52.appendChild(me._image_3);
		me._scrollarea_1__content.appendChild(me.__52);
		me.__51.appendChild(me._scrollarea_1);
		me.__48.appendChild(me.__51);
		el=me.__49=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8 \uc815\ubcf4 \ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		els=me.__50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__50.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc544\ud30c\ud2b8 \uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__50.ggUpdateText();
		el.appendChild(els);
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me.__50);
		el=me._container_12=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_12.onclick=function (e) {
			player.setVariableValue('vis_aptInfo', false);
		}
		me._container_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_22=document.createElement('div');
		els=me._image_22__img=document.createElement('img');
		els.className='ggskin ggskin_image_22';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_22.ggUpdatePosition=function (useTransition) {
		}
		me._container_12.appendChild(me._image_22);
		me.__49.appendChild(me._container_12);
		me.__48.appendChild(me.__49);
		me.__main.appendChild(me.__48);
		me.divSkin.appendChild(me.__main);
		el=me.__38=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c - \ud558\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 65px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__38.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38.style.transition='';
				if (me.__38.ggCurrentLogicStateVisible == 0) {
					me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
					me.__38.ggVisible=true;
				}
				else if (me.__38.ggCurrentLogicStateVisible == 1) {
					me.__38.style.visibility="hidden";
					me.__38.ggVisible=false;
				}
				else {
					me.__38.style.visibility="hidden";
					me.__38.ggVisible=false;
				}
			}
		}
		me.__38.logicBlock_visible();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\ud558\ub2e8\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:2px -2px 8px rgba(227,229,232,0.6);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\ud558\ub2e8 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		hs+='display: flex; justify-content: space-between;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		el.ggId="\ud648";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.onclick=function (e) {
				me.__24.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__24.ggUpdateText();
			me.__24.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_ad', !player.getVariableValue('vis_ad'));
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._t3=document.createElement('div');
		els=me._t3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\ud648";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Mukta\", sans-serif; font-weight: 300; font-style: normal;";
		els.setAttribute('style',hs);
		me._t3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd94\ucc9c\uc5c5\uccb4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t3.ggUpdateText();
		el.appendChild(els);
		me._t3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t3.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me._t3);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_12__img.setAttribute('src',basePath + 'images/svg_12.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me._svg_12);
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_13__img.setAttribute('src',basePath + 'images/svg_13.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 13";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me._svg_13);
		me.__41.appendChild(me.__47);
		el=me.__46=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : 22%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', !player.getVariableValue('vis_m_roomMove'));
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNyAzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy45NDQzNCAyMC40NDM1VjI0Ljc3NjRDNy45NDQzNCAyNi45ODU1IDkuNzM1MiAyOC43NzY0IDExLjk0NDMgMjguNzc2NEgyMS45OTlDMjQuMjA4MSAyOC43NzY0IDI1Ljk5OSAyNi45ODU1IDI1Ljk5OSAyNC43NzY0VjVDMjUuOTk5IDIuNzkwODYgMjQuMjA4MSAxIDIxLjk5OSAxSDExLjk0NDNDOS43MzUyIDEgNy45NDQzNCAyLjc5MDg2IDcuOTQ0MzQgNVY5LjMzMjkxIi'+
			'BzdHJva2U9IiMzNDM0MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44ODggMTkuMDUzN0wxOC4zNDc2IDE1LjU5NDFDMTguNzM4MSAxNS4yMDM2IDE4LjczODEgMTQuNTcwNCAxOC4zNDc2IDE0LjE3OTlMMTQuODg4IDEwLjcyMDMiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjY2NjcgMTQuODg4N0wxIDE0Ljg4ODciIHN0cm9rZT0iIzM2MzYzNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=';
		me._svg_15__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 15";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 23px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_15.ggUpdatePosition=function (useTransition) {
		}
		el=me._t2=document.createElement('div');
		els=me._t2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -21px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._t2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t2.ggUpdateText();
		el.appendChild(els);
		me._t2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_15.appendChild(me._t2);
		me.__46.appendChild(me._svg_15);
		me.__41.appendChild(me.__46);
		el=me.__45=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', !player.getVariableValue('vis_aptInfo_pc'));
				me.__29.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/438480?ctype=01&xy=37.0059278,127.1994713,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__29.ggUpdateText();
			me.__29.ggTextDiv.scrollTop = 0;
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNi4yNSAyNy41SDYuMjVDMy43NSAyNy41IDIuNSAyNi4yNSAyLjUgMjMuNzVWMTMuNzVDMi41IDExLjI1IDMuNzUgMTAgNi4yNSAxMEgxMi41VjIzLjc1QzEyLjUgMjYuMjUgMTMuNzUgMjcuNSAxNi4yNSAyNy41WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz'+
			'4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi42Mzc1IDVDMTIuNTM3NSA1LjM3NSAxMi41IDUuNzg3NSAxMi41IDYuMjVWMTBINi4yNVY3LjVDNi4yNSA2LjEyNSA3LjM3NSA1IDguNzUgNUgxMi42Mzc1WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNy41IDEwVjE2LjI1IiBzdHJva2U9IiMzNDM0MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2lu'+
			'PSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIyLjUgMTBWMTYuMjUiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjEuMjUgMjEuMjVIMTguNzVDMTguMDYyNSAyMS4yNSAxNy41IDIxLjgxMjUgMTcuNSAyMi41VjI3LjVIMjIuNVYyMi41QzIyLjUgMjEuODEyNSAyMS45Mzc1IDIxLjI1IDIxLjI1IDIxLjI1WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZW'+
			'NhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjUgMTYuMjVWMjEuMjUiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuNSAyMy43NVY2LjI1QzEyLjUgMy43NSAxMy43NSAyLjUgMTYuMjUgMi41SDIzLjc1QzI2LjI1IDIuNSAyNy41IDMuNzUgMjcuNSA2LjI1VjIzLjc1QzI3LjUgMjYuMjUgMjYuMjUgMjcuNSAy'+
			'My43NSAyNy41SDE2LjI1QzEzLjc1IDI3LjUgMTIuNSAyNi4yNSAxMi41IDIzLjc1WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._t1=document.createElement('div');
		els=me._t1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._t1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd80\ub3d9\uc0b0\uc2dc\uc138", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t1.ggUpdateText();
		el.appendChild(els);
		me._t1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t1.ggUpdatePosition=function (useTransition) {
		}
		me._svg_7.appendChild(me._t1);
		me.__45.appendChild(me._svg_7);
		me.__41.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		el.ggId="\uc790\ub3d9\ud68c\uc804";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 22%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.onclick=function (e) {
			player.toggleAutorotate();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_14=document.createElement('div');
		els=me._svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNiAyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMi45OTc5MyA3Ljg3NUMzLjc2OTIzIDUuNTgzMzMgNi4wMDEyNCAzLjMwMTAxIDcuNzc1NzMgMi4zMzMwMkM5LjU1MDIxIDEuMzY1MDMgMTEuNTU2NiAwLjkwODkwNiAxMy41NzMgMS4wMTUwOEMxNS41ODk0IDEuMTIxMjUgMTcuNTM3MyAxLjc4NTU4IDE5LjIwMTQgMi45MzQ2M0MyMC44NjU0IDQuMDgzNjcgMjIuMTgwOCA1LjY3MjY3IDIzLjAwMjEgNy41MjU5NE0xIDMuMD'+
			'gzNjRMMS45OTgyNiA3LjQyODAzQzIuMTY4MjggOC4xNjc5NyAyLjkwMzE1IDguNjI5MzMgMy42Mzk2MiA4LjQ1ODVMNy45NjM3MSA3LjQ1NTU1TTIzLjAwMjEgMTYuMTI1QzIyLjIzMDggMTguNDE2NyAxOS45OTg4IDIwLjY5OSAxOC4yMjQzIDIxLjY2N0MxNi40NDk4IDIyLjYzNSAxNC40NDM0IDIzLjA5MTEgMTIuNDI3IDIyLjk4NDlDMTAuNDEwNiAyMi44Nzg4IDguNDYyNyAyMi4yMTQ0IDYuNzk4NjQgMjEuMDY1NEM1LjEzNDU4IDE5LjkxNjMgMy44MTkyMSAxOC4zMjczIDIuOTk3OTMgMTYuNDc0MU0yNSAyMC45MTY0TDI0LjAwMTcgMTYuNTcyQzIzLjgzMTcgMTUuODMyIDIzLjA5NjkgMTUu'+
			'MzcwNyAyMi4zNjA0IDE1LjU0MTVMMTguMDM2MyAxNi41NDQ0IiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
		me._svg_14__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 14";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_14.ggUpdatePosition=function (useTransition) {
		}
		el=me._t0=document.createElement('div');
		els=me._t0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -23px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._t0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t0.ggUpdateText();
		el.appendChild(els);
		me._t0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t0.ggUpdatePosition=function (useTransition) {
		}
		me._svg_14.appendChild(me._t0);
		me.__44.appendChild(me._svg_14);
		me.__41.appendChild(me.__44);
		el=me.__42=document.createElement('div');
		el.ggId="\ub9c1\ud06c\uacf5\uc720";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\ub9c1\ud06c\uacf5\uc720 \ubc15\uc2a4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me._t=document.createElement('div');
		els=me._t__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="t-\ub9c1\ud06c\uacf5\uc720";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._t.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._t.ggUpdateText();
		el.appendChild(els);
		me._t.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._t.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._t);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyNiIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTAuMjAwMSAyNUw0LjU2MDAyIDI1QzMuNjk4NDUgMjUgMyAyNC4zMDE2IDMgMjMuNDRMMyAxNy44MDAxTTQuMTk5OTQgMjMuODAwMkwxMi42MDAxIDE1LjQwMDNNMjcgOC4xOTk4OUwyNyAyLjU1OTk4QzI3IDEuNjk4NDMgMjYuMzAxNiAxIDI1LjQ0IDFMMTkuNzk5OSAxTTI1LjggMi4yMDAwNEwxNy4zOTk4IDEwLjU5OTkiIHN0cm9rZT0iIzI2MjYyNiIgc3Ryb2tlLWxpbm'+
			'VjYXA9InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE5Ljc5OTkgMjVMMjUuNDQgMjVDMjYuMzAxNiAyNSAyNyAyNC4zMDE2IDI3IDIzLjQ0TDI3IDE3LjgwMDFNMjUuODAwMSAyMy44MDAyTDE3LjM5OTkgMTUuNDAwM00zIDguMTk5ODlMMyAyLjU1OTk4QzMgMS42OTg0MyAzLjY5ODQ1IDEgNC41NjAwMiAxTDEwLjIwMDEgMU00LjIwMDA0IDIuMjAwMDRMMTIuNjAwMiAxMC41OTk5IiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me._svg_8);
		me.__42.appendChild(me.__43);
		el=me.__110=document.createElement('div');
		els=me.__110__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub9c1\ud06c_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 9px;';
		hs+='color : #000000;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__110.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__110.ggUpdateText();
		el.appendChild(els);
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_logo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__110.style.transition='';
				if (me.__110.ggCurrentLogicStateVisible == 0) {
					me.__110.style.visibility=(Number(me.__110.style.opacity)>0||!me.__110.style.opacity)?'inherit':'hidden';
					me.__110.ggVisible=true;
				}
				else {
					me.__110.style.visibility="hidden";
					me.__110.ggVisible=false;
				}
			}
		}
		me.__110.logicBlock_visible();
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me.__110);
		me.__41.appendChild(me.__42);
		me.__40.appendChild(me.__41);
		me.__38.appendChild(me.__40);
		el=me.__39=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.onclick=function (e) {
				me.__19.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__19.ggUpdateText();
			me.__19.ggTextDiv.scrollTop = 0;
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._rectangle_4);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,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'+
			'4s9n+RAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._image_7);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : -200px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubb34\ub2e8 \uc0ac\uc6a9 \ubc0f \uc7ac\uac00\uacf5\uc744 \uae08\uc9c0\ud569\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._text_1);
		me.__38.appendChild(me.__39);
		me.divSkin.appendChild(me.__38);
		el=me._pc_3=document.createElement('div');
		el.ggId="PC - \ud558\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 57px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc_3.style.transition='';
				if (me._pc_3.ggCurrentLogicStateVisible == 0) {
					me._pc_3.style.visibility=(Number(me._pc_3.style.opacity)>0||!me._pc_3.style.opacity)?'inherit':'hidden';
					me._pc_3.ggVisible=true;
				}
				else {
					me._pc_3.style.visibility="hidden";
					me._pc_3.ggVisible=false;
				}
			}
		}
		me._pc_3.logicBlock_visible();
		me._pc_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pctitle=document.createElement('div');
		el.ggId="pc-title";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		hs+='margin:0 20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pctitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pctitle.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc16=document.createElement('div');
		el.ggId="pc-\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc16.ggUpdatePosition=function (useTransition) {
		}
		me._pctitle.appendChild(me._pc16);
		el=me._pc15=document.createElement('div');
		els=me._pc15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uc544\ud30c\ud2b8\uba85";
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 2px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 4px 0px 0px 10px;';
		hs+='overflow: hidden;';
		hs+="line-height:16px;";
		els.setAttribute('style',hs);
		me._pc15.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc15.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc15.ggUpdateText();
		});
		el.appendChild(els);
		me._pc15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc15.ggUpdatePosition=function (useTransition) {
		}
		me._pctitle.appendChild(me._pc15);
		el=me._pc_10=document.createElement('div');
		el.ggId="pc-\ud0c0\uc785\/\uacf5\uac04_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 370px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(((player._(player.getNodeUserdata('_master').author)).indexOf("21\uc774\ud558") != -1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._pc_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._pc_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._pc_10.style.transition='left 0s, top 0s';
				if (me._pc_10.ggCurrentLogicStatePosition == 0) {
					me._pc_10.style.left='350px';
					me._pc_10.style.top = 'calc(50% - (35px / 2))';
				}
				else {
					me._pc_10.style.left='370px';
					me._pc_10.style.top='calc(50% - ((35px + 0px) / 2) + 0px)';
				}
			}
		}
		me._pc_10.logicBlock_position();
		me._pc_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc12=document.createElement('div');
		el.ggId="pc-\ud0c0\uc785";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc12.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc13=document.createElement('div');
		el.ggId="pc-\ud0c0\uc785-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(54,54,54,0.117647);';
		hs+='border-radius : 9px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc13.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc14=document.createElement('div');
		els=me._pc14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\ud0c0\uc785-\ud3c9\ud615";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Mukta\", sans-serif; font-weight: 700; font-style: normal;";
		els.setAttribute('style',hs);
		me._pc14.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("%1 TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc14.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc14.ggUpdateText();
		});
		el.appendChild(els);
		me._pc14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc14.ggUpdatePosition=function (useTransition) {
		}
		me._pc13.appendChild(me._pc14);
		me._pc12.appendChild(me._pc13);
		me._pc_10.appendChild(me._pc12);
		el=me._pc9=document.createElement('div');
		el.ggId="pc-\uacf5\uac04";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 47%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc9.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc10=document.createElement('div');
		el.ggId="pc-\uacf5\uac04-\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(54,54,54,0.117647);';
		hs+='border-radius : 9px;';
		hs+='height : 99%;';
		hs+='left : calc(50% - ((100% + 2px) / 2) + 0px);';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((99% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc10.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc11=document.createElement('div');
		els=me._pc11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uacf5\uac04-\uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif;";
		els.setAttribute('style',hs);
		me._pc11.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc11.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc11.ggUpdateText();
		});
		el.appendChild(els);
		me._pc11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc11.ggUpdatePosition=function (useTransition) {
		}
		me._pc10.appendChild(me._pc11);
		me._pc9.appendChild(me._pc10);
		me._pc_10.appendChild(me._pc9);
		me._pctitle.appendChild(me._pc_10);
		me._rectangle_2.appendChild(me._pctitle);
		el=me._pc8=document.createElement('div');
		el.ggId="pc\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 122px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc8.onclick=function (e) {
			player.setVariableValue('vis_lanhouse', !player.getVariableValue('vis_lanhouse'));
				me.__19.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__19.ggUpdateText();
			me.__19.ggTextDiv.scrollTop = 0;
		}
		me._pc8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		els=me.__37__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,0.705882);';
		hs+='height : 100%;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : -57px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__37.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubb34\ub2e8 \uc0ac\uc6a9 \ubc0f \uc7ac\uac00\uacf5\uc744 \uae08\uc9c0\ud569\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__37.ggUpdateText();
		el.appendChild(els);
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me._pc8.appendChild(me.__37);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._pc8.appendChild(me._image_5);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._pc8.appendChild(me._image_4);
		me._rectangle_2.appendChild(me._pc8);
		me._pc_3.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me._pc_3);
		el=me._pc_1=document.createElement('div');
		el.ggId="PC -\uc67c\ucabd \uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		hs+='box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc_1.style.transition='';
				if (me._pc_1.ggCurrentLogicStateVisible == 0) {
					me._pc_1.style.visibility=(Number(me._pc_1.style.opacity)>0||!me._pc_1.style.opacity)?'inherit':'hidden';
					me._pc_1.ggVisible=true;
				}
				else {
					me._pc_1.style.visibility="hidden";
					me._pc_1.ggVisible=false;
				}
			}
		}
		me._pc_1.logicBlock_visible();
		me._pc_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\uc0c1\ub2e8 \uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		hs+='display: flex; justify-content: space-between;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc7=document.createElement('div');
		el.ggId="pc-\ud648";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc7.onclick=function (e) {
				me.__24.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__24.ggUpdateText();
			me.__24.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_ad', !player.getVariableValue('vis_ad'));
		}
		me._pc7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_3__img.setAttribute('src',basePath + 'images/svg_3.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=-2;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) - 1px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_3.style.transition='';
				if (me._svg_3.ggCurrentLogicStateVisible == 0) {
					me._svg_3.style.visibility=(Number(me._svg_3.style.opacity)>0||!me._svg_3.style.opacity)?'inherit':'hidden';
					me._svg_3.ggVisible=true;
				}
				else {
					me._svg_3.style.visibility="hidden";
					me._svg_3.ggVisible=false;
				}
			}
		}
		me._svg_3.logicBlock_visible();
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._svg_3);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_9__img.setAttribute('src',basePath + 'images/svg_9.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=-2;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) - 1px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_9.style.transition='';
				if (me._svg_9.ggCurrentLogicStateVisible == 0) {
					me._svg_9.style.visibility=(Number(me._svg_9.style.opacity)>0||!me._svg_9.style.opacity)?'inherit':'hidden';
					me._svg_9.ggVisible=true;
				}
				else {
					me._svg_9.style.visibility="hidden";
					me._svg_9.ggVisible=false;
				}
			}
		}
		me._svg_9.logicBlock_visible();
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._svg_9);
		el=me._pct3=document.createElement('div');
		els=me._pct3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\ud648";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -10px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pct3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd94\ucc9c\uc5c5\uccb4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct3.ggUpdateText();
		el.appendChild(els);
		me._pct3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct3.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._pct3);
		me.__36.appendChild(me._pc7);
		el=me._pc6=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 135px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc6.onclick=function (e) {
			player.setVariableValue('vis_roomMove', !player.getVariableValue('vis_roomMove'));
		}
		me._pc6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNyAzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNy45NDQzNCAyMC40NDM1VjI0Ljc3NjRDNy45NDQzNCAyNi45ODU1IDkuNzM1MiAyOC43NzY0IDExLjk0NDMgMjguNzc2NEgyMS45OTlDMjQuMjA4MSAyOC43NzY0IDI1Ljk5OSAyNi45ODU1IDI1Ljk5OSAyNC43NzY0VjVDMjUuOTk5IDIuNzkwODYgMjQuMjA4MSAxIDIxLjk5OSAxSDExLjk0NDNDOS43MzUyIDEgNy45NDQzNCAyLjc5MDg2IDcuOTQ0MzQgNVY5LjMzMjkxIi'+
			'BzdHJva2U9IiMzNDM0MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xNC44ODggMTkuMDUzN0wxOC4zNDc2IDE1LjU5NDFDMTguNzM4MSAxNS4yMDM2IDE4LjczODEgMTQuNTcwNCAxOC4zNDc2IDE0LjE3OTlMMTQuODg4IDEwLjcyMDMiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE3LjY2NjcgMTQuODg4N0wxIDE0Ljg4ODciIHN0cm9rZT0iIzM2MzYzNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct2=document.createElement('div');
		els=me._pct2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct2.ggUpdateText();
		el.appendChild(els);
		me._pct2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct2.ggUpdatePosition=function (useTransition) {
		}
		me._svg_11.appendChild(me._pct2);
		me._pc6.appendChild(me._svg_11);
		me.__36.appendChild(me._pc6);
		el=me._pc5=document.createElement('div');
		el.ggId="pc-\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc5.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', !player.getVariableValue('vis_aptInfo_pc'));
				me.__29.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/730325?ctype=05&xy=37.4828631,126.8690924,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__29.ggUpdateText();
			me.__29.ggTextDiv.scrollTop = 0;
		}
		me._pc5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMCAzMCIgaGVpZ2h0PSIzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNi4yNSAyNy41SDYuMjVDMy43NSAyNy41IDIuNSAyNi4yNSAyLjUgMjMuNzVWMTMuNzVDMi41IDExLjI1IDMuNzUgMTAgNi4yNSAxMEgxMi41VjIzLjc1QzEyLjUgMjYuMjUgMTMuNzUgMjcuNSAxNi4yNSAyNy41WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz'+
			'4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi42Mzc1IDVDMTIuNTM3NSA1LjM3NSAxMi41IDUuNzg3NSAxMi41IDYuMjVWMTBINi4yNVY3LjVDNi4yNSA2LjEyNSA3LjM3NSA1IDguNzUgNUgxMi42Mzc1WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNy41IDEwVjE2LjI1IiBzdHJva2U9IiMzNDM0MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2lu'+
			'PSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIyLjUgMTBWMTYuMjUiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjEuMjUgMjEuMjVIMTguNzVDMTguMDYyNSAyMS4yNSAxNy41IDIxLjgxMjUgMTcuNSAyMi41VjI3LjVIMjIuNVYyMi41QzIyLjUgMjEuODEyNSAyMS45Mzc1IDIxLjI1IDIxLjI1IDIxLjI1WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZW'+
			'NhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjUgMTYuMjVWMjEuMjUiIHN0cm9rZT0iIzM0MzQzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuNSAyMy43NVY2LjI1QzEyLjUgMy43NSAxMy43NSAyLjUgMTYuMjUgMi41SDIzLjc1QzI2LjI1IDIuNSAyNy41IDMuNzUgMjcuNSA2LjI1VjIzLjc1QzI3LjUgMjYuMjUgMjYuMjUgMjcuNSAy'+
			'My43NSAyNy41SDE2LjI1QzEzLjc1IDI3LjUgMTIuNSAyNi4yNSAxMi41IDIzLjc1WiIgc3Ryb2tlPSIjMzQzNDM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct1=document.createElement('div');
		els=me._pct1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\uc544\ud30c\ud2b8\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubd80\ub3d9\uc0b0\uc2dc\uc138", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct1.ggUpdateText();
		el.appendChild(els);
		me._pct1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct1.ggUpdatePosition=function (useTransition) {
		}
		me._svg_10.appendChild(me._pct1);
		me._pc5.appendChild(me._svg_10);
		me.__36.appendChild(me._pc5);
		el=me._pc4=document.createElement('div');
		el.ggId="pc-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc4.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._pc4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNiAyNCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMi45OTc5MyA3Ljg3NUMzLjc2OTIzIDUuNTgzMzMgNi4wMDEyNCAzLjMwMTAxIDcuNzc1NzMgMi4zMzMwMkM5LjU1MDIxIDEuMzY1MDMgMTEuNTU2NiAwLjkwODkwNiAxMy41NzMgMS4wMTUwOEMxNS41ODk0IDEuMTIxMjUgMTcuNTM3MyAxLjc4NTU4IDE5LjIwMTQgMi45MzQ2M0MyMC44NjU0IDQuMDgzNjcgMjIuMTgwOCA1LjY3MjY3IDIzLjAwMjEgNy41MjU5NE0xIDMuMD'+
			'gzNjRMMS45OTgyNiA3LjQyODAzQzIuMTY4MjggOC4xNjc5NyAyLjkwMzE1IDguNjI5MzMgMy42Mzk2MiA4LjQ1ODVMNy45NjM3MSA3LjQ1NTU1TTIzLjAwMjEgMTYuMTI1QzIyLjIzMDggMTguNDE2NyAxOS45OTg4IDIwLjY5OSAxOC4yMjQzIDIxLjY2N0MxNi40NDk4IDIyLjYzNSAxNC40NDM0IDIzLjA5MTEgMTIuNDI3IDIyLjk4NDlDMTAuNDEwNiAyMi44Nzg4IDguNDYyNyAyMi4yMTQ0IDYuNzk4NjQgMjEuMDY1NEM1LjEzNDU4IDE5LjkxNjMgMy44MTkyMSAxOC4zMjczIDIuOTk3OTMgMTYuNDc0MU0yNSAyMC45MTY0TDI0LjAwMTcgMTYuNTcyQzIzLjgzMTcgMTUuODMyIDIzLjA5NjkgMTUu'+
			'MzcwNyAyMi4zNjA0IDE1LjU0MTVMMTguMDM2MyAxNi41NDQ0IiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct0=document.createElement('div');
		els=me._pct0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\uc790\ub3d9\ud68c\uc804";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -26px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc790\ub3d9\ud68c\uc804", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct0.ggUpdateText();
		el.appendChild(els);
		me._pct0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct0.ggUpdatePosition=function (useTransition) {
		}
		me._svg_5.appendChild(me._pct0);
		me._pc4.appendChild(me._svg_5);
		me.__36.appendChild(me._pc4);
		el=me._pc3=document.createElement('div');
		el.ggId="pc-\ub9c1\ud06c\uacf5\uc720";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 265px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc3.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._pc3.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_2=document.createElement('div');
		el.ggId="pc-\ub9c1\ud06c\uacf5\uc720 \ubc15\uc2a4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyNiIgaGVpZ2h0PSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTAuMjAwMSAyNUw0LjU2MDAyIDI1QzMuNjk4NDUgMjUgMyAyNC4zMDE2IDMgMjMuNDRMMyAxNy44MDAxTTQuMTk5OTQgMjMuODAwMkwxMi42MDAxIDE1LjQwMDNNMjcgOC4xOTk4OUwyNyAyLjU1OTk4QzI3IDEuNjk4NDMgMjYuMzAxNiAxIDI1LjQ0IDFMMTkuNzk5OSAxTTI1LjggMi4yMDAwNEwxNy4zOTk4IDEwLjU5OTkiIHN0cm9rZT0iIzI2MjYyNiIgc3Ryb2tlLWxpbm'+
			'VjYXA9InJvdW5kIi8+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE5Ljc5OTkgMjVMMjUuNDQgMjVDMjYuMzAxNiAyNSAyNyAyNC4zMDE2IDI3IDIzLjQ0TDI3IDE3LjgwMDFNMjUuODAwMSAyMy44MDAyTDE3LjM5OTkgMTUuNDAwM00zIDguMTk5ODlMMyAyLjU1OTk4QzMgMS42OTg0MyAzLjY5ODQ1IDEgNC41NjAwMiAxTDEwLjIwMDEgMU00LjIwMDA0IDIuMjAwMDRMMTIuNjAwMiAxMC41OTk5IiBzdHJva2U9IiMyNjI2MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._pct=document.createElement('div');
		els=me._pct__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-t-\ub9c1\ud06c\uacf5\uc720";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(113,114,122,1);';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pct.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub79c\ud558\uc6b0\uc2a4\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pct.ggUpdateText();
		el.appendChild(els);
		me._pct.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pct.ggUpdatePosition=function (useTransition) {
		}
		me._svg_4.appendChild(me._pct);
		me._pc_2.appendChild(me._svg_4);
		me._pc3.appendChild(me._pc_2);
		me.__36.appendChild(me._pc3);
		me._rectangle_1.appendChild(me.__36);
		el=me._hamburgar_1=document.createElement('div');
		el.ggId="hamburgar_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hamburgar_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hamburgar_1.onclick=function (e) {
			me._pc_1.style.transition='none';
			me._pc_1.style.visibility='hidden';
			me._pc_1.ggVisible=false;
			player.setVariableValue('vis_hambur', true);
		}
		me._hamburgar_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzM2MzYzNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tZW51IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGxpbmUgeTE9IjEyIiB4MT0iMyIgeTI9IjEyIiB4Mj0iMjEiLz4KIDxsaW5lIHkxPSI2IiB4MT0iMyIgeTI9IjYiIHgyPSIyMSIvPgogPGxpbmUgeTE9IjE4IiB4MT0iMyIgeTI9IjE4IiB4Mj'+
			'0iMjEiLz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._hamburgar_1.appendChild(me._svg_6);
		me._rectangle_1.appendChild(me._hamburgar_1);
		el=me.__35=document.createElement('div');
		el.ggId="\uc6b0\uc9d1\uc0ac\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.onclick=function (e) {
			player.openUrl("https:\/\/woozipsa.com\/","");
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAtCAYAAAA5reyyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsLSURBVHgB7VoJVFPHGp57c0NCAgEChFVQaPXZUtG2IseKVWmlFXG3LsUtlb7apz0uVVzAKlWLW199+ESt1gV3ea7gAoo8FRVRQYk8BESQRXBBkEhCljtvJt7riciSsLidfOfkzJ2Zf2b++e78//wzNwCYYIIJJphgggkmtBoghJTeM6cJWZKVw+30UqKpthgUeIeAJ40SkiAIzbGTl4NcHO1y0PMtVM5Fqbq+Nqiczskp7vplYGiqlZVADmkIikoeiiIWTxr7tf+n+5sa850hkFktNCJEu3b9oRWjgn+d7exkC+JPpgahsji9eli3rVJZI8rJKzKztRXZaD'+
			'Razb2SUkpeWWMF2hLMEicaqSPBKwJeYTjNzs62nBCyIoeyDICf+U9Xd+4mhSKHQXDZ8l179WRfMsvMzIKe9u2Gw1lzN6Tg+lu3SuxQatbQ/PTRrBWIB8FvuqwMCg8cOv99hux2UGVFNS22sYTdurx3AIlsQfXKxkynNcBMkMBjnP5vRv9vpWvi0zNyqUFBnz2M2jizU9HNu3+bOmtdStjiLd+MGBvht2blVF8kexf7OGzm+n0RhK4jiOeFsg/1+m91pXVvMO74peCefaYpuehtW9gFQqcO30ChbSDkiQJg7y9mKE+cuBLIyLeJm9BfSb+vid1q6zoMWkkGwSWRMUf0raO6utp+QsjyO1zL/vADtCLj41MmMu1J1krwCpS44RW4/gJoS7Bk7NibNMdSEgSdPUfBsMVb/zp7NsPn+vVc16SkKz3mhW/aaY+UEaHJxB48'+
			'E8y2M2RHM1AHLmuyJSVP7MZ9F1lEIXK8Pp0Mj8RfGMvIkMzv+cuLWnfoL4nbCJ1JL/ot5qRef0RLCDRqdeBlf+NG0UdfD5293NFBDH5dNP6T0cP9ry355blIMfp9u2tfYvS88K3nZoRujMnKLz2H2hViRQ8ePj+1tlZtweFQL5u1vsekXx5bqaoVtHeVZKO+dDtjZnZ+l6CRczJycouJ4YN7PVwSKe32vqtrMUOaltksaD0zl55KTt+9YOHmhJWr9vQfGRxxb19MuCcqr0EEgubCYAKxIliprTvjNj96VAUWhf80FpNX188x+fPRG+J+nDbzj3Xbthzfgor7oR93xs9RUUUlDwBlxmdlAYmIc5CIAUVxmDwBFIpacP9Ble4ZzV0nW/ukAgwZEVCBHnUEXruaF3IjM5/4efrIq79FTO6Odavft+mIhIxeiXK53DF48q'+
			'rbZ5IzHNPT87xR3UXQAhhMIFYE+xP/AXM/7eHT+cHkCV/tDZmoK1fXkVMz5vrnpm3xkedTbviiPGZMFfnblF8UCqUVRXLUaJGhjQiUuLeTCNeuP7Ik93YxlMsVhKWlAA4I8KkZPvRzaUFh2QckBALEIV2rVgvbu9pnHNq3WDcOklOisUC3ru/FMeSRdcmrTy+Uls+ev/Ha5bQsP4GA/xS0EEaZcGFhuVVR8QNi2JBeV3EACo/G/wCKix2Bs3MukDjlATenTMLFpYbZycD4kOWylBRZz4KC0vYdOrhko6II/f7QhISz5284feGSDHh4OGlCpANjfl+zT3o8IU3Y3t3xi5k/jfi+rg44vED9qxBlNImWr7JGbY3LsT5MPXYGkI339POsXkrkRkiidaIsowjk8cwgNiut9pkTB4mnwsDZFBcgFmMdAbASKWCw9B6YNH4u'+
			'4d9nP62hkZ5YnqthJsP6I/rEibThn/T8MfZ6Zh4YOax32aplk7q7Ih927pJsS+i8jck/z10fEjhswejIyH/0+Kij8/9Y88TkNaYj7ruoqkg8ISUyXUSZK1CRNyqrBW0Eo14DSVo8dHd31KRn5PlgMrRduy7QVThINMDRkQZcMx64lOqhKb334Aya8A1Z/kcuLpJqT0/7QsZ88CqgI1fviR373bLY/IJ7YFmEdN+e7eFOrs82AHM/X6/zKUlrRJO/G3gjITHNcvDQ0Kw9+5JmY/L0Q4/GACk+P+5ustux0kudKkGlOWhDGEwgJszTU1zVp5f3mWvpOZb/WntwFiWdsE07JDAKFBVT6EeCklJS/WPINO64McmpK3f/Ksu8I/T/vMtp7H+w+dy/L3ccM35Jadgvfw1v52IP924NGxo6c8wo5gCPfZiC8Z+KjVHTvaOjZk'+
			'bUPFUC6ZTVK0LD/sTOHq982JSu7QR294/0WS3d3XvRaBvCprJuvUaj4ahUapzq5q+iaY5aqUJ5uu1PTzLZbTfPD8dBFxQDbth0eCQug7duecAzZ0bD1FRbnI+OPjjFwW0k7Og9EZaVVUvYtgGD5j3EMSKO3fLyynTl7M2H/hj6NyEXr2R97B8454nQbiBE/jKNlTl4+NxynvXXcFtMwh/1tCX18mTd/mfMWX+to9d4mJV110s3p1v5Pu7vj4GzF/yZCtoSbGAad/ziMFsXFPk7DoZ/n/r7xV0Hkj4/mZbnFXvoQsDE71dctrQPgjgwPXHqqh/TTrfC+g+cW+rjN1WLni3Y8ibG0/na3NzCD8XOQ+CsedFX2DqWwJ17Tq0Gxs0BE8qvqKiw0icbpTjPM/YMb3QgzcRTB5JTZD7LV+6M27Ez0XfT5mPJXC4FNMgseEIe'+
			'6Nf34/KFoWO/6N79Axm7a2LFSBTqcc10GwrF9KdllCfquyVhQ6TKp3IziqLQPRX3pTCFpoGxwIMpUapkxmbHqmJ1MaIv4y8TmHgKk4jNySEpKSNAllMQVF1V01FkJcj26uR+oG/fbslHY5ewQfULuyaKPoiSkuqXVt5j+Ni65HGF6EMbj+JnwzwjFwO5qFY5BjL6Q2PyTaFJAhuI7p8Hz/36dcXnypP1tdWXw7vvgCHztewbryMHf7i0+sL27P2d9/v/sTKwne8c8JagSQIxeYWFZR7XZbcHmpubV4JmgCBIms8nnixeutOS08BichVKyj3EnTpb8PjZ4C2CQSZ84EjKuBnTFi4S2LZ/qQ5qaWAhEgJ7OytQVl4BFDVKQJBkvXK2SMba2hKde4kXWLyDnDrqud8Cr2AO42fN9E2frtXwqh6Vg6qqJ9bgDYNBBPr5eZ'+
			'8NDZt+wd7WqrRuHc/crDorq6D36eR0z0njvkpzd5Nkq2rVLwSvzGkeX1mSPDNK7eBg8US/vgNy6jdv5vtdvX57AAp7/onIu69fb2dnXTh9xoQrPXw6/Wfjv8HbBbwampLZuz8pnOT1hQkJl/2BAWDCmhd2u/DFW84Cohs8kZg2uDFZ5mLieRgTs8u4MKa1YYgPVDUlI69R2lN8HlBpta7AAOjvsCysRMJ7AmsnILTgPW1MlglB3hi8sg8/hoDWaAGfosoMkRUK+Y+0Gi143XijPmva2InA8cSrqzdsPpqtVmkFDcmhYPzxqeSMALFYBF433igCJehmeu2Gw/0rK+X98Q11Q9CqNUDiKEbyNuB1o1UIrK1Ri9RPq4CiVssHLUBxyX2wdKF0ins7l+sqWmXRkJwZyS3Pzi2Yv2jZ9lHgNaNVCHR2EV/u1a/HOHtrwV3Q'+
			'AtRUK0DXLm5xvr7exU3JJpy6cvOpXAFeN1pMIBP0rkNpNPNtglPfLmsICA4J5HIoMERWUasyJ8nXvwe2mEA2zGEP4c0lTwd0tcIRkOz9HdnImFouh1LWd65+1XhjNhH0AZfj4GQLli7dkbaMIPBJpcFd5MugUM2qNfttnJA8gHSr3dQ0B28MgRySVAkF5gp0llZraCggG7mVoyHgURwkL+SboUvCNvvvjSFo/T/PNAPMTTe+GiWTkw1v16ePLtG1a+yb8DsPY2+BW7u9CSaYYIIJzcP/ARPOi5/9npWMAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 31px;';
		hs+='left : calc(50% - ((58px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((31px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._image_6);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : -5px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.__35.appendChild(me._rectangle_3);
		me._rectangle_1.appendChild(me.__35);
		me._pc_1.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._pc_1);
		el=me._pc2=document.createElement('div');
		el.ggId="pc-\ud654\uc0b4\ud45c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width >= 1250))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1024))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._pc2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._pc2.ggCurrentLogicStateSize = newLogicStateSize;
				me._pc2.style.transition='width 0s, height 0s';
				if (me._pc2.ggCurrentLogicStateSize == 0) {
					me._pc2.style.width='95%';
					me._pc2.style.height='42px';
					me._pc2.style.top = 'calc(50% - (42px / 2))';
					skin.updateSize(me._pc2);
				}
				else if (me._pc2.ggCurrentLogicStateSize == 1) {
					me._pc2.style.width='93%';
					me._pc2.style.height='42px';
					me._pc2.style.top = 'calc(50% - (42px / 2))';
					skin.updateSize(me._pc2);
				}
				else {
					me._pc2.style.width='90%';
					me._pc2.style.height='42px';
					me._pc2.style.top = 'calc(50% - (42px / 2))';
					skin.updateSize(me._pc2);
				}
			}
		}
		me._pc2.logicBlock_size();
		me._pc2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width > 768))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc2.style.transition='width 0s, height 0s';
				if (me._pc2.ggCurrentLogicStateVisible == 0) {
					me._pc2.style.visibility=(Number(me._pc2.style.opacity)>0||!me._pc2.style.opacity)?'inherit':'hidden';
					me._pc2.ggVisible=true;
				}
				else {
					me._pc2.style.visibility="hidden";
					me._pc2.ggVisible=false;
				}
			}
		}
		me._pc2.logicBlock_visible();
		me._pc2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 189px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((189px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC42Mjc0NTEiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._svg_2);
		me._pc2.appendChild(me._container_5);
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 189px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((189px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_6.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMC42Mjc0NTEiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._svg_1);
		me._pc2.appendChild(me._container_6);
		me.divSkin.appendChild(me._pc2);
		el=me._pc_=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9_\uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomMove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc_.style.transition='';
				if (me._pc_.ggCurrentLogicStateVisible == 0) {
					me._pc_.style.visibility=(Number(me._pc_.style.opacity)>0||!me._pc_.style.opacity)?'inherit':'hidden';
					me._pc_.ggVisible=true;
				}
				else {
					me._pc_.style.visibility="hidden";
					me._pc_.ggVisible=false;
				}
			}
		}
		me._pc_.logicBlock_visible();
		me._pc_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc1=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcscrollarea_1=document.createElement('div');
		els=me._pcscrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 269.336px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 460px;';
		hs+="";
		els.setAttribute('style',hs);
		me._pcscrollarea_1.ggScrollByX = function(diffX) {
			if(!me._pcscrollarea_1.ggHorScrollVisible || diffX == 0 || me._pcscrollarea_1.ggHPercentVisible >= 1.0) return;
			me._pcscrollarea_1.ggScrollPosX = (me._pcscrollarea_1__horScrollFg.offsetLeft + diffX);
			me._pcscrollarea_1.ggScrollPosX = Math.max(me._pcscrollarea_1.ggScrollPosX, 0);
			me._pcscrollarea_1.ggScrollPosX = Math.min(me._pcscrollarea_1.ggScrollPosX, me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__horScrollFg.style.left = me._pcscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosX / (me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__content.style.left = -(Math.round((me._pcscrollarea_1.ggContentWidth * (1.0 - me._pcscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentLeftOffset + 'px';
			me._pcscrollarea_1.ggScrollPosXPercent = (me._pcscrollarea_1__horScrollFg.offsetLeft / me._pcscrollarea_1__horScrollBg.offsetWidth);
		}
		me._pcscrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._pcscrollarea_1.ggHorScrollVisible || diffX == 0 || me._pcscrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._pcscrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._pcscrollarea_1.ggScrollPosX >= me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth)) {
					me._pcscrollarea_1.ggScrollPosX = Math.min(me._pcscrollarea_1.ggScrollPosX, me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._pcscrollarea_1.ggScrollPosX <= 0)) {
					me._pcscrollarea_1.ggScrollPosX = Math.max(me._pcscrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._pcscrollarea_1__horScrollFg.style.left = me._pcscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosX / (me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__content.style.left = -(Math.round((me._pcscrollarea_1.ggContentWidth * (1.0 - me._pcscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentLeftOffset + 'px';
			me._pcscrollarea_1.ggScrollPosXPercent = (me._pcscrollarea_1__horScrollFg.offsetLeft / me._pcscrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._pcscrollarea_1.ggScrollByY = function(diffY) {
			if(!me._pcscrollarea_1.ggVertScrollVisible || diffY == 0 || me._pcscrollarea_1.ggVPercentVisible >= 1.0) return;
			me._pcscrollarea_1.ggScrollPosY = (me._pcscrollarea_1__vertScrollFg.offsetTop + diffY);
			me._pcscrollarea_1.ggScrollPosY = Math.max(me._pcscrollarea_1.ggScrollPosY, 0);
			me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
			me._pcscrollarea_1.ggScrollPosYPercent = (me._pcscrollarea_1__vertScrollFg.offsetTop / me._pcscrollarea_1__vertScrollBg.offsetHeight);
		}
		me._pcscrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._pcscrollarea_1.ggVertScrollVisible || diffY == 0 || me._pcscrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._pcscrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._pcscrollarea_1.ggScrollPosY >= me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight)) {
					me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._pcscrollarea_1.ggScrollPosY <= 0)) {
					me._pcscrollarea_1.ggScrollPosY = Math.max(me._pcscrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
			me._pcscrollarea_1.ggScrollPosYPercent = (me._pcscrollarea_1__vertScrollFg.offsetTop / me._pcscrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._pcscrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._pcscrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._pcscrollarea_1.ggHPercentVisible);
					me._pcscrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._pcscrollarea_1.clientWidth - (me._pcscrollarea_1.ggVertScrollVisible ? 2 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._pcscrollarea_1.clientWidth - (me._pcscrollarea_1.ggVertScrollVisible ? 2 : 0))) * me._pcscrollarea_1.ggHPercentVisible);
					me._pcscrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._pcscrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._pcscrollarea_1.clientHeight - (me._pcscrollarea_1.ggHorScrollVisible ? 2 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._pcscrollarea_1.clientHeight - (me._pcscrollarea_1.ggHorScrollVisible ? 2 : 0))) * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._pcscrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._pcscrollarea_1.ggDragInertiaX *= 0.96;
				me._pcscrollarea_1.ggDragInertiaY *= 0.96;
				me._pcscrollarea_1.ggScrollByX(me._pcscrollarea_1.ggDragInertiaX);
				me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
				if (Math.abs(me._pcscrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._pcscrollarea_1__content.onmouseup = null;
			me._pcscrollarea_1__content.onmousemove = null;
			me._pcscrollarea_1__content.ontouchend = null;
			me._pcscrollarea_1__content.ontouchmove = null;
			me._pcscrollarea_1__content.onpointerup = null;
			me._pcscrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._pcscrollarea_1.ggIsDragging = false; }, 100);
		}
		me._pcscrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._pcscrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._pcscrollarea_1.ggDragStartY) > 10) me._pcscrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._pcscrollarea_1.ggDragLastX) * me._pcscrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._pcscrollarea_1.ggDragLastY) * me._pcscrollarea_1.ggVPercentVisible;
			me._pcscrollarea_1.ggDragInertiaX = -diffX;
			me._pcscrollarea_1.ggDragInertiaY = -diffY;
			me._pcscrollarea_1.ggDragLastX = eventX;
			me._pcscrollarea_1.ggDragLastY = eventY;
			me._pcscrollarea_1.ggScrollByX(-diffX);
			me._pcscrollarea_1.ggScrollByY(-diffY);
		}
		me._pcscrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._pcscrollarea_1.ggDragLastX = me._pcscrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._pcscrollarea_1.ggDragLastY = me._pcscrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._pcscrollarea_1__content.onmouseup = me._pcscrollarea_1__content.mousetouchend;
			me._pcscrollarea_1__content.ontouchend = me._pcscrollarea_1__content.mousetouchend;
			me._pcscrollarea_1__content.onmousemove = me._pcscrollarea_1__content.mousetouchmove;
			me._pcscrollarea_1__content.ontouchmove = me._pcscrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._pcscrollarea_1__content.onpointerup = me._pcscrollarea_1__content.ontouchend;
				me._pcscrollarea_1__content.onpointermove = me._pcscrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._pcscrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._pcscrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._pcscrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._pcscrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._pcscrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 2px; height: 337.92px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._pcscrollarea_1.ggScrollPosY = 0;
		me._pcscrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._pcscrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._pcscrollarea_1.ggDragInertiaY *= 0.96;
					me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
					if (Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._pcscrollarea_1.ggDragLastY;
				me._pcscrollarea_1.ggDragInertiaY = diffY;
				me._pcscrollarea_1.ggDragLastY = e.clientY;
				me._pcscrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._pcscrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._pcscrollarea_1.ggDragInertiaY *= 0.96;
					me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
					if (Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._pcscrollarea_1.ggDragLastY;
				me._pcscrollarea_1.ggDragInertiaY = diffY;
				me._pcscrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._pcscrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._pcscrollarea_1.ggScrollHeight;
			if (e.offsetY < me._pcscrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._pcscrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._pcscrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._pcscrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._pcscrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._pcscrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._pcscrollarea_1.ggScrollByYSmooth(30 * me._pcscrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._pcscrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 2px; height: 2px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 80%;';
		hs+='left : -10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:auto;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcscrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcscrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._pcscrollarea_1.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._pcscrollarea_1.ggScrollPosY / me._pcscrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._pcscrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 2) || (!me._pcscrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._pcscrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._pcscrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._pcscrollarea_1.ggVertScrollVisible = true;
				} else {
					me._pcscrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._pcscrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._pcscrollarea_1.ggVertScrollVisible = false;
				}
				if(me._pcscrollarea_1.ggVertScrollVisible) {
					me._pcscrollarea_1.ggAvailableWidth = me._pcscrollarea_1.clientWidth - 2;
					if (me._pcscrollarea_1.ggHorScrollVisible) {
						me._pcscrollarea_1.ggAvailableHeight = me._pcscrollarea_1.clientHeight - 2;
						me._pcscrollarea_1.ggAvailableHeightWithScale = me._pcscrollarea_1.getBoundingClientRect().height - me._pcscrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._pcscrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._pcscrollarea_1.ggAvailableHeight = me._pcscrollarea_1.clientHeight;
						me._pcscrollarea_1.ggAvailableHeightWithScale = me._pcscrollarea_1.getBoundingClientRect().height;
						me._pcscrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._pcscrollarea_1__vertScrollBg.style.height = me._pcscrollarea_1.ggAvailableHeight + 'px';
					me._pcscrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._pcscrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._pcscrollarea_1.ggVPercentVisible > 1.0) me._pcscrollarea_1.ggVPercentVisible = 1.0;
					me._pcscrollarea_1.ggScrollHeight =  Math.round(me._pcscrollarea_1__vertScrollBg.offsetHeight * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1__vertScrollFg.style.height = me._pcscrollarea_1.ggScrollHeight + 'px';
					me._pcscrollarea_1.ggScrollPosY = me._pcscrollarea_1.ggScrollPosYPercent * me._pcscrollarea_1.ggAvailableHeight;
					me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
					me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
					if (me._pcscrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
						me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._pcscrollarea_1.ggAvailableWidth = me._pcscrollarea_1.clientWidth;
					me._pcscrollarea_1.ggScrollPosY = 0;
					me._pcscrollarea_1.ggScrollPosYPercent = 0.0;
					me._pcscrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._pcscrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._pcscrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._pcscrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._pcscrollarea_1);
					me._pcscrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 3;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 140;
		el.ggHeight = 74;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._cloner_1.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._cloner_1.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._cloner_1.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._cloner_1.childNodes[currElement].clientHeight < me._cloner_1.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._cloner_1.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me._cloner_1.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me._cloner_1.childNodes[currElement].style.overflow = 'hidden';
						me._cloner_1.childNodes[currElement].style['top'] = currYPos + 'px';
						me._cloner_1.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._cloner_1.childNodes[currElement].scrollHeight);
						me._cloner_1.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._cloner_1.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width=me._cloner_1.ggWidth + 'px';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggAutoPosition(true);
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			me._cloner_1.ggUpdate();
		}
		me._container_2.appendChild(me._cloner_1);
		me._pcscrollarea_1__content.appendChild(me._container_2);
		me._pc1.appendChild(me._pcscrollarea_1);
		el=me._title_1_1=document.createElement('div');
		el.ggId="title_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._title_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131-\ub9c9\ub300";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_1.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2a4\ud06c\ub864-\uc138\ub300\uad6c\uc131";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='margin-left:10px; letter-spacing:-1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc138\ub300\uad6c\uc131", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._title_1_1.appendChild(me.__33);
		me._pc1.appendChild(me._title_1_1);
		me._pc.appendChild(me._pc1);
		el=me._pc0=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_0=document.createElement('div');
		els=me._pc_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_0.ggUpdateText();
		el.appendChild(els);
		me._pc_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_0.ggUpdatePosition=function (useTransition) {
		}
		me._pc0.appendChild(me._pc_0);
		el=me._pccontainer_1=document.createElement('div');
		el.ggId="pc--\uacf5\uac04\uc774\ub3d9-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pccontainer_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pccontainer_1.onclick=function (e) {
			player.setVariableValue('vis_roomMove', false);
		}
		me._pccontainer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcimage_2=document.createElement('div');
		els=me._pcimage_2__img=document.createElement('img');
		els.className='ggskin ggskin_pcimage_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc--\uacf5\uac04\uc774\ub3d9-Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcimage_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcimage_2.ggUpdatePosition=function (useTransition) {
		}
		me._pccontainer_1.appendChild(me._pcimage_2);
		me._pc0.appendChild(me._pccontainer_1);
		me._pc.appendChild(me._pc0);
		me._pc_.appendChild(me._pc);
		me.divSkin.appendChild(me._pc_);
		el=me.__32=document.createElement('div');
		el.ggId="\ud584\ubc84\uac70";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hambur') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
				else {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.onclick=function (e) {
			me._pc_1.style.transition='none';
			me._pc_1.style.visibility=(Number(me._pc_1.style.opacity)>0||!me._pc_1.style.opacity)?'inherit':'hidden';
			me._pc_1.ggVisible=true;
			player.setVariableValue('vis_hambur', false);
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6_1=document.createElement('div');
		els=me._svg_6_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzM2MzYzNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1tZW51IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGxpbmUgeTE9IjEyIiB4MT0iMyIgeTI9IjEyIiB4Mj0iMjEiLz4KIDxsaW5lIHkxPSI2IiB4MT0iMyIgeTI9IjYiIHgyPSIyMSIvPgogPGxpbmUgeTE9IjE4IiB4MT0iMyIgeTI9IjE4IiB4Mj'+
			'0iMjEiLz4KPC9zdmc+Cg==';
		me._svg_6_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6_1.ggUpdatePosition=function (useTransition) {
		}
		me.__32.appendChild(me._svg_6_1);
		me.divSkin.appendChild(me.__32);
		el=me.__27=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__27.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__27.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__27.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__27.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__27.ggCurrentLogicStatePosition == 0) {
					me.__27.style.left='0px';
					me.__27.style.top='46px';
				}
				else {
					me.__27.style.left='90px';
					me.__27.style.top='10px';
				}
			}
		}
		me.__27.logicBlock_position();
		me.__27.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__27.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__27.ggCurrentLogicStateSize = newLogicStateSize;
				me.__27.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__27.ggCurrentLogicStateSize == 0) {
					me.__27.style.width='100%';
					me.__27.style.height='84%';
					skin.updateSize(me.__27);
				}
				else {
					me.__27.style.width='100%';
					me.__27.style.height='88%';
					skin.updateSize(me.__27);
				}
			}
		}
		me.__27.logicBlock_size();
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aptInfo_pc') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__28.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__28.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__28.style.transition='border-radius 0s';
				if (me.__28.ggCurrentLogicStateBorderRadius == 0) {
					me.__28.style.borderRadius="0px";
				}
				else {
					me.__28.style.borderRadius="20px";
				}
			}
		}
		me.__28.logicBlock_borderradius();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		els=me.__31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__31.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc544\ud30c\ud2b8\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__31.ggUpdateText();
		el.appendChild(els);
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__31);
		el=me._container_11=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_11.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me._container_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_21=document.createElement('div');
		els=me._image_21__img=document.createElement('img');
		els.className='ggskin ggskin_image_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_21.ggUpdatePosition=function (useTransition) {
		}
		me._container_11.appendChild(me._image_21);
		me.__30.appendChild(me._container_11);
		me.__28.appendChild(me.__30);
		el=me._iframe1=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub124\uc774\ubc84\uc815\ubcf4\ub780";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_41=document.createElement('div');
		els=me._text_41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_41.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd9c\ucc98 : KB \ubd80\ub3d9\uc0b0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_41.ggUpdateText();
		el.appendChild(els);
		me._text_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_41.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._text_41);
		me._iframe1.appendChild(me.__29);
		me.__28.appendChild(me._iframe1);
		me.__27.appendChild(me.__28);
		me.divSkin.appendChild(me.__27);
		el=me.__22=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__22.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__22.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__22.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__22.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__22.ggCurrentLogicStatePosition == 0) {
					me.__22.style.left='0px';
					me.__22.style.top='46px';
				}
				else {
					me.__22.style.left='90px';
					me.__22.style.top='10px';
				}
			}
		}
		me.__22.logicBlock_position();
		me.__22.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__22.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__22.ggCurrentLogicStateSize = newLogicStateSize;
				me.__22.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__22.ggCurrentLogicStateSize == 0) {
					me.__22.style.width='100%';
					me.__22.style.height='84%';
					skin.updateSize(me.__22);
				}
				else {
					me.__22.style.width='100%';
					me.__22.style.height='88%';
					skin.updateSize(me.__22);
				}
			}
		}
		me.__22.logicBlock_size();
		me.__22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
				else {
					me.__22.style.visibility="hidden";
					me.__22.ggVisible=false;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__23.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__23.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__23.style.transition='border-radius 0s';
				if (me.__23.ggCurrentLogicStateBorderRadius == 0) {
					me.__23.style.borderRadius="0px";
				}
				else {
					me.__23.style.borderRadius="20px";
				}
			}
		}
		me.__23.logicBlock_borderradius();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__25=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b0\uc9d1\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		el.appendChild(els);
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__25.appendChild(me.__26);
		el=me._container_10=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_10.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me._container_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4--Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
		}
		me._container_10.appendChild(me._image_20);
		me.__25.appendChild(me._container_10);
		me.__23.appendChild(me.__25);
		el=me._iframe0=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\uc6b0\uc9d1\uc0ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_40.ggUpdateText();
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_40.ggUpdatePosition=function (useTransition) {
		}
		me.__24.appendChild(me._text_40);
		me._iframe0.appendChild(me.__24);
		me.__23.appendChild(me._iframe0);
		me.__22.appendChild(me.__23);
		me.divSkin.appendChild(me.__22);
		el=me.__17=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__17.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__17.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__17.ggCurrentLogicStatePosition == 0) {
					me.__17.style.left='0px';
					me.__17.style.top='46px';
				}
				else {
					me.__17.style.left='90px';
					me.__17.style.top='10px';
				}
			}
		}
		me.__17.logicBlock_position();
		me.__17.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__17.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__17.ggCurrentLogicStateSize = newLogicStateSize;
				me.__17.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__17.ggCurrentLogicStateSize == 0) {
					me.__17.style.width='100%';
					me.__17.style.height='84%';
					skin.updateSize(me.__17);
				}
				else {
					me.__17.style.width='100%';
					me.__17.style.height='88%';
					skin.updateSize(me.__17);
				}
			}
		}
		me.__17.logicBlock_size();
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_lanhouse') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
				else {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__18.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__18.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__18.style.transition='border-radius 0s';
				if (me.__18.ggCurrentLogicStateBorderRadius == 0) {
					me.__18.style.borderRadius="0px";
				}
				else {
					me.__18.style.borderRadius="20px";
				}
			}
		}
		me.__18.logicBlock_borderradius();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.onclick=function (e) {
			player.setVariableValue('vis_aptInfo_pc', false);
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		els=me.__21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__21.ggUpdateText=function() {
			var params = [];
			var hs = player._("VR\uc81c\uc791\uc0ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__21.ggUpdateText();
		el.appendChild(els);
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__20.appendChild(me.__21);
		el=me._container_1=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.onclick=function (e) {
			player.setVariableValue('vis_lanhouse', false);
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4--Image 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._image_2);
		me.__20.appendChild(me._container_1);
		me.__18.appendChild(me.__20);
		el=me._iframe=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub79c\ud558\uc6b0\uc2a4-Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me._text_4);
		me._iframe.appendChild(me.__19);
		me.__18.appendChild(me._iframe);
		me.__17.appendChild(me.__18);
		me.divSkin.appendChild(me.__17);
		el=me.__9=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9;';
		hs+='height : 88%;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:500px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__9.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__9.ggCurrentLogicStatePosition == 0) {
					me.__9.style.left='0px';
					me.__9.style.top='46px';
				}
				else {
					me.__9.style.left='90px';
					me.__9.style.top='10px';
				}
			}
		}
		me.__9.logicBlock_position();
		me.__9.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__9.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__9.ggCurrentLogicStateSize = newLogicStateSize;
				me.__9.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__9.ggCurrentLogicStateSize == 0) {
					me.__9.style.width='100%';
					me.__9.style.height='84%';
					skin.updateSize(me.__9);
				}
				else {
					me.__9.style.width='100%';
					me.__9.style.height='88%';
					skin.updateSize(me.__9);
				}
			}
		}
		me.__9.logicBlock_size();
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_films') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_borderradius = function() {
			var newLogicStateBorderRadius;
			if (
				((player.getViewerSize(true).width <= 1120))
			)
			{
				newLogicStateBorderRadius = 0;
			}
			else {
				newLogicStateBorderRadius = -1;
			}
			if (me.__10.ggCurrentLogicStateBorderRadius != newLogicStateBorderRadius) {
				me.__10.ggCurrentLogicStateBorderRadius = newLogicStateBorderRadius;
				me.__10.style.transition='border-radius 0s';
				if (me.__10.ggCurrentLogicStateBorderRadius == 0) {
					me.__10.style.borderRadius="0px";
				}
				else {
					me.__10.style.borderRadius="20px";
				}
			}
		}
		me.__10.logicBlock_borderradius();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-\ud0c0\uc774\ud2c0_\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 91%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.onclick=function (e) {
			player.setVariableValue('vis_films', false);
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984_";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(57,57,57,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b0\uc9d1\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me.__16);
		el=me._container_1_=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4-Container 1_\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me._container_1_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBpZLBEYAgDARzVGIZ8LRyv3RhOkGPkU+E4GA+MBc2HCFIKZ1yRyllzzmrOBFj3AAc3IdHqwITH6B6JvCme1UPNpCSwSjRbI9y8KpSHxWEZ6m930IvsANLD6rNkcX4b3WpOUvf4UGemzCDGNTshLWu6mzIDSwXfxqjZl5e7igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="_\ub2e8\uc5f4\ud544\ub984";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 12px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me._container_1_.appendChild(me.__15);
		me.__14.appendChild(me._container_1_);
		me.__10.appendChild(me.__14);
		el=me.__box=document.createElement('div');
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub984box";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 92%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__box.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\uc6b0\uc9d1\uc0ac \ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__12.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		el.appendChild(els);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		els=me.__13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd94\ucc9c\uc815\ubcf4_\ub2e8\uc5f4\ud544\ub9841";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(85,85,85,1);';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__13.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__13.ggUpdateText();
		el.appendChild(els);
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__12.appendChild(me.__13);
		me.__box.appendChild(me.__12);
		me.__10.appendChild(me.__box);
		me.__9.appendChild(me.__10);
		me.divSkin.appendChild(me.__9);
		me.__header.logicBlock_visible();
		me.__75.logicBlock_visible();
		me.__74.logicBlock_visible();
		me.__67.logicBlock_visible();
		me.__620px_.logicBlock_visible();
		me.__480px_.logicBlock_visible();
		me.__620_.logicBlock_visible();
		me.__320px_1.logicBlock_visible();
		me.__503px_1.logicBlock_visible();
		me.__main.logicBlock_visible();
		me.__38.logicBlock_visible();
		me.__110.logicBlock_visible();
		me._pc_3.logicBlock_visible();
		me._pc_10.logicBlock_position();
		me._pc_1.logicBlock_visible();
		me._svg_3.logicBlock_visible();
		me._svg_9.logicBlock_visible();
		me._pc2.logicBlock_size();
		me._pc2.logicBlock_visible();
		me._pc_.logicBlock_visible();
		me.__32.logicBlock_visible();
		me.__27.logicBlock_position();
		me.__27.logicBlock_size();
		me.__27.logicBlock_visible();
		me.__28.logicBlock_borderradius();
		me.__22.logicBlock_position();
		me.__22.logicBlock_size();
		me.__22.logicBlock_visible();
		me.__23.logicBlock_borderradius();
		me.__17.logicBlock_position();
		me.__17.logicBlock_size();
		me.__17.logicBlock_visible();
		me.__18.logicBlock_borderradius();
		me.__9.logicBlock_position();
		me.__9.logicBlock_size();
		me.__9.logicBlock_visible();
		me.__10.logicBlock_borderradius();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me._pc_10.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('집꾸미기-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기-에어컨'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__67.logicBlock_visible();
			me.__620px_.ggUpdateConditionNodeChange();
			me.__480px_.ggUpdateConditionNodeChange();
			me.__620_.ggUpdateConditionNodeChange();
			me.__320px_1.ggUpdateConditionNodeChange();
			me.__503px_1.ggUpdateConditionNodeChange();
			me.__main.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__110.logicBlock_visible();
			me._pc_10.logicBlock_position();
			me._svg_3.logicBlock_visible();
			me._svg_9.logicBlock_visible();
			me._pc_.logicBlock_visible();
			me._cloner_1.ggUpdateConditionNodeChange();
			me.__32.logicBlock_visible();
			me.__27.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__9.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__67.logicBlock_visible();
			me._scrollarea_10.ggUpdatePosition();
			me.__main.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me.__38.logicBlock_visible();
			me.__110.logicBlock_visible();
			me._pc_10.logicBlock_position();
			me._svg_3.logicBlock_visible();
			me._svg_9.logicBlock_visible();
			me._pc_.logicBlock_visible();
			me._pcscrollarea_1.ggUpdatePosition();
			me.__32.logicBlock_visible();
			me.__27.logicBlock_visible();
			me.__22.logicBlock_visible();
			me.__17.logicBlock_visible();
			me.__9.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__header.logicBlock_visible();
			me.__75.logicBlock_visible();
			me.__74.logicBlock_visible();
			me.__620px_.logicBlock_visible();
			me.__480px_.logicBlock_visible();
			me.__620_.logicBlock_visible();
			me.__320px_1.logicBlock_visible();
			me.__503px_1.logicBlock_visible();
			me.__38.logicBlock_visible();
			me._pc_3.logicBlock_visible();
			me._pc_1.logicBlock_visible();
			me._pc2.logicBlock_size();
			me._pc2.logicBlock_visible();
			me.__27.logicBlock_position();
			me.__27.logicBlock_size();
			me.__28.logicBlock_borderradius();
			me.__22.logicBlock_position();
			me.__22.logicBlock_size();
			me.__23.logicBlock_borderradius();
			me.__17.logicBlock_position();
			me.__17.logicBlock_size();
			me.__18.logicBlock_borderradius();
			me.__9.logicBlock_position();
			me.__9.logicBlock_size();
			me.__10.logicBlock_borderradius();
		});
		player.addListener('varchanged_vis_ad', function(event) {
			me._svg_3.logicBlock_visible();
			me._svg_9.logicBlock_visible();
			me.__22.logicBlock_visible();
		});
		player.addListener('varchanged_vis_aptInfo', function(event) {
			me.__main.logicBlock_visible();
		});
		player.addListener('varchanged_vis_aptInfo_pc', function(event) {
			me.__27.logicBlock_visible();
		});
		player.addListener('varchanged_vis_films', function(event) {
			me.__9.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hambur', function(event) {
			me.__32.logicBlock_visible();
		});
		player.addListener('varchanged_vis_lanhouse', function(event) {
			me.__17.logicBlock_visible();
		});
		player.addListener('varchanged_vis_logo', function(event) {
			me.__110.logicBlock_visible();
		});
		player.addListener('varchanged_vis_m_roomMove', function(event) {
			me.__67.logicBlock_visible();
			me.__38.logicBlock_visible();
		});
		player.addListener('varchanged_vis_roomMove', function(event) {
			me._pc_.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__620px_.ggUpdate();
			me.__480px_.ggUpdate();
			me.__620_.ggUpdate();
			me.__320px_1.ggUpdate();
			me.__503px_1.ggUpdate();
			me._cloner_1.ggUpdate();
		});
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._mnodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mnodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._mnodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/mnodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mnodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._mnodeimage_118a.onclick=function (e) {
			if (me._mnodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomMove', false);
		}
		me._mnodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mrectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="m-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -37px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m_18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m_18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._m_18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_18a.ggUpdateText();
		player.addListener('changenode', function() {
			me._m_18a.ggUpdateText();
		});
		el.appendChild(els);
		me._m_18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_18a.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_118a.appendChild(me._m_18a);
		me._mnodeimage_118a.appendChild(me._mrectangle_118a);
		me.__div.appendChild(me._mnodeimage_118a);
	};
	function SkinCloner__503px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 67px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
	};
	function SkinCloner__320px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a0_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 89px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -30px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a0.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a0);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
	};
	function SkinCloner__620__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a1.onclick=function (e) {
			if (me._nodeimage_118a1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a1.appendChild(me.__18a1);
		me._nodeimage_118a1.appendChild(me._rectangle_118a1);
		me.__div.appendChild(me._nodeimage_118a1);
	};
	function SkinCloner__480px__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a2_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 67px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a2.onclick=function (e) {
			if (me._nodeimage_118a2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -25px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a2.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a2.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a2.appendChild(me.__18a2);
		me._nodeimage_118a2.appendChild(me._rectangle_118a2);
		me.__div.appendChild(me._nodeimage_118a2);
	};
	function SkinCloner__620px__Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a3_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 105px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a3.onclick=function (e) {
			if (me._nodeimage_118a3.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -35px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(54,54,54,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a3.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a3.appendChild(me.__18a3);
		me._nodeimage_118a3.appendChild(me._rectangle_118a3);
		me.__div.appendChild(me._nodeimage_118a3);
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=640;
		el.ggDy=300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 640px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 300px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			var flag=me.__.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__.style.transition='none';
			} else {
				me.__.style.transition='all 1000ms linear 0ms';
			}
			if (flag) {
				me.__.ggParameter.sx=1.2;me.__.ggParameter.sy=1.2;
			} else {
				me.__.ggParameter.sx=1.2;me.__.ggParameter.sy=1.2;
			}
			me.__.ggScaleActive=!flag;
				me.__.style.transform=parameterToTransform(me.__.ggParameter);
			setTimeout(function() {skin.updateSize(me.__);}, 1050);
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._timer_2);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__=document.createElement('div');
		el.ggId="\uc6d0\ub4e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__.style.transition='transform 0s';
				if (me.__.ggCurrentLogicStateScaling == 0) {
					me.__.ggParameter.sx = 1;
					me.__.ggParameter.sy = 1;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
				else {
					me.__.ggParameter.sx = 1.2;
					me.__.ggParameter.sy = 1.2;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_scaling();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="4\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='::before { content: \"\"; position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; background: inherit; \/* \ubd80\ubaa8\uc758 \ubc30\uacbd\uc744 \uc0c1\uc18d *\/ filter: blur(10px); \/* \ube14\ub7ec \ud6a8\uacfc *\/ z-index: -1; \/* \ubc30\uacbd \ub4a4\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d *\/ }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__4);
		el=me._timer_31=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31.ggIsActive=function() {
			return (me._timer_31.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31.ggTimestamp) / me._timer_31.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31.style.transition='';
				if (me._timer_31.ggCurrentLogicStateVisible == 0) {
					me._timer_31.style.visibility="hidden";
					me._timer_31.ggVisible=false;
				}
				else {
					me._timer_31.style.visibility=(Number(me._timer_31.style.opacity)>0||!me._timer_31.style.opacity)?'inherit':'hidden';
					me._timer_31.ggVisible=true;
				}
			}
		}
		me._timer_31.logicBlock_visible();
		me._timer_31.ggActivate=function () {
			var flag=me.__4.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__4.style.transition='none';
			} else {
				me.__4.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__4.ggParameter.sx=1;me.__4.ggParameter.sy=1;
			} else {
				me.__4.ggParameter.sx=1.8;me.__4.ggParameter.sy=1.8;
			}
			me.__4.ggScaleActive=!flag;
				me.__4.style.transform=parameterToTransform(me.__4.ggParameter);
			setTimeout(function() {skin.updateSize(me.__4);}, 550);
		}
		me._timer_31.ggCurrentLogicStateVisible = -1;
		me._timer_31.ggUpdateConditionTimer=function () {
			me._timer_31.logicBlock_visible();
		}
		me._timer_31.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._timer_31);
		el=me.__3=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__3);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			var flag=me.__3.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3.style.transition='none';
			} else {
				me.__3.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3.ggParameter.sx=1;me.__3.ggParameter.sy=1;
			} else {
				me.__3.ggParameter.sx=1.4;me.__3.ggParameter.sy=1.4;
			}
			me.__3.ggScaleActive=!flag;
				me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3);}, 550);
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._timer_3);
		el=me.__2=document.createElement('div');
		el.ggId="2\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__2);
		el=me.__0=document.createElement('div');
		el.ggId="\uc911\uc559\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__0);
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 19";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:13px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_19.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_19.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_19.ggUpdateText();
		});
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_19.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.comment) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_19.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_19.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_19.style.transition='width 0s, height 0s';
				if (me._text_19.ggCurrentLogicStateSize == 0) {
					me._text_19.style.width='88px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (88px / 2))';
					skin.updateSize(me._text_19);
				}
				else {
					me._text_19.style.width='65px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._text_19);
				}
			}
		}
		me._text_19.logicBlock_size();
		me._text_19.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._text_19);
		me._external_1.appendChild(me.__);
		me._ht_node.appendChild(me._external_1);
		me.elementMouseOver['ht_node']=false;
		me._timer_2.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__.logicBlock_scaling();
		me._timer_31.logicBlock_visible();
		me._timer_3.logicBlock_visible();
		me._text_19.logicBlock_size();
			me.ggEvent_activehotspotchanged=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_changenode=function() {
				me._timer_2.logicBlock_visible();
				me._timer_31.logicBlock_visible();
				me._timer_3.logicBlock_visible();
				me._text_19.logicBlock_size();
			};
			me.ggEvent_configloaded=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me.__.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				me._timer_2.ggUpdateConditionTimer();
				if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
					me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
					if (me._timer_2.ggLastIsActive) {
						var flag=me.__.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__.style.transition='none';
						} else {
							me.__.style.transition='all 1000ms linear 0ms';
						}
						if (flag) {
							me.__.ggParameter.sx=1.2;me.__.ggParameter.sy=1.2;
						} else {
							me.__.ggParameter.sx=1.2;me.__.ggParameter.sy=1.2;
						}
						me.__.ggScaleActive=!flag;
							me.__.style.transform=parameterToTransform(me.__.ggParameter);
						setTimeout(function() {skin.updateSize(me.__);}, 1050);
					} else {
					}
				}
				me._timer_31.ggUpdateConditionTimer();
				if (me._timer_31.ggLastIsActive!=me._timer_31.ggIsActive()) {
					me._timer_31.ggLastIsActive=me._timer_31.ggIsActive();
					if (me._timer_31.ggLastIsActive) {
						var flag=me.__4.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__4.style.transition='none';
						} else {
							me.__4.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__4.ggParameter.sx=1;me.__4.ggParameter.sy=1;
						} else {
							me.__4.ggParameter.sx=1.8;me.__4.ggParameter.sy=1.8;
						}
						me.__4.ggScaleActive=!flag;
							me.__4.style.transform=parameterToTransform(me.__4.ggParameter);
						setTimeout(function() {skin.updateSize(me.__4);}, 550);
					} else {
					}
				}
				me._timer_3.ggUpdateConditionTimer();
				if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
					me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
					if (me._timer_3.ggLastIsActive) {
						var flag=me.__3.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3.style.transition='none';
						} else {
							me.__3.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3.ggParameter.sx=1;me.__3.ggParameter.sy=1;
						} else {
							me.__3.ggParameter.sx=1.4;me.__3.ggParameter.sy=1.4;
						}
						me.__3.ggScaleActive=!flag;
							me.__3.style.transform=parameterToTransform(me.__3.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30-\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2_1=document.createElement('div');
		els=me._external_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2_1.ggSubElement.setAttribute('alt', player._(me._external_2_1.ggAltText));
			me._external_2_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2_1.ggText_untranslated = img;
			me._external_2_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2_1.ggSubElement.style.width = '0px';
			me._external_2_1.ggSubElement.style.height = '0px';
			me._external_2_1.ggSubElement.src='';
			me._external_2_1.ggSubElement.src=me._external_2_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2_1.ggText != player._(me._external_2_1.ggText_untranslated)) {
				me._external_2_1.ggText = player._(me._external_2_1.ggText_untranslated);
				me._external_2_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2_1.clientWidth;
			var parentHeight = me._external_2_1.clientHeight;
			var img = me._external_2_1__img;
			var aspectRatioDiv = me._external_2_1.clientWidth / me._external_2_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2_1.ggScrollbars || currentWidth < me._external_2_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2_1.ggScrollbars || currentHeight < me._external_2_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__11=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\uc5d0\uc5b4\ucee811";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__11.onclick=function (e) {
				skin.__12.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/aircon\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__12.ggUpdateText();
			skin.__12.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films', true);
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_1=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__3_1);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_16=document.createElement('div');
		els=me._svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMSAyOSIgaGVpZ2h0PSIyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMSIgZD0iTTIwLjQ0NjYgMjYuNDEwOEMxOS45MDM3IDI3LjE4MTYgMTkuNjMyMiAyNy41NjcgMTkuMjI0MSAyNy42Mzc4QzE4LjgxNiAyNy43MDg2IDE4LjQzMDYgMjcuNDM3MSAxNy42NTk4IDI2Ljg5NDJMNC40NTY3NSAxNy41OTQ5QzQuMTM4NSAxNy4zNzA3IDMuOTc5MzcgMTcuMjU4NiAzLjg3NTAxIDE3LjFDMy43NzA2NCAxNi45NDEzIDMuNzMwNz'+
			'QgMTYuNzUwOCAzLjY1MDkyIDE2LjM2OThMMS4zMDIwOSA1LjE1NzY1QzEuMDk2MTQgNC4xNzQ1MiAwLjk5MzE1OSAzLjY4Mjk1IDEuMjQzNDggMy4zMjc1NUMxLjQ5MzggMi45NzIxNSAxLjk5MTMzIDIuOTAzNTQgMi45ODYzOSAyLjc2NjMyTDE0LjMzNDUgMS4yMDE0MUMxNC43MjAyIDEuMTQ4MjMgMTQuOTEzIDEuMTIxNjQgMTUuMDk3NSAxLjE2NjQ3QzE1LjI4MjEgMS4yMTEyOSAxNS40NDEyIDEuMzIzMzcgMTUuNzU5NCAxLjU0NzUzTDI4Ljk2MjUgMTAuODQ2OUMyOS43MzMzIDExLjM4OTggMzAuMTE4NyAxMS42NjEyIDMwLjE4OTUgMTIuMDY5NEMzMC4yNjAzIDEyLjQ3NzUgMjkuOTg4OCAx'+
			'Mi44NjI5IDI5LjQ0NTkgMTMuNjMzN0wyMC40NDY2IDI2LjQxMDhaIiBzdHJva2U9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
		me._svg_16__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_16.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._svg_16);
		me.__11.appendChild(me._rectangle_5);
		el=me._timer_31_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31_1.ggIsActive=function() {
			return (me._timer_31_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31_1.ggTimestamp) / me._timer_31_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31_1.style.transition='';
				if (me._timer_31_1.ggCurrentLogicStateVisible == 0) {
					me._timer_31_1.style.visibility="hidden";
					me._timer_31_1.ggVisible=false;
				}
				else {
					me._timer_31_1.style.visibility=(Number(me._timer_31_1.style.opacity)>0||!me._timer_31_1.style.opacity)?'inherit':'hidden';
					me._timer_31_1.ggVisible=true;
				}
			}
		}
		me._timer_31_1.logicBlock_visible();
		me._timer_31_1.ggActivate=function () {
			var flag=me.__3_1.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__3_1.style.transition='none';
			} else {
				me.__3_1.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__3_1.ggParameter.sx=1;me.__3_1.ggParameter.sy=1;
			} else {
				me.__3_1.ggParameter.sx=1.2;me.__3_1.ggParameter.sy=1.2;
			}
			me.__3_1.ggScaleActive=!flag;
				me.__3_1.style.transform=parameterToTransform(me.__3_1.ggParameter);
			setTimeout(function() {skin.updateSize(me.__3_1);}, 550);
		}
		me._timer_31_1.ggCurrentLogicStateVisible = -1;
		me._timer_31_1.ggUpdateConditionTimer=function () {
			me._timer_31_1.logicBlock_visible();
		}
		me._timer_31_1.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._timer_31_1);
		me._external_2_1.appendChild(me.__11);
		me.__1.appendChild(me._external_2_1);
		me.elementMouseOver['_1']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2_1.style.width=hotspot.customimagewidth + 'px';
			me._external_2_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._timer_31_1.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._timer_31_1.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._timer_31_1.ggUpdateConditionTimer();
				if (me._timer_31_1.ggLastIsActive!=me._timer_31_1.ggIsActive()) {
					me._timer_31_1.ggLastIsActive=me._timer_31_1.ggIsActive();
					if (me._timer_31_1.ggLastIsActive) {
						var flag=me.__3_1.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__3_1.style.transition='none';
						} else {
							me.__3_1.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__3_1.ggParameter.sx=1;me.__3_1.ggParameter.sy=1;
						} else {
							me.__3_1.ggParameter.sx=1.2;me.__3_1.ggParameter.sy=1.2;
						}
						me.__3_1.ggScaleActive=!flag;
							me.__3_1.style.transform=parameterToTransform(me.__3_1.ggParameter);
						setTimeout(function() {skin.updateSize(me.__3_1);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me.__1;
	};
	function SkinHotspotClass__5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__5=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\ub9e4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__5.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_5']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_5']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\ub2e8\uc5f4\ud544\ub984";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__6.onclick=function (e) {
				skin.__12.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/mat\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__12.ggUpdateText();
			skin.__12.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films', true);
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_10=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_10.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__3_10);
		el=me._rectangle_50=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_160=document.createElement('div');
		els=me._svg_160__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMSAyOSIgaGVpZ2h0PSIyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMSIgZD0iTTIwLjQ0NjYgMjYuNDEwOEMxOS45MDM3IDI3LjE4MTYgMTkuNjMyMiAyNy41NjcgMTkuMjI0MSAyNy42Mzc4QzE4LjgxNiAyNy43MDg2IDE4LjQzMDYgMjcuNDM3MSAxNy42NTk4IDI2Ljg5NDJMNC40NTY3NSAxNy41OTQ5QzQuMTM4NSAxNy4zNzA3IDMuOTc5MzcgMTcuMjU4NiAzLjg3NTAxIDE3LjFDMy43NzA2NCAxNi45NDEzIDMuNzMwNz'+
			'QgMTYuNzUwOCAzLjY1MDkyIDE2LjM2OThMMS4zMDIwOSA1LjE1NzY1QzEuMDk2MTQgNC4xNzQ1MiAwLjk5MzE1OSAzLjY4Mjk1IDEuMjQzNDggMy4zMjc1NUMxLjQ5MzggMi45NzIxNSAxLjk5MTMzIDIuOTAzNTQgMi45ODYzOSAyLjc2NjMyTDE0LjMzNDUgMS4yMDE0MUMxNC43MjAyIDEuMTQ4MjMgMTQuOTEzIDEuMTIxNjQgMTUuMDk3NSAxLjE2NjQ3QzE1LjI4MjEgMS4yMTEyOSAxNS40NDEyIDEuMzIzMzcgMTUuNzU5NCAxLjU0NzUzTDI4Ljk2MjUgMTAuODQ2OUMyOS43MzMzIDExLjM4OTggMzAuMTE4NyAxMS42NjEyIDMwLjE4OTUgMTIuMDY5NEMzMC4yNjAzIDEyLjQ3NzUgMjkuOTg4OCAx'+
			'Mi44NjI5IDI5LjQ0NTkgMTMuNjMzN0wyMC40NDY2IDI2LjQxMDhaIiBzdHJva2U9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
		me._svg_160__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_160.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_160.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_50.appendChild(me._svg_160);
		me.__6.appendChild(me._rectangle_50);
		me._external_2.appendChild(me.__6);
		me.__5.appendChild(me._external_2);
		me.elementMouseOver['_5']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__5;
	};
	function SkinHotspotClass__7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__7=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\ub2e8\uc5f4\ud544\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 282px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__7.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_7']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_7']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_20=document.createElement('div');
		els=me._external_20__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_20.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_20.ggSubElement.setAttribute('alt', player._(me._external_20.ggAltText));
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_20.ggText_untranslated = img;
			me._external_20.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_20.ggSubElement.style.width = '0px';
			me._external_20.ggSubElement.style.height = '0px';
			me._external_20.ggSubElement.src='';
			me._external_20.ggSubElement.src=me._external_20.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_20.ggText != player._(me._external_20.ggText_untranslated)) {
				me._external_20.ggText = player._(me._external_20.ggText_untranslated);
				me._external_20.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_20.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_20.clientWidth;
			var parentHeight = me._external_20.clientHeight;
			var img = me._external_20__img;
			var aspectRatioDiv = me._external_20.clientWidth / me._external_20.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_20.ggScrollbars || currentWidth < me._external_20.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_20.ggScrollbars || currentHeight < me._external_20.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\ub2e8\uc5f4\ud544\ub984";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__8.onclick=function (e) {
				skin.__12.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/films\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin.__12.ggUpdateText();
			skin.__12.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_films', true);
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_11=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3_11.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me.__3_11);
		el=me._rectangle_51=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #0057ff;';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_51.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_161=document.createElement('div');
		els=me._svg_161__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMSAyOSIgaGVpZ2h0PSIyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMSIgZD0iTTIwLjQ0NjYgMjYuNDEwOEMxOS45MDM3IDI3LjE4MTYgMTkuNjMyMiAyNy41NjcgMTkuMjI0MSAyNy42Mzc4QzE4LjgxNiAyNy43MDg2IDE4LjQzMDYgMjcuNDM3MSAxNy42NTk4IDI2Ljg5NDJMNC40NTY3NSAxNy41OTQ5QzQuMTM4NSAxNy4zNzA3IDMuOTc5MzcgMTcuMjU4NiAzLjg3NTAxIDE3LjFDMy43NzA2NCAxNi45NDEzIDMuNzMwNz'+
			'QgMTYuNzUwOCAzLjY1MDkyIDE2LjM2OThMMS4zMDIwOSA1LjE1NzY1QzEuMDk2MTQgNC4xNzQ1MiAwLjk5MzE1OSAzLjY4Mjk1IDEuMjQzNDggMy4zMjc1NUMxLjQ5MzggMi45NzIxNSAxLjk5MTMzIDIuOTAzNTQgMi45ODYzOSAyLjc2NjMyTDE0LjMzNDUgMS4yMDE0MUMxNC43MjAyIDEuMTQ4MjMgMTQuOTEzIDEuMTIxNjQgMTUuMDk3NSAxLjE2NjQ3QzE1LjI4MjEgMS4yMTEyOSAxNS40NDEyIDEuMzIzMzcgMTUuNzU5NCAxLjU0NzUzTDI4Ljk2MjUgMTAuODQ2OUMyOS43MzMzIDExLjM4OTggMzAuMTE4NyAxMS42NjEyIDMwLjE4OTUgMTIuMDY5NEMzMC4yNjAzIDEyLjQ3NzUgMjkuOTg4OCAx'+
			'Mi44NjI5IDI5LjQ0NTkgMTMuNjMzN0wyMC40NDY2IDI2LjQxMDhaIiBzdHJva2U9IiNmZmZmZmYiLz4KPC9zdmc+Cg==';
		me._svg_161__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_161.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_161.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_51.appendChild(me._svg_161);
		me.__8.appendChild(me._rectangle_51);
		me._external_20.appendChild(me.__8);
		me.__7.appendChild(me._external_20);
		me.elementMouseOver['_7']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_20.style.width=hotspot.customimagewidth + 'px';
			me._external_20.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_20.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_20.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.__div = me.__7;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='집꾸미기버튼-단열필름') {
				hotspot.skinid = '집꾸미기버튼-단열필름';
				hsinst = new SkinHotspotClass__7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='집꾸미기버튼-매트') {
				hotspot.skinid = '집꾸미기버튼-매트';
				hsinst = new SkinHotspotClass__5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='집꾸미기-에어컨') {
				hotspot.skinid = '집꾸미기-에어컨';
				hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Nanum+Gothic&family=Noto+Sans+KR:wght@100..900&display=swap"); .ggskin { font-family: Mukta,Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; color:#393939; text-rendering: optimizeLegibility; /* 부드러운 렌더링 적용 */ -webkit-font-smoothing: antialiased; /* 웹킷 기반 브라우저 (Chrome, Safari) 부드러운 글꼴 */ -moz-osx-font-smoothing: grayscale; /* macOS 최적화 */ } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .noto-sans-kr { font-family: "Noto Sans KR", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};