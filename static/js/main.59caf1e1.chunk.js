(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(61)},39:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(31),c=n.n(r),l=n(19),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=(n(39),n(14)),h=n(11),b=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"lightgray",padding:"10px",borderBottom:"1px red dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:f}," ","x"," ")))}}]),e}(o.Component),f={background:"red",color:"white",border:"none",cursor:"pointer",padding:"5px 9px",borderRadius:"50%",float:"right"},y=b,g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).markComplete=function(){console.log("hello")},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement("h3",null,a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo}))})}}]),e}(o.Component);var v={background:"darkgrey",padding:"10px",color:"white",textAlign:"center"},E=function(){return a.a.createElement("header",{style:v},a.a.createElement("h1",null,"ToDoList"),a.a.createElement(m.b,{to:"/React-ToDo/"},"Home")," |",a.a.createElement(m.b,{to:"/about"}," About"))},j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){n.setState({title:t.target.value})},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do....",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);var O=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"ToDo App vs 1.0"))},k=n(15),x=n.n(k),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){x.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){x.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;x.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{class:"container"},a.a.createElement(E,null),a.a.createElement(h.a,{exact:!0,path:"/React-ToDo/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:O}))))}}]),e}(o.Component);c.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.59caf1e1.chunk.js.map