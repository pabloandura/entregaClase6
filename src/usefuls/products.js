const data = [
    {
      key: 0,
      id: 1,
      name: "Compresor/Limitador de Universal Audio 1176LN",
      description: 'El Urei 1176 es un compresor de tipo FET (Field Effect Transistor), de ataque ultrarápido, graduable entre 20 microsegundos (diez veces más rápido que el LA2A) y 800, y un release graduable entre 50 y 1100 milisegundos',
      stock: 7,
      cost: '2599',
      image: 'https://http2.mlstatic.com/D_NQ_NP_706231-MLA31589323607_072019-O.webp',
      imageDetail: 'https://http2.mlstatic.com/D_NQ_NP_654284-MCO44018216842_112020-O.jpg',
      productCategory: 1,
      sales: 0
    },
    {
      key: 1,
      id: 2,
      name: "Compresor de Universal Audio Teletronix LA-2A",
      description: 'Profesionales de audio elogian el LA-2A. El original era conocido por su suave y natural compresión. Un atenuador eletro-óptico único permite reducción de ganancia instantánea sin incremento en distorsión armónica  (un logro en su época, todavía apreciado). Esta fiel reedición de Universal Audio, marca el renacimiento del Teletronix LA-2A. Un esmerado cuidado se ha tomado para asegurar que cada nuevo LA-2A tenga las características de desempeño del original. Cada unidad es conectada punto por punto y construida en Scotts Valley, California, con cada componente cuidadosamente evaluado por autenticidad. Como resultado, los LA-2A actuales traen la misma compresión legendaria del original de todas sus grabaciones.',
      stock: 5,
      cost: '4699',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-e26362720567cf60__hmac-3c563f218bad61fd7220eeb6dc3d6ad92afaae78/images/items/750/LA2A-large.jpg.auto.webp',
      imageDetail: 'https://analogvibes.com/wp-content/uploads/tube-amplifier-teletronix-la2a-preamp-opto-compressor-specs-frontside-1.jpg',
      productCategory: 1,
      sales: 0
    },
    {
      key: 2,
      id: 3,
      name: "Compresor/Limitador de Empirical Labs Distressor",
      description: 'El Empirical Labs Distressor EL8 es uno de los compresores más vendidos de todos los tiempos. Ofrece un sonido cálido y vintage mediante el uso de un circuito de control de ganancia diseñado a medida. El Distressor EL8 emula el sonido clásico de los compresores a válvulas de los años 60 y 70 que lo hace ideal para la grabación digital moderna.',
      stock: 19,
      cost: '1549',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-609865c2d24388ed__hmac-e59b8fb61e43ebc13b59cf5942f18c30093f109e/images/items/750/ELI8M-large.jpg.auto.webp',
      imageDetail: 'https://www.reflexion-arts.com/wp-content/uploads/2016/04/empirical-labs-el8.jpg',
      productCategory: 1,
      sales: 0
    },
    {
      key: 3,
      id: 4,
      name: "Canal Completo de Rupert Neve Designs Shelford Channel",
      description: 'Rupert vuelve a crear un previo de micrófono Clase A, basado en la ganancia proporcionada por el propio transformador de entrada, al cual añade la mejor de las ecualizaciones clásicas por inductor (ya utilizadas en los Shelford 5051 y 5052) y un compresor de puente de diodos que sigue las pisadas del legendario 2254 y le da el nombre de Rupert Neve Shelford Channel. La salida se hace, como no podía dejar de ser, a través de un transformador, esta vez, con un control variable de saturación Silk y el doble de voltaje de operación comparando con los diseños clásicos.',
      stock: 2,
      cost: '3999',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-2d5a88baa84ae155__hmac-1539196ba2d665e411b7f902dc7212cb1856e64e/images/items/750/ShelfordCH-large.jpg.auto.webp',
      imageDetail: 'https://www.reflexion-arts.com/wp-content/uploads/2016/10/shelford-channel.jpg',
      productCategory: 0,
      sales: 0
    },
    {
      key: 4,
      id: 5,
      name: "Canal Completo de API The Channel Strip",
      description: 'La tira de canales es un módulo de entrada completo con pre-micrófono, procesamiento dinámico, ecualizador de precisión y control de nivel de salida. Con una amplia medición de la señal, múltiples puntos de inserción balanceados y un interruptor de silenciamiento de salida, la fila de canales contiene las mejores características de un canal de entrada de una consola grande en un solo espacio de rack. Es la elección perfecta para cualquiera que busque ese sonido de consola API de alto rendimiento.',
      stock: 5,
      cost: '3130',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-76f8f5b03c378bad__hmac-2af17fce9984d5d26fee2ffdce97c09197c2ece5/images/items/750/APIChanStr-large.jpg.auto.webp',
      imageDetail: 'https://cdn.shopify.com/s/files/1/0657/6821/products/9673819_800.jpg?v=1571269897',
      productCategory: 0,
      sales: 0
    },
    {
      key: 5,
      id: 6,
      name: "Compresor de Mastering Shadow Hills Industries",
      description: 'Shadow Hills Industries creó el Mastering Compressor para ofrecerte control dinámico de primer nivel, con la versatilidad sonora necesaria para colorear tu sonido mediante el uso de diferentes transformadores de salida conmutables. En primer lugar, el Mastering Compressor funciona en modo estéreo o dual mono, para que lo podás usar en cualquier tipo de aplicación, e incluye dos secciones de compresión (óptica y discreta), para permitirte aplicar técnicas de dos etapas de compresión. ',
      stock: 2,
      cost: '9590',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-96c12c09757214c7__hmac-9ea38cc7b545fb47d205f29528775bdcda558577/images/items/750/MasterComp-large.jpg.auto.webp',
      imageDetail: 'https://images.reverb.com/image/upload/s--EhHHY4g3--/f_auto,t_supersize/v1597956159/rykct85mjkniixq5pegw.jpg',
      productCategory: 1,
      sales: 0
    },
    {
      key: 6,
      id: 7,
      name: "Equalizador de Valvula Pultec EQP-1A",
      description: 'Los ecualizadores Pultec "mejorados" de Manley ofrecen el mismo sonido dulce y control que el original vintage, pero con circuitos modernos que establecen nuevos estándares en las instalaciones de grabación contemporáneas de hoy. Puede configurar el EQ en posiciones "planas" o omitirlo por completo. Todos los controles de impulso y corte son potenciómetros de plástico conductor continuamente variables para un funcionamiento absolutamente silencioso y una larga vida útil. Los monobloques de una sola unidad de rack ocupan un tercio del espacio de los "Pultecs antiguos", una consideración importante para la asignación de espacio de rack externo.',
      stock: 3,
      cost: '4295',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-459203084f821f90__hmac-f12bab341b70dcf86bde59b2c75b9d4a217cb99a/images/items/750/EQP1A-large.jpg.auto.webp',
      imageDetail: 'https://m.media-amazon.com/images/I/51DPLpqX40L._AC_SL1000_.jpg',
      productCategory: 2,
      sales: 0
    },
    {
      key: 7,
      id: 8,
      name: "Equalizador de Mastering Pultec MEQM-5",
      description: 'Para complementar el control brindado por el EQP-1A, se solía combinarlo con el MEQ-5, un ecualizador especializado en el rango de frecuencias medias, con tres filtros semiparamétricos. De izquierda a derecha, observamos tres filtros: dos que aumentan y uno que atenúa. Cada uno cuenta con un selector de frecuencia y un control de ganancia. El filtro Peak a la izquierda, puede aumentar hasta 10dB en las frecuencias 200Hz, 300Hz, 500Hz, 700Hz y 1000Hz. El filtro Dip puede atenuar hasta 10dB las frecuencias de 200Hz, 300Hz, 500Hz, 700Hz, 1kHz, 1.5kHz, 2kHz, 3kHz, 4kHz, 5kHz y 7kHz. Por último, el filtro Peak a la derecha, puede aumentar hasta 8dB las frecuencias de 1.5kHz, 2kHz, 3kHz, 4kHz, 5kHz.',
      stock: 1,
      cost: '4195',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-6f862c7a0bf24411__hmac-b8b7b8b4bb92c7345e4ae61f29dd7329a57c474d/images/items/750/MEQM5-large.jpg.auto.webp',
      imageDetail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2kwqoOjzzdRcxd7zWjE762bhBqRaiMLFA8efeFSW1YetCOTOvUdZPExBavT-cMs9llY&usqp=CAU',
      productCategory: 2,
      sales: 0
    },
    {
      key: 8,
      id: 9,
      name: "Enriquecedor de Fuente Primaria de Rupert Neve 5045",
      description: 'El Rupert Neve Portico 5045 es un Anti-feedback con ajustes organizados de manera muy sencilla y que requieren en general una configuración mínima, el Rupert Neve Portico 5045 es una herramienta muy eficaz e indispensable para los lugares de culto, los estadios, las salas de conciertos, o cualquier configuración de sonido sujeta al Feedback. El 5045 comparte algunas características de las puertas de ruido convencionales, pero recurre a un concepto diferente. Entre los aspectos comunes de las dos tecnologías, ambos procesadores reducen la ganancia en ausencia de señal, o para ser más específicos, atenúan el nivel de la señal de entrada cuando el nivel cae por debajo de un umbral determinado por el usuario. El Rupert Neve Portico 5045 detecta cuando alguien habla o canta en el micrófono y deja pasar la señal, también detecta cuando la persona deja de hablar o cantar para reducir la ganancia adecuadamente, lo que ayuda a reducir la probabilidad de Feedback en cualquier sistema de sonido. Más importante aún, el 5045 no necesita ningún filtrado ni procesamiento digital para obtener resultados altamente eficaces.',
      stock: 2,
      cost: '1899',
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-de2d86a400fbea4d__hmac-cc5a7bbdbebb2b94b907dfc9676ed99310207ca8/images/items/750/RND5045-large.jpg.auto.webp',
      imageDetail: 'https://www.bhphotovideo.com/images/images2500x2500/rupert_neve_designs_5045_primary_source_enhancer_1597242.jpg',
      productCategory: 3,
      sales: 0
    }
  ]

  export default data;