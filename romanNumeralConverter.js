function convertToRoman(num) {
	// Array of objects representing Roman numeral values and symbols
	const romanNumerals = [
		{ value: 1000, numeral: "M" },
		{ value: 900, numeral: "CM" },
		{ value: 500, numeral: "D" },
		{ value: 400, numeral: "CD" },
		{ value: 100, numeral: "C" },
		{ value: 90, numeral: "XC" },
		{ value: 50, numeral: "L" },
		{ value: 40, numeral: "XL" },
		{ value: 10, numeral: "X" },
		{ value: 9, numeral: "IX" },
		{ value: 5, numeral: "V" },
		{ value: 4, numeral: "IV" },
		{ value: 1, numeral: "I" },
	];

	// Result string to store the Roman numeral representation
	let result = "";

	// Iterate through the array of Roman numerals
	for (let i = 0; i < romanNumerals.length; i++) {
		// While the input number is greater than or equal to the current numeral value
		while (num >= romanNumerals[i].value) {
			// Append the corresponding numeral to the result
			result += romanNumerals[i].numeral;
			// Subtract the numeral value from the input number
			num -= romanNumerals[i].value;
		}
	}

	// Return the final numeral representation
	return result;
}

// Example usage:
console.log(convertToRoman(3549)); // Outputs: MMMDXLIX

// Test cases
console.log(convertToRoman(2) === "II"); // true
console.log(convertToRoman(3) === "III"); // true
console.log(convertToRoman(4) === "IV"); // true
console.log(convertToRoman(5) === "V"); // true
console.log(convertToRoman(9) === "IX"); // true
console.log(convertToRoman(12) === "XII"); // true
console.log(convertToRoman(16) === "XVI"); // true
console.log(convertToRoman(29) === "XXIX"); // true
console.log(convertToRoman(44) === "XLIV"); // true
console.log(convertToRoman(45) === "XLV"); // true
console.log(convertToRoman(68) === "LXVIII"); // true
console.log(convertToRoman(83) === "LXXXIII"); // true
console.log(convertToRoman(97) === "XCVII"); // true
console.log(convertToRoman(99) === "XCIX"); // true
console.log(convertToRoman(400) === "CD"); // true
console.log(convertToRoman(500) === "D"); // true
console.log(convertToRoman(501) === "DI"); // true
console.log(convertToRoman(649) === "DCXLIX"); // true
console.log(convertToRoman(798) === "DCCXCVIII"); // true
console.log(convertToRoman(891) === "DCCCXCI"); // true
console.log(convertToRoman(1000) === "M"); // true
console.log(convertToRoman(1004) === "MIV"); // true
console.log(convertToRoman(1006) === "MVI"); // true
console.log(convertToRoman(1023) === "MXXIII"); // true
console.log(convertToRoman(2014) === "MMXIV"); // true
console.log(convertToRoman(3999) === "MMMCMXCIX"); // true
