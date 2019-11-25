(this["webpackJsonpinstagram-ui"]=this["webpackJsonpinstagram-ui"]||[]).push([[0],{144:function(e,t,a){e.exports=a(296)},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(57),l=a.n(r),s=(a(149),a(150),a(7)),o=a(8),i=a(11),m=a(9),u=a(12),p=(a(151),a(40)),b=a(299),h=a(300),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,{bg:"light",expand:"lg"},c.a.createElement(b.a.Brand,{href:"#home"},"Instagram"),c.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(h.a,{className:"mr-auto"},c.a.createElement(p.b,{className:"nav-link",to:"/"},"Home"),c.a.createElement(p.b,{className:"nav-link",to:"/profile"},"Profile"),c.a.createElement(p.b,{className:"nav-link",to:"/post/create"},"New Post"))))}}]),t}(n.Component),d=(a(158),a(159),a(64)),f=a(138),j=(a(160),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"engage"},c.a.createElement("div",{className:"engageButtons"},c.a.createElement("span",{className:"post-action-buttons"},c.a.createElement("button",{className:"commentButton"},c.a.createElement(f.a,null)),c.a.createElement("button",{className:"shareButton"},c.a.createElement(d.c,null)),c.a.createElement("button",{className:"saveButton"},c.a.createElement(d.a,null))),c.a.createElement("span",{className:"post-likes"},c.a.createElement("button",{className:"likeButton"},c.a.createElement(d.b,null)),c.a.createElement("span",{className:"likesCount"},this.props.likes))))}}]),t}(n.Component)),O=(a(161),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("span",{className:"tag"},"#",this.props.children)}}]),t}(n.Component)),v=(a(162),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"tags"},this.props.tags.map((function(e){return c.a.createElement("span",null,c.a.createElement(O,null,e))})))}}]),t}(n.Component)),g=(a(163),a(164),a(139)),N=a(140),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"user-details"},c.a.createElement(N.a,{className:"user-icon",icon:g.a,size:"2x"}),this.props.children)}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"post-header"},c.a.createElement(y,null,"USER DETAILS"),c.a.createElement("div",{className:"post-date"},this.props.creationDate.toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"})))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("article",{className:"post"},c.a.createElement(k,{creationDate:new Date(1e3*this.props.datePosted)}),c.a.createElement("div",{className:"post-image"},c.a.createElement("img",{src:this.props.src})),c.a.createElement(j,{likes:this.props.likes}),c.a.createElement("div",{className:"post-content"},c.a.createElement("h1",{className:"post-title"},this.props.title),c.a.createElement(v,{tags:this.props.tags})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={posts:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/evyros/fake-api/posts").then((function(e){return e.json()})).then((function(t){e.setState({posts:t})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"feed d-flex flex-wrap card-group"},this.state.posts.map((function(e){return c.a.createElement("div",{className:"post-wrapper col-sm-12 col-md-4"},c.a.createElement(w,{title:e.title,src:e.image,likes:e.likes,datePosted:e.created,tags:e.tags}))})))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Profile")}}]),t}(n.Component),B=a(24),P=a(31),S=a(143),D=a(46),I=D.object().shape({title:D.string().min(2).max(255).required(),image:D.mixed().required(),tags:D.string()}),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"submit",value:function(e){console.log(e)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Create Post"),c.a.createElement(P.d,{initialValues:{image:"",title:"",tags:""},validationSchema:I,onSubmit:this.submit.bind(this)},c.a.createElement(P.c,{className:"col-xs-12 col-sm-6"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Image:"),c.a.createElement(P.b,{name:"image",type:"file"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Title:"),c.a.createElement(P.b,{name:"title",type:"text",placeholder:"add a title to your post...",className:"form-control"}),c.a.createElement(P.a,{className:"alert alert-danger",name:"title",component:"div"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"tags:"),c.a.createElement(P.b,{name:"tags",type:"text",placeholder:"add tags separating with comma",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement(S.a,{type:"submit"},"Post")))))}}]),t}(n.Component);var q=function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement("main",{className:"container"},c.a.createElement(B.c,null,c.a.createElement(B.a,{path:"/profile"},c.a.createElement(x,null)),c.a.createElement(B.a,{path:"/post/create"},c.a.createElement(T,null)),c.a.createElement(B.a,{path:"/"},c.a.createElement(C,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.4866a9a5.chunk.js.map