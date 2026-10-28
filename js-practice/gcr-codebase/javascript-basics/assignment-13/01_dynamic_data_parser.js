"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];
const conversionReport = [];

for (let index = 0; index < apiData.length; index += 1) {
  const value = apiData[index];
  const numericValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const isBlankString = typeof value === "string" && value.trim() === "";
  const isMissingValue = value === null || value === undefined;
  const isValidNumber = !isBlankString && !isMissingValue && Number.isFinite(numericValue);

  conversionReport.push({
    index,
    original: stringValue,
    number: Number.isNaN(numericValue) ? "NaN" : numericValue,
    boolean: booleanValue,
    string: stringValue,
    numericStatus: isValidNumber ? "valid" : "invalid"
  });

  if (isValidNumber) {
    validNumericData.push(numericValue);
  } else {
    invalidNumericData.push({ index, value: stringValue });
  }
}

console.log("Conversion report:");
for (const entry of conversionReport) {
  console.log(entry);
}
console.log("Valid numeric data:", validNumericData);
console.log("Invalid numeric data:", invalidNumericData);
