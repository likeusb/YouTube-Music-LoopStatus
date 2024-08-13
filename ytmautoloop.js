//All credit for the icons goes to icons8. https://icons8.com/

var loopButton = (document.getElementsByClassName("repeat")[0]);

var carousel = document.getElementsByClassName("ytmusic-carousel");
var history = document.getElementsByClassName("ytmusic-shelf-renderer");
var results = document.getElementsByClassName("ytmusic-card-shelf-renderer");

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
        setCookie('NONE')
    } else if (testRegex() == 'ALL') {
        setCookie('ALL')
    } else if (testRegex() == 'ONE') {
        setCookie('ONE')
    };
});

function testRegex() {
    // const regex = new RegExp(/repeat=NONE|repeat=ALL|repeat=ONE/g);
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

let test = regexTest();

function regexTest() {
    while (customCookieTest() !== titleRename()) {
        if (customCookieTest() == titleRename()) {
            console.log('Complete');
            return 'Complete';
        };
        loopButton.click();
        console.log('Clicked');
    }
    console.log(titleRename(), customCookieTest());
    return 'giodfhgkldf;s';
};

function regexBasedClick() {
    regexTest();
    console.log(test);
};

Array.from(carousel).forEach((element) => {
    element.addEventListener('click', function() {
        regexBasedClick();
    });
});

Array.from(history).forEach((element) => {
    element.addEventListener('click', function() {
        regexBasedClick();
    });
});

Array.from(results).forEach((element) => {
    element.addEventListener('click', function() {
        regexBasedClick();
    });
});