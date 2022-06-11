
const icon = document.getElementById('icon');


const thermometer = () => {

    const icons = ['&#xf2cb;', '&#xf2ca;', '&#xf2c9;', '&#xf2c8;', '&#xf2c7;']

    const colors = ['#FF0000', '#FFC100', '#FFFF00', '#D6FF00', '#63FF00']

    let c = 1;

    setInterval(() => {
        icon.innerHTML = icons[c % 5];
        icon.style.color = colors[c++ % 5];
    }, 600)
}


thermometer();
