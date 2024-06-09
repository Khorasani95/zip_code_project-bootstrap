const citiNames = () => {
  let storeValues = document.getElementById("first-input").value;
  let names;
  console.log(storeValues);

  if (!storeValues) {
    alert("Enter Zip Code Of Your City First");
    return;
  }

  switch (storeValues) {
    case "3800":
      names = "Faisalabad";
      break;

    case "4000":
      names = "Lahore"
      break;

    case "5000":
      names = "Karachi"
      break;

    case "6000":
      names = "layyah"
      break;

    case "7000":
      names = "Daska"
      break;

    default:
    // document.getElementById("output").value = "Enter any number";
  }
  document.getElementById('output').value = names;
}
// // let printCities;

// let cities = ["Isl", "Lhr", "Fsd", "Dska", "Quetta", "Naran", "Kagan", "Kashmir", "Gilgit", "Rawal", "Multan", "Burewaala"]

// function printCities() {
//   document.getElementById('idOfInput').innerHTML = "";
//   // document.getElementById('idOfInput').innerHTML = cities;
//   // document.getElementById("idOfInput").innerHTML = cities

//   for (let i = 0; i < cities.length; i++) {

//   // }
// }
//   let firstLetter = "DocuMenT"
// firstLetter = firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1).toLowerCase();
//   // let changed = firstLetter + ram;
//   console.log(firstLetter);
// lowering = lowering.charAt(0).toLowerCase();
// console.log(lowering);



