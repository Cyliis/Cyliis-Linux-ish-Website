import { WindowsService } from "../windows.service";

export let gallery =  [
    {
        showText : 'test1.img',
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec : () => WindowsService.injector.get(WindowsService).openImage("/assets/gallery/1.jpg")
    },
    {
        showText : 'test2.img',
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec : () => WindowsService.injector.get(WindowsService).openImage("/assets/gallery/2.jpg")
    },
    {
        showText : 'test3.img',
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec : () => WindowsService.injector.get(WindowsService).openImage("/assets/gallery/3.jpg")
    },
    {
        showText : 'test4.img',
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec : () => WindowsService.injector.get(WindowsService).openImage("/assets/gallery/4.jpg")
    },
    {
        showText : 'test5.img',
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec : () => WindowsService.injector.get(WindowsService).openImage("/assets/gallery/5.jpg")
    },
    {
        showText : 'test6.img',
        access: true,
        name: 'image',
        indexOfDir: 5,
        type: '.img',
        folder: false,
        exec : () => WindowsService.injector.get(WindowsService).openImage("/assets/gallery/6.jpg")
    },
];