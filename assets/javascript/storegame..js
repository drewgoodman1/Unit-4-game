$(document).ready(function() {

    isPlaying = false;
    var currentHero;
    var currentVillain;
  
  
  
  // create player objects
    var foxChar = {    
      healthPoints : 100, 
      attackPower : 10,
      counterAttack : 20,
      alive : true
    };
  
    var bunceChar = {    
      healthPoints : 100, 
      attackPower : 10,
      counterAttack : 10,
      alive :  true
    };
  
    var boggisChar = {    
      healthPoints : 100, 
      attackPower : 10,
      counterAttack : 10,
      alive :  true
    };
  
    var beanChar = {    
      healthPoints : 100, 
      attackPower : 10,
      counterAttack : 10,
      alive :  true
    };
  
    //on click for fox
    $("#foxButton").on("click", function() {
      if(!isPlaying){
        $("#foxButton").text("Attack");
  
        //add class
  
        $("#foxCard").attr("id","fightingHero");
        currentHero = foxChar;
        console.log("fox click");
      }
  
      if(currentHero && currentVillain){      
        battle();
      }
    });
  
    $("#bunceButton").on("click", function() {
      if(!isPlaying && bunceChar.alive){
        $("#bunceButton").text("Let's Go!");
  
        $("#bunceCard").attr("id","fightingVillain");
        currentVillain = bunceChar;
        console.log("bunce click");      
      }
      if(currentHero.alive && currentVillain.alive){      
        battle();
      }
    });
  
    $("#boggisButton").on("click", function() {
      if(!isPlaying && boggisChar.alive){
        $("#boggisButton").text("Let's Go!");
  
        $("#boggisCard").attr("id","fightingVillain");
        currentVillain = boggisChar;
        console.log(currentVillain);      
      }
      if(currentHero && currentVillain){      
        battle();
      }
    });
  
    function battle(){     
        
        console.log("hero click");
  
        if(isPlaying){        
          currentHero.healthPoints -= currentVillain.counterAttack;
          currentVillain.healthPoints -= currentHero.attackPower;
          currentHero.attackPower += currentHero.attackPower;
        }
          /*if(currentHero.healthPoints <= 0){
            currentHero.alive = false;
            //isPlaying = false;
          }*/
  
        if(currentVillain.healthPoints <= 0){
          currentVillain.alive = false;
          isPlaying = false;
          console.log(currentVillain.alive);
          
          $("#villainSpot").remove();
          $("#fightingVillain").removeAttr("id","fightingVillain");
          console.log("remove attr");
          
        }
        
  
        if(!isPlaying){
          initializeBattle();
        }
  
  
        console.log(currentHero);
        console.log(currentVillain);
        
    }
  
    function initializeBattle(){
      $("#fightingHero").clone(true).appendTo("#heroSpot");
      $("#fightingVillain").clone(true).appendTo("#villainSpot");
      isPlaying = true;
    } 
  
  });
  