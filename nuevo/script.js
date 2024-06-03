const productos = JSON.parse(localStorage.getItem('productos')) || [
    { 
     nombre: "Filtro de Aceite",
     categoria:"Motor",
     imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOx-GsoWFANsHvB50mzq6Qxmru_juVBL75fWyrw1UZA&s",
     codigo: "FA001",
     precio: 35000,
     adicionales: { 
        durabilidad: "bastante",
        eficiencia: "buena",
        garantia: "una semana"
     }  
 },

{
    nombre: "Bomba de Agua",
    categoria:"Motor",
    imagen: "https://talleresadomicilio.com/wp-content/uploads/2020/07/Bomba-de-Agua-para-Carro-Sistema-de-Refrigeraci%C3%B3n-Motor-Mec%C3%A1nica-Especializada-Automotriz.jpg",
    codigo: "hjsdais",
    precio: 100000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "buena",
       garantia: "tres meses"
}
},

{
    nombre: "correa de distribuccion",
    categoria:"Motor",
    imagen: "https://www.google.com.co/imgres?q=correa%20de%20distribucion%20spark&imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_926154-MCO51637753284_092022-O.webp&imgrefurl=https%3A%2F%2Flistado.mercadolibre.com.co%2Fcorrea-de-tiempo-spark&docid=V5DR3FXh4ocwKM&tbnid=HGGfou7mOPNU1M&vet=12ahUKEwiwzuj82_CFAxUuQzABHQdPAl4QM3oECGYQAA..i&w=500&h=354&hcb=2&ved=2ahUKEwiwzuj82_CFAxUuQzABHQdPAl4QM3oECGYQAA",
    codigo: "sdfsdf",
    precio: 80000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "media",
       garantia: "dos meses"
}
},
{
    nombre: "sensor de oxigeno",
    categoria:"Motor",
    imagen: "https://www.google.com.co/imgres?q=sensor%20de%20oxigeno%20&imgurl=https%3A%2F%2Fwww.mastersautomovil.com%2Fwp-content%2Fuploads%2Fshutterstock_1802909515.jpg&imgrefurl=https%3A%2F%2Fwww.mastersautomovil.com%2Fblog%2Fsensor-de-oxigeno-o2%2F&docid=BX7jTIb6DVhskM&tbnid=gv6AqcHiHETe8M&vet=12ahUKEwj49IDQ3PCFAxV0RzABHaQ7DHsQM3oECBMQAA..i&w=1000&h=667&hcb=2&ved=2ahUKEwj49IDQ3PCFAxV0RzABHaQ7DHsQM3oECBMQAA",
    codigo: "shdba",
    precio: 50000,
    adicionales: {
       durabilidad: "poca",
       eficiencia: "baja",
       garantia: "una semana"
}
},
{
    nombre: "junta de culata",
    categoria:"Motor",
    imagen: "https://www.google.com.co/imgres?q=junta%20de%20culata%20&imgurl=https%3A%2F%2Fwww.diariomotor.com%2Fimagenes%2F2022%2F09%2Fjunta-de-culata-6310c49085233.jpg&imgrefurl=https%3A%2F%2Fwww.diariomotor.com%2Fque-es%2Fjunta-de-la-culata%2F&docid=E5I_0C0pWYhZ4M&tbnid=Ujg3geQZ0l5S_M&vet=12ahUKEwiRh-SF3fCFAxVufjABHf7gCEkQM3oECGUQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwiRh-SF3fCFAxVufjABHf7gCEkQM3oECGUQAA",
    codigo: "gfhfg",
    precio: 20000,
    adicionales: {
       durabilidad: "media",
       eficiencia: "buena",
       garantia: "un año"
}
},
{
    nombre: "bomba de aceite",
    categoria:"Motor",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_910156-MCO42703477648_072020-O.webp",
    codigo: "hjytj",
    precio: 40000,
    adicionales: {
       durabilidad: "media",
       eficiencia: "poca",
       garantia: "cuatro meses"
}
},
{
    nombre: "valvula de admision",
    categoria:"Motor",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJvTkY0zoygHjGFryebSAdu6nnYTFu8cIiF19bsdZRw&s",
    codigo: "sadfd",
    precio: 40000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "buena",
       garantia: "cinco años"
}
},
{
    nombre: "inyectores de combustible",
    categoria:"Motor",
    imagen: "https://www.mitsubishi-motors.com.pe/blog/wp-content/uploads/2020/12/senales-inyector-combustible.jpg",
    codigo: "dsffggh",
    precio: 50000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "media",
       garantia: "seis meses"
    }
},
{
    nombre: "tensor de correo de distribuccion",
    categoria:"Motor",
    imagen: "https://autoplanet.pe/wp-content/uploads/2022/09/rodamiento-tensor-auto-2.jpg",
    codigo: "hjfgjh",
    precio: 100000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "buena",
       garantia: "un año"
}
},
{
    nombre: "caja de cambios automatica",
    categoria:"Motor",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gqcHG4_r7Xog-FtkiIfETpZSPpNXsSEaCVFJHKJVUQ&s",
    codigo: "hyjgjh",
    precio: 500000,
    adicionales: {
       durabilidad: "muy buena",
       eficiencia: "excelente",
       garantia: "dos años"
}
},
{
    nombre: "pastillas de frenos",
    categoria:"Frenos",
    imagen: "https://static.retail.autofact.cl/blog/c_url_original.2gm021k7b1ydgl.jpg",
    codigo: "jnno",
    precio: 80000,
    adicionales: {
       durabilidad: "media",
       eficiencia: "poca",
       garantia: "un dia "
}
},
{
    nombre: "disco de freno delantero",
    categoria:"Frenos",
    imagen: "https://www.imporbrake.com/wp-content/uploads/2017/12/freno-toyota-par-disco-D_NQ_NP_573411-MLC20527625308_122015-F.jpg",
    codigo: "nvdk",
    precio: 70000,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "buena",
       garantia: "cinco meses"
}
},
{
    nombre: "pinza de freno",
    categoria:"Frenos",
    imagen: "https://www.generalricambi.it/wp-content/uploads/2017/01/prinze-freno-5.jpg",
    codigo: "jndj",
    precio: 300000,
    adicionales: {
       durabilidad: "excelente",
       eficiencia: "poca",
       garantia: "siete meses"
}
},
{
    nombre: "interruptor de freno",
    categoria:"Frenos",
    imagen: "https://www.facet.eu/site/assets/files/1362/7_1151.jpg",
    codigo: "jknj",
    precio: 90000,
    adicionales: {
       durabilidad: "media",
       eficiencia: "buena",
       garantia: "tres años"
}
},
{
    nombre: "pastillas de frenos trasera",
    categoria:"Frenos",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_895355-MCO43141427475_082020-O.webp",
    codigo: "jninj",
    precio: 25000,
    adicionales: {
       durabilidad: "poca",
       eficiencia: "media",
       garantia: "1 semana"
}
},
{
    nombre: "bomba de freno",
    categoria:"Frenos",
    imagen: "https://blog.frenkit.es/hs-fs/hubfs/Que%20es%20una%20bomba%20de%20freno%20o%20cilindro%20maestro%20y%20para%20que%20sirve-1.jpg?width=1000&name=Que%20es%20una%20bomba%20de%20freno%20o%20cilindro%20maestro%20y%20para%20que%20sirve-1.jpg",
    codigo: "dcasdc",
    precio: 92500,
    adicionales: {
       durabilidad: "media",
       eficiencia: "media",
       garantia: "dos semanas"
}
},
{
    nombre: "cable de freno de mano",
    categoria:"Frenos",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLzjFAUnzgn5K20OeQZ0u8auZRU5XS2QLcy9J0fYjJA&s",
    codigo: "owqso",
    precio: 34250,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "poca",
       garantia: "un dia"
}
},
{
    nombre: "liquido de freno",
    categoria:"Frenos",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_892872-MCO45330007021_032021-O.webp",
    codigo: "xaxax",
    precio: 98999,
    adicionales: {
       durabilidad: "excelente",
       eficiencia: "alta",
       garantia: "ocho meses"
}
},
{
    nombre: "tambor de freno",
    categoria:"Frenos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/c/cc/1963%C2%BD_Ford_Falcon_Sprint_Front_Drum_02.jpg",
    codigo: "kokok",
    precio: 87767,
    adicionales: {
       durabilidad: "poca",
       eficiencia: "poca",
       garantia: "un dia"
}
},
{
    nombre: "manguera de freno",
    categoria:"Frenos",
    imagen: "https://fanauto.com.co/wp-content/uploads/2020/01/P-mangueras-de-freno_A.jpg",
    codigo: "wsqs",
    precio: 65789,
    adicionales: {
       durabilidad: "media",
       eficiencia: "buena",
       garantia: "dos horas"
}
},
{
    nombre: "amortiguador",
    categoria:"suspension",
    imagen: "https://cdn.club-magazin.autodoc.de/uploads/sites/11/2020/11/amortiguador-de-coche.jpg",
    codigo: "oind",
    precio: 98000,
    adicionales: {
       durabilidad: "muy buena",
       eficiencia: "alta",
       garantia: "tres meses"
}
},
{
    nombre: "barra estabilizadora",
    categoria:"suspension",
    imagen: "https://www.autoplanet.com.co/wp-content/uploads/2021/02/BIELETA_BARRA_ESTABILIZADORA_IMAGEN_DE_REFERENCIA_mdcs8p.jpg",
    codigo: "snias",
    precio: 34560,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "poca",
       garantia: "cuatro horas"
}
},
{
    nombre: "muelle de suspension",
    categoria:"suspension",
    imagen: "https://www.kia.com/content/dam/kwcms/pe/es/images/noticias/2021/Agosto/1608/que-son-muelles-vehiculos.jpg",
    codigo: "sconsc",
    precio: 76000,
    adicionales: {
       durabilidad: "excelente",
       eficiencia: "media",
       garantia: "seis meses"
}
},
{
    nombre: "brazo de suspension",
    categoria:"suspension",
    imagen: "https://motrio.com.co/wp-content/uploads/2021/04/REF-8660005374-copia.jpg",
    codigo: "weqer",
    precio: 98900,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "poca",
       garantia: "dos meses"
}
},
{
    nombre: "amortiguador de direccion",
    categoria:"suspension",
    imagen: "https://montalbanmedia.com/wp-content/uploads/2021/04/a.jpeg",
    codigo: "sdcsdj",
    precio: 65600,
    adicionales: {
       durabilidad: "siete meses",
       eficiencia: "media",
       garantia: "cuatro meses"
}
},
{
    nombre: "soporte de amortiguador",
    categoria:"suspension",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJWr2ikgd_8kbnHO2hmDc7suYx78RRJd7U0CfXVRy3A&s",
    codigo: "wwewe",
    precio: 54900,
    adicionales: {
       durabilidad: "excelente",
       eficiencia: "baja",
       garantia: "un dia"
}
},
{
    nombre: "bujes de suspension",
    categoria:"suspension",
    imagen: "https://m.media-amazon.com/images/I/618rouHlQkL._AC_UF894,1000_QL80_DpWeblab_.jpg",
    codigo: "plko",
    precio: 32000,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "excelente",
       garantia: "10.000"
}
},
{
    nombre: "resorte helicoidal",
    categoria:"suspension",
    imagen: "https://rehisaresortes.mx/wp-content/uploads/2020/07/026-2-scaled.jpg",
    codigo: "qwwe",
    precio: 30800,
    adicionales: {
       durabilidad: "muy buena",
       eficiencia: "alta",
       garantia: "diez meses"
}
},
{
    nombre: "barra de torsion",
    categoria:"suspension",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6cvjIBk-EutY9eCS--wnXQbDRO2i7eZl1hLxurlzZg&s",
    codigo: "plokplo",
    precio: 400000,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "alta",
       garantia: "nueve meses"
}
},
{
    nombre: "brazo de control",
    categoria:"suspension",
    imagen: "https://www.moogparts.com/content/loc-latam/loc-mx/fmmp-moog/es_MX/suspension/control-arms/control-arms/_jcr_content/product-feature/featureContent2/image.img.png/MOOG-R-series-control-arms-product-detail-1605639335119.png",
    codigo: "errte",
    precio: 800000,
    adicionales: {
       durabilidad: "excelente",
       eficiencia: "muy buena",
       garantia: "dos horas"
}
},
{
    nombre: "alternador",
    categoria:"Electrico",
    imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/12/alternador-coche-2910598.jpg?tf=3840x",
    codigo: "dvsd",
    precio: 67000,
    adicionales: {
       durabilidad: "media",
       eficiencia: "baja",
       garantia: "dos semanas"
}
},
{
    nombre: "centralita electronica",
    categoria:"Electrico",
    imagen: "https://www.autoavance.co/wp-content/uploads/2019/07/centralita-electronica-componente.jpg",
    codigo: "erfre",
    precio: 56090,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "baja",
       garantia: "78.000"
}
},
{
    nombre: "motor de arranque",
    categoria:"Electrico",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu8NP1YUljo66gMx5mYAn2NXNrJgLLofmo4nTi8hZ4KQ&s",
    codigo: "uwdbuqw",
    precio: 56900,
    adicionales: {
       durabilidad: "alta",
       eficiencia: "baja",
       garantia: "siete meses"
}
},
{
    nombre: "bateria de automovil",
    categoria:"Electrico",
    imagen: "https://unibaterias.com.co/wp-content/uploads/2018/09/169-Bateria-para-carro-MAC-SILVER-PLUS-48IST-850.jpg",
    codigo: "trghe",
    precio: 76980,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "excelente",
       garantia: "dos años"
}
},
{
    nombre: "luces de freno",
    categoria:"Eléctrico",
    imagen: "https://www.mitsubishi-motors.com.pe/blog/wp-content/uploads/2021/06/Bombillas-luz-freno-defectuosas.jpg",
    codigo: "sfsg",
    precio: 45000,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "buena",
       garantia: "treinta horas"
}
},
{
    nombre: "regulador de voltaje",
    categoria:"Electrico",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_767384-MCO40835028448_022020-O.webp",
    codigo: "thghu",
    precio: 34980,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "buena",
       garantia: "tres meses"
}
},
{
    nombre: "cableado electrico",
    categoria:"Electrico",
    imagen: "https://www.autobodymagazine.com.mx/wp-content/uploads/2018/08/cables00.png",
    codigo: "defrgr",
    precio: 700000,
    adicionales: {
       durabilidad: "muy excelente",
       eficiencia: "alta",
       garantia: "diez dias"
}
},
{
    nombre: "fusibles",
    categoria:"Electrico",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpxTCj37Kmwuq-j3WPmyOQ6_doWLvfHG4yh96vdcKHQ&s",
    codigo: "erwg",
    precio: 2000,
    adicionales: {
       durabilidad: "poca",
       eficiencia: "alta",
       garantia: "media hora"
}
},
{
    nombre: "rele",
    categoria:"Electrico",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSjzv9AwGEIWHBy7LmuBNjOu-FrBEm3eDKF7d19Lq3g&s",
    codigo: "vswv",
    precio: 5000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "media",
       garantia: "cinco horas"
}
},
{
    nombre: "sensor de temperatura",
    categoria:"Electrico",
    imagen: "https://gepecave.com/wp-content/uploads/2020/05/SENSOR-DE-TEMPERATURA-120C.jpg",
    codigo: "jiolil",
    precio: 80000,
    adicionales: {
       durabilidad: "media",
       eficiencia: "media",
       garantia: "un dia"
}
},
{
    nombre: "llanta de aleacion",
    categoria:"accesorios",
    imagen: "https://www.mini.com.co/content/dam/MINI/common/common/accessories/A0173457_5starTriangleSpokeR141_silber_p.jpg",
    codigo: "efwe",
    precio: 300000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "buena",
       garantia: "tres meses"
}
},
{
    nombre: "kit de embrague",
    categoria:"accesorios",
    imagen: "https://media.euromotor.com.co/10255-large_default/kit-de-embrague-ford-fiesta-1600-modelo-nuevo-luk-.jpg",
    codigo: "eqqq",
    precio: 150000,
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "alta",
       garantia: "un mes"
}
},
{
    nombre: "funda de asiento",
    categoria:"accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_662070-MCO73041918098_112023-O.webp",
    codigo: "qeewr",
    precio: 200000,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "baja",
       garantia: "quince dias"
}
},
{
    nombre: "alfombrillas para automovil",
    categoria:"accesorios",
    imagen: "https://i.ebayimg.com/thumbs/images/g/FLkAAOSwI35l2gXm/s-l640.jpg",
    codigo: "cpoec",
    precio: 60000,
    adicionales: {
       durabilidad: "alta",
       eficiencia: "baja",
       garantia: "ninguna"
}
},
{
    nombre: "protector de parachoques",
    categoria:"accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_668877-MCO50276042240_062022-O.webp",
    codigo: "dcdc",
    precio: 20000,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "alta",
       garantia: "tres dias"
}
},
{
    nombre: "kit de xenon",
    categoria:"accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_704542-MCO52172922069_102022-O.webp",
    codigo: "weewf",
    precio: 350000,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "buena",
       garantia: "un año"
}
},
{
    nombre: "espejo de retrovisor exterior",
    categoria:"accesorios",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wing_mirror.jpg/1200px-Wing_mirror.jpg",
    codigo: "ecwcw",
    precio: 87900,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "normal",
       garantia: "treinta horas"
}
},
{
    nombre: "tubo de escape deportivo",
    categoria:"accesorios",
    imagen: "https://www.firestone.com.mx/content/dam/consumer/fst/la/mx/tips/cuidado-de-llantas/escape_deportivo_automovil.jpg",
    codigo: "casc",
    precio: 700000,
    adicionales: {
       durabilidad: "buena",
       eficiencia: "baja",
       garantia: "un año"
}
},
{
    nombre: "portabicicletas",
    categoria:"accesorios",
    imagen: "https://falabella.scene7.com/is/image/FalabellaCO/62967257_1?wid=800&hei=800&qlt=70",
    codigo: "xqxwq",
    precio: 100000,
    adicionales: {
       durabilidad: "baja",
       eficiencia: "alta",
       garantia: "veinte meses"
}
},
{
    nombre: "pantalla android",
    categoria:"accesorios",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_790432-MCO70780785485_072023-O.webp",
    codigo: "scacs",
    precio: 1200000, 
    adicionales: {
       durabilidad: "bastante",
       eficiencia: "demasiada",
       garantia: "un año y dos meses"
}
},
];




document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registro-form');

    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre-producto').value;
            const categoria = document.getElementById('categoria').value;
            const imagen = document.getElementById('imagen').value;
            const precio = document.getElementById('precio').value;
            const codigo = document.getElementById('codigo-producto').value;
            const durabilidad = document.getElementById('durabilidad').value;
            const eficiencia = document.getElementById('eficiencia').value;
            const garantia = document.getElementById('garantia').value;

            if (!nombre || !categoria || !imagen || !precio || !codigo || !durabilidad || !eficiencia || !garantia) {
                mostrarIndicaciones();
                return;
            }

            const nuevoProducto = {
                nombre,
                categoria,
                imagen,
                precio: parseFloat(precio),
                codigo,
                adicionales: {
                    durabilidad,
                    eficiencia,
                    garantia
                }
            };

            productos.push(nuevoProducto);
            localStorage.setItem('productos', JSON.stringify(productos));
            window.location.href = 'productos.html';
        });
    }

    if (document.getElementById('productos')) {
        renderizarProductos();
    }

    if (document.getElementById('busqueda-nombre')) {
        document.getElementById('busqueda-nombre').addEventListener('input', iniciarBusquedaConRetraso);
        document.getElementById('busqueda-categoria').addEventListener('change', iniciarBusquedaConRetraso);
        document.getElementById('busqueda-precio').addEventListener('input', iniciarBusquedaConRetraso);
        document.getElementById('limpiar-btn').addEventListener('click', limpiarBusqueda);
    }
});

function renderizarProductos() {
    const contenedor = document.getElementById('productos');
    const productosPorPagina = 15;
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    let paginaActual = 1;

    function mostrarProductos(pagina) {
        contenedor.innerHTML = '';
        const inicio = (pagina - 1) * productosPorPagina;
        const fin = Math.min(inicio + productosPorPagina, productos.length);
        const productosPagina = productos.slice(inicio, fin);

        productosPagina.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('producto');
            productoElemento.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Categoría: ${producto.categoria}</p>
                <p>Precio: $${producto.precio.toLocaleString('es-ES')}</p>
                <p>Código: ${producto.codigo}</p>
                <p>Durabilidad: ${producto.adicionales.durabilidad}</p>
                <p>Eficiencia: ${producto.adicionales.eficiencia}</p>
                <p>Garantía: ${producto.adicionales.garantia}</p>
            `;
            contenedor.appendChild(productoElemento);
        });

        mostrarPaginacion(pagina, totalPaginas);
    }

    function mostrarPaginacion(paginaActual, totalPaginas) {
        const contenedorPaginacion = document.getElementById('paginacion');
        contenedorPaginacion.innerHTML = '';

        const botonAnterior = document.createElement('button');
        botonAnterior.textContent = 'Anterior';
        botonAnterior.disabled = paginaActual === 1;
        botonAnterior.classList.toggle('disabled', paginaActual === 1);
        botonAnterior.addEventListener('click', () => {
            if (paginaActual > 1) {
                mostrarProductos(--paginaActual);
            }
        });
        contenedorPaginacion.appendChild(botonAnterior);

        for (let i = 1; i <= totalPaginas; i++) {
            const botonPagina = document.createElement('button');
            botonPagina.textContent = i;
            if (i === paginaActual) {
                botonPagina.classList.add('activo');
            }
            botonPagina.addEventListener('click', () => {
                paginaActual = i;
                mostrarProductos(i);
                const botones = document.querySelectorAll('.paginacion button');
                botones.forEach(b => b.classList.remove('activo'));
                botonPagina.classList.add('activo');
            });
            contenedorPaginacion.appendChild(botonPagina);
        }

        const botonSiguiente = document.createElement('button');
        botonSiguiente.textContent = 'Siguiente';
        botonSiguiente.disabled = paginaActual === totalPaginas;
        botonSiguiente.classList.toggle('disabled', paginaActual === totalPaginas);
        botonSiguiente.addEventListener('click', () => {
            if (paginaActual < totalPaginas) {
                mostrarProductos(++paginaActual);
            }
        });
        contenedorPaginacion.appendChild(botonSiguiente);

        const paginaActualTexto = document.createElement('span');
        paginaActualTexto.classList.add('pagina-actual');
        paginaActualTexto.textContent = `Página ${paginaActual} de ${totalPaginas}`;
        contenedorPaginacion.appendChild(paginaActualTexto);
    }

    mostrarProductos(paginaActual);
}

function buscarProductos() {
    const nombre = document.getElementById('busqueda-nombre').value.toLowerCase();
    const categoria = document.getElementById('busqueda-categoria').value.toLowerCase();
    const precio = document.getElementById('busqueda-precio').value;

    const resultados = productos.filter(producto => {
        const coincideNombre = producto.nombre.toLowerCase().includes(nombre);
        const coincideCategoria = !categoria || producto.categoria.toLowerCase() === categoria;
        const coincidePrecio = !precio || producto.precio <= precio;

        return coincideNombre && coincideCategoria && coincidePrecio;
    });

    mostrarResultadosBusqueda(resultados);
}

function mostrarResultadosBusqueda(resultados) {
    const contenedor = document.getElementById('resultados');
    const contenedorPaginacion = document.getElementById('paginacion-resultados');
    const productosPorPagina = 15;
    const totalPaginas = Math.ceil(resultados.length / productosPorPagina);
    let paginaActual = 1;

    function mostrarProductos(pagina) {
        contenedor.innerHTML = '';
        const inicio = (pagina - 1) * productosPorPagina;
        const fin = Math.min(inicio + productosPorPagina, resultados.length);
        const productosPagina = resultados.slice(inicio, fin);

        productosPagina.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('producto');
            productoElemento.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Categoría: ${producto.categoria}</p>
                <p>Precio: $${producto.precio.toLocaleString('es-ES')}</p>
                <p>Código: ${producto.codigo}</p>
                <p>Durabilidad: ${producto.adicionales.durabilidad}</p>
                <p>Eficiencia: ${producto.adicionales.eficiencia}</p>
                <p>Garantía: ${producto.adicionales.garantia}</p>
            `;
            contenedor.appendChild(productoElemento);
        });

        mostrarPaginacion(pagina, totalPaginas);
    }

    function mostrarPaginacion(paginaActual, totalPaginas) {
        contenedorPaginacion.innerHTML = '';

        const botonAnterior = document.createElement('button');
        botonAnterior.textContent = 'Anterior';
        botonAnterior.disabled = paginaActual === 1;
        botonAnterior.classList.toggle('disabled', paginaActual === 1);
        botonAnterior.addEventListener('click', () => {
            if (paginaActual > 1) {
                mostrarProductos(--paginaActual);
            }
        });
        contenedorPaginacion.appendChild(botonAnterior);

        for (let i = 1; i <= totalPaginas; i++) {
            const botonPagina = document.createElement('button');
            botonPagina.textContent = i;
            if (i === paginaActual) {
                botonPagina.classList.add('activo');
            }
            botonPagina.addEventListener('click', () => {
                paginaActual = i;
                mostrarProductos(i);
                const botones = document.querySelectorAll('.paginacion button');
                botones.forEach(b => b.classList.remove('activo'));
                botonPagina.classList.add('activo');
            });
            contenedorPaginacion.appendChild(botonPagina);
        }

        const botonSiguiente = document.createElement('button');
        botonSiguiente.textContent = 'Siguiente';
        botonSiguiente.disabled = paginaActual === totalPaginas;
        botonSiguiente.classList.toggle('disabled', paginaActual === totalPaginas);
        botonSiguiente.addEventListener('click', () => {
            if (paginaActual < totalPaginas) {
                mostrarProductos(++paginaActual);
            }
        });
        contenedorPaginacion.appendChild(botonSiguiente);

        const paginaActualTexto = document.createElement('span');
        paginaActualTexto.classList.add('pagina-actual');
        paginaActualTexto.textContent = `Página ${paginaActual} de ${totalPaginas}`;
        contenedorPaginacion.appendChild(paginaActualTexto);
    }

    mostrarProductos(paginaActual);
}

function limpiarBusqueda() {
    document.getElementById('busqueda-nombre').value = '';
    document.getElementById('busqueda-categoria').value = '';
    document.getElementById('busqueda-precio').value = '';
    buscarProductos();
}

function iniciarBusquedaConRetraso() {
    mostrarCargando();
    setTimeout(buscarProductos, 2000);
}

function mostrarCargando() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
}

function mostrarIndicaciones() {
    document.getElementById('registro-form').style.display = 'none';
    document.getElementById('indicaciones').style.display = 'block';
}

function ocultarIndicaciones() {
    document.getElementById('indicaciones').style.display = 'none';
    document.getElementById('registro-form').style.display = 'block';
}
