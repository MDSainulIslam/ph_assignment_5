
// heart button functionality
const heartIcon= document.getElementsByClassName("heart_btn");
for(const heart of heartIcon ){
    heart.addEventListener("click",function(){
       const heartPoint= document.getElementById("heart_point").innerText;
       const heartPointCount = Number(heartPoint) + 1;
       document.getElementById("heart_point").innerText= heartPointCount;
    })
}



// calling functionality
const callButtons = document.getElementsByClassName("btn_call");
for(const callbtn of callButtons){

    callbtn.addEventListener("click",function(){
    const title = callbtn.parentNode.parentNode.children[1].innerText;
    const subtitle = callbtn.parentNode.parentNode.children[2].innerText;
    const cardNumber = callbtn.parentNode.parentNode.children[3].innerText;
    
    
    const callPoint = document.getElementById("call_point").innerText;

    if(callPoint <20){
        alert("❌ আপনার পর্যাপ্ত পরিমান কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
        return;
    }

    const callPointCount = Number(callPoint) - 20;
    document.getElementById("call_point").innerText = callPointCount;

    
    const call ="📞 calling " + subtitle + " " +cardNumber;
    alert(call);


    
    const time = new Date().toLocaleTimeString();

    let elementCreate = document.createElement("div");
    elementCreate.innerHTML = `
                <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-6 gap-3 rounded-lg">
                    <div>
                        <h1 class="font-semibold text-sm mb-2">${title}</h1>
                        <p class="text-sm">${cardNumber}</p>
                    </div>
                    <div>
                        <p class="text-sm">${time}</p>
                    </div>
                </div>
    `
        document.getElementById("sidebar_card_container").append(elementCreate);

    })

}



    