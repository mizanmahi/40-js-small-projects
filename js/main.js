const friends = ['mizan mahi', 'kamal zahmed', 'joe ray'];


const sorted = friends.sort((firstOne, nextOne) => {
  let first = firstOne.split(" ")[1][0];
  let next = nextOne.split(" ")[1][0];
  return first.charCodeAt(0) - next.charCodeAt(0);
  
})

console.table(sorted)