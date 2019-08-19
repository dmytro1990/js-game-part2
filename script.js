
const startGame = () => {
    const play = prompt('do you want to play a game?');
    
    if(play.toLowerCase() === 'no'){     //  ********** .toLowerCase() treats any case as a correct/passing one *********
      console.log('bye')
    }else if (play.toLowerCase() === 'yes'){
      const name = prompt('what is your name?')
    startCombat(name);
    }
    }

const getDamage = () => {
 return  Math.floor((Math.random() * 5) +1);
}
const startCombat = (name) => {
    
    let user = 30;
    let grant = 10;
    let wins = 0; 
    while(user >= 0 && wins <= 3){
       
        const combat = prompt('attack or quit');
        if(combat.toLowerCase() === 'quit'){
          console.log('bye')
          break;

    // ******** checking if user typed anything else  *************
        //   return();
        // if (!attack)
        // continue;
        
        }else if (combat.toLowerCase() === 'attack'){

         user -= getDamage();
         grant -= getDamage();
         console.log ('Grant has ' + grant + ' health left');
         console.log (name + ' has ' + user + ' health left');
        }

        if(grant <= 0){
          wins++;
          grant = 10;
          console.log(name + ' won a round');
        }   
        
            
        }
        if(  wins === 3){
            console.log('Game over ' + name + ' WON!!!')
            
          }   
          else if (grant > 0 ){
            console.log('Game over Grant WON!!!')
            
          }

        
    }

startGame();





// use prompt inside while loop

// let user = 15;
// let grant = 5;
// let wins = 0;  

// while(user > 0 && wins < 3){
//   user -= Math.floor((Math.random() * 2) +5);
//   grant -= Math.floor((Math.random() * 2) +5);
//   console.log('Grant has ' + grant + ' health left')
//   console.log(name + ' has ' + user + ' health left')


 

//   if(grant <= 0){
//     wins++;
//     grant = 10;
//     console.log(name + ' won a round')
//   }
// }

// if(user > 0 && wins === 3){
// console.log('Game over ' + name + ' WON!!!')
// }

// }



// const startGame = () => {
// const play = prompt('do you want to play a game?');

// if(play === 'no'){
//   console.log('bye')
// }else if (play === 'yes'){
//   const name = prompt('what is your name?')
// }
