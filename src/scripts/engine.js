const pianoKeys = document.querySelectorAll('.key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

let mapedKeys = [];
let audio = new Audio('');

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => clickedKey.classList.remove('active'), 150);
}

pianoKeys.forEach(key => {
    mapedKeys.push(key.dataset.key)
    key.addEventListener('click', () => {
        playTune(key.dataset.key)
    })
})

document.addEventListener('keydown', (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key)
    }
})

const handleVolumeChange = (e) => {
    audio.volume = e.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

volumeSlider.addEventListener('input', handleVolumeChange);

keysCheck.addEventListener('click', showHideKeys)