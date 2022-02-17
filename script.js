var countdown=document.createElement("div");
countdown.setAttribute("class", "countdown")
countdown.setAttribute("style","fontsize:25px")
setTimeout(()=>{
    countdown.innerHTML ="10"
    setTimeout(()=>{
        countdown.innerHTML =""
        countdown.innerHTML ="9"
        setTimeout(()=>{
            countdown.innerHTML =""
            countdown.innerHTML ="8"
            setTimeout(()=>{
                countdown.innerHTML =""
                countdown.innerHTML ="7"
                setTimeout(()=>{
                    countdown.innerHTML =""
                    countdown.innerHTML ="6"
                    setTimeout(()=>{
                        countdown.innerHTML =""
                        countdown.innerHTML ="5"
                        setTimeout(()=>{
                            countdown.innerHTML =""
                            countdown.innerHTML ="4"
                            setTimeout(()=>{
                                countdown.innerHTML =""
                                countdown.innerHTML ="3"
                                setTimeout(()=>{
                                    countdown.innerHTML =""
                                    countdown.innerHTML ="2"
                                    setTimeout(()=>{
                                        countdown.innerHTML =""
                                        countdown.innerHTML ="1"
                                        setTimeout(()=>{
                                            countdown.innerHTML =""
                                            countdown.innerHTML ="Happy Independence Day"
                                        },2000);
                                    },2000);
                                },2000);
                            },2000);
                        },2000);
                    },2000);
                },2000);
            },2000);
        },2000);
    },2000);
},2000);
document.body.append(countdown)