window.addEventListener('load', requestInfo);

function requestInfo() {

    var url ="http://www.filltext.com/?rows=10&first_name={firstName}&last_name={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true";
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = loadInfo;
    httpRequest.open('GET', url);
    httpRequest.send();

    function loadInfo() {
       
             
              
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) 
            {
                

                var data = JSON.parse(httpRequest.responseText);
                console.log(JSON.parse(httpRequest.responseText));
                

                for (var i=0;i<data.length;i++){
               
                    var card=document.createElement('div');
                    card.id='bcbg';
                    var container=document.createElement("div");
                    container.className="container";
                    card.appendChild(container);
                    var line=document.createElement("p");
                    line.className="line1";
                    container.appendChild(line);
                    var firstName=document.createElement("span");
                    firstName.id="first_name";
                    firstName.innerHTML=data[i].first_name+" ";
                    line.appendChild(firstName);
                    var lastName=document.createElement("span");
                    lastName.id="last_name";
                    lastName.innerHTML=data[i].last_name;
                    line.appendChild(lastName);
                    document.body.appendChild(card);
                    var contact=document.createElement("div");
                    contact.className="contact";
                    container.appendChild(contact);
                    var category=document.createElement("div");
                    category.id="category";
                    category.innerHTML=data[i].category;
                    card.className=data[i].category;
                    contact.appendChild(category);
                    var logo=document.createElement("div");
                    logo.id="logo"

                    logo.className="logo";
                    logo.innerHTML="<br>"+data[i].first_name.charAt(0)+data[i].last_name.charAt(0);
                    
                    container.appendChild(logo);

                    

                }
            }

        }
        
    }

}
filterSelection("all")

function filterSelection(c) {
  var x, i;
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
  console.log(this.innerText);
      x = document.getElementsByClassName(this.innerText);
      let cat1 = document.getElementsByClassName('category1')
      let cat2 = document.getElementsByClassName('category2')
      let cat3 = document.getElementsByClassName('category3')

     if (this.innerText=="category1"){
        for(var i = 0; i < cat1.length; i++){
            cat1[i].style.visibility = ""; // or
            cat1[i].style.display = "block"; // depending on what you're doing
        }    
        for(var i = 0; i < cat2.length; i++){
            cat2[i].style.visibility = "hidden"; // or
            cat2[i].style.display = "none"; // depending on what you're doing
        }        
        
        for(var i = 0; i < cat3.length; i++){
            cat3[i].style.visibility = "hidden"; // or
            cat3[i].style.display = "none"; // depending on what you're doing
        }



      }
      else if (this.innerText=="category2"){
        
        for(var i = 0; i < cat2.length; i++){
            cat2[i].style.visibility = ""; // or
            cat2[i].style.display = "block"; // depending on what you're doing
        }    
        for(var i = 0; i < cat1.length; i++){
            cat1[i].style.visibility = "hidden"; // or
            cat1[i].style.display = "none"; // depending on what you're doing
        }
        for(var i = 0; i < cat3.length; i++){
            cat3[i].style.visibility = "hidden"; // or
            cat3[i].style.display = "none"; // depending on what you're doing
        }




      }

      else if (this.innerText=="category3"){
       
        for(var i = 0; i < cat3.length; i++){
            cat3[i].style.visibility = ""; // or
            cat3[i].style.display = "block"; // depending on what you're doing
        }    
       
        for(var i = 0; i < cat1.length; i++){
            cat1[i].style.visibility = "hidden"; // or
            cat1[i].style.display = "none"; // depending on what you're doing
        }     
        
           for(var i = 0; i < cat2.length; i++){
            cat2[i].style.visibility = "hidden"; // or
            cat2[i].style.display = "none"; // depending on what you're doing
        }        




      }

      else if (this.innerText =="Show all") {
        for(var i = 0; i < cat1.length; i++){
            cat1[i].style.visibility = ""; // or
            cat1[i].style.display = "blcok"; // depending on what you're doing
        } for(var i = 0; i < cat2.length; i++){
            cat2[i].style.visibility = ""; // or
            cat2[i].style.display = "block"; // depending on what you're doing
        for(var i = 0; i < cat3.length; i++){
            cat3[i].style.visibility = ""; // or
            cat3[i].style.display = "block"; // depending on what you're doing
        }        
    }


        
      }

    });} 


}




// Add active class to the current button (highlight it)

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
  
    
    this.className += " active";

  });}