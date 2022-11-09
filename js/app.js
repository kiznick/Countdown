let text = [
	"All i can do is watch you from far.",
	"I don't know how to love someone.",
	"I'm not sure that I can love someone.",
	"In the end, we learn how to be strong alone.",
	"It's never late to start again.",
	"Maybe I wasn't made for anyone.",
	"May be I was designed to be alone.",
	"Once upon a time, Love is hurt.",
	"I can feel you forgetting me.",
	"I also have feelings.",
	"We fall in lobe with people we can't have.",
	"Sometimes removing some people out of your life makes room for better people.",
	"All you need is love.",
	"Love is life. And if you miss love, you miss life.",
	"Love does not consist in gazing at each other but in looking together in the same direction.",
	"Love isn’t blind, it just only sees what matters.",
	"Life is the flower for which love is the honey.",
	"Friendship often ends in love, but love in friendship – never.",
	"Love is letting go of fear.",
	"You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.",
	"Men always want to be a woman’s first love. Women like to be a man’s last romance.",
	"Take away love and our earth is tomb.",
	"Live Simply, Laugh Often, Love Deeply.",
	"Some love lasts a lifetime. True love lasts forever.",
	"True love begins when nothing is looked for in return.",
	"Don’t forget the things you should remember. Don’t remember the things you should forget.",
	"Love is the flower you’ve got to let grow.",
	"We both have no idea if we’re going to be together in the end. But one thing is for sure, I’ll do everything I can to make it happen.",
	"I’m happiest when being myself and I’m myself when I’m with you.",
	"It may take only a minute to like someone, only an hour to have a crush on someone and only a day to love someone but it will take a lifetime to forget someone.",
	"You may only be one person to the world, but you may also be the world to one person.",
	"If you love someone tell them. Don’t wait or you will lose the chance.",
	"One of the best feelings is when you hug someone and they hug you back even tighter.",
	"You can close your eyes to things you don’t want to see, but you can’t close your heart to things you don’t want to feel.",
	"When love is in your heart you’re happy doing the simple chores of life.",
	"Ever has it been that love knows not its own depth until the hour of separation.",
	"Love will die if held too tightly, love will fly if held too lightly.",
	"It hurts when you have someone in your heart but you can’t have them in your arms.",
	"When you’re found someone good, don’t go looking for someone better.",
	"You can’t be good enough for everybody, but you will always be the best for the one who deserves you.",
	"We may love the wrong person, cry for the wrong person. But one thing is sure, mistakes help us find the right person",
	"Don’t let your dreams be dreams.",
	"Love your beloved like there is no tomorrow.",
	"Don’t cry because it is over, smile because it happened.",
	"Somtimes you need to fall before you can fly.",
	"Silence makes us understand ourselves.",
	"After all, life goes on.",
	"I know I’m not the best but I’m trying my best.",
	"Life is a journey not a race.",
	"I’m always tired but never of you.",
	"You made me found a happy me.",
	"Sometime I try to hide what I feel.",
	"My heart is so tired.",
	"Ask her to be my last.",
	"We are all the bad in someone's story.",
	"I’m tired of waiting."
];
text = text[Math.floor(Math.random() * text.length)];
document.title = 'New Year Countdown ' + new Date().getFullYear();
function countdown() {
    let endTime = new Date("31 December " + new Date().getFullYear() + " 23:59:59");	
    endTime = (Date.parse(endTime) / 1000);
    let now = new Date();
    now = (Date.parse(now) / 1000);
    let timeLeft = endTime - now;
    let days = Math.floor(timeLeft / 86400); 
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    let isBig = 0;
    if(days < 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    if(hours < "10") {
        hours = "0" + hours;
    }
    if(minutes < "10") {
        minutes = "0" + minutes;
    }
    if(seconds < "10") {
        seconds = "0" + seconds;
    }
    if(days == 0) {
        $("#days").remove();
    } else {
        $("#days").html(days + "<span>Days</span>");
    }
    if(days == 0 && hours == 0) {
        $("#hours").remove();
    } else {
        $("#hours").html(hours + "<span>Hours</span>");
    }
    if(days == 0 && hours == 0 && minutes == 0) {
        $("#minutes").remove();
        if(isBig == 0) {
            $("#seconds").addClass('big');
            isBig = 1;
        }
    } else {
        $("#minutes").html(minutes + "<span>Minutes</span>");
    }
    if(days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        $("#countdown").remove();
        $("#happy_new_year").css('display', 'block');
        clearInterval(countdown_timer);
        const happy_new_year_text = new TypeIt('#happy_new_year_text', {
            speed: 100,
            startDelay: 900
        })
        .type('Happy New Year ' + parseInt(new Date().getFullYear() + 1) + " !")
        .pause(3000)
        .exec(async () => {
            happy_new_year_text.destroy();
            new TypeIt('#new_year_text', {
                speed: 75,
                startDelay: 900
            })
            .type(text)
            .go();
        })
        .go();
    } else {
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
}
let countdown_timer = setInterval(function() {
    countdown();
}, 500);
countdown();