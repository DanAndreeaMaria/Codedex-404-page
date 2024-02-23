
function game(){
    addEventListener("keydown",function(e){
        if(e.code=="ArrowLeft") xl=-6
        if(e.code=="ArrowRight") xr=6
    })
    addEventListener("keyup",function(e){
        if(e.code=="ArrowLeft") xl=0
        if(e.code=="ArrowRight") xr=0
    
    })
    const btn = document.getElementById("buton")
    const cont = document.getElementById("containerJS")
    const err = document.getElementById("err2JS")
    const bg = document.getElementById("bcimg")
    const tutorial = document.getElementById("tutorial")
    btn.remove()
    cont.remove()
    tutorial.innerHTML="Use left/right arrow to find your page"
    setTimeout(removeTutorial,3000)
    const er404=document.getElementById("e404")
    const canvas=document.getElementById("game")
    const txtmsg=document.getElementById("pg-found")
    const px= canvas.getContext("2d")
    const fx= canvas.getContext("2d")
    let code=404

    let msg=[]
    msg[0]="No, not my page!"
    msg[1]="That's a bill."
    msg[2]="Oh! A Bitcoin!"
    msg[3]="Meh, a grocery list."
    msg[4]="Wow! NASA database. Nice!"
    msg[5]="Oh, a chocolate recipe. Yummy!"
    msg[6]="Another chocolate recipe."
    msg[7]="Uh-oh! Didn't call the function!"
    msg[8]="My God! Python test answers!"
    msg[9]="I found a typo!"
    msg[10]="A missed semicolon! Classic."
    msg[11]="CODEDEX! Oh, it's a fake!"
    msg[12]="My shopping wishlist!"
    msg[13]="Another typo!"
    msg[14]="My Codédex annual sub!"
    msg[15]="A missing function!"
    msg[16]="A missing function! Again..."
    msg[17]="My grandma!?"
    msg[18]="Another fake profile..."
    msg[19]="Santa's address?!"
    msg[20]="I found Sonny's profile!"
    msg[21]="My old website :D"
    msg[22]="My homework?"
    msg[23]="Jeans sale!"
    msg[24]="I won a smartphone!"
    let nrmsg=1,okmsg=0

    let nrPage=1
    const page = []
    page[0]=new Image()
    page[0].src="images/p0.png"
    page[1]=new Image()
    page[1].src="images/p1.png"
    page[2]=new Image()
    page[2].src="images/p2.png"
    page[3]=new Image()
    page[3].src="images/p3.png"
    page[4]=new Image()
    page[4].src="images/p4.png"
    page[5]=new Image()
    page[5].src="images/p5.png"
    page[6]=new Image()
    page[6].src="images/p6.png"
    page[7]=new Image()
    page[7].src="images/p7.png"
    page[8]=new Image()
    page[8].src="images/p8.png"

    const player = new Image()
    player.src="images/codedex-bot-logo.gif"

    //coord player
    let x=window.innerWidth/2,y=0,xl=0,xr=0,d1,d2,dimension

    //coord page
    let ix=window.innerWidth/2,iy=0,pozX,percX=(ix*100)/window.innerWidth

    function updatePlayer()
    {
        canvas.width=window.innerWidth-10
        canvas.height=window.innerHeight*0.9
        if(x+60 >= canvas.width){
            xr=0
            x=canvas.width-60
        }
        if(x<=0)
            xl=0
        pozX=canvas.width*(percX/100)
        ix=pozX
        y=canvas.height*0.8
        d1=canvas.height*0.08
        d2=canvas.width*0.08
        if(d1>d2) dimension=d2
        else dimension=d1
        x+=xr
        x+=xl
        px.drawImage(player,x,y,dimension,dimension)

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
        if(okmsg==1){

             txtmsg.innerHTML=msg[nrmsg]
        }
        else{
            txtmsg.innerHTML=" "
        }
        if(code<=0)
        {
            err.remove()
            er404.innerHTML="We definitely don't have your page."
        }
        else er404.innerHTML=code
    } 
    setInterval(updatePlayer,1000/60)

    function msgcounter()
    {
        okmsg=0
    }

    function findXpos()
    {
        ix=Math.floor(Math.random() * ((canvas.width-dimension) - 1 + 1)) + 1
        percX=(ix*100)/canvas.width
    }

    function removeTutorial()
    {
        tutorial.remove()
    }
}