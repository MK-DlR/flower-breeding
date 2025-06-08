
const breedingAmount = {
	"1": [ {amount: "3x", chance: 60}, {amount: "2x", chance: 35}, {amount: "5x", chance: 5} ]
}
	
let flowerColour = '';
let flowerAmount = '';
let isFirstFlowerRare = null;
let isSecondFlowerRare = null;
let selectedFlower = null;
let selectedClass = null;

const breedingResults = {
	// Rose
	//Common x Common
	"12": [ {colour: "Red Rose", chance: 35}, {colour: "Pink Rose", chance: 35}, {colour: "Blue Rose", chance: 30} ],
	"13": [ {colour: "Red Rose", chance: 35}, {colour: "White Rose", chance: 35}, {colour: "Purple Rose", chance: 30} ],
	"23": [ {colour: "Pink Rose", chance: 35}, {colour: "White Rose", chance: 35}, {colour: "Black Rose", chance: 30} ],
	//Common x Uncommon
	"14": [ {colour: "Red Rose", chance: 30}, {colour: "Blue Rose", chance: 30}, {colour: "Purple Rose", chance: 40} ],
	"16": [ {colour: "Red Rose", chance: 30}, {colour: "Purple Rose", chance: 30}, {colour: "Black Rose", chance: 40} ],
	"15": [ {colour: "Red Rose", chance: 30}, {colour: "Black Rose", chance: 30}, {colour: "Blue Rose", chance: 40} ],
	"24": [ {colour: "Pink Rose", chance: 30}, {colour: "Blue Rose", chance: 30}, {colour: "Purple Rose", chance: 20}, {colour: "Black Rose", chance: 20} ],
	"26": [ {colour: "Pink Rose", chance: 30}, {colour: "Purple Rose", chance: 30}, {colour: "Blue Rose", chance: 20}, {colour: "Black Rose", chance: 20} ],
	"25": [ {colour: "Pink Rose", chance: 30}, {colour: "Black Rose", chance: 30}, {colour: "Blue Rose", chance: 20}, {colour: "Purple Rose", chance: 20} ],
	"34": [ {colour: "White Rose", chance: 30}, {colour: "Blue Rose", chance: 30}, {colour: "Black Rose", chance: 40} ],
	"36": [ {colour: "White Rose", chance: 30}, {colour: "Purple Rose", chance: 30}, {colour: "Blue Rose", chance: 40} ],
	"35": [ {colour: "White Rose", chance: 40}, {colour: "Black Rose", chance: 40}, {colour: "Purple Rose", chance: 20} ],
	//Uncommon x Uncommon
	"46": [ {colour: "Blue Rose", chance: 40}, {colour: "Purple Rose", chance: 40}, {colour: "Black Rose", chance: 20} ],
	"45": [ {colour: "Blue Rose", chance: 40}, {colour: "Black Rose", chance: 40}, {colour: "Rainbow Rose", chance: 20} ],
	"56": [ {colour: "Purple Rose", chance: 40}, {colour: "Black Rose", chance: 40}, {colour: "Gold Rose", chance: 20} ],

	// Marigold
	//Common x Common
	"78": [ {colour: "Orange Marigold", chance: 35}, {colour: "Yellow Marigold", chance: 35}, {colour: "Pink Marigold", chance: 30} ],
	"79": [ {colour: "Orange Marigold", chance: 35}, {colour: "White Marigold", chance: 35}, {colour: "Striped Marigold", chance: 30} ],
	"89": [ {colour: "Yellow Marigold", chance: 35}, {colour: "White Marigold", chance: 35}, {colour: "Pink Marigold", chance: 30} ],
	//Common x Uncommon
	"710": [ {colour: "Orange Marigold", chance: 30}, {colour: "Pink Marigold", chance: 30}, {colour: "Striped Marigold", chance: 40} ],
	"711": [ {colour: "Orange Marigold", chance: 30}, {colour: "Striped Marigold", chance: 30}, {colour: "Pink Marigold", chance: 40} ],
	"810": [ {colour: "Yellow Marigold", chance: 30}, {colour: "Pink Marigold", chance: 30}, {colour: "Striped Marigold", chance: 40} ],
	"811": [ {colour: "Yellow Marigold", chance: 30}, {colour: "Striped Marigold", chance: 30}, {colour: "Pink Marigold", chance: 40} ],
	"910": [ {colour: "White Marigold", chance: 30}, {colour: "Pink Marigold", chance: 30}, {colour: "Striped Marigold", chance: 40} ],
	"911": [ {colour: "White Marigold", chance: 30}, {colour: "Striped Marigold", chance: 30}, {colour: "Pink Marigold", chance: 40} ],
	//Uncommon x Uncommon
	"1011": [ {colour: "Pink Marigold", chance: 40}, {colour: "Striped Marigold", chance: 40}, {colour: "Rainbow Marigold", chance: 10}, {colour: "Gold Marigold", chance: 10} ],

	// Hibiscus
	//Common x Common
	"1415": [ {colour: "Red Hibiscus", chance: 35}, {colour: "Pink Hibiscus", chance: 35}, {colour: "Orange Hibiscus", chance: 30} ],
	"1416": [ {colour: "Red Hibiscus", chance: 35}, {colour: "Yellow Hibiscus", chance: 35}, {colour: "Purple Hibiscus", chance: 30} ],
	"1516": [ {colour: "Pink Hibiscus", chance: 35}, {colour: "Yellow Hibiscus", chance: 35}, {colour: "Purple Hibiscus", chance: 30} ],
	//Common x Uncommon
	"1417": [ {colour: "Red Hibiscus", chance: 35}, {colour: "White Hibiscus", chance: 35}, {colour: "Orange Hibiscus", chance: 30} ],
	"1418": [ {colour: "Red Hibiscus", chance: 30}, {colour: "Orange Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 40} ],
	"1419": [ {colour: "Red Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 30}, {colour: "White Hibiscus", chance: 40} ],
	"1518": [ {colour: "Pink Hibiscus", chance: 30}, {colour: "Orange Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 40} ],
	"1519": [ {colour: "Pink Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 30}, {colour: "White Hibiscus", chance: 40} ],
	"1517": [ {colour: "Pink Hibiscus", chance: 30}, {colour: "White Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 40} ],
	"1618": [ {colour: "Yellow Hibiscus", chance: 30}, {colour: "Orange Hibiscus", chance: 30}, {colour: "White Hibiscus", chance: 40} ],
	"1619": [ {colour: "Yellow Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 30}, {colour: "Orange Hibiscus", chance: 40} ],
	"1617": [ {colour: "Yellow Hibiscus", chance: 30}, {colour: "White Hibiscus", chance: 30}, {colour: "Purple Hibiscus", chance: 40} ],
	//Uncommon x Uncommon
	"1819": [ {colour: "Orange Hibiscus", chance: 40}, {colour: "Purple Hibiscus", chance: 40}, {colour: "Green Hibiscus", chance: 20} ],
	"1718": [ {colour: "Orange Hibiscus", chance: 40}, {colour: "White Hibiscus", chance: 40}, {colour: "Rainbow Hibiscus", chance: 20} ],
	"1719": [ {colour: "Purple Hibiscus", chance: 40}, {colour: "White Hibiscus", chance: 40}, {colour: "Gold Hibiscus", chance: 20} ],

	// Plumeria
	//Common x Common
	"2324": [ {colour: "White Plumeria", chance: 35}, {colour: "Pink Plumeria", chance: 35}, {colour: "Yellow Plumeria", chance: 30} ],
	"2325": [ {colour: "White Plumeria", chance: 35}, {colour: "Red Plumeria", chance: 35}, {colour: "Teal Plumeria", chance: 30} ],
	"2425": [ {colour: "Pink Plumeria", chance: 35}, {colour: "Red Plumeria", chance: 35}, {colour: "Yellow Plumeria", chance: 30} ],
	//Common x Uncommon
	"2326": [ {colour: "White Plumeria", chance: 30}, {colour: "Yellow Plumeria", chance: 30}, {colour: "Teal Plumeria", chance: 40} ],
	"2327": [ {colour: "White Plumeria", chance: 30}, {colour: "Teal Plumeria", chance: 30}, {colour: "Yellow Plumeria", chance: 40} ],
	"2426": [ {colour: "Pink Plumeria", chance: 30}, {colour: "Yellow Plumeria", chance: 30}, {colour: "Teal Plumeria", chance: 40} ],
	"2427": [ {colour: "Pink Plumeria", chance: 30}, {colour: "Teal Plumeria", chance: 30}, {colour: "Gold Plumeria", chance: 40} ],
	"2526": [ {colour: "Red Plumeria", chance: 30}, {colour: "Yellow Plumeria", chance: 30}, {colour: "Teal Plumeria", chance: 40} ],
	"2527": [ {colour: "Red Plumeria", chance: 30}, {colour: "Teal Plumeria", chance: 30}, {colour: "Yellow Plumeria", chance: 40} ],
	//Uncommon x Uncommon
	"2627": [ {colour: "Yellow Plumeria", chance: 40}, {colour: "Teal Plumeria", chance: 40}, {colour: "Rainbow Plumeria", chance: 10},{colour: "Gold Plumeria", chance: 10} ],

	// Orchid
	//Common x Common
	"3031": [ {colour: "Purple Orchid", chance: 35}, {colour: "White Orchid", chance: 35}, {colour: "Orange Orchid", chance: 30} ],
	"3032": [ {colour: "Purple Orchid", chance: 35}, {colour: "Yellow Orchid", chance: 35}, {colour: "Orange Orchid", chance: 30} ],
	"3132": [ {colour: "White Orchid", chance: 35}, {colour: "Yellow Orchid", chance: 35}, {colour: "Black Orchid", chance: 30} ],
	//Common x Uncommon
	"3033": [ {colour: "Purple Orchid", chance: 30}, {colour: "Orange Orchid", chance: 30}, {colour: "Black Orchid", chance: 40} ],
	"3034": [ {colour: "Purple Orchid", chance: 30}, {colour: "Black Orchid", chance: 30}, {colour: "Green Orchid", chance: 40} ],
	"3035": [ {colour: "Purple Orchid", chance: 30}, {colour: "Green Orchid", chance: 30}, {colour: "Orange Orchid", chance: 40} ],
	"3133": [ {colour: "White Orchid", chance: 30}, {colour: "Orange Orchid", chance: 30}, {colour: "Black Orchid", chance: 40} ],
	"3134": [ {colour: "White Orchid", chance: 30}, {colour: "Black Orchid", chance: 30}, {colour: "Green Orchid", chance: 40} ],
	"3135": [ {colour: "White Orchid", chance: 30}, {colour: "Green Orchid", chance: 30}, {colour: "Orange Orchid", chance: 40} ],
	"3233": [ {colour: "Yellow Orchid", chance: 30}, {colour: "Orange Orchid", chance: 30}, {colour: "Green Orchid", chance: 40} ],
	"3234": [ {colour: "Yellow Orchid", chance: 30}, {colour: "Black Orchid", chance: 30}, {colour: "Orange Orchid", chance: 40} ],
	"3235": [ {colour: "Yellow Orchid", chance: 30}, {colour: "Green Orchid", chance: 30}, {colour: "Black Orchid", chance: 40} ],

	//Uncommon x Uncommon
	"3334": [ {colour: "Orange Orchid", chance: 40}, {colour: "Black Orchid", chance: 40}, {colour: "Red Orchid", chance: 20} ],
	"3435": [ {colour: "Black Orchid", chance: 40}, {colour: "Green Orchid", chance: 40}, {colour: "Gold Orchid", chance: 20} ],
	"3335": [ {colour: "Orange Orchid", chance: 40}, {colour: "Green Orchid", chance: 40}, {colour: "Rainbow Orchid", chance: 20} ]


};
const flowerNames = {
  "1": [{colour:"Red Rose", rarity: "(Common)", type: "Rose" }],
  "2": [{colour: "Pink Rose",rarity: "(Common)", type: "Rose"}],
  "3": [{colour:"White Rose", rarity: "(Common)", type: "Rose"}],
  "4": [{colour:"Blue Rose", rarity: "(Uncommon)", type: "Rose"}],
  "5": [{colour:"Black Rose", rarity: "(Uncommon)", type: "Rose"}],
  "6": [{colour:"Purple Rose", rarity: "(Uncommon)", type: "Rose"}],
  "7": [{colour:"Orange Marigold", rarity: "(Common)", type: "Marigold"}],
  "8": [{colour:"Yellow Marigold", rarity: "(Common)", type: "Marigold"}],
  "9": [{colour:"White Marigold", rarity: "(Common)", type: "Marigold"}],
  "10": [{colour:"Pink Marigold", rarity: "(Uncommon)", type: "Marigold"}],
  "11": [{colour:"Striped Marigold", rarity: "(Uncommon)", type: "Marigold"}],
  "12": [{colour:"Rainbow Marigold", rarity: "(Rare)", type: "Marigold"}],
  "13": [{colour:"Gold Marigold", rarity: "(Rare)", type: "Marigold"}],
  "14": [{colour:"Red Hibiscus", rarity: "(Common)", type: "Hibiscus"}],
  "15": [{colour:"Pink Hibiscus", rarity: "(Common)", type: "Hibiscus"}],
  "16": [{colour:"Yellow Hibiscus", rarity: "(Common)", type: "Hibiscus"}],
  "17": [{colour:"White Hibiscus", rarity: "(Uncommon)", type: "Hibiscus"}],
  "18": [{colour:"Orange Hibiscus", rarity: "(Uncommon)", type: "Hibiscus"}],
  "19": [{colour:"Purple Hibiscus", rarity: "(Uncommon)", type: "Hibiscus"}],
  "20": [{colour:"Green Hibiscus", rarity: "(Rare)", type: "Hibiscus"}],
  "21": [{colour:"Rainbow Hibiscus", rarity: "(Rare)", type: "Hibiscus"}],
  "22": [{colour:"Gold Hibiscus", rarity: "(Rare)", type: "Hibiscus"}],
  "23": [{colour:"White Plumeria", rarity: "(Common)", type: "Plumeria"}],
  "24": [{colour:"Pink Plumeria", rarity: "(Common)", type: "Plumeria"}],
  "25": [{colour:"Red Plumeria", rarity: "(Common)", type: "Plumeria"}],
  "26": [{colour:"Yellow Plumeria", rarity: "(Uncommon)", type: "Plumeria"}],
  "27": [{colour:"Teal Plumeria", rarity: "(Uncommon)", type: "Plumeria"}],
  "28": [{colour:"Rainbow Plumeria", rarity: "(Rare)", type: "Plumeria"}],
  "29": [{colour:"Gold Plumeria", rarity: "(Rare)", type: "Plumeria"}],
  "30": [{colour:"Purple Orchid", rarity: "(Common)", type: "Orchid"}],
  "31": [{colour:"White Orchid", rarity: "(Common)", type: "Orchid"}],
  "32": [{colour:"Yellow Orchid", rarity: "(Common)", type: "Orchid"}],
  "33": [{colour:"Orange Orchid", rarity: "(Uncommon)", type: "Orchid"}],
  "34": [{colour:"Black Orchid", rarity: "(Uncommon)", type: "Orchid"}],
  "35": [{colour:"Green Orchid", rarity: "(Uncommon)", type: "Orchid"}],
  "36": [{colour:"Red Orchid", rarity: "(Rare)", type: "Orchid"}],
  "37": [{colour:"Gold Orchid", rarity: "(Rare)", type: "Orchid"}],
  "38": [{colour:"Rainbow Orchid", rarity: "(Rare)", type: "Orchid"}],
  "39": [{colour:"Rainbow Rose", rarity: "(Rare)", type: "Rose"}],
  "40": [{colour:"Gold Rose", rarity: "(Rare)", type: "Rose"}]
};

function breedFlower(button, flowerId) {
button.style.border = "4px solid red";
  if (selectedFlower === null) { //first flower pick
	selectedFlower = flowerId;
	selectedClass =  flowerNames[flowerId][0].type;
	isFirstFlowerRare = button.classList.contains('rare');
  } 
  else if(flowerNames[flowerId][0].type == selectedClass){ //second Flower (has to be the same class)
	isSecondFlowerRare = button.classList.contains('rare');
	let flowerName = null;
	let flowerRarity = null;
	//if first flower and second flower are the same
	if(selectedFlower == flowerId) {
		flowerName = flowerNames[flowerId][0].colour;
	}
	//if breeding with rare type
	else if(isFirstFlowerRare || isSecondFlowerRare){
		let randomizedRareId = randomizeRareBreed(selectedFlower, flowerId);	
		flowerName =  flowerNames[randomizedRareId][0].colour;
	}
	else{
		let dictKey = generateKeyPairing(selectedFlower, flowerId);
		let resultOptions = breedingResults[dictKey];
		if (resultOptions) {
			let breedResult = randomizeFlowerBreed(resultOptions);
			flowerName = breedResult;
		}
	}
	let amountResult = rollAmount(breedingAmount['1']);
	if(flowerName != null && flowerName != undefined) renderBreedingResult(amountResult, flowerName)
	setTimeout(function(){ 
		selectedFlower = null; // reset
		document.querySelectorAll("button").forEach(btn => {
		btn.style.border = 'none';
		});
	
	}, 500);

	
  }
  else{ //user clicked flowers with different types, give warning
	var x = document.getElementById("snackbar");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
	document.querySelectorAll("button").forEach(btn => {
	btn.style.border = 'none';
	});
	selectedFlower = null; // reset
  }
}

function randomizeRareBreed(selectedFlower, flowerId){
	let rand = Math.floor(Math.random() * 2) + 1;
	if(rand == 1) return selectedFlower;
	return flowerId;

}

function generateKeyPairing(id1, id2) {
  return id1 < id2 ? `${id1}${id2}` : `${id2}${id1}`;
  //make sure key is in the right order
}

function randomizeFlowerBreed(options) {
  let rand = Math.floor(Math.random() * 100);
  let cumulative = 0;
  for (const opt of options) {
    cumulative += opt.chance;
    if (rand <= cumulative) {
      return opt.colour;
    }
  }
  return options[options.length - 1].colour; 
}


function rollAmount(options) {
    let rand = Math.floor(Math.random() * 100) + 1; // roll 1 to 100
	let cumulative = 0;
	for (const opt of options) {
		cumulative += opt.chance;
		if (rand <= cumulative) {
		  return opt.amount;
		}
	  }
  return options[options.length - 1].amount; 
}


function renderBreedingResult(amountResult, flowerName) {
	const container = document.getElementById("results");
	const iconPath = 'icons/' + flowerName + '.png';
	const div = document.createElement("div");
	div.classList.add("result-entry");

	const img = document.createElement("img");
	img.src = iconPath;
	img.alt = flowerName;
	img.classList.add("flower-icon");

	const text = document.createElement("span");
	text.textContent = amountResult + ' ' + flowerName ;

	div.appendChild(img);
	div.appendChild(text);
	container.appendChild(div);
}