(function(){
    const words = [
        'Programador Web',
        'Designer Web',
        'Universitário',
        'Desenvolvedor',
        'Escritor de Scripts'
    ];

    const el = document.querySelector('.typing-text span');
    if(!el) return;

    let idx = 0;
    const changeInterval = 2500; // ms

    function showNext(){
        el.textContent = words[idx];
        idx = (idx + 1) % words.length;
    }

    showNext();
    setInterval(showNext, changeInterval);
})();
