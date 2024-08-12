//All credit for the icons goes to icons8. https://icons8.com/

var loopButton = (document.getElementsByClassName("repeat")[0]);

var songs = document.getElementsByClassName("ytmusic-carousel");


loopButton.addEventListener('click', function() {

});

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

// const regex = new RegExp(/repeat=NONE|repeat=ALL|repeat=ONE/g);

function testRegex(str) {
    const regexNONE = new RegExp(/repeat=NONE/g);
    const regexALL = new RegExp(/repeat=ALL/g);
    const regexONE = new RegExp(/repeat=ONE/g);
    
    if (regexNONE.test(getCookie('PREF'))) {
        return 'NONE';
    } else if (regexALL.test(getCookie('PREF'))) {
        return 'ALL';
    } else if (regexONE.test(getCookie('PREF'))) {
        return 'ONE';
    };
};

Array.from(songs).forEach((element) => {
    element.addEventListener('click', function() {
        if (testRegex(getCookie('PREF')) == 'NONE') {
            loopButton.click();
            // setTimeout(() => {
            //     loopButton.click();    
            // }, 300);
        } else if (testRegex(getCookie('PREF')) == 'ALL') {
            loopButton.click();
        }
    });
});