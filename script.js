// function changeLinks() {
//     if(newLinks.length != 0) {
//         oldLinks = oldLinks.concat(linksList);
//         linksList = [];
//         for(let i = 0; i < linksList.length; i++) {
//             links[i] = newLinks[0]; // linkList is populated by newLinks' first element (because it deletes the first w every iteration)
//             newLinks.shift(); // Removes fist element of newLinks since it's been moved to linkLists
//             alert(newLinks);
//         }
//     }
//     else {
//         return;
//     }
//     alert(linksList);
//     alert(oldLinks);
// }

const btn0 = document.querySelector('#btn0');
btn0.onclick = () => alert("Wrong button, punk!");

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("You're rebellious, I like that");
});

function alertFunction() {
    alert("Boohoo! Cry about it");
}

// btn2.onclick = alertFunction;

btn2.addEventListener('click', alertFunction);

btn3.addEventListener('click', function (e) {
    
});


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('mouseover', function (e) {
        console.log(e.target);
        e.target.style.background = 'green';
    });
    button.addEventListener('click', function (e) {
        console.log(e.taget);
        e.target.style.background = 'orange';
        
    });
    button.addEventListener('wheel', function (e) {
        console.log(e.taget);
        e.target.style.background = 'red';
        
    });
    button.addEventListener('mouseout', function (e) {
        console.log(e.target);
        e.target.style.background = 'white';
    });
});

let links = document.querySelectorAll('a');
let linksList = [...links];
//alert(linksList);
linksList.length = 3;

let newLinks = ['https://home.rtx.com/', 'https://www.theodinproject.com/lessons/foundations-links-and-images', 'https://htmlcheatsheet.com/css/', 'https://stackoverflow.com/questions/16595894/how-to-typecast-integer-to-unsigned-in-vhdl', 'https://github.com/byu-cpe/ecen330_student/blob/main/lab5_touchscreen/main.c', 'https://www.youtube.com/watch?v=gUiX8aMV5oE'];
let buttonNames = ["Song", "Scripture", "Art"];
let swagLinksText = ["RTX", "Links and Images", "Cheatsheet", "1", "2", "3"];
const oldLinks = [];
alert(newLinks);
let colors = ["red", "green", "yellow"];
let scriptureLinksArray = ['https://www.churchofjesuschrist.org/study/scriptures/nt/john/14?lang=eng&id=p26-p27#p26',
                            'https://www.churchofjesuschrist.org/study/scriptures/nt/john/4?lang=eng&id=p10#p10',
                            'https://www.churchofjesuschrist.org/study/scriptures/nt/john/9?lang=eng&id=p25#p25',
                            'https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/6?lang=eng&id=p34#p34',
                            'https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/7?lang=eng&id=p5-p9#p5',
                            'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=p19#p19'
                            ];
let scriptureArray = [
                    'John 14:26-27',
                    'John 4:10',
                    'John 9:25',
                    'Moses 6:34',
                    'Moroni 7:5-9',
                    'Mosiah 4:19'
                    ];
var scriptureIndex = 0;

let songLinksArray = [
    'https://open.spotify.com/embed/track/5O4erNlJ74PIF6kGol1ZrC?si=4f07731872714cf7',
    'https://open.spotify.com/embed/track/4OP2L3JyV3h3OZyFl7Idv2?si=593fe7dbc25b414f',
    'https://open.spotify.com/embed/track/1kwPxt35W7cG3rryxR48PO?si=ed7001accf824e77',
    'https://open.spotify.com/embed/track/6vz3Fyhj6smbuYuaIZHksu?si=5ed308fe30e849f3',
    'https://open.spotify.com/embed/track/4ogBMiVVffo2hRtPS6EU0H?si=88ed8c6138d043d7',
    'https://open.spotify.com/embed/track/4M0cP6Qafv6FfBkq4EMaaB?si=68dace7393724b75'
];
let songArray = [
    '"Could You Be Loved" by Bob Marley',
    '"NuWhip" by Paris Texas',
    '"Johnny Dang" by That Mexican OT',
    '"Too Fast" by Jay Rock',
    '"Moonwalk" by Varsity Mac',
    '"Talk to the Lord" by Natalie Bergman'
];
var songIndex = 0;

function change() {
    var x = document.getElementById("bod").querySelectorAll('a');
    // const list = document.body.childNodes;
    // let text = "";
    for (let i = 0; i < x.length; i++) {
        x[i+1].style.backgroundColor = colors[i];
        // let swag = document.getElementById(i+1).innerHTML = buttonNames[i];
        var swagLinks = document.getElementById('link'+(i+1));
        swagLinks.setAttribute('href', newLinks[i]);
        swagLinks.innerHTML = swagLinksText[i];
    }
    
}

function changeScripture() {
    var link = document.getElementById('scripture');
    for(let i = 0; i < scriptureLinksArray.length; i++) {
        if(i == scriptureIndex) {
            link.setAttribute('href', scriptureLinksArray[i]);
            link.innerHTML = scriptureArray[i];
        }
    }
    
    scriptureIndex++;
}

function changeSong() {
    var link = document.getElementById('song');
    for(let i = 0; i < scriptureLinksArray.length; i++) {
        if(i == songIndex) {
            link.setAttribute('src', songLinksArray[i]);
            link.innerHTML = songArray[i];
        }
    }

    songIndex++;
}

function updateTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var displayHours;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours > 12) {
        displayHours = hours - 12;
    }
    else {
        displayHours = hours;
    }
    var t_str = displayHours + ":" + minutes + "." + seconds + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('time_span').innerHTML = t_str;

}
setInterval(updateTime, 1000);
// changes links every 3 seconds
setInterval(changeScripture, 3000);
setInterval(changeSong, 3000);

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  