totalSecond = 0; // Initialize the total duration in seconds to 0

function getTitle(){
  
  // Select all elements with the class 'ytd-playlist-panel-video-renderer'
  const articles = document.querySelectorAll("ytd-playlist-panel-video-renderer");
  
  // Iterate over each selected element
  for (let i = 0; i < articles.length; i++) {
    // Select the element with the id 'video-title' within the current article and get its trimmed text content
    const title = articles[i].querySelector("#video-title").textContent.trim();
    // Log the index and the title of the video
    console.log(i+1, title);
    
    // Select the element with the class 'badge-shape-wiz__text' within the current article and get its trimmed text content
    const timeText = articles[i].querySelector(".badge-shape-wiz__text").textContent.trim();
    // Log the video duration
    console.log('video time: ', timeText);
    
    // Split the time text into an array of time components (hours, minutes, seconds)
    time = timeText.split(':');

    let videoSecond = 0;
    // Convert the time components into total seconds
    for (let i = 0; i < time.length; i++) {
      videoSecond *= 60; // Multiply the current total by 60 to shift to the next time unit
      videoSecond += parseInt(time[i]); // Add the current time component to the total
    }
    
    // Add the video duration in seconds to the total duration
    totalSecond += videoSecond;
    
    // Calculate the total hours, minutes, and seconds from the total duration in seconds
    let hour = Math.floor(totalSecond / 3600);
    let minute = Math.floor((totalSecond % 3600) / 60);
    let second = totalSecond % 60;
    
    // Format the hours, minutes, and seconds to always have two digits
    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second;

    // Log the index and the total remaining time in hours, minutes, and seconds
    console.warn(i+1, ': still need ', hour, ':', minute, ':', second, ':');
    console.log("------");
    
    // Create a new span element
    const newElement = document.createElement("span");
    // Set the text content of the new span element to display the remaining play time
    newElement.textContent = `play in ${hour}:${minute}:${second}`;
    // Set the style of the new span element to be grey and 80% of the default font
    newElement.style.color = 'white';
    newElement.style.fontSize = '120%';
    // Append the new span element to the current article (this part is missing in the provided code)
    articles[i].appendChild(newElement);
  }
}

// Log a message indicating that the script has been loaded
console.error('YTList remain is caculating...');
// Call the getTitle function after 5 seconds
setTimeout(getTitle, 5000);