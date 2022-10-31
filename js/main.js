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