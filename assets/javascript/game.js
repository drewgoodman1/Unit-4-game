
$(document).ready(function() {

  isPlaying = false;
  var heroSelected = false;
  var villainSelected = false;
  var currentHero;
  var currentVillain;
  var defeatedVillains = 0;



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
    counterAttack : 65,
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

  $("#foxButton").on("click", function() {

    if(!heroSelected){
      heroSelected = true;
      currentHero = foxChar;

      $("#foxButton").text("Attack");      
      $("#foxCard").attr("id","fightingHero");
      $("#fightingHero").clone(true).appendTo("#heroSpot");
    }

    if(heroSelected && villainSelected){
      battle();
    }
  });

  $("#mrsFoxButton").on("click", function() {

    if(!heroSelected){
      heroSelected = true;
      currentHero = foxChar;

      $("#mrsFoxButton").text("Attack");      
      $("#mrsFoxCard").attr("id","fightingHero");
      $("#fightingHero").clone(true).appendTo("#heroSpot");
    }

    if(heroSelected && villainSelected){
      battle();
    }
  });

  $("#bunceButton").on("click", function() {
      if(!villainSelected){
        villainSelected = true;
        currentVillain = bunceChar;

        $("#bunceButton").text("Defend");      
        $("#bunceCard").attr("id","fightingVillain");
        $("#fightingVillain").clone(true).appendTo("#villainSpot");
      }
  });

  $("#boggisButton").on("click", function() {
      if(!villainSelected){
        villainSelected = true;
        currentVillain = boggisChar;

        $("#boggisButton").text("Defend");      
        $("#boggisCard").attr("id","fightingVillain");
        $("#fightingVillain").clone(true).appendTo("#villainSpot");
      }
  });

  $("#beanButton").on("click", function() {
    if(!villainSelected){
      villainSelected = true;
      currentVillain = beanChar;

      $("#beanButton").text("Defend");      
      $("#beanCard").attr("id","fightingVillain");
      $("#fightingVillain").clone(true).appendTo("#villainSpot");
    }  
});

  function battle(){      
            
        currentHero.healthPoints -= currentVillain.counterAttack;
        currentVillain.healthPoints -= currentHero.attackPower;
        currentHero.attackPower += currentHero.attackPower;

        console.log(currentHero);
        console.log(currentVillain);
          
      if(currentVillain.healthPoints <= 0){

        currentVillain.alive = false;
        currentVillain = {};        
        villainSelected = false;
        defeatedVillains++;

        console.log(currentVillain);

        $("#villainSpot").empty();
        $("#fightingVillain").removeAttr("id","fightingVillain");  

        if(defeatedVillains >2){
          console.log("You Win");
        }
        
      }

      if(currentHero.healthPoints <= 0){

        currentHero.alive = false;
        currentHero = {};        
        heroSelected = false;
        console.log(currentHero);

        $("#heroSpot").empty();
        $("#fightingHero").removeAttr("id","fightingHero");        
      }
  }


      
      
}); 

  




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

  
