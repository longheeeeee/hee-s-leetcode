/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (!s.length) return ' '
  const map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
  }
  for (const item in map) {
    if (Object.hasOwnProperty.call(map, item)) {
      if (map[item] === 1) return item
    }
  }
  return ' '
};