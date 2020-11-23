students_array = [] ;

function submit()
{
    var name1 = document.getElementById("student_1") .value;
    var name2 = document.getElementById("student_2") .value;
    var name3 = document.getElementById("student_3") .value;
    var name4 = document.getElementById("student_4") .value;
   
    students_array.push(name1);
    students_array.push(name2);
    students_array.push(name3);
    students_array.push(name4);
    
    
    document.getElementById("display_name") .innerHTML = students_array;
    "none";
    document.getElementById("submit button") .style.display = "none";
    document.getElementById("sort button") .style.display = "inline-block";
}
function sorting() { name_of_the_student_array.sort(); console.log(name_of_the_student_array); document.getElementById("display_name").innerHTML = name_of_the_student_array; }
