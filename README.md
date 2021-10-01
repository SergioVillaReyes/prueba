# Prueba para Aeromexico

Este proyecto es de prueba

# Arranque

Clone el repositorio y al iniciar instale todas las dependencias.

1.- Abra la terminal e inicie el proyecto de react(puerto 3000).

2.- En la misma carpeta del proyecto abra otra terminal y ponge el commando "startjson" que nos correra "json-server --watch src/api/hp-characters.json --port 5000", correra la api creada con json-server(puerto 5000).


# Funcionalidad

Tenemos una aplicación con tematica de Harry Potter las funciones se encuentran en:

Los botones que aligen el filtro de los personajes.
El menu superior que nos muestra los personajes que seleccionamos como favoritos.
En el mismo menu tenemos un modal para agregar personajes.

# Construcción

Diseño adaptativo como se nos indico en el look and feel.

Clases CSS distintivas de cada personaje para mostrar su color en especifico.

Los botones centrales hacen una llamada a la api, separando este archivo jsonen tres temas; personajes totales, personajes que estudian y personajes de staff.
Cada boton hace una llamada a su respectiva lista, el boton que muestra todos los personajes vivos se agrego un parametro get "?alive=true" para hacer el filtro.

En las cartas de los personajes tenemos un boton para agregar a favoritos se utilizo redux y al dar click manda  por este medio y crea la lista de favoritos, tiene el limite de 5 personajes y tambien para no poder repetirlos en caso de ya estar seleccionados.

El boton de agregar personaje nos abre un modal y en el insertmos los datos, si no llenamos todos los datos nos sale una alerta y no nos deja continuar.
