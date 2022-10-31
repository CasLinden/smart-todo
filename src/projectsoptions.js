function openProjectOptions (){
const header = document.querySelector('.tabs-header');
const tabsBar = document.querySelector('.tabs-bar');
header.addEventListener('click', () => {
    tabsBar.classList.add('being-edited')
})
}