var btn = document.getElementById("btn");
var QuotoFirstP = document.getElementById("Quoto-First-P");
var QuotoSecondP = document.getElementById("Quoto-Second-P");

var firstQuoto = [
    "“Be yourself; everyone else is already taken.”",
    "“A room without books is like a body without a soul.”",
    "So many books, so little time.",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“Always forgive your enemies; nothing annoys them so much.”"
];
var secondQuoto = [
    "― Oscar Wilde",
    "― Marcus Tullius Cicero",
    "― Frank Zappa",
    " ― Mae West",
    "― Mahatma Gandhi",
    "― Mark Twain",
    "― Oscar Wilde"
];

btn.addEventListener('click', function () {
    var randomIndex = Math.floor(Math.random() * firstQuoto.length);
    QuotoFirstP.innerHTML = firstQuoto[randomIndex];
    QuotoSecondP.innerHTML = secondQuoto[randomIndex];
});
