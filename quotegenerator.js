var quotes = [
  'People are more similar than they are different\n',
  'Loving yourself is the greatest revolution.\n',
  'This tape can\'t measure your actual greatness.\n',
  'Your body isn\'t flawed, your thinking is.\n',
  'Beauty comes from a life well lived life. If you\'ve lived well, your smile lines are in the right places, and your frown lines arent too bad, what more do you need? ~  Jennifer Garner\n',
  'The next time you look into the mirror, try to let go of the story line that says youre too fat or too sallow, too ashy or too old, your eyes are too small or your nose too big; just look into the mirror and see your face. When the criticism drops away, what you will see then is just you, without judgment, and that is the first step toward transforming your experience of the world. ~ Oprah Winfrey\n',
  'I have a body, but I am not my body. I have a face,but I am not my face. ~ Iyanla Vanzant\n',
  'Your body loves you. Your body works hard to keep you alive. ~ Lisa Consiglio Ryan\n',
  'People often say that beauty is in the eye of the beholder, and I say that the most liberating thing about beauty is realizing you are the beholder. ~ Salma Hayek\n'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}
