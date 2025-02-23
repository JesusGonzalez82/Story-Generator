let texto = document.getElementById('texto');
let button = document.getElementById('btnSubmit');

button.addEventListener("click", () => {
    let sexo = getSexoSeleccionado(); // Con esto obtenemos el sexo elegido
    if (!sexo){
        texto.innerHTML = "Por favor, seleciona el sexo de nuestro personaje"
        return;
    }

    if (document.getElementById('montaraz').checked) {
        crearHistoriaMontaraz(sexo);
    } else if (document.getElementById('hobbit').checked) {
        crearHistoriaHobbit(sexo);
    } else if (document.getElementById('elfo').checked) {
        crearHistoriaElfo(sexo);
    } else if (document.getElementById('enano').checked) {
        crearHistoriaEnano(sexo);
    } else {
        texto.innerHTML = "Selecciona una opción válida.";
    }
}, false);

function getSexoSeleccionado(){
    const radios = document.getElementsByName('sexo');
    for (let radio of radios){
        if (radio.checked){
            return radio.value;
        }
    }
    return null; // No se seleccionó ningún sexo
}

function crearHistoriaMontaraz(sexo){
    if (sexo === 'masculino'){
        crearHistoriaMontarazM();
    }else if (sexo === 'femenino') {
        crearHistoriaMontarazF();
    }else {
        crearHistoriaMontarazO();
    }
}

function crearHistoriaMontarazM(sexo){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }
    let montaraz = `
        
        <img src="./src/montarazF.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

    let historiaMontaraz = [
        "<h1>"+montaraz + nombre + ", El Guardián de Ithilien: La Sombra que Protege Gondor</h1>",
        "En los espesos bosques de Ithilien, " + nombre + ", un montaraz al servicio de Gondor,",
        "vigilaba las fronteras del sur. Su capa verde oscuro se mimetizaba con los árboles, y su",
        "mirada afilada escudriñaba cada sombra. Hijo de un linaje olvidado, su deber era proteger",
        "las tierras libres de las amenazas del este.",
        "Una noche, mientras patrullaba cerca de los ríos que desembocan en el Anduin, " + nombre + " escucho",
        "un sonido inquietante: un murmullo grave acompañado de pasos pesados. Escalando rápidamente un árbol",
        "vio un grupo de Orcos avanzando con una máquina de guerra. Sus ojos se entrecerraron; no podía permitir",
        "que cruzaran el río hacia Gondor.",
        "Deslizandose como un fantasma " + nombre + " preparó su arco y disparó una flecha certera que silbó en la",
        "oscuridad, derribando al líder del enemigo. Antes de que los orcos pudieran reaccionar, lanzó una segunda flecha",
        "alcanzando la antorcha que portaban, y sumió al enemigo en el caos. Sin embargo, uno de los orcos, descubrió",
        "su escondite.",
        "Con su espada " + nombre + " se enfrentó al enemigo en un duelo feroz. Aunque estaba solo, su entrenamiento",
        "como montaraz le permitió usar el terreno a su favor. Con astucia, derribó la último orco y destruyó la maquina",
        "Antes del amanecer, " + nombre + " regresó al Abismo de Helm, donde sus compañeros le esperaban",
        "Aunque exhausto, no mencionó sus hazañas. Para " + nombre + " la gloria no era el objetivo, sino ",
        "la protección de la tierra que amaba."
    ];

    
    texto.innerHTML = historiaMontaraz.join(" ");
}

function crearHistoriaMontarazF(sexo){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.toString();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestra heroina";
        return;
    }

    let montaraz = `
        
        <img src="./src/montarazF.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

    let historiaMontaraz = [
        "<h1>"+ montaraz + nombre + ", La Guardiana de Ithilien: La Sombra que Protege Gondor</h1>",
        "En los espesos bosques de Ithilien, " + nombre + ", una montaraz al servicio de Gondor,",
        "vigilaba las fronteras del sur. Su capa verde oscuro se mimetizaba con los árboles, y su",
        "mirada afilada escudriñaba cada sombra. Hija de un linaje olvidado, su deber era proteger",
        "las tierras libres de las amenazas del este.",
        "Una noche, mientras patrullaba cerca de los ríos que desembocan en el Anduin, " + nombre + " escuchó",
        "un sonido inquietante: un murmullo grave acompañado de pasos pesados. Escalando rápidamente un árbol",
        "vio un grupo de Orcos avanzando con una máquina de guerra. Sus ojos se entrecerraron; no podía permitir",
        "que cruzaran el río hacia Gondor.",
        "Deslizándose como un fantasma, " + nombre + " preparó su arco y disparó una flecha certera que silbó en la",
        "oscuridad, derribando a la líder del enemigo. Antes de que los orcos pudieran reaccionar, lanzó una segunda flecha",
        "alcanzando la antorcha que portaban, y sumió al enemigo en el caos. Sin embargo, uno de los orcos descubrió",
        "su escondite.",
        "Con su espada, " + nombre + " se enfrentó al enemigo en un duelo feroz. Aunque estaba sola, su entrenamiento",
        "como montaraz le permitió usar el terreno a su favor. Con astucia, derribó al último orco y destruyó la máquina.",
        "Antes del amanecer, " + nombre + " regresó al Abismo de Helm, donde sus compañeros la esperaban.",
        "Aunque exhausta, no mencionó sus hazañas. Para " + nombre + " la gloria no era el objetivo, sino ",
        "la protección de la tierra que amaba."
    ];

    texto.innerHTML = historiaMontaraz.join(" ");
}

function crearHistoriaMontarazO(sexo){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.toString();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestra heroina";
        return;
    }

    let montaraz = `
        
        <img src="./src/montarazF.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

    let historiaMontaraz = [
        "<h1>" + montaraz + nombre + ", Le Guardián de Ithilien: La Sombra que Protege Gondor</h1>",
        "En los espesos bosques de Ithilien, " + nombre + ", une montaraz al servicio de Gondor,",
        "vigilaba las fronteras del sur. Su capa verde oscuro se mimetizaba con los árboles, y su",
        "mirada afilada escudriñaba cada sombra. Hije de un linaje olvidado, su deber era proteger",
        "las tierras libres de las amenazas del este.",
        "Una noche, mientras patrullaba cerca de los ríos que desembocan en el Anduin, " + nombre + " escuchó",
        "un sonido inquietante: un murmullo grave acompañado de pasos pesados. Escalando rápidamente un árbol",
        "vio un grupo de Orcos avanzando con una máquina de guerra. Sus ojos se entrecerraron; no podía permitir",
        "que cruzaran el río hacia Gondor.",
        "Deslizándose como un fantasma, " + nombre + " preparó su arco y disparó una flecha certera que silbó en la",
        "oscuridad, derribando a la líder del enemigo. Antes de que los orcos pudieran reaccionar, lanzó una segunda flecha",
        "alcanzando la antorcha que portaban, y sumió al enemigo en el caos. Sin embargo, une de les orcos descubrió",
        "su escondite.",
        "Con su espada, " + nombre + " se enfrentó al enemigo en un duelo feroz. Aunque estaba sole, su entrenamiento",
        "como montaraz le permitió usar el terreno a su favor. Con astucia, derribó al últime orco y destruyó la máquina.",
        "Antes del amanecer, " + nombre + " regresó al Abismo de Helm, donde sus compañeres le esperaban.",
        "Aunque exhauste, no mencionó sus hazañas. Para " + nombre + " la gloria no era el objetivo, sino ",
        "la protección de la tierra que amaba."
    ];

    texto.innerHTML = historiaMontaraz.join(" ");
}

function crearHistoriaHobbit(sexo){
    if (sexo === 'masculino'){
        crearHistoriaHobbitM();
    }else if (sexo === 'femenino') {
        crearHistoriaHobbitF();
    }else {
        crearHistoriaHobbitO();
    }
}

function crearHistoriaHobbitM(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }

    let hobbit = `
        
        <img src="./src/hobbit.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

let historiaHobbit = [
    "<h1>" + hobbit + "Venturas y desventuras de " + nombre + " el hobbit! </h1>",
    "En la tranquila Comarca, " + nombre + " un joven hobbit lleno de curiosidad,",
    "decidió que ya no podía seguir viviendo una vida monótona. Aunque su gente prefería la paz y la seguridad de su hogar,",
    "algo dentro de él le decía que había algo más allá de los campos verdes. Un día, un mago llamado Gandalf apareció en su puerta",
    "y le ofreció unirse a un grupo de enanos en una aventura hacia la Montaña Solitaria.",
    "Aunque dudoso, " + nombre + " aceptó la propuesta, y así comenzó su gran viaje.",
    "A lo largo del camino, " + nombre + " se enfrentó a criaturas desconocidas y peligros imprevistos. Pero su valentía crecía con cada desafío,",
    "y aunque pequeño en estatura, su coraje lo hizo grande en el corazón. En un momento crucial, " + nombre + " encontró un anillo mágico que",
    "le permitió volverse invisible, lo cual fue clave para derrotar a un grupo de orcos.",
    "Tras muchos días de lucha, " + nombre + " y los enanos llegaron a la Montaña Solitaria, donde se enfrentaron al dragón Smaug.",
    "Al final, con astucia y valentía, " + nombre + " recuperó el tesoro y regresó a la Comarca,",
    "donde, aunque cambió para siempre, siempre llevaba consigo el recuerdo de su épica aventura."
];

    
    texto.innerHTML = historiaHobbit.join(" ");
}

function crearHistoriaHobbitF(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }

    let hobbit = `
        
        <img src="./src/hobbit.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

    let historiaHobbit = [
        "<h1>" + hobbit + "Venturas y desventuras de " + nombre + " la hobbit!</h1>",
        "En la tranquila Comarca, " + nombre + ", una joven hobbit llena de curiosidad,",
        "decidió que ya no podía seguir viviendo una vida monótona. Aunque su gente prefería la paz y la seguridad de su hogar,",
        "algo dentro de ella le decía que había algo más allá de los campos verdes. Un día, un mago llamado Gandalf apareció en su puerta",
        "y le ofreció unirse a un grupo de enanos en una aventura hacia la Montaña Solitaria.",
        "Aunque dudosa, " + nombre + " aceptó la propuesta, y así comenzó su gran viaje.",
        "A lo largo del camino, " + nombre + " se enfrentó a criaturas desconocidas y peligros imprevistos. Pero su valentía crecía con cada desafío,",
        "y aunque pequeña en estatura, su coraje la hizo grande en el corazón. En un momento crucial, " + nombre + " encontró un anillo mágico que",
        "le permitió volverse invisible, lo cual fue clave para derrotar a un grupo de orcos.",
        "Tras muchos días de lucha, " + nombre + " y los enanos llegaron a la Montaña Solitaria, donde se enfrentaron al dragón Smaug.",
        "Al final, con astucia y valentía, " + nombre + " recuperó el tesoro y regresó a la Comarca,",
        "donde, aunque cambió para siempre, siempre llevaba consigo el recuerdo de su épica aventura."
    ];

    
    texto.innerHTML = historiaHobbit.join(" ");
}

function crearHistoriaHobbitO(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }

    let hobbit = `
        
        <img src="./src/hobbit.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;


    let historiaHobbit = [
        "<h1>" + hobbit + "Venturas y desventuras de " + nombre + " le hobbit!</h1>",
        "En la tranquila Comarca, " + nombre + ", une joven hobbit llene de curiosidad,",
        "decidió que ya no podía seguir viviendo una vida monótona. Aunque su gente prefería la paz y la seguridad de su hogar,",
        "algo dentro de elle le decía que había algo más allá de los campos verdes. Un día, un mago llamado Gandalf apareció en su puerta",
        "y le ofreció unirse a un grupo de enanos en una aventura hacia la Montaña Solitaria.",
        "Aunque dudose, " + nombre + " aceptó la propuesta, y así comenzó su gran viaje.",
        "A lo largo del camino, " + nombre + " se enfrentó a criaturas desconocidas y peligros imprevistos. Pero su valentía crecía con cada desafío,",
        "y aunque pequeñe en estatura, su coraje le hizo grande en el corazón. En un momento crucial, " + nombre + " encontró un anillo mágico que",
        "le permitió volverse invisible, lo cual fue clave para derrotar a un grupo de orcos.",
        "Tras muchos días de lucha, " + nombre + " y los enanos llegaron a la Montaña Solitaria, donde se enfrentaron al dragón Smaug.",
        "Al final, con astucia y valentía, " + nombre + " recuperó el tesoro y regresó a la Comarca,",
        "donde, aunque cambió para siempre, siempre llevaba consigo el recuerdo de su épica aventura."
    ];

    
    texto.innerHTML = historiaHobbit.join(" ");
}

function crearHistoriaElfo(sexo){
    if (sexo === 'masculino'){
        crearHistoriaElfoM();
    }else if (sexo === 'femenino') {
        crearHistoriaElfoF();
    }else {
        crearHistoriaElfoO();
    }
}

function crearHistoriaElfoM(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }
    let elfo = `
        
        <img src="./src/elfo.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

let historiaElfo = [
        "<h1>" + elfo + nombre + " El guardián de Lórien </h1>",
        "En el reino oculto de Lórien, " + nombre + " un noble elfo de la casa de Galendil,",
        "era conocido por su destreza con el arco y su profunda conexión con la naturaleza.",
        "Su cabello dorado brillaba bajo la luz de la luna, y sus ojos azules reflejaban siglos de sabiduría.",
        "Una noche, mientras las estrellas iluminaban el cielo, " + nombre + " recibió una visión perturbadora:",
        "un oscuro poder estaba despertando en las profundidades de las Montañas Nubladas.",
        "Sin dudarlo, " + nombre + " partió hacia la montaña acompañado de su fiel águila, Aeranor.",
        "En el camino, encontró un grupo de trolls que habían capturado a viajeros inocentes.",
        "Con movimientos elegantes y precisos, " + nombre + " liberó a los prisioneros y acabó con los trolls.",
        "Finalmente, al llegar a las Montañas Nubladas, descubrió una antigua fortaleza llena de espectros.",
        "Con la luz de una joya élfica, dispersó la oscuridad y selló el portal que los espectros usaban.",
        "Regresó a Lórien como un héroe silencioso, llevando consigo no gloria, sino paz para su tierra.",
        "Para " + nombre + ", la verdadera victoria era proteger el equilibrio del mundo."
];
    
    texto.innerHTML = historiaElfo.join(" ");
}

function crearHistoriaElfoF(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }

    let elfa = `
        
        <img src="./src/elfa.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

    let historiaElfo = [
        "<h1>" + elfa + nombre + " La guardiana de Lórien </h1>",
        "En el reino oculto de Lórien, " + nombre + ", una noble elfa de la casa de Galendil,",
        "era conocida por su destreza con el arco y su profunda conexión con la naturaleza.",
        "Su cabello dorado brillaba bajo la luz de la luna, y sus ojos azules reflejaban siglos de sabiduría.",
        "Una noche, mientras las estrellas iluminaban el cielo, " + nombre + " recibió una visión perturbadora:",
        "un oscuro poder estaba despertando en las profundidades de las Montañas Nubladas.",
        "Sin dudarlo, " + nombre + " partió hacia la montaña acompañada de su fiel águila, Aeranor.",
        "En el camino, encontró un grupo de trolls que habían capturado a viajeros inocentes.",
        "Con movimientos elegantes y precisos, " + nombre + " liberó a los prisioneros y acabó con los trolls.",
        "Finalmente, al llegar a las Montañas Nubladas, descubrió una antigua fortaleza llena de espectros.",
        "Con la luz de una joya élfica, dispersó la oscuridad y selló el portal que los espectros usaban.",
        "Regresó a Lórien como una heroína silenciosa, llevando consigo no gloria, sino paz para su tierra.",
        "Para " + nombre + ", la verdadera victoria era proteger el equilibrio del mundo."
    ];
    
    texto.innerHTML = historiaElfo.join(" ");
}

function crearHistoriaElfoO(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.trim();

    if (!nombre){
        texto.innerHTML = "Por favor, ingresa un nombre para nuestro héroe";
        return;
    }
    let elfe = `
        
        <img src="./src/elfe.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;

    let historiaElfo = [
        "<h1>" + elfe + nombre + " Le guardián de Lórien </h1>",
        "En el reino oculto de Lórien, " + nombre + ", une noble elfe de la casa de Galendil,",
        "era conocide por su destreza con el arco y su profunda conexión con la naturaleza.",
        "Su cabello dorado brillaba bajo la luz de la luna, y sus ojos azules reflejaban siglos de sabiduría.",
        "Una noche, mientras les estrellas iluminaban el cielo, " + nombre + " recibió una visión perturbadora:",
        "un oscuro poder estaba despertando en las profundidades de las Montañas Nubladas.",
        "Sin dudarlo, " + nombre + " partió hacia la montaña acompañade de su fiel águila, Aeranor.",
        "En el camino, encontró un grupo de trolls que habían capturado a viajeros inocentes.",
        "Con movimientos elegantes y precisos, " + nombre + " liberó a les prisioneres y acabó con los trolls.",
        "Finalmente, al llegar a las Montañas Nubladas, descubrió una antigua fortaleza llena de espectros.",
        "Con la luz de una joya élfica, dispersó la oscuridad y selló el portal que los espectros usaban.",
        "Regresó a Lórien como une héroe silenciose, llevando consigo no gloria, sino paz para su tierra.",
        "Para " + nombre + ", la verdadera victoria era proteger el equilibrio del mundo."
    ];
    
    texto.innerHTML = historiaElfo.join(" ");
}

function crearHistoriaEnano(sexo){
    if (sexo === 'masculino'){
        crearHistoriaEnanoM();
    }else if (sexo === 'femenino') {
        crearHistoriaEnanoF();
    }else {
        crearHistoriaEnanoO();
    }
}

function crearHistoriaEnanoM(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.toString();
    if (!nombre){
        texto.innerHTML = "Por favor, introduce un nombre para nuestro héroe";
        return;
    }

    let iconoEnano = `
        
    <img src="./src/enano.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
    
`;

    let historiaEnano = [
        "<h1>" + iconoEnano + nombre + " El Martillo de Tharûm Khazad </h1>",
        "En las minas de Tharûm Khazad, " + nombre + " un enano de imponente barba rojiza,",
        "forjaba armas imbuidas con runas ancestrales. Era hijo de Tharin, el herrero más famoso de Erebor.",
        "Su habilidad con el martillo era legendaria, pero su corazón anhelaba más que las profundidades de la roca.",
        "Cuando un mensajero llegó desde Moria pidiendo ayuda contra los goblins, " + nombre + " no lo dudó.",
        "Armado con su hacha runada y su escudo, lideró a un grupo de enanos hacia la Ciudad del Abismo.",
        "En su viaje, enfrentaron numerosos peligros: lobos huargos, trampas ocultas y senderos traicioneros.",
        "Al llegar a Moria, encontraron a sus hermanos atrapados en una gran sala, rodeados por cientos de goblins.",
        "Con un grito de guerra que resonó como un trueno, " + nombre + " cargó al frente,",
        "derribando a los goblins con cada golpe de su poderosa hacha.",
        "En la batalla final, se enfrentó a un capitán goblin que llevaba un antiguo estandarte robado de los enanos.",
        "Tras un feroz combate, " + nombre + " recuperó el estandarte y lo alzó victorioso.",
        "De regreso a Tharûm-Khazad, fue recibido como un héroe, pero para él, el verdadero tesoro era la hermandad forjada en la batalla."
    ];

    texto.innerHTML = historiaEnano.join(" ");
}

function crearHistoriaEnanoF(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.toString();
    if (!nombre){
        texto.innerHTML = "Por favor, introduce un nombre para nuestro heroina";
        return;
    }

    let iconoEnanoO = `
        
    <img src="./src/enano.png" aalt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
    
`;

    let historiaEnano = [
        "<h1>" + iconoEnanoO +  nombre + " La Martillo de Tharûm Khazad </h1>",
        "En las minas de Tharûm Khazad, " + nombre + ", una enana de imponente barba rojiza,",
        "forjaba armas imbuidas con runas ancestrales. Era hija de Tharin, el herrero más famoso de Erebor.",
        "Su habilidad con el martillo era legendaria, pero su corazón anhelaba más que las profundidades de la roca.",
        "Cuando un mensajero llegó desde Moria pidiendo ayuda contra los goblins, " + nombre + " no lo dudó.",
        "Armada con su hacha runada y su escudo, lideró a un grupo de enanos hacia la Ciudad del Abismo.",
        "En su viaje, enfrentaron numerosos peligros: lobos huargos, trampas ocultas y senderos traicioneros.",
        "Al llegar a Moria, encontraron a sus hermanos atrapados en una gran sala, rodeados por cientos de goblins.",
        "Con un grito de guerra que resonó como un trueno, " + nombre + " cargó al frente,",
        "derribando a los goblins con cada golpe de su poderosa hacha.",
        "En la batalla final, se enfrentó a una capitana goblin que llevaba un antiguo estandarte robado de los enanos.",
        "Tras un feroz combate, " + nombre + " recuperó el estandarte y lo alzó victoriosa.",
        "De regreso a Tharûm-Khazad, fue recibida como una heroína, pero para ella, el verdadero tesoro era la hermandad forjada en la batalla."
    ];


    texto.innerHTML = historiaEnano.join(" ");
}

function crearHistoriaEnanoO(){
    texto.innerHTML = "";
    let nombre = document.getElementById('nombre').value.toString();
    if (!nombre){
        texto.innerHTML = "Por favor, introduce un nombre para nuestre héroe";
        return;
    }
    let iconoEnanoO = `
        
        <img src="./src/enano.png" alt="Icono" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
        
    `;
    let historiaEnano = [
        "<h1>" + iconoEnanoO + nombre + " Le Martillo de Tharûm Khazad </h1>",
        "En las minas de Tharûm Khazad, " + nombre + ", une enane de imponente barba rojiza,",
        "forjaba armas imbuidas con runas ancestrales. Era hije de Tharin, el herrero más famoso de Erebor.",
        "Su habilidad con el martillo era legendaria, pero su corazón anhelaba más que las profundidades de la roca.",
        "Cuando un mensajero llegó desde Moria pidiendo ayuda contra los goblins, " + nombre + " no lo dudó.",
        "Armade con su hacha runada y su escudo, lideró a un grupo de enanos hacia la Ciudad del Abismo.",
        "En su viaje, enfrentaron numerosos peligros: lobos huargos, trampas ocultas y senderos traicioneros.",
        "Al llegar a Moria, encontraron a sus hermanes atrapades en una gran sala, rodeades por cientos de goblins.",
        "Con un grito de guerra que resonó como un trueno, " + nombre + " cargó al frente,",
        "derribando a los goblins con cada golpe de su poderosa hacha.",
        "En la batalla final, se enfrentó a une capitane goblin que llevaba un antiguo estandarte robado de los enanos.",
        "Tras un feroz combate, " + nombre + " recuperó el estandarte y lo alzó victoriose.",
        "De regreso a Tharûm-Khazad, fue recibide como une héroe, pero para elle, el verdadero tesoro era la hermandad forjada en la batalla."
    ];

    texto.innerHTML = historiaEnano.join(" ");
}
