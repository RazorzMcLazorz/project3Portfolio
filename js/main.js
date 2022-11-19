let isSunsetMode = true

const languageWordsOuter = [
  'React.js',
  'JavaScript',
  'Python',
  'HTML',
  'SCSS',
  'TypeScript',
  'Redux.js',
  'REST',
  'HTTP',
]

const languageWordsInner = ['AWS Amplify', 'BASH', 'ZSH', 'GIT', 'MySQL', 'Node.js']

document.getElementById('spin').innerHTML = languageWordsOuter.map((language, indx) => 
    `<div class="spin" style="${'animation-delay: -' + indx * 1.1 + 's'}">
      <div class="words">${language}</div>
    </div>`
).join('')

document.getElementById('spinInner').innerHTML = languageWordsInner.map((language, indx) => 
  `<div class="spinInner"  style="${'animation-delay: -' + indx * 1.65 + 's'}">
    <div class="words">${language}</div>
  </div>`
).join('')

document.getElementById("themeChange").addEventListener("click", function() {
  toggleStylesheet("./css/theme.css", isSunsetMode);
})

function toggleStylesheet(href, onoff) {
  console.log(onoff)
  if (onoff) { 
    var link = document.createElement('link');
    link.id = 'theme';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
    document.getElementById("sunsetMountains").src = './img/mSunrise.svg'
    isSunsetMode = false
  } else { 
      document.getElementById("sunsetMountains").src = './img/mountainsSunset.svg'
      document.querySelectorAll('link[id=theme]').forEach((link) => link.parentNode.removeChild(link))
      isSunsetMode = true
  }
}