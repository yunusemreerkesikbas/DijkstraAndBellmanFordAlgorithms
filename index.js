function dropdownButton() {
    let courses = document.getElementById("myDropdown")
    if (courses.style.display =="block") {
        courses.style.display = "none";
    }
    else{
        courses.style.display = "block"
    }
}