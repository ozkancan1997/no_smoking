const noSmokeCounter = {
    
    baseDate : new Date(2024, 11, 21, 22, 20, 0, 0),
    
    init : function(){
        const daysLabel = document.getElementById("days");

        setInterval(() => {
            const total = parseInt((Date.now() - this.baseDate.getTime())/86400000);
            daysLabel.innerText = total;
        }, 1000);
    }

    

}