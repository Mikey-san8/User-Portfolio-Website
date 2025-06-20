document.addEventListener('DOMContentLoaded', () => {
    toggleButton();
  toggleMode();

});

function showAnswer(index) {

  const answers = [
    [
      "My nickname is Mikey. I’m 27 and graduated from Lyceum of the Philippines Manila with a Computer Science degree. I love building software, and I use AI to learn and keep up with tech trends. I'm especially passionate about solving problems and debugging code.",
      "I’m Mikey, a 27-year-old Computer Science graduate from Lyceum of the Philippines Manila. I enjoy coding and use AI to strengthen my skills. The software industry evolves fast, but I enjoy keeping up and solving technical challenges.",
      "Hi, I’m Mikey. At 27, I’ve earned a BS in Computer Science from Lyceum of the Philippines Manila. I'm passionate about development and problem-solving, and I use AI tools to enhance my learning in this fast-paced tech world."
    ],
    [
      "What inspires me is myself. There are days when I lack motivation, but I allow myself to pause, reflect, and find that spark again — often by reminding myself why I started and that taking risks is part of growth.",
      "I find inspiration within. Even on days when I feel unmotivated, I take a step back, reset, and remind myself of my goals. That quiet reflection pushes me to take risks and keep moving forward.",
      "I'm inspired by my own journey. Sometimes I lose momentum, but I give myself time to rest and then focus on the reasons I want to succeed — that’s what drives me to take action and take risks."
    ],
    [
      "I'm happy when I get to help others who are starting out — not just by teaching code, but by encouraging them to become problem-solvers. And of course, my family brings me the greatest joy.",
      "Helping others find their way in tech makes me happy — especially when I can show them how to think, not just what to do. And nothing beats the support and love of my family.",
      "What makes me happy is guiding others to be resourceful developers who seek solutions independently — and above all, spending time with my family."
    ],
    [
      "I'm learning new technologies and programming languages, but I also focus on fundamentals to sharpen my debugging and code-reading skills—even across different languages. I'm also learning life lessons to grow beyond just my career.",
      "I’m exploring new tech while improving how I debug and read code across different languages. Beyond coding, I’m also learning how to grow in life, not just in my career.",
      "Along with keeping up with fast-changing tech, I’m learning to better understand code from the ground up—especially debugging and cross-language reading. I'm also learning how to thrive both personally and professionally."
    ]
  ];

  let currentAnimationId = null;

  if (currentAnimationId) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }

  const variations = answers[index];
  const random = Math.floor(Math.random() * variations.length);
  const answerText = document.getElementById("answerText");
  answerText.innerHTML = "";
  answerText.classList.add("text-left");

  const text = variations[random];
  let i = 0;
  let cursorVisible = true;

  const cursorSpan = document.createElement("span");
  cursorSpan.className = "cursor";
  cursorSpan.textContent = "";
  answerText.appendChild(cursorSpan);

  const typeNextCharacter = setInterval(() => {
    if (i < text.length) {
      const char = text.charAt(i);
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      answerText.insertBefore(charSpan, cursorSpan);
      i++;
      currentAnimationId = requestAnimationFrame(typeNextCharacter);
    }
    else {
      answerText.removeChild(cursorSpan);
      currentAnimationId = null;
    }
  }, 20);
  currentAnimationId = requestAnimationFrame(typeNextCharacter);
}

function toggleMode() {
  const toggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    htmlElement.classList.add('dark');
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
}

function toggleButton() {
  const toggleBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = mobileMenu.querySelectorAll('a');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}