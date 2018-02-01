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
  experience: [{
    company: 'Schweizerische Mobiliar Versicherungsgesellschaft, Bern',
    position: 'Software Engineer',
    timeperiod: 'seit November 2015',
    description: 'Entwicklung und Entwurf von modernen Front- und Backend Applikationen.'
  },
    {
      company: 'Z&S Gmbh, Biel',
      position: 'Softwareentwickler',
      timeperiod: 'Oktober 2014 - Oktober 2015',
      description: 'Technische Verantwortung Projekt "Hardware on Demand". Konzipierung und Umsetzung einer Desktop Applikation'
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
    description: ['CAS Applikationsentwicklung mit JavaScript & HTML5',' CAS Enterprise Application Development Java EE'],
    school: 'Berner Fachhochschule BFH'
  },
    {
      degree: 'dipl. Techniker HF',
      timeperiod: '2012 - 2014',
      description: ['Systemtechnik Vertiefungsrichtung Automation/ICT'],
      school: 'Höhere Fachschule für Technik Mitteland, Biel'
    }
  ],
  projects: [{
    company: 'Die Mobiliar',
    position: 'Neue Schadenplattform NSP',
    timeperiod: 'seit November 2015',
    description: ['Entwicklung der neuen Schadenplattform zur Ablösung der alten Host-Systeme.',
      'Java EE Backend mit Oracle SQL Datenbank','Rich Web Client auf Basis von JavaScript und Angular', 'REST Architektur Team']
  }, {
      company: 'Z&S GmbH',
      position: 'Hardware on demand',
      timeperiod: 'Oktober 2014 - Oktober 2015',
      description: ['Dynamisches, verwaltetes Zu- und Wegschalten von Industriesteuerungen zu Cloud-Remotelaboren',
        'Neuentwicklugn eines Schulungsportals als Desktop-Applikation in C#, WPF',
      'Weiterentwicklung der Administrations-Software in Java EE']
  }

  ],
  infos: [
    {
      title: 'Geburtsdatum:',
      description: '24.09.1991',
    },
    {
      title: 'Nationalität:',
      description: 'Schweiz',
    },
    {
      title: 'Zivilstand:',
      description: 'Ledig',
    }

  ],
  activities: [
    {
      title: 'Meetups',
      description: 'Teilnahme an diversen Meetups und Co-Organisator Chatbots Meetup Switzerland'
    },
    {
      title: 'Hackathons',
      description: 'Teilnahme an diversen Hackathons (HackZurich, SIX Hackathon, Mobiliar Challenge Days)'
    },
    {
      title: 'Zertifikate',
      description: 'Oracle Certified Professional Java SE 8 Programmer'
    }
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
      level: '80'
    },
    {
      name: 'Angular',
      level: '70'
    }
  ],
  languages: [
    {
      name: 'Deutsch:',
      level: 'Muttersprache'
    },
    {
      name: 'Englisch:',
      level: 'Gute Kenntnisse'
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
  lang: 'de' // en, de, fr, pt, cn, it, es, th, pt-br, ru, sv, id, hu, pl
};
