    
    // Function to generate a random number within a range
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // Function to pick a random color in #RRGGBB format
    function getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    // Random interval between 50ms and 1000ms
    function getRandomInterval() {
      return Math.random() * (10 - 50);
    }
    //Function to randomize opacity from 0.1 to 1
    function getRandomOpacity() {
      return Math.random() * (1 - 0.1) + 0.1;
    }
    // Function to create and position a matrix character
    function createMatrixChar() {
      // Create a new span element
      var char = document.createElement("span");
      var katanaSymbols = String.fromCharCode(getRandomInt(0x30A0, 0x30FF));
      var nerdFontIconsLimited = String.fromCharCode(getRandomInt(0xea80, 0xeaff));
      var nerdFontIconsWithBrand = String.fromCharCode(getRandomInt(0xf000, 0xf2e0));
      var nerdFontIconsMisc = String.fromCharCode(getRandomInt(0x1f000, 0x1f9ff));
      var useKatakana = Math.random() > 0.5;
      char.classList.add("matrix-char");
      // Check if JetBrains Mono Nerd Font is loaded (Hello, GitHub Pages!)
      if (document.fonts.check("1px 'JetBrains Mono Nerd Font'")) {
        // use the 3 different sets of symbols depending on the random value of useKatakana
        var fontIcons = [ nerdFontIconsLimited, nerdFontIconsWithBrand, nerdFontIconsMisc];
        var randomFont = fontIcons[Math.floor(Math.random() * fontIcons.length)];
        // check if the random font is not a undefined character (0x25AF, 0x25B0, 0x25A1, 0xEF, 0xBF, 0xBD, 0xFFFD)
        var undefinedChars = [0x25AF, 0x25B0, 0x25A1, 0xEF, 0xBF, 0xBD, 0xFFFD, 0x1F385, 0xF385,0x8E,0x85];
        if (undefinedChars.includes(randomFont.charCodeAt(0))) {
          // Skip the character from being added to the body
          return;} 
          // Compare character to character if randomFont ===  then return
          else if (randomFont == "") {
          return;
        }
        else {
          var characters = char.innerHTML = useKatakana ? katanaSymbols : randomFont;
        }
        
      } else {
        // if JetBrains Mono Nerd Font is not available, use only katakana symbols
        var characters = char.innerHTML = katanaSymbols;
      }
      // Set a random font size
        char.style.fontSize = getRandomInt(10, 40) + "px";
      // Set a random position within the viewport
      char.style.left = getRandomInt(0, window.innerWidth) + "px";
      char.style.top = getRandomInt(0, window.innerHeight) + "px";
      // Set a random color
      char.style.color = getRandomColor();
      // Set a random opacity
      char.style.opacity = getRandomOpacity();
      // Random flip the character
        char.style.transform = "scaleX(" + (Math.random() > 0.5 ? 1 : -1) + ")";
      // Append the character to the body

      document.body.appendChild(char);
      // Remove the character after 50ms to 500ms
        setTimeout(function() {
            document.body.removeChild(char);
        }, getRandomInt(1000, 5000));
    }
    // Create a new matrix character every 50ms to 1000ms
    setInterval(createMatrixChar, getRandomInterval());
    // Loop animation pulse on h1 
    var breath = document.querySelector('.clickable');
    // breath animation with random timing but wait for the animation to finish before starting a new one
    setInterval(function() {
    breath.addEventListener("animationend", function() {
        setTimeout(function() {
            breath.style.animation = 'breathing-animation ' + getRandomInt(5, 30) + 's linear infinite';
        }, getRandomInt(5000, 10000));
    });
}, getRandomInt(5000, 100000));
    // Limit the number of clicks to 1 per sec to avoid destroying the browser
    var clicks = 0;
    var button = document.querySelector('.clickable');
    button.addEventListener('click', function() {
      // On click inject a random number of matrix characters depending on the screen size
      clicks++;
      if (clicks === 1) {
        setTimeout(function() {
          clicks = 0;
        }, 1000);
        // if mobile chill dude
        if (window.innerWidth < 768) {
          for (var i = 0; i < getRandomInt(10, 100); i++) {
            createMatrixChar();
          
          }
        } else if (window.innerWidth < 1024) {
          // if tablet then go easy
          for (var i = 0; i < getRandomInt(50, 500); i++) {
            createMatrixChar();
            
          }
        } else {
          // if desktop then go banana
          for (var i = 0; i < getRandomInt(100, 10000); i++) {
            createMatrixChar();
          }
        }
      }
    });


function randomizeBreathingAnimation() {
    const element = document.querySelector('.clickable');
    if (!element) return; // Exit if element is not found

    // Generate random duration between 5 and 30 seconds
    const duration = Math.random() * (30 - 5) + 5;

    // Generate random minimum opacity between 0.1 and 0.5
    const minOpacity = Math.random() * (0.5 - 0.1) + 0.1;

    // Update the CSS variable for duration and opacity
    element.style.setProperty('--animation-duration', `${duration}s`);
    element.style.setProperty('--min-opacity', minOpacity);

    // Restart the animation
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = '';
    }, 10);
}

// Run the function on load
randomizeBreathingAnimation();