import startImage from '../assets/images/start_image.png'
import partner1 from '../assets/icons/partners/1.svg';
import partner2 from '../assets/icons/partners/2.svg';
import partner3 from '../assets/icons/partners/3.svg';
import partner4 from '../assets/icons/partners/4.svg';
import partner5 from '../assets/icons/partners/5.svg';
import partner6 from '../assets/icons/partners/6.svg';
import researchIcon from '../assets/icons/how-it/research.svg';
import instant from '../assets/icons/how-it/instant.svg';
import track from '../assets/icons/how-it/track.svg';
import agriculture1 from '../assets/images/deals/agriculture/item1.jpg';
import agriculture2 from '../assets/images/deals/agriculture/item2.jpg';
import agriculture3 from '../assets/images/deals/agriculture/item3.jpg';
import commercial1 from '../assets/images/deals/commelcial/item1.jpg';
import commercial2 from '../assets/images/deals/commelcial/item2.jpg';
import commercial3 from '../assets/images/deals/commelcial/item3.jpg';
import industrial1 from '../assets/images/deals/industrial/item1.jpg';
import industrial2 from '../assets/images/deals/industrial/item2.jpg';
import industrial3 from '../assets/images/deals/industrial/item3.jpg';
import residential1 from '../assets/images/deals/residential/item1.jpg';
import residential2 from '../assets/images/deals/residential/item2.jpg';
import residential3 from '../assets/images/deals/residential/item3.jpg';


let state = {
    header: {
        logo: 'SmartSpace',
        links: [
            { name: 'Home', address: '/' },
            { name: 'About', address: '/about' },
            { name: 'Service', address: '/service' },
            { name: 'Portfolio', address: '/portfolio' },
            { name: 'Blog', address: '/blog' },
            { name: 'Contact', address: '/contact' },
        ],
    },
    homeBlock: {
        subtitle: 'RESIDENTIAL & OFFICE SPACES',
        title: 'Smart Living Style for Smart People',
        text: 'Much did had call new drew that kept. Limits expect wonder law she. Now has you views woman noisy match money rooms.',
        img: startImage,
        formHelp: 'Enter Zipcode to search properties',
    },

    partners: {
        title: 'Our Amazing Partners',
        partners: [
            {
                name: 'buzz',
                logo: partner1,
            },
            {
                name: 'chase',
                logo: partner2,
            },
            {
                name: 'microsoft',
                logo: partner3,
            },
            {
                name: 'gucc',
                logo: partner4,
            },
            {
                name: 'airbnb',
                logo: partner5,
            },
            {
                name: 'uber',
                logo: partner6,
            },
        ]
    },
    main: {
        howitworks: {
            title: 'How it works?',
            items: [
                { title: 'Research Suburbs', text: 'Wonder twenty hunted and put income set desire expect. Am cottage calling.', icon: researchIcon },
                { title: 'Instant Valuation', text: 'Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.', icon: instant },
                { title: 'Track Property', text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.', icon: track },
            ]
        },
        deals: {
            title: 'Best Real Estate Deals',
            text: 'Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.',
            mainButton: 'View All Property',
            buttons: ['Residential Property', 'Commercial Property', 'Agriculture Property', 'Industrial Property'],
            images: {
                residential: [residential1, residential2, residential3],
                commercial: [commercial1, commercial2, commercial3],
                agriculture: [agriculture1, agriculture2, agriculture3],
                industrial: [industrial1, industrial2, industrial3],
            }
        },
    },
    footer: {
        title: 'Get Our Newsletter',
        subtitle: 'To join the worldwide community',
        formHelp: 'Type your Email Address',
        formButton: 'Send Now',
        logo: 'SmartSpace',
        copyring: 'Copyright © 2021 AR Shakir . All Rights Reseved.'
    }
}

export default state;