$("#startButton").on("click", function game() {
 
	var myArray = ["1. Which talk show host plays the voice of Dory in the Pixar film 'Finding Nemo'?", 
				   "2. What is WALL-E's job?",
				  "3. In 'Inside Out', actress Amy Poehler plays the voice of which emotion?",
          "4. The character Lightning McQueen in 'Cars' finds himself in what town?",
          "5. Who is the lead character in 'Brave'?",
          "6. In 'Up', how does character Carl Fredricksen move his house?",
          "7. In what city does 'Ratatouille' take place?",
          "8. Actor Billy Crystal voices which character in 'Monsters, Inc.'?"];

	var myOptions = [["Oprah Winfrey", "Ellen Degeneres", "Rosie O'Donnell", "Queen Latifah"],
					 ["Trash Collector", "Gardener", "Waiter", "Mechanic"],
					 ["Joy", "Sadness", "Disgust", "Anger"],
           ["Jericho Gap", "Radiator Springs", "Gravity Falls", "Crystal Springs"],
           ["Princess Merida", "Eve", "Riley", "Rapunzel"],
           ["A blimp", "Balloons", "Helicopter", "Shrink Gun"],
           ["London", "Rome", "Paris", "San Francisco"],
           ["Sulley", "Boo", "Mike Wazowski", "Randall Boggs"]];

	var myAnswers = ["Ellen Degeneres", "Trash Collector", "Joy", "Radiator Springs", "Princess Merida",
                   "Balloons", "Paris", "Mike Wazowski"];

  var images = ["assets/images/pic1.jpg","assets/images/pic2.jpg","assets/images/pic3.jpg",
                "assets/images/pic4.jpg","assets/images/pic5.jpg","assets/images/pic6.jpg",
                "assets/images/pic7.jpg","assets/images/pic8.jpg"];

  var showImage;
  var count = 0;
  
	var correctAnswer = 0;
	var incorrectAnswer = 0;
  var unanswered = 0;

  var tracker = 10;
  var intervalId;
  var clockRunning = false;

	$("#startButton").text("");
    
	function one() {
      
      run();
		  $("#question").html(myArray[count]);
		  $("#button1").html(myOptions[count][0]);
		  $("#button2").html(myOptions[count][1]);
		  $("#button3").html(myOptions[count][2]);
		  $("#button4").html(myOptions[count][3]);
      
     
      setTimeout(next, 10000);

      }
     
  };

  $("#button1").on("click", function() {

    if(myOptions[count][0] === myAnswers[count]) {
      $("#correct").html("<h2>Correct!</h2>");
      displayImage();
      setTimeout(clearImage, 3000);
      correctAnswer++;
      stop();
      
    }
    else if (myOptions[count][0] != myAnswers[count]) {
      $("#correct").html("<h2>Wrong!</h2>");   
      displayImage();
      setTimeout(clearImage, 3000);
      $("#correct-answer").html("<h2>Correct answer is: " + myAnswers[count] + "</h2>");
      incorrectAnswer++;
      stop();   
    }
  });


  $("#button2").on("click", function() {
    if(myOptions[count][1] === myAnswers[count]) {
      $("#correct").html("<h2>Correct!</h2>");
      displayImage();
      setTimeout(clearImage, 3000);
      correctAnswer++;
      stop();
  }
  else if (myOptions[count][1] != myAnswers[count]) {
    $("#correct").html("<h2>Wrong!</h2>");
    displayImage();
    setTimeout(clearImage, 3000);
    $("#correct-answer").html("<h2>Correct answer is: " + myAnswers[count] + "</h2>");
    incorrectAnswer++;
    stop();
    }
  });


  $("#button3").on("click", function() {
    if(myOptions[count][2] === myAnswers[count]) {
      $("#correct").html("<h2>Correct!</h2>");
      displayImage();
      setTimeout(clearImage, 3000);
      correctAnswer++;
      stop();
      }
    else if (myOptions[count][2] != myAnswers[count]) {
      $("#correct").html("<h2>Wrong!</h2>");
      displayImage();
      setTimeout(clearImage, 3000);
      $("#correct-answer").html("<h2>Correct answer is: " + myAnswers[count] + "</h2>");
      incorrectAnswer++;
      stop();
    }
  });


  $("#button4").on("click", function() {
    if(myOptions[count][3] === myAnswers[count]) {
      $("#correct").html("<h2>Correct!</h2>");
      displayImage();
      setTimeout(clearImage, 3000);
      correctAnswer++;  
      stop();
    }
    else if (myOptions[count][3] != myAnswers[count]){
      $("#correct").html("<h2>Wrong!</h2>"); 
      displayImage();
      setTimeout(clearImage, 3000);
      $("#correct-answer").html("<h2>Correct answer is: " + myAnswers[count] + "</h2>");
      incorrectAnswer++;
      stop();
    }
  });


  //after a specified time (10 secs) show the next question
  function next() {

    count++;

    if(count === myArray.length) {
        $("#wins").html("<h2>Correct Answers:<br>" + correctAnswer + "</h2>");
        $("#losses").html("<h2>Incorrect Answers:<br>" + incorrectAnswer + "</h2>");
        $("#unknown").html("<h2>Not Answered:<br>" + unanswered + "</h2>");
        $("#question").html("Game Over! Let's see how you did.");
        $("#button1").html("");
        $("#button2").html("");
        $("#button3").html("");
        $("#button4").html("");
        $("#restart").html("<button> Start Over </button>");
        clearInterval(intervalId);
        $("#restart").on("click", restart);
        clearInterval(intervalId);

    }
    setTimeout(one, 4000);
  }

  function displayImage() {
      $("#image-holder").html("<img src=" + images[count] + " width='600px'>");
      $("#question").html("Next Question Loading...");
      $("#button1").html("");
      $("#button2").html("");
      $("#button3").html("");
      $("#button4").html("");
      $("#correct-answer").html("");
  }
  
  function clearImage() {
      $("#correct").html("");
      $("#image-holder").html("");
      $("#correct-answer").html("");
  }

  //run the clock to countdown on the questions
  function run() {
     if (!clockRunning) {
      intervalId = setInterval(decrement, 1000);
      clockRunning = true;
      }
    }

  function decrement() {
    if(count === myArray.length) {
      finalStop();
    }

    $("#timer").html("<h2>Time Remaining: " + tracker + " seconds</h2>");
 
    tracker--;

    if (tracker < 1) {
      $("#correct").html("<h2>Time's Up!</h2>"); 
      displayImage();
      setTimeout(clearImage, 3000);
      $("#correct-answer").html("<h2>Correct answer is: " + myAnswers[count] + "</h2>");
      unanswered++;
      stop();    
    }
  }

  //used after the final question to keep the timer from running
  function finalStop() {
    clearInterval(intervalId);
    clockRunning = false;
  }

  //stop the clock after a user clicks an answer or no click and reset to 10 secs
  function stop() {
    clearInterval(intervalId);
    clockRunning = false;
    tracker = 10;
  }

  //sets back to beginning of questions and clears screen
  function restart() {
      $("#question").html("");
      $("#button1").html("");
      $("#button2").html("");
      $("#button3").html("");
      $("#button4").html("");
      $("#wins").html("");
      $("#losses").html("");
      $("#unknown").html("");
      $("#restart").html("");
      correctAnswer = 0;
      incorrectAnswer = 0;
      unanswered = 0;
      count = 0;
      clockRunning = false;
      clearInterval(intervalId);
      game();
  }
  //call the function to setup the question and answers
  one();


});


	
	



