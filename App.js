 /*
<div parent>
<div child1>
<h1 hello1>
</div>

<div child 2>
<h1 hello2>
</div>

</div>




 */
 
 
 
 //create react root
 const root = ReactDOM.createRoot(document.getElementById("root"));
 //create react h1

 const child2 = React.createElement("div", {id:"child2"},["Child 2",React.createElement("h1", {}, "I am an h1 tag under child 2" )])
 const child1 = React.createElement("div", {id:"child1"}, ["Child 1",React.createElement("h1", {}, "I am an h1 tag under child 1")])
 const parent = React.createElement("div", {id:"parent"} ,[child1, child2])
 


 //render
 root.render(parent);