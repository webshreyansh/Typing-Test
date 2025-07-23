// paragraphs.js

const shortParagraphs = [
  "The sky turned pink as the sun dipped below the horizon, casting a warm glow over the rooftops and trees in the quiet little town.",
  "She picked up the old book, its pages yellowed and brittle, wondering who else had read these stories before her.",
  "The dog barked loudly at the passing car, tail wagging with excitement, as if it were greeting an old friend.",
  "Coffee steamed in the cup, its rich aroma filling the room and inviting thoughts of lazy mornings and good conversation.",
  "Leaves rustled in the wind, swirling around his feet as he walked along the lonely path through the woods.",
  "He laughed at the joke, even though he had heard it a dozen times before. Some things just never get old.",
  "A cool breeze slipped through the window, brushing her face gently like the touch of a memory.",
  "The rain tapped lightly on the glass, creating a soft rhythm that echoed through the empty room.",
  "The cat stretched out on the windowsill, purring softly as the sun warmed its fur.",
  "Music played faintly in the distance, the melody dancing through the air like a whisper you could almost catch."
];

const longParagraphs = [
  "In the heart of the ancient forest, where sunlight barely touched the moss-covered ground, a quiet stream flowed. Its gentle gurgling was the only sound, accompanied by the occasional rustle of leaves stirred by a hidden breeze. Travelers rarely ventured this deep, but those who did often spoke of a strange calm, a sense of timelessness that seemed to cradle the soul and silence the noise of the outside world.",
  
  "The city bustled with life, its streets alive with footsteps, voices, and the rhythmic hum of vehicles. Among the crowd walked a girl with headphones on, lost in a melody that seemed to carry her above the chaos. She passed bookshops, cafés, and towering buildings without really seeing them, wrapped in her own world, where every note painted color on a gray canvas.",
  
  "As the ship sailed farther into the open sea, the passengers gathered on deck, watching the coastline vanish into a blur. Children leaned over the railings with excitement, while older travelers quietly soaked in the breeze. The vastness of the ocean inspired awe — a reminder of how small humans are against nature’s grand canvas and how much of the world remains unknown and waiting.",
  
  "On winter evenings, the streets glowed with strings of lights and warm laughter spilled from every corner café. The scent of roasted chestnuts mixed with the sharp chill in the air. People huddled close under scarves and hats, finding joy in the little things — a hot drink, a shared story, a walk under the stars — moments that made the season feel magical despite the cold.",
  
  "He woke before sunrise, the sky still painted in deep blue. With slow steps, he brewed his coffee and stood by the window, watching the light creep in. It wasn’t just the start of a new day — it was the beginning of change. He didn’t know what path lay ahead, but he felt the tug of something new and unfamiliar. Sometimes, that quiet morning stillness holds the loudest promises.",
  
  "The library smelled of old paper and secrets. Shelves stretched high above, filled with forgotten stories and hidden knowledge. She traced her fingers along the spines, searching for nothing in particular but knowing something would find her. In places like this, time bent, and the past whispered through the pages, waiting for someone to listen.",
  
  "Rain poured outside, relentless and soothing. Inside, he wrapped himself in a blanket, the glow of a reading lamp casting a soft halo around the room. The book in his hands transported him far from the storm — into a world of dragons, lost kingdoms, and ancient magic. Outside might be cold and wet, but inside, adventure burned bright with every page turned.",
  
  "Mountains towered in the distance, their peaks lost in clouds. The hiker took a deep breath, feeling the crisp air fill his lungs. With each step on the gravel trail, he felt more grounded, more present. Up here, worries shrank, replaced by silence and the rhythm of nature. He had come to escape — but ended up rediscovering himself among the trees and stone.",
  
  "Time seemed to freeze inside the tiny café, where rain tapped against foggy windows and jazz played faintly in the background. She sipped her coffee slowly, flipping through a worn journal. Outside, the world rushed by, but in here, everything moved gently. It was a rare pocket of peace in a life full of noise — and she held on to it for as long as she could.",
  
  "The festival lights blinked like stars, music pulsed through the night, and laughter echoed between the food stalls. Children ran with sparklers, families shared bites of street food, and couples danced under colorful streamers. It was a night to forget the clock, to live in joy and rhythm. Even strangers felt like friends beneath that open sky."
];

const midParagraphs = [
  "Typing is not just about speed, but also about accuracy and endurance. To improve your typing skills, you need to practice regularly and challenge yourself with longer passages. This helps in building rhythm and minimizing fatigue during extended sessions.",
  "A good typist focuses on accuracy first, allowing speed to naturally improve over time. It's important to understand that making too many mistakes slows you down more than typing slowly but correctly. Prioritize precision.",
  "Many professionals rely on fast typing skills to improve productivity and meet deadlines. Whether you're a programmer, writer, or student, the ability to type quickly can significantly enhance your workflow and reduce stress during high-pressure situations.",
  "Learning to type efficiently requires patience, discipline, and consistency. Instead of typing random letters, practice with real words and paragraphs. This way, your fingers adapt to common word patterns and muscle memory improves faster.",
  "In the digital age, typing is as essential as speaking. Almost every profession today involves communication through typing—emails, reports, coding, or data entry. Becoming proficient at typing gives you an edge in both academic and professional life.",
  "The most effective way to become a better typist is to start with short, focused sessions daily. Set a timer, type a paragraph, review your mistakes, and try again. Over time, you'll notice fewer errors and better flow.",
  "Advanced typists learn to glance at the screen only occasionally, trusting their muscle memory. This reduces eye strain and keeps their posture more relaxed, which is especially useful during long sessions.",
  "Typing tests are a great way to measure your progress. WPM (words per minute) is a standard metric, but also track how many errors you make. The goal is to balance both metrics instead of chasing speed alone.",
  "Long-form typing helps build stamina. Like a runner training for a marathon, a typist benefits from pushing beyond short bursts to maintain accuracy and rhythm over several minutes of continuous typing.",
  "The keyboard layout and your typing posture also matter. Ensure your wrists are neutral, elbows relaxed, and fingers hover naturally over the keys. This will prevent fatigue and long-term strain."
];

function fetchParagraph() {
  const paragraphList = totalTimeSet <= 30 ? shortParagraphs : longParagraphs;
  const randomPara = paragraphList[Math.floor(Math.random() * paragraphList.length)];
  renderParagraph(randomPara);
}

function renderParagraph(text) {
  displayArea.innerHTML = "";
  [...text].forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    displayArea.appendChild(span);
  });
}
// `renderParagraph` will be defined in main script.js and used here
