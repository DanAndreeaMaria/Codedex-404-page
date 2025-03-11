# Codedex-404-page # 

* I started this challenge with my partner - I didn't work alone on this project! *

Bug-Catcher is a browser-based mini-game where players must catch programming errors (bugs) appearing on the screen to earn points. The game is built using HTML5 Canvas, JavaScript and CSS.

## Features

* **Move left and right to catch bugs** - Use the arrows to catch the bugs (errors) to decrease the 404 number
* **Canvas based gameplay** - Smooth, dynamic animations rendered using HTML5 Canvas
* **Score system** - There are 404 errors and you can try catch them all until you reach 0 
* **Customizable gameplay** - Modify game speed, bug sprites and sounds easily from the source code

## Technologies used

* **HTML5 Canvas** - Renders game objects dynamically
* **JavaScript** - Handles game logic, animations and event interactions
* **CSS** - Styles UI elements 

## How to play

* Bugs are spawned randomly from the top of the screen
* Use the keyboard arrows ```left``` and ```right``` to move the mini-computer and catch the errors
* Every bug has a different and fun message so, enjoy!
* If you are patient enough, you can catch all 404 errors and be a winner

## Code explanation

1. **Canvas setup**

  A simple HTML setup from where you take it and work separate with JavaScript
  ```HTML
  <canvas id="game"></canvas>
  ```

2. **Arrow moves**

   The arrow moves the character with a 6 unit speed on X axys and when the key is not pressed anymore, the value becomes 0, so the character stays still

  ```JavaScript
  function game(){
      addEventListener("keydown",function(e){
          if(e.code=="ArrowLeft") xl=-6
          if(e.code=="ArrowRight") xr=6
      })
      addEventListener("keyup",function(e){
          if(e.code=="ArrowLeft") xl=0
          if(e.code=="ArrowRight") xr=0
      
      })
  ```

3. Bug spawning

   The image is created with ```fx.drawImage``` and then, an infinite loop is checking if the bug is interacting with the player and if not, the bug keeps moving down until it reaches the end of the canvas and disappears.

  ```JavaScript
  fx.drawImage(page[nrPage],pozX,iy,dimension,dimension)

        if((x>ix-dimension&&x<ix+dimension)&&iy+dimension>y)
        {
            iy=0;
            findXpos()
            code=code-1
            nrmsg=Math.floor(Math.random() * (24 - 0 + 1)) + 0
            okmsg=1
            setTimeout(msgcounter,2000)
            nrPage=Math.floor(Math.random()*(8-0+1))+0
        }
        else if(iy>y+(dimension/2)) 
        {
            iy=0;
            findXpos()
            nrPage=Math.floor(Math.random()*(8-0+1))+0

        }
        else iy+=2
  ```
  

4. Messages and images stored in arrays

    ```JavaScript
    let msg=[]
    msg[0]="No, not my page!"
    msg[1]="That's a bill."
    msg[2]="Oh! A Bitcoin!"
    msg[3]="Meh, a grocery list."
    <!-- ... -->
    msg[22]="My homework?"
    msg[23]="Jeans sale!"
    msg[24]="I won a smartphone!"
    let nrmsg=1,okmsg=0

    const page = []
    page[0]=new Image()
    page[0].src="images/p0.png"
    page[1]=new Image()
    page[1].src="images/p1.png"
    page[2]=new Image()
    <!-- ... -->
    page[7]=new Image()
    page[7].src="images/p7.png"
    page[8]=new Image()
    page[8].src="images/p8.png"
    ```

   
