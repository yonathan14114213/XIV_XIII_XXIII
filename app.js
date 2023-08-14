const { log } = require('console');
const fs = require('fs');
const _ = require('lodash');



fs.readFile('data.txt','utf-8',(err,data )=>{
    if (err) throw err;
    console.log('the data: ' , data);
    const dataArr = data.split(' ')
    console.log('the num of words:', dataArr.length)
    const dataArr2 = [...dataArr]
    const dataReverse = _.reverse(dataArr2);
    console.log('reverse; ',dataReverse.join(''));
    const unik = _.uniq(dataArr);
    console.log('unik: ',unik);
    const unikWords = findUnik(dataArr)
    console.log('unik-words: ',unikWords);
    console.log('num of unik: ',unikWords.length);
    console.log('upper-case-unik: ', upper(unikWords))
    const longUnik = unikWords.filter(str => str.length>5);
    console.log('long-unik-words: ', longUnik);
});


function upper(arr){
    return arr.map(str => str.toUpperCase());
}

function findUnik(arr) {
    const counts = _.countBy(arr);
    return _.filter(arr, str => counts[str] === 1);
  }
  
