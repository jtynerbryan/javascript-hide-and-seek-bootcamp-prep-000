function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
  return lis
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
