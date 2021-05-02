$(function(){    
    $('#countdown').countdown({
        timezone:-3, //zona horaria argentina
        
        //establecemos la fecha exacta en qué termina el countdown
        year: 2021,
        month: 5,
        day: 09,
        hour: 22, //formato 24hr
        minute:0,
        second:0,
        
        //Establecemos qué haremos luego que termina el countdown
        onFinish: function () { 
            alert("Finalizó el countdown");
        } 
    });
   
});