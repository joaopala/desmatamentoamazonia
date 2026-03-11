var config = {
    style: src='./style.json',
    // leave commented to use Mapbox Standard Style
    accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'El Arco de la Deforestación en la Amazonía Brasileña',
    subtitle: 'Storymap de las ciudades que concentran los mayores niveles de deforestación en el pulmon del mundo',
    byline: 'João Pala',
    footer: 'fuente: INPE, Ministerio del Medio Ambiente, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Altamira - Pará',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Altamira_Pará.JPG/1920px-Altamira_Pará.JPG',
            description: 'Una de las ciudades con el mayor área deforestada de la Amazonía brasileña. Altamira, ubicada en el estado del Pará, cuenta con 126.279 habitantes y una extensión territorial de 159.533km2, superando a paises como Portugal y Suiza.',
            location: {
                center: [-3.2000, -52.2000],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'São Félix do Xingú - Pará',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/SaoFelixdoXingu32.jpg',
            description: 'Con una fuerte expansión de la ganadería y presión sobre la selva, esta ciudad del estado del Pará tambien concentra altos niveles de deforestación.',
            location: {
                center: [-6.6400, -51.9900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Apuí - Amazonas',
            image: 'https://apui.am.gov.br/wp-content/uploads/2023/02/FIMI0013-scaled.jpg',
            description: 'Área reciente de aceleración de la deforestación en el sur del estado de Amazonas. En esta ciudad fueron deforestados unos 900km2 de la jungla entre 2015-2020, el equivalente a 120 mil campos de fútbol de la FIFA.',
            location: {
                center: [-7.2000, -59.8800],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Lábrea - Amazonas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Labrea.jpg',
            description: 'Ciudad cerca de los límites con los estados del Acre y Rondonia, se situa en el intitulado Arco de la Deforestación. Registro 850km2 de área deforestada entre 2015-2020, poco más que las extensiones sumadas de las ciudades de Madrid (604km2), Barcelona (101km2) y València (134km2) .',
            location: {
                center: [-7.2500, -64.7900],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
