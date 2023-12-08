const progress = document.getElementById("progress");
// progressi id olarak yazdığım için () içerisinde . ya da herhangi bir işaret kullanmadan direkt olarak "" içerisinde çağırabildim.
// id yi çağırma yöntemi ise document.getElementById("") şeklindedir.

const circles = document.querySelectorAll(".circle");
// circleler birer class olduğu için ve her bir eleman için aynı class adına sahip oldukları için  querySelectorAll methodunu kullandım ve class olduğu için (".class adı") şeklinde yazdım.

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentActive = 1;

next.addEventListener("click", () =>{
    currentActive ++;
    
    if(currentActive > circles.length){
        currentActive = circles.length;

    }
    update();
});

prev.addEventListener("click", () =>{
    currentActive --;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})

function update(){
    circles.forEach((circle,index) =>{
        if(index < currentActive){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }   

    })

    const actives = document.querySelectorAll(".active");

    //console.log(actives.length, circles.length);
    //console.log((actives.length -1) / (circles.length -1) * 100);

    progress.style.width = (actives.length -1) / (circles.length -1) * 100;

    // eğerki circlelerin değeri 0 a gelirse prev butonunu disabled yap max circles.length olursa next butonunu disabled yap ama her ikiside değilse iki butonu da enabled yap.

    if(currentActive === 1){
        prev.disabled = true;
    }
    else if(currentActive === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;

    }
}





