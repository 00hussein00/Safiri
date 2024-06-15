var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Log in","Sign in","Safiri",'Others']
    },
    log: {
        title:["Please select category"],
        options:['Login method','Forgot your password'],
        url : {}
    },
    
    sign: {
        title:["Please select category"],
        options:["How to create an account."],
        url : {}
    },
    safiri: {
        title:["Thanks for your response","Welcome to Safiri zone.","Please select one of the below options to proceed further"],
        options:['About Us','Privecy Policy','Sections','Contuct Us','Help Page'],
        // options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
}
    },
    about: {
        title:["Thanks for your response","There is a page called About Us. This page talks about the heads of the Safiri application. To learn more about them, please go to that page and read what it contains and this page carefully."]
    },
    privecy: {
        title:["Thanks for your response","Privecy  Policy This page talks about the privacy and security that we will get when you register in this application. You must read it before registering in the application and know what are the features and what characteristics this application will guarantee and what information we will obtain and do not worry."]
    },
    sections: {
        title:["Thanks for your response","Click on it to know more"],
        options:['For Job','Service Request','Buy House'],
        url : {}
    },
    contuct: {
        title:["Thanks for your response","Contact Us This page is located on the main page of Safiri. Through this page, you can talk to us by writing your information and your email. In this case, we can communicate with each other via email to help you solve any problem you want."]
    },
    help: {
        title:["Thanks for your response","When you go to the Help page on Safiri, there are many questions to meet your needs. If you want to search for a question of your own, please go to that page."]
    },
    login: {
        title: ["Thanks for your response","1) Please fill out the information correctly."," 2) After completing filling out the information, click Log In."," 3) After that, you will be transferred to the Safiri home page."]
    },
    how: {
        title: ["Thanks for your response","1) Please fill out the information correctly."," 2) After completing filling out the information, click Sign In."," 3) After that, you will be transferred to the Safiri home page."]
    },
    forgot: {
        title: ["Thanks for your response","1) Please click on Forgot your password?","2) After that, you must add your phone number or email","3) Then a message will be sent to reset the password","4) Then we will change the password by setting a new password"]
    },
    for: {
        title: ["Thanks for your response"],
        options:['Department information','Submmit a Requist','Add an advertisement'],
        url : {}
    },
    service: {
        title: ["Thanks for your response"],
        options:['Department2 information','Submmit a Requist','Add an advertisement'],
        url : {}
    },
    buy: {
        title: ["Thanks for your response"],
        options:['Department3 information','Submmit a Requist','Add an advertisement'],
        url : {}
    },
    department: {
        title: ["Thanks for your response","In this section, people will apply for a staff position and other people will apply for this position. If you want or are looking for a job or want to request employees, please go to that list and fill out your details correctly to get a job as quickly as possible."]
    },
    department2: {
        title: ["Thanks for your response","In this section, some people will request a service from another person. In this case, your post will be published in the Service Request posts list, then another person will see it and provide this service to you completely in exchange for giving a sum of money to the person who will provide this to you. Service wherever you are, anywhere, and at any time. You can request service from people"]
    },
    departmen3: {
        title: ["Thanks for your response","In this section, you will search for or present your own house or apartment for display to people, and people will contact you to buy or rent this apartment or house at any time, in any country, or wherever this person is located."]
    },
    submmit: {
        title: ["Thanks for your response","1)Please go to his post.","2)Then click on the Submit Request button.","3)After that, you fill in your information correctly.","4)Then press the SAIF button.","In this case, your information will be sent to the person responsible for the post."]
    },
    add: {
        title: ["Thanks for your response","1)First, you must log in to your Safiri account.","2)After that, you go to the “Add an advertisement or post” button on the Safiri page.","3)After that, a list will appear for you. In this list, you will choose the section in which you want to publish your post.","4)After that, a page will appear to you where you will fill in the information for this post.","5) After that, you will click on the Save button.","In this case, your post will be moved to the posts page in which this section you chose is available."]
    },
    others: {
        title: ["Please Contact us on our Email. \n \"safiriservice@gmail.com.\" "],
        // url: {"safiriservice@gmail.com"},
    },
}




document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test-boot').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        document.getElementById('test-boot').style.display='none';
        document.getElementById('init').innerText='START CHAT';        
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test-boot");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    // var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}