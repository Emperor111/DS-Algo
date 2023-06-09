const strings = ['a','b','c','d'];

strings.push('e');
console.log(strings);

strings.pop();
console.log(strings);

strings.unshift('x');
console.log(strings);

strings.splice(2, 0, 'Kick');
console.log(strings);

//strings.append('kya');
//console.log(strings);

//Output
['a', 'b', 'c', 'd', 'e']
['a', 'b', 'c', 'd']
['x', 'a', 'b', 'c', 'd']
['x', 'a', 'Kick', 'b', 'c', 'd']