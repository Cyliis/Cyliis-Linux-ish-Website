import { WindowsService } from '../windows.service';

export let documents = [
  {
    showText: 'Victor Tcaciuc.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Victor Tcaciuc',
        Instagram: 'https://instagram.com/victor1tcaciuc?igshid=YmMyMTA2M2Y=',
        Facebook: 'https://www.facebook.com/victorgabrieltcaciuc',
        Github: '',
        Discord: 'StripierWig208#2124',
        quote: 'If you don’t take risks, you can’t create a future.',
        teamLead: true,
        imageUrl: '/assets/members/Victor Tcaciuc.jpg',
      }),
  },
  {
    showText: 'Petru Anton.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Petru Anton',
        Instagram: 'https://www.instagram.com/adiutzuu/',
        Facebook: 'https://www.facebook.com/Oglumaa',
        Github: 'https://github.com/Adiutzu',
        Discord: 'Adiutzu#3224',
        teamLead: true,
        quote:
          "Shoot for the moon. Even if you miss, you'll land among the stars.",
        imageUrl: '/assets/members/Petru Anton.jpg',
      }),
  },
  {
    showText: 'Mirela Tibu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Mirela Tibu',
        Instagram: '',
        Facebook: 'https://www.facebook.com/mirela.tibu.3',
        Github: '',
        Discord: '',
        quote: '',
        mentor: true,
        imageUrl: '/assets/members/Mirela Tibu.png',
      }),
  },
  {
    showText: 'Vlad Turcuman.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Vlad Turcuman',
        Instagram: 'https://www.instagram.com/vladturcuman/',
        Facebook: 'https://m.facebook.com/vlad.turcuman.9',
        Github: 'https://github.com/vladturcuman',
        Discord: 'vladtt#7538',
        quote: "Who's piloting the robot?",
        mentor: true,
        imageUrl: '/assets/members/Vlad Turcuman.jpg',
      }),
  },
  {
    showText: 'Denis Crîșmariu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Denis Crîșmariu',
        Instagram: 'https://www.instagram.com/crismariudenis/',
        Facebook: 'https://www.facebook.com/crismariu.denis/',
        Github: 'https://github.com/crismariudenis',
        Discord: 'LaserDenis#2031',
        quote: 'Why waste a screw when you can use a zip tie?',
        imageUrl: '/assets/members/Denis Crasmariu.jpg',
      }),
  },
  {
    showText: 'Sebastian Tănase.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Sebastian Tănase',
        Instagram: 'https://www.instagram.com/sebastian.f3d/',
        Facebook: '',
        Github: 'https://github.com/BigPingLowIQ',
        Discord: 'Mr. Pig#1652',
        quote: 'Knowledge is power.',
        imageUrl: '/assets/members/Sebastian Tanase.jpg',
      }),
  },
  {
    showText: 'Carla Epure.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Carla Epure',
        Instagram: 'https://www.instagram.com/carla_epure/',
        Facebook: 'https://www.facebook.com/carla.ecm',
        Github: '',
        Discord: 'CarlaEpure#8642',
        quote:
          'I work within the deadline. "Deadline" is an imaginary place that exists wherever I am.',
        imageUrl: '/assets/members/Carla Epure.jpg',
      }),
  },
  {
    showText: 'Călin Ioncioaia.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Călin Ioncioaia',
        Instagram: '',
        Facebook: '',
        Github: 'https://github.com/RocketPrinter',
        Discord: 'RocketPrinter#6969',
        quote: 'We can edit this layer, right?',
        imageUrl: '/assets/members/Calin Ioncioaia.jpg',
      }),
  },
  {
    showText: 'Emmy Rotariu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Emmy Rotariu',
        Instagram: 'https://www.instagram.com/emmy43262/',
        Facebook: '',
        Github: '',
        Discord: 'Emmy43262#6611',
        quote: 'The way to succeed is to double your failure rate.',
        imageUrl: '/assets/members/Emmy Rotariu.jpg',
      }),
  },
  {
    showText: 'Florin Atudorei.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Florin Atudorei',
        Instagram: 'https://instagram.com/florinatudorei_?igshid=YmMyMTA2M2Y=',
        Facebook: 'https://www.facebook.com/florin.atudorei.18',
        Github: '',
        Discord: 'Nirolff#8383',
        quote: 'You are a person not a Robot!',
        imageUrl: '/assets/members/Florin Atudorei.jpg',
      }),
  },
  {
    showText: 'Matei Gales.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Matei Gales',
        Instagram: 'https://www.instagram.com/rata_e_super/',
        Facebook: 'https://www.facebook.com/matei.gales.5',
        Github: 'https://github.com/DareChocolate',
        Discord: 'Firematei#4881',
        quote: 'Zip-ties and duct tape work just fine.',
        imageUrl: '/assets/members/Matei Gales.jpg',
      }),
  },
  {
    showText: 'Andrei Jitaru.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Andrei Jitaru',
        Instagram: 'https://www.instagram.com/andrei_vlad.jitaru',
        Facebook: '',
        Github: 'https://github.com/VirtxCat',
        Discord: 'AndrewJ#1269',
        quote:
          'With enough creativity, knowledge and willpower you can make a difference and if you add teamwork you can change the world.',
        imageUrl: '/assets/members/Andrei Jitaru.jpg',
      }),
  },
  {
    showText: 'Claudia Toma.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Claudia Toma',
        Instagram: 'https://www.instagram.com/tomaclaudiastefania/',
        Facebook: '',
        Github: '',
        Discord: 'Puppet\\(OwO)/#8869',
        quote:
          "Design your own person without being afraid of imperfections and if people don't like you just let them in the past.",
        imageUrl: '/assets/members/Claudia Toma.jpg',
      }),
  },
  {
    showText: 'Dimitrie Mihai.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Dimitrie Mihai',
        Instagram: 'https://www.instagram.com/dimi.gj/',
        Facebook: '',
        Github: '',
        Discord: 'Ghouljinx#8745',
        quote: 'Making mistakes is better than faking perfections',
        imageUrl: '/assets/members/Dimitrie Mihai.jpg',
      }),
  },
  {
    showText: 'Calin Pravat.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Calin Pravat',
        Instagram: 'https://www.instagram.com/calinpravat/',
        Facebook: 'https://www.facebook.com/calingeorge.pravat',
        Github: '',
        Discord: 'Călin Pravăț#0974',
        quote: 'Teamwork makes everything easier and faster.',
        imageUrl: '/assets/members/Calin Pravat.jpg',
      }),
  },
  {
    showText: 'Flavius Mihai.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Flavius Mihai',
        Instagram: 'https://www.instagram.com/flaviuss_11/',
        Facebook: '',
        Github: '',
        Discord: 'Flave#1856',
        quote: 'To iterate is human, to recurse is divine.',
        imageUrl: '/assets/members/Flavius.jpg',
      }),
  },
  {
    showText: 'Amalia Țîlică.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Amalia Țîlică',
        Instagram: 'https://instagram.com/amaliatilica/',
        Facebook: 'https://www.facebook.com/amaliatilica',
        Github: '',
        Discord: 'PikaChuu#4934',
        quote: 'Be kind. Such deep, much inspirational.',
        imageUrl: '/assets/members/Amalia Tilica.jpg',
      }),
  },
  {
    showText: 'Dima Sorin-Emanuel.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Dima Sorin-Emanuel',
        Instagram: 'https://www.instagram.com/sorinemanueldima/',
        Facebook: 'https://www.facebook.com/profile.php?id=100014784589194',
        Github: '',
        Discord: 'xMrSediBoss#2010',
        quote: "Just hit it with a hammer mate, it'll be just fine…",
        imageUrl: '/assets/members/Emanuel Dima.jpg',
      }),
  },
  {
    showText: 'Iulian Savastre.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/IulianSavastre.jpg',
        name: 'Iulian Savastre',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
        mentor: true,
      }),
  },
  {
    showText: 'Tudor Chirilă.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        name: 'Tudor Chirilă',
        Instagram: 'https://www.instagram.com/tchirila3/',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
        imageUrl: '/assets/members/Tudor Chirila.jpg',
      }),
  },
  {
    showText: 'Andra Smirnov.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/AndraSmirnov.jpg',
        name: 'Andra Smirnov',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Andrei Avram.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/AndreiAvram.jpg',
        name: 'Andrei Avram',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Andrei Udila.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/AndreiUdila.jpg',
        name: 'Andrei Udila',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Catalin Puricoi.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/CatalinPuricoi.jpg',
        name: 'Catalin Puricoi',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Dan Croitoriu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/DanCroitoriu.jpg',
        name: 'Dan Croitoriu',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Daniela Girleanu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/DanielaGirleanu.png',
        name: 'Daniela Girleanu',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Horia Turcuman.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector.get(WindowsService).openPortfolio({
        imageUrl: '/assets/mentors/HoriaTurcuman.jpg',
        name: 'Horia Turcuman',
        Instagram: '',
        Facebook: '',
        Github: '',
        Discord: '',
        quote: '',
      }),
  },
  {
    showText: 'Iustinian Negrei.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/IustinianNegrei.jpg',
          name: 'Iustinian Negrei',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Matei Bostan.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/MateiBostan.jpg',
          name: 'Matei Bostan',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Matei Chiriac.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/MateiChiriac.jpg',
          name: 'Matei Chiriac',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Matei Chiriță.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/MateiChirita.jpg',
          name: 'Matei Chiriță',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Mihai Melnic.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/MihaiMelnic.jpg',
          name: 'Mihai Melnic',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Radu Costache.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/RaduCostache.jpg',
          name: 'Radu Costache',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Adia Romanescu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/AdiaRomanescu.jpg',
          name: 'Adia Romanescu',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Rares Iordan.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/RaresIordan.jpg',
          name: 'Rares Iordan',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Sabin Ilegitim.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/SabinIlegitim.jpg',
          name: 'Sabin Ilegitim',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Yvonna Filip.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/YvonnaFilip.jpg',
          name: 'Yvonna Filip',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Denis Banu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/DenisBanu.jpg',
          name: 'Denis Banu',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Daria Cucos.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/DariaCucos.jpg',
          name: 'Daria Cucos',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Bogdan Plescan.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/BogdanPlescan.jpg',
          name: 'Bogdan Plescan',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Daniel Rusu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/DanielRusu.jpg',
          name: 'Daniel Rusu',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'David Carausu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/DavidCarausu.jpg',
          name: 'David Carausu',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Dragos Ignat.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/DragosIgnat.jpg',
          name: 'Dragos Ignat',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Diana Cojocaru.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/DianaCojocaru.jpg',
          name: 'Diana Cojocaru',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Codrin Susu.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/CodrinSusu.jpg',
          name: 'Codrin Susu',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Anca Iacob.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/AncaIacob.jpg',
          name: 'Anca Iacob',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Razvan Ciopraga.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/RazvanCiopraga.jpg',
          name: 'Razvan Ciopraga',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
  {
    showText: 'Andrei Preda.prtfl',
    access: true,
    name: 'portofolio',
    indexOfDir: 5,
    type: '.prtfl',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openPortfolio({
          imageUrl: '/assets/mentors/AndreiPreda.jpg',
          name: 'Andrei Preda',
          Instagram: '',
          Facebook: '',
          Github: '',
          Discord: '',
          quote: '',
        }),
  },
];
