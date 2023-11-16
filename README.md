# Roman Numeral Converter

## Introduction

This JavaScript code is a Roman Numeral Converter. It takes Arabic numerals as input and converts them into their Roman numeral equivalents. Roman numerals are a numeral system that originated in ancient Rome, using combinations of letters from the Latin alphabet (e.g., I, V, X, L, C, D, M) to represent values. The purpose of this code is to provide a simple and efficient way to convert Arabic numerals into Roman numerals within the specified range.

## How it Works

The `convertToRoman` function in the code performs the following steps:

1. **Mapping Numerals:**

   - The function uses an array of objects to map Arabic numeral values to their corresponding Roman numeral symbols.

2. **Iterative Conversion:**
   - The function iterates through the array, appending the appropriate Roman numeral symbols to the result string while subtracting the corresponding values from the input number. This process continues until the input number becomes 0.

## Test Cases

The code includes a set of test cases to demonstrate its functionality. These test cases cover various scenarios, including single-digit numbers, multiple-digit numbers, and edge cases.

## How to Use

1. Clone this repository to your local machine.
2. Open the JavaScript file (`romanNumeralConverter.js`) in your preferred code editor.
3. Modify the test cases or add your own if needed.
4. Run the script to see the results of the Roman numeral conversions.
