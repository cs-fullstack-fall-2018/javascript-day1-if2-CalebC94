var gradeInput = parseInt(prompt("Enter your grade"));

if (gradeInput > 100){
    alert("Error")
}
if (gradeInput >= 90){
    alert("A")
}
else if (gradeInput >= 80){
    alert("B")
}
else if (gradeInput >= 70){
    alert("C")
}
else if (gradeInput >= 60){
    alert("D")
}
else if (gradeInput > 0){
    alert("F")
} else
    alert("Error")