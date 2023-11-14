import { DirectboxSend , DirectboxReceive , Star1 , ArchiveTick , Category } from 'iconsax-react';

export const sidebar = [
    {
        name: "نوشتن پیام",
        id: 0,
        path: "/inbox",
        icon: <DirectboxReceive/>
    },
    {
        name: "صندوق دریافت",
        id: 1,
        path: "/",
        icon: <DirectboxReceive/>
    },
    {
        name: "صندوق ارسال",
        id: 2,
        path: "/",
        icon: <DirectboxSend/>
    },
    {
        name: "نشان دار شده ها",
        id: 3,
        path: "/",
        icon: <Star1/>
    },
    {
        name: "بایگانی",
        id: 4,
        path: "/",
        icon: <ArchiveTick/>
    },
    {
        name: "دسته بندی +",
        id: 4,
        path: "/",
        icon: <Category/>
    },
] as any