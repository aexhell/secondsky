export default {
   language: 'Español',
   topbar: {
      contact: 'Contacto',
      back: 'Volver al Inicio'
   },
   pages: {
      index: {
         title: 'Inicio',
         about: {
            title: 'Mi',
            sub: 'Biografía'
         },
         works: {
            title: 'Mis',
            sub: 'Proyectos'
         }
      },
      about: {
         title: 'Biografía',
         content: {
            title: '¿Qué pasa?',
            paragraph: 'Soy <b>Aex</b>, conocido como <code>aexhell</code>. Soy un desarrollador web y diseñador UX centrado en la creación de aplicaciones web y móviles. Empecé con el desarrollo web en 2018 uniendome a Wikia (<a href="https://fandom.com">fandom.com</a>), aprendiendo HTML, CSS y JS. En 2019, empecé a usar el framework Electron. En 2020, empecé a usar Vue.js con Electron e hice un prototipo de IRC con Socket.io. En 2021, empecé a usar Nuxt.js como mi framework principal (hasta la actualidad). En 2022 y 2023, empecé a usar el framework React (especialmente, React Native).',
            guidelines: {
               title: '¿Cómo puedo contratarte para un proyecto?',
               paragraph: 'Mantengo estas sencillas reglas por si requieres de mis servicios para tus proyectos, leelas con atención:',
               content: [
                  'Solo acepto trabajos que usen Vue y/o Nuxt.js. Si tu proyecto requiere de React, se puede discutir.',
                  'No soy Full Stack, y mi enfoque dentro del campo de desarrollo web está en el front-end. No envíe solicitudes que me requieran como un desarrollador back-end.',
                  'Solo acepto pagos en Euros (€), y tampoco hago peticiones gratis.',
                  'No busco trabajos y no voy a firmar contratos salvo los necesarios, como NDAs.',
                  'Principalmente uso Tailwind como pre-processor CSS. Es opcional.'
               ],
               footer: 'Si aceptas estas condiciones, por favor contacta conmigo en la ',
               contact: 'página de Contacto'
            }
         }
      },
      contact: {
         title: 'Contacto',
         content: {
            title: 'Contacto',
            paragraph: 'Puedes contactar conmigo con los siguientes métodos:'
         }
      },
      works: {
         title: 'Proyectos',
         content: {
            title: 'Proyectos',
            works: {
               puroto: {
                  description: 'Intento de red social. Al haber sido algo voluntario, no recibí pago por ello.'
               },
               mylium: {
                  description: 'Esto es algo personal en lo que he estado trabajando desde el año pasado. No creo que se vuelva popular pero me gusta desarrollarlo como hobby.'
               }
            }
         },
      }
   }
}