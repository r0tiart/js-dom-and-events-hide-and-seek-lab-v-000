function getFirstSelector(selector){
  const item = document.querySelector(selector);
  return item;
}

function nestedTarget(){
 const nestedItem  =  document.querySelector('#nested div.target');
 return nestedItem;
}

function deepestChild(){
  let main = document.querySelector('div#grand-node');
  let child = main.children[0]
  
  while(child){
  	main = child
  	child = main.children[0]
  }
  return main;
}

function increaseRankBy(n){
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (var i = 0, l = rank.length; i<l ; i++){
    rank[i].innerHTML = (i + n).toString();
  }
}