class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
        //add code for creating and positioning the third input box and button
        this.access3 = createInput("code1");
        this.access3.position(400,370);
        this.access3.style('background','white');

        this.button3 = createButton('check');
        this.button3.position(400,400);
        this.button3.style('background','lightgrey');     
        
        this.msg = createElement('h3');
        
    }

    display(){

        this.button1.mousePressed(() => 
        { console.log("check");
            if(system.authenticate(accessCode1,this.access1.value())){
                console.log("authenticate");
                this.button1.hide();
                this.access1.hide();
                score++;
                this.msg.html("Right Answer !!");
                this.msg.position(100,90);  
                this.msg.style('color','white');      
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++                
                this.msg.html("Right Answer !!");
                this.msg.position(700,190);  
                this.msg.style('color','white');      
            }
        });
        
//add code for what happens when the third button is pressed
        this.button3.mousePressed(() =>
        { 
            if(system.authenticate(accessCode2,this.access3.value()))
            {
                this.button3.hide();
                this.access3.hide();                
                score++;
                this.msg.html("Right Answers !!");
                this.msg.position(300,100);  
                this.msg.style('color','white');              
            }
        })

    }
    text1()
    {
        
    }
}