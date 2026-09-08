document.getElementById("resultForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    let mark4 = Number(document.getElementById("mark4").value);
    let mark5 = Number(document.getElementById("mark5").value);
    let mark6 = Number(document.getElementById("mark6").value);
    let total = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;
    let percentage = total / 6;
    let grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else if (percentage >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    let result;
    if (mark1 >= 35 && mark2 >= 35 && mark3 >= 35 && mark4 >= 35 && mark5 >= 35 && mark6 >= 35) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <table class="result-table">
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Grade</th>
                <th>Result</th>
            </tr>
            <tr>
                <td>${name}</td>
                <td>${roll}</td>
                <td>${total}</td>
                <td>${percentage.toFixed(2)}%</td>
                <td>${grade}</td>
                <td>${result}</td>
            </tr>
        </table>
    `;
});