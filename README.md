The calendar assignment really helped me hone my JavaScript skills as well as learn a new tool in Moment.  Please see below for the project requirements and how I achieved them:
_____________________________________________________

AS AN employee with a busy schedule:
- I WANT to add important events to a daily planner, so that I can manage my time effectively

GIVEN I am using a daily planner to create a schedule:
- WHEN I open the planner, the current day is displayed at the top of the calendar.
- WHEN I scroll down, I am presented with timeblocks for standard business hours
- WHEN I view the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future
- WHEN I click into a timeblock, I can enter an event
- WHEN I click the save button for that timeblock, the text for that event is saved in local storage
- WHEN I refresh the page, the saved events persist

_____________________________________________________

The Code:

Our client's needs are straightforward.  For this assignment I was provided a bit of starter script to begin working.  My two main tasks for this assignment were to ensure that the rows were color-coded properly, and that the content is able to be saved and retrieved correctly from Local Storage.  Besides displaying the current date (which was already provided) the entirety of the script works to accomplish the above two parameters.

First I tackled the color coding using the for each starter code that was provided.  This made the process much simpler than a for loop since I was looping through several elements with the same attributes that weren't otherwise contained within an array.  

I was able to remove the blockHour variable that was provided by instead assigning names for each time block that I was referencing, which coincided with the value that would be returned in the provided currentHour variable.  I initially did this thinking it would come in handy when setting and retrieving local storage, but it turned out to not be needed.  

This function simply tests the name of each .blockhour with the current hour to determine whether or not it has already passed.  Based on that condition we assign each .blockhour a class that color codes the background, letting us easily glance at how far into our day we are, which would come particularly in handy on Mobile devices.

In setting the time, the $(this) feature from jQuery comes in handy yet again, preventing the complexities of a loop and simply tying each save button to its sibling's text, and using the parent div's ID as the key in our local storage.

Retrieving the time is almost the exact inverse of setting the time, except there is no need to reference a sibling element.  The interval beginning on line 50 checks if there is a key for each row id within the container, and if there is the saved text is pushed back into the description.  It remains there until manually deleting.  


_____________________________________________________

The Content:

The third word in the project requirements was "simple," which is a priority for anyone with a busy schedule.  The client wants to easily enter, save, and view items for their daily schedule and the formatting provided in the starter HTML was a great foundation for that.  Red is the current hour because it's happening right now so it's the most urgent need, with green being more calm because it represents a task we've already accomplished for the day (hopefully!).  These both tie in with the "food" theme that I chose for this calendar (both with the header text, the background image, and the tupperware icons) and complement each other for an overall theme that's existent but simple and in service to the needed simplicity of the application.
_____________________________________________________


Summary:

I felt good leaving this project.  With it being my second one using the jQuery library I felt much more in tune with syntax and placement with fewer characters to type out in my commands.  It was my first time using a for each loop and understanding its benefit as well.  My biggest challenge on this project was local storage, the cadence for which I still struggled with despite having it in the last project.  I had some great direction from our TAs, and for the first time was able to look at other examples of past class activities with local storage in action and better interpret how I would be able to make it functional.

- Jim
