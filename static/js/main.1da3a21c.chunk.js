(this["webpackJsonpinstagram-ui"]=this["webpackJsonpinstagram-ui"]||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=(a(32),a(33),a(3)),i=a(4),l=a(6),u=a(5),m=a(7),p=(a(34),a(14)),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Instagram"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-link"},r.a.createElement(p.b,{to:"/profile",href:"#"},"Profile")))))}}]),t}(n.Component),h=(a(39),a(40),a(13)),f=a(21),E=a(15),d=(a(44),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"engage"},r.a.createElement("div",{className:"engageButtons"},r.a.createElement("button",{className:"likeButton"},r.a.createElement(h.a,{icon:E.b,size:"1x"})),r.a.createElement("span",{className:"likesCount"},this.props.likes),r.a.createElement("button",{className:"commentButton"},r.a.createElement(h.a,{icon:E.a,size:"1x"})),r.a.createElement("button",{className:"shareButton"},r.a.createElement(h.a,{icon:f.b,size:"1x"})),r.a.createElement("button",{className:"saveButton"},r.a.createElement(h.a,{icon:f.a,size:"1x"}))))}}]),t}(n.Component)),v=(a(45),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{className:"tag"},"#",this.props.children)}}]),t}(n.Component)),j=(a(46),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tags"},this.props.tags.map((function(e){return r.a.createElement("span",null,r.a.createElement(v,null,e))})))}}]),t}(n.Component)),O=(a(47),a(48),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user-details"},r.a.createElement(h.a,{className:"user-icon",icon:E.c,size:"2x"}),this.props.children)}}]),t}(n.Component)),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"post-header"},r.a.createElement(O,null,"USER DETAILS"),r.a.createElement("div",{className:"post-date"},this.props.creationDate.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"})))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"post"},r.a.createElement(g,{creationDate:new Date(1e3*this.props.datePosted)}),r.a.createElement("div",{className:"post-image"},r.a.createElement("img",{src:this.props.src})),r.a.createElement(d,{likes:this.props.likes}),r.a.createElement("div",{className:"post-content"},r.a.createElement("h1",{className:"post-title"},this.props.title),r.a.createElement(j,{tags:this.props.tags})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={posts:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/evyros/fake-api/posts").then((function(e){return e.json()})).then((function(t){e.setState({posts:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"feed"},this.state.posts.map((function(e){return r.a.createElement("div",{className:"post-wrapper"},r.a.createElement(N,{title:e.title,src:e.image,likes:e.likes,datePosted:e.created,tags:e.tags}))})))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Profile")}}]),t}(n.Component),C=a(11);var w=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("main",{className:"container"},r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/profile"},r.a.createElement(k,null)),r.a.createElement(C.a,{path:"/"},r.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1da3a21c.chunk.js.map