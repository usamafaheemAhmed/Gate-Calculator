var increment = 1;
var subIncrement = 1;

function add() {
  increment++;
  // alert("add function")
  let tbody = document.getElementById("tbody");

  let row = document.createElement("tr");
  let row1 = document.createElement("tr");
  let row2 = document.createElement("tr");
  let row3 = document.createElement("tr");
  let newBuy = document.createElement("th");
  let Height = document.createElement("td");
  let Width = document.createElement("td");
  let preferredHorizontalGap = document.createElement("td");
  let channelAngleLeft = document.createElement("td");
  let channelAngleRight = document.createElement("td");

  //  Creating second  product head
  row.setAttribute("id", increment + "e" + subIncrement);

  newBuy.innerHTML = "BAY " + increment + " (SIZE IN MM)";
  newBuy.setAttribute("colspan", "2");
  newBuy.classList.add("head");
  newBuy.classList.add("scale-in-ver-top");


  row.appendChild(newBuy);
  tbody.appendChild(row);
  //  Creating second  product head end

  //  Creating second  product body

  Height.innerHTML =
    "<label for='height'>Height</label><br><input type='number' class='form-control' id='height" +
    increment +
    "'> <p class='text-danger text-center d-none shake-horizontal' id='height" +
    increment +
    "Error'>Please fill Height field</p>";
  Width.innerHTML =
    "<label for='width" +
    increment +
    "'>Width</label><br> <input type='number' class='form-control' id='width" +
    increment +
    "'> <p class='text-danger text-center d-none shake-horizontal' id='width" +
    increment +
    "Error'>Please fill Width field</p>";
  preferredHorizontalGap.innerHTML =
    "<label for='preferredHorizontalGap" +
    increment +
    "'>Preferred (Horizontal) Gap</label><br> <input type='number' class='form-control' id='preferredHorizontalGap" +
    increment +
    "'> <p class='text-danger text-center d-none shake-horizontal' id='preferredHorizontalGap" +
    increment +
    "Error'>Please fill Preferred (Horizontal) Gap field</p>";
  channelAngleLeft.innerHTML =
    "<label for='channelAngleLeft" +
    increment +
    "'>Channel Angle (Left)</label><br><select name='channelAngleLeft' id='channelAngleLeft" +
    increment +
    "' class='form-control'><option value='90'>90 (default)</option><option value='135'>135 (Angled)</option></select>";
  channelAngleRight.innerHTML =
    "<label for='channelAngleRight" +
    increment +
    "'>Channel Angle (Right)</label><br> <select name='channelAngleRight' id='channelAngleRight" +
    increment +
    "' class='form-control'><option value='90'>90 (default)</option><option value='135'>135 (Angled)</option></select>";
  channelAngleRight.setAttribute("colspan", "2");

  row1.appendChild(Height);
  row1.appendChild(Width);
  subIncrement++;
  row1.setAttribute("id", increment + "e" + subIncrement);
  row1.classList.add("scale-in-ver-top");


  tbody.appendChild(row1);

  row2.appendChild(preferredHorizontalGap);
  row2.appendChild(channelAngleLeft);
  subIncrement++;
  row2.setAttribute("id", increment + "e" + subIncrement);
  row2.classList.add("scale-in-ver-top");

  tbody.appendChild(row2);

  row3.appendChild(channelAngleRight);
  subIncrement++;
  row3.setAttribute("id", increment + "e" + subIncrement);
  row3.classList.add("scale-in-ver-top");
 
  tbody.appendChild(row3);

  $('html, body').animate({scrollTop: $('#channelAngleRight'+increment).offset().top}, 1700,);


}

function remove() {
  if(increment==1){
      alert("There must be at least one item ");
      return
  }

  let subtract =  subIncrement;
  // else{
  document.getElementById(increment + "e" + subtract).classList.add("fade-out-top"); subtract--;
  document.getElementById(increment + "e" + subtract).classList.add("fade-out-top"); subtract--;
  document.getElementById(increment + "e" + subtract).classList.add("fade-out-top"); subtract--;
  document.getElementById(increment + "e" + subtract).classList.add("fade-out-top"); subtract--;


  setTimeout( function() { 
    
    
    document.getElementById(increment + "e" + subIncrement).remove();
    subIncrement--;
    // alert(increment+"e"+subIncrement);
    document.getElementById(increment + "e" + subIncrement).remove();
    subIncrement--;
    // alert(increment+"e"+subIncrement);
    document.getElementById(increment + "e" + subIncrement).remove();
    subIncrement--;
    // alert(increment+"e"+subIncrement);
    document.getElementById(increment + "e" + subIncrement).remove();
  
    
    increment--;
  
  },300);



  
  // $('html, body').animate({scrollTop: $('#1e1').offset().top}, 1700,);

  // }
}


function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}


function calculate() {
  validate();
  validate2();
  validate3();

  let heights = [];
  let widths = [];
  let preferredHorizontalGaps = [];
  let channelAngleLefts = [];
  let channelAngleRights = [];

  let sumOfHeight =0,sumOfWidths =0,sumOfPreferredGaps =0;

  // what is heights user Entered
  for (let i = 1; i <= increment; i++) {
    let isFilled =  parseFloat(document.getElementById("height" + i).value)||0;

    if (isFilled == "") {
      console.log("error");
      break;
    } else {
      console.log("no error");
      heights[i] = isFilled;
      sumOfHeight += isFilled;

    }
  }
  
  //   console.log("heights ",JSON.stringify(heights));
  // what is heights user Entered end

  // what is widths user Entered
  for (let i = 1; i <= increment; i++) {
    let isFilled =  parseFloat(document.getElementById("width" + i).value)||0;

    if (isFilled == "") {
      console.log("error");
      break;
    } else {
      console.log("no error");
      widths[i] = isFilled;
      sumOfWidths += isFilled;
    }
  }
  //   console.log("widths ",JSON.stringify(widths));
  // what is widths user Entered end

  // what is preferredHorizontalGaps user Entered
  for (let i = 1; i <= increment; i++) {
    let isFilled = parseFloat(document.getElementById("preferredHorizontalGap" + i).value)||0;

    if (isFilled == "") {
      console.log("error");
      break;
    } else {
      console.log("no error");
      preferredHorizontalGaps[i] = isFilled;
      sumOfPreferredGaps += isFilled;
    }
  }
  //   console.log( "preferredHorizontalGaps ",JSON.stringify(preferredHorizontalGaps));
  // what is preferredHorizontalGaps user Entered end

  // what is preferredHorizontalGaps user Entered
  for (let i = 1; i <= increment; i++) {
    let isFilled = parseFloat(document.getElementById("channelAngleLeft" + i).value)||0;

    if (isFilled == "") {
      console.log("error");
      break;
    } else {
      console.log("no error");
      channelAngleLefts[i] = isFilled;
    }
  }
  //   console.log( "channelAngleLefts ",JSON.stringify(channelAngleLefts));
  // what is channelAngleLefts user Entered end

  // what is channelAngleRights user Entered
  for (let i = 1; i <= increment; i++) {
    let isFilled = parseFloat(document.getElementById("channelAngleRight" + i).value)||0;

    if (isFilled == "") {
      console.log("error");
      break;
    } else {
      console.log("no error");
      channelAngleRights[i] = isFilled;
    }
  }

  document.getElementById("variationResult").innerHTML= document.getElementById("variation").value;
  document.getElementById("colorResult").innerHTML= document.getElementById("color").value;
  document.getElementById("slatSizeResult").innerHTML= document.getElementById("size").value;
  document.getElementById("heightResult").innerHTML= sumOfHeight;
  document.getElementById("widthResult").innerHTML= sumOfWidths;
  document.getElementById("preferredGapResult").innerHTML= sumOfPreferredGaps;
  document.getElementById("channelAngleLeftResult90").innerHTML= getOccurrence(channelAngleLefts, 90);
  document.getElementById("channelAngleLeftResult135").innerHTML= getOccurrence(channelAngleLefts, 135);
  document.getElementById("channelAngleRightResult90").innerHTML= getOccurrence(channelAngleRights, 90);
  document.getElementById("channelAngleRightResult135").innerHTML= getOccurrence(channelAngleRights, 135);


  
}

function validate() {
  for (let i = 1; i <= increment; i++) {
    let isFilled = document.getElementById("height" + i).value;

    if (isFilled == "") {
      document
        .getElementById("height" + i + "Error")
        .classList.remove("d-none");
      // console.log("error");
      return false;
    } else {
      document.getElementById("height" + i + "Error").classList.add("d-none");
    }
    // console.log("no error");
  }
}

function validate2() {
  for (let i = 1; i <= increment; i++) {
    let isFilled = document.getElementById("width" + i).value;

    if (isFilled == "") {
      document.getElementById("width" + i + "Error").classList.remove("d-none");
      console.log("error");
      return false;
    } else {
      document.getElementById("width" + i + "Error").classList.add("d-none");
    }
    console.log("no error");
  }
}

function validate3() {
  for (let i = 1; i <= increment; i++) {
    let isFilled = document.getElementById("preferredHorizontalGap" + i).value;

    if (isFilled == "") {
      document
        .getElementById("preferredHorizontalGap" + i + "Error")
        .classList.remove("d-none");
      console.log("error");
      return false;
    } else {
      document
        .getElementById("preferredHorizontalGap" + i + "Error")
        .classList.add("d-none");
    }
    console.log("no error");
  }
}
