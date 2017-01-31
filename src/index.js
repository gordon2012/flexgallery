require('file-loader?name=[name].[ext]!../index.html');
require('./style.css');


function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(!e.propertyName.includes('flex')) return;
    this.classList.toggle('active');
}


const panels = document.querySelectorAll('.panel');

panels.forEach(pnl => pnl.addEventListener('click', toggleOpen));
panels.forEach(pnl => pnl.addEventListener('transitionend', toggleActive));
