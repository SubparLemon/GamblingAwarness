function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function topFunction() {
    console.log('click');
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

function scrollToElement(element) {
    let target = document.getElementById(element)
    target.scrollIntoView({ behavior: 'smooth', offsetTop: -20 });
    console.log('click');
}

function test() {
    console.log('click')
}

const quizQuestions = [
    {
        question: "Did you ever lose time from work or school due to gambling?",
        answer: true
    },
    {
        question: "Has gambling ever made your home life unhappy?",
        answer: true
    },
    {
        question: "Did gambling affect your reputation?",
        answer: true
    },
    {
        question: "Have you ever felt remorse after gambling?",
        answer: true
    },
    {
        question: "Did you ever gamble to get money with which to pay debts or otherwise solve financial difficulties?",
        answer: true
    },
    {
        question: "Did gambling cause a decrease in your ambition or efficiency?",
        answer: true
    },
    {
        question: "After losing did you feel you must return as soon as possible and win back your losses?",
        answer: true
    },
    {
        question: "After a win did you have a strong urge to return and win more?",
        answer: true
    },
    {
        question: "Did you often gamble until all your money was gone?",
        answer: true
    },
    {
        question: "Did you ever borrow to finance your gambling?",
        answer: true
    },
    {
        question: "Have you ever sold anything to finance gambling?",
        answer: true
    },
    {
        question: "Were you reluctant to use \"gambling money\" for normal expenditures?",
        answer: true
    },
    {
        question: "Did gambling make you careless of the welfare of yourself or your family?",
        answer: true
    },
    {
        question: "Did you ever gamble longer than you had planned?",
        answer: true
    },
    {
        question: "Have you ever gambled to escape worry, trouble, boredom, loneliness, grief or loss?",
        answer: true
    },
    {
        question: "Have you ever committed, or considered committing, an illegal act to finance gambling?",
        answer: true
    },
    {
        question: "Did gambling cause you to have difficulty in sleeping?",
        answer: true
    },
    {
        question: "Do arguments, disappointments or frustrations create within you an urge to gamble?",
        answer: true
    },
    {
        question: "Did you ever have an urge to celebrate any good fortune by a few hours of gambling?",
        answer: true
    },
    {
        question: "Have you ever considered self-destruction or suicide as a result of your gambling?",
        answer: true
    }
];
document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.querySelector('.quiz-questions');
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
        <p>Question ${index + 1}: ${q.question}</p>
        <input type="radio" name="q${index}" value="true"> Yes<br>
        <input type="radio" name="q${index}" value="false"> No<br>
      `;
        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', submitQuiz);

    function submitQuiz() {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`).value;
            if (selectedAnswer === q.answer.toString()) {
                score++;
            }
        });
        alert(`You answered yes to ${score} out of ${quizQuestions.length} questions. Most compulsive gamblers will answer Yes to at least 7`);
    }
});

var nameList = ["Robert", "Duane", "Frank", "Walter"];
var textList = ["I never thought I had a gambling problem, I thought it was more of an enjoyment. But when you lose $15,000 on a single weekend in Vegas, you know there’s something wrong. That outdid when I was using heroin – that’s how bad I felt. You go in with your head up, you come out and your head’s down, and then you continue going back and taking chances. That’s a problem.\n" +
"\n" +
"I am still in recovery from addiction. I go to meetings, and I also go to different schools and talk to kids about getting high, and how peer pressure and boredom can make you a victim – whether it’s gambling, whether it’s drugs. All that stuff has an impact on your life – I wish I’d listened to my mother a little more closely!\n" +
"\n" +
"If I met someone at a Narcotics Anonymous meeting and they told me they’re going to a casino, I would tell them: be careful, because gambling is another form of addiction. I wouldn’t tell them “don’t do it,” because that sometimes makes people want to do it even more. But they need to know it’s another form of addiction. You’ve got to take care of yourself.", "I’m a person in recovery. What that means is that I haven’t had the need to use a mind-altering substance since 2010. I did develop some severe problems gambling, though. That’s what they call a secondary addiction: when you deal with your drug problem, but get hooked on things that aren’t illegal, like drinking and gambling.\n" +
"\n" +
"And let me tell you, gambling just took off with me. I’d go to a Keno hall or a casino, and I’d say to myself, “I’ll just try out $40,” but then I’d spend all that I had in my pocket, and then take out my credit card and drop another $500. I can remember what it was like to do drugs, and gambling was the same for me. I’m playing games, rushing, scratching, all discombobulated. I was just gone. I have a nice house now, a family, a good job, and I realized that gambling was like putting rock on the pipe and pulling it. And I knew that that would destroy my life. That’s when I got help for the gambling, and things got a lot better.\n" +
"\n" +
"If someone in recovery asks me about gambling, I would tell them that when you have an addictive personality, it’s just like doing drugs. You’re getting in debt, maxing out your cards, doing the same thing and getting the same results, every time. And honestly, I can’t even say that you can go out and gamble and not end up hooked on drugs again.  Because that the way it was for me –it all went together.", "I came to Boston to go to school. When I went back to my hometown in California, I ended up living in the methamphetamine capital of the country at the time. My whole family was involved with meth. There was a casino there, too, and meth and gambling went hand in hand. We owned a piece of property, and because everyone was getting high and going to the casino, nobody was paying the mortgage. So we lost something that had been in my family for 50 years.\n" +
"\n" +
"All along, I knew that drugs and gambling were tearing my family apart, but it wasn’t until it all came to a head that I did something about it. My son was killed, and I realized that it happened because the whole lifestyle – drugs, gambling, taking big risks, they’d become normal in our house. That’s when I knew that needed to change.\n" +
"\n" +
"With the new casinos opening, all I have to say is: addiction is addiction. You can be as addicted to gambling as you are to drugs. And the thing is, even if you win, chances are you’ll use the money on drugs. So if you win, you lose.", "I developed a drug addiction problem when I was living in North Carolina, but I was also playing cards and gambling, and I encountered a lot of difficult situations and hostility. By 2015 I was exhausted, living in an abandoned building, so I went to a church and asked for help. They gave me a bus ticket to come back to Boston. Today, I’m in recovery and life is acceptable and quite an adventure.\n" +
"\n" +
"Gambling started for me like my drug addiction – progressively. I knew I had a problem for a while. Even after I ended up homeless, I would take whatever money I had and put it into a scratch ticket. I got very desperate and I was in a great deal of pain. I borrowed money and neglected the consequences of not paying it back. I got into fights, lost good friends, girlfriends. I didn’t realize it at first, but eventually I learned that gambling is just as aggressive, just as cunning as drugs. It gives you the same euphoria, the same high as drugs. And when you get started, it’s like potato chips: you can’t have just one.\n" +
"\n" +
"If someone in recovery asks me about going to a casino, I would say that the answer is within them. Why do they want to go there? I’d tell them to be mindful that people like us, people in recovery, we’re easily distracted from our path. And I’d say to them: stay safe."];
var storyIndex = 0
function cycleText() {
    console.log("click")
    let header = document.getElementById("story-name");
    let paragraph = document.getElementById("story-text");
    storyIndex++;
    if (storyIndex >= nameList.length) {
        storyIndex = 0; // Reset the index if it exceeds the length of the array
    }
    header.innerText = nameList[storyIndex];
    paragraph.innerText = textList[storyIndex];
}