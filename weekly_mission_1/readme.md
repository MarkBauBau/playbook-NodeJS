# Weekly Mission 1

En esta carpeta se encuentran todos los ejemplos y actividades desarrollados a lo largo de la semana 1

- [Example0](https://github.com/MarkBauBau/playbook-NodeJS/blob/main/weekly_mission_1/hello.js). Para comprobar la correcta instalación del entorno se creó el archivo hello.js que contiene una impresión en la terminal.
- [Example1](https://github.com/MarkBauBau/playbook-NodeJS/tree/main/weekly_mission_1/example1). En la carpeta example 1 se encuentra main.js que explica los **Objetos de JavaScript** con sus propiedades y variables locales y públicas.
- [Example2](https://github.com/MarkBauBau/playbook-NodeJS/tree/main/weekly_mission_1/example2). En la carpeta example 2 se explica la **Exportación de funciones entre scripts con CommonJS**, con los siguientes archivos: 
    - **logger.js:** Contiene las funciones **info** y **verbose** que serán exportadas
    - **main.js:** Crea un objeto de logger y llama a sus funciones.
- [Example3](https://github.com/MarkBauBau/playbook-NodeJS/tree/main/weekly_mission_1/example3). En la carpeta example 3 se explican las **Diferentes formas de exportar funciones**, con los siguientes archivos: 
    - **logger_1.js:** Contiene la declaración y exportación de manera sencilla de una función.
    - **logger_2.js:** Contiene la exportación del contenido de una función con el nombre **verbose**.
    - **main.js:** Crea objetos de logger_1 y logger_2 llamando a sus respectivas funciones, la primera de manera sencilla y la segunda con el nombre de la función **verbose**
- [Example4](https://github.com/MarkBauBau/playbook-NodeJS/tree/main/weekly_mission_1/example4). En la carpeta example4 se encuentra el primer ejemplo de **Clases y objetos**, destacando que en JavaScript todo son objetos, por lo que para incluir el paradigma de Programación Orientada a Objetos se simula la creación de una clase dentro de un archivo de JavaScript. La carpeta contiene los siguientes archivos:
    - **logger.js:** Contiene la "clase" logger con su constructor y los métodos **_info_** y **_verbose_** que reciben como parámetro un mensaje.
    - **main.js:** Contiene la instancia de dos objetos de la clase **logger**, cada uno llamando a las respectivas funciones **_info_** y **_verbose_**
- [Example5](https://github.com/MarkBauBau/playbook-NodeJS/tree/main/weekly_mission_1/example5). En la carpeta example5 se encuentra el segundo ejemplo de **Clases y objetos**, con los siguientes archivos.
    - **logger.js:** Contiene la "clase" logger con su constructor, que cuenta con los atributos **_count_** y **_name_**, recibiendo solo como parámetro el name. Además cuenta con el método **_log_** que recibe como parámetro un mensaje, realiza un aumento en **_count_** y despliega un mensaje en consola. Cabe destacar que al exportar la clase se instancia un objeto que contiene un **_name_** por DEFAULT.
    - **main.js:** Contiene la instancia de dos objetos de la clase logger. El primero utiliza el valor por default para el constructor y llama el método **_log_**, mientras que el segundo le asigna una nuevo **_name_** al constructor y llama el método **_log_**

