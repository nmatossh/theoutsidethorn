        // Array de colores
        const colors = ["#FF0000", "#0000FF", "#00FF00", "#FFFF00"];
        // Función para cambiar el color de fondo de la tabla
        function changeTableBackgroundColor() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById('main').style.backgroundColor = randomColor;
        }

        // Cambiar el color de fondo de la tabla cada 2 segundos
        setInterval(changeTableBackgroundColor, 100);
