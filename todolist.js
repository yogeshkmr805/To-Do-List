arr = [];
let tblbdy = document.getElementById("ram");
addbtn = document.getElementById("addbt");
addbtn.addEventListener("click", () => {
    a = document.getElementById("todo").value;
    b = document.getElementById("desc").value;
    if (localStorage.getItem("obj") == null) {
        arr.push([a, b]);
        localStorage.setItem("obj", JSON.stringify(arr));

    } else {
        str = localStorage.getItem("obj");
        arr = JSON.parse(str);
        arr.push([a, b]);
        localStorage.setItem("obj", JSON.stringify(arr));
    }


    let str1 = "";
    arr.forEach((elem, ind) => {
        str1 += `<tr>  
        <th scope = "row"> ${ind+1}</th> 
        <td>${elem[0]} </td> 
        <td>${elem[1]} </td> 
        <td> <button type="button" class = "btn btn-danger" onclick="deletee(${ind})"> Delete </button></td>
        </tr>`;


    });

    tblbdy.innerHTML = str1;

});



removee = () => {
    let con = confirm("Do you want to Empty your List?");
    if (con) {

        localStorage.removeItem("obj");
        arr = [];
        tblbdy.innerHTML = "<td colspan=\"5\"> <b>Your List is Empty!!!</b></td>";
        document.getElementById("popup").innerHTML =
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
             Your List is Empty NOW<button type="button" class="btn-close" 
             data-bs-dismiss="alert" aria-label="Close"></button><div>`;
    }

}

deletee = (index) => {
    ety = index + 1;
    alert("Do you want to delete List No. " + Number(ety) + " ?");

    str = localStorage.getItem("obj");
    arr = JSON.parse(str);
    arr.splice(index, 1);
    localStorage.setItem("obj", JSON.stringify(arr));

    let str3 = "";
    arr.forEach((element, index) => {
        str3 += `<tr>  
        <th scope = "row"> ${index+1}</th> 
        <td>${element[0]} </td> 
        <td>${element[1]} </td> 
        <td> <button type="button" class = "btn btn-danger" onclick="deletee(${index})"> Delete </button></td>
        </tr>`;


    });

    if (arr.length == 0) {
        removee();
    } else {
        tblbdy.innerHTML = str3;
    }

}