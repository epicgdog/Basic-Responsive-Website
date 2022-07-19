document.addEventListener("DOMContentLoaded", () => {
    const parentNode = document.getElementsByClassName("mainContainer")[0]
    
    for (let i = 0; i < 1000; i++){
        const para = document.createElement("p"); 
        para.textContent = `Grid ${i}`; 
        para.style = "border: 2px solid blue;"
        document.body.appendChild(para);
    }
})


document.addEventListener("sdfjksldfsfs")