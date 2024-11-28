// Result data
const results = [
    { name: "Sahnto", roll: 1, result: "failed 1 subject, point: 4.67", group: "science" },
    { name: "Leon", roll: 2, result: "passed, point: 5.00", group: "humanities" },
    { name: "Midul", roll: 3, result: "failed 6 subject, point: 2.01", group: "business studies" },
    { name: "Shejan", roll: 4, result: "passed, point: 5.20", group: "science" },
    { name: "Zahid", roll: 5, result: "failed 2 subject, point: 1.90", group: "science" },
];

function showResult() {
    const roll = document.getElementById("roll").value;
    const group = document.getElementById("group").value.toLowerCase(); // Get selected group
    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = ""; // Clear previous result

    // Find student by roll number and group
    const student = results.find((s) => s.roll == roll && s.group.toLowerCase() === group);

    if (!student) {
        resultDisplay.innerHTML = "<p style='color: red;'>Result not found! Please check the Roll Number and Group.</p>";
        return;
    }

    // Display result
    let message = `<p><strong>Name:</strong> ${student.name}</p>
                   <p><strong>Roll:</strong> ${student.roll}</p>
                   <p><strong>Group:</strong> ${student.group}</p>
                   <p><strong>Result:</strong> ${student.result}</p>`;

    // Add customized message based on result
    if (student.result.includes("passed")) {
        message += `<p style="color: green;">Congratulations! Keep up the good work!</p>`;
    } else {
        const failedSubjects = parseInt(student.result.match(/\d+/)[0]);
        if (failedSubjects >= 1 && failedSubjects <= 3) {
            message += `<p style="color: orange;">You're close! Focus more on your weak areas for better results next time.</p>`;
        } else if (failedSubjects >= 4 && failedSubjects <= 6) {
            message += `<p style="color: red;">Please inform your parents to contact the school for further guidance.</p>`;
        } else if (failedSubjects > 6) {
            message += `<p style="color: red;">Don't give up! Work harder and prepare well for the next exam.</p>`;
        }
    }

    resultDisplay.innerHTML = message;
}
