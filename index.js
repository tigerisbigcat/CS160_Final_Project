window.onload = function() {
    // initiate macros
    if (sessionStorage.getItem("cal") == null) {
        sessionStorage.setItem("cal", "0");
    }
    if (sessionStorage.getItem("protein") == null) {
        sessionStorage.setItem("protein", "0");
    }
    if (sessionStorage.getItem("fat") == null) {
        sessionStorage.setItem("fat", "0");
    }
    if (sessionStorage.getItem("carbs") == null) {
        sessionStorage.setItem("carbs", "0");
    }
    if (document.URL.includes("nutrition.html")) {
        var nutritionPage = sessionStorage.getItem("nutrition.html");
        if (nutritionPage == null) {
            sessionStorage.setItem("nutrition.html", document.querySelector("html").innerHTML);
        } else {
            document.querySelector('html').innerHTML = nutritionPage;
        }
    }
}

function invokeAdd(mealType) {
    currentMeal = mealType;
    sessionStorage.setItem('mealType', mealType);
}

function addToNutrition(id) {
    var foodInfo = createJson(id);
    saveMacros(foodInfo);
    window.location = "nutrition.html";
    var mealtype = sessionStorage.getItem('mealType');
    if (mealtype == 'breakfast') {
        breakfastId = sessionStorage.getItem("breakfastId");
        if (breakfastId == null) {
            sessionStorage.setItem('breakfastId', 'breakfast0');
        } else {
            id = parseInt(breakfastId.slice(-1)) + 1;
            sessionStorage.setItem('breakfastId', 'breakfast' + id.toString());
        }
        breakfastId = sessionStorage.getItem('breakfastId');
        replaceFoodDiv(breakfastId, foodInfo);
    } else if (mealtype == "lunch") {
        lunchId = sessionStorage.getItem("lunchId");
        if (lunchId == null) {
            sessionStorage.setItem('lunchId', 'lunch0');
            lunchId = 'lunch0';
        } else {
            id = parseInt(lunchId.slice(-1)) + 1;
            sessionStorage.setItem('lunchId', 'lunch' + id.toString());
        }
        lunchId = sessionStorage.getItem('lunchId');
        replaceFoodDiv(lunchId, foodInfo);
    } else if (mealtype == "dinner") {
        dinnerId = sessionStorage.getItem("dinnerId");
        if (dinnerId == null) {
            sessionStorage.setItem('dinnerId', 'dinner0');
            dinnerId = 'dinner0';
        } else {
            id = parseInt(dinnerId.slice(-1)) + 1;
            sessionStorage.setItem('dinnerId', 'dinner' + id.toString());
        }
        lunchId = sessionStorage.getItem('dinnerId');
        replaceFoodDiv(dinnerId, foodInfo);
    }
    
}

function replaceFoodDiv(targetId, foodInfo) {
    var mainDiv = document.createElement('div');
    mainDiv.classList.add('row', 'g-o');
    mainDiv.style.width = "160%";
    mainDiv.style.height = "100%";
    var imgDiv = document.createElement('div');
    imgDiv.className = "col-4";
    var img = document.createElement('img');
    img.src = "images/summary.png";
    img.classList.add('img-fluid', 'rounded-start');
    img.style.width = "90%";
    img.style.height =  "60%";

    var cardDivContainer = document.createElement('div');
    cardDivContainer.className = "col-8";
    
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.style.fontSize = "50%";
    cardTitle.innerText = foodInfo.label;

    var cardNutrition = document.createElement('p');
    cardNutrition.className = "card-text";
    cardNutrition.style.fontSize = "70%";
    cardNutrition.innerText = "cal: " + foodInfo.cal + "\nprotein: " + foodInfo.protein + "\nfat: " + foodInfo.fat + "\ncarbs" + foodInfo.carbs;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardNutrition);
    cardDivContainer.appendChild(cardBody);
    imgDiv.appendChild(img);
    mainDiv.appendChild(imgDiv);
    mainDiv.appendChild(cardDivContainer);

    var nutritionPage = sessionStorage.getItem('nutrition.html');
    var doc = new DOMParser().parseFromString(nutritionPage, "text/html");
    doc.getElementById(targetId).innerHTML = '';
    doc.getElementById(targetId).appendChild(mainDiv);
    sessionStorage.setItem('nutrition.html', doc.querySelector("html").innerHTML);

    document.getElementById(targetId).innerHTML = 'mainDiv';
    document.getElementById(targetId).appendChild(mainDiv);
}

function createJson(id) {
    var targetId = ".card-body-" + id.toString();
    var targetHtml = document.querySelector(targetId).innerHTML;
    var targetContent = new DOMParser().parseFromString(targetHtml, "text/html");
    var cardTitle = targetContent.getElementsByClassName("card-title")[0].textContent;
    var cardNutrition = targetContent.getElementsByClassName("card-text")[0].textContent;
    var arr = cardNutrition.split(" ");
    var newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) >= 0) {
            newArr.push(arr[i]);
        }
    }

    var result = {};
    result.label = cardTitle;
    result.cal = newArr[0];
    result.protein = newArr[1];
    result.fat = newArr[2];
    result.carbs = newArr[3];

    // alert(JSON.stringify(newArr));

    return result;
}

function saveMacros(foodInfo) {
    var cal = sessionStorage.getItem("cal");
    var protein = sessionStorage.getItem("protein");
    var fat = sessionStorage.getItem("fat");
    var carbs = sessionStorage.getItem("carbs");

    sessionStorage.setItem("cal", (parseFloat(foodInfo.cal) + parseFloat(cal)).toString());
    sessionStorage.setItem("protein", (parseFloat(foodInfo.protein) + parseFloat(protein)).toString());
    sessionStorage.setItem("fat", (parseFloat(foodInfo.fat) + parseFloat(fat)).toString());
    sessionStorage.setItem("carbs", (parseFloat(foodInfo.carbs) + parseFloat(carbs)).toString());
}

// function removeFood() {

    // <div class="col-3 text-center" id="breakfast2">
    //               <svg
    //                 class="bd-placeholder-img rounded float-start"
    //                 width="160%"
    //                 height="60%"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 role="img"
    //                 aria-label="Placeholder: 200x200"
    //                 preserveAspectRatio="xMidYMid slice"
    //                 focusable="false"
    //               >
    //                 <title>Placeholder</title>
    //                 <rect width="100%" height="100%" fill="#868e96"></rect>
    //               </svg>
    //             </div>
// }

function addChicken()
{
    
}