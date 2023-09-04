
        // Obtém o botão e o vídeo pelo ID
        var botaoAbrirVideo = document.getElementById('botaoAbrirVideo');
        var meuVideo = document.getElementById('meuVideo');

        // Adiciona um evento de clique ao botão
        botaoAbrirVideo.addEventListener('click', function() {
            // Verifica se o vídeo está pausado
            if (meuVideo.paused) {
                // Se estiver pausado, reproduz o vídeo
                meuVideo.play();
                botaoAbrirVideo.innerHTML = 'Pausar Vídeo';
            } else {
                // Se estiver reproduzindo, pausa o vídeo
                meuVideo.pause();
                botaoAbrirVideo.innerHTML = 'Abrir Vídeo';
            }
        });
