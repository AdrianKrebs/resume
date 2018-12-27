/* eslint-disable */
export const PERSON = {
  name: {
    first: 'Adrian',
    middle: '',
    last: 'Krebs',
  },
  about: 'Hi, my name is John Doe. I\'m just about the most boring type of person you could possibly imagine. I like collecting leaves from the tree in my back yard and documenting each time I eat a peanut that is non-uniform. I am not a robot. Please hire me.',
  position: 'Software Engineer',
  birth: {
    year: 1991,
    location: 'Bern'
  },
  experience: [
    {
      company: 'Panter AG, Zürich',
      position: 'Software Engineer',
      timeperiod: 'seit Juni 2018',
      description: 'Entwicklung und Entwurf von modernen Front- und Backend Applikationen.'
    },
    {
      company: 'Schweizerische Mobiliar Versicherungsgesellschaft, Bern',
      position: 'Software Engineer',
      timeperiod: 'November 2015 - Mai 2018',
      description: 'Entwicklung und Entwurf von modernen Front- und Backend Applikationen.'
    },
    {
      company: 'Z&S Gmbh, Biel',
      position: 'Softwareentwickler',
      timeperiod: 'Oktober 2014 - Oktober 2015',
      description: 'Technische Verantwortung sowie Konzipierung und Umsetzung des Projekts "Hardware on Demand".'
    },
    {
      company: 'Styner+Bienz FormTech AG',
      position: 'Polymechaniker',
      timeperiod: 'April  2012 - Oktober  2012',
      description: ''
    },
    {
      company: 'Styner+Bienz FormTech AG',
      position: 'Polymechaniker Lehrling',
      timeperiod: '2007 - 2011',
      description: ''
    }

  ],
  education: [{
    degree: 'Master of Advanced Studies in Information Technology',
    timeperiod: '2017 – 2019',
    description: ['CAS Applikationsentwicklung mit JavaScript & HTML5', ' CAS Enterprise Application Development Java EE'],
    school: 'Berner Fachhochschule BFH, Bern'
  },
    {
      degree: 'Practical Bachelor HF',
      timeperiod: '2012 - 2014',
      description: ['Systemtechnik, Vertiefungsrichtung Automation/ICT'],
      school: 'Höhere Fachschule für Technik Mitteland, Biel'
    }
  ],
  projects: [
    {
      company: 'Migros Bank',
      position: 'Online Leasing',
      timeperiod: 'since June 2018',
      description: ['Entwicklung der neuen Schadenplattform zur Ablösung der alten Host-Systeme','Mitarbeit in Community of Practice zum Thema Architektur',
        'Java EE Backend mit Oracle SQL Datenbank', 'Rich Web Client auf Basis von JavaScript und Angular', 'moderne Microservice Architektur in agilem Umfeld (Scrum / SaFe)']
    },
    {
      company: 'Die Mobiliar',
      position: 'Mobiliar claim system',
      timeperiod: 'November 2015 - Mai 2018',
      description: ['Entwicklung der neuen Schadenplattform zur Ablösung der alten Host-Systeme','Mitarbeit in Community of Practice zum Thema Architektur',
        'Java EE Backend mit Oracle SQL Datenbank', 'Rich Web Client auf Basis von JavaScript und Angular', 'moderne Microservice Architektur in agilem Umfeld (Scrum / SaFe)']
    }, {
      company: 'Z&S GmbH',
      position: 'Hardware on demand',
      timeperiod: 'October 2014 - Otober 2015',
      description: ['Dynamisches, verwaltetes Zu- und Wegschalten von Industriesteuerungen zu Cloud-Remotelaboren',
        'Neuentwicklung eines Schulungsportals als Desktop-Applikation in C#, WPF',
        'Weiterentwicklung der Administrations-Software in Java EE']
    }

  ],
  infos: [
    {
      title: 'Date of birth:',
      description: '24.09.1991',
    },
    {
      title: 'Nationality:',
      description: 'Switzerland',
    },
    {
      title: 'Civil status:',
      description: 'Single',
    }

  ],
  activities: [
    {
      title: 'Meetups',
      description: [{text: 'Teilnahme an diversen Meetups und Co-Organisator Chatbots Meetup Switzerland'}]
    },
    {
      title: 'Zertifikate',
      description: [{text: 'Oracle Certified Professional Java SE 8 Programmer (OCA & OCP)'}]
    },
    {
      title: 'Private Projekte',
      description: [{
        link: 'https://www.producthunt.com/posts/hood-guide',
        text: ' - Crowdsourced Event Map'
      }, {link: 'adriankrebs.ch', text: ' - Chatbot Showcase'}]
    },
    {
      title: 'Hackathons',
      description: [{text: 'Participation in several hackathons (HackZurich, SIX Hackathon, Mobiliar Challenge Days)'}]
    },
  ],
  // skill level goes 0 to 100
  skills: [
    {
      name: 'Java/ Java EE',
      level: '90'
    },
    {
      name: 'SQL',
      level: '85'
    },
    {
      name: 'HTML5/ JavaScript',
      level: '85'
    },
    {
      name: 'CSS',
      level: '70'
    },
    {
      name: 'Angular',
      level: '70'
    }
  ],
  languages: [
    {
      name: 'German:',
      level: 'Native language'
    },
    {
      name: 'English:',
      level: 'Proficient'
    }

  ],
  skillDescription: 'Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).',
  contact: {
    email: 'info@adriankrebs.ch',
    phone: '079 308 25 46',
    street: 'Freiburghaus 288',
    city: '3176, Neuenegg',
    website: 'adriankrebs.ch',
    github: 'AdrianKrebs'
  },
  lang: 'en' // en, de, fr, pt, cn, it, es, th, pt-br, ru, sv, id, hu, pl
};
