/* eslint-env es6, browser  */
/* eslint-disable no-console */


var fontMaps = {};

var fontDefs = [
	{
		name: "32X32-FB",
		tileW: 32,
		tileH: 32,
		cols: 10,
		xPadding: 0,
		yPadding: 0,
		alphaStart: { x: 4, y: 4 },
		numericStart: { x: 7, y: 2 },
		specialChars: {
			"!": { x: 2, y: 1 },
			'"': { x: 3, y: 1 },
			"'": { x: 8, y: 1 },
			"(": { x: 9, y: 1 },
			")": { x: 10, y: 1 },
			"+": { x: 2, y: 2 },
			",": { x: 3, y: 2 },
			"-": { x: 4, y: 2 },
			".": { x: 5, y: 2 },
			":": { x: 7, y: 3 },
			";": { x: 8, y: 3 },
			"=": { x: 10, y: 3 },
			"?": { x: 2, y: 4 }
		}
	},
	{
		name: "32X32-FE",
		tileW: 32,
		tileH: 32,
		cols: 10,
		xPadding: 0,
		yPadding: 0,
		alphaStart: { x: 4, y: 4 },
		numericStart: { x: 7, y: 2 },
		specialChars: {
			"!": { x: 2, y: 1 },
			'"': { x: 3, y: 1 },
			"'": { x: 8, y: 1 },
			"(": { x: 9, y: 1 },
			")": { x: 10, y: 1 },
			"+": { x: 2, y: 2 },
			",": { x: 3, y: 2 },
			"-": { x: 4, y: 2 },
			".": { x: 5, y: 2 },
			":": { x: 7, y: 3 },
			";": { x: 8, y: 3 },
			"=": { x: 10, y: 3 },
			"?": { x: 2, y: 4 }
		}
	},
	{
		name: "32X32-FA",
		tileW: 32,
		tileH: 32,
		cols: 10,
		xPadding: 0,
		yPadding: 0,
		alphaStart: { x: 4, y: 4 },
		numericStart: { x: 7, y: 2 },
		specialChars: {
			"!": { x: 2, y: 1 },
			'"': { x: 3, y: 1 },
			"'": { x: 8, y: 1 },
			"(": { x: 9, y: 1 },
			")": { x: 10, y: 1 },
			"+": { x: 2, y: 2 },
			",": { x: 3, y: 2 },
			"-": { x: 4, y: 2 },
			".": { x: 5, y: 2 },
			":": { x: 7, y: 3 },
			";": { x: 8, y: 3 },
			"=": { x: 10, y: 3 },
			"?": { x: 2, y: 4 }
		}
	},
	{
		name: "32X32-FI",
		tileW: 32,
		tileH: 32,
		cols: 10,
		xPadding: 0,
		yPadding: 0,
		alphaStart: { x: 4, y: 4 },
		numericStart: { x: 7, y: 2 },
		specialChars: {
			"!": { x: 2, y: 1 },
			'"': { x: 3, y: 1 },
			"'": { x: 8, y: 1 },
			"(": { x: 9, y: 1 },
			")": { x: 10, y: 1 },
			",": { x: 3, y: 2 },
			"-": { x: 4, y: 2 },
			".": { x: 5, y: 2 },
			"/": { x: 6, y: 2 },
			":": { x: 7, y: 3 },
			";": { x: 8, y: 3 },
			"=": { x: 10, y: 3 },
			"?": { x: 2, y: 4 }
		}
	},
	{
		name: "32X32-FJ",
		tileW: 32,
		tileH: 32,
		cols: 10,
		xPadding: 0,
		yPadding: 0,
		alphaStart: { x: 4, y: 4 }
	}
];

var mapCoordinates = function(fontMaps, fontName, x, y, cols, charCodeStart){
	
	for (var a = 0; a < 26; a += 1) {
				let char = String.fromCharCode(charCodeStart + a);
				let pos = x + a;
				let overflow = Math.floor((pos - 1) / cols);
				let charX = pos - (overflow * cols);
				let charY = y + overflow;

				fontMaps[fontName][char] = {
					x: charX,
					y: charY
		};
	}
};

var createFontMap = function (fontDef) {

	if (!fontMaps.hasOwnProperty(fontDef.name)) {
		// alphaStart: {x: 4, y: 4}, 
		// numericStart: {x:7,y:2}, 
		// cols:10,
		// specialChars: {"!": {x:1, y:1}}

		var alphaX = (fontDef.alphaStart) ? fontDef.alphaStart.x : undefined;
		var alphaY = (alphaX) ? fontDef.alphaStart.y : undefined;
		var numericX = (fontDef.numericStart) ? fontDef.numericStart.x : undefined;
		var numericY = (numericX) ? fontDef.numericStart.y : undefined;
		var fontCols = fontDef.cols;

		fontMaps[fontDef.name] = {
			url: "./processed_fonts/" + fontDef.name + ".png",
			tileW: fontDef.tileW,
			tileH: fontDef.tileH
		};

		// make default char
		fontMaps[fontDef.name][" "] = {
			x: 0,
			y: 0
		};


		// make the alphabet
		if (alphaX && alphaY) {
			mapCoordinates(fontMaps, fontDef.name, alphaX, alphaY, fontCols, 97);
			/*
			for (var a = 0; a < 26; a += 1) {
				let char = String.fromCharCode(97 + a);
				let pos = alphaX + a;
				let overflow = Math.floor((pos - 1) / fontCols);
				let charX = pos - (overflow * fontCols);
				let charY = alphaY + overflow;

				fontMaps[fontDef.name][char] = {
					x: charX,
					y: charY
				};
			}
			*/
			
		}


		// make the numbers!
		if (numericX && numericY) {
			mapCoordinates(fontMaps, fontDef.name, numericX, numericY, fontCols, 48);
			
			/*
			for (var n = 0; n < 10; n += 1) {
				let num = String.fromCharCode(48 + n);
				let pos = numericX + n;
				let overflow = Math.floor((pos - 1) / fontCols);
				let numX = pos - (overflow * fontCols);
				let numY = numericY + overflow;

				fontMaps[fontDef.name][num] = {
					x: numX,
					y: numY
				};
			}
			*/
		}

		// make special chars!
		if (typeof fontDef.specialChars === "object") {
			Object.keys(fontDef.specialChars).forEach(function (schar) {
				fontMaps[fontDef.name][schar] = fontDef.specialChars[schar];
			});
		}

	}
};

fontDefs.forEach(function (fontDef) {
	createFontMap(fontDef);
});

function update() {
	let text = document.getElementById("in").value;
	let fonts = fontMaps;
	let results = document.querySelector('.results');
	results.innerHTML = "";
	for (let font in fonts) {
		let currentFont = fontMaps[font];
		let fontUrl = currentFont.url;
		console.log(fontUrl);
		let a = text.split('');
		let out = document.createElement('div')
		out.classList.add("out")
		for (var j = 0; j < a.length; j++) {
			let char = a[j];
			let lchar = char.toLowerCase();
			if (!currentFont[lchar]) {
				lchar = " ";
			}
			let s = document.createElement('span');
			s.setAttribute('data-char', lchar);
			console.log(lchar);
			let w = currentFont.tileW;
			let h = currentFont.tileH;
			let x = currentFont[lchar].x - 1;
			let y = currentFont[lchar].y - 1;
			s.style.backgroundImage = "url(" + fontUrl + ")";
			s.style.backgroundPosition = ((-x * w) + "px " + (-y * h) + "px");
			s.classList.add("w" + w, "h" + h);
			s.innerHTML = lchar;
			out.appendChild(s);
		}
		results.appendChild(out)
	}
}

update();
