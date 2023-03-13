export default {
   language: 'English',
   topbar: {
      contact: 'Contact',
      back: 'Back to Home'
   },
   pages: {
      index: {
         title: 'Home',
         about: {
            title: 'About',
            sub: 'Me'
         },
         works: {
            title: 'My',
            sub: 'Works'
         }
      },
      about: {
         title: 'About',
         content: {
            title: 'What\'s up?',
            paragraph: 'I\'m <b>Aex</b>, known as <code>aexhell</code>. I am a web developer and UX designer focused on creating web and mobile applications. I started with web development in 2018 by joining Wikia (<a href="https://fandom.com">fandom.com</a>), learning HTML, CSS and JS. In 2019, I started using Electron framework. In 2020, I started using Vue with Electron and made a IRC prototype with Socket.io. By 2021, I started using Nuxt.js as main framework (as of today). In 2022 and 2023, I started using React (specially, React Native).',
            guidelines: {
               title: 'How can I hire you for a project?',
               paragraph: 'I keep these simple guidelines if you need my assistance or my services in your project, please read them carefully:',
               content: [
                  'I only accept projects using Vue with/or Nuxt. I cannot guarantee you I will do fine in your React project, so I don\'t think I will accept a React project.',
                  'I am not Full Stack. My focus on web development is front-end. Don\'t send requests that require me as a back-end developer.',
                  'I only accept payments in Euro (€).',
                  'I am not looking for a job. We can discuss the details about signing an NDA.',
                  'It is optional to pick a CSS framework. I mainly use Tailwind CSS.'
               ],
               footer: 'If you accept these guidelines, please contact me on the ',
               contact: 'Contact page'
            }
         },
      },
      contact: {
         title: 'Contact',
         content: {
            title: 'Contact',
            paragraph: 'You may contact me using the following methods:'
         }
      },
      works: {
         title: 'Works',
         content: {
            title: 'Works',
            works: {
               puroto: {
                  description: 'Social media app attempt. Due to me being a volunteer, I wasn\'t paid for it.'
               },
               mylium: {
                  description: 'This is something personal I\'ve been working on for the last year. Don\'t think it will last but I like to work on it as a hobby.'
               }
            }
         },
      }
   }
}