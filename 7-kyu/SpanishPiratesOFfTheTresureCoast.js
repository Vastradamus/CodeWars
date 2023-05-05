/**
 * The Spanish King wants to bring gold back to the empire. The first step is finding pirates and the gold in the new world.
 */

// solution

function secretMap(sp){
    let gold = 0
    let pirate = 0
    for ( arr of sp) {
      if ( arr[0] === 'pirate') {
        pirate ++
      } else if ( arr[0] === "pile_of_gold") {
        gold ++
      }
    }
    return `count of pirates: ${pirate} and the count of gold piles: ${gold}`
  }