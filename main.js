
function cardGenerate() {

    const collegeNameValue = document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 
 
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    
    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML = locationValue;


       // const collegeCardPhoto = doccardPhotoument.getElementById("preview").value;
       // document.getElementById("cardPhoto").innerHTML = collegeCardPhoto;
     
    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";
}
