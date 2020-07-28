$(document).ready(function() {
  // listen for save button clicks

  // var calObj = localStorage.getItem("Event", JSON.parse(calObj));

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:' + value);
    console.log('time:' + time);

    localStorage.setItem(time, value);
    
    // calObj.time = value

    // localStorage.setItem("Event", JSON.stringify(calObj));

  });



  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    // console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (currentHour > parseInt($(this).attr("name"))) {

        $(this).attr("class", "past row time-block");

      } else if (currentHour === parseInt($(this).attr("name"))) {

        $(this).removeClass("past");
        $(this).attr("class", "present row time-block");

      } else {

        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).attr("class", "future row time-block");

      };

      
      
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds

  // function dataRefresh() {
    setInterval(hourUpdater, 15000)
    
    // $(".time-block").each(function() {

    // var retrievedValue = JSON.parse(localStorage.getItem());
    // retrievedValue = value;

    //   $("#hour-9 .description").val(localStorage.getItem("hour-9"));

    // })

    $(".description").each(function() {

      // console.log("this is value" + value);
      // console.log("this is time " + time);
      // var savedData = JSON.parse(localStorage.getItem('value:'));
      // var savedTime = JSON.parse(localStorage.getItem('time:'));
      // console.log("this is saved data" + savedData);
      // console.log("this is saved time" + savedTime);

      var savedValue = localStorage.getItem($(this).parent().attr("id"));
      console.log(savedValue);

      $(this).val(savedValue);

    })
    
    
  

  // dataRefresh();

 

  // load any saved data from localStorage
  

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
