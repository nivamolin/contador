let count = 0; 

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// arr.forEach = Llama a una función callback específica para cada elemento del array que queremos iterar.

// evento.classList = classList nos muestra las clases del elemento HTML. 

// e.currentTarget = Identifica el target actual del evento (el elemento que se selecciona)

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count++;
        } else {
            count = 0
        }

        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red"
        }
        if(count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})


