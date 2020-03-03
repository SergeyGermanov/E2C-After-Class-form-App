var aak21Term2 = ["Leo", "Max", "Tony"];
var bg11Term2 = ["Leo", "Kevin"];
var bg12Term2 = ["Tony", "Jenny"];
var cg221Term2 = ["Candy", "Amy"];
var cg22Term2 = ["Max", "Yilia", "Nick"];
var dg32Term2 = ["Yoyo", "Coco", "Kevin"];
var ak33Term2 = ["Kitty", "Kevin", "Stoney", "Rian"];
var cg23Term2 = ["Jam", "Cherry", "Harry"];
var eg43Term2 = ["Terry", "Marry"];
var aak24Term2 = ["Thea", "Mandy", "Eva", "Ada"];
var bg14Term2 = ["Ricky", "Sunny", "Tony", "Kevin", "Carry", "Cathy"];
var cg24Term2 = ["Coco", "Jerry", "Mia"];
var dg34Term2 = ["Daniel", "Cherry", "Fiona"];
var ak35Term2 = ["Cindy", "Leo", "Yoyo", "Kevin"];
var cg25Term2 = ["Jacky", "Elvis", "Summer"];
var dg35Term2 = ["Nick", "Alice", "Cindy"];
var aak26Term2 = ["Cici", "Cici黄梓涵", "David", "Tom"];
var ak36Term2 = ["Peter", "Kitty", "Penny"];
var bg16Term2 = ["Sean", "Cherry"];
var bg161Term2 = ["Tony", "Peter"];
var gg65Term2 = ["San", "Molly"];
var cg26Term2 = ["Sunny", "Kevin"];
var fg56Term2 = ["Alex", "Miki"];
var dg36Term2 = ["Alex", "Jason", "Lisa", "Cherry"];
var eg46Term2 = [
  "Rainbow",
  "Apple",
  "Apple-2",
  "Zoe",
  "Kitty",
  "Eric",
  "Henry"
];

// var carolineClasses = [
//   "AK36 Term 2",
//   "AK33 Term 2",
//   "CG22 Term 2",
//   "EG43 Term 2",
//   "CG24 Term 2",
//   "DG35 Term 2",
//   "BG161 Term 2",
//   "CG26 Term 2",
//   "DG36 Term 2",
//   "EG46 Term 2"
// ];

var felipeClasses = [
  "CG22 Term 2",
  "EG43 Term 2",
  "CG24 Term 2",
  "DG35 Term 2"
];

var janeClasses = [
  "AAK21 Term 2",
  "BG11 Term 2",
  "BG12 Term 2",
  "CG221 Term 2",
  "AK33 Term 2",
  "CG23 Term 2",
  "AAK24 Term 2",
  "BG14 Term 2",
  "AK35 Term 2",
  "CG25 Term 2",
  "BG16 Term 2",
  "GG65 Term 2",
  "FG56 Term 2",
  "EG46 Term 2"
];
// var nulaClasses = ["DG32 Term 2", "DG34 Term 2"];
var annaClasses = [
  "AAK26 Term 2",
  "AK36 Term 2",
  "BG161 Term 2",
  "CG26 Term 2",
  "DG36 Term 2",
  "DG32 Term 2",
  "DG34 Term 2",
  "EG43 Term 2",
  "DG35 Term 2"
];

function studentsName(name) {
  return `<h2><span><input type="hidden" name="Student name_${name}" value="${name}"></<span> ${name}</h2><h4><span><input type="radio" name="Attendance_${name}" value="Present" /> Present  </span><span><input type="radio" name="Attendance_${name}" value="Absent" /> Absent  </span><span><input type="radio" name="Attendance_${name}" value="Late" /> Late  </span><span><input type="radio" name="Attendance_${name}" value="Left Early" /> Left Early  </span></h4>`;
}

function textArea(name) {
  var htmlCode = document.querySelector(".student");
  var text = document.createElement("textarea");
  htmlCode.appendChild(text);
  var textArea = document.querySelectorAll("textarea");
  textArea[0].setAttribute("name", `Feedback ${name}`);
  textArea[0].setAttribute("rows", "5");
  textArea[0].setAttribute(
    "placeholder",
    `Please type your comments about ${name} class here`
  );
}

function createElements(arr) {
  var htmlCode = document.querySelector(".student");
  htmlCode.innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    var header = document.createElement("div");
    var htmlBlock = `<div class="included ${arr[i]}"><div class="titles"><div></div><p>Vocabulary:</p><p>Pronunciation:</p><p>Participation:</p><p>Overall:</p></div><div class="smiles"><div class="emojis"><img class="emojiSize" src="img/Emoji-Sadistic.ico" alt="ok face"/><img class="emojiSize" src="img/Emoji-Happy.ico" alt="smily face"/> <img class="emojiSize" src="img/Emoji-Glad.ico" alt="excited face"/></div><div class="emojis"><input type="radio" name="Vocabulary_${arr[i]}" value="OK"/><input type="radio" name="Vocabulary_${arr[i]}" value="Good"/><input type="radio" name="Vocabulary_${arr[i]}" value="Excellent" /></div><div class="emojis"><input type="radio" name="Pronunciation_${arr[i]}" value="OK"/><input type="radio" name="Pronunciation_${arr[i]}" value="Good"/><input type="radio" name="Pronunciation_${arr[i]}" value="Excellent"/></div><div class="emojis"><input type="radio" name="Participation_${arr[i]}" value="OK"/><input type="radio" name="Participation_${arr[i]}" value="Good" /><input type="radio" name="Participation_${arr[i]}" value="Excellent" /></div><div class="emojis"><input type="radio" name="Overall_${arr[i]}" value="OK" /><input type="radio" name="Overall_${arr[i]}" value="Good" /><input type="radio" name="Overall_${arr[i]}" value="Excellent" /></div></div></div>`;

    header.innerHTML =
      "<fieldset>" + studentsName(arr[i]) + htmlBlock + "</fieldset>";
    htmlCode.appendChild(header);
  }
}

function createOptions(arr) {
  var htmlCode = document.querySelector("#class");
  htmlCode.innerHTML = "<option value='none'>--Choose your class--</option>";

  for (var i = 0; i < arr.length; i++) {
    var header = document.createElement("option");
    header.innerHTML = createClassOption(arr[i]);
    htmlCode.appendChild(header);
  }
}

function createClassOption(letter) {
  return `<option value="${letter}">${letter}</option>`;
}

const selectTeacher = document.querySelector("#name");
const selectClass = document.querySelector("#class");

selectClass.addEventListener("change", event => {
  const result = document.querySelector(".student");
  switch (event.target.value) {
    case "CG22 Term 2":
      createElements(cg22Term2);
      textArea("CG22 Term 2");
      break;
    case "EG43 Term 2":
      createElements(eg43Term2);
      textArea("EG43 Term 2");
      break;
    case "CG24 Term 2":
      createElements(cg24Term2);
      textArea("CG24 Term 2");
      break;
    case "DG35 Term 2":
      createElements(dg35Term2);
      textArea("DG35 Term 2");
      break;
    case "BG161 Term 2":
      createElements(bg161Term2);
      textArea("BG161 Term 2");
      break;
    case "CG26 Term 2":
      createElements(cg26Term2);
      textArea("CG26 Term 2");
      break;
    case "DG36 Term 2":
      createElements(dg36Term2);
      textArea("DG36 Term 2");
      break;
    case "EG46 Term 2":
      createElements(eg46Term2);
      textArea("EG46 Term 2");
      break;
    case "AAK21 Term 2":
      createElements(aak21Term2);
      textArea("AAK21 Term 2");
      break;
    case "BG11 Term 2":
      createElements(bg11Term2);
      textArea("BG11 Term 2");
      break;
    case "BG12 Term 2":
      createElements(bg12Term2);
      textArea("BG12 Term 2");
      break;
    case "CG221 Term 2":
      createElements(cg221Term2);
      textArea("CG221 Term 2");
      break;
    case "AK33 Term 2":
      createElements(ak33Term2);
      textArea("AK33 Term 2");
      break;
    case "CG23 Term 2":
      createElements(cg23Term2);
      textArea("CG23 Term 2");
      break;
    case "AAK24 Term 2":
      createElements(aak24Term2);
      textArea("AAK24 Term 2");
      break;
    case "BG14 Term 2":
      createElements(bg14Term2);
      textArea("BG14 Term 2");
      break;
    case "AK35 Term 2":
      createElements(ak35Term2);
      textArea("AK35 Term 2");
      break;
    case "CG25 Term 2":
      createElements(cg25Term2);
      textArea("CG25 Term 2");
      break;
    case "BG16 Term 2":
      createElements(bg16Term2);
      textArea("BG16 Term 2");
      break;
    case "GG65 Term 2":
      createElements(gg65Term2);
      textArea("GG65 Term 2");
      break;
    case "FG56 Term 2":
      createElements(fg56Term2);
      textArea("FG56 Term 2");
      break;
    case "DG32 Term 2":
      createElements(dg32Term2);
      textArea("DG32 Term 2");
      break;
    case "DG34 Term 2":
      createElements(dg34Term2);
      textArea("DG34 Term 2");
      break;
    case "AAK26 Term 2":
      createElements(aak26Term2);
      textArea("AAK26 Term 2");
      break;
    case "AK36 Term 2":
      createElements(ak36Term2);
      textArea("AK36 Term 2");
      break;
    default:
      result.innerHTML =
        '<div class="student"><img src="img/logo.png" /></div>';
  }
});

selectTeacher.addEventListener("change", event => {
  switch (event.target.value) {
    // case "Caroline Dare":
    //   createOptions(carolineClasses);
    //   break;
    // // case "Nula Webb":
    //   createOptions(nulaClasses);
    //   break;
    case "Felipe Oliveira":
      createOptions(felipeClasses);
      break;
    case "Jane Eagar":
      createOptions(janeClasses);
      break;
    case "Anna Romanova":
      createOptions(annaClasses);
      break;
    default:
      result.innerHTML =
        '<div class="student"><img src="img/logo.png" /></div>';
  }
});
