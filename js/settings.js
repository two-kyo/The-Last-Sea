//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 9; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "gif"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = ""; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = 1;}

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "The Start",
        date: writeDate(2025, 6, 16),
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 2, //how many image files this page is split into
        authorNotes: ` <strong style="align: center;"> <br>"Huh... why are we here?... Alright, let me tell you a story..."</strong>
                        <p>Not a fictional one this time, something that actually happened.</p>
            `,
    },
    {
        pgNum: 2,
        title: ">",
        date: writeDate(2025, 6, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: ` <strong style="align: center;"> <br>Many years ago...</strong>
                       <p>Humans walked on what we used to call "Land".<br>
                       Places so high the water could'nt cover them.<br><br>
                       At the time, a privilegue that went unnoticed, until one day it was taken away.</p> 
            `,
    },
    {
        pgNum: 3,
        title: ">",
        date: writeDate(2025, 6, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: ` <strong style="align: center;"> <br>One Day...</strong>
                       <p>The planet began to tremble.<br><br>
                       Cities crumbled. Statues cracked. The wolrd fell into chaos.</p>
            `,
    },
    {
        pgNum: 4,
        title: ">",
        date: writeDate(2025, 6, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: ` <strong style="align: center;"> <br>Soon...</strong>
                       <p>Then, when we thought it was over, the water level began to rise, slowly but endlessly.<br><br>
                       And just like that the world as we knew it had ended there.</p>
            `,
    },
    {
        pgNum: 5,
        title: ">",
        date: writeDate(2025, 6, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: `<p>But we humans are stubborn. The strongest of us took the ships once merely used for transportation and tavel, now repurposed for survival.
            <strong>Thats why we're here.</strong>
            `,
    },
    {
        pgNum: 6,
        title: "ACT 1",
        date: writeDate(2025, 6, 26),
        altText: "Nixie Fischer",
        imageFiles: 1,
        authorNotes: `<p><i>There's a girl fishing on a boat close to the mothership...<br><br>She seems too have found something...<br><br>Her name is <strong>Nixie Fischer</strong></i></p>
            `,
    },
    {
        pgNum: 7,
        title: "ACT 1 - Strange Object",
        date: writeDate(2025, 6, 26),
        altText: "",
        imageFiles: 1,
        authorNotes: `<p>A strange object shines under-water <br>It's too dark and the water is too cloudy to see what it is precisely.<br><br>Nixie had been trying to catch it with her <i>Fishing Rod</i></p>
            `,
    },
    {
        pgNum: 8,
        title: "ACT 1 - Got it!",
        date: writeDate(2025, 6, 27),
        altText: "",
        imageFiles: 2,
        authorNotes: `<p>She got it!<br>Seems to be a necklace, with a crystal gem in shape of an eye, Nixie seemed very excited to get it back<br>it was dropped overboard a few hours ago, she has been looking for it ever since.</p>
            `,
    },
    {
        pgNum: 9,
        title: "ACT 1 - Deep Diving",
        date: writeDate(2025, 6, 27),
        altText: "",
        imageFiles: 2,
        authorNotes: `<p>She put on the necklace, and then let herself fall into the water.<br>All sound stopped<br>The deeper she dived, the darker her surroundings became, and as in response her necklace shone brighter and brighter.</p>
            `,
    },
];

function findGetParameter(parameterName) { 
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) {
    const date = new Date(year,month-1,day)
    .toDateString()
    .toString()
    .slice(4)
    return date
}
