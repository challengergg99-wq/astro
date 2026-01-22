<script>
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour < 12) {
    greeting = "May the morning bring you courage, young adventurer";
  } else if (currentHour < 18) {
    greeting = "The afternoon sun shines upon Middle-earth";
  } else {
    greeting = "As the stars emerge, so does the wisdom of the ages";
  }
</script>

<h1 class="text-3xl font-bold text-yellow-400">{greeting}</h1>
