/* eslint-disable prettier/prettier */
import { MdOutlineLocationOn, MdOutlineMail, MdPhone } from 'react-icons/md';
import {
    CameraImg,
    HikingImg,
    MovieImg,
    TravelImg,
    ajux,
    berfey,
    cargopoint,
    ilearning,
    policyhut,
    uibarn
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
        text: '+880 1886225492',
    },
    {
        id: 'ci-3',
        icon: <MdOutlineLocationOn />,
        text: 'Farmgate, Dhaka-1215, Bangladesh',
    },
];

export const portfolioList = [
    {
        id: 1,
        img: uibarn,
        title: 'Ui Barn Marketplace',
        text: 'Ui Barn is a digital marketplace for UI/UX design resources, assets, templates, and more. It is a platform for designers and developers to buy and sell UI/UX design resources and assets.',
        tags: ['Nuxt Js', 'Vue Js', 'Tailwind', 'Headless UI'],
        link: 'https://uibarn.com/',
        github: '',
    },
    {
        id: 2,
        img: policyhut,
        title: 'Policyhut Next JS',
        text: 'Policyhut is a modern and professional insurance agency Next Js template. It is suitable for any kind of insurance agency, insurance company, consulting firm and much more.',
        tags: ['Next Js', 'React Js', 'React-Bootstrap'],
        link: 'https://policyhutt.vercel.app/',
        github: 'https://github.com/mahbubcsebd/policyhut',
    },
    {
        id: 3,
        img: ilearning,
        title: 'iLearning',
        text: 'iLearning is a modern and professional e-learning platform HTML5 template. It is suitable for any kind of educational website.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'jQuery'],
        link: 'https://policyhutt.vercel.app/',
        github: 'https://github.com/mahbubcsebd/ilearning',
    },
    {
        id: 4,
        img: cargopoint,
        title: 'Cargopoint Next Js',
        text: 'Cargopoint is a modern and professional cargo and logistics Next Js template. It is suitable for any kind of cargo and logistics website.',
        tags: ['Next Js', 'React Js', 'React-Bootstrap'],
        link: 'https://cargopoint.vercel.app/',
        github: 'https://github.com/mahbubcsebd/cargopoint',
    },
    {
        id: 5,
        img: ajux,
        title: 'Ajux React Template',
        text: ' Ajux is a Creative Agency React Template. It has been created following modern design standards and typography. It is a modern and creative template.',
        tags: ['React Js', 'React-Bootstrap', 'React-Router'],
        link: 'https://themeforest.net/item/ajux-creative-agency-react-template/44952845?s_rank=8',
        github: 'https://github.com/mahbubcsebd/ajux-react',
    },
    {
        id: 6,
        img: berfey,
        title: 'Shuttr',
        text: 'Shuttr- Fashion eCommerce HTML Template. It has been created following modern design standards and typography.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
        link: 'https://themeforest.net/item/berfey-beauty-cosmetics-ecommerce-html5-template/36947322?s_rank=1',
        github: 'https://github.com/mahbubcsebd/shuttr',
    },
    // {
    //     id: 7,
    //     img: shuttr,
    //     title: 'Shuttr',
    //     text: 'Fashion eCommerce HTML5 Template. It has been created following modern design standards and typography.(ThemeForest Approved)',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    //     link: 'https://preview.themeforest.net/item/shuttr-fashion-ecommerce-html5-template/full_screen_preview/36448486?_ga=2.162519098.743001122.1663306406-1822753251.1660745201',
    //     github: 'https://github.com/mahbubcsebd/ajux-react',
    // },
    // {
    //     id: 8,
    //     img: eprovent,
    //     title: 'Eprovent',
    //     text: 'Creative Event Conference HTML5 Template. This is a Creative Event Conference Template which is Modern, Minimal, Professional and presentable',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'JavaScript'],
    //     link: 'https://eprovent.vercel.app/',
    //     github: 'https://github.com/mahbubcsebd/eprovent',
    // },
    // {
    //     id: 9,
    //     img: luminux,
    //     title: 'Luminux',
    //     text: 'Luminux - is a Creative Digital Agency HTML5 template which is Modern, Clean, Minimal, Professional, Creative and presentable.',
    //     tags: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'JavaScript'],
    //     link: 'https://brilliant-hotteok-0481d2.netlify.app/',
    //     github: 'https://github.com/mahbubcsebd/ajux-react',
    // },
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
