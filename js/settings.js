//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 5; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
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
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = 1;}

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "The Start",
        date: writeDate(2025, 6, 16),
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: ` <strong style="align: center;"> <br>"Let me tell you a story..."</strong>
                       <p>One that isn't based on fiction, something that actually happened.</p>
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
                       <p>The planet began to shake violently, like never before.<br><br>
                       Everything that once stood fell, for an instant it seemed to be the end of all.</p>
            `,
    },
    {
        pgNum: 4,
        title: ">",
        date: writeDate(2025, 6, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: ` <strong style="align: center;"> <br>Soon...</strong>
                       <p>The water level began to rise, slowly but endlessly.<br><br>
                       The world as we knew it had ended there.</p>
            `,
    },
    {
        pgNum: 5,
        title: ">",
        date: writeDate(2025, 6, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: `<p>But us humans atre a resilient species, the strongest of us managed to adapt, the boats, once used merely for transportation will now be our homes, our way of living will change completely, but we'll live.<br><br></p>
            <strong>Thats why we're here.</strong>
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
