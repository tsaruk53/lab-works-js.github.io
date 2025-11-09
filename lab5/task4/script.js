function initPhotoRotator(id, arr){
    let index = 0;
    const root = document.getElementById(id);
    const titleCounter = document.createElement("p");
    const img = document.createElement("img");
    img.style.maxWidth = "600px";
    const title = document.createElement("h3");
    const desc  = document.createElement("p");
    const back  = document.createElement("a");
    back.href = "#";
    back.textContent = "Назад";
    const next  = document.createElement("a");
    next.href = "#";
    next.textContent = "Вперед";

    root.appendChild(titleCounter);
    root.appendChild(back);
    root.appendChild(document.createTextNode("   "));
    root.appendChild(next);
    root.appendChild(document.createElement("br"));
    root.appendChild(img);
    root.appendChild(title);
    root.appendChild(desc);

    function show(){
        titleCounter.textContent = `Фотографія ${index+1} з ${arr.length}`;
        img.src = arr[index].path;
        title.textContent = arr[index].title;
        desc.textContent = arr[index].description;

        back.style.visibility = index === 0 ? "hidden" : "visible";
        next.style.visibility = index === arr.length-1 ? "hidden" : "visible";
    }

    back.onclick = function(){
        if(index>0){ index--; show(); }
    }
    next.onclick = function(){
        if(index<arr.length-1){ index++; show(); }
    }

    show();
}
