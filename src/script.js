$(document).ready(function () {
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'http://prtnsrc.com/2545.mp3');
    audio.addEventListener('ended',
        function () {
            this.play();
        }, false);
    $('#play').click(function () {
        audio.play();
         $('.child').append('<h1>Você caiu no gemidão do zap!!!</h1><p><span>LARGA DE SER CUZÃO SEU ARROMBADO!</span></p>');
<<<<<<< HEAD
    });
})
=======
    });   
})
>>>>>>> 3935bef0a9a83e832d8a18dbbd5e4e7510436747
