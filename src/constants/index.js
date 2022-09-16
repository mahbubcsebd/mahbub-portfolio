/* eslint-disable prettier/prettier */
import { MdOutlineLocationOn, MdOutlineMail, MdPhone } from 'react-icons/md';
import {
    berfey,
    CameraImg,
    eprovent,
    HikingImg,
    hoobank,
    luminux,
    MovieImg,
    shuttr,
    TravelImg
} from '../assets';

export const contacts = [
    {
        id: 'ci-2',
        icon: <MdOutlineMail />,
        text: 'mahbub.cse.me@gmail.com',
    },
    {
        id: 'ci-2',
        icon: <MdPhone />,
        text: '+880 1862179418',
    },
    {
        id: 'ci-3',
        icon: <MdOutlineLocationOn />,
        text: 'Farmgate, Dhaka-1215, Bangladesh',
    },
];

export const portfolioList = [
    {
        id: 'port-1',
        img: berfey,
        title: 'Berfey',
        text: 'Berfey- Beauty & Cosmetics HTML5 Template - Health & Beauty Retail Screenshots Berfey.(ThemeForest Approved)',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
        link: 'https://themeforest.net/item/berfey-beauty-cosmetics-ecommerce-html5-template/36947322?s_rank=1',
    },
    {
        id: 'port-2',
        img: shuttr,
        title: 'Shuttr',
        text: 'Fashion eCommerce HTML5 Template. It has been created following modern design standards and typography.(ThemeForest Approved)',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
        link: 'https://preview.themeforest.net/item/shuttr-fashion-ecommerce-html5-template/full_screen_preview/36448486?_ga=2.162519098.743001122.1663306406-1822753251.1660745201',
    },
    {
        id: 'port-3',
        img: hoobank,
        title: 'HooBank',
        text: 'HooBank - is a Payment method React template which is made by modern TailwindCSS Framework',
        tags: ['React', 'Tailwind', 'JavaScript'],
        link: 'https://reacthoobank.netlify.app/',
    },
    {
        id: 'port-4',
        img: eprovent,
        title: 'Eprovent',
        text: 'Eprovent - Creative Event Conference HTML5 Template. This is a Creative Event Conference HTML5 Template which is Modern, Clean, Minimal, Professional, Creative and presentable',
        tags: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'JavaScript'],
        link: 'https://deft-moxie-b90549.netlify.app/',
    },
    {
        id: 'port-5',
        img: luminux,
        title: 'Luminux',
        text: 'Luminux - is a Creative Digital Agency HTML5 template which is Modern, Clean, Minimal, Professional, Creative and presentable.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'JavaScript'],
        link: 'https://brilliant-hotteok-0481d2.netlify.app/',
    },
];

export const love = [
    {
        id: 'love-1',
        img: <TravelImg />,
        title: 'travelling',
    },
    {
        id: 'love-2',
        img: <HikingImg />,
        title: 'mountain hiking',
    },
    {
        id: 'love-3',
        img: <CameraImg />,
        title: 'photography',
    },
    {
        id: 'love-1',
        img: <MovieImg />,
        title: 'movie watching',
    },
];
