document.getElementById('youtube-btn').addEventListener('click', () => {
    window.ipcRender.send('message:youtube');
});

document.getElementById('menu-btn').addEventListener('click', () => {
    window.ipcRender.send('message:main');
});