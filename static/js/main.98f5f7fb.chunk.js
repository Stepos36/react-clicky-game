(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports=[{id:1,title:"Messages",image:"/images/1.png"},{id:2,title:"Calendar",image:"/images/2.png"},{id:3,title:"Photos",image:"/images/3.png"},{id:4,title:"Camera",image:"/images/4.png"},{id:5,title:"Weather",image:"/images/5.png"},{id:6,title:"Clock",image:"/images/6.png"},{id:7,title:"Notes",image:"/images/7.png"},{id:8,title:"Reminder",image:"/images/8.png"},{id:9,title:"Stocks",image:"/images/9.png"},{id:10,title:"Videos",image:"/images/10.png"},{id:11,title:"Game center",image:"/images/11.png"},{id:12,title:"Calculator",image:"/images/12.png"},{id:13,title:"Maps",image:"/images/13.png"},{id:14,title:"iTunes",image:"/images/14.png"},{id:15,title:"AppStore",image:"/images/15.png"},{id:16,title:"Passbook",image:"/images/16.png"},{id:17,title:"Apple Music",image:"/images/17.png"},{id:18,title:"Safari",image:"/images/18.png"},{id:19,title:"Compass",image:"/images/19.png"},{id:20,title:"Settings",image:"/images/20.png"},{id:21,title:"Contacts",image:"/images/21.png"},{id:22,title:"Facetime",image:"/images/22.png"},{id:23,title:"Mail",image:"/images/23.png"},{id:24,title:"Phone",image:"/images/24.png"}]},19:function(e,t,a){e.exports=a(42)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),r=a.n(s),l=a(2),c=a(3),o=a(5),m=a(4),g=a(6),p=(a(25),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("span",{className:"icon hvr-grow"},i.a.createElement("img",{alt:this.props.image.title,src:this.props.image.image,onClick:function(){return e.props.handleClick(e.props.image.id)}}))}}]),t}(n.Component)),u=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[0,1,2,3],a=[this.props.images.slice(0,6),this.props.images.slice(6,12),this.props.images.slice(12,18),this.props.images.slice(18,24)],n=[],s=0;s<t.length;s++)n.push(i.a.createElement("p",{key:"p"+t[s]},a[s].map(function(t){return i.a.createElement(p,{handleClick:e.props.handleClick,key:t.id,image:t})})));return[i.a.createElement("div",{className:"cardBoard",key:"div0"},n)]}}]),t}(n.Component)),d=a(14);a(27);var h=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},i.a.createElement("a",{href:"/",className:"navbar-brand"},"Clicky game"),i.a.createElement("div",{className:"ml-auto"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{target:"_blank",href:"https://github.com/Stepos36/react-clicky-game"},"Github")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{target:"_blank",href:"https://nelasov.me/"},"Contact me")))))};a(28);var f=function(e){return i.a.createElement("main",Object.assign({className:"wrapper"},e))};a(29);var b=function(e){return i.a.createElement("div",{className:e.class+" scoreRow"},"Score: ",e.score)},k=(a(30),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",null,"Stepan Nelasov 2019"))}}]),t}(n.Component)),v=a(8),C=a(15),E=(a(41),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={score:0,images:d,clickedIcons:[],titleMsg:"",open:!1,signClass:"neutral"},a.backToZero=function(){a.setState({score:0}),a.setState({clickedIcons:[]})},a.onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a.restartGame=function(){a.backToZero(),a.render(),a.onCloseModal()},a.handleClick=function(e){a.state.clickedIcons.includes(e)?(Object(v.a)({targets:".icon",translateX:v.a.stagger(10,{grid:[6,4],from:"center",axis:"x"}),translateY:v.a.stagger(10,{grid:[6,4],from:"center",axis:"y"}),rotateZ:v.a.stagger([0,135],{grid:[6,4],from:"center",axis:"x"}),easing:"easeInOutQuad",direction:"alternate",loop:1,duration:1e3}),a.setState({titleMsg:"You lose!"}),a.onOpenModal(),a.setState({signClass:"lose"}),setTimeout(function(){a.setState({signClass:"neutral"})},500)):23===a.state.score?(a.onOpenModal(),a.setState({titleMsg:"You win!"})):(a.state.clickedIcons.push(e),a.setState({score:a.state.score+1}),a.shuffle(a.state.images),a.setState({signClass:"win"}),setTimeout(function(){a.setState({signClass:"neutral"})},500))},a.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.open;return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement(b,{class:this.state.signClass,score:this.state.score}),i.a.createElement(f,null,i.a.createElement(u,{images:this.state.images,handleClick:this.handleClick}),i.a.createElement("div",null,i.a.createElement(C.a,{open:t,onClose:this.onCloseModal,center:!0},i.a.createElement("h2",null,this.state.titleMsg),i.a.createElement("p",null,"You scored ",this.state.score," clicks."),i.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.restartGame()}},"Play again")))),i.a.createElement(k,null))}}]),t}(n.Component));r.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.98f5f7fb.chunk.js.map