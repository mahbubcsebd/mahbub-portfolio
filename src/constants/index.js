import { MdOutlineLocationOn, MdOutlineMail, MdPhone } from 'react-icons/md';
import { CameraImg, HikingImg, MovieImg, portfolio1, TravelImg } from '../assets';

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
        img: portfolio1,
        title: 'Mahbub',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad delectus id, porro quod itaque!',
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    },
    {
        id: 'port-2',
        img: portfolio1,
        title: 'Mahbub',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad delectus id, porro quod itaque!',
        tags: ['HTML', 'CSS', 'Bootstrap'],
    },
    {
        id: 'port-3',
        img: portfolio1,
        title: 'Mahbub',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad delectus id, porro quod itaque!',
        tags: ['HTML', 'CSS', 'Bootstrap'],
    },
    {
        id: 'port-4',
        img: portfolio1,
        title: 'Mahbub',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad delectus id, porro quod itaque!',
        tags: ['HTML', 'CSS', 'Bootstrap'],
    },
    {
        id: 'port-5',
        img: portfolio1,
        title: 'Mahbub',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad delectus id, porro quod itaque!',
        tags: ['HTML', 'CSS', 'Bootstrap'],
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
