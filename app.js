const noSmokeCounter = {
    
    baseDate : new Date(2024, 11, 22, 23, 44, 0, 0),
    
    init : function(){
        const daysLabel = document.getElementById("days");
        const baseDateSpan = document.getElementById("base-date");
        baseDateSpan.innerText = moment(this.baseDate).format("MMM Do YY");
        setInterval(() => {
            const total = parseInt((Date.now() - this.baseDate.getTime())/86400000);
            daysLabel.innerText = total;
        }, 1000);
    }

    

}