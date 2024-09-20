import * as fun from "./functions.js";

export const questions = [
    {
      question: "¿Qué es un “div” en HTML?",
      possibleAnswers: ["Un tipo de enlace que dirige a otra página web", "Un elemento en línea que se usa para añadir imágenes", "Un contenedor de bloque utilizado para agrupar y dar formato a otros elementos", "Un atributo que se usa para agregar estilos CSS"],
      correctAnswer: "Un contenedor de bloque utilizado para agrupar y dar formato a otros elementos",
    },
    {
      question: "¿Cómo se imprime un \"Hola Mundo\" en Java?",
      possibleAnswers: ["echo \"Hola Mundo\";", "System.out.println(\"Hola Mundo\");", "print(\"Hola Mundo\");", "Console.WriteLine(\"Hola Mundo\");"],
      correctAnswer: "System.out.println(\"Hola Mundo\");",
    },
    {
      question: "¿Qué significa que un lenguaje de programación sea tipado?",
      possibleAnswers: ["Que el lenguaje solo permite tipos de datos enteros", "En un lenguaje que se requiere que definamos el tipo de dato específico de las variables y expresiones que vamos a utilizar", "Que el lenguaje solo funciona en sistemas operativos de 64 bits", "Que el lenguaje convierte automáticamente todas las variables a tipo cadena"],
      correctAnswer: "En un lenguaje que se requiere que definamos el tipo de dato específico de las variables y expresiones que vamos a utilizar",
    },
    {
      question: "¿Cuál es el lenguaje de programación más seguro y utilizado por los bancos?",
      possibleAnswers: ["Python", "JavaScript", "COBOL", "Java"],
      correctAnswer: "Java",
    },
    {
      question: "¿Qué utilizamos para declarar una función en Python?",
      possibleAnswers: ["function", "def", "func", "declare"],
      correctAnswer: "def",
    },
    {
      question: "¿Qué lenguaje de programación se utiliza para el lado del servidor?",
      possibleAnswers: ["HTML", "CSS", "JavaScript", "PHP"],
      correctAnswer: "PHP",
    },
    {
      question: "¿Qué es la anidación en programación?",
      possibleAnswers: ["El proceso de compilar un programa en diferentes etapas", "La práctica de ejecutar múltiples programas al mismo tiempo", "La repetición de bucles dentro de otros bucles", "La conexión de varios servidores para trabajar en paralelo"],
      correctAnswer: "La repetición de bucles dentro de otros bucles",
    },
   {
      question: "¿Qué es un lenguaje de alto nivel en programación?",
      possibleAnswers: ["Un lenguaje que está diseñado para interactuar directamente con el hardware del sistema", "Un lenguaje que proporciona una sintaxis cercana al lenguaje humano y abstrae detalles del hardware para facilitar la programación", "Un lenguaje que se utiliza únicamente para realizar cálculos matemáticos complejos", "Un lenguaje que se usa para diseñar redes y comunicaciones entre servidores"],
      correctAnswer: "Un lenguaje que proporciona una sintaxis cercana al lenguaje humano y abstrae detalles del hardware para facilitar la programación",
    },
    {
      question: "¿Cuál fue el primer lenguaje de programación?",
      possibleAnswers: ["Python", "COBOL", "Lenguaje Emsamblador", "Fortran"],
      correctAnswer: "Fortran",
    },
    {
      question: "¿Cuál de estos es un IDE para programación?",
      possibleAnswers: ["Visual Studio Code", "Eclipse", "IntelliJ IDEA", "Sublime Text", "Todas son correctas"],
      correctAnswer: "Todas son correctas",
    },
    {
      question: "¿Qué es un IDE en programación?",
      possibleAnswers: ["Un tipo de archivo que almacena el código fuente", "Es una herramienta de software que proporciona un entorno de programación completo para los desarrolladores de software", "Un lenguaje de programación específico para el desarrollo web", "Un protocolo de red utilizado para transferir datos entre servidores"],
      correctAnswer: "Es una herramienta de software que proporciona un entorno de programación completo para los desarrolladores de software",
    },
    {
      question: "¿Qué es un preprocesador de CSS?",
      possibleAnswers: ["Una herramienta que convierte CSS en HTML", "Un software que compila código CSS a un lenguaje de programación de bajo nivel", "Una herramienta que extiende las funcionalidades de CSS, añadiendo características como variables, funciones, mixins y anidación", "Un programa que optimiza imágenes para mejorar el rendimiento web"],
      correctAnswer: "Una herramienta que extiende las funcionalidades de CSS, añadiendo características como variables, funciones, mixins y anidación",
    },
    {
      question: "¿En qué año se desarrolló C++?",
      possibleAnswers: ["1972", "1983", "1991", "1995"],
      correctAnswer: "1983",
    },
    {
      question: "¿Cuál es el lenguaje de programación más utilizado para el desarrollo de videojuegos?",
      possibleAnswers: ["Python", "JavaScript", "C++", "Ruby"],
      correctAnswer: "C++",
    },
    {
      question: "¿Cuál fue el primer virus informático de la historia?",
      possibleAnswers: ["ILOVEYOU", "Melissa", "Creeper", "Michelangelo"],
      correctAnswer: "Creeper",
    },
    {
      question: "¿Cuál fue el primer antivirus de la historia y quién lo creó?",
      possibleAnswers: ["McAfee, creado por John McAfee", "Norton, creado por Peter Norton", "Reaper, creado por Ray Tomlinson", "Avast, creado por Eduard Kučera y Pavel Baudiš"],
      correctAnswer: "Reaper, creado por Ray Tomlinson",
    },
    {
      question: "¿Qué es un certificado SSL y qué hace?",
      possibleAnswers: ["Un archivo que almacena contraseñas de usuarios", "Un protocolo para la transferencia de archivos grandes entre servidores", "Un certificado digital que cifra la comunicación entre el servidor y el navegador para asegurar la transferencia de datos", "Un software que protege los sistemas operativos contra virus y malware"],
      correctAnswer: "Un certificado digital que cifra la comunicación entre el servidor y el navegador para asegurar la transferencia de datos",
    },
    {
      question: "¿Qué es un framework en programación?",
      possibleAnswers: ["Un lenguaje de programación usado para crear aplicaciones web", "Infraestructura predefinida que proporciona un conjunto de herramientas, bibliotecas y patrones de diseño para facilitar el desarrollo de software o páginas web", "Un editor de texto que facilita la creación de código", "Un entorno para diseñar interfaces gráficas de usuario"],
      correctAnswer: "Infraestructura predefinida que proporciona un conjunto de herramientas, bibliotecas y patrones de diseño para facilitar el desarrollo de software o páginas web",
    },
    {
      question: "¿Qué sucede cuando una columna se establece en INCREMENTO AUTOMÁTICO y alcanza su valor máximo en la tabla en MySql?",
      possibleAnswers: ["La columna se reinicia automáticamente al valor inicial", "Se genera un error y no se pueden insertar más filas hasta que se ajuste el valor", "La columna comienza a contar desde números negativos", "El valor máximo se duplica para permitir más inserciones"],
      correctAnswer: "Se genera un error y no se pueden insertar más filas hasta que se ajuste el valor",
    },
    {
      question: "¿Qué es la depuración en programación?",
      possibleAnswers: ["El proceso de optimización del código para mejorar su rendimiento", "La revisión de la estructura visual de un programa para mejorar su apariencia", "El proceso de identificar y corregir errores o bugs en el código", "La implementación de nuevas características en un software ya existente"],
      correctAnswer: "El proceso de identificar y corregir errores o bugs en el código",
    },
    {
      question: "¿Qué es un algoritmo de burbujas en programación?",
      possibleAnswers: ["Un método para crear gráficos interactivos en tiempo real", "Un algoritmo de ordenamiento que compara pares de elementos adyacentes y los intercambia si están en el orden incorrecto", "Un algoritmo de búsqueda rápida en grandes bases de datos", "Un proceso para optimizar el uso de memoria en aplicaciones"],
      correctAnswer: "Un algoritmo de ordenamiento que compara pares de elementos adyacentes y los intercambia si están en el orden incorrecto",
    },
    {
      question: "¿Qué es un lenguaje de bajo nivel en programación?",
      possibleAnswers: ["Un lenguaje que proporciona una abstracción alta y es fácil de aprender", "Un lenguaje que está más cerca del hardware y permite un control detallado sobre los recursos del sistema", "Un lenguaje utilizado exclusivamente para diseñar interfaces de usuario", "Un lenguaje que se utiliza para crear gráficos y animaciones"],
      correctAnswer: "Un lenguaje que está más cerca del hardware y permite un control detallado sobre los recursos del sistema",
    },
    {
      question: "¿Qué hechos relevantes ocurrieron durante la primera generación de la informática?",
      possibleAnswers: ["Se crearon los microprocesadores y se introdujo el sistema operativo UNIX", "Se utilizaron válvulas de vacío y se construyeron computadoras como el ENIAC para cálculos balísticos", "Se desarrollaron los lenguajes de programación orientados a objetos y las redes de área local", "Se inventó el microprocesador Intel 4004 y se popularizaron las computadoras personales"],
      correctAnswer: "Se utilizaron válvulas de vacío y se construyeron computadoras como el ENIAC para cálculos balísticos",
    },
    {
      question: "¿Qué hechos relevantes ocurrieron durante la segunda generación de la informática?",
      possibleAnswers: ["Se desarrolló el primer sistema operativo real, IBM OS/360", "Se desarrolló el circuito integrado y se redujo el tamaño de las computadoras", "Se creó el microprocesador y se introdujeron las computadoras personales", "Se popularizó el uso de la inteligencia artificial en sistemas informáticos"],
      correctAnswer: "Se desarrolló el primer sistema operativo real, IBM OS/360",
    },
    {
      question: "¿Qué hechos relevantes ocurrieron durante la tercera generación de la informática?",
      possibleAnswers: ["Se inventó el microprocesador y las computadoras personales", "Se desarrolló el circuito integrado, lo que redujo el tamaño y costo de las computadoras", "Se introdujo el uso de válvulas de vacío y tarjetas perforadas", "Se crearon los primeros sistemas expertos de inteligencia artificial"],
      correctAnswer: "Se desarrolló el circuito integrado, lo que redujo el tamaño y costo de las computadoras",
    },
    {
      question: "¿Qué hechos relevantes ocurrieron durante la cuarta generación de la informática?",
      possibleAnswers: ["Se utilizó el transistor para mejorar la velocidad y eficiencia de las computadoras", "Se desarrolló el microprocesador, lo que permitió la creación de computadoras personales más compactas", "Se introdujo el circuito integrado y se creó el sistema operativo UNIX", "Se inventaron los sistemas expertos y el procesamiento paralelo"],
      correctAnswer: "Se desarrolló el microprocesador, lo que permitió la creación de computadoras personales más compactas",
    },
    {
      question: "¿Qué hechos relevantes ocurrieron durante la quinta generación de la informática?",
      possibleAnswers: ["Se desarrollaron los primeros lenguajes de programación de alto nivel como COBOL y FORTRAN", "Se avanzó en la inteligencia artificial y se introdujeron los sistemas expertos para emular el conocimiento humano", "Se crearon las primeras computadoras basadas en válvulas de vacío y tarjetas perforadas", "Se desarrolló el microprocesador y se introdujeron las primeras computadoras personales"],
      correctAnswer: "Se avanzó en la inteligencia artificial y se introdujeron los sistemas expertos para emular el conocimiento humano",
    },
    {
      question: "¿Qué se espera de la sexta generación de la informática en el futuro?",
      possibleAnswers: ["La creación de sistemas operativos más simples y el aumento del tamaño físico de las computadoras", "Avances en inteligencia artificial avanzada, cómputo cuántico y redes neuronales artificiales, así como mejoras en el procesamiento de datos y la interacción humano-máquina", "La introducción de válvulas de vacío en lugar de circuitos integrados y la creación de computadoras más grandes", "El desarrollo de software exclusivamente para cálculos científicos y aplicaciones militares"],
      correctAnswer: "Avances en inteligencia artificial avanzada, cómputo cuántico y redes neuronales artificiales, así como mejoras en el procesamiento de datos y la interacción humano-máquina",
    },
    {
      question: "¿Qué es una IA (Inteligencia Artificial)?",
      possibleAnswers: ["Un programa que solo puede realizar cálculos matemáticos simples", "Un sistema que emula la inteligencia humana, capaz de aprender, razonar y resolver problemas", "Un lenguaje de programación utilizado para desarrollar aplicaciones web", "Un hardware diseñado para mejorar la velocidad de procesamiento de las computadoras"],
      correctAnswer: "Un sistema que emula la inteligencia humana, capaz de aprender, razonar y resolver problemas",
    },
    {
      question: "¿Cuál es el límite de una IA (Inteligencia Artificial)?",
      possibleAnswers: ["La IA puede reemplazar completamente a los humanos en todas las áreas del conocimiento", "La IA está limitada por la calidad de los datos que recibe y la complejidad de las tareas", "La IA no tiene limitaciones y puede realizar cualquier tarea sin errores", "La IA solo puede realizar cálculos básicos y no puede aprender de la experiencia"],
      correctAnswer: "La IA está limitada por la calidad de los datos que recibe y la complejidad de las tareas",
    },
    {
      question: "¿Cuál de las siguientes líneas de código en Python incrementará el valor de una variable llamada contador en 1?",
      possibleAnswers: ["contador = contador + 1", "contador++", "contador = contador - 1", "contador * 1"],
      correctAnswer: "contador = contador + 1",
    },
    {
      question: "En CSS, ¿cuál es la propiedad utilizada para cambiar el color de fondo de un elemento?",
      possibleAnswers: ["text-color", "background-color", "font-color", "color"],
      correctAnswer: "background-color",
    },
    {
      question: "En HTML, ¿cuál es la etiqueta utilizada para crear un encabezado de nivel 2?",
      possibleAnswers: [fun.replaceText("<h1>"), fun.replaceText("<h2>"), fun.replaceText("<header>"), fun.replaceText("<heading>")],
      correctAnswer: "<h2>",
    },
    {
      question: "¿Qué es la recursividad en programación?",
      possibleAnswers: ["Un bucle infinito", "Una función que se llama a sí misma", "Un tipo de variable", "Una estructura de control"],
      correctAnswer: "Una función que se llama a sí misma",
    },
    {
      question: "¿Cuál de los siguientes es un sistema operativo?",
      possibleAnswers: ["Microsoft Word", "Google Chrome", "Windows 10", "Adobe Photoshop"],
      correctAnswer: "Windows 10",
    },
    {
      question: "¿Cuál de las siguientes unidades de almacenamiento tiene la mayor capacidad?",
      possibleAnswers: ["Gigabyte", "Terabyte", "Megabyte", "Kilobyte"],
      correctAnswer: "Terabyte",
    },
    {
      question: "¿Quién es considerado el \"padre de la computadora moderna\"?",
      possibleAnswers: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
      correctAnswer: "Alan Turing",
    },
    {
      question: "¿Cuál de los siguientes es un ejemplo de ataque de ingeniería social?",
      possibleAnswers: ["Phishing", "Malware", "DDoS", "Firewall"],
      correctAnswer: "Phishing",
    },
    {
      question: "¿Cuál de los siguientes protocolos se utiliza para asegurar la comunicación en la web?",
      possibleAnswers: ["FTP", "HTTP", "HTTPS", "SMTP"],
      correctAnswer: "HTTPS",
    },
    {
      question: "¿Qué es un firewall?",
      possibleAnswers: ["Un software que protege contra virus", "Un dispositivo de hardware o software que filtra el tráfico de red", "Un protocolo de encriptación", "Un tipo de ataque cibernético"],
      correctAnswer: "Un dispositivo de hardware o software que filtra el tráfico de red",
    },
    {
      question: "¿Cuál de los siguientes sistemas operativos es de código abierto?",
      possibleAnswers: ["Windows", "macOS", "Linux", "iOS"],
      correctAnswer: "Linux",
    },
    {
      question: "¿Cuál es la función principal de la criptografía?",
      possibleAnswers: ["Romper contraseñas", "Codificar y decodificar información", "Aumentar la velocidad de procesamiento", "Crear virus informáticos"],
      correctAnswer: "Codificar y decodificar información",
    },
    {
      question: "¿Cuál de las siguientes sentencias SQL se utiliza para insertar un nuevo registro en una tabla?",
      possibleAnswers: ["SELECT", "UPDATE", "DELETE", "INSERT"],
      correctAnswer: "INSERT",
    },
    {
      question: "¿Qué es un índice en una base de datos?",
      possibleAnswers: ["Un archivo de datos", "Una estructura de datos que acelera la búsqueda de registros", "Una restricción de integridad", "Un tipo de clave"],
      correctAnswer: "Una estructura de datos que acelera la búsqueda de registros",
    },
    {
      question: "¿Cuál es el sistema operativo de código abierto más popular?",
      possibleAnswers: ["Windows", "macOS", "Linux", "iOS"],
      correctAnswer: "Linux",
    },
    {
      question: "¿Qué se utiliza para crear un formulario en HTML?",
      possibleAnswers: [fun.replaceText("<div>"), fun.replaceText("<section>"), fun.replaceText("<form>"), fun.replaceText("<table>")],
      correctAnswer: "<form>",
    
    },
    {
      question: "¿Qué es la ingeniería social?",
      possibleAnswers: ["Un tipo de ataque que explota la confianza y el comportamiento humano para obtener información o acceso no autorizado", "Una técnica de programación para optimizar el rendimiento del software", "Un método de encriptación utilizado para proteger la comunicación en redes", "Un proceso para desarrollar hardware de computadora"],
      correctAnswer: "Un tipo de ataque que explota la confianza y el comportamiento humano para obtener información o acceso no autorizado",
    },
    {
      question: "¿Qué es una inyección SQL?",
      possibleAnswers: ["Un ataque que explota vulnerabilidades en una aplicación web para insertar o manipular consultas SQL", "Un método para mejorar el rendimiento de las bases de datos mediante el ajuste de consultas", "Un tipo de encriptación para proteger la información en una base de datos", "Un proceso para optimizar la estructura de una base de datos"],
      correctAnswer: "Un ataque que explota vulnerabilidades en una aplicación web para insertar o manipular consultas SQL",
    },
    {
      question: "¿En qué año se fundó la empresa IBM (International Business Machines Corporation)?",
      possibleAnswers: ["1911", "1936", "1950", "1975"],
      correctAnswer: "1911",
    },
    {
      question: "¿Cuál fue el sistema operativo de Windows más utilizado?",
      possibleAnswers: ["Windows XP", "Windows 7", "Windows 11", "Windows 10"],
      correctAnswer: "Windows 7",
    },
    {
      question: "¿Qué es una librería en un lenguaje de programación?",
      possibleAnswers: ["Un conjunto de archivos de código reutilizable", "Un programa independiente que se ejecuta por sí solo", "Un lenguaje de programación adicional", "Una herramienta para compilar código"],
      correctAnswer: "Un conjunto de archivos de código reutilizable",
    },
    {
      question: "¿Hasta qué velocidad alcanza un cable de red UTP-6?",
      possibleAnswers: ["100 Mbps", "1 Gbps", "10 Gbps", "100 Gbps"],
      correctAnswer: "10 Gbps",
    },
    {
      question: "¿Qué es el protocolo IEEE 802?1Q, también conocido como dot1Q?",
      possibleAnswers: ["Un protocolo para asegurar las comunicaciones en redes inalámbricas", "Mecanismo que permita a múltiples redes compartir de forma transparente el mismo medio físico, sin problemas de interferencia entre ellas (Trunking)", "Un protocolo de encriptación utilizado en redes locales", "Un sistema para gestionar la asignación de direcciones IP"],
      correctAnswer: "Mecanismo que permita a múltiples redes compartir de forma transparente el mismo medio físico, sin problemas de interferencia entre ellas (Trunking)",
    },
    {
      question: "¿Cuál es el modelo de referencia utilizado comúnmente para comprender las redes de computadoras?",
      possibleAnswers: ["Modelo TCP/IP", "Modelo OSI", "Modelo HTTP", "Modelo DNS"],
      correctAnswer: "Modelo OSI",
    },
    {
      question: "¿Cuál es el protocolo comúnmente utilizado para la transferencia segura de archivos grandes entre cliente y servidor?",
      possibleAnswers: ["FTP", "HTTP", "SFTP", "SMTP"],
      correctAnswer: "SFTP",
    },
    {
      question: "¿Qué tipo de cable se utiliza comúnmente para las redes Ethernet?",
      possibleAnswers: ["Coaxial", "Fibra óptica", "Cable de par trenzado", "HDMI"],
      correctAnswer: "Cable de par trenzado",
    },
    {
      question: "¿Cuál de los siguientes NO es un algoritmo?",
      possibleAnswers: ["QuickSort", "MergeSort", "MikhailNone", "BubbleSort"],
      correctAnswer: "MikhailNone",
    },
    {
      question: "¿Cuál de estas no es una marca de fuente de poder?",
      possibleAnswers: ["Corsair", "EVGA", "MSI", "Nvidia"],
      correctAnswer: "Nvidia",
    },
    {
      question: "¿Qué significa la sigla RAM?",
      possibleAnswers: ["Random Access Memory", "Readable Active Memory", "Rapid Action Module", "Rewritable Archive Memory"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "¿Cuál de las siguientes opciones NO es un dispositivo de entrada?",
      possibleAnswers: ["Teclado", "Ratón", "Monitor", "Escáner"],
      correctAnswer: "Monitor",
    },
    {
      question: "¿Cuál de estos no es un dispositivo de salida?",
      possibleAnswers: ["Impresora", "Altavoces", "Monitor", "Teclado"],
      correctAnswer: "Teclado",
    },
    {
      question: "¿Cuál fue el primer chatbot?",
      possibleAnswers: ["Siri", "ELIZA", "Watson", "Alexa"],
      correctAnswer: "ELIZA",
    },
    {
      question: "¿Qué ocurre si una fuente de poder no abastece todo el hardware de un setup informático?",
      possibleAnswers: ["El sistema operativo se corrompe", "El hardware deja de funcionar correctamente o el sistema puede apagarse", "Los datos se eliminan automáticamente", "La velocidad de procesamiento se incrementa"],
      correctAnswer: "El hardware deja de funcionar correctamente o el sistema puede apagarse",
    },
    {
      question: "¿Qué significa la sigla ROM?",
      possibleAnswers: ["Read-Only Memory", "Random Operating Module", "Rewritable Output Memory", "Rapid Operating Memory"],
      correctAnswer: "Read-Only Memory",
    },
    {
      question: "¿Qué es un diccionario de datos?",
      possibleAnswers: ["Una herramienta para realizar cálculos matemáticos", "Un documento que describe los campos y estructuras de una base de datos", "Un programa que gestiona la seguridad de una red", "Un tipo de dispositivo de almacenamiento"],
      correctAnswer: "Un documento que describe los campos y estructuras de una base de datos",
    },
    {
      question: "¿Qué componente de hardware almacena datos a largo plazo, incluyendo el sistema operativo y los archivos?",
      possibleAnswers: ["Memoria RAM", "Disco Duro", "Tarjeta de Video (GPU)", "CPU"],
      correctAnswer: "Disco Duro",
    },
    {
      question: "¿Cuál de las siguientes tarjetas se encarga de administrar el sonido en una computadora?",
      possibleAnswers: ["GPU", "CPU", "Tarjeta de Sonido", "Tarjeta de Red"],
      correctAnswer: "Tarjeta de Sonido",
    },
    {
      question: "¿Cuál de los siguientes periféricos se utiliza para ingresar datos en una computadora?",
      possibleAnswers: ["Impresora", "Monitor", "Teclado", "Unidad de Almacenamiento Externo"],
      correctAnswer: "Teclado",
    },
    {
      question: "¿Cuál de las siguientes tecnologías de pantalla utiliza cristales líquidos para producir imágenes?",
      possibleAnswers: ["CRT", "OLED", "Plasma", "CRT"],
      correctAnswer: "OLED",
    },
    {
      question: "¿Qué es un firmware?",
      possibleAnswers: ["Un tipo de software que se instala en el sistema operativo", "Un tipo de memoria volátil utilizada para almacenar datos temporales", "Un software especializado que está integrado en un hardware para controlar su funcionamiento", "Un protocolo de comunicación de red"],
      correctAnswer: "Un software especializado que está integrado en un hardware para controlar su funcionamiento",
    },
    {
      question: "¿Cuál es un firewall?",
      possibleAnswers: ["Un software que protege contra virus", "Un dispositivo que filtra el tráfico de red para prevenir accesos no autorizados", "Un protocolo de encriptación de datos", "Un tipo de ataque cibernético"],
      correctAnswer: "Un dispositivo que filtra el tráfico de red para prevenir accesos no autorizados",
    },
    {
      question: "¿Qué es un ransomware?",
      possibleAnswers: ["Un tipo de virus que se propaga a través de correos electrónicos", "Un software que cifra los datos de una víctima y exige un rescate para liberarlos", "Un programa diseñado para mejorar el rendimiento del sistema", "Un sistema de autenticación multifactor"],
      correctAnswer: "Un software que cifra los datos de una víctima y exige un rescate para liberarlos",
    },
    {
      question: "¿Cuál de estos es un antivirus para Linux?",
      possibleAnswers: ["Norton", "Avast", "McAfee", "Kaspersky"],
      correctAnswer: "Avast",
    },
    {
      question: "¿Qué es un diagrama de flujo?",
      possibleAnswers: ["Un gráfico que muestra la relación entre diferentes tablas en una base de datos", "Un esquema visual que representa los pasos secuenciales en un proceso o algoritmo", "Un documento que describe la estructura de un programa de software", "Un tipo de análisis utilizado para optimizar el rendimiento de un sistema"],
      correctAnswer: "Un esquema visual que representa los pasos secuenciales en un proceso o algoritmo",
    },
    {
      question: "¿Cuál de estos no es una palabra reservada en Java?",
      possibleAnswers: ["class", "static", "function", "import"],
      correctAnswer: "function",
    },
    {
      question: "¿Qué son las variables de cadena?",
      possibleAnswers: ["Variables que almacenan valores numéricos con decimales", "Variables que contienen datos estructurados como arrays o listas", "Variables que almacenan secuencias de caracteres", "Variables que guardan direcciones de memoria"],
      correctAnswer: "Variables que almacenan secuencias de caracteres",
    },
    {
      question: "¿Qué es una memoria virtual?",
      possibleAnswers: ["Un tipo de memoria física instalada en el hardware del sistema", "Un sistema de almacenamiento en la nube para guardar archivos y datos", "Un método que utiliza el espacio en disco duro para ampliar la memoria RAM disponible", "Una técnica de compresión de datos utilizada para mejorar la velocidad de la CPU"],
      correctAnswer: "Un método que utiliza el espacio en disco duro para ampliar la memoria RAM disponible",
    },
    {
      question: "¿Qué significa CSS?",
      possibleAnswers: ["Cascading Style Sheets", "Computer Style System", "Creative Style Script", "Cascading Script Sheets"],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "¿Qué significa HTML?",
      possibleAnswers: ["Hypertext Markup Language", "Hyperlink Text Markup Language", "Hightext Markup Language", "Hypertext Multi Language"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "¿Cuál es el protocolo IP más nuevo?",
      possibleAnswers: ["IPv4", "IPv5", "IPv6", "IPv7"],
      correctAnswer: "IPv6",
    },
    {
      question: "¿Qué tipo de archivo no aceptan los smartphones Apple?",
      possibleAnswers: [".mp3", ".apk", ".jpg", ".pdf"],
      correctAnswer: ".apk",
    },
    {
      question: "¿Qué es un diagrama UML?",
      possibleAnswers: ["Un gráfico utilizado para crear bases de datos", "Un esquema visual que representa un sistema o proceso de software", "Un diagrama de flujo para redes", "Un formato para codificar imágenes"],
      correctAnswer: "Un esquema visual que representa un sistema o proceso de software",
    },
    {
      question: "¿Qué significa DER en informática?",
      possibleAnswers: ["Datos de Entrada Remota", "Diagrama Entidad de flujo", "Diagrama Entidad Relación", "Diagrama de flujo de entrada"],
      correctAnswer: "Diagrama Entidad Relación",
    },
    {
      question: "¿Qué es polimorfismo en programación orientada a objetos?",
      possibleAnswers: ["La capacidad de un objeto para tener múltiples formas", "La habilidad de heredar de múltiples clases", "La capacidad de sobrescribir métodos", "La habilidad de cambiar el tipo de variable dinámicamente"],
      correctAnswer: "La capacidad de un objeto para tener múltiples formas",
    },
    {
      question: "¿Qué es herencia en programación orientada a objetos?",
      possibleAnswers: ["El proceso en el que una clase adquiere las propiedades y comportamientos de otra clase", "La capacidad de un método para aceptar diferentes tipos de parámetros", "Un proceso en el que una clase elimina propiedades de otra clase", "La creación de múltiples instancias de una clase"],
      correctAnswer: "El proceso en el que una clase adquiere las propiedades y comportamientos de otra clase",
    },
    {
      question: "¿Cuál de estos lenguajes de programación NO es orientado a objetos (POO)?",
      possibleAnswers: ["Java", "Python", "C++", "C"],
      correctAnswer: "C",
    },
    {
      question: "¿Qué es un operador ternario? ",
      possibleAnswers: ["Un operador que asigna variables", "Un operador que evalúa una condición y devuelve un valor según sea verdadera o falsa", "Un operador que suma tres números"],
      correctAnswer: "Un operador que evalúa una condición y devuelve un valor según sea verdadera o falsa",
    },
    {
      question: "¿Qué es la máquina Enigma y para qué se utilizó?",
      possibleAnswers: ["Un dispositivo utilizado para hacer cálculos matemáticos complejos", "Una máquina de cifrado utilizada por los alemanes durante la Segunda Guerra Mundial para codificar mensajes", "Una máquina de descifrado que fue creada por Alan Turing", "Un sistema de comunicaciones utilizado en barcos de guerra"],
      correctAnswer: "Una máquina de cifrado utilizada por los alemanes durante la Segunda Guerra Mundial para codificar mensajes",
    },
    {
      question: "¿Cuántos kilobytes son un gigabyte?",
      possibleAnswers: ["1000 kilobytes", "1024 kilobytes", "100,000 kilobytes", "1,048,576 kilobytes"],
      correctAnswer: "1,048,576 kilobytes",
    },
    {
      question: "¿Cuál es la pieza de hardware más importante en una computadora?",
      possibleAnswers: ["El teclado", "El disco duro", "La placa madre", "La unidad central de procesamiento (CPU)"],
      correctAnswer: "La unidad central de procesamiento (CPU)",
    },
    {
      question: "Protocolo de enrutamiento basado en el estado de enlace que calcula la mejor ruta considerando el estado actual de la red",
      possibleAnswers: ["DHCP", "RIP", "IGRP", "OSPF"],
      correctAnswer: "OSPF",
    },
    {
      question: "¿Qué tipo de archivo se usa en Microsoft Word?",
      possibleAnswers: [".xlsx", ".doc", ".docx", ".xdoc"],
      correctAnswer: ".docx",
    },
    {
      question: "¿Qué tipo de archivo se utiliza en Excel?",
      possibleAnswers: [".doc", ".xlsx", ".ecxe", ".xlls"],
      correctAnswer: ".xlsx",
    },
    {
      question: "¿Qué significa SSD?",
      possibleAnswers: ["Unidad de almacenamiento en estado sólido", "Sistema de soporte de datos", "Disco de almacenamiento tradicional", "Sistema de almacenamiento digital"],
      correctAnswer: "Unidad de almacenamiento en estado sólido",
    },
    {
      question: "¿Qué significa HDD?",
      possibleAnswers: ["Disco duro mecánico", "Unidad de almacenamiento en estado sólido", "Disco de alta definición", "Dispositivo de almacenamiento digital"],
      correctAnswer: "Disco duro mecánico",
    },
    {
      question: "¿Qué es pseudocódigo?",
      possibleAnswers: ["Un lenguaje de programación de alto nivel", "Un método para describir algoritmos usando una notación similar a la del lenguaje natural", "Un tipo de código ejecutable directamente por una máquina", "Un formato específico de lenguaje de programación"],
      correctAnswer: "Un método para describir algoritmos usando una notación similar a la del lenguaje natural",
    },
    {
      question: "¿Qué es un sistema de archivos?",
      possibleAnswers: ["Un tipo de software que edita imágenes", "La estructura utilizada para organizar y almacenar archivos en un disco", "Un protocolo de red para compartir archivos", "Un lenguaje de programación"],
      correctAnswer: "La estructura utilizada para organizar y almacenar archivos en un disco",
    },
    {
      question: "¿Qué es un driver?",
      possibleAnswers: ["Un dispositivo de almacenamiento externo", "Un software que permite al sistema operativo comunicarse con el hardware", "Un tipo de virus informático", "Un protocolo de comunicación"],
      correctAnswer: "Un software que permite al sistema operativo comunicarse con el hardware",
    },
    {
      question: "¿Qué es una red VPN?",
      possibleAnswers: ["Una red de área local", "Una red privada virtual que cifra la conexión a Internet", "Un protocolo de transferencia de archivos", "Un tipo de malware"],
      correctAnswer: "Una red privada virtual que cifra la conexión a Internet",
    },
    {
      question: "¿Qué es la encriptación?",
      possibleAnswers: ["El proceso de compresión de datos", "El proceso de codificar datos para proteger la información", "La creación de copias de seguridad", "La eliminación de archivos temporales"],
      correctAnswer: "El proceso de codificar datos para proteger la información",
    },
    {
      question: "¿Qué es un script en programación?",
      possibleAnswers: ["Un tipo de hardware de almacenamiento", "Un conjunto de instrucciones escritas en un lenguaje de programación para realizar tareas específicas", "Un protocolo de comunicación de red", "Un tipo de archivo de imagen"],
      correctAnswer: "Un conjunto de instrucciones escritas en un lenguaje de programación para realizar tareas específicas",
    },
    {
      question: "¿Qué es un sistema de archivos FAT32?",
      possibleAnswers: ["Un protocolo de red que sirve para conectar a internet", "Un sistema de archivos utilizado para gestionar y organizar datos", "Un tipo de virus informático", "Un sistema operativo para servidores"],
      correctAnswer: "Un sistema de archivos utilizado para gestionar y organizar datos",
    },
    {
      question: "¿Cuál es la principal función de la BIOS en una computadora?",
      possibleAnswers: ["Administrar la memoria RAM", "Iniciar y probar el hardware al encender la computadora", "Ejecutar programas de usuario al iniciar", "Proteger contra malware antes de encender la computadora"],
      correctAnswer: "Iniciar y probar el hardware al encender la computadora",
    },
    {
      question: "¿Qué significa BIOS?",
      possibleAnswers: ["Basic Integrated Operating System", "Basic Input/Output System", "Binary Input/Output Service", "Basic Interface for Operating Systems"],
      correctAnswer: "Basic Input/Output System",
    },
    {
      question: "",
      possibleAnswers: ["", "", "", ""],
      correctAnswer: "",
    },
];
  