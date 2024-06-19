document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            alert("button clicked");
        });
    })

    console.log("Sample JS loaded and ready");
})


function sampleFunction(){
    console.log("This is a sample function");
}


let sampleVar = "This is a sample variables";



