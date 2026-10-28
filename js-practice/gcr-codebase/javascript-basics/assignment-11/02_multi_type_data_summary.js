const userEntries = [
  { label: "Name", value: "Aishwary Agrawal" },
  { label: "Year", value: 3 },
  { label: "Currently enrolled", value: true },
  { label: "Subjects", value: ["HTML", "CSS", "JavaScript"] },
  { label: "University", value: { name: "GLA University", city: "Mathura" } },
  { label: "Middle name", value: null },
  { label: "Optional note", value: undefined }
];

const dataSummary = userEntries.map(({ label, value }) => {
  let type;

  if (value === null) {
    type = "null";
  } else if (Array.isArray(value)) {
    type = "array";
  } else {
    type = typeof value;
  }

  return { label, value, type };
});

console.table(dataSummary);
