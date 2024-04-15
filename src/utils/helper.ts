export function wishing() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  let wish = "";

  const colors = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "violet",
    "orange",
    "black",
    "grey",
    "purple",
  ];

  const wishData = {
    color: colors[0],
    wish: wish,
    time: `Current time: ${currentHour}:${currentMinute}:${currentSeconds}`,
  };

  if (currentHour < 12) {
    wishData.wish = "Good morning";
  } else if (currentHour < 18) {
    wishData.wish = "Good afternoon";
  } else {
    wishData.wish = "Good evening";
  }

  let index = 1;
  index = currentSeconds % 10;
  console.log("index:", index);

  wishData.color = colors[index];

  return wishData;
}
