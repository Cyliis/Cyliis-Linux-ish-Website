import { alumni } from "../alumni/alumni.data"
import { events } from "../events/events.data"
import { gallery } from "../gallery/gallery.data"
import { team } from "../team/team.data"
import { WindowsService } from "../windows.service"

let eventsStruct = events.map((event : any) => {
    return {
        showText: `${event.title}.evnt`,
        access: true,
        name: 'event',
        indexOfDir: 5,
        type: '.evnt',
        folder: false,
        exec: () => WindowsService.injector.get(WindowsService).openEvent(event)
    }
})

let documentStruct = [...team, ...alumni].map((member : any) => {
    return {
        showText: `${member.name}.prtfl`,
        access: true,
        name: 'portofolio',
        indexOfDir: 5,
        type: '.prtfl',
        folder: false,
        exec: () => WindowsService.injector.get(WindowsService).openPortfolio(member)
    }
})

let galleryStruct = gallery.map((image : any) => {
    return {
        showText : `${image.name}.img`,
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec: () => WindowsService.injector.get(WindowsService).openImage(image.imageUrl)
    }
})

export let structure = [
    {
        dir : "CyOS:\\>",
        folders : [
            {
                showText : '.',
                indexOfDir : 0,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 0,
                access: true,
                folder: true,
            },
            {
                showText : 'Program Files',
                indexOfDir : 0,
                access: false,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('access-denied')
            },
            {
                showText : 'Program Files(x86)',
                indexOfDir : 0,
                access: false,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('access-denied')
            },
            {
                showText : 'System',
                indexOfDir : 0,
                access: false,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('access-denied')
            },
            {
                showText : 'Users',
                indexOfDir : 1,
                access: true,
                folder: true,
            },
        ],
    },
    {
        dir : "CyOS:\\>Users>",
        folders : [
            {
                showText : '.',
                indexOfDir : 1,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 0,
                access: true,
                folder: true,
            },
            {
                showText : 'admin',
                indexOfDir : 1,
                access: false,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('access-denied')
            },
            {
                showText : 'Public',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
        ],
    },
    {
        dir : "CyOS:\\>Users>Public>",
        folders : [
            {
                showText : '.',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 1,
                access: true,
                folder: true,
            },
            {
                showText : 'Contacts',
                indexOfDir : 3,
                access: true,
                folder: true
            },
            {
                showText : 'Desktop',
                indexOfDir : 4,
                access: true,
                folder: true,
            },
            {
                showText : 'Documents',
                indexOfDir : 5,
                access: true,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('documents')
            },
            {
                showText : 'Downloads',
                indexOfDir : 2,
                access: false,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('access-denied')
            },
            {
                showText : 'Favorites',
                indexOfDir : 6,
                access: true,
                folder: true,
            },
            {
                showText : 'Links',
                indexOfDir : 7,
                access: true,
                folder: true,
            },
            {
                showText : 'Images',
                indexOfDir : 9,
                access: true,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('images')
            },
        ],
    },
    {
        dir : "CyOS:\\>Users>Public>Contacts>",
        folders : [
            {
                showText : '.',
                indexOfDir : 3,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
            {
                showText : 'Developer',
                indexOfDir : 3,
                access: false,
                folder: true,
            },
            {
                showText : 'Motricala Alin-Gabriel{motricala44@gmail.com}',
                indexOfDir : 3,
                access: false,
                folder: true,
            },
        ],
    },
    {
        dir : "CyOS:\\>Users>Public>Desktop>",
        folders : [
            {
                showText : '.',
                indexOfDir : 4,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
            {
                showText : 'Gallery',
                indexOfDir : 10,
                access: true,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('gallery')
            },
            {
                showText : 'Team',
                indexOfDir : 11,
                access: true,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('team')
            },
            {
                showText : 'Alumni',
                indexOfDir : 12,
                access: true,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('alumni')
            },
            {
                showText : 'Events',
                indexOfDir : 13,
                access: true,
                folder: true,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('events')
            },
            {
                showText : 'CyCL',
                name : 'cl',
                type: 'cmd',
                folder: false,
                exec : () => WindowsService.injector.get(WindowsService).openWindow('cl')
            }
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Documents>",
        folders : [
            {
                showText : '.',
                indexOfDir : 5,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
            ...documentStruct
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Favorites>",
        folders : [
            {
                showText : '.',
                indexOfDir : 6,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Links>",
        folders : [
            {
                showText : '.',
                indexOfDir : 7,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Music>",
        folders : [
            {
                showText : '.',
                indexOfDir : 8,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Videos>",
        folders : [
            {
                showText : '.',
                indexOfDir : 9,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 2,
                access: true,
                folder: true,
            },
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Desktop>Gallery>",
        folders : [
            {
                showText : '.',
                indexOfDir : 10,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 4,
                access: true,
                folder: true,
            },
            ...galleryStruct
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Desktop>Team>",
        folders : [
            {
                showText : '.',
                indexOfDir : 11,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 4,
                access: true,
                folder: true,
            },
            ...documentStruct.slice(0, 18)
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Desktop>Alumni>",
        folders : [
            {
                showText : '.',
                indexOfDir : 12,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 4,
                access: true,
                folder: true,
            },
            ...documentStruct.slice(18, 62)
        ]
    },
    {
        dir : "CyOS:\\>Users>Public>Desktop>Events>",
        folders : [
            {
                showText : '.',
                indexOfDir : 14,
                access: true,
                folder: true,
            },
            {
                showText : '..',
                indexOfDir : 4,
                access: true,
                folder: true,
            },
            ...eventsStruct
        ]
    },
]