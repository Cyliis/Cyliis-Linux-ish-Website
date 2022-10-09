import { WindowsService } from '../windows.service';

export let events = [
  {
    showText: 'CyQuiz.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'CyQuiz',
          date: '8.10.2022',
          imageUrl: '/assets/events/9.png',
          url: 'https://forms.gle/A1qLzVcnAJxYFCMy6',
          actual: true,
        }),
  },
  {
    showText: 'KICK-OFF FTC.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'KICK-OFF FTC',
          date: '10.09.2022 - 11.09.2022',
          imageUrl: '/assets/events/8.jpg',
          url: 'https://www.youtube.com/watch?v=MmZAB44qF_I&t=200s',
          actual: false,
        }),
  },
  {
    showText: 'House of CyLiis.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'House of CyLiis',
          date: '27.08.2022 - 4.09.2022',
          imageUrl: '/assets/events/7.png',
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSfkJ60Gr3bGOHCKI_l3Yb0GK-4BSRlQKc-6y9Vc7r4YkLn9GQ/viewform',
          actual: false,
        }),
  },
  {
    showText: 'Interviuri.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'Interviuri',
          date: '30.06.2022 - 10.08.2022',
          imageUrl: '/assets/events/6.jpg',
          url: 'https://docs.google.com/forms/d/1O-1_C8PVf5wT8fQhSuwpIi4HFoGhJTWR0TA5Dg-XMtQ/edit',
          actual: false,
        }),
  },
  {
    showText: 'House of Cyliis.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'House of Cyliis',
          date: '29.08.2021 - 05.09.2021',
          imageUrl: '/assets/events/1.jpg',
          url: 'https://www.instagram.com/p/CSZCzkuonf8/?utm_source=ig_web_copy_link',
          actual: false,
        }),
  },
  {
    showText: 'Treasure Hunt.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'Treasure Hunt',
          date: '04.12.2021',
          imageUrl: '/assets/events/2.jpg',
          url: 'https://www.instagram.com/p/CWwBDZdoKxW/?utm_source=ig_web_copy_link',
          actual: false,
        }),
  },
  {
    showText: 'Cylloween Trick or Print.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'Cylloween Trick or Print',
          date: '29.10.2021 - 31.10.2021',
          imageUrl: '/assets/events/3.jpg',
          url: 'https://www.instagram.com/p/CVfQ6HLBgsX/?utm_source=ig_web_copy_link',
          actual: false,
        }),
  },
  {
    showText: 'CyJam.evnt',
    access: true,
    name: 'event',
    indexOfDir: 5,
    type: '.evnt',
    folder: false,
    exec: () =>
      WindowsService.injector
        .get(WindowsService)
        .openEvent({
          title: 'CyJam',
          date: '26.02.2022 - 15.03.2022',
          imageUrl: '/assets/events/4.jfif',
          url: 'https://www.instagram.com/p/CacofISII7_/?utm_source=ig_web_copy_link',
          actual: false,
        }),
  },
];
