var turn = 1;
$('button').click(function() {
    if (turn == 1) {
      $("#display-turn").text("PLAYER 2'S TURN");
  
      $(this).addClass("fa fa-circle");
      if (check('fa-circle')) {
        turn = 0;
        $("#winner").text("PLAYER ONE WINS");
      } else {
        turn = 2;
      }
    } else if (turn == 2) {
      $("#display-turn").text("Player 1'S TURN");
  
      $(this).addClass("fa fa-times");
      if (check('fa-times')) {
        turn = 0;
        $("#winner").text("PLAYER 2 WINS");
      } else {
        turn = 1;
      }
    }
    if (turn != 0 && $("button.fa").length == 9) {
      turn = 0;
      $("#winner").text("NO ONE WINS; DRAW");
    }
  });

function check(symbol) {
    if ($(".sq1").hasClass(symbol) && 
        $(".sq2").hasClass(symbol) &&
        $(".sq3").hasClass(symbol))
    {
        $(".sq1").css("color", "green");
        $(".sq2").css("color", "green");
        $(".sq3").css("color", "green");
        win =1
        return true;
    } else if ($(".sq4").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq6").hasClass(symbol))
    {
        $(".sq4").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq6").css("color", "green");
        win =1
        return true;
    } else if ($(".sq7").hasClass(symbol)
            && $(".sq8").hasClass(symbol)
            && $(".sq9").hasClass(symbol))
    {
        $(".sq7").css("color", "green");
        $(".sq8").css("color", "green");
        $(".sq9").css("color", "green");
        win =1
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq4").hasClass(symbol)
            && $(".sq7").hasClass(symbol)) 
    {
        $(".sq1").css("color", "green");
        $(".sq4").css("color", "green");
        $(".sq7").css("color", "green");
        win =1
        return true;
    } else if ($(".sq2").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq8").hasClass(symbol))
    {
        $(".sq2").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq8").css("color", "green");
        win =1
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq6").hasClass(symbol)
            && $(".sq9").hasClass(symbol)) 
    {
        $(".sq3").css("color", "green");
        $(".sq6").css("color", "green");
        $(".sq9").css("color", "green");
        win =1
        return true;
    } else if ($(".sq1").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq9").hasClass(symbol)) 
    {
        $(".sq1").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq9").css("color", "green");
        win =1
        return true;
    } else if ($(".sq3").hasClass(symbol)
            && $(".sq5").hasClass(symbol)
            && $(".sq7").hasClass(symbol)) 
    {
        $(".sq3").css("color", "green");
        $(".sq5").css("color", "green");
        $(".sq7").css("color", "green");
        win =1
        return true;
    } else {
        return false;
    }
};


function reset()
{
   $("#display-turn").text("PLAYER 1'S TURN");
   $("#display-turn").css("background-color", "transparent");
   $(".r").removeClass("fa fa-circle");
   $(".r").removeClass("fa fa-times");
   turn=1;

  
};
