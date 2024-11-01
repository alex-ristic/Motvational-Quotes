/* Variables */

let btn = document.querySelector (".button")
let quote = document.querySelector (".quote")
let person = document.querySelector (".person")
console.log(btn)

let allQuotes = [
    {
        person: "Jocko Willink",
        quote: "\"Discipline equals freedom.\""
    }, {
        person: "Jocko Willink",
        quote: "\"Good.\""
    }, {
        person: "Chris Williamson",
        quote: "\"Your success is defined by your ability to outlast discomfort.\""
    }, {
        person: "Chris Williamson",
        quote: "\"The time you waste wishing things were different is time you could use to make a difference.\""
    }, {
        person: "Alex Hormozi",
        quote: "\"Success isn’t owned; it’s rented, and the rent is due every day.\""
    }, {
        person: "Alex Hormozi",
        quote: "\"Don’t wait to feel motivated. Act without it, and let the results motivate you.\""
    }, {
        person: "Alex Hormozi",
        quote: "\"The path of an exceptional person is one of an exception. Which means that you are not with other people.\""
    }, {
        person: "Alex Hormozi",
        quote: "\"You always have to be the person that's rooting for you before everyone else does. And it's usually a single clap in the auditorium for a very long period of time.\""
    }, {
        person: "David Goggins",
        quote: "\"You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.\""
    }, {
        person: "David Goggins",
        quote: "\"When you think you’re done, you’re only at 40% of what your body is capable of doing.\""
    }, {
        person: "Marcus Aurelius",
        quote: "\"The impediment to action advances action. What stands in the way becomes the way.\""
    }, {
        person: "Marcus Aurelius",
        quote: "\"You have power over your mind—not outside events. Realize this, and you will find strength.\""
    }, {
        person: "Epictetus",
        quote: "\"It’s not what happens to you, but how you react to it that matters.\""
    }, {
        person: "Epictetus",
        quote: "\"First say to yourself what you would be; then do what you have to do.\""
    }, {
        person: "Seneca",
        quote: "\"It is not the man who has too little, but the man who craves more, that is poor.\""
    }, {
        person: "Seneca",
        quote: "\"Luck is what happens when preparation meets opportunity.\""
    }, {
        person: "Napoleon Bonaparte",
        quote: "\"Impossible is a word to be found only in the dictionary of fools.\""
    }, {
        person: "Napoleon Bonaparte",
        quote: "\"Courage isn’t having the strength to go on; it is going on when you don’t have strength.\""
    }, {
        person: "Alexander the Great",
        quote: "\"I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.\""
    }, {
        person: "Alexander the Great",
        quote: "\"There is nothing impossible to him who will try.\""
    }, {
        person: "The Bible",
        quote: "\"I can do all things through Him who strengthens me.\""
    }, {
        person: "The Bible",
        quote: "\"Be strong and courageous. Do not be afraid; do not be discouraged.\""
    }, {
        person: "Julius Caesar",
        quote: "\"Veni, vidi, vici.\""
    }, {
        person: "Julius Caesar",
        quote: "\"Experience is the teacher of all things.\""
    }, {
        person: "Muhammad Ali",
        quote: "\"He who is not courageous enough to take risks will accomplish nothing in life.\""
    }, {
        person: "Franklin D. Roosevelt",
        quote: "\"The only limit to our realization of tomorrow is our doubts of today.\""
    }, {
        person: "Bruce Lee",
        quote: "\"Do not pray for an easy life; pray for the strength to endure a difficult one.\""
    }, {
        person: "Henry Ward Beecher",
        quote: "\"Greatness lies not in being strong, but in the right use of strength.\""
    }, {
        person: "General George S. Patton",
        quote: "\"The more you sweat in training, the less you bleed in battle.\""
    }, {
        person: "Booker T. Washington",
        quote: "\"Success is to be measured not so much by the position that one has reached in life as by the obstacles he has overcome.\""
    }, {
        person: "John Wooden",
        quote: "\"Do not let what you cannot do interfere with what you can do.\""
    }, {
        person: "Marcus Aurelius",
        quote: "\"It is not death that a man should fear, but he should fear never beginning to live.\""
    }, {
        person: "Charles Darwin",
        quote: "\"A man who dares to waste one hour of time has not discovered the value of life.\""
    }, {
        person: "Bear Grylls",
        quote: "\"The only way to deal with fear is to face it head-on. Embrace the things you’re afraid of.\""
    }
];


btn.addEventListener ("click", () => {
    let random = Math.floor(allQuotes.length * Math.random());
    console.log(allQuotes[random].person)

    person.innerText = allQuotes[random].person;
    quote.innerText = allQuotes[random].quote;
})