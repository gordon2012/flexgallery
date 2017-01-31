require('file-loader?name=[name].[ext]!../index.html');
require('./style.css');

function removeOpen() {
    document.querySelectorAll('.panel').forEach(e => e.classList.remove('open'));
}

// *****
//
function handleClick() {
    // console.log(this.classList.contains('open'));
    // toggleOpen.bind(this)();
    if(this.classList.contains('open')) {
        toggleActive.bind(this)();
        this.addEventListener('transitionend', e => { transitionEnd(e, 'transform', 'open') } );
    } else {
        toggleOpen.bind(this)();
        this.addEventListener('transitionend', e => { transitionEnd(e, 'flex', 'active') } );
    }
}

function transitionEnd(e, transitionType, className) {
    console.log(e, transitionType, className);
    if(!e.propertyName.includes(transitionType)) return;
    e.currentTarget.classList.toggle(className);
}

function toggleOpen() {
    // removeOpen();
    this.classList.toggle('open');
}

function toggleActive() {
    this.classList.toggle('active');
}

function transformEnd(e) {
    console.log(e);
    if(!e.propertyName.includes('flex')) return;
    // console.log(e);
    this.classList.toggle('open-active');

}

const panels = document.querySelectorAll('.panel');

panels.forEach(pnl => pnl.addEventListener('click', handleClick));
// panels.forEach(pnl => pnl.addEventListener('transitionend', toggleActive));


// panels.forEach(pnl => pnl.addEventListener('click', e => {
//     removeOpen();
//     e.currentTarget.classList.add('open');
// }));
