// Partes comunes de todas las páginas: datos de la gama, cabecera, pie, formulario y animaciones de entrada.
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const pad=i=>String(i+1).padStart(2,'0');
const eur=n=>n.toLocaleString('es-ES');   // es-ES no agrupa 4 cifras: 9800 / 11.500, igual que el original
const PHONE='+34 910 248 900', MAIL='experiencias@ferrarimadrid.example';

const P_CORSA=['Rosso Corsa','rgb(179, 18, 26)','Pintura de serie · Brillante','300',0];
const P_GIALLO=['Giallo Modena','rgb(233, 195, 25)','Histórica · Traslúcida','102',9800];
const P_ARGENTO=['Argento Nürburgring','rgb(190, 192, 194)','Metalizada · Plata','101',9800];
const P_BLU=['Blu Tour de France','rgb(32, 38, 92)','Metalizada · Profunda','522',6400];
const P_NERO=['Nero Daytona','rgb(26, 27, 29)','Metalizada · Profunda','323',6400];
const MODELS=[
 {s:'roma',n:'Roma Spider',t:'Gran Turismo',c:'Rosso Corsa',cv:'620 CV',a:'3,4 s',v:'320 km/h',p:'Desde 265.000 €',base:265000,cfg:'RM',
  l:'La elegancia de la dolce vita, sin techo.',
  d:'Tejido de lona ligero que se recoge en 13,5 segundos, arquitectura delantera y un V8 de 620 CV. El Roma Spider combina la serenidad de un coupé clásico con la respuesta inmediata de un Ferrari moderno.',
  cd:'Un Gran Turismo descapotable con V8 biturbo delantero y una arquitectura pensada para el placer de viajar.',
  design:['El Roma Spider reinterpreta el Gran Turismo clásico con una arquitectura delantera, una carrocería sin aristas duras y un techo de lona que desaparece en 13,5 segundos. Bajo el capó, el V8 biturbo entrega la potencia de forma progresiva, sin sobresaltos, para que el viaje largo siga siendo el plan principal.','Superficies limpias, faros horizontales y una zaga con difusor integrado. El resultado es un coche que se mira de perfil tanto como de frente.'],
  gal:['Ferrari Roma Spider rojo en el salón, vista delantera', 'Zaga del Roma Spider granate con la capota recogida, en un stand', 'Interior del Roma Spider en piel roja', 'Roma Spider granate en el salón'],
  hi:[['ri-sun-line','Capota en 13,5 segundos','Se recoge en marcha hasta 60 km/h y mantiene intacta la capacidad del maletero.'],['ri-steering-2-line','Chasis pensado para viajar','Suspensión adaptativa y dirección calibradas para autopista sin perder respuesta en curva.'],['ri-windy-line','Deflector de viento','Se despliega desde el respaldo trasero y reduce las turbulencias en el habitáculo cuando viajas con la capota abierta.']],
  paints:[P_CORSA,P_ARGENTO,['Grigio Titanio','rgb(92, 94, 98)','Metalizada · Profunda','738',6400]],wh:[20,20,6900,'Cinco radios dobles','Equipamiento de serie'],
  specs:[['Motor y transmisión',[['Motor','V8 3.9 l biturbo'],['Cilindrada','3.855 cc'],['Potencia máxima','620 CV a 7.500 rpm'],['Par máximo','760 Nm a 3.000–5.750 rpm'],['Transmisión','F1 DCT 8 velocidades'],['Tracción','Trasera']]],
   ['Prestaciones',[['0–100 km/h','3,4 s'],['0–200 km/h','9,7 s'],['Velocidad máxima','320 km/h'],['Relación peso/potencia','2,6 kg/CV']]],
   ['Chasis y dimensiones',[['Peso en seco','1.620 kg'],['Longitud','4.656 mm'],['Anchura','1.974 mm'],['Altura','1.306 mm'],['Batalla','2.670 mm'],['Maletero','255 l']]],
   ['Consumo y emisiones',[['Consumo combinado','11,5 l/100 km'],['Emisiones CO₂','261 g/km'],['Depósito','80 l'],['Homologación','Euro 6d']]]]},
 {s:'296-gtb',n:'296 GTB',t:'Berlinetta',c:'Rosso Corsa',cv:'830 CV',a:'2,9 s',v:'330 km/h',p:'Desde 289.000 €',base:289000,cfg:'29',
  l:'El V6 híbrido que devuelve la emoción al detalle.',
  d:'Compacta, ligera y extremadamente reactiva. El 296 GTB introduce el V6 de 120 grados de Maranello en una carrocería que prioriza la agilidad en carretera de montaña y la precisión en circuito.',
  cd:'Berlinetta de motor central trasero con V6 híbrido enchufable y 830 CV de potencia combinada.',
  design:['El 296 GTB recupera el motor central trasero en su forma más compacta y lo combina con un V6 biturbo de 120 grados y un motor eléctrico. El resultado son 830 CV en una carrocería corta, ligera y muy reactiva, diseñada para carreteras de montaña y tandas en circuito.','La cabina se adelanta y la zaga se ensancha para anclar las ruedas traseras. El arco de luz sobre el pilar trasero es la firma visual del modelo.'],
  gal:['Ferrari 296 GTB rojo en el salón, vista delantera tres cuartos', 'Zaga del 296 GTB en el concesionario', '296 GTB gris con banda central en el salón', '296 GTB amarillo con las puertas abiertas en el salón'],
  hi:[['ri-flashlight-line','Respuesta inmediata','El motor eléctrico rellena el par desde cero y elimina cualquier espera del turbo.'],['ri-award-line','Chasis ligero','1.470 kg en seco gracias al chasis de aluminio y a la carrocería de fibra de carbono.'],['ri-equalizer-line','Dinámica en curva','ABS Evo y reparto de par adaptativo para trazar con precisión en carretera abierta.']],
  paints:[P_CORSA,P_GIALLO,P_BLU],wh:[20,20,7400,'Cinco radios','Equipamiento de serie'],
  specs:[['Motor y transmisión',[['Motor','V6 3.0 l biturbo + eléctrico'],['Cilindrada','2.992 cc'],['Potencia combinada','830 CV'],['Par máximo','740 Nm a 6.250 rpm'],['Transmisión','F1 DCT 8 velocidades'],['Tracción','Trasera']]],
   ['Prestaciones',[['0–100 km/h','2,9 s'],['0–200 km/h','7,3 s'],['Velocidad máxima','330 km/h'],['Autonomía eléctrica','25 km']]],
   ['Chasis y dimensiones',[['Peso en seco','1.470 kg'],['Longitud','4.565 mm'],['Anchura','1.958 mm'],['Altura','1.187 mm'],['Batalla','2.600 mm'],['Maletero','201 l']]],
   ['Consumo y emisiones',[['Consumo combinado','6,4 l/100 km'],['Emisiones CO₂','149 g/km'],['Batería','7,45 kWh'],['Homologación','Euro 6d']]]]},
 {s:'sf90',n:'SF90 Stradale',t:'Supercar híbrida',c:'Rosso Corsa',cv:'1.000 CV',a:'2,5 s',v:'340 km/h',p:'Desde 455.000 €',base:455000,cfg:'SF',
  l:'Mil caballos. Tracción total. Sin concesiones.',
  d:'La tecnología del Cavallino en su forma más extrema: 1.000 CV, gestión de par en las cuatro ruedas y la posibilidad de recorrer hasta 25 km en modo eléctrico por el centro de la ciudad.',
  cd:'El primer Ferrari híbrido enchufable de serie, con tres motores eléctricos y tracción integral.',
  design:['El SF90 Stradale es el primer Ferrari de serie con arquitectura híbrida enchufable y tracción total. Mil caballos repartidos entre un V8 biturbo y tres motores eléctricos, gestionados por un sistema que decide en milisegundos cuánto par envía a cada rueda.','Cabina adelantada, arco de techo bajo y una trasera que deja ver el motor. Cada entrada de aire tiene una función aerodinámica concreta.'],
  gal:['Ferrari SF90 Stradale rojo en el salón, vista delantera tres cuartos', 'Perfil del SF90 Stradale rojo en el concesionario', 'Motor V8 del SF90 Stradale visto a través de la tapa trasera', 'SF90 Stradale granate en el concesionario'],
  hi:[['ri-roadster-line','Tracción total eléctrica','Dos motores delanteros gestionan el agarre rueda a rueda sin conexión mecánica.'],['ri-speed-up-line','Modo Qualify','Entrega los 1.000 CV completos y usa la aerodinámica activa en su posición de máxima carga.'],['ri-battery-charge-line','Hasta 25 km en eléctrico','Circulación silenciosa por ciudad y acceso garantizado a las zonas restringidas.']],
  paints:[P_CORSA,P_GIALLO,P_NERO],wh:[20,20,8200,'Radios dobles','Equipamiento de serie'],
  specs:[['Motor y transmisión',[['Motor','V8 4.0 l biturbo + 3 eléctricos'],['Cilindrada','3.990 cc'],['Potencia combinada','1.000 CV'],['Par máximo','800 Nm a 6.000 rpm'],['Transmisión','F1 DCT 8 velocidades'],['Tracción','Integral (eAWD)']]],
   ['Prestaciones',[['0–100 km/h','2,5 s'],['0–200 km/h','6,7 s'],['Velocidad máxima','340 km/h'],['Autonomía eléctrica','25 km']]],
   ['Chasis y dimensiones',[['Peso en seco','1.570 kg'],['Longitud','4.710 mm'],['Anchura','1.972 mm'],['Altura','1.186 mm'],['Batalla','2.650 mm'],['Maletero','74 l']]],
   ['Consumo y emisiones',[['Consumo combinado','6,1 l/100 km'],['Emisiones CO₂','154 g/km'],['Batería','7,9 kWh'],['Homologación','Euro 6d']]]]},
 {s:'purosangue',n:'Purosangue',t:'Cuatro puertas',c:'Nero Daytona',cv:'725 CV',a:'3,3 s',v:'310 km/h',p:'Desde 398.000 €',base:398000,cfg:'PU',
  l:'El primer Ferrari de cuatro puertas y cuatro plazas.',
  d:'Cuatro plazas reales, asientos traseros individuales y una puesta a punto que sigue siendo puro Ferrari. Un V12 atmosférico delantero montado detrás del eje para repartir mejor el peso.',
  cd:'Carrocería elevada, puertas de apertura inversa y un V12 atmosférico de 725 CV.',
  design:['El Purosangue abre una carrocería nueva en Maranello: cuatro puertas, cuatro plazas reales y un V12 atmosférico montado detrás del eje delantero. La posición de conducción es más alta, pero el reparto de pesos sigue siendo el de un deportivo.','Puertas de apertura inversa, asientos traseros individuales y una consola posterior independiente. La carrocería eleva la línea del techo sin perder proporción.'],
  gal:['Ferrari Purosangue negro en el salón, vista delantera tres cuartos', 'Frontal del Purosangue azul en el concesionario', 'Puesto de conducción del Purosangue', 'Purosangue gris en un salón con luz tenue'],
  hi:[['ri-door-open-line','Puertas inversas','Apertura eléctrica con cierre suave y acceso directo a las plazas traseras.'],['ri-user-3-line','Cuatro plazas reales','Asientos individuales con climatización, masaje y ajuste eléctrico en las cuatro posiciones.'],['ri-music-2-line','Sonido a medida','Sistema de audio desarrollado específicamente para la acústica de la cabina.']],
  paints:[P_CORSA,P_BLU,P_NERO],wh:[22,23,9100,'Radios dobles','Equipamiento de serie'],
  specs:[['Motor y transmisión',[['Motor','V12 6.5 l atmosférico'],['Cilindrada','6.496 cc'],['Potencia máxima','725 CV a 7.750 rpm'],['Par máximo','716 Nm a 6.250 rpm'],['Transmisión','F1 DCT 8 velocidades'],['Tracción','Integral']]],
   ['Prestaciones',[['0–100 km/h','3,3 s'],['0–200 km/h','10,6 s'],['Velocidad máxima','310 km/h'],['Plazas','4']]],
   ['Chasis y dimensiones',[['Peso en seco','2.033 kg'],['Longitud','4.973 mm'],['Anchura','2.028 mm'],['Altura','1.589 mm'],['Batalla','3.018 mm'],['Maletero','473 l']]],
   ['Consumo y emisiones',[['Consumo combinado','17,3 l/100 km'],['Emisiones CO₂','393 g/km'],['Depósito','100 l'],['Homologación','Euro 6d']]]]},
 {s:'12cilindri',n:'12Cilindri',t:'Gran Turismo V12',c:'Argento Nürburgring',cv:'830 CV',a:'2,9 s',v:'340 km/h',p:'Desde 415.000 €',base:415000,cfg:'12C',
  l:'Doce cilindros, atmosférico, sin ayudas híbridas.',
  d:'Su diseño reinterpreta los GT de los años sesenta con una superficie limpia y un capó que gira completo. Bajo él, un V12 de 6,5 litros que sube hasta 9.500 rpm.',
  cd:'Un homenaje contemporáneo al V12 delantero, con 830 CV y un chasis de aluminio rígido.',
  design:['El 12Cilindri es un homenaje contemporáneo al V12 delantero: 6,5 litros atmosféricos que suben hasta 9.500 rpm sin ningún tipo de asistencia híbrida. Un Gran Turismo de proporciones largas, pensado para devorar kilómetros sin renunciar al sonido de Maranello.','Capó que gira completo, faros integrados en una banda horizontal y una superficie lateral limpia, sin entradas de aire decorativas.'],
  gal:['Ferrari 12Cilindri plateado en la fábrica de Maranello', '12Cilindri rojo en el concesionario', 'Interior del 12Cilindri', 'Motor V12 del 12Cilindri'],
  hi:[['ri-volume-up-line','V12 atmosférico','Sin turbo y sin hibridación: la respuesta sube de forma lineal hasta las 9.500 rpm.'],['ri-focus-3-line','Aerodinámica activa','Alerón móvil y flaps de refrigeración que se abren solo cuando la mecánica lo necesita.'],['ri-car-line','Eje trasero direccional','Gira las ruedas traseras para reducir el radio de giro y estabilizar el coche a alta velocidad.']],
  paints:[['Rosso Imola','rgb(168, 15, 25)','Pintura de serie · Brillante','312',0],P_ARGENTO,['Bianco Avus','rgb(236, 236, 232)','Pastel · Brillante','100',6400]],wh:[21,21,8600,'Radios forjados','Equipamiento de serie'],
  specs:[['Motor y transmisión',[['Motor','V12 6.5 l atmosférico'],['Cilindrada','6.496 cc'],['Potencia máxima','830 CV a 9.250 rpm'],['Par máximo','678 Nm a 7.250 rpm'],['Transmisión','F1 DCT 8 velocidades'],['Tracción','Trasera']]],
   ['Prestaciones',[['0–100 km/h','2,9 s'],['0–200 km/h','7,9 s'],['Velocidad máxima','340 km/h'],['Régimen máximo','9.500 rpm']]],
   ['Chasis y dimensiones',[['Peso en seco','1.560 kg'],['Longitud','4.730 mm'],['Anchura','2.176 mm'],['Altura','1.290 mm'],['Batalla','2.700 mm'],['Maletero','270 l']]],
   ['Consumo y emisiones',[['Consumo combinado','15,0 l/100 km'],['Emisiones CO₂','347 g/km'],['Depósito','90 l'],['Homologación','Euro 6d']]]]},
 {s:'daytona-sp3',n:'Daytona SP3',t:'Serie limitada',c:'Rosso Fuoco',cv:'840 CV',a:'2,85 s',v:'340 km/h',p:'Serie limitada · 599 unidades',base:2000000,cfg:'SP3',
  l:'599 unidades inspiradas en las victorias de Daytona.',
  d:'Un ejercicio de diseño puro: superficies fluidas, aerodinámica activa y un V12 que sube a 9.500 rpm. El acceso a la asignación se gestiona junto al departamento de coleccionistas.',
  cd:'Icona de producción limitada con V12 central trasero y una carrocería escultórica.',
  design:['El Daytona SP3 es la tercera entrega de la serie Icona: 599 unidades que reinterpretan los prototipos de resistencia de los años sesenta. Un V12 central trasero, carrocería escultórica y una posición de conducción tomada directamente de la competición.','Las superficies envuelven la cabina como una carrocería de barchetta. Los faros escamoteables y el difusor trasero son guiños directos a los 330 P3/P4.'],
  gal:['Ferrari Daytona SP3 rojo en exposición, vista frontal', 'Zaga del Daytona SP3 en exposición', 'Habitáculo del Daytona SP3 con asientos en azul', 'Dos Daytona SP3 plateados en el salón'],
  hi:[['ri-shape-line','Carrocería escultórica','Paneles de compuesto de carbono con una aerodinámica resuelta sin alerón posterior.'],['ri-flashlight-line','1.485 kg','Relación peso/potencia de 1,77 kg/CV gracias al chasis y a los paneles de carbono.'],['ri-vip-crown-line','Asignación limitada','Acceso gestionado con el departamento de coleccionistas y configuración cerrada en fábrica.']],
  paints:[['Rosso Fuoco','rgb(192, 22, 28)','Serie Icona · Tres capas','326',0],['Argento Nürburgring','rgb(190, 192, 194)','Incluida en la asignación','101',0],['Nero Daytona','rgb(26, 27, 29)','Incluida en la asignación','323',0]],wh:[20,20,11500,'Centro monoTuerca','Serie'],
  specs:[['Motor y transmisión',[['Motor','V12 6.5 l atmosférico central'],['Cilindrada','6.496 cc'],['Potencia máxima','840 CV a 9.250 rpm'],['Par máximo','697 Nm a 7.250 rpm'],['Transmisión','F1 DCT 7 velocidades'],['Tracción','Trasera']]],
   ['Prestaciones',[['0–100 km/h','2,85 s'],['0–200 km/h','7,4 s'],['Velocidad máxima','340 km/h'],['Producción','599 unidades']]],
   ['Chasis y dimensiones',[['Peso en seco','1.485 kg'],['Longitud','4.686 mm'],['Anchura','2.050 mm'],['Altura','1.142 mm'],['Batalla','2.651 mm'],['Plazas','2']]],
   ['Consumo y emisiones',[['Consumo combinado','15,4 l/100 km'],['Emisiones CO₂','356 g/km'],['Depósito','100 l'],['Homologación','Euro 6d']]]]}];
const img=(m,r,small)=>`img/m/${m.s}-${r}${small?'-s':''}.jpg`;   // r: g1..g4 galería, p1..p3 pinturas, w1..w2 llantas; small: versión de 800 px para miniaturas

// ---------- Cabecera ----------
const NAV=[['index.html','Inicio','home'],['modelos.html','Modelos','modelos'],['concesionario.html','Concesionario','concesionario'],['contacto.html','Contacto','contacto']];
function header(page){
 const link=([h,t,k])=>{const on=k===page;return `<a ${on?'aria-current="page"':''} class="relative py-2 text-[9px] font-semibold uppercase tracking-[0.26em] whitespace-nowrap cursor-pointer transition-colors duration-300 ${on?'text-foreground-950':'text-foreground-950/55 hover:text-foreground-950'}" href="${h}">${t}<span class="absolute left-0 -bottom-0.5 h-px transition-all duration-500 ${on?'w-full bg-accent-500 glow-line':'w-0 bg-transparent'}" aria-hidden="true"></span></a>`};
 return `<header id="hdr" class="fixed top-0 inset-x-0 z-50 transition-[transform,opacity] duration-500 ease-out">
 <div id="hdr-bar" class="relative transition-colors duration-500 ease-out">
  <nav class="w-full px-4 md:px-8 lg:px-10 h-[70px] md:h-[76px] grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] items-center gap-6">
   <a class="flex items-center gap-3 cursor-pointer group" aria-label="Ferrari Madrid, inicio" href="index.html"><span class="relative flex w-[3px] h-8 bg-primary-500 overflow-hidden glow-line-red" aria-hidden="true"><span class="absolute inset-x-0 top-0 h-1/2 bg-accent-500 transition-transform duration-500 group-hover:-translate-y-full"></span></span><span class="flex flex-col leading-none"><span class="wordmark text-[26px] md:text-[28px] leading-none text-foreground-950">Ferrari</span><span class="mt-1 text-[7px] md:text-[8px] uppercase tracking-[0.44em] text-foreground-950/45">Madrid</span></span></a>
   <div class="hidden md:flex items-center justify-center gap-9 lg:gap-11">${NAV.map(link).join('')}</div>
   <div class="flex items-center justify-end gap-2 md:gap-3">
    <a href="tel:+34910248900" class="hidden lg:inline-flex items-center gap-2 h-10 px-2 text-[10px] tracking-[0.14em] whitespace-nowrap text-foreground-950/55 hover:text-foreground-950 cursor-pointer transition-colors"><i class="ri-phone-line text-[12px]" aria-hidden="true"></i>${PHONE}</a>
    <span class="hidden lg:block w-px h-4 bg-foreground-950/15" aria-hidden="true"></span>
    <a class="group hidden md:inline-flex items-center gap-2 h-10 pl-4 pr-3 border border-accent-500/40 text-foreground-950 text-[9px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap cursor-pointer transition-colors duration-300 hover:bg-accent-500 hover:text-background-50" href="contacto.html">Prueba<i class="ri-arrow-right-line text-[13px] transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true"></i></a>
    <button id="menu-btn" type="button" class="md:hidden w-10 h-10 flex items-center justify-center text-foreground-950 cursor-pointer" aria-label="Abrir menú" aria-expanded="false"><i class="ri-menu-line text-xl" aria-hidden="true"></i></button>
   </div>
  </nav>
  <div id="menu" class="hidden md:hidden px-4 pb-5 flex-col gap-1 border-t border-foreground-950/10 bg-[#0A0A0B]">${NAV.map(([h,t,k])=>`<a class="py-3 text-[11px] font-semibold uppercase tracking-[0.26em] ${k===page?'':'text-foreground-950/70'}" href="${h}">${t}</a>`).join('')}</div>
  <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-px bg-foreground-950/10"><span id="progress" class="block h-px bg-gradient-to-r from-primary-500 via-accent-500 to-accent-400 glow-line transition-[width] duration-150 ease-out" style="width:0%"></span></span>
 </div>
</header>`}

// ---------- Pie ----------
const FA='inline-flex items-center min-h-[40px] sm:min-h-0 text-foreground-800 hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap';
const footer=()=>`<footer class="relative bg-background-200">
 <span aria-hidden="true" class="absolute inset-x-0 top-0 h-[3px] bg-primary-500"></span>
 <div class="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10 pt-12 md:pt-16 pb-6 md:pb-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6">
   <div class="lg:col-span-4"><a class="wordmark text-[34px] leading-none cursor-pointer" href="index.html">Ferrari<span class="text-primary-500">.</span></a><p class="mt-3 text-[10px] uppercase tracking-[0.3em] text-foreground-600">Madrid · Concesionario oficial</p><p class="mt-4 text-sm leading-relaxed text-foreground-700 max-w-xs">Selección, configuración y entrega de vehículos Ferrari, junto al servicio oficial del Cavallino Rampante en Madrid.</p></div>
   <div class="lg:col-span-2"><h4 class="text-[10px] uppercase tracking-[0.22em] text-foreground-600 mb-3">Navegación</h4><ul class="grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-2.5 text-sm">${NAV.map(([h,t])=>`<li><a class="${FA}" href="${h}">${t}</a></li>`).join('')}</ul></div>
   <div class="lg:col-span-3"><h4 class="text-[10px] uppercase tracking-[0.22em] text-foreground-600 mb-3">Gama</h4><ul class="grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-2.5 text-sm">${MODELS.map(m=>`<li><a class="${FA}" href="contacto.html?modelo=${m.s}">${m.n}</a></li>`).join('')}</ul></div>
   <div class="lg:col-span-3"><h4 class="text-[10px] uppercase tracking-[0.22em] text-foreground-600 mb-3">Visítanos</h4><ul class="space-y-2.5 text-sm leading-[1.6] text-foreground-800"><li>Avenida de Burgos, 12<br>28036 Madrid</li><li><a href="tel:+34910248900" class="hover:text-primary-600 transition-colors cursor-pointer">${PHONE}</a></li><li><a href="mailto:${MAIL}" class="hover:text-primary-600 transition-colors cursor-pointer break-all">${MAIL}</a></li><li class="pt-1 text-foreground-700">Lunes – Viernes: 9:00 – 19:30<br>Sábado: 10:00 – 14:00</li></ul></div>
  </div>
  <div class="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-background-300 flex flex-row flex-wrap items-center justify-between gap-3 sm:gap-4">
   <p class="text-[11px] text-foreground-600">© 2026 Ferrari Madrid · Concesionario oficial. Todos los derechos reservados. · <a class="underline decoration-background-400 hover:text-foreground-950" href="creditos.html">Créditos de las fotos</a></p>
   <button id="to-top" type="button" class="group inline-flex items-center gap-2 min-h-[44px] sm:min-h-0 text-[10px] uppercase tracking-[0.18em] text-foreground-700 hover:text-foreground-950 whitespace-nowrap cursor-pointer">Volver arriba<span class="w-8 h-8 flex items-center justify-center border border-background-400 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-foreground-950 transition-colors"><i class="ri-arrow-up-line"></i></span></button>
  </div>
 </div>
</footer>`;

// ---------- Formulario de prueba (inicio y contacto) ----------
const FI='w-full h-[52px] px-0 rounded-none bg-transparent border-0 border-b text-[15px] text-foreground-950 placeholder:text-foreground-500 outline-none transition-colors duration-200 focus:border-primary-500 border-background-300 hover:border-foreground-500';
// shortcut: valida en el navegador y no envía a ningún servidor; conectar a un backend antes de publicar.
function bindForm(form){
 if(!form)return;
 form.querySelectorAll('.fi').forEach(e=>e.className=FI+' '+e.className.replace(/\bfi\b/,''));
 form.querySelectorAll('.fl').forEach(e=>e.className='block mb-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-600');
 const note=form.querySelector('[role=status]'),msg=form.querySelector('textarea'),count=form.querySelector('.td-count');
 const q=new URLSearchParams(location.search),m=MODELS.find(x=>x.s===q.get('modelo'));
 if(m){form.elements.model.value=m.n;
  const pt=m.paints.find(p=>p[3]===q.get('pintura')),ll={FD:'Forjada diamantada',FG:'Forjada grafito'}[q.get('llanta')];
  if(pt&&ll&&msg)msg.value=`Configuración de interés: ${m.n} · ${pt[0]} · ${ll} (CFG ${m.cfg} · ${pt[3]} · ${q.get('llanta')}).`}
 const upd=()=>count&&(count.textContent=msg.value.length+'/500');msg&&msg.addEventListener('input',upd);upd();
 form.addEventListener('submit',e=>{e.preventDefault();
  form.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  const bad=[...form.elements].find(el=>el.willValidate&&!el.checkValidity());
  if(bad){bad.setAttribute('aria-invalid','true');bad.focus();note.textContent='Revisa el campo marcado: '+bad.validationMessage;note.style.color='oklch(.658 .192 27)';return}
  note.textContent='Solicitud recibida. Te llamaremos en menos de 24 h para confirmar la prueba.';note.style.color='oklch(.872 .158 101)';form.reset();upd()})}

// ---------- Arranque ----------
// Los scripts de cada página corren antes de DOMContentLoaded, así que aquí ya existen sus bloques .reveal
document.addEventListener('DOMContentLoaded',()=>{
 const page=document.body.dataset.page, hideTop=document.body.dataset.header==='reveal';
 $('#site-header').outerHTML=header(page);$('#site-footer').outerHTML=footer();
 const hdr=$('#hdr'),bar=$('#hdr-bar'),prog=$('#progress');
 const SOLID=['bg-[#0A0A0B]/92','backdrop-blur-xl','border-b','border-foreground-950/10'],CLEAR=['bg-gradient-to-b','from-black/75','via-black/30','to-transparent','border-b','border-transparent'];
 const onScroll=()=>{const on=scrollY>40;
  hdr.classList.toggle('-translate-y-full',hideTop&&!on);hdr.classList.toggle('opacity-0',hideTop&&!on);hdr.classList.toggle('pointer-events-none',hideTop&&!on);
  bar.classList.remove(...(on||hideTop?CLEAR:SOLID));bar.classList.add(...(on||hideTop?SOLID:CLEAR));
  const max=document.documentElement.scrollHeight-innerHeight;prog.style.width=(max>0?Math.min(1,scrollY/max)*100:0)+'%'};
 addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
 $('#menu-btn').onclick=()=>{const mn=$('#menu'),btn=$('#menu-btn'),closed=mn.classList.toggle('hidden');mn.classList.toggle('flex',!closed);btn.setAttribute('aria-expanded',!closed);btn.setAttribute('aria-label',closed?'Abrir menú':'Cerrar menú');btn.querySelector('i').className=(closed?'ri-menu-line':'ri-close-line')+' text-xl'};
 $('#to-top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});
 $$('.reveal').forEach(e=>io.observe(e));
 $$('form[data-test-drive]').forEach(bindForm);
});
console.assert(eur(9800)==='9800'&&eur(11500)==='11.500'&&eur(274800)==='274.800','formato de precios');
