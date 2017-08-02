/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// let hand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]

// var deck = [];

function handValue (hand) {
 let playValue = 0;

 for (var i = 0; i < handValue.length; i++) {
   if (hand[i] === "J" || === "Q" || === "K"){
     playValue += 0;
   } else if (hand[i] === 2 || === 3 || === 4 || === 5 || === 6 || === 7 || === 8 || === 9 ){
          switch(hand[i]){
            case '2':
            playValue = 2;
            break;

              case '3':
              playValue = 3;
              break;

                case '4':
                playValue = 4;
                break;

                  case '5':
                  playValue = 5;
                  break;

                    case '6':
                    playValue = 6;
                    break;

                      case '7':
                      playValue = 7;
                      break;

                        case '8':
                        playValue = 8;
                        break;

                          case '9':
                          playValue = 9;
                          break;}

          }
   }

   function acesHigh ();{
     se
   }
 }
}

  }

  }


    return;
  }


  // for (let i=0; i < sorted.length; i++){
  //   if (sorted[i] <= 10) {
  //     container.push(parseInt(sorted[i]));
  //   }
  //   else if (alphabet.indexOf(sorted[i]) >= 0) {
  //     container.push(10);
  //   }
  //   else { //for Aces
  //     if (11 <= (21-total) && sorted.lastIndexOf("A") == i) {
  //       container.push(11);
  //     }
  //     else {
  //       container.push(1);
  //     } //close Ace else
  //   } //close Loop else
    getTotal(container);
  } //close For loop

  function getTotal(container){
    total = 0;
    for (x = 0; x < container.length; x++) {
      total = total + container[x];
    }
  }
  return total;


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
