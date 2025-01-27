const inputBox:HTMLElement|null = document.getElementById("input-box");

const listContainer:HTMLElement|null = document.getElementById("list-container");

const container:HTMLElement|null = document.querySelector(".container");

function toggleMode(){

    if (container) {
        container.classList.toggle("dark-mode");
    }

}

function addTask()
{

    if (!(inputBox instanceof HTMLInputElement) || (listContainer == null)) {
        return;
    }

    if(inputBox.value === ''){

        alert("You most write something!")

    }else{

        let li = document.createElement("li");

        li.classList.add("content")

        li.innerHTML = inputBox.value;

        listContainer.appendChild(li);

        let span = document.createElement("span");

        span.innerHTML = "\u00d7";

        li.appendChild(span);

    }

    inputBox.value = ""

    saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");

        saveData();

    }
    else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();

        saveData();

    }
})

function saveData(){

    if (listContainer == null) {
        return;
    }

    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){

    listContainer.innerHTML = localStorage.getItem("data");

}

showTask();

inputBox.addEventListener("keypress", function(e){

    if(e.key == "Enter"){

        e.preventDefault();

        document.querySelector("#button-input-box").click();

    }

})
