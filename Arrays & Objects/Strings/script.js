// Fundamental String Questions

//1. Count Words
// Buit in methods
function countWords(string) {
  const words = string.split(' ');
  return words.length
}
console.log(countWords('The quick brown fox jumps over the lazy dog'));
// b)
function countWords1(string) {
  let i = 0;
  if(string.length == 0 || string.length == 1 && string[0] == ' ') return 0
  let words = 1;
  while( i < string.length){
    if (string.charAt(i) == ' ') {
      words++;
    }
    i++;
  }
  return words
}
console.log(countWords1('The quick brown fox jumps over the lazy dog'));

// Count Vowels
function countVowels(string) {
  let i = 0;
  let vowels = 0;
  string = string.toLowerCase();
  while (i < string.length) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'o' || string.charAt(i) === 'i'||string.charAt(i) === 'u') {
      vowels++; 
    }
    i++;
  }
  return vowels;
}
console.log(countVowels('overa'));

// Reverse String
// a) Empty string
function reverseString(string) {
  let reversed = ''
  let i = string.length - 1;
  while (i >= 0 ) {
    reversed += string.charAt(i);  
    i--;
  }
  return reversed;
}
console.log(reverseString('over'));

// b) Using Stack
function reverseString1(string) {
  let reversed = []
  let i = string.length - 1;
  while (i >= 0 ) {
    let element = string.charAt(i);  
    reversed.push
    i--;
  }
  return reversed;
}
console.log(reverseString1('over'));
let stack = []


// Reverse words
function reverseWords(string) {
  let trimedAndSplitted = string.trim().split(' ');
  let reversed = ''
  let i = trimedAndSplitted.length - 1;
 
  while (i >= 0 ) {
    if (trimedAndSplitted[i] !== '') {
      reversed += ' ' + trimedAndSplitted[i];
    }
    i--;
  }
  return reversed.trim();
}
console.log(reverseWords('a is  good   example'));

//Without built-in
function reverseWords1(string) {
  let reversedLetters = reverseString(string); // O(n)
  console.log(reversedLetters);
  let i = 0;
  while (i < reversedLetters.length) {
    let j = i;
    while ( j < reversedLetters.length && reversedLetters.charAt(j) !== ' ') j++;
    let k = j - 1;
    while (i <= k) {
      console.log(i);
      console.log(k);
      let temp = reversedLetters.charAt(i)
      console.log(temp);
      reversedLetters[i] = reversedLetters[k]
      reversedLetters[k] = temp
      i++;
      k--;
      console.log(reversedLetters);
    }
    i = j
    while(reversedLetters[i] == ' ') i++;
  }
  return reversedLetters
}
console.log(reverseWords1('shubham is'));


// Capitalize First Letter of each word.
function capitaliseFirstLetter(string) {
  let splitted = string.split(' ');
  let i = 0;
 
  while (i < splitted.length) {
    let capitalized = splitted[i].charAt(0).toUpperCase();
    let newWord = capitalized + splitted[i].slice(1)
    splitted[i] = newWord
    i++;
  }
  return splitted
}
console.log(capitaliseFirstLetter('a good example'));

// Longest Word
function longestWord(string) {
  let splitted = string.split(' ');
  let i = 0;
  let maxLength = 0;
  let longestWord = ''
  while (i < splitted.length) {
    if (splitted[i].length > maxLength) {
      maxLength = splitted[i].length;
      longestWord = splitted[i];
    }
    i++;
  }
  return longestWord;
}
console.log(longestWord('a good cubical example'));

// Remove Duplicates
// Input: "Hello World"
// Output: "Helo Wrd"

function removeDuplicates(string) {
  let removed = ''
  let set = new Set();
  for (let i = 0; i < string.length; i++) {
    set.add(string.charAt(i));
  }
  for (const element of set) {
    removed += element;
  }
  return removed;
}
console.log(removeDuplicates("Mellow Vibe is good"));

// a) Modified version
function removeDuplicatesModified(str) {
  let set = new Set();
  let ans = "";
  for(x of str){
    if(x === " ") {
      if(ans[ans.length-1] === " ") continue
      ans += " "
    }
    else if(set.has(x)) {
      continue
    }
    else {
      ans += x;
      set.add(x);
    }
  }
  return ans
}
console.log(removeDuplicatesModified("Mellow Vibe is good"));

// Check Anagrams

// Count PALINDROMES in a string
// Input : aabbba
// There are two types of palindromes :
// 1. Even Palindrome  abba
// 2. Odd Palindrome   aba

// Find all substrings

// aabcbaa

function palindromicSubstrings(s) {
  let palindromicSubstrings = []
  if(s.length == 1) palindromicSubstrings.push(s);

  palindromicSubstrings()

}

// Edge case: A single string/ letter is palindrome in itself
function countPalindromes(string) {
  let count = 0;
  if (string.length == 1) {
    count++;
  }
}


// Longest Substring with k distinct characters
// Input: String="araaci", K=2
// Output: 4

// 1. Keep account of distinct characters discovered
// 2.Calculate length of required string
// 3. Do this to exaust the execution space

// O(n2) and O(n)space
function longestSubstringWithDistinctCharacters(str,k) {
  let maxLength = Math.max()

  for (let i = 0; i < str.length; i++) {
    let charFrequencyMap = {};
    let distincts = 0;
    for (let j = i; j < str.length; j++) {
      if(Object.keys(charFrequencyMap).includes(str[j])) charFrequencyMap[str[j]] += 1
      else{
        charFrequencyMap[str[j]] = 1;
        distincts++;
      } 
      if(distincts == k) maxLength = Math.max(maxLength,j - i + 1)
      
    }
  }
  return maxLength
}
console.log(longestSubstringWithDistinctCharacters('araaci',2));
console.log(longestSubstringWithDistinctCharacters('cbbebi',3));

// O(n) 
// the repetative task was to reconstituting string having 2 distinct and calculating its length
// Reconstituting was done by reinitializing everything.

// To solve it we don't need to reconstitute but modulate or modify existing constitution.
function longestSubstringWithDistinctCharactersSliding(str,k) { 
  let maxLength = Math.max()
  let charFrequencyMap = {};
  let left= 0
  let distincts = 0;
  for (let right = 0; right < str.length; right++) {
    if(Object.keys(charFrequencyMap).includes(str[right])) charFrequencyMap[str[right]] += 1
    else{
      charFrequencyMap[str[right]] = 1;
      distincts++;
    } 

    if(distincts == k) maxLength = Math.max(maxLength,right - left + 1)

    while (distincts > k) {
      if(Object.keys(charFrequencyMap).includes(str[left])){
        charFrequencyMap[str[left]] -= 1
      }
      if(charFrequencyMap[str[left]] == 0) {
        delete charFrequencyMap[str[left]]
        distincts--;
      }
      
      left++;
    }
    
  }
  return maxLength
}
console.log(longestSubstringWithDistinctCharactersSliding('araaci',2));
console.log(longestSubstringWithDistinctCharactersSliding('cbbebi',3));


//* remove character from string
function removeCharacter(string) {
  if(string === '' || string === 'x') return ''
  let smaller = string.substring(1); // O(n - 1)
  if(string.charAt(0) === 'x') return '' + removeCharacter(smaller)
  else return string.charAt(0) + removeCharacter(smaller)
}

console.log(removeCharacter('abx'));
console.log(removeCharacter('abxcdx'));

//* Replace pi
function replacePI(string) {
  if(string.length === '') return ''
  if(string === 'pi') return '3.14'
  let newString = string.substring(1)
  // let modifiedString = replacePI(newString)
  if(string.charAt(0) === 'p' && newString.charAt(0) === 'i') return '3.14' + replacePI(string.substring(2))
  else return string.charAt(0) + replacePI(newString)
  console.log(modifiedString);

} 
console.log(replacePI('pippppiiiipi'));

//* Insert chracter between identical characters
// Input: aabb
// Output: a*ab*b

function insertBetweenIdentical(string) {
  if(string === '' || string.length === 1) return string;

  // smaller problem
  let smallerProblem = string.substring(1)
  
  // Recursion
  if(string.charAt(0) === smallerProblem.charAt(0)){
    return string.charAt(0) + '*' + smallerProblem.charAt(0) + insertBetweenIdentical(smallerProblem.substring(1))
  } 
  else string.charAt(0) + insertBetweenIdentical(smallerProblem)  
}
console.log(insertBetweenIdentical('aabb'));

//* atoi()(convert string to integer)

function atoi(s) {
  let i = 0;
  let sign = 1 // for default case if nothing is mention then the integer is positive
  let integer = 0
  let max = 2147483647
  let min = -max - 1
  
  // Skip spaces
  while(s.charAt(i) === ' ') i++;

  // Check symbol
  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }
  console.log(Math.min());
  console.log(Math.max());
  // Check digit and form integer
  while( s.charAt(i) >= '0' && s.charAt(i) <= '9') { // for checking digit range
    integer = (integer * 10) + (s.charAt(i) - '0')
    if( sign === 1 && integer >= max) return max
    if(sign === -1 && integer > max + 1) return min
    i++;
  }

  return integer * sign
}
console.log(atoi('  -42'));
console.log(atoi("-91283472332"));
// function atoi(s) {
//   if(s === '') return 0
// }

//* Find if a string is substring of another or not
// string1: "Shubham"
// string2: "hub"
function isSubstring(s1,s2) {
  // Base Case
  if(s1 === '' && s2 !== '') return false
  if(s2 === '') return true

  // Small Work
  if(s1.charAt(0) === s2.charAt(0)) return isExactlySame(s1,s2)
  return isSubstring(s1.substring(1),s2)
}
function isExactlySame(s1,s2) {
  for (let i = 1; i < s2.length; i++) {
    if(s1.charAt(i) !== s2.charAt(i)) return false
  }
  return true;
}
console.log(isSubstring("Shubham","bham"));

//* Find all substrings
function generateALLSubstrings(string) {
  let substrings = [""]
  for (let i = 0; i < string.length; i++) {  //O(n*3)
    for (let j = i; j < string.length; j++) {
      let substring = ''
      for (let k = i; k <= j; k++) {
        substring += string.charAt(k);
      }
      substrings.push(substring)
    }
  }
  return substrings;
}
console.log(generateALLSubstrings("abcd"));

//* Find all Subsequences
function generateSubsequences(string) {
  let subsequences = []
  getSubsequences(string,"",0,subsequences)
  return subsequences;
}
function getSubsequences(string,subsequence,i,subsequences) {
  if(i >= string.length){
    subsequences.push(subsequence)
    return 
  } 
  // console.log(subsequences);
  getSubsequences(string,subsequence,i + 1,subsequences)     // exclude
  console.log(subsequences);
  getSubsequences(string,subsequence + string.charAt(i), i + 1,subsequences) // include
  console.log(subsequences);
  
}
console.log(generateSubsequences("abcd"));


// Time Convert
function convertTime(num) {
  let hours = Math.floor(num / 60)
  let minutes = num % 60
  return hours + ':' + minutes;
}
console.log(convertTime(45));

// Counting Minutes

