/* Variables */

// DOM variables
let btn = document.querySelector (".button")
let quote = document.querySelector (".quote")
let person = document.querySelector (".person")
let quoteStyles = document.querySelector(".quote-styles")
let note = document.querySelector(".note")
let tremble = 0

// Variables - Quotes
let motivationQuotes = [
    {
        person: "Alex Hormozi",
        quote: "\"Just Win\""
    }, {
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

let wisdomQuotes = [
    {
        person: "Socrates",
        quote: "\"The only true wisdom is in knowing you know nothing.\""
    }, {
        person: "Lao Tzu",
        quote: "\"He who knows others is wise; he who knows himself is enlightened.\""
    }, {
        person: "Albert Einstein",
        quote: "\"A clever person solves a problem. A wise person avoids it.\""
    }, {
        person: "Rumi",
        quote: "\"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.\""
    }, {
        person: "Confucius",
        quote: "\"The man who moves a mountain begins by carrying away small stones.\""
    }, {
        person: "Leonardo da Vinci",
        quote: "\"Simplicity is the ultimate sophistication.\""
    }, {
        person: "Khalil Gibran",
        quote: "\"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.\""
    }, {
        person: "Carl Jung",
        quote: "\"Who looks outside, dreams; who looks inside, awakes.\""
    }, {
        person: "Thich Nhat Hanh",
        quote: "\"People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar.\""
    }, {
        person: "Alan Watts",
        quote: "\"You are under no obligation to be the same person you were five minutes ago.\""
    }, {
        person: "The Buddha",
        quote: "\"In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.\""
    }, {
        person: "Fyodor Dostoevsky",
        quote: "\"The soul is healed by being with children.\""
    }, {
        person: "Henry David Thoreau",
        quote: "\"It’s not what you look at that matters; it’s what you see.\""
    }, {
        person: "Seneca",
        quote: "\"As is a tale, so is life: not how long it is, but how good it is, is what matters.\""
    }, {
        person: "Alan Watts",
        quote: "\"Muddy water is best cleared by leaving it alone.\""
    }, {
        person: "Ralph Waldo Emerson",
        quote: "\"What lies behind us and what lies before us are tiny matters compared to what lies within us.\""
    }, {
        person: "Victor Frankl",
        quote: "\"When we are no longer able to change a situation, we are challenged to change ourselves.\""
    }, {
        person: "Marcus Aurelius",
        quote: "\"You could leave life right now. Let that determine what you do and say and think.\""
    }, {
        person: "Anaïs Nin",
        quote: "\"We don’t see things as they are, we see them as we are.\""
    }, {
        person: "Rumi",
        quote: "\"The wound is the place where the Light enters you.\""
    }
];

// Add event listener to the parent
quoteStyles.addEventListener ("click", (e) => {
    // Checks if a button is clicked
    if (e.target.matches("button")){
        // Checks if the clicked button has "style-active" (if it is already active)
        if (e.target.classList.contains("style-active")) {
            // if it has "style-active"
            e.target.classList.remove ("style-active")

            // funny tremble
            if (tremble === 0) {
                note.innerText = `Good. Now click "New Quote" to see me trembleee...!"`
            } else if (tremble === 1 || tremble === 1.1 || tremble === 1.2 || tremble === 1.3) {
                note.innerText = "You're not following the instructions... Choose one!"
            }
        } else {
            //if it doesn't have "style-active"

            // Checks if any other button in the parent element has "style-active" and if it has, removes it
            const activeBtn = e.target.parentElement.querySelector(".style-active")
            if (activeBtn) {
                activeBtn.classList.remove("style-active")
            }
            
            // Adds "style-active" to the button clicked
            e.target.classList.add ("style-active")

            // funny tremble 
            if (tremble === 0) {
                note.innerText = `You're not listening to me... Deselect "${e.target.innerText}"`
            } else if (tremble === 1 || tremble === 1.1 || tremble === 1.2 || tremble === 1.3) {
                note.innerText = "Good job! Now click \"New Quote\""
            }
        }
    }
})


btn.addEventListener ("click", () => {
    // Determine which button is active (has style-act)
    const activeBtn = document.querySelector(".style-active")

    /* If no button has "style-active" (it is null) - text trembles to showcase that they need to select motivation or wisdom ; 
    if it is not null, then just display a new quote.
    This if is just for fun. You can delete it. */
    if (activeBtn === null) {

        //funny tremble
        if (tremble === 0) {

            note.classList.add ("tremble")
            setTimeout(() => {

                note.classList.remove("tremble");
                note.innerText = "I just trembled!"

                setTimeout (() => {
                    note.innerText = "Awesome... Now select one."
                    tremble = 1
                }, 1500)

            }, 1100);

        } else if (tremble === 1) {

            note.classList.add ("tremble")
            setTimeout(() => {
                note.classList.remove("tremble");
                note.innerText = "Once was enough... Select one."
                tremble = 1.1
            }, 1100);

        } else if (tremble === 1.1) {

            note.classList.add ("tremble")
            setTimeout(() => {
                note.classList.remove("tremble");
                note.innerText = "Please don't make me tremble anymore... Select one please."
                tremble = 1.2
            }, 1100);

        } else if (tremble === 1.2) {

            note.classList.add ("tremble")
            setTimeout(() => {
                note.classList.remove("tremble");
                note.innerText = "That's it! I'm protesting! No more trembling from me!"
                tremble = 1.3
            }, 1100);

        } else if (tremble === 1.3) {

                note.innerText = "I told you I'm not trembling anymore!"

        }
            
    } else {

        // funny tremble. can delete the if.
        if (tremble === 1 || tremble === 1.1 || tremble === 1.2 || tremble === 1.3 || tremble === 2) {
            
            // Determine which quotes to use based on which button is active
            let useQuotes
            if (activeBtn.innerText === "Motivation"){
                useQuotes = motivationQuotes
            } else if (activeBtn.innerText === "Wisdom"){
                useQuotes = wisdomQuotes
            } else {
                useQuotes = null;
            }
            
            // new quote appears
            let random = Math.floor(useQuotes.length * Math.random());
            person.innerText = useQuotes[random].person;
            quote.innerText = useQuotes[random].quote;

            // funny tremble - goodbye
            if (tremble === 2) {

            } else {

                setTimeout(() => {
                    
                    note.innerText = "That's it from me my friend... I'm out."
                    
                    setTimeout (() => {
                        note.innerText = " "
                        tremble = 2
                    }, 5000)
                    
                }, 200);
                
            }
            
        } else {
            setTimeout(() => {

                note.innerText = `Please listen to me! Deselect "${activeBtn.innerText}."`

            }, 200)
        }
    }

    
})


   