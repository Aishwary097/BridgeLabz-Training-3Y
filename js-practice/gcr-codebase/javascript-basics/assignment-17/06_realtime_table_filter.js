"use strict";

function mountStudentTableFilter() {
  const students = [
    { name: "Aarav Sharma", branch: "Computer Science", cgpa: 8.7 },
    { name: "Diya Patel", branch: "Electronics", cgpa: 9.1 },
    { name: "Kabir Singh", branch: "Computer Science", cgpa: 7.9 },
    { name: "Meera Gupta", branch: "Mechanical", cgpa: 8.4 },
    { name: "Ishaan Verma", branch: "Information Technology", cgpa: 8.9 }
  ];
  const style = document.createElement("style");
  style.textContent = ".student-table-app{max-width:780px;margin:40px auto;padding:28px;border:1px solid #dce3eb;border-radius:16px;font:16px/1.5 Arial,sans-serif;box-shadow:0 12px 36px #152c4515}.student-table-app input{box-sizing:border-box;width:100%;padding:12px;border:1px solid #cbd5e1;border-radius:8px}.student-table-app table{width:100%;margin-top:18px;border-collapse:collapse;text-align:left}.student-table-app th,.student-table-app td{padding:12px;border-bottom:1px solid #e6eaf0}.student-table-app th{background:#edf3fa}.no-results{color:#a32a38}";
  document.head.append(style);

  const root = document.createElement("main");
  root.className = "student-table-app";
  root.innerHTML = `<h1>Student Directory</h1><label>Search students<input type="search" aria-label="Search by name, branch, or CGPA" placeholder="Search name, branch, or CGPA"></label><table><thead><tr><th>Name</th><th>Branch</th><th>CGPA</th></tr></thead><tbody></tbody></table><p class="no-results" aria-live="polite" hidden>No results found</p>`;
  document.body.append(root);

  const body = root.querySelector("tbody");
  const search = root.querySelector("input");
  const noResults = root.querySelector(".no-results");

  function renderRows(query = "") {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = students.filter((student) =>
      `${student.name} ${student.branch} ${student.cgpa}`.toLowerCase().includes(normalizedQuery)
    );

    body.replaceChildren();
    for (const student of matches) {
      const row = document.createElement("tr");
      for (const value of [student.name, student.branch, student.cgpa]) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      }
      body.append(row);
    }
    noResults.hidden = matches.length > 0;
  }

  search.addEventListener("input", () => renderRows(search.value));
  renderRows();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountStudentTableFilter, { once: true });
} else {
  mountStudentTableFilter();
}
