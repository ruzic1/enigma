
/*Calling default functions for pages */
defaultLinks();
defaultPartsOfPages();


var pagepath=window.location.pathname+window.location.search;
if(pagepath=='/enigma/index.html'||pagepath=='/enigma/'){
    indexPage();
    //sliderFunct();
}
if(pagepath=='/enigma/loginPage.html'){
    loginPage();
}
if(pagepath=='/enigma/productsPage.html'){
    console.log("ulazak u product page");
    productsPage();
}
console.log(pagepath);

function defaultPartsOfPages(){
     $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
     });
}

function defaultLinks(){
console.log("Entering links");
const linkRoutes=[
    "index.html",
    "productsPage.html",
    "aboutusPage.html",
    "loginPage.html"
];
const linkNames=[
    "Home",
    "Products",
    "About Us",
    "Login"
];
for(var i=0;i<linkRoutes.length;i++)
{
    const headerList=document.querySelector('.NavBarList');
    var headerLiTag=document.createElement("li");
    headerLiTag.setAttribute("class","nav-item ABC");
    var headerLinkTag=document.createElement("a");
    headerLinkTag.style="text-decoration:none";
    headerLinkTag.style="color:black";
    if(i==0)
    {
        headerLinkTag.setAttribute("href","nav-link active");
    }
    headerLinkTag.setAttribute("href",linkRoutes[i]);
    var headerLinkName=document.createTextNode(linkNames[i]);

    headerLinkTag.append(headerLinkName);

    headerLiTag.append(headerLinkTag);
    console.log(headerLiTag);
    headerList.append(headerLiTag);

}

}

/* ---- MAIN, DINAMICKO ISPISIVANJE SLIKA ---- */
const slideImages=[
    "stalker.jpg",
    "uncharted.jpg",
    "scorn.jpg"
];
const sliderImagesAlt=[
    "Stalker 2 Heart of Chernobyl image",
    "Uncharted Lost Legacy image",
    "Scorn image"
];




let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  //identifierSlider++;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  //console.log(document.querySelectorAll("textBlockSlider"))
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    //textInformationSlider[i].classList.remove("active");
    //textInformationSlider[i].style.display="none";
    //textInformationSlider[i].classList.remove("active");
    //textInformationSlider[i].className=textInformationSlider[i].className.replace("active ","")
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    //textInformationSlider[i].className = textInformationSlider[i].className.replace(" active", "");
    //textInformationSlider[i].classList.add("active");
    //textInformationSlider[i].className=textInformationSlider[i].className.replace("active ","")
}
//iskoriscen je naredni if uslov kako bi se izvrsio append child elemenata roditeljskim elementima, i samim tim onemogucilo stvaranje viskova
    /*if(identifierSlider<=slides.length)
    {
        identifierHeading++;
        textHeaderTagSlider.append(textTitleSlider[identifierHeading-1]);
    }*/
    //console.log(textHeaderTagSlider)
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  //textInformationSlider[slideIndex-1].className+=" active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
  //console.log("duzina naslova"+textBlockSliderHeader.length)
}

/*let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log("duzina slajda: "+slides.length);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }


    console.log("indeks slajda: "+slideIndex);

    slides[slideIndex-1].style.display = "block";
}*/

function indexPage(){
    console.log(1);
const imgRoutes=[
    "residentevil4new.jpg",
    "eldenring.jpg",
    "godofwarragn.jpg",
    "cyberpunk.jpg",
    "cod2.jpg",
    "rz.png",
    "fifa23.jpg",
    "rdr2slider.jpg"
];
/*const imgRoutes1=[
    "cod2.jpg",
    "rz.png",
    "fifa23.jpg",
    "rdr2slider.jpg",
]*/
const imgAltCollection=[
    "Resident-evil-4-remake",
    "Elden-ring",
    "God of war ragnarok",
    "Call of duty - Modern warfare 2",
    "Resident evil 8",
    "Fifa 23",
];
const additionalText=[
    "Resident Evil 4 is a remake of the 2005 original Resident Evil 4.Reimagined for 2023 to bring state-of-the-art survival horror.Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay, a reimagined storyline,and vividly detailed graphics to make this the latest survival horror game where life and death, terror and catharsis intersect.",
    "ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly.Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.",
    "Together father and son must face the impending Ragnarok - the legendary Norse version of an apocalypse - facing the enemies they made in God of War like Freya, new ones like Thor, and more as Kratos wrestles with his son's rebellious streak and his knowledge of who Atreus really is. The story will take place across the Nine Realms - you only saw six in God of War - adding Vanaheim, Svartalfheim, and Asgard to the mix.",
    "Cyberpunk is a sub-genre of science fiction that features advanced science and technology in an urban, dystopian future.  On one side you have powerful mega-corporations and private security forces, and on the other you have the dark and gritty underworld of illegal trade, gangs, drugs, and vice.  In between all of this is politics, corruption, and social upheaval.",
    "Call of Duty: Modern Warfare II is a first-person shooter video game developed by Infinity Ward for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S and Microsoft Windows. It is the nineteenth game in the Call of Duty franchise, and the sequel to Call of Duty: Modern Warfare. Its logo was revealed on April 28th, 2022 the game was released on October 28th, 2022.",
    "Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
    "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, men’s and women’s FIFA World Cup™ coming during the season, women’s club teams, cross-play features, and more",
    "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online"
];
/*const additionalText1=[
    "Call of Duty: Modern Warfare II is a first-person shooter video game developed by Infinity Ward for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S and Microsoft Windows. It is the nineteenth game in the Call of Duty franchise, and the sequel to Call of Duty: Modern Warfare. Its logo was revealed on April 28th, 2022 the game was released on October 28th, 2022.",
    "The next generation of survival horror rises in the form of Resident Evil Village,the eighth major entry in the Resident Evil series. With ultra-realistic graphics powered by the RE Engine,fight for survival as danger lurks around every corner.Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard,the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location,free from their past nightmares.Just as they are building their new life together,tragedy befalls them once again.When BSAA captain Chris Redfield attacks their home,Ethan must once again head into hell to get his kidnapped daughter back.",
    "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, men’s and women’s FIFA World Cup™ coming during the season, women’s club teams, cross-play features, and more",
    "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is a sprawling tale of life in America at the dawn of the modern age."
    "The next generation of survival horror rises in the form of Resident Evil Village,the eighth major entry in the Resident Evil series. With ultra-realistic graphics powered by the RE Engine,fight for survival as danger lurks around every corner.Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard,the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location,free from their past nightmares.Just as they are building their new life together,tragedy befalls them once again.When BSAA captain Chris Redfield attacks their home,Ethan must once again head into hell to get his kidnapped daughter back.",
];*/
const additionalTextTitles_leftColumn=[
    "Resident Evil 4 Remake",
    "Elden Ring",
    "God Of War Ragnarok",
    "Cyberpunk 2077",
    "Call Of Duty: Modern Warfare 2",
    "Resident Evil 8 Village",
    "Fifa 23",
    "Red Dead Redemption 2"
];

console.log(additionalText);

var infoCardsContainer=document.getElementById("infoContainer");
var infoCardsContainerSection="<section class='container md'>";
var counter=0;
var c=0;
for(var i=0;i<Math.ceil(imgRoutes.length / 2);i++)
{
    
    var infoCardsRow=`<article class='row ml-0 mr-0'>`;
        console.log("vrednost identifikatora:"+i);
        for(var j=0;j<Math.floor(imgRoutes.length / 3);j++)
        {
        if(j==0||j%2==0)
        {
        infoCardsRow+=`<div data-aos="fade-left" class="aosPadding col-6">
        <div class="card" style="border:6px solid #CC9901;background-color:#000000;color:white">
            <img class="card-img-top" style="width:"50%;" src="images/slider/${imgRoutes[counter]}" alt="${imgAltCollection[counter]}">
            <div class="card-body cardHeightSetting" style="text-align:center">
                <h5 class="card-title">${additionalTextTitles_leftColumn[counter]}</h5>
                <p class="card-text">${additionalText[counter]}</p>
                <a href="/enigma/productsPage.html" class="btn btn-primary">View more</a>
            </div></div></div>`;
        }
        if(j!=0&&j%2==1)
        {
            infoCardsRow+=`<div data-aos="fade-right" class="aosPadding col-6">
            <div class="card" style="border:6px solid #CC9901;background-color:#000000;color:white">
            <img class="card-img-top" style="width:"50%;" src="images/slider/${imgRoutes[counter]}" alt="${imgAltCollection[counter]}">
            <div class="card-body cardHeightSetting" style="text-align:center">
                <h5 class="card-title">${additionalTextTitles_leftColumn[counter]}</h5>
                <p class="card-text">${additionalText[counter]}</p>
                <a href="/enigma/productsPage.html" class="btn btn-primary">View more</a>
            </div></div></div>`;
        
        }
            /*if(j!=0&&j%2==1)
            {
                col-6 m6 l6 aosPadding
                infoCardsRow+=`<div data-aos="zoom-in-right" class="col s12 m6 l6 aosPadding">
        <div class="card">
            <img class="card-img-top" style="width:"50%;" src="../javaskript/images/slider/${imgRoutes[counter]}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${additionalTextTitles_leftColumn[counter]}</h5>
                <p class="card-text">${additionalText[counter]}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div></div></div>`;
            }*/
            counter++;
        }
        infoCardsRow+=`</article>`;
        infoCardsContainerSection+=infoCardsRow;
        //counter++;
    infoCardsRow+=`</article>`;
    console.log(i);
}
infoCardsContainerSection+="</section>";
infoCardsContainer.innerHTML=infoCardsContainerSection;


const dugmici=document.getElementsByClassName("toggleButtonMore");
const detailed=document.getElementsByClassName("cardPadding");
console.log("Broj prosirujucih sektora:"+detailed.length);
var i;

/*$(document).ready(function(){
    $(".toggleButtonMore").click(function(){
        console.log(123);
        $(this).parent(".cardPadding").siblings(".content").slideToggle(320);
    })
});*/

}


//----------PRODUCTS PAGE----------
function productsPage()
{
    const productsNames=[
        /*"",*/
        "Call of Duty : Modern Warfare 2(2022)",
        "Demon Souls(2020)",
        "Elden Ring(2022)",
        "Borderlands 3(2019)",
        "Scorn(2022)",
        "Resident Evil 8:Village(2022)",
        "Outlast 2",
        "Resident Evil 4 Remake",
        "Far Cry 6",
        "Cyberpunk",
        "Red dead redemption 2",
        "Uncharted:Legacy of thieves collection",
        "Fifa 23",
        "God of War:Ragnarok",
        "Plague Tale:Requiem"
    ];
    const productsImages=[
        "codps5.jpg",
        "dsoulsps5.jpg",
        "eldenringPC.jpg",
        "borderlands3PC.jpg",
        "scornPC.png",
        "res8PC.jpg",
        "outlast2PC.jpg",
        "residentevil4PS5.jpg",
        "farcry6XBOX.jpg",
        "cyberpunkXBOX.jpg",
        "rdr2XBOX.jpeg",
        "unchartedPS5.jpg",
        "fifa23PC.jpg",
        "godofwarPS5.jpg",
        "plaguetalePC.jpg",
    ];
    const productsPrices=[
        65.00,
        45.00,
        57.00,
        38.00,
        60.00,
        50.00,
        35.00,
        67.00,
        62.00,
        55.00,
        58.00,
        68.00,
        55.00,
        70.00,
        62.00,
    ];
    const productAltTitles=[
        "Call of Duty:Modern warfare 2 ps5 image",
        "Demon souls ps5 image",
        "Elden Ring PC image",
        "Borderlands 3 PC image",
        "Scorn PC image",
        "Resident evil 8 PC image",
        "Far cry 6 XBOX image",
        "Cyberpunk image",
        "Red dead redemption 2 XBOX image",
        "Uncharted : Legacy of thieves PS5 image",
        "Fifa 23 PC image",
        "God of War PS5 image",
        "Plague Tale : Requiem image"
    ];
    $("#cartAlign").click(function(){
        $("#cartSummary").slideToggle("slow",function(){
            $("#bab").text("novi tekst")
        })
    })
    var productsContainer=document.querySelector(".productsContainer");
    var productrow="<div class='row mr-0 pr-0 ml-0 pl-0' id='rowForSortingProducts'>";
    var productcard="";
    for(let i=0;i<productsImages.length;i++)
    {
        productcard+=`<div class='group-1;col-sm-12 col-lg-4' style="overflow:hidden;margin-bottom:15px;"><div class='card h-100 mb-4 box-shadow cardPaddingForResponsive' style="border:6px solid #CC9901;background-color:#000000;color:white">
            <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="${productAltTitles[i]}" style="height:280px;width: 100%; display: block;" src="images/slider/${productsImages[i]}" data-holder-rendered="true">
            <div class="card-body large">
                <h4 class="card-text" style="padding:10px;text-align:center;line-height:normal">${productsNames[i]}</h4>
                <h5 style="line-height:normal;text-align:center">${parseFloat(productsPrices[i]).toFixed(2)} $</h5>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group" style="display:flex;justify-content:center;position:absolute;bottom:15px;">
                    <button type="button" class="btn btn-sm btn-outline-secondary buttonCart">Add to cart</button>
                    
                  </div>
                </div>
              </div>
        </div></div>`;
    }

    productrow+=productcard;
    productrow+="</div>";
    productsContainer.innerHTML=productrow;
    var row="";
    /*var cartButtonCollection=document.getElementsByClassName("buttonCart");
    console.log(cartButtonCollection);*/
    /*cartButtonCollection.addEventListener("click",function(element){
        
    })*/
    var finalBill=0;
    //var finalPurchase=[];
    var checkout=document.getElementById("checkoutHeading");
    //checkout.setAttribute("data-target","#modalCart");
    var cartSummary=document.getElementById("cartSummaryContainer")
    let container=[...document.getElementsByClassName("buttonCart")];
    var namesABC=[];
    var pricesABC=[];
    var imagesABC=[];
    container.forEach((item,index)=>{
        item.addEventListener("click",()=>{
            //console.log(index);
            addToCartSection(index);
            namesABC.push(productsNames[index]);
            pricesABC.push(productsPrices[index]);
            imagesABC.push(productsImages[index]);
        })
    })

    var finalPurchase;
    var productsName=[];
    function addToCartSection(index)
    {
        console.log(namesABC);
        console.log(pricesABC);
        finalPurchase={name:`${productsNames[index]}`,price:`${productsNames[index]}`};
        productsName.push(finalPurchase);
        var modal = document.getElementById("myModal");
        //var modalId=document.getElementById("modalCart");
        row+="<div class='row col-lg-12 ml-0 pl-0 mr-0 pr-0'>";
        var itemInRow=`<div class='item'>
        <div id='imgContainerFlex'>
            <img src="images/slider/${productsImages[index]}"/>
        </div>    
        <div id='priceInfoFlex' style='width:100%'>
        <h5>${productsNames[index]}</h5>
            
            <p>${parseFloat(productsPrices[index]).toFixed(2)}$</p>
            <p style='color:#7C0A01'>Total:${finalBill+=productsPrices[index]}.00$</p>
            </div></div>`;
        
            if(row!="")
            {
            
                checkout.style.display="block";
                console.log(123);
            }

        console.log(finalPurchase);
        var isValid;

        var productSummaryCheckout=document.getElementById("bodyProductSummary");
        checkout.addEventListener("click",function(){
            modal.style.display="block";
            var rowTable="";
            
            for(var i=0,j=1;i<namesABC.length;i++)
            {
                rowTable+="<tr>"
                var rowTableInfo="";

                    rowTableInfo+=`<th scope="row">${j++}</th>
                    <td><img src="images/slider/${imagesABC[i]}"/></td>
                    <td>${namesABC[i]}</td>
                    <td>${pricesABC[i]}$</td>`

                if(i==(namesABC.length-1))
                {
                    rowTableInfo+=`<tfoot><p style='text-align:center'>Your total:${finalBill}.00$</p></tfoot>`;
                    rowTableInfo+=`<button style="display:flex" id='proceedToCheckout'>Proceed to checkout!</button>`
                }
                rowTable+=rowTableInfo;
                rowTable+="</tr>";
                productSummaryCheckout.innerHTML=rowTable;
            }
            var report=document.getElementById("myModal1");
            var proceed=document.getElementById("proceedToCheckout");
            proceed.addEventListener("click",function(){

                modal.style.display="none";
                report.style.display="block";
                var span = document.getElementsByClassName("close")[0];

                span.onclick = function() { 
                    report.style.display = "none";
                  }
            })
        })
        window.onclick=function(event){
            if(event.target==modal){
                modal.style.display="none";
            }
        }

        row+=itemInRow;
        row+="</div>"
        row.innerHTML=itemInRow;
        cartSummary.innerHTML=row;

    }
    
}



//-------FORM VALIDATION--------

function loginPage(){
    var objFirstLastName=document.getElementById("inputFullName");
    var objEmail=document.getElementById("inputEmail");
    var objPassword=document.getElementById("inputPassword");
    var objTextArea=document.getElementById("inputTextArea");
    var regexFirstLastName=/^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;
    objFirstLastName.addEventListener("blur",testFirstLastName);
    var success;
    function testFirstLastName()
    {
        console.log("testiranje imena i prezimena");
        var test=regexFirstLastName.test(objFirstLastName.value);
        var errFullName=document.getElementById("errorMessageFullName");
        errFullName.style.textAlign="center";
        console.log(errFullName);
        if(test){
            objFirstLastName.classList.add("formSuccessBorder");
            objFirstLastName.classList.remove("formErrorBorder");
            errFullName.innerHTML="Full name is valid!";
            errFullName.style.color="green";
        }
        else{
            success=false;
            objFirstLastName.classList.add("formErrorBorder");
            objFirstLastName.classList.remove("formSuccessBorder");
            errFullName.innerHTML="Full name is not valid! Try changing first letters of first and last name to capital. Also make sure that there are no special characters or numbers in input";
            errFullName.style.color="red";
        }
    }
    var regexEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    objEmail.addEventListener("blur",testEmail);

    function testEmail(){
        var test=regexEmail.test(objEmail.value);
        var errEmail=document.getElementById("errMesEmail");
        errEmail.style.textAlign="center";
        if(test){
            objEmail.classList.add("formSuccessBorder");
            objEmail.classList.remove("formErrorBorder");
            errEmail.innerHTML="Email is valid!";
            errEmail.style.color="green";
        }
        else{
            success=false;
            objEmail.classList.add("formErrorBorder");
            objEmail.classList.remove("formSuccessBorder");
            errEmail.innerHTML="Email is incorrect. Make sure that your input has symbol '@' and specified domen like .com";
            errEmail.style.color="red";
        }
    }

    objPassword.addEventListener("blur",testPassword);
    var regexPassword=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    function testPassword(){
        var test=regexPassword.test(objPassword.value);
        var errPassword=document.getElementById("errMesPassword");
        errPassword.style.textAlign="center";
        if(test){
            objPassword.classList.add("formSuccessBorder");
            objPassword.classList.remove("formErrorBorder");
            errPassword.innerHTML="Password is valid!";
            errPassword.style.color="green";
        }
        else{
            success=false;
            objPassword.classList.add("formErrorBorder");
            objPassword.classList.remove("formSuccessBorder");
            errPassword.innerHTML="Password is incorrect. Make sure that your password has between 6 and 16 characters, while atleast one of those characters should be special symbol(!,.,/) or number";
            errPassword.style.color="red";
        }
    }
    objTextArea.addEventListener("blur",testTextArea);

    function testTextArea(){

        var errTest=document.getElementById("errMesTextArea");
        errTest.style.textAlign="center";
        if(objTextArea.value==null||objTextArea.value.length<10)
        {
            objTextArea.classList.add("formErrorBorder");
            errTest.style.color="red";
            errTest.innerHTML="This field must be filled "
            console.log(objTextArea.value.length);
        }
        else if(objTextArea.value.length>400)
        {
            objTextArea.classList.add("formErrorBorder");
            errTest.innerHTML="This field must have less than 400 characters"
            errTest.style.color="red";
            console.log(objTextArea.value.length);
        }
        else{
            success=true;
            objTextArea.classList.add("formSuccessBorder");
            objTextArea.classList.remove("formErrorBorder");
            errTest.innerHTML="Your question is valid!";
            errTest.style.color="green";
        }
    }


    var btnSubmitResult=document.getElementById("btnSubmit");

    btnSubmitResult.addEventListener("click",function(){
        success=true;
        testFirstLastName(),
        testEmail(),
        testPassword();
        testTextArea();
        var formReport=document.getElementById("myModal1");
        if(success){
            //console.log(objFirstLastName.value);
            //alert(`Thank you ${objFirstLastName.value} for contacting us. We will try to send feedback to your email ${objEmail.value} as soon as possible!`);
            
            var paragraphForm=document.getElementById("paragraphFromJavascript");
         
            paragraphForm.innerHTML=`Thank you ${objFirstLastName.value} for contacting us. We will try to send feedback to your email ${objEmail.value} as soon as possible!`;
            
            formReport.style.display="block";
            
            //formReport.innerHTML=formReportContent
            objFirstLastName.value="";
            objEmail.value="";
            objPassword.value="";
            objTextArea.value="";
            errFullName="";
            errEmail="",
            errPassword="",
            errTest="",
            objEmail.classList.remove("formSuccessBorder");
            objFirstLastName.classList.remove("formSuccessBorder");
            objPassword.classList.remove("formSuccessBorder");
            objTextArea.classList.remove("formSuccessBorder");
        }
        else{
            var paragraphFormErr=document.getElementById("paragraphFromJavascriptError")
            paragraphFormErr.innerHTML=`There are some errors in your input. Please correct errors to proceed with sending`;
            formReport.style.display="block";
        }
        var span = document.getElementsByClassName("close")[0];

                span.onclick = function() { 
                    formReport.style.display = "none";
                  }
    })
}


