$("#rock").click(()=>{
  $(".player").css({"background":" url('rock.png')",
  "background-position": "center",
  "background-size": "cover"});
  var a=Math.floor(Math.random()*3)
  var txt=["rock","lol","scissor"]
  var c=txt[a];
  $(".cpu").css({"background":`url('${c}.png')`,
  "background-position": "center",
  "background-size": "cover"});
 
    
  setTimeout(
    function(){

        
  if(c==="rock")
  {
    alert("It's Tie!!");
 
  }
  if(c==="lol")
  {
    alert("Loser")
  }
  if(c==="scissor")
  {
    alert("Winner")
  }

    },1000
  )
 
})

$("#paper").click(()=>{
  $(".player").css({"background":" url('lol.png')",
  "background-position": "center",
  "background-size": "cover"});
  
  var a=Math.floor(Math.random()*3)
  var txt=["rock","lol","scissor"]
  var c=txt[a];
  $(".cpu").css({"background":`url('${c}.png')`,
  "background-position": "center",
  "background-size": "cover"});
  
  
  
  setTimeout(
    function(){

        
  if(c==="rock")
  {
    alert("Winer");
 
  }
  if(c==="lol")
  {
    alert("It's a Tie!!!")
  }
  if(c==="scissor")
  {
    alert("losser")
  }

    },1000
  )
 
 
 
})

$("#scissor").click(()=>{
  $(".player").css({"background":" url('scissor.png')",
  "background-position": "center",
  "background-size": "cover"});
  
  var a=Math.floor(Math.random()*3)
  var txt=["rock","lol","scissor"]
  var c=txt[a];
  $(".cpu").css({"background":`url('${c}.png')`,
  "background-position": "center",
  "background-size": "cover"});
 
  
  setTimeout(
    function(){

        
  if(c==="rock")
  {
    alert("Loser");
 
  }
  if(c==="lol")
  {
    alert("Winner")
  }
  if(c==="scissor")
  {
    alert("It's Tie!!!")
  }

    },1000
  )
 

})