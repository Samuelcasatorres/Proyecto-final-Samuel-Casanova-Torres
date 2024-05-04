
var productos = [
    // Motor
    { id: 1, nombre: "Filtro de Aceite", categoria: "Motor", precio: 15.99, imagen: "filtro_aceite.jpg", codigo: "FA001", atributo1: "Modelo A", atributo2: "Marca X", atributo3: "Calidad Premium" },
    { id: 2, nombre: "Bomba de Agua", categoria: "Motor", precio: 49.50, imagen: "bomba_agua.jpg", codigo: "BA002", atributo1: "Modelo B", atributo2: "Marca Y", atributo3: "Refrigeración Eficiente" },
    { id: 3, nombre: "Correa de Distribución", categoria: "Motor", precio: 18.50, imagen: "correa_distribucion.jpg", codigo: "CD003", atributo1: "Modelo C", atributo2: "Marca Z", atributo3: "Flexibilidad óptima" },
    { id: 4, nombre: "Sensor de Oxígeno", categoria: "Motor", precio: 39.50, imagen: "sensor_oxigeno.jpg", codigo: "SO004", atributo1: "Modelo D", atributo2: "Marca W", atributo3: "Control de Emisiones" },
    { id: 5, nombre: "Junta de Culata", categoria: "Motor", precio: 24.99, imagen: "junta_culata.jpg", codigo: "JC005", atributo1: "Modelo E", atributo2: "Marca V", atributo3: "Sellado Perfecto" },
    { id: 6, nombre: "Bomba de Aceite", categoria: "Motor", precio: 35.99, imagen: "bomba_aceite.jpg", codigo: "BA006", atributo1: "Modelo F", atributo2: "Marca U", atributo3: "Presión Óptima" },
    { id: 7, nombre: "Válvula de Admisión", categoria: "Motor", precio: 8.99, imagen: "valvula_admision.jpg", codigo: "VA007", atributo1: "Modelo G", atributo2: "Marca T", atributo3: "Flujo de Aire Óptimo" },
    { id: 8, nombre: "Inyectores de Combustible", categoria: "Motor", precio: 89.50, imagen: "inyectores_combustible.jpg", codigo: "IC008", atributo1: "Modelo H", atributo2: "Marca S", atributo3: "Eficiencia de Combustible" },
    { id: 9, nombre: "Tensor de Correa de Distribución", categoria: "Motor", precio: 17.99, imagen: "tensor_correa_distribucion.jpg", codigo: "TCD009", atributo1: "Modelo I", atributo2: "Marca R", atributo3: "Tensión Ajustable" },
    { id: 10, nombre: "Caja de Cambios Automática", categoria: "Motor", precio: 699.99, imagen: "caja_cambios_automatica.jpg", codigo: "CCA010", atributo1: "Modelo J", atributo2: "Marca Q", atributo3: "Cambio Suave" },

    // Frenos
    { id: 11, nombre: "Pastillas de Freno", categoria: "Frenos", precio: 29.99, imagen: "pastillas_freno.jpg", codigo: "PF011", atributo1: "Modelo K", atributo2: "Marca P", atributo3: "Alto Rendimiento" },
    { id: 12, nombre: "Disco de Freno Delantero", categoria: "Frenos", precio: 49.99, imagen: "disco_freno_delantero.jpg", codigo: "DFD012", atributo1: "Modelo L", atributo2: "Marca O", atributo3: "Durabilidad Extendida" },
    { id: 13, nombre: "Pinza de Freno", categoria: "Frenos", precio: 49.75, imagen: "pinza_freno.jpg", codigo: "PF013", atributo1: "Modelo M", atributo2: "Marca N", atributo3: "Frenado Seguro" },
    { id: 14, nombre: "Interruptor de Freno", categoria: "Frenos", precio: 8.50, imagen: "interruptor_freno.jpg", codigo: "IF014", atributo1: "Modelo N", atributo2: "Marca M", atributo3: "Seguridad en la Frenada" },
    { id: 15, nombre: "Pastillas de Freno Traseras", categoria: "Frenos", precio: 25.99, imagen: "pastillas_freno_traseras.jpg", codigo: "PFT015", atributo1: "Modelo O", atributo2: "Marca L", atributo3: "Frenado Preciso" },
    { id: 16, nombre: "Bomba de Freno", categoria: "Frenos", precio: 39.99, imagen: "bomba_freno.jpg", codigo: "BF016", atributo1: "Modelo P", atributo2: "Marca K", atributo3: "Presión Adecuada" },
    { id: 17, nombre: "Cable de Freno de Mano", categoria: "Frenos", precio: 12.99, imagen: "cable_freno_mano.jpg", codigo: "CFM017", atributo1: "Modelo Q", atributo2: "Marca J", atributo3: "Ajuste Perfecto" },
    { id: 18, nombre: "Líquido de Freno", categoria: "Frenos", precio: 7.99, imagen: "liquido_freno.jpg", codigo: "LF018", atributo1: "Modelo R", atributo2: "Marca I", atributo3: "Frenado Efectivo" },
    { id: 19, nombre: "Tambor de Freno", categoria: "Frenos", precio: 39.50, imagen: "tambor_freno.jpg", codigo: "TF019", atributo1: "Modelo S", atributo2: "Marca H", atributo3: "Resistencia a la Corrosión" },
    { id: 20, nombre: "Manguera de Freno", categoria: "Frenos", precio: 5.99, imagen: "manguera_freno.jpg", codigo: "MF020", atributo1: "Modelo T", atributo2: "Marca G", atributo3: "Flexibilidad Óptima" },

    // Suspensión
    { id: 21, nombre: "Amortiguador", categoria: "Suspensión", precio: 49.99, imagen: "amortiguador.jpg", codigo: "AM021", atributo1: "Modelo U", atributo2: "Marca F", atributo3: "Confort de Conducción" },
    { id: 22, nombre: "Barra Estabilizadora", categoria: "Suspensión", precio: 69.99, imagen: "barra_estabilizadora.jpg", codigo: "BE022", atributo1: "Modelo V", atributo2: "Marca E", atributo3: "Control de Balanceo" },
    { id: 23, nombre: "Muelle de Suspensión", categoria: "Suspensión", precio: 29.99, imagen: "muelle_suspension.jpg", codigo: "MS023", atributo1: "Modelo W", atributo2: "Marca D", atributo3: "Resistencia a la Compresión" },
    { id: 24, nombre: "Brazo de Suspensión", categoria: "Suspensión", precio: 39.50, imagen: "brazo_suspension.jpg", codigo: "BS024", atributo1: "Modelo X", atributo2: "Marca C", atributo3: "Estabilidad Mejorada" },
    { id: 25, nombre: "Amortiguador de Dirección", categoria: "Suspensión", precio: 19.99, imagen: "amortiguador_direccion.jpg", codigo: "AD025", atributo1: "Modelo Y", atributo2: "Marca B", atributo3: "Control de Vibraciones" },
    { id: 26, nombre: "Soporte de Amortiguador", categoria: "Suspensión", precio: 12.50, imagen: "soporte_amortiguador.jpg", codigo: "SA026", atributo1: "Modelo Z", atributo2: "Marca A", atributo3: "Fijación Segura" },
    { id: 27, nombre: "Bujes de Suspensión", categoria: "Suspensión", precio: 14.99, imagen: "bujes_suspension.jpg", codigo: "BS027", atributo1: "Modelo AA", atributo2: "Marca Z", atributo3: "Amortiguación Suave" },
    { id: 28, nombre: "Resorte Helicoidal", categoria: "Suspensión", precio: 17.99, imagen: "resorte_helicoidal.jpg", codigo: "RH028", atributo1: "Modelo BB", atributo2: "Marca Y", atributo3: "Flexibilidad Óptima" },
    { id: 29, nombre: "Barra de Torsión", categoria: "Suspensión", precio: 49.50, imagen: "barra_torsion.jpg", codigo: "BT029", atributo1: "Modelo CC", atributo2: "Marca X", atributo3: "Absorción de Impactos" },
    { id: 30, nombre: "Brazo de Control", categoria: "Suspensión", precio: 59.99, imagen: "brazo_control.jpg", codigo: "BC030", atributo1: "Modelo DD", atributo2: "Marca W", atributo3: "Estabilidad en Curvas" },

    // Eléctrico
    { id: 31, nombre: "Alternador", categoria: "Eléctrico", precio: 129.99, imagen: "alternador.jpg", codigo: "AL031", atributo1: "Modelo EE", atributo2: "Marca V", atributo3: "Alta Potencia" },
    { id: 32, nombre: "Centralita Electrónica", categoria: "Eléctrico", precio: 99.99, imagen: "centralita_electronica.jpg", codigo: "CE032", atributo1: "Modelo FF", atributo2: "Marca U", atributo3: "Gestión de Motor Avanzada" },
    { id: 33, nombre: "Motor de Arranque", categoria: "Eléctrico", precio: 79.99, imagen: "motor_arranque.jpg", codigo: "MA033", atributo1: "Modelo GG", atributo2: "Marca T", atributo3: "Arranque Rápido" },
    { id: 34, nombre: "Batería de Automóvil", categoria: "Eléctrico", precio: 89.50, imagen: "bateria_automovil.jpg", codigo: "BA034", atributo1: "Modelo HH", atributo2: "Marca S", atributo3: "Alta Capacidad de Carga" },
    { id: 35, nombre: "Luces de Freno", categoria: "Eléctrico", precio: 12.99, imagen: "luces_freno.jpg", codigo: "LF035", atributo1: "Modelo II", atributo2: "Marca R", atributo3: "Brillo Intenso" },
    { id: 36, nombre: "Regulador de Voltaje", categoria: "Eléctrico", precio: 17.50, imagen: "regulador_voltaje.jpg", codigo: "RV036", atributo1: "Modelo JJ", atributo2: "Marca Q", atributo3: "Estabilización de Corriente" },
    { id: 37, nombre: "Cableado Eléctrico", categoria: "Eléctrico", precio: 29.99, imagen: "cableado_electrico.jpg", codigo: "CE037", atributo1: "Modelo KK", atributo2: "Marca P", atributo3: "Conductividad Superior" },
    { id: 38, nombre: "Fusibles", categoria: "Eléctrico", precio: 3.50, imagen: "fusibles.jpg", codigo: "FS038", atributo1: "Modelo LL", atributo2: "Marca O", atributo3: "Protección contra Sobrecargas" },
    { id: 39, nombre: "Relé", categoria: "Eléctrico", precio: 4.99, imagen: "rele.jpg", codigo: "RE039", atributo1: "Modelo MM", atributo2: "Marca N", atributo3: "Conmutación Eficiente" },
    { id: 40, nombre: "Sensor de Temperatura", categoria: "Eléctrico", precio: 8.99, imagen: "sensor_temperatura.jpg", codigo: "ST040", atributo1: "Modelo NN", atributo2: "Marca M", atributo3: "Precisión en la Medición" },

    // Accesorios
    { id: 41, nombre: "Llanta de Aleación", categoria: "Accesorios", precio: 149.99, imagen: "llanta_aleacion.jpg", codigo: "LL041", atributo1: "Modelo OO", atributo2: "Marca L", atributo3: "Diseño Deportivo" },
    { id: 42, nombre: "Kit de Embrague", categoria: "Accesorios", precio: 129.50, imagen: "kit_embrague.jpg", codigo: "KE042", atributo1: "Modelo PP", atributo2: "Marca K", atributo3: "Alto Rendimiento" },
    { id: 43, nombre: "Funda de Asiento", categoria: "Accesorios", precio: 19.99, imagen: "funda_asiento.jpg", codigo: "FA043", atributo1: "Modelo QQ", atributo2: "Marca J", atributo3: "Protección y Estilo" },
    { id: 44, nombre: "Alfombrillas para Automóvil", categoria: "Accesorios", precio: 29.99, imagen: "alfombrillas_automovil.jpg", codigo: "AA044", atributo1: "Modelo RR", atributo2: "Marca I", atributo3: "Fácil Limpieza" },
    { id: 45, nombre: "Protector de Parachoques", categoria: "Accesorios", precio: 14.50, imagen: "protector_parachoques.jpg", codigo: "PP045", atributo1: "Modelo SS", atributo2: "Marca H", atributo3: "Protección de Bordes" },
    { id: 46, nombre: "Kit de Xenón", categoria: "Accesorios", precio: 49.99, imagen: "kit_xenon.jpg", codigo: "KX046", atributo1: "Modelo TT", atributo2: "Marca G", atributo3: "Iluminación Potente" },
    { id: 47, nombre: "Espejo Retrovisor Exterior", categoria: "Accesorios", precio: 39.99, imagen: "espejo_retrovisor.jpg", codigo: "ER047", atributo1: "Modelo UU", atributo2: "Marca F", atributo3: "Amplio Campo de Visión" },
    { id: 48, nombre: "Tubo de Escape Deportivo", categoria: "Accesorios", precio: 129.99, imagen: "tubo_escape_deportivo.jpg", codigo: "TED048", atributo1: "Modelo VV", atributo2: "Marca E", atributo3: "Estilo Deportivo" },
    { id: 49, nombre: "Portabicicletas", categoria: "Accesorios", precio: 79.99, imagen: "portabicicletas.jpg", codigo: "PB049", atributo1: "Modelo WW", atributo2: "Marca D", atributo3: "Transporte Seguro" },
    { id: 50, nombre: "Barras de Techo", categoria: "Accesorios", precio: 99.50, imagen: "barras_techo.jpg", codigo: "BT050", atributo1: "Modelo XX", atributo2: "Marca C", atributo3: "Versatilidad de Carga" }
];

document.getElementById('searchForm').addEventListener('submit', function(event) {
    var nombreProducto = document.getElementById('nombreProducto').value;
    var categoria = document.getElementById('categoria').value;
    var precioProducto = document.getElementById('precioProducto').value;

    if (nombreProducto.trim() === '' || categoria.trim() === '' || precioProducto.trim() === '') {
        event.preventDefault(); // Evitar el envío del formulario
        window.location.href = "error.html"; // Redirigir a la página de error
    }
});


