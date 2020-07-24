$(document).ready(function() {
  // listen for save button clicks

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    // save the value in localStorage as time
    
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (currentHour > parseInt($(this).attr("name"))) {

        $(this).attr("class", "past");

      } else if (currentHour === parseInt($(this).attr("name"))) {

        $(this).removeClass("past");
        $(this).attr("class", "present");

      } else {

        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).attr("class", "future");

      };

      // var hourInput = $(this).children[0];
      // console.log(hourInput);
      
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds

  // load any saved data from localStorage
  

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
