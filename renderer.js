// import config from './config'

document.getElementById('menu-btn').addEventListener('click', () => {
    window.ipcRender.send('message:main');
});

document.getElementById('youtube-btn').addEventListener('click', () => {
    window.ipcRender.send('message:youtube');
});

document.getElementById('netflix-btn').addEventListener('click', () => {
    window.ipcRender.send('message:netflix');
});

// for (key in config.app) {
//     document.getElementById(key + '-btn').addEventListener('click', () => {
//         window.ipcRender.send('message:' + key);
//     });
// }
