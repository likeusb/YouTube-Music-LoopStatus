//All credit for the icons goes to icons8. https://icons8.com/
var loopButton = (document.getElementsByClassName("repeat")[0]);

function setCookie(value) {
    const d = new Date();
    d.setTime(d.getTime() + ((10*365+2)*24*60*60*1000));
    const date = d.toUTCString();
    
    document.cookie = "YTMusicAutoLoop="+value+"; expires="+date+"; SameSite=None; secure";
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

loopButton.addEventListener('click', function() {
    if (testRegex() == 'NONE') {
        setTimeout(() => {
            setCookie('NONE')
        }, 100);
    } else if (testRegex() == 'ALL') {
        setTimeout(() => {
            setCookie('ALL')
        }, 100);
    } else if (testRegex() == 'ONE') {
        setTimeout(() => {
            setCookie('ONE')
        }, 100);
    };
});

function testRegex() {
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

function customCookieTest() {
    if (getCookie('YTMusicAutoLoop') == 'NONE') {
        return 'NONE';
    } else if (getCookie('YTMusicAutoLoop') == 'ALL') {
        return 'ALL';
    } else if (getCookie('YTMusicAutoLoop') == 'ONE') {
        return 'ONE';
    };
};

function titleRename(){
    if (loopButton.title == 'Repeat off') {
        return 'NONE';
    } else if (loopButton.title == 'Repeat all') {
        return 'ALL';
    } else if (loopButton.title == 'Repeat one') {
        return 'ONE';
    };
};

function rememberLoopStatus() {
    while (customCookieTest() !== titleRename()) {
        if (customCookieTest() == titleRename()) {
            break;
        };
        loopButton.click();
    };
};

window.addEventListener('click', function() {
    const regExp = new RegExp(/music.youtube.com\/watch/g);
    if (regExp.test(window.location.href) == true) {
        rememberLoopStatus();
    };
});