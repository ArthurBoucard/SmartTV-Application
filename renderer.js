// const config = require('./config');

document.getElementById('menu-btn').addEventListener('click', () => {
    window.ipcRender.send('message:main');
});

document.getElementById('youtube-btn').addEventListener('click', () => {
    window.ipcRender.send('message:youtube');
});

document.getElementById('netflix-btn').addEventListener('click', () => {
    window.ipcRender.send('message:netflix');
});

document.getElementById('disney-btn').addEventListener('click', () => {
    window.ipcRender.send('message:disney');
});

document.getElementById('amazon_prime-btn').addEventListener('click', () => {
    window.ipcRender.send('message:amazon_prime');
});

// Possible scalable solution

// for (key in config.config.app) {
//     if (config.config.app[key].status) {
//         document.getElementById(key + '-btn').addEventListener('click', () => {
//             window.ipcRender.send('message:' + key);
//         });
//     }
// }
