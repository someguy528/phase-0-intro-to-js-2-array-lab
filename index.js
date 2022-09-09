// Write your solution here!
let cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name)
};
function destructivelyPrependCat(name){
    return cats.unshift(name)
};
let destructivelyRemoveLastCat = () => cats.pop();
let destructivelyRemoveFirstCat = () => cats.shift();
let appendCat = name => [...cats, name];
let prependCat = name => [name, ...cats];
let removeLastCat = () => cats.slice(0,cats.length-1);
let removeFirstCat = () => cats.slice(1);

