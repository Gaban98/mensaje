document.addEventListener("DOMContentLoaded", function () {
    const message = "Melani Montealegre ...   ";
    const container = document.getElementById("message");

    // Añadir el poema de amor
    container.innerHTML = message;

    // Crear pétalos
    const petalsContainer = document.createElement('div');
    petalsContainer.className = 'petals-container';
    document.body.appendChild(petalsContainer);

    // Crear pétalos y animación de caída
    const numPetals = 50;
    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria en el ancho de la ventana
        petal.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio en la animación
        petalsContainer.appendChild(petal);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const poem = `Quiero que sepas
una cosa.

Tú sabes cómo es esto:
si miro
la luna de cristal, la rama roja
del lento otoño en mi ventana,
si toco
junto al fuego
la impalpable ceniza
o el arrugado cuerpo de la leña,
todo me lleva a ti,
como si todo lo que existe,
aromas, luz, metales,
fueran pequeños barcos que navegan
hacia las islas tuyas que me aguardan.

Ahora bien,
si poco a poco dejas de quererme
dejaré de quererte poco a poco.
Si de pronto
me olvidas
no me busques,
que ya te habré olvidado.

Si consideras largo y loco
el viento de banderas
que pasa por mi vida
y te decides
a dejarme a la orilla
del corazón en que tengo raíces,
piensa
que en ese día,
a esa hora
levantaré los brazos
y saldrán mis raíces
a buscar otra tierra.

Pero
si cada día,
cada hora
sientes que a mí estás destinada
con dulzura implacable.
Si cada día sube
una flor a tus labios a buscarme,
ay amor mío, ay mía,
en mí todo ese fuego se repite,
en mí nada se apaga ni se olvida,
mi amor se nutre de tu amor, amada,
y mientras vivas estará en tus brazos
sin salir de los míos.

TE AMO MELAMI MONTALEGRE `;

    const container = document.getElementById("message");

    let index = 0;

    function drawLetter() {
        if (index < poem.length) {
            const letter = poem[index];
            const span = document.createElement('span');
            span.textContent = letter;
            container.appendChild(span);

            index++;
            setTimeout(drawLetter, 100); // Ajusta el tiempo entre letras
        }
    }

    drawLetter();
});
