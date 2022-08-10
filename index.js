function invokeAdd(mealType) {
    currentMeal = mealType;
    localStorage.setItem('mealType', mealType);
}

function addToNutrition() {
    location.href = "nutrition.html";
    var mealtype = localStorage.getItem('mealType');
    if (mealtype == 'breakfast') {
        breakfastId = localStorage.getItem("breakfastId");
        if (breakfastId == null) {
            localStorage.setItem('breakfastId', 'breakfast0');
        } else {
            id = parseInt(breakfastId.slice(-1)) + 1;
            localStorage.setItem('breakfastId', 'breakfast' + id.toString());
            alert(localStorage.getItem("breakfastId"));
        }
        replaceFoodDiv(breakfastId);
    } else if (mealtype == "lunch") {
        lunchId = localStorage.getItem("lunchId");
        if (lunchId == null) {
            localStorage.setItem('lunchId', 'lunch0');
        } else {
            id = parseInt(lunchId.slice(-1)) + 1;
            localStorage.setItem('lunchId', 'lunch' + id.toString());
            alert(localStorage.getItem("lunchId"));
        }
        replaceFoodDiv(lunchId);
    } else if (mealtype == "dinner") {
        dinnerId = localStorage.getItem("dinnerId");
        if (dinnerId == null) {
            localStorage.setItem('dinnerId', 'dinner0');
        } else {
            id = parseInt(dinnerId.slice(-1)) + 1;
            localStorage.setItem('dinnerId', 'dinner' + id.toString());
            alert(localStorage.getItem("dinnerId"));
        }
        replaceFoodDiv(dinnerId);
    }
    
}

function replaceFoodDiv(targetId) {
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
    cardTitle.innerText = "Quaker Oats Insant Oatmeal";

    var cardNutrition = document.createElement('p');
    cardNutrition.className = "card-text";
    cardNutrition.style.fontSize = "70%";
    cardNutrition.innerText = "aaaaaaaaaaaaa%";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardNutrition);
    cardDivContainer.appendChild(cardBody);
    imgDiv.appendChild(img);
    mainDiv.appendChild(imgDiv);
    mainDiv.appendChild(cardDivContainer);

    document.getElementById(targetId).innerHTML = mainDiv;
    // <div class="row g-0" style="width:160%; height:100%;">
    //                   <div class="col-4">
    //                     <img src="images/summary.png" class="img-fluid rounded-start" style="width: 90%; height: 60%;">
    //                   </div>
    //                   <div class="col-8">
    //                     <div class="card-body">
    //                       <h5 class="card-title" style="font-size: 50%;">Quaker Oats Insant Oatmeal 8oz</h5>
    //                       <p class="card-text" style="font-size: 70%;">Cal: 200 cals<br>Protein: 4 g<br>Fat: 0 g <br>Carbs: 24 g</p>
    //                     </div>
    //                   </div>
    //                 </div>
}