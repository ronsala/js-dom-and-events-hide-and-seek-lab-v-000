function getFirstSelector( selector ) {
  const element = document
    .querySelector( selector );
  return element;
}

function nestedTarget() {
  const target = document
    .querySelector( '#nested .target' );
  return target;
}

function deepestChild() {
  const deepestChild = document
    .querySelector( '#grand-node div div div div' );
    return deepestChild;
}

function increaseRankBy( n ) {
  const rankedLists = document
    .querySelectorAll( '.ranked-list' );
  const firstList = rankedLists[ 0 ]
  const secondList = rankedLists[ 1 ];
  let children = firstList.children;

  for ( let i = 0, l = children.length; i < l; i++ ) {
    children[i].innerHTML = ((parseInt(children[i].innerHTML)) + n);
  };

  let children2 = secondList.children;

  for ( let i = 0, l = children2.length; i < l; i++ ) {
    children2[i].innerHTML = ((parseInt(children2[i].innerHTML)) + n);
  };
}
