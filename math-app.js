//NEEDS TO BE OPEN WITH DROIDSCRIPT APP OR webIDE TO RUN PROPERLY  
//Called when application is started.
function OnStart()
{
 //  name = prompt("what is your name?");
  //  app.SaveText(name);

	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	lay.SetBackground("Img/backdrop.jpg");
//	lay.SetBackGradient("#ffd2da","#ffffcc");
	
	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello, and welcome" );
	txt.SetTextSize( 32 );
    txt.SetTextColor("#ff0000");
	lay.AddChild( txt );
	
	txt2 = app.CreateText("to Math App");
	txt2.SetTextSize( 32 );
    txt2.SetTextColor("#ff0000");
	lay.AddChild( txt2 );
	
		laySlide = app.CreateLayout( "Linear", "FillXY" );
	laySlide.SetPadding( 0, 0.1, 0, 0 ); 
	laySlide.SetBackground( "Img/backdrop.jpg" );
	laySlide.SetVisibility( "Hide" );
	
	laySlideA = app.CreateLayout( "Linear", "FillXY" );
	laySlideA.SetPadding( 0, 0.1, 0, 0 ); 
	laySlideA.SetBackground( "Img/backdrop.jpg" );
	laySlideA.SetVisibility( "Hide" );
	
		laySlideB = app.CreateLayout( "Linear", "FillXY" );
	laySlideB.SetPadding( 0, 0.1, 0, 0 ); 
	laySlideB.SetBackground( "Img/backdrop.jpg" );
	laySlideB.SetVisibility( "Hide" );
	
		laySlideC = app.CreateLayout( "Linear", "FillXY" );
	laySlideC.SetPadding( 0, 0.1, 0, 0 ); 
	laySlideC.SetBackground( "Img/backdrop.jpg" );
	laySlideC.SetVisibility( "Hide" );
	
		laySlideD = app.CreateLayout( "Linear", "FillXY" );
	laySlideD.SetPadding( 0, 0.1, 0, 0 ); 
	laySlideD.SetBackground( "Img/backdrop.jpg" );
	laySlideD.SetVisibility( "Hide" );
	
	
	
	
	
	// buttons
		btn = app.CreateButton( "2 numb equation", 0.6, 0.1, "custom" );
btn.SetStyle( "#ffa500", "#ff0000", 10 );
  btn.SetTextShadow( 9, 9,  9, "#cc8400" );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );
	
	btnA = app.CreateButton( "3 numb equation", 0.6, 0.1, "custom" );
btnA.SetStyle( "#ffa500", "#ff0000", 10 );
  btnA.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnA.SetOnTouch( btnA_OnTouch );
	lay.AddChild( btnA );
	
		btnB = app.CreateButton( "2 numb equations with x", 0.6, 0.1, "custom" );
btnB.SetStyle( "#ffa500", "#ff0000", 10 );
  btnB.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnB.SetOnTouch( btnB_OnTouch );
	lay.AddChild( btnB );
	
		btnC = app.CreateButton( "3 numb equations with x", 0.6, 0.1, "custom" );
btnC.SetStyle( "#ffa500", "#ff0000", 10 );
  btnC.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnC.SetOnTouch( btnC_OnTouch );
	lay.AddChild( btnC );
	
		 b5 = app.CreateButton( "average", 0.6, 0.1,  "custom" );
b5.SetStyle( "#ffa500", "#ff0000", 10 );
  b5.SetTextShadow( 9, 9,  9, "#cc8400" );
  b5.SetOnTouch( btnD_OnTouch );
  lay.AddChild( b5 );
  
  b6 = app.CreateButton( "Easy", 0.6, 0.1,  "custom" );
b6.SetStyle( "#ffa500", "#ff0000", 10 );
  b6.SetTextShadow( 9, 9,  9, "#cc8400" );
  b6.SetOnTouch( btnE_OnTouch );
  laySlide.AddChild( b6 );
  
  b7 = app.CreateButton( "Medium", 0.6, 0.1,  "custom" );
b7.SetStyle( "#ffa500", "#ff0000", 10 );
  b7.SetTextShadow( 9, 9,  9, "#cc8400" );
  b7.SetOnTouch( btnF_OnTouch );
  laySlide.AddChild( b7 );
  
  b8 = app.CreateButton( "Hard", 0.6, 0.1,  "custom" );
b8.SetStyle( "#ffa500", "#ff0000", 10 );
  b8.SetTextShadow( 9, 9,  9, "#cc8400" );
  b8.SetOnTouch( btnG_OnTouch );
  laySlide.AddChild( b8 );
  
  b9 = app.CreateButton( "Easy", 0.6, 0.1,  "custom" );
b9.SetStyle( "#ffa500", "#ff0000", 10 );
  b9.SetTextShadow( 9, 9,  9, "#cc8400" );
  b9.SetOnTouch( btnH_OnTouch );
  laySlideA.AddChild( b9 );
  
  b10 = app.CreateButton( "Medium", 0.6, 0.1,  "custom" );
b10.SetStyle( "#ffa500", "#ff0000", 10 );
  b10.SetTextShadow( 9, 9,  9, "#cc8400" );
  b10.SetOnTouch( btnI_OnTouch );
  laySlideA.AddChild( b10 );
  
  b11 = app.CreateButton( "Hard", 0.6, 0.1,  "custom" );
b11.SetStyle( "#ffa500", "#ff0000", 10 );
  b11.SetTextShadow( 9, 9,  9, "#cc8400" );
  b11.SetOnTouch( btnJ_OnTouch );
  laySlideA.AddChild( b11 );
  
  b12 = app.CreateButton( "Easy", 0.6, 0.1,  "custom" );
b12.SetStyle( "#ffa500", "#ff0000", 10 );
  b12.SetTextShadow( 9, 9,  9, "#cc8400" );
  b12.SetOnTouch( btnK_OnTouch );
  laySlideB.AddChild( b12 );
  
  b13 = app.CreateButton( "Medium", 0.6, 0.1,  "custom" );
b13.SetStyle( "#ffa500", "#ff0000", 10 );
  b13.SetTextShadow( 9, 9,  9, "#cc8400" );
  b13.SetOnTouch( btnL_OnTouch );
  laySlideB.AddChild( b13 );
  
    b14 = app.CreateButton( "Hard", 0.6, 0.1,  "custom" );
b14.SetStyle( "#ffa500", "#ff0000", 10 );
  b14.SetTextShadow( 9, 9,  9, "#cc8400" );
  b14.SetOnTouch( btnN_OnTouch );
  laySlideB.AddChild( b14 );
  
    b15 = app.CreateButton( "Easy", 0.6, 0.1,  "custom" );
b15.SetStyle( "#ffa500", "#ff0000", 10 );
  b15.SetTextShadow( 9, 9,  9, "#cc8400" );
  b15.SetOnTouch( btnM_OnTouch );
  laySlideC.AddChild( b15 );
  
    b16 = app.CreateButton( "Medium", 0.6, 0.1,  "custom" );
b16.SetStyle( "#ffa500", "#ff0000", 10 );
  b16.SetTextShadow( 9, 9,  9, "#cc8400" );
  b16.SetOnTouch( btnO_OnTouch );
  laySlideC.AddChild( b16 );
  
    b17 = app.CreateButton( "Hard", 0.6, 0.1,  "custom" );
b17.SetStyle( "#ffa500", "#ff0000", 10 );
  b17.SetTextShadow( 9, 9,  9, "#cc8400" );
  b17.SetOnTouch( btnP_OnTouch );
  laySlideC.AddChild( b17 );
  
    b18 = app.CreateButton( "Easy", 0.6, 0.1,  "custom" );
b18.SetStyle( "#ffa500", "#ff0000", 10 );
  b18.SetTextShadow( 9, 9,  9, "#cc8400" );
  b18.SetOnTouch( btnQ_OnTouch );
  laySlideD.AddChild( b18 );
  
    b19 = app.CreateButton( "Medium", 0.6, 0.1,  "custom" );
b19.SetStyle( "#ffa500", "#ff0000", 10 );
  b19.SetTextShadow( 9, 9,  9, "#cc8400" );
  b19.SetOnTouch( btnR_OnTouch );
  laySlideD.AddChild( b19 );
  
    b20 = app.CreateButton( "Hard", 0.6, 0.1,  "custom" );
b20.SetStyle( "#ffa500", "#ff0000", 10 );
  b20.SetTextShadow( 9, 9,  9, "#cc8400" );
  b20.SetOnTouch( btnS_OnTouch );
  laySlideD.AddChild( b20 );
  
  //back button
	
	btnBack = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	 btnBack.SetStyle( "#ffa500", "#ff0000", 10 );
  btnBack.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnBack.SetOnTouch( btnBack_OnTouch );
	laySlide.AddChild( btnBack );
	
	btnBackA = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	  btnBackA.SetStyle( "#ffa500", "#ff0000", 10 );
  btnBackA.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnBackA.SetOnTouch( btnBackA_OnTouch );
	laySlideA.AddChild( btnBackA );
	
		
	btnBackB = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	  btnBackB.SetStyle( "#ffa500", "#ff0000", 10 );
  btnBackB.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnBackB.SetOnTouch( btnBackB_OnTouch );
	laySlideB.AddChild( btnBackB );
	
		
	btnBackC = app.CreateButton( "Back", 0.3, 0.06, "custom" );
	  btnBackC.SetStyle( "#ffa500", "#ff0000", 10 );
  btnBackC.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnBackC.SetOnTouch( btnBackC_OnTouch );
	laySlideC.AddChild( btnBackC );
	
		
	btnBackD = app.CreateButton( "Back", 0.3, 0.06, "custom" );
btnBackD.SetStyle( "#ffa500", "#ff0000", 10 );
  btnBackD.SetTextShadow( 9, 9,  9, "#cc8400" );
	btnBackD.SetOnTouch( btnBackD_OnTouch );
	laySlideD.AddChild( btnBackD );
	 
  
	//Add layout to app.	
	app.AddLayout( lay );
	app.AddLayout( laySlide );
	app.AddLayout( laySlideA );
	app.AddLayout( laySlideB );
	app.AddLayout( laySlideC );
	app.AddLayout( laySlideD );
}
var name= null;
var score = null;
var type = null;

var gate = 1;
var gateA = 1;
var gateB = 1;
var gateC = 1;
var gateD = 1;

   name = prompt("what is your name?");
    while ((name == null) || (name == "")){
         name = prompt("what is your name?");
    }
app.Alert(name );
        app.SaveText(name);
    

function reset()
{ 
    app.SaveNumber(gate, 0);
    app.SaveNumber(gateA, 0);
    app.SaveNumber(gateB, 0);
    app.SaveNumber(gateC, 0);
    app.SaveNumber(gateD, 0);
} 
setInterval(reset, 86400000);
var message = null;
var points = 0;
var ans = null;
function btn_OnTouch()
{
	laySlide.Animate( "SlideFromLeft" );
}

//Called when user touches our back button.
function btnBack_OnTouch()
{
	laySlide.Animate( "SlideToLeft" );	
}
function btnA_OnTouch()
{
	laySlideA.Animate( "SlideFromLeft" );
}

function btnB_OnTouch()
{
	laySlideB.Animate( "SlideFromLeft" );
}

function btnC_OnTouch()
{
	laySlideC.Animate( "SlideFromLeft" );
}
function btnD_OnTouch()
{
	laySlideD.Animate( "SlideFromLeft" );
}

function btnE_OnTouch()
{
    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(twoNumbE());
    var min = ans - 0.1;
    var max = ans + 0.1;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gate != 0){
        points = points + 1;
        gate = 0;
        app.SaveNumber(points);
        app.SaveNumber(gate);
}
notice();
}

function btnF_OnTouch()
{
    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(twoNumbM());
    var min = ans - 0.1;
    var max = ans + 0.1;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gate != 0){
        points = points + 2;
        gate = 0;
        app.SaveNumber(gate);
         app.SaveNumber(points);
    }
notice();
}
function btnG_OnTouch()
{
    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(twoNumbH());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gate != 0){
        points = points + 3;
        gate = 0;
        app.SaveNumber(gate);
         app.SaveNumber(points);
}
notice();
}
function btnH_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(threeNumbE());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateA != 0){
        points = points + 1;
        gateA = 0;
         app.SaveNumber(points);
         app.SaveNumber(gateA);
}
notice();
}
function btnI_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(threeNumbM());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateA != 0){
        points = points + 2;
        gateA = 0;
        app.SaveNumber(gateA);
         app.SaveNumber(points);
}
notice();
}
function btnJ_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(threeNumbH());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateA != 0){
        points = points + 3;
        gateA =0;
        app.SaveNumber(gateA)
         app.SaveNumber(points);
}
notice();
}
function btnK_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(twoNumbXE());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateB != 0){
        points = points + 1;
        gateB = 0;
        app.SaveNumber(gateB);
         app.SaveNumber(points);
}
notice();
}
function btnL_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(twoNumbXM());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 2;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateB != 0){
        points = points + 1;
        gateB = 0;
        app.SaveNumber(gateB);
         app.SaveNumber(points);
}
notice();
}
function btnM_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(twoNumbXH());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateB != 0){
        gateB = 0;
        points = points + 3;
        app.SaveNumber(gateB)
         app.SaveNumber(points);
}
notice();
}
function btnN_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(threeNumbXE());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateC != 0){
        gateC = 0;
        points = points + 1;
        app.SaveNumber(gateC);
         app.SaveNumber(points);
}
notice();
}
function btnO_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(threeNumbXM());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = "you got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateC != 0){
        points = points + 2;
        gateC = 0;
        app.SaveNumber(gateC);
         app.SaveNumber(points);
}
notice();
}
function btnP_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(threeNumbXH());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 3;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateC != 0){
        points = points + 1;
        gateC = 0;
        app.SaveNumber(gateC);
         app.SaveNumber(points);
}
notice();
}
function btnQ_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(createAverageE());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 1;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateD != 0){
        points = points + 1;
        gateD = 0;
        app.SaveNumber(gateD);
         app.SaveNumber(points);
}
notice();
}
function btnR_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(createAverageM());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 2;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateD != 0){
        points = points + 1;
        gateD = 0;
        app.SaveNumber(gateD);
         app.SaveNumber(points);
}
notice();
}
function btnS_OnTouch()
{    var correct = 0;
    for (var x = 1; x <= 5; x += 1){
      var hi = prompt(createAverageH());
    var min = ans - 0.01;
    var max = ans + 0.01;
    if (hi >= min && hi <= max){
        correct = correct + 3;
    }
    }
    if (x = 5){
        message = name + " got " + correct + " right out of 5";
        app.Alert(message);
    }
    if (correct >= 4 && gateD != 0){
        points = points + 1;
        gateD = 0;
        app.SaveNumber(gateD);
         app.SaveNumber(points);
}
notice();
}

//Called when user touches our back button.
function btnBackA_OnTouch()
{
	laySlideA.Animate( "SlideToLeft" );	
}

function btnBackB_OnTouch()
{
	laySlideB.Animate( "SlideToLeft" );	
}

function btnBackC_OnTouch()
{
	laySlideC.Animate( "SlideToLeft" );	
}

function btnBackD_OnTouch()
{
	laySlideD.Animate( "SlideToLeft" );	
}



    function generate2deci() {
        var rand = Math.random();
        var trans = 1000 * rand;
        var transA = Math.round(trans)
        var num = (transA / 100);
        return (num);
    }
    
    function generate1deci() {
        var num = ((Math.round(100 * Math.random()))/10) + 1;
        return (num);
    }
    
    function generatewhole(){
        var num= ( Math.round(10 * Math.random())) + 1;
        return(num);
    }

    function generatelength() {
        var num = Math.ceil(2 * Math.random());
        return (num);
    }

    function generateSymbol() {
        var sign = 0;
        var num = (Math.round(12 * Math.random()));
        if (num === 0 || num == 1 || num == 9) {
            sign = "+";
        };
        if (num === 2 || num == 3 || num == 10) {
            sign = "-";
        };
        if (num === 4 || num == 5 || num == 11) {
            sign = "/";
        };
        if (num === 6 || num == 7 || num == 12) {
            sign = "*";
        };
        if (num == 8) {
            sign = "+";
        };
        return (sign);
    }

    function twoNumbE() {
        var sign = 0;
        var equation = 0;
        var a = generatewhole();
        var b = generatewhole();
        var siggn = generateSymbol();
        equation = a + " " + siggn + " " + b;
        if (siggn == "+") {
            ans = a + b;
        }
        if (siggn == "-") {
            ans = a - b;
        }
        if (siggn == "/") {
            ans = a / b;
        }
        if (siggn == "*") {
            ans = a * b;
        }
        return (equation);
    }
    
        function twoNumbM() {
        var sign = 0;
        var equation = 0;
        var a = generate1deci();
        var b = generate1deci();
        var siggn = generateSymbol();
        equation = a + " " + siggn + " " + b;
        if (siggn == "+") {
            ans = a + b;
        }
        if (siggn == "-") {
            ans = a - b;
        }
        if (siggn == "/") {
            ans = a / b;
        }
        if (siggn == "*") {
            ans = a * b;
        }
        return (equation);
    }
    
        function twoNumbH() {
        var sign = 0;
        var equation = 0;
        var a = generate2deci();
        var b = generate2deci();
        var siggn = generateSymbol();
        equation = a + " " + siggn + " " + b;
        if (siggn == "+") {
            ans = a + b;
        }
        if (siggn == "-") {
            ans = a - b;
        }
        if (siggn == "/") {
            ans = a / b;
        }
        if (siggn == "*") {
            ans = a * b;
        }
        return (equation);
    }

    function threeNumbE() {
        var sign = 0;
        var a = generatewhole();
        var b = generatewhole();
        var c = generatewhole();
        var siggn = generateSymbol();
        var siggna = generateSymbol();
        var equation = a + " " + siggn + " " + b + " " + siggna +" "+ c;
        console.log (equation);
        if (siggn == "+") {
            if (siggna == "+") {
                ans = a + b + c;
            }
            if (siggna == "-") {
                ans = (a + b) - c;
            }
            if (siggna == "/") {
                ans = a + (b / c);
            }
            if (siggna == "*") {
                ans = a + (b * c);
            }
        }
        if (siggn == "-") {
            if (siggna == "+") {
                ans = a - b + c;
            }
            if (siggna == "-") {
                ans = (a - b) - c;
            }
            if (siggna == "/") {
                ans = a - (b / c);
            }
            if (siggna == "*") {
                ans = a - (b * c);
            }
        }
        if (siggn == "/") {
            if (siggna == "+") {
                ans = (a / b) + c;
            }
            if (siggna == "-") {
                ans = (a / b) - c;
            }
            if (siggna == "/") {
                ans = (a / b) / c;
            }
            if (siggna == "*") {
                ans = (a / b) * c;
            }
        }
        if (siggn == "*") {
            if (siggna == "+") {
                ans = (a * b) + c;
            }
            if (siggna == "-") {
                ans = (a * b) - c;
            }
            if (siggna == "/") {
                ans = (a * b) / c;
            }
            if (siggna == "*") {
                ans = (a * b) * c;
            }
        }
        return (equation);
    }
    
        function threeNumbM() {
        var sign = 0;
        var a = generate1deci();
        var b = generate1deci();
        var c = generate1deci();
        var siggn = generateSymbol();
        var siggna = generateSymbol();
        var equation = a + " " + siggn + " " + b + " " + siggna +" "+ c;
        console.log (equation);
        if (siggn == "+") {
            if (siggna == "+") {
                ans = a + b + c;
            }
            if (siggna == "-") {
                ans = (a + b) - c;
            }
            if (siggna == "/") {
                ans = a + (b / c);
            }
            if (siggna == "*") {
                ans = a + (b * c);
            }
        }
        if (siggn == "-") {
            if (siggna == "+") {
                ans = a - b + c;
            }
            if (siggna == "-") {
                ans = (a - b) - c;
            }
            if (siggna == "/") {
                ans = a - (b / c);
            }
            if (siggna == "*") {
                ans = a - (b * c);
            }
        }
        if (siggn == "/") {
            if (siggna == "+") {
                ans = (a / b) + c;
            }
            if (siggna == "-") {
                ans = (a / b) - c;
            }
            if (siggna == "/") {
                ans = (a / b) / c;
            }
            if (siggna == "*") {
                ans = (a / b) * c;
            }
        }
        if (siggn == "*") {
            if (siggna == "+") {
                ans = (a * b) + c;
            }
            if (siggna == "-") {
                ans = (a * b) - c;
            }
            if (siggna == "/") {
                ans = (a * b) / c;
            }
            if (siggna == "*") {
                ans = (a * b) * c;
            }
        }
        return (equation);
    }
    
        function threeNumbH() {
        var sign = 0;
        var a = generate2deci();
        var b = generate2deci();
        var c = generate2deci();
        var siggn = generateSymbol();
        var siggna = generateSymbol();
        var equation = a + " " + siggn + " " + b + " " + siggna +" "+ c;
        console.log (equation);
        if (siggn == "+") {
            if (siggna == "+") {
                ans = a + b + c;
            }
            if (siggna == "-") {
                ans = (a + b) - c;
            }
            if (siggna == "/") {
                ans = a + (b / c);
            }
            if (siggna == "*") {
                ans = a + (b * c);
            }
        }
        if (siggn == "-") {
            if (siggna == "+") {
                ans = a - b + c;
            }
            if (siggna == "-") {
                ans = (a - b) - c;
            }
            if (siggna == "/") {
                ans = a - (b / c);
            }
            if (siggna == "*") {
                ans = a - (b * c);
            }
        }
        if (siggn == "/") {
            if (siggna == "+") {
                ans = (a / b) + c;
            }
            if (siggna == "-") {
                ans = (a / b) - c;
            }
            if (siggna == "/") {
                ans = (a / b) / c;
            }
            if (siggna == "*") {
                ans = (a / b) * c;
            }
        }
        if (siggn == "*") {
            if (siggna == "+") {
                ans = (a * b) + c;
            }
            if (siggna == "-") {
                ans = (a * b) - c;
            }
            if (siggna == "/") {
                ans = (a * b) / c;
            }
            if (siggna == "*") {
                ans = (a * b) * c;
            }
        }
        return (equation);
    }

    
    function twoNumbXE() {
        var a = generatewhole();
        var b = generatewhole();
        var z = generatewhole();
        var siggn = generateSymbol();
        equation = z + " = " + a + "x " + siggn + " " + b;
        if (siggn == "+") {
            ans = (z - b) / a;
        }
        if (siggn == "-") {
            ans = (z - b) / a;
        }
        if (siggn == "/") {
            ans = (z * b) / a;
        }
        if (siggn == "*") {
            ans = (z / b) /a ;
        }
        return (equation);  
    }
     function twoNumbXM() {
        var a = generate1deci();
        var b = generate1deci();
        var z = generate1deci();
        var siggn = generateSymbol();
        equation = z + " = " + a + "x " + siggn + " " + b;
        if (siggn == "+") {
            ans = (z - b) / a;
        }
        if (siggn == "-") {
            ans = (z - b) / a;
        }
        if (siggn == "/") {
            ans = (z * b) / a;
        }
        if (siggn == "*") {
            ans = (z / b) /a ;
        }
        return (equation);  
    } function twoNumbXH() {
        var a = generate2deci();
        var b = generate2deci();
        var z = generate2deci();
        var siggn = generateSymbol();
        equation = z + " = " + a + "x " + siggn + " " + b;
        if (siggn == "+") {
            ans = (z - b) / a;
        }
        if (siggn == "-") {
            ans = (z - b) / a;
        }
        if (siggn == "/") {
            ans = (z * b) / a;
        }
        if (siggn == "*") {
            ans = (z / b) /a ;
        }
        return (equation);  
    }
    
    function threeNumbXE() {
        var sign = 0;
        var a = generatewhole();
        var b = generatewhole();
        var c = generatewhole();
        var z = generatewhole();
        var siggn = generateSymbol();
        var siggna = generateSymbol();
        var equation = z+ " = " + a + "x " + siggn + " " + b + " " + siggna +" "+ c;
        console.log (equation);
        if (siggn == "+") {
            if (siggna == "+") {
                ans = (z - (b + c))/a;
            }
            if (siggna == "-") {
                ans = (z - (b - c))/a;
            }
            if (siggna == "/") {
                ans = ((z * c)-b)/a;
            }
            if (siggna == "*") {
                ans = ((z / c)-b)/a;
            }
        }
        if (siggn == "-") {
            if (siggna == "+") {
                if((b+c)>0){
                ans = (z - (b + c))/a;
                }
                else{
                    ans (z+(b+c))/a;
                }
            }
            if (siggna == "-") {
                if((b-c)>0){
                ans = (z - (b - c))/a;
                }
                else{
                    ans (z+(b-c))/a;
                }
            }
            if (siggna == "/") {
                ans = ((z * c)+b)/a;
            }
            if (siggna == "*") {
                ans = ((z / c)+b)/a;
            }
        }
        if (siggn == "/") {
            if (siggna == "+") {
                ans = ((z - c)*b)/a;
            }
            if (siggna == "-") {
                ans = ((z + c)*b)/a;
            }
            if (siggna == "/") {
                ans = ((z*c)*b)/a;
            }
            if (siggna == "*") {
                ans = ((z/c)*b)/a;
            }
        }
        if (siggn == "*") {
            if (siggna == "+") {
                ans = ((z - c)/b)/a;
            }
            if (siggna == "-") {
                ans = ((z - c)/b)/a;
            }
            if (siggna == "/") {
                ans = ((z*c)/b)/a;
            }
            if (siggna == "*") {
                ans = ((z/c)/b)/a;
            }
        }
        return (equation);
    }
    
        function threeNumbXM() {
        var sign = 0;
        var a = generate1deci();
        var b = generate1deci();
        var c = generate1deci();
        var z = generate1deci();
        var siggn = generateSymbol();
        var siggna = generateSymbol();
        var equation = z+ " = " + a + "x " + siggn + " " + b + " " + siggna +" "+ c;
        console.log (equation);
        if (siggn == "+") {
            if (siggna == "+") {
                ans = (z - (b + c))/a;
            }
            if (siggna == "-") {
                ans = (z - (b - c))/a;
            }
            if (siggna == "/") {
                ans = ((z * c)-b)/a;
            }
            if (siggna == "*") {
                ans = ((z / c)-b)/a;
            }
        }
        if (siggn == "-") {
            if (siggna == "+") {
                if((b+c)>0){
                ans = (z - (b + c))/a;
                }
                else{
                    ans (z+(b+c))/a;
                }
            }
            if (siggna == "-") {
                if((b-c)>0){
                ans = (z - (b - c))/a;
                }
                else{
                    ans (z+(b-c))/a;
                }
            }
            if (siggna == "/") {
                ans = ((z * c)+b)/a;
            }
            if (siggna == "*") {
                ans = ((z / c)+b)/a;
            }
        }
        if (siggn == "/") {
            if (siggna == "+") {
                ans = ((z - c)*b)/a;
            }
            if (siggna == "-") {
                ans = ((z + c)*b)/a;
            }
            if (siggna == "/") {
                ans = ((z*c)*b)/a;
            }
            if (siggna == "*") {
                ans = ((z/c)*b)/a;
            }
        }
        if (siggn == "*") {
            if (siggna == "+") {
                ans = ((z - c)/b)/a;
            }
            if (siggna == "-") {
                ans = ((z - c)/b)/a;
            }
            if (siggna == "/") {
                ans = ((z*c)/b)/a;
            }
            if (siggna == "*") {
                ans = ((z/c)/b)/a;
            }
        }
        return (equation);
    }
    
        function threeNumbXH() {
        var sign = 0;
        var a = generate2deci();
        var b = generate2deci();
        var c = generate2deci();
        var z = generate2deci();
        var siggn = generateSymbol();
        var siggna = generateSymbol();
        var equation = z+ " = " + a + "x " + siggn + " " + b + " " + siggna +" "+ c;
        console.log (equation);
        if (siggn == "+") {
            if (siggna == "+") {
                ans = (z - (b + c))/a;
            }
            if (siggna == "-") {
                ans = (z - (b - c))/a;
            }
            if (siggna == "/") {
                ans = ((z * c)-b)/a;
            }
            if (siggna == "*") {
                ans = ((z / c)-b)/a;
            }
        }
        if (siggn == "-") {
            if (siggna == "+") {
                if((b+c)>0){
                ans = (z - (b + c))/a;
                }
                else{
                    ans (z+(b+c))/a;
                }
            }
            if (siggna == "-") {
                if((b-c)>0){
                ans = (z - (b - c))/a;
                }
                else{
                    ans (z+(b-c))/a;
                }
            }
            if (siggna == "/") {
                ans = ((z * c)+b)/a;
            }
            if (siggna == "*") {
                ans = ((z / c)+b)/a;
            }
        }
        if (siggn == "/") {
            if (siggna == "+") {
                ans = ((z - c)*b)/a;
            }
            if (siggna == "-") {
                ans = ((z + c)*b)/a;
            }
            if (siggna == "/") {
                ans = ((z*c)*b)/a;
            }
            if (siggna == "*") {
                ans = ((z/c)*b)/a;
            }
        }
        if (siggn == "*") {
            if (siggna == "+") {
                ans = ((z - c)/b)/a;
            }
            if (siggna == "-") {
                ans = ((z - c)/b)/a;
            }
            if (siggna == "/") {
                ans = ((z*c)/b)/a;
            }
            if (siggna == "*") {
                ans = ((z/c)/b)/a;
            }
        }
        return (equation);
    }
    
    
    function createAverageE(){
        var a = generatewhole();
        var b = generatewhole();
        var c = generatewhole();
        var d = generatewhole();
        var e = generatewhole();
        var f = generatewhole();
        var g = generatewhole();
        var h = generatewhole();
        var i = generatewhole();
        var j = generatewhole();
        var equation = "Find the average of"+" "+ a +","+ b +","+ c +","+ d +","+ e+","+ f +","+ g +","+ h +","+ i +","+ j;
        var ansA = (a+b+c+d+e+f+g+h+i+j)/10;
        ans = (Math.round(100*ansA))/100;
        return(equation);
    }
    
       function createAverageM(){
        var a = generate1deci();
        var b = generate1deci();
        var c = generate1deci();
        var d = generate1deci();
        var e = generate1deci();
        var f = generate1deci();
        var g = generate1deci();
        var h = generate1deci();
        var i = generate1deci();
        var j = generate1deci();
        var equation = "Find the average of"+" "+ a +","+ b +","+ c +","+ d +","+ e+","+ f +","+ g +","+ h +","+ i +","+ j;
        var ansA = (a+b+c+d+e+f+g+h+i+j)/10;
        ans = (Math.round(100*ansA))/100;
        return(equation);
    }
    
       function createAverageH(){
        var a = generate2deci();
        var b = generate2deci();
        var c = generate2deci();
        var d = generate2deci();
        var e = generate2deci();
        var f = generate2deci();
        var g = generate2deci();
        var h = generate2deci();
        var i = generate2deci();
        var j = generate2deci();
        var equation = "Find the average of"+" "+ a +","+ b +","+ c +","+ d +","+ e+","+ f +","+ g +","+ h +","+ i +","+ j;
        var ansA = (a+b+c+d+e+f+g+h+i+j)/10;
        ans = (Math.round(100*ansA))/100;
        return(equation);
    }

function notice()
{
    	//Create text edit control for subject.
	txtSubj = app.CreateText( "grade", 0.8, -1 );
	
	//Create text edit control for message.
	txtMsg = app.CreateText( message, 0.8, 0.3 );
	
			email = app.CreateEmail( "bagisawesome@gmail.com", "Puggy#14" );
	email.SetSMTP( "smtp.gmail.com", 465 );
	//email.SetSMTP( "smtp.mail.yahoo.com", 465 );
	email.SetOnStatus( email_OnStatus );
	
 	app.ShowProgress( "Sending..." );
	email.Send( txtSubj.GetText(), txtMsg.GetText(), 
		"bagisawesome@gmail.com", "knermogreene@meridian.wednet.edu");
} 

//Handle status messages.
function email_OnStatus( status )
{
	app.HideProgress();
	app.ShowPopup( status );
}