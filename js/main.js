console.log("Hello World");

var C1;

function prepareNovel()
{
    novel.imagePath = "";
    novel.audioPath = "";
    C1 = new Character("Jo");
    n = new Character("Narrator");
    script = [
        label, "start",
        n, "It&rsquo;s a beautiful day at Montgomery Hill Park, where we meet Tyler the tourist, who is looking for Gavin the Guide.",
        jsCall, {fcn : hiFriend, params : ["Jacob"]},
        n, "That all changed one day when the FIRE NATION ATTACKED!"
    ]
}

function hiFriend(name){
    console.log("Hello " + name + "!");
}