class Save{
    constructor() {
  
        if(localStorage.getItem("save_codes") != null){
            document.getElementById("textareaCode").innerHTML = localStorage.getItem("save_codes");
        }
        

    }

 
}
onload = new Save();

function save_codes(){
    var codes =  document.getElementById("textareaCode").value;

    localStorage.setItem("save_codes",codes);
}

document.getElementById("iframecontainer").style.display = "none";
function showCode(){
  document.getElementById("iframecontainer").style.display = "none";
  document.getElementById("textareacontainer").style.display = "flex";
}

function showResult(){
  document.getElementById("textareacontainer").style.display = "none";
  document.getElementById("iframecontainer").style.display = "flex";

}

if(screen.height>727){
  document.getElementById("iframecontainer").style.height = screen.availHeight - 330 + "px";

  document.getElementById("textareacontainer").style.height = screen.availHeight - 330 + "px";
}
    
else if(screen.orientation.type ="landscape-primary"){
    document.getElementById("textareacontainer").style.height = screen.availHeight - 260 + "px";
  document.getElementById("iframecontainer").style.height = screen.availHeight - 260 + "px";

document.getElementById("textareacontainer").style.minHeight = "200px";
document.getElementById("iframecontainer").style.minHeight = "200px";
}

