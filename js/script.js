/* class Producto {
  constructor(id, nombre, volumen, tipo, precio, unidades, stock, img) {
    this.id = id;
    this.nombre = nombre;
    this.volumen = volumen;
    this.tipo = tipo;
    this.precio = precio;
    this.unidades = unidades
    this.stock = stock;
    this.img = img;
  }
}
let capriccioVino = new Producto(828, "Capriccio Fiore", 750, "vino", 350, 1, 0, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/capri1-3f3a1b44008c7e7a6416396787816009-1024-1024.webp")
let coquenaCorte = new Producto(829, "Coquena Corte Blend", 750, "vino", 1237, 1, 15, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/coquena-corte-blend-750ml1-a9b448f89a1d0b3b5c16601000472491-1024-1024.webp")

let catalogo = [
    {id: 101, nombre: "Fernet 1882", volumen: 750,tipo: "aperitivo", precio: 1023, unidades: 1,stock: 0, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/fernet-1882-750ml1-684fc5e258450cf8a716358009041959-640-0.jpg"},
    {id: 102, nombre: "Fernet Branca", volumen: 1000,tipo: "aperitivo", precio: 2314, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/fernet-branca-1l1-b9fe40bc716e87bd7116358008930524-640-0.jpg"},
    {id: 103, nombre: "Fernet Branca", volumen: 750,tipo: "aperitivo", precio: 1755, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/fernet-branca-750ml1-b9fe40bc716e87bd7116358008658934-640-0.jpg"},
    {id: 104, nombre: "Gancia", volumen: 980,tipo: "aperitivo", precio: 630, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/gancia-980ml1-c685d49cd714625d1e16358008487785-640-0.jpg"},
    {id: 105, nombre: "Martini Rosso", volumen: 1000,tipo: "aperitivo", precio: 520, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/martini-rosso-1l1-3506a85668ce4faf2716358008215395-640-0.jpg"},
    {id: 106, nombre: "Jagermeister", volumen: 700, tipo: "licor", precio: 4500, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jagermeister-700ml1-093601e3275967e9ea16361541295978-640-0.jpg"},
    {id: 107, nombre: "Campari", volumen: 750, tipo: "aperitivo", precio: 1065, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/campari-750ml1-99cf9098a10db9373316358009386851-640-0.jpg"},
    {id: 201, nombre: "Amstel Lager", volumen: 473,tipo: "cerveza", precio: 3120, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/amstel-lager-lata-473ml-x-24u1-1a37b578c36ad6da3c16364104572440-1024-1024.jpg"},
    {id: 202, nombre: "Andes IPA", volumen: 473,tipo: "cerveza", precio: 4076, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/andes-ipa-473ml-x241-e652173a036ce82ffd16360656758201-1024-1024.jpg"},
    {id: 203, nombre: "Andes IPA Roja", volumen: 473,tipo: "cerveza", precio: 4076, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/ipa-roja1-cbc15d781edf02152d16403492081398-1024-1024.jpg"},
    {id: 204, nombre: "Andes Roja", volumen: 473,tipo: "cerveza", precio: 4076, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/andes-roja-473ml1-82b159f968960c1a4a16360655928282-1024-1024.jpg"},
    {id: 205, nombre: "Andes Rubia", volumen: 473,tipo: "cerveza", precio: 3886, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/andes-rubia-473ml-x241-51a448519e3ad0fbdb16360655590335-1024-1024.jpg"},
    {id: 206, nombre: "Budweiser", volumen: 410,tipo: "cerveza", precio: 4697, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/bud-lata-4101-9f60c09e666c58f93c16400146112946-1024-1024.jpg"},
    {id: 207, nombre: "Heineken", volumen: 473,tipo: "cerveza", precio: 4745, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/hein-lata1-8dd0a3d5ceb78ffcd016396767356831-1024-1024.jpg"},
    {id: 208, nombre: "Imperial Rubia", volumen: 473,tipo: "cerveza", precio: 3510, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/imperial-golden-lata-473ml-x-24u1-3b62ee4337caa6c59016364105018580-1024-1024.jpg"},
    {id: 209, nombre: "Imperial Golden", volumen: 473,tipo: "cerveza", precio: 3536, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/imperial-golden-lata-473ml-x-24u1-3b62ee4337caa6c59016364105018580-1024-1024.jpg"},
    {id: 210, nombre: "Imperial IPA", volumen: 473,tipo: "cerveza", precio: 4030, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/imperial-ipa-lata-473ml-x-24u1-4d961c85dc50f91dd716364104980314-640-0.jpg"},
    {id: 211, nombre: "Quilmes Cl??sica", volumen: 473,tipo: "cerveza", precio: 3815, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/quilmes-473ml1-b9d89e4e647ed6d9b416360611770181-1024-1024.jpg"},
    {id: 212, nombre: "Schneider", volumen: 473,tipo: "cerveza", precio: 3380, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/schneider-473ml1-94d2e49d13dc58942a16360611690463-1024-1024.jpg"},
    {id: 213, nombre: "Stella Artois", volumen: 473,tipo: "cerveza", precio: 5247, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/stella-lata-473ml1-b29a67dc321e7bdc0716360611513291-1024-1024.jpg"},
    {id: 214, nombre: "Warsteiner", volumen: 473,tipo: "cerveza", precio: 3315, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/warst1-2478be8982fb71036b16400186693709-1024-1024.jpg"},
    {id: 301, nombre: "Monster Energy", volumen: 473,tipo: "energizante", precio: 1680, unidades: 6, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/monster-energy-473ml-x-6u1-9e07a3572963519b6d16363953749478-640-0.jpg"},
    {id: 302, nombre: "Red Bull", volumen: 250,tipo: "energizante", precio: 8109, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/red-bull-250ml-x-24u1-d0aaa24fdbe2300c5f16363953342404-1024-1024.jpg"},
    {id: 303, nombre: "Red Bull", volumen: 355,tipo: "energizante", precio: 8330, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/red-bull-355ml-x-24u1-42814a3f2e4f9eed8f16363953005387-1024-1024.jpg"},
    {id: 304, nombre: "Red Bull Tropical Edition", volumen: 250,tipo: "energizante", precio: 6085, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/red-bull-tropical-edition-250ml-x-24u1-a0ce5a44da54db239116363952852610-1024-1024.jpg"},
    {id: 305, nombre: "Speed", volumen: 250,tipo: "energizante", precio: 3484, unidades: 24, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/speed-250ml-x-24u1-b27619c1e50088768316363952661861-1024-1024.jpg"},
    {id: 306, nombre: "Speed", volumen: 473,tipo: "energizante", precio: 2145, unidades: 12, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/speed-xl1-1ee55c0f7fe175923f16400123306116-1024-1024.jpg"},
    {id: 307, nombre: "Coca Cola", volumen: 1750, tipo: "gaseosa", precio: 2653, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/coca-cola-1-75l-x-8u-34b6b34fbe4b15c6f816364090380738-1024-1024.jpg"},
    {id: 308, nombre: "Coca Cola Light", volumen: 2250, tipo: "gaseosa", precio: 2984, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/coca-light-2251-8838ee102973cb559916400111146414-1024-1024.jpg"},
    {id: 309, nombre: "Paso de los Toros T??nica", volumen: 1500, tipo: "gaseosa", precio: 1483, unidades: 6, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/paso-de-los-toros1-a29607facff006ffef16442641737004-1024-1024.jpg"},
    {id: 310, nombre: "Schweppes Pomelo", volumen: 1500, tipo: "gaseosa", precio: 2087, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/schweppes-pomelo-s-a-1-5l-x-8u-326d72b97e8f745cf116364090990174-1024-1024.jpg"},
    {id: 311, nombre: "Schweppes T??nica", volumen: 1500, tipo: "gaseosa", precio: 2086, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/schweppes-tonica-1-5l-x-8u-f7c9f833bb736f86e216364091033578-1024-1024.jpg"},
    {id: 312, nombre: "Sprite", volumen: 2250, tipo: "gaseosa", precio: 2986, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/sprite-2-25l-x-8u-3ba1237325f104028816364091219116-1024-1024.jpg"},
    {id: 313, nombre: "Baggio Naranja", volumen: 1000, tipo: "jugo", precio: 1452, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/baggio-naranja1-119dfc907e3f46af8416397534337939-640-0.jpg"},
    {id: 314, nombre: "Baggio Multifruta", volumen: 1000, tipo: "jugo", precio: 1452, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/baggio-multi1-4dd165219f97874d9c16397529997714-640-0.jpg"},
    {id: 315, nombre: "Cepita Naranja Botella", volumen: 1000, tipo: "jugo", precio: 1197, unidades: 6, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/cepita-naranja-pet-1l-x6u11-d206d09b1b4458fdfb16491113854267-640-0.jpg"},
    {id: 316, nombre: "Cepita Naranja", volumen: 1000, tipo: "jugo", precio: 2123, unidades: 8, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/cepita-naranja-1l-x-8u1-0b0d52441d9222a72616363956652129-640-0.jpg"},
    {id: 401, nombre: "Beefeater", volumen: 1000, tipo: "gin", precio: 4275, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/gin-beefeater1-89d157ae53ee6bf65716414684795594-640-0.jpg"},
    {id: 402, nombre: "Beefeater 24", volumen: 750, tipo: "gin", precio: 8202, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/beef-241-7250414f8ce000ccc316414688676945-640-0.jpg"},
    {id: 403, nombre: "Bombay", volumen: 750, tipo: "gin", precio: 5910, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/bombay-750ml1-5e2af6170d494cce4b16361527775915-640-0.jpg"},
    {id: 404, nombre: "Beefeater", volumen: 750, tipo: "gin", precio: 3830, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/beefeater-750ml1-5e11ad2a025496d7cb16361527858157-640-0.jpg"},
    {id: 405, nombre: "Gordons", volumen: 700, tipo: "gin", precio: 1880, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/gordons-700ml1-0e27015b13890bc09516361527604488-640-0.jpg"},
    {id: 406, nombre: "Heredero", volumen: 700, tipo: "gin", precio: 2279, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/heredero-700ml1-a5a1ec5cb1c23ebafd16601002801862-640-0.jpg"},
    {id: 407, nombre: "Merle", volumen: 750, tipo: "gin", precio: 1294, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/merle-750ml1-98c2eb634610a68f9216601005458732-640-0.jpg"},
    {id: 408, nombre: "Tanqueray", volumen: 700, tipo: "gin", precio: 3864, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/tanqueray-700ml1-58a6c9083c4be12dad16361526976979-640-0.jpg"},
    {id: 500, nombre: "Chivas Regal 12 a??os", volumen: 750, tipo: "whisky", precio: 4298, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/chivas-regal-12-anos-750ml1-b5c5c7d5a388bc11d616363358943291-640-0.jpg"},
    {id: 501, nombre: "Jack Daniels", volumen: 750, tipo: "whisky", precio: 9540, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jack-daniels-750ml1-8a7888124dda1fac6c16363358353322-640-0.jpg"},
    {id: 502, nombre: "Grants Triple Wood", volumen: 750, tipo: "whisky", precio: 2500, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/grants-triple-wood-750ml1-724dd7ba5ef7fe671416363358426953-640-0.jpg"},
    {id: 503, nombre: "Jameson", volumen: 750, tipo: "whisky", precio: 3480, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jameson-750ml1-2f31230f51e54fc8e616363358123870-640-0.jpg"},
    {id: 504, nombre: "Jack Daniels Honey", volumen: 750, tipo: "whisky", precio: 9540, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jack-daniels-honney-750ml1-9c5dea701e0546217f16363358236833-640-0.jpg"},
    {id: 505, nombre: "Jim Beam Devil", volumen: 750, tipo: "whisky", precio: 4985, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jim-bean-devil-750ml1-f5e2f9cc3df783090c16491792602850-640-0.jpg"},
    {id: 506, nombre: "Johnnie Walker Black Label", volumen: 1000, tipo: "whisky", precio: 7183, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jw-black-label-1l1-b07ceae0177ab561a416363356977675-640-0.jpg"},
    {id: 507, nombre: "Jim Beam Honey", volumen: 750, tipo: "whisky", precio: 4085, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jim-beam-honey-750ml1-ec52bc2bc18b4255bc16363357230587-640-0.jpg"},
    {id: 508, nombre: "Johnnie Walker Blue Label", volumen: 750, tipo: "whisky", precio: 52312, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jw-blue-label-750ml1-2841430e0590ae7a1a16363356782067-640-0.jpg"},
    {id: 509, nombre: "Johnnie Walker Red Label", volumen: 750, tipo: "whisky", precio: 4265, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jw-red-label-1l1-5829f88c8f106b4bcd16363356474231-640-0.jpg"},
    {id: 510, nombre: "J&B", volumen: 750, tipo: "whisky", precio: 2511, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jyb-750ml1-7f91b3949edf15dc0116363356222319-640-0.jpg"},
    {id: 511, nombre: "The Macallan 12 a??os", volumen: 700, tipo: "whisky", precio: 33804, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/the-macallan-12-anos-700ml1-9ab9d8dee204ad985616363355714070-640-0.jpg"},
    {id: 512, nombre: "VAT 69", volumen: 700, tipo: "whisky", precio: 1203, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/vat-69-700ml1-3b6c4cb0f5560608b116363355488769-640-0.jpg"},
    {id: 513, nombre: "White Horse", volumen: 700, tipo: "whisky", precio: 1584, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/white-horse-750ml-f1cc693d7ca9fc1ee516364126747435-640-0.jpg"},
    {id: 600, nombre: "Absolut", volumen: 700, tipo: "vodka", precio: 3570, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/absolut-700ml1-b8575e045335f95cd116363274310473-640-0.jpg"},
    {id: 601, nombre: "Absolut Grapefruit", volumen: 700, tipo: "vodka", precio: 2518, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/absolut-grapefruit-700ml1-ce9c372a6be4dbc8f116363274031557-640-0.jpg"},
    {id: 602, nombre: "Absolut Lime", volumen: 700,tipo: "vodka", precio: 2638, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/absolut-lime-700ml1-316923d8f3e7d0959b16600999277629-640-0.jpg"},
    {id: 603, nombre: "Absolut Mango", volumen: 700, tipo: "vodka", precio: 2518, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/absolut-mango-700ml1-d5951b1efc0d49832816541482046492-640-0.jpg"},
    {id: 604, nombre: "Absolut Pera", volumen: 700, tipo: "vodka", precio: 2518, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/absolut-pera-700ml1-188d4badf8c3740a2b16363274145374-640-0.jpg"},
    {id: 605, nombre: "Absolut Raspberry", volumen: 750, tipo: "vodka", precio: 2518, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/absolut1-8c3b61eecd5d468b3216403446351242-640-0.jpg"},
    {id: 606, nombre: "Bols", volumen: 750, tipo: "vodka", precio: 656, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/bols-750ml1-af282f98960075e1b916637909500162-640-0.jpg"},
    {id: 607, nombre: "Skyy", volumen: 700, tipo: "vodka", precio: 983, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/skyy-700ml1-2a87aa80ea2888f22516363273839365-640-0.jpg"},
    {id: 608, nombre: "Smirnoff", volumen: 700, tipo: "vodka", precio: 1130, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/smirnoff-700ml1-e3af2e4b45a072d60c16363273732959-640-0.jpg"},
    {id: 609, nombre: "Smirnoff Bitter Citric", volumen: 700, tipo: "vodka", precio: 676, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/smirnoff-bitter-citric-700ml1-8d8eec9712c2d44a2016363273647146-640-0.jpg"},
    {id: 610, nombre: "Smirnoff Grapefruit & Lime", volumen: 700, tipo: "vodka", precio: 1140, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/grapefruit1-8eafd2b7e2612b2fdb16390602355896-640-0.jpg"},
    {id: 611, nombre: "Smirnoff Green Apple", volumen: 700, tipo: "vodka", precio: 1116, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/smirnoff-green-apple-700ml1-db386bc3eb35df2a6e16363273500278-640-0.jpg"},
    {id: 612, nombre: "Smirnoff Raspberry", volumen: 700, tipo: "vodka", precio: 1116, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/smirnoff-raspberry-700ml1-f8f246674198f6422316363273413828-640-0.jpg"},
    {id: 613, nombre: "Smirnoff Watermelon", volumen: 700, tipo: "vodka", precio: 1116, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/smirnoff-watermelon-700ml1-2d6288696e784b033316363273352955-640-0.jpg"},
    {id: 700, nombre: "Bacardi Blanco", volumen: 750, tipo: "ron", precio: 2687, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/bacardi-blanco-750ml1-6c1a85b754ccc1519116363240681871-640-0.jpg"},
    {id: 701, nombre: "Bacardi Oro", volumen: 750, tipo: "ron", precio: 2687, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/bacardi-oro-750ml1-6a58f677cd8535187816363240565189-640-0.jpg"},
    {id: 702, nombre: "Captain Morgan Spice Gold", volumen: 700, tipo: "ron", precio: 708, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/capitan-morgan-spice-gold-750ml1-a3cf9f03d3a4aa90b316363240453828-640-0.jpg"},
    {id: 703, nombre: "Captain Morgan White Rum", volumen: 700, tipo: "ron", precio: 910, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/capitan-morgan-white-rum-750ml1-59efa7cd3d682825b716363240378942-640-0.jpg"},
    {id: 704, nombre: "Havana Club A??ejo Especial", volumen: 750, tipo: "ron", precio: 2228, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/havana-club-anejo-especial-750ml1-44e4a9ae4cf6f1843116363240294953-640-0.jpg"},
    {id: 705, nombre: "Jose Cuervo Especial Blanco", volumen: 750, tipo: "ron", precio: 5703, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/jose-cuervo1-36afcce9dfc1a868a716396770219860-640-0.jpg"},
    {id: 801, nombre: "Alambrado Cabernet", volumen: 750, tipo: "vino", precio: 684, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/alambrado-cabernet-750ml1-5c4bd1cfcb22f869db16364992974839-640-0.jpg"},
    {id: 802, nombre: "Alambrado Cabernet Franc", volumen: 750, tipo: "vino", precio: 780, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/alambrado-cabernet-franc-750ml1-7075639f8a8684d7c016364992950426-640-0.jpg"},
    {id: 803, nombre: "Alambrado Malbec", volumen: 1500, tipo: "vino", precio: 1360, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/alambrado-malbec-1500ml1-74581983a3d8b4a7bf16600999378073-640-0.jpg"},
    {id: 804, nombre: "Alambrado Malbec", volumen: 750, tipo: "vino", precio: 656, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/alambrado-malbec-750ml1-4609fe1703ebe9be6b16364992885097-640-0.jpg"},
    {id: 805, nombre: "Alma Mora Cabernet Sauvignon", volumen: 750, tipo: "vino", precio: 852, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/alma-mora-cabernet-sauvignon-750ml1-8dcabb6394b85a800b16364992837179-640-0.jpg"},
    {id: 806, nombre: "Alma Mora Malbec", volumen: 750, tipo: "vino", precio: 852, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/alma-mora-malbec-750ml1-b051567938e04b272416364992802321-640-0.jpg"},
    {id: 807, nombre: "Cordero Con Piel De Lobo", volumen: 750, tipo: "vino", precio: 625, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/cordero-con-piel-de-lobo-malbec-750ml1-734fa9c5c23711d81d16487871451117-640-0.jpg"},
    {id: 808, nombre: "Dad?? Art Malbec", volumen: 750, tipo: "vino", precio: 810, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/dada-art-malbec-750ml1-574cbffb35cf3e563416364992610754-640-0.jpg"},
    {id: 809, nombre: "Dilema Blanco Dulce Natural", volumen: 750, tipo: "vino", precio: 436, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/dilema-blanco-dulce-natural1-b94e45d6824359956316601620629320-640-0.jpg"},
    {id: 810, nombre: "Dilema Rosado Dulce Natural", volumen: 750, tipo: "vino", precio: 436, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/dilema-rosado-dulce-natural-750ml1-1a6ddab2063735439416541485791248-640-0.jpg"},
    {id: 811, nombre: "Dilema Day Malbec", volumen: 750, tipo: "vino", precio: 410, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/dilema-day-malbec-750ml1-23a483373fab67bde416541485803771-640-0.jpg"},
    {id: 812, nombre: "Escorihuela Gasc??n Cabernet Sauvignon", volumen: 750, tipo: "vino", precio: 931, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/escorihuela-gascon-cabernet-sauvignon-750ml1-d20d45d963e6334b6016364992122612-640-0.jpg"},
    {id: 813, nombre: "Elementos Malbec", volumen: 750, tipo: "vino", precio: 426, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/elementos-malbec-750ml1-0215c426247c96429c16364992564140-640-0.jpg"},
    {id: 814, nombre: "Estancia Mendoza Cabernet Malbec", volumen: 750, tipo: "vino", precio: 309, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/estancia-mendoza-cabernet-malbec-750ml1-70ba52caa11ceebb5516541482176223-640-0.jpg"},
    {id: 815, nombre: "Estancia Mendoza Cabernet Sauvignon Reserva", volumen: 750, tipo: "vino", precio: 918, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/estancia-mendoza-cabernet-sauvignon-reserva-750ml11-d53f6d993c4420bff216541486333045-640-0.jpg"},
    {id: 816, nombre: "Estancia Mendoza Chardonnay", volumen: 750, tipo: "vino", precio: 446, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/estancia-mendoza-chardonnay-750ml1-9b461127d99511dce316541485805806-640-0.jpg"},
    {id: 817, nombre: "Estancia Mendoza Chenin Chardonay Dulce", volumen: 750, tipo: "vino", precio: 294, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/estancia-mendoza-chenin-chardonnay-dulce-750ml1-59c5a84b7385c7651916541482096010-640-0.jpg"},
    {id: 818, nombre: "Estancia Mendoza Roble Cabernet Sauvignon", volumen: 750, tipo: "vino", precio: 702, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/estancia-mendoza-roble-cabernet-sauvignon-750ml1-03c9008087fa245ad416541482097323-640-0.jpg"},
    {id: 819, nombre: "Estancia Mendoza Malbec Reserva", volumen: 750, tipo: "vino", precio: 918, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/estancia-mendoza-malbec-reserva-750ml1-980085a4e1c0f44c4b16541482201479-640-0.jpg"},
    {id: 820, nombre: "Fond De Cave Malbec", volumen: 750, tipo: "vino", precio: 964, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/fond-cave-malbec-750ml1-6c44d70180edcc5e2d16364948935759-640-0.jpg"},
    {id: 821, nombre: "Lola Montes Malbec", volumen: 750, tipo: "vino", precio: 576, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/lola-montes-malbec-750ml1-92b7df1ede7300a74216364936922005-640-0.jpg"},
    {id: 822, nombre: "L??pez Malbec", volumen: 750, tipo: "vino", precio: 264, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/lopez-malbec-750ml1-509c0550f34bb99e9216364936821606-640-0.jpg"},
    {id: 823, nombre: "Los Helechos Chardonnay", volumen: 750, tipo: "vino", precio: 1717, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/los-helechos-chardonnay-750ml1-ab2a28032fdc87a4fa16541486010707-640-0.jpg"},
    {id: 824, nombre: "Los Intocables Cabernet", volumen: 750, tipo: "vino", precio: 750, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/los-intocables-cabernet-750ml1-807618583e249653b916364936720580-640-0.jpg"},
    {id: 825, nombre: "Norton Cosecha Tard??a", volumen: 750, tipo: "vino", precio: 536, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/norton-cosecha-tardia-750ml1-3015ca77f5cbdc002216364936108477-640-0.jpg"},
    {id: 826, nombre: "Norton Cosecha Tard??a Rosado", volumen: 750, tipo: "vino", precio: 497, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/cosecha-tardia-rosado1-6fc50c790486de3d2516390567690138-640-0.jpg"},
    {id: 827, nombre: "Santa Julia Malbec", volumen: 750, tipo: "vino", precio: 500, unidades: 1, stock: 50, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/santa-julia-malbec-750ml1-89b671549155f455ea16601005876878-640-0.jpg"},
];
catalogo.push(capriccioVino, coquenaCorte)  *///Array de productos previo a fetch + push de productos nuevos en cat??logo

fetch("../catalogo.json")
  .then(respuesta=>respuesta.json())
  .then(catalogo=>{

  let contenedorProductos = document.getElementById("contenedorProductos")
  let carrito = document.getElementById("carrito")
  let arrayCarrito = []
  renderizarCatalogo(catalogo)
  let recuperarCarritoLS = JSON.parse(localStorage.getItem("carrito"))
  if (recuperarCarritoLS){
    arrayCarrito=recuperarCarritoLS
  }
  renderizarCarrito()
  let montoFinal = arrayCarrito.reduce((acum, producto)=> acum+producto.subtotal, 0)
  let btnCompra = document.getElementById("botonCompra")
  btnCompra.onclick = ()=>{
    Swal.fire({
      title: 'Compra realizada con ??xito!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 2000
    })    
    localStorage.clear()
    arrayCarrito = []
    carrito.innerHTML=""
    renderizarTotal()
  }

  let btnBorrar = document.getElementById("botonBorrar")
  btnBorrar.onclick = ()=>{
    localStorage.clear()
    arrayCarrito = []
    carrito.innerHTML=""
    Swal.fire({
      title: 'Su carrito de compras ha sido vaciado',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
    renderizarTotal()
  }

  function renderizarCatalogo(arrayCatalogo){
      contenedorProductos.innerHTML = ''
      for (const bebida of arrayCatalogo) {
          let unidadesProducto = ` unidad.`
          if (bebida.unidades>1){
              unidadesProducto = " unidades."
          }
      
          let tarjetaProducto = document.createElement("div")
          if (bebida.stock == 0){
              tarjetaProducto.className = "productoSinStock"
          } else {
              tarjetaProducto.className = "producto"
          }
          let stockProducto = ""
          if (bebida.stock ==0){
              stockProducto = "Producto Sin Stock"
          }
          if (bebida.stock > 0){
          tarjetaProducto.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src=${bebida.img} class="producto-image card-img-top" alt="...">
              <div class="card-body">
                <p class="producto-title">${bebida.nombre}</p>
                <div class="producto-detalles">
                  <p class="producto-subtitulo">${bebida.volumen+"cc x"+bebida.unidades+"u."}
                  <p class="producto-precio">$${bebida.precio}</p>
                  <button type="button" class="botonAgregar btn btn-primary" id=${bebida.id}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                  </svg>
                  Agregar producto
                </button>
                </div>
              </div>
            </div>
          `
          } else {
            tarjetaProducto.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src=${bebida.img} class="producto-image card-img-top" alt="...">
              <div class="card-body">
                <p class="producto-title">${bebida.nombre}</p>
                <div class="producto-detalles">
                  <p class="producto-subtitulo">${bebida.volumen+"cc x"+bebida.unidades+"u."}
                  <p class="producto-precio">$${bebida.precio}</p>
                  <button type="button" disabled class="btn btn-primary botonAgregar" title="No hay stock de este producto" id=${bebida.id}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                  </svg>
                  ${stockProducto}
                </button>
                </div>
              </div>
            </div>
          `
          }
          contenedorProductos.append(tarjetaProducto)
      }
      let botonAgregar = document.getElementsByClassName("botonAgregar")
      for (const boton of botonAgregar) {
          boton.addEventListener("click", fnAgregarAlCarrito)        
      }
  }
  function fnAgregarAlCarrito(e){
      let productoBuscado = catalogo.find(producto => producto.id == e.target.id)
      let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
      
      if (posicionProducto != -1) {
          arrayCarrito[posicionProducto] = {
            id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, unidades: arrayCarrito[posicionProducto].unidades, precio: arrayCarrito[posicionProducto].precio, cantidad: arrayCarrito[posicionProducto].cantidad + 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].cantidad + 1), img: arrayCarrito[posicionProducto].img
          }
        } else {
          arrayCarrito.push({
            id: productoBuscado.id, nombre: productoBuscado.nombre, unidades: productoBuscado.unidades, precio: productoBuscado.precio, cantidad: 1, subtotal: productoBuscado.precio, img: productoBuscado.img
          })
        }
        Toastify({
          text: "Producto agregado",
          duration: 1500,
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();
      renderizarCarrito()
      renderizarTotal()
  }
  function renderizarCarrito() {
      carrito.innerHTML = ""
      for (const itemCarrito of arrayCarrito) {
        carrito.innerHTML += `
          <div class="itemCarrito">
            <h4>${itemCarrito.nombre+" x"+ itemCarrito.unidades}</h4>
            <h4>${itemCarrito.cantidad}</h4>
            <h4>${itemCarrito.subtotal}</h4>
            <img class="imgCarrito" src="${itemCarrito.img}">
          </div>
        `
      }
      let carritoJSON = JSON.stringify(arrayCarrito)
      localStorage.setItem("carrito", carritoJSON)

      let carritoEnLocal = localStorage.getItem("carrito")

      let carritoNormalJS =JSON.parse(carritoEnLocal)
  }
  function renderizarTotal(){
    let sumaSubtotal = arrayCarrito.reduce((acum, producto)=>acum + producto.subtotal, 0)
    if (sumaSubtotal<15000){
    precioFinal.innerHTML=`Precio total = $${sumaSubtotal}`
    } else {
      precioFinal.innerHTML=`Precio total = <del>$${sumaSubtotal}</del> $${Math.round(sumaSubtotal*0.9)}`
    }
  }
  renderizarTotal()




  let botonAperitivo = document.getElementById("btnAperitivo")
  botonAperitivo.addEventListener("click", fnbotonAperitivo)
  function fnbotonAperitivo(){
    let buscarAperitivos = catalogo.filter(producto=>producto.id>=100 && producto.id<=199)
    renderizarCatalogo(buscarAperitivos)
  }
  let botonCerveza = document.getElementById("btnCerveza")
  botonCerveza.addEventListener("click", fnbotonCerveza)
  function fnbotonCerveza(){
    let buscarCerveza = catalogo.filter(producto=>producto.id>=200 && producto.id<=299)
    renderizarCatalogo(buscarCerveza)
  }
  let botonSinAlcohol = document.getElementById("btnSinAlcohol")
  botonSinAlcohol.addEventListener("click", fnbotonSinAlcohol)
  function fnbotonSinAlcohol(){
    let buscarSinAlcohol = catalogo.filter(producto=>producto.id>=300 && producto.id<=399)
    renderizarCatalogo(buscarSinAlcohol)
  }
  let botonGin = document.getElementById("btnGin")
  botonGin.addEventListener("click", fnbotonGin)
  function fnbotonGin(){
    let buscarGin = catalogo.filter(producto=>producto.id>=400 && producto.id<=499)
    renderizarCatalogo(buscarGin)
  }
  let botonWhisky = document.getElementById("btnWhisky")
  botonWhisky.addEventListener("click", fnbotonWhisky)
  function fnbotonWhisky(){
    let buscarWhisky = catalogo.filter(producto=>producto.id>=500 && producto.id<=599)
    renderizarCatalogo(buscarWhisky)
  }
  let botonVodka = document.getElementById("btnVodka")
  botonVodka.addEventListener("click", fnbotonVodka)
  function fnbotonVodka(){
    let buscarVodka = catalogo.filter(producto=>producto.id>=600 && producto.id<=699)
    renderizarCatalogo(buscarVodka)
  }
  let botonRon = document.getElementById("btnRon")
  botonRon.addEventListener("click", fnbotonRon)
  function fnbotonRon(){
    let buscarRon = catalogo.filter(producto=>producto.id>=700 && producto.id<=799)
    renderizarCatalogo(buscarRon)
  }
  let botonVino = document.getElementById("btnVino")
  botonVino.addEventListener("click", fnbotonVino)
  function fnbotonVino(){
    let buscarVino = catalogo.filter(producto=>producto.id>=800 && producto.id<=899)
    renderizarCatalogo(buscarVino)
  }
  let botonTodo = document.getElementById("btnTodo")
  botonTodo.addEventListener("click", fnbotonTodo)
  function fnbotonTodo(){
    let buscarTodo = catalogo.filter(producto=>producto)
    renderizarCatalogo(buscarTodo)
  }


  let inputN = document.getElementById("inputNombre")
  inputNombre.addEventListener("input", fnInputN)
  function fnInputN(){
    let productosFiltrados = catalogo.filter(producto =>producto.nombre.toLowerCase().includes(inputNombre.value.toLowerCase()))
    renderizarCatalogo(productosFiltrados)
  }
  let inputC = document.getElementById("inputCategoria")
  inputCategoria.addEventListener("input", fnInputC)
  function fnInputC(){
      let productosFiltrados = catalogo.filter(producto =>producto.tipo.toLowerCase().includes(inputCategoria.value.toLowerCase()))
      renderizarCatalogo(productosFiltrados)
  }

})