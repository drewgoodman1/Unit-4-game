
$(document).ready(function() {

  
  isPlaying = false;
  var heroSelected = false;
  var villainSelected = false;
  var currentHero;
  var currentVillain;
  var defeatedVillains = 0;
  var wolfPic = "../"



// create player objects
  var foxChar = {    
    healthPoints : 100, 
    attackPower : 10,
    counterAttack : 20,
    alive : true
  };

  var mrsFoxChar = {    
    healthPoints : 100, 
    attackPower : 10,
    counterAttack : 20,
    alive : true
  };

  var krisChar = {    
    healthPoints : 100, 
    attackPower : 10,
    counterAttack : 20,
    alive : true
  };

  var bunceChar = {    
    healthPoints : 180, 
    attackPower : 10,
    counterAttack : 10,
    alive :  true
  };

  var boggisChar = {    
    healthPoints : 300, 
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
      
      initializeHero();     
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

      initializeHero();      
    }
    if(heroSelected && villainSelected){       
      battle();
    }
  });

  $("#krisButton").on("click", function() {

    if(!heroSelected){
      heroSelected = true;
      currentHero = krisChar;

      $("#krisButton").text("Attack");      
      $("#krisCard").attr("id","fightingHero");

      initializeHero();      
    }
    if(heroSelected && villainSelected){       
      battle();
    }
  });

  $("#bunceImage").on("click", function() {
      if(!villainSelected){
        villainSelected = true;
        currentVillain = bunceChar;      
        $("#bunceCard").attr("id","fightingVillain");
        initializeVillain();
      }
  });

  $("#boggisImage").on("click", function() {
      if(!villainSelected){
        villainSelected = true;
        currentVillain = boggisChar;             
        $("#boggisCard").attr("id","fightingVillain");        
        initializeVillain();        
      }
  });

  $("#beanImage").on("click", function() {
    if(!villainSelected){
      villainSelected = true;
      currentVillain = beanChar;          
      $("#beanCard").attr("id","fightingVillain")
      initializeVillain();
    }  
});

  function battle(){   
        currentHero.healthPoints -= currentVillain.counterAttack;
        currentVillain.healthPoints -= currentHero.attackPower;
        currentHero.attackPower += currentHero.attackPower;  

        $("#heroSpot p:first").html("HP:  " + currentHero.healthPoints + "  Attack:  " + currentHero.attackPower);
        $("#villainSpot p:first").html("HP:  " + currentVillain.healthPoints + "  Attack:  " + currentVillain.counterAttack);
          
        if(currentVillain.healthPoints <= 0){
          currentVillain.alive = false;
          currentVillain = {};        
          villainSelected = false;
          defeatedVillains++;        

          $("#villainSpot").empty();
          $("#fightingVillain").removeAttr("id","fightingVillain");  

          if(defeatedVillains >2){            
            showVictory();           
          }        
        }
      if(currentHero.healthPoints <= 0){
        currentHero.alive = false;
        currentHero = {};        
        heroSelected = false;

        $("#heroSpot").empty();
        $("#fightingHero").removeAttr("id","fightingHero");        
      }
  }

  function initializeHero(){
      $("#fightingHero p:first" ).html("HP:  " + currentHero.healthPoints + "  Attack:  " + currentHero.attackPower);
      heroDiv = $("#fightingHero");      
      $("#heroSpot").append(heroDiv);    
  }

  function initializeVillain(){
      $("#fightingVillain p:first" ).html("HP:  " + currentVillain.healthPoints + "  Attack:  " + currentVillain.counterAttack);
      villainDiv = $("#fightingVillain");      
      $("#villainSpot").append(villainDiv);    
  }   
  
  function showVictory(){
    console.log("cider");
    victoryImage = "<img src='assets/images/black.gif' width='200px'/>";
    
    $("#battleSpot").html(victoryImage + "           You win!!");
    
  }
      
}); 

  




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

  
