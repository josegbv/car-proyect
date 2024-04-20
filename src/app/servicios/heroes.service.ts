
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private Autos:Heroe[] = [
    {
      nombre: "Sail",
      titulo:'Una vida espectacular está en los detalles',
      bio: "Cuando combinas diseño, tecnología, confort y seguridad en un mismo auto, tus viajes diarios se convierten en un verdadero parque de entretenciones. Si quieres tener una vida llena de diversión, el Sail es el vehículo perfecto para ti",
      img: "assets/img/sail1.png",img2:'assets/img/sail2.png',
      aparicion: "2021-01-05",
      casa:"Autos"
    },
    {
      nombre: "Onix Turbo", titulo:'El auto que se integra a tu vida y te da más de lo que esperás',
      bio: "Manejar el Onix Turbo es vivir una experiencia inédita por su diseño, tecnología y confort. Cuentas con conectividad total y soluciones innovadoras, como conexión Wi-Fi propia y computador a bordo. Y, además, un motor turbo de alto rendimiento, preparado para superar las expectativas de los más exigentes",
      img: "assets/img/onixturbo1.png", img2:'assets/img/onixturbo1.png',
      aparicion: "2021-01-05",
      casa:"Autos"
    },
   
    {
      nombre: "Onix Sedan",  titulo:'Vino a cambiarlo todo',
      bio: "El Onix Sedán viene con una serie de características que lo consolidan como el más innovador de su clase. No vino a inventar nada, vino a cambiarlo todo.",
      img: "assets/img/onixsedan.png",img2:'assets/img/onixsedan.png',
      aparicion: "2021-01-05",
      casa:"Autos"
    },
    {
      nombre: "Spin", titulo:'La vida personal y familiar pueden convivir y Spin es el vehículo ideal para hacerlo',
      bio: "No solo cuenta con un amplio espacio interior que incluye tres corridas de asientos y segunda corrida deslizable, sino también la mejor tecnología a bordo para que tú y tu familia vayan cómodos, conectados y seguros",
      img: "assets/img/spin.jpg",img2:'assets/img/spin.jpg',
      aparicion: "2021-01-05",
      casa: "Autos"
    },

    {
      nombre: 'GROOVE', titulo:'Donde sea que te lleve el ritmo, Deportiva y moderna con un atractivo que llama la atención,',
      bio:'All New Groove es una SUV compacta, diseñada para ser tan original como tú. No solo se ve bien, sino que cuenta con un equipamiento de seguridad del más alto nivel, además de mucho espacio en el interior, para prepararte para el próximo capítulo de la vida.',
      img:'assets/img/groove.jpg',img2:'assets/img/groove.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

  {
      nombre: 'TRACKER', titulo:'Sé dueño de tu camino, Sabemos lo que quieres y es por eso que All New Tracker te ayudará a lograrlo',
      bio:'Con su estilo exterior dinámico y detalles interiores bien pensados, All New Tracker es la compañera perfecta para aprovechar cada momento, porque no se adapta al mundo, evoluciona para moverse en él.',
      img:'assets/img/tracker.png',img2:'assets/img/tracker.png',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

  {
      nombre: 'SPIN ACTIV', titulo:'Spin Activ, Con un renovado diseño exclusivo',
      bio:'La nueva versión Activ está más preparada que nunca para que disfrutes de más aventuras. Nuevo diseño frontal, lateral y posterior del vehículo con molduras Activ, barras de techos longitudinales y luces delanteras de posición LED, son solo algunos de los aspectos que le entregan a este vehículo un espíritu más atrevido. Además, no podemos dejar atrás los atributos que la transforman en el favorito de la familia, como la increíble capacidad para 7 pasajeros, sobresaliente tecnología y la seguridad a la altura de tus aventuras.',
      img:'assets/img/spinactive.jpg',img2:'assets/img/spinactive.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

  {
      nombre: 'CAPTIVA TURBO', titulo:'Prepárate, te van a mirar, Si la Captiva Turbo ya te había acostumbrado a recibir cientos de miradas,',
      bio:'Espera a que conozcas sus versiones AT. Sí, porque a toda la tecnología, seguridad y diseño, ahora sumamos versiones con transmisión automática para que tengas nuevos motivos para subirte a una Captiva Turbo. Prepárate para disfrutar la Captiva Turbo de siempre y también una nueva versión que va a deslumbrar tus ojos y los de quienes te vean pasar.',
      img:'assets/img/captivaturbo.jpg',img2:'assets/img/captivaturbo.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

  {
      nombre: 'NEW TRAILBLAZER', titulo:'Encuentra tu modo Outdoor, New Trailblazer es un SUV tan fuerte y poderoso como el que toma las decisiones más sólidas en la vida para lograr lo que quieres',
      bio:'Cuenta con un motor potente, seguridad y tecnología avanzada para hacer de tus viajes más confortables. Conoce la personalidad de esta SUV todo terreno y supera cualquier obstáculo.',
      img:'assets/img/blazer.jpg',img2:'assets/img/blazer.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },
      
    {
      nombre: 'TRAVERSE', titulo:'Inspiración para disfrutar cada segundo al máximo,',
      bio:'Cada segundo que navegas en este sitio web, es un segundo de tu vida. Por eso, cuando Traverse te muestre todos sus detalles, la inspiración para aprovechar cada instante llegará al máximo. Disfruta del espacio que necesitas, de la tecnología deslumbrante y de la seguridad que siempre quisiste entregarle a tu familia.',
      img:'assets/img/traverse.jpg',img2:'assets/img/traverse.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

    {
      nombre: 'BLAZER', titulo:'Una vida espectacular está en los detalles',
      bio:'Creada para lograr lo que te propones, Cada cierto tiempo aparece alguien capaz de superar cualquier reto, alguien que lo cambia todo, que avanzan con fuerza, determinación e inteligencia. Te presentamos Blazer, la SUV que lo cambiará todo.',
      img:'assets/img/bl.png',img2:'assets/img/bl.png',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

    {
      nombre: 'TAHOE', titulo:'UNA SUV QUE TE DEJA SIN PALABRAS, Tahoe versátil y avanzada, con una cabina más grande y espaciosa',
      bio:'Para una mejor conducción con la eficiencia y tecnología que tú necesitas. Una SUV perfecta para todos los caminos que quieras descubrir, con mayor capacidad, performance y atrevido diseño difícil de ignorar.',
      img:'assets/img/tahoe.jpg',img2:'assets/img/tahoe.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },

    {
      nombre: 'SUBURBAN', titulo:'Sigue la tradición, Una SUV emblemática que se adapta a tu vida, más versátil y avanzada para cubrir todas tus necesidades y las de tus pasajeros',
      bio:'La Suburban se rediseñó con más espacio, seguridad y tecnología para una conducción confortable y eficiente para poner a prueba todas las rutas que te faltan por explorar.',
      img:'assets/img/suburban.jpg',img2:'assets/img/suburban.jpg',
      aparicion:'2021-01-05',
      casa:'Suv'
    },
    {
      nombre: 'N400', titulo:'Hablar de negocios es una decisión lógica',
      bio:'Quien administra una empresa sabe que tomar buenas decisiones puede hacer crecer un negocio. Por eso, ahora podemos contar con la nueva N400 MAX. Con un generoso volumen de carga de 3,1 m³  y hasta 720 kg de capacidad de carga útil, ofrece un motor de 1.5 L de 103 HP y transmisión manual de 5 velocidades que te ayuda a enfrentar diariamente el trabajo duro con toda la facilidad y, sobre todo, con economía.',
      img:'assets/img/van.png',img2:'assets/img/van.png',
      aparicion:'2021-01-05',
      casa:'Vans'
    },
    
    {
      nombre: 'D-MAX', titulo:'Tú no paras, ella no se detiene',
      bio:'Sabemos que la pasión por tu negocio nunca para. Por eso, D-Max con la eficiencia y performance de siempre, más un diseño renovado, no se detiene jamás.',
      img:'assets/img/dmax.jpg',img2:'assets/img/dmax.jpg',
      aparicion:'2021-01-05',
      casa:'PickUp'
    },
    
    {
      nombre: 'ALL NEW COLORADO', titulo:'All New Colorado, conquistar el mundo es posible para los que nunca se detienen',
      bio:'Una camioneta única en su categoría para quienes tienen potencia para seguir sin importar el camino y para los que llegan a la cima pero buscan ir más arriba. Sorpréndete con la All New Colorado, una de las más potentes de su categoría.',
      img:'assets/img/colorado.png',img2:'assets/img/colorado.png',
      aparicion:'2021-01-05',
      casa:'PickUp'
    },
    
    {
      nombre: 'SILVERADO', titulo:'Un deseo que supera cualquier otros',
      bio:'Presentamos Silverado, una increíble Pick Up obtenida gracias a 100 años de experiencia en fabricación y millones de kilómetros de prueba. Ahora más grande, más liviana y totalmente rediseñada. Silverado evoluciona constantemente, llegando a tener la mayor capacidad de carga de la categoría e incluyendo características tecnológicas avanzadas, hechos que la transforman en un referente Pick up con 100 años de experiencia adaptándose a tus deseos. Conoce su versión Diesel.',
      img:'assets/img/silverado.png',img2:'assets/img/silverado.png',
      aparicion:'2021-01-05',
      casa:'PickUp'
    },
    {
      nombre: 'CAMARO', titulo:'Un facelift al performance, El nuevo Camaro fue rediseñado de principio a fin',
      bio:'Su línea ha evolucionado para verse aún mas estilizada, pero eso no es todo, incluye tecnología, performance y un manejo superior. Aceléralo hasta el fondo y descubre lo que significa la adrenalina.',
      img:'assets/img/camaro.png',img2:'assets/img/camaro.png',
      aparicion:'2021-01-05',
      casa:'Deportivo'
    },
    
  ];


  private Suvs = [{
      nombre: 'GROOVE', titulo:'Donde sea que te lleve el ritmo, Deportiva y moderna con un atractivo que llama la atención,',
      bio:'All New Groove es una SUV compacta, diseñada para ser tan original como tú. No solo se ve bien, sino que cuenta con un equipamiento de seguridad del más alto nivel, además de mucho espacio en el interior, para prepararte para el próximo capítulo de la vida.',
      img:'assets/img/groove.jpg',img2:'assets/img/groove.jpg',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

  {
      nombre: 'TRACKER', titulo:'Sé dueño de tu camino, Sabemos lo que quieres y es por eso que All New Tracker te ayudará a lograrlo',
      bio:'Con su estilo exterior dinámico y detalles interiores bien pensados, All New Tracker es la compañera perfecta para aprovechar cada momento, porque no se adapta al mundo, evoluciona para moverse en él.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

  {
      nombre: 'SPIN ACTIV', titulo:'Spin Activ, Con un renovado diseño exclusivo',
      bio:'La nueva versión Activ está más preparada que nunca para que disfrutes de más aventuras. Nuevo diseño frontal, lateral y posterior del vehículo con molduras Activ, barras de techos longitudinales y luces delanteras de posición LED, son solo algunos de los aspectos que le entregan a este vehículo un espíritu más atrevido. Además, no podemos dejar atrás los atributos que la transforman en el favorito de la familia, como la increíble capacidad para 7 pasajeros, sobresaliente tecnología y la seguridad a la altura de tus aventuras.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

  {
      nombre: 'CAPTIVA TURBO', titulo:'Prepárate, te van a mirar, Si la Captiva Turbo ya te había acostumbrado a recibir cientos de miradas,',
      bio:'Espera a que conozcas sus versiones AT. Sí, porque a toda la tecnología, seguridad y diseño, ahora sumamos versiones con transmisión automática para que tengas nuevos motivos para subirte a una Captiva Turbo. Prepárate para disfrutar la Captiva Turbo de siempre y también una nueva versión que va a deslumbrar tus ojos y los de quienes te vean pasar.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

  {
      nombre: 'NEW TRAILBLAZER', titulo:'Encuentra tu modo Outdoor, New Trailblazer es un SUV tan fuerte y poderoso como el que toma las decisiones más sólidas en la vida para lograr lo que quieres',
      bio:'Cuenta con un motor potente, seguridad y tecnología avanzada para hacer de tus viajes más confortables. Conoce la personalidad de esta SUV todo terreno y supera cualquier obstáculo.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },
      
    {
      nombre: 'TRAVERSE', titulo:'Inspiración para disfrutar cada segundo al máximo,',
      bio:'Cada segundo que navegas en este sitio web, es un segundo de tu vida. Por eso, cuando Traverse te muestre todos sus detalles, la inspiración para aprovechar cada instante llegará al máximo. Disfruta del espacio que necesitas, de la tecnología deslumbrante y de la seguridad que siempre quisiste entregarle a tu familia.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

    {
      nombre: 'BLAZER', titulo:'Una vida espectacular está en los detalles',
      bio:'Creada para lograr lo que te propones, Cada cierto tiempo aparece alguien capaz de superar cualquier reto, alguien que lo cambia todo, que avanzan con fuerza, determinación e inteligencia. Te presentamos Blazer, la SUV que lo cambiará todo.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

    {
      nombre: 'TAHOE', titulo:'UNA SUV QUE TE DEJA SIN PALABRAS, Tahoe versátil y avanzada, con una cabina más grande y espaciosa',
      bio:'Para una mejor conducción con la eficiencia y tecnología que tú necesitas. Una SUV perfecta para todos los caminos que quieras descubrir, con mayor capacidad, performance y atrevido diseño difícil de ignorar.',
      img:'',img2:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

    {
      nombre: 'SUBURBAN', titulo:'Sigue la tradición, Una SUV emblemática que se adapta a tu vida, más versátil y avanzada para cubrir todas tus necesidades y las de tus pasajeros',
      bio:'La Suburban se rediseñó con más espacio, seguridad y tecnología para una conducción confortable y eficiente para poner a prueba todas las rutas que te faltan por explorar.',
      img:'',
      lanzamiento:'2021-01-05',
      tipo:'Suv'
    },

];


private PickUpAndVans = [{
  nombre: 'N400', titulo:'Hablar de negocios es una decisión lógica',
  bio:'Quien administra una empresa sabe que tomar buenas decisiones puede hacer crecer un negocio. Por eso, ahora podemos contar con la nueva N400 MAX. Con un generoso volumen de carga de 3,1 m³  y hasta 720 kg de capacidad de carga útil, ofrece un motor de 1.5 L de 103 HP y transmisión manual de 5 velocidades que te ayuda a enfrentar diariamente el trabajo duro con toda la facilidad y, sobre todo, con economía.',
  img:'',img2:'',
  aparicion:'2021-01-05',
  casa:'Vans'
},

{
  nombre: 'D-MAX', titulo:'Tú no paras, ella no se detiene',
  bio:'Sabemos que la pasión por tu negocio nunca para. Por eso, D-Max con la eficiencia y performance de siempre, más un diseño renovado, no se detiene jamás.',
  img:'',img2:'',
  aparicion:'2021-01-05',
  casa:'PickUp'
},

{
  nombre: 'ALL NEW COLORADO', titulo:'All New Colorado, conquistar el mundo es posible para los que nunca se detienen',
  bio:'Una camioneta única en su categoría para quienes tienen potencia para seguir sin importar el camino y para los que llegan a la cima pero buscan ir más arriba. Sorpréndete con la All New Colorado, una de las más potentes de su categoría.',
  img:'',img2:'',
  aparicion:'2021-01-05',
  casa:'PickUp'
},

{
  nombre: 'SILVERADO', titulo:'Un deseo que supera cualquier otros',
  bio:'Presentamos Silverado, una increíble Pick Up obtenida gracias a 100 años de experiencia en fabricación y millones de kilómetros de prueba. Ahora más grande, más liviana y totalmente rediseñada. Silverado evoluciona constantemente, llegando a tener la mayor capacidad de carga de la categoría e incluyendo características tecnológicas avanzadas, hechos que la transforman en un referente Pick up con 100 años de experiencia adaptándose a tus deseos. Conoce su versión Diesel.',
  img:'',img2:'',
  lanzamiento:'2021-01-05',
  tipo:'PickUp'
},]


private Deportivos = [{
  nombre: 'CAMARO', titulo:'Un facelift al performance, El nuevo Camaro fue rediseñado de principio a fin',
  bio:'Su línea ha evolucionado para verse aún mas estilizada, pero eso no es todo, incluye tecnología, performance y un manejo superior. Aceléralo hasta el fondo y descubre lo que significa la adrenalina.',
  img:'',img2:'',
  aparicion:'2021-01-05',
  casa:'Deportivo'
},

];



  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getAutos():Heroe[]{
    return this.Autos;
  }

  getAuto( idx: string ){
    return this.Autos[idx];
  }

  getSuvs(){
    return this.Suvs;
  }

  getSuv(idx:string){
    return this.Suvs[idx];
  }

  getPickUpsAndVans(){
    return this.PickUpAndVans;
  }

  getPickUpAndVan(idx:string){
    return this.PickUpAndVans[idx];
  }

  getDeportivo(){
    return this.Deportivos;
  }

  buscarHeroes( termino:string ):Heroe[]{

    let AutosArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.Autos.length; i ++ ){

      let Auto = this.Autos[i];

      let nombre = Auto.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        Auto.idx = i;
        AutosArr.push( Auto )
      }

    }

    return AutosArr;

  }


}


export interface Heroe{
  nombre: string;
  titulo:string;
  bio: string;
  img: string;
  img2:string,
  aparicion: string;
  casa: string;
  idx?: number;
};
