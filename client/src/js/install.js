const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    deferredPrompt = e
    butInstall.style.visibility = `visible`
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = deferredPrompt
   if (!promptEvent) {return}
   promptEvent.prompt()
   deferredPrompt = null
   butInstall.style.visibility=`hidden`     
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    deferredPrompt = null
    console.log(event)
});
