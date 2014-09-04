//define functions and global variables here...
var siteloc = "http://localhost/exercise";
var scriptloc = "/scripts/"

 
function square()
{
  $.ajax({
      url: siteloc + scriptloc + "solvesquare.py",
      data: {value:$("#value").val(),
             },
      success: function (res) { 
	              $("p").html("<br>");
                  $("p").append(res); 
                 
                  
       }  
    });
}

function cube()
{
  $.ajax({
      url: siteloc + scriptloc + "solvecube.py",
      data: {value:$("#value").val(),
             }, 
      success: function (res) {
				  
	              $("p").html("<br>");
                  $("p").append(res); 

       } 
    });
}
  