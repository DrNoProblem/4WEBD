const openUserSign = (type: string) => {
    var target = document.querySelector('.user-window')!.classList;
    if (type !== 'close') {
        if (target.value.includes('active-up') || target.value.includes('active-in')) {
            if (target.value.includes('active-up') && type === 'in') {
                target.remove('active-up');
                target.add('active-in');
            }
            else if (target.value.includes('active-in') && type === 'up') {
                target.remove('active-in');
                target.add('active-up');
            }
        }
        else {
            target.add('active-' + type);
        }
    }
    else if (type === 'close') {
        target.remove('active-up');
        target.remove('active-in');
    }
}


export default openUserSign;