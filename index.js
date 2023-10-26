const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
   const newTutorial = tutorials.map((title)=>{
    const newTitle = title.split(' ')
      .map((word) => {
        return word.split('')
          .map((char,index)=>{
            if(index === 0)
              return char.toUpperCase() 
            else
              return char
          })
          .join('')
      })
      .join(' ')
      return newTitle
  })
  return newTutorial
}
