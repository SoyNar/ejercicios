
document.getElementById("change").textContent = "Bye";
document.getElementById("red").style.color = "orange";

const create = document.createElement("h4");
create.textContent = "Haga click Aqui";
document.body.appendChild(create);


create.addEventListener('click', () => {
    create.style.color = "brown";
})