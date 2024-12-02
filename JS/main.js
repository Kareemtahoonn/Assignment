var quotes = [
    {
        author : "Oscar Wilde",
        quote : "Be yourself; everyone else is already taken.",
    },
    {
        author : "Albert Einstein",
        quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    },
    {
        author : "Mahatma Gandhi",
        quote : "Be the change that you wish to see in the world.",
    },
    {
        author : "Mark Twain",
        quote : "If you tell the truth, you don't have to remember anything.",
    },
    {
        author : "Oscar Wilde",
        quote : "Always forgive your enemies; nothing annoys them so much.",
    },
    {
        author : "Marilyn Monroe",
        quote : "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    },
    {
        author : "Bernard M. Baruch",
        quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    }
]
function generate(){
    const random = Number.parseInt(Math.random()*quotes.length);
    document.querySelector('#quote').textContent = `${quotes[random].quote}`;
    document.querySelector('#author').textContent = `${quotes[random].author}`;
    
}