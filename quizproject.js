let currentQuestion = 0;
let score = 0;
let lifeline = 2;
let questions = [
   {
      "question": "What location on the Fortnite map is this?" ,
      "a": "Dusty depot",
      "b": "Loot lake",
      "c": "Paradise Palms",
      "d": "Salty Springs",
      "image": "quizimages/saltysprings.jpg",
      "answer": "d" ,
      "wrongAnswer":"bc"
   },
   {
      "question": "What location on the Fortnite map is this?",
      "a": "Tilted Towers",
      "b": "Paradise Palms",
      "c": "Vacation Valley",
      "d": "Desert Springs",
      "image": "quizimages/paradisepalms.jpg",
      "answer": "b" ,
      "wrongAnswer":"ac"
   },
   {
      "question": "What location on the Fortnite map is this?",
      "a": "Retail Row",
      "b": "Tilted Towers",
      "c": "Buisness Bureau",
      "d": "Dusty Depot",
      "image": "quizimages/tiltedtowers.jpg",
      "answer": "b" ,
      "wrongAnswer":"ad"
   },
   {
      "question": "Which Fortnite character is this?",
      "a": "Jonesy",
      "b": "Bunker Jonesy",
      "c": "Beard Jonesy",
      "d": "Old Jonesy",
      "image": "quizimages/bunkerjonesy.jpg",
      "answer": "b" ,
      "wrongAnswer":"ad"
   },
   {
      "question": "Which Fortnite character is this?",
      "a": "Banana",
      "b": "Pottasium Overload",
      "c": "Peely",
      "d": "Special Agent Peely",
      "image": "quizimages/peely.jpg",
      "answer": "c" ,
      "wrongAnswer":"ab"
   },
   {
      "question": "Which outfit is this?",
      "a": "Icon Outfit #4",
      "b": "Ninja",
      "c": "Blue Battle Squad Leader",
      "d": "Battle Commander",
      "image": "quizimages/ninja.jpg",
      "answer": "b" ,
      "wrongAnswer":"ac"
   },
   {
      "question": "Which Fortnite item is this?",
      "a": "Portable Portal",
      "b": "Portable fortress",
      "c": "Teleportation cube",
      "d": "Rift to go",
      "image": "quizimages/rifttogo.jpg",
      "answer": "d" ,
      "wrongAnswer":"bc"
   },
   {
      "question": "Which Fortnite item is this?",
      "a": "Bouncer",
      "b": "Jump Pad",
      "c": "Launch Pad",
      "d": "Bounce Trap",
      "image": "quizimages/bouncepad.jpg",
      "answer": "a" ,
      "wrongAnswer":"bd"
   },
   {
      "question": "Which Fortnite item is this?",
      "a": "Portable Rift",
      "b": "Portable Rocket",
      "c": "Junk Rift",
      "d": "Item Drop",
      "image": "quizimages/junkrift.jpg",
      "answer": "c" ,
      "wrongAnswer":"ad"
   },
   {
      "question": "Who developed Fortnite?",
      "a": "Fortnite",
      "b": "Epic Games",
      "c": "Unreal Engine",
      "d": "EA",
      "image": "quizimages/fortnite.jpg",
      "answer": "b" ,
      "wrongAnswer":"cd"
   },
 ];
 

 if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }
 

 function loadQuestion() {
   if (lifeline > 0) {
      document.getElementById("lifeline").style.display = "block";
   }
   document.getElementById("a").style.display = "block";
   document.getElementById("b").style.display = "block";
   document.getElementById("c").style.display = "block";
   document.getElementById("d").style.display = "block";
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	 img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :( Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       if (score == 10) {
         message = "Wow, you aced it. Congratulations!"
       } else {
         message = "Nice job, you completed the quiz. Wether or not you got them all right doesn't matter.";
       }
      } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 

 function fiftyfifty() {
   if (lifeline > 0) {
         if (questions[currentQuestion].wrongAnswer == "ab") {
         document.getElementById("a").style.display = "none";
         document.getElementById("b").style.display = "none";
         lifeline -= 1;
      } else if (questions[currentQuestion].wrongAnswer == "ac") {
         document.getElementById("a").style.display = "none";
         document.getElementById("c").style.display = "none";
         lifeline -= 1;
      }else if (questions[currentQuestion].wrongAnswer == "ad") {
         document.getElementById("a").style.display = "none";
         document.getElementById("d").style.display = "none";
         lifeline -= 1;
      }else if (questions[currentQuestion].wrongAnswer == "bc") {
         document.getElementById("b").style.display = "none";
         document.getElementById("c").style.display = "none";
         lifeline -= 1;
      }else if (questions[currentQuestion].wrongAnswer == "bd") {
         document.getElementById("b").style.display = "none";
         document.getElementById("d").style.display = "none";
         lifeline -= 1;
      } else if (questions[currentQuestion].wrongAnswer == "cd") {
         document.getElementById("c").style.display = "none";
         document.getElementById("d").style.display = "none";
      }
   }
   document.getElementById("lifeline").style.display = "none";
   document.getElementById("amountleft").innerHTML = lifeline + " / 2"
 }

 
 
 
 
 
 
 
   
