/**
 * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

 */

const passwordGenerator = (
    passwordLength = 6,
  ) => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = lowerCase.toUpperCase()
    const number = '0123456789'
    const specialChr = '!"@$%+-_?^&*()'
  
    let genPassword = ''
    let restPassword = ''
  
    const restLength = passwordLength % 4 
    const usableLength = passwordLength - restLength
    const generateLength = usableLength / 4
    console.log('rest',restLength, "usa",usableLength, "gene",generateLength)
  
    const randomString = (char) => {
      return char[Math.floor(Math.random() * (char.length))]
    }
    for (let i = 0; i <= generateLength - 1; i++) {
      genPassword += `${randomString(lowerCase)}${randomString(upperCase)}${randomString(number)}${randomString(specialChr)}`
    }
  
    for (let i = 0; i <= restLength - 1; i++) {
      restPassword += randomString([...lowerCase, ...upperCase, ...number, ...specialChr])
    }
  
    return genPassword + restPassword
  }

  const password = passwordGenerator()
  console.log(password)