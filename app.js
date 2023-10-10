var mainDiv= document.getElementById("main-div");
var div = document.createElement("div");
div.setAttribute("class","1stdiv");
var h1 = document.createElement("h1");
var t1 = document.createTextNode("todo-app");
h1.appendChild(t1);
div.appendChild(h1);
mainDiv.appendChild(div);
console.log(mainDiv);

// now creating other elements..

var div2 = document.createElement("div");
div2.setAttribute("class","todo-work");
var input = document.createElement("input");
input.setAttribute("id","todo-input")
input.setAttribute("placeholder","enter your work here");
input.setAttribute("type","text");
div2.appendChild(input);
mainDiv.appendChild(div2);



var button = document.createElement("button");
button.setAttribute("onclick","setwork()")
var t2 = document.createTextNode("add work");
button.appendChild(t2);
mainDiv.appendChild(button);


var div3 = document.createElement("div");
div3.setAttribute("class","todo-output");

mainDiv.appendChild(div3)
var ol = document.createElement("ol");
ol.setAttribute("class","ol-list");
div3.appendChild(ol);


function setwork(){
    var todo = document.getElementById("todo-input").value;
    var li = document.createElement('li');
    var t2 = document.createTextNode(todo);
    li.appendChild(t2)
    ol.appendChild(li);

    var dlt = document.createElement("button");
    var t4 = document.createTextNode("delete");
    dlt.appendChild(t4);

    var edt = document.createElement('button');
    var t5 = document.createTextNode("edit");
    edt.appendChild(t5);



    li.appendChild(dlt);
    li.appendChild(edt);

    dlt.addEventListener('click',function(){
        li.parentNode.removeChild(li)
    });

    edt.addEventListener('click',function(){
        var ethis = this.parentNode.childNodes[0].nodeValue;
        var edy = prompt("enter your corrected one",ethis);
        li.innerHTML=edy; 


        li.appendChild(dlt);
        li.appendChild(edt);
    


    })
    document.getElementById("todo-input").value=""



}





