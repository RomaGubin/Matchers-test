function heroRating(arr) {
  const newArr = [...arr];

  newArr.sort((a, b) => b.health - a.health); //если в порядке возрастания сортировать то нужно a.health - b.health

  // for (let i = 0; i < newArr.length; i++) {
  //   newArr[i].rating = i + 1;
  // }

  return newArr;
}

export default heroRating;