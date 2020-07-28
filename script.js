$(document).ready(function() {

  
  // This event ensures that the click of a save button references...
  // ...its correct textarea and saves and labels the item appropriately

  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
  });


  // This function allows us to format each time row in accordance with...
  // ...the current time, by manipulating the style classes assigned...
  // ...to each element.

  function hourUpdater() {

    var currentHour = moment().hours();

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


  // This ensures that the data on the screen stays fresh, fetching...
  // any items every fifteen seconds
  
  hourUpdater();

    setInterval(hourUpdater, 15000)

    $(".description").each(function() {

      var savedValue = localStorage.getItem($(this).parent().attr("id"));

      $(this).val(savedValue);
    })
    

  // This displays the current date.

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
