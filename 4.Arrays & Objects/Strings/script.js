// Fundamental String Questions

// Todo
//* Reverse A string ✅
//* Reverse only alphabetical
//* Check Anagram ✅
//* Validate Palindrome(Check Palindrome)
//* Detect Substring in String
//* Dollar Sign Deletion
//* Find first non repeating character
//* Find Duplicate Words
//* Remove all adjacent duplicates 
//* Custom Sort String 
//* Simplyfying absolute paths 
//* Length of longest palindrome
//* Length of string compression(string compression) ✅
//* Generate all string Permutations
//* String Breakdown
//* Convert Number to Words
//* Longest Palindromic Substring
//* Text Justification
//* Longest Substring with no repeat characters ✅
//* Remove Invalid Parenthesis

//*1. Count Words
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

//* Count Vowels
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

//* Reverse String
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
console.log(reverseString('game over'));

// b) Using Stack
function reverseString1(string) {
  let reversed = []
  let i = string.length - 1;
  while (i >= 0 ) {
    let element = string.charAt(i);  
    reversed.push(element)
    i--;
  }
  return reversed.toString();
}
console.log(reverseString1('over game'));
let stack = []


//* Reverse words
function reverseWords(string) {
  let trimedAndSplitted = string.trim().split(' ');
  console.log(trimedAndSplitted);
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
  let temp = ''
  console.log(reversedLetters);
  let i = 0;
  while (i < reversedLetters.length) {
    let j = i;
    while ( j < reversedLetters.length && reversedLetters.charAt(j) !== ' ') j++;
    let k = j - 1;
    while (k >= i) {
      console.log(i);
      console.log(k);
      
      console.log(temp);
      temp+= reversedLetters[k]
      
      k--;
      console.log(reversedLetters);
    }
    i = j
    if(reversedLetters[i])temp+= reversedLetters[i]
    
    while(reversedLetters[i] == ' ') i++;
  }
  return temp
}
console.log(reverseWords1('shubham  is good '));


//* Capitalize First Letter of each word.
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

//* Longest Word
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

//* Maximum Character in String
function findMaximumCharacter(str) {
  let charMap = {}
  for (const ele of str) { //O(n)
    if(charMap[ele]) charMap[ele]++
    else{
      charMap[ele] = 1
    }
  }
  
  let maxChar = ''
  let maxNum = 0
  for (const [key,value] of Object.entries(charMap)) {
    
    if(value > maxNum){
      maxNum = value
      maxChar = key
    }
  }
  return [maxChar, maxNum]
}
console.log(findMaximumCharacter('%3#1#23#$'));

//* Remove Duplicates
// Input: "Hello World"
// Output: "Helo Wrd"

function removeDuplicates(string) {
  let removed = ''
  let set = new Set(); //O(n)
  for (let i = 0; i < string.length; i++) {
    set.add(string.charAt(i));
  }
  for (const element of set) {
    removed += element;
  }
  return removed;
}
console.log(removeDuplicates("Hello World"));
console.log(removeDuplicates("Mellow Vibe is good"));

// a) Modified version
function removeDuplicatesModified(str) {
  let set = new Set();
  let ans = "";
  for(x of str){
    if(x === " ") {    // for skipping the duplicte space
      if(ans[ans.length-1] === " ") continue
      ans += " "
    }
    else if(set.has(x)) {  // for skipping the duplicte character
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


//* Longest Substring with k distinct characters
// Input: String="araaci", K=2
// Output: 4

// 1. Keep account of distinct characters discovered while finding k unique character string.(i.e we have to find k unique character string)  
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

//* Longest substring with no repeat substring
// O(n2) and O(n)
function longestSubstringWithNorepeatCharacters(string) {
  // find all the possible substring
  // calculate/keep account of all the characters in a substring
  // select only those substring having distinct characters and calculate their length
  // compare length of such strings.
  let maxLength = 0;
  for (let i = 0; i < string.length; i++) {  // consider
    let map = {}   // reinitialization every time
    for (let j = i; j < string.length; j++) { // constitute
      let hasDistinct = true
      if(Object.keys(map).includes( string.charAt(j))) map[string.charAt(j)] += 1
      else {
        map[string.charAt(j)] = 1
      }
      // console.log(map);
      // console.log(Object.values(map));
      for (let value of Object.values(map)) {
        if(value >= 2) hasDistinct = false
      }
      if(hasDistinct) maxLength = Math.max(maxLength,j-i+1)
    }
  }
  return maxLength
}
console.log(longestSubstringWithNorepeatCharacters('aabccbb'));
console.log(longestSubstringWithNorepeatCharacters("abbbb") );
console.log(longestSubstringWithNorepeatCharacters("bbbbb") );
console.log(longestSubstringWithNorepeatCharacters("abccde"));

// O(n)
function longestSubstringWithNorepeatCharactersSliding(string) {
  let maxLength = 0;
  let map = {}   
  let i = 0;
  for (let j = 0; j < string.length; j++) {  // consider
    while(Object.keys(map).includes( string.charAt(j))) {  // previous constitution has value or not
      console.log(Object.keys(map));
      map[string.charAt(i)] -= 1
    
      if(map[string[i]] == 0) {
        delete map[string[i]]
      }
      
      i++;
    }
   
    map[string.charAt(j)] = 1
    
    // console.log(map);
    // console.log(Object.values(map));
    // for (const value of Object.values(map)) {
    //   if(value >= 2) hasDistinct = false
    // }
    // if(hasDistinct) 
    maxLength = Math.max(maxLength,j-i+1)
    
  }
  return maxLength
}
console.log(longestSubstringWithNorepeatCharactersSliding('aabccbb'));
console.log(longestSubstringWithNorepeatCharactersSliding("abbbb") );
console.log(longestSubstringWithNorepeatCharactersSliding("bbbbb") );
console.log(longestSubstringWithNorepeatCharactersSliding("abccde"));

//* longest substring having the same letters after replacement.
function sameLetterSubstringAfterReplacement(string,k) {
  // constitute substring of more than k letters
  // keep account of duplicate characters by hashmap
  // for each substring constituted find/select most repeating character
  
  let maxLength = 0; //O(n2)
  for (let i = 0; i < string.length; i++) { // for condidering each substring
    let map = {}
    let mostrepeated = 0;
    for (let j = i; j < string.length; j++) {  // for constituting string
      if(Object.keys(map).includes(string[j])) map[string[j]] += 1
      else {
        map[string.charAt(j)] = 1
      }
     
      mostrepeated = Math.max(mostrepeated,map[string[j]])
      
      
      console.log('highest'+mostrepeated);
      // console.log((j - i + 1) - mostrepeated);
      if((j - i + 1) - mostrepeated <= k) maxLength = Math.max(maxLength,j-i+1) // when visible replacement is less than given replacement.
      else if((j - i + 1) - mostrepeated === 0) maxLength = Math.max(maxLength,j-i+1)  // for string containg same letter
      //console.log(maxLength);     
    }
    
  }
  return maxLength;
}
console.log(sameLetterSubstringAfterReplacement('aabccbb',2));
console.log(sameLetterSubstringAfterReplacement("abbcb",1));
console.log(sameLetterSubstringAfterReplacement("abccde",1));
console.log(sameLetterSubstringAfterReplacement("abba",2));
console.log(sameLetterSubstringAfterReplacement("aababba",1));
console.log(sameLetterSubstringAfterReplacement("aaaa",2));
console.log(sameLetterSubstringAfterReplacement("abbb",2));

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
  if(string.length === 0) return ''
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

//* String Compression
//Eg: "aabcccccaaa" => "a2b1c5a3"
//    "abcd" => "abcd"

function stringCompression(str) {
  let i = 0;
  let compressed = ''
  let uniqueCount = 1
  while (i < str.length) {
    let charCount = 1;
    let j = i+1
    while (j < str.length) {
      if(str.charAt(i) === str.charAt(j)){
        charCount++
        j++
      } 
      else {
        uniqueCount++
        break
      }
    }
    compressed += str.charAt(i) + charCount
    i = j
  }
  return uniqueCount === str.length ? str : compressed
}
console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abcd'));
console.log(stringCompression('abcde'));
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
    integer = (integer * 10) + (s.charAt(i) - '0') // at first unit digit will be constructed
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
//* Check if two strings are Anagrams
function checkAnagram(str1,str2) {
  if(str1 === '' || str2 === '' || str2.length !== str1.length) return false
  console.log(str1);
  console.log(str2);
  // character should be same and with same amount
  // So you want such a mapping where you have character amd its quantity/amount
  let characterMap = {}
  for (let i = 0; i < str2.length; i++) {
    if(Object.keys(characterMap).includes(str1.charAt(i))){
      characterMap[str1.charAt(i)] +=1
    }
    else characterMap[str1.charAt(i)] = 1
  }
  for (let j = 0; j < str2.length; j++) {
    if(Object.keys(characterMap).includes(str2.charAt(j))){
      characterMap[str2.charAt(j)] -=1
    }
    else characterMap[str2.charAt(j)] = 1 
  }
  
  //console.log(characterMap);
  for (const value of Object.values(characterMap)) {
    if(value !== 0) return false
  }
  return true
}
console.log(checkAnagram('aabc','baca'));
console.log(checkAnagram('listen','silent'));
console.log(checkAnagram('aabcd','abbcd'));

//*Find all anagrams in a string.
function findAllAnagrams(s,p) {
  let startIndices = []
  for (let i = 0; i <= s.length - p.length; i++) {  // O(s.length)
    if(checkAnagram(p,s.substring(i,i+p.length))) startIndices.push(i)
  }
  return startIndices
}
console.log(findAllAnagrams("cbaebabacd","abc"));
console.log(findAllAnagrams("cbaebabaacd","aabcd"));
console.log(findAllAnagrams("cbaebabacd","acd"));
console.log(findAllAnagrams("baa","aa"));
console.log(findAllAnagrams("aa","bb"));

//* Find if a string is substring of another or not
// string1: "Shubham"
// string2: "hub"
function isSubstring(s1,s2) {
  // Base Case
  if(s1 === '' && s2 !== '') return false
  if(s2 === '') return true

  // Small Work
  if(s1.charAt(0) === s2.charAt(0)) return isExactlySame(s1,s2)
  return isSubstring(s1.substring(1),s2)  // Each time reducinthe execution space to find substring
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
  for (let i = 0; i < string.length; i++) {  //O(n*3) //Considering the substring
    for (let j = i; j < string.length; j++) { //constituting the substring
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
// This is followong bactracking ideology.
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
  console.log(subsequences,'exlude');
  getSubsequences(string,subsequence + string.charAt(i), i + 1,subsequences) // include
  console.log(subsequences,'include');
  
}
console.log(generateSubsequences("abcd"));

// b) generateSubsequence
// This is following recursive ideology.
function generateSubsequences2(string) {
  return getSubsequences2(string);
}
function getSubsequences2(string) {
  let answer = [];  // this will be created every time this function is called

  // Base Case
  if(string === ''){
    // subsequences.push(string)
    return [string]
  } 

  // Recursive Step
  let smallerProblem = string.substring(1) //smaller problem
  let smallerResult = getSubsequences2(smallerProblem)
  console.log(smallerResult.length);
  answer.push(...smallerResult);// add smaller problem's solution or subsequences to the answer
  for (let i = 0; i < smallerResult.length; i++) {
    answer.push(string.charAt(0) + smallerResult[i])
  }
  return answer
}
console.log(generateSubsequences2('bcd'));



// Time Convert
function convertTime(num) {
  let hours = Math.floor(num / 60)
  let minutes = num % 60
  return hours + ':' + minutes;
}
console.log(convertTime(45));

// Counting Minutes
