import f1 from './f1.jpg';
import f2 from './f2.jpg';
import f3 from './f3.jpg';
import f4 from './f4.jpg';
import fresh1 from './fresh1.jpg';
import fresh2 from './fresh2.jpg';
import fresh3 from './fresh3.jpg';
import fresh4 from './fresh4.jpg';
import fresh5 from './fresh5.jpg';
import fresh6 from './fresh6.jpg';
import p11 from './p11.jpg';
import p12 from './p12.jpg';
import p13 from './p13.jpg';
import p14 from './p14.jpg';
import p15 from './p15.jpg';
import p16 from './p16.jpg';
import p17 from './p17.jpg';
import p18 from './p18.jpg';
import p19 from './p19.jpg';
import p20 from './p20.jpg';
import p21 from './p21.jpg';
import p22 from './p22.jpg';


export const featuredProduct = [
    {
        id: 1,
        img: f1,
        name: 'Nike Air Max 27',
        type:'Skate Shoes',
        text: 'Buy Now',
        price: '20000',  
      },
    {
        id: 2,
        img: f2,
        name: 'Nike Air Max',
        type:'sneakers',
        text: 'Buy Now',
        price: '20000',   
     },
    {
        id: 3,
        img: f3,
        name: 'XVII',
        type:'Basketball shoes',
        text: 'Buy Now',
        price: '20000',   
     },
    {
        id: 4,
        img: f4,
        name: 'MAX VII',
        type:'Running shoes',
        text: 'Buy Now',
        price: '20000',  
      }
]  
export const freshItems = [
    {
        id: 5,
        img: fresh1,
        name: 'NIKE I',
        type: 'Sports Shoe',
        text: 'Buy Now',
        price: '20000',   
     },
    {
        id: 6,
        img: fresh2,
        name: 'Nike VII',
        type: 'sneakers',
        text: 'Buy Now',
        price: '20000',   
     },
    {
        id: 7,
        img: fresh3,
        name: 'Nike III',
        type: 'Boot',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 8,
        img: fresh4,
        name: 'Nike XI',
        type: 'Formal Shoe',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 9,
        img: fresh5,
        name: 'Nike AB',
        type: 'Casual Shoe',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 10,
        img: fresh6,
        name: 'IIV',
        type: 'Skate Shoe',
        text: 'Buy Now',
        price: '20000',
    }
]

export const navItems = [
    {
        name: 'Men',
        slug: '/men',
        active: true
    },
    {
        name: 'Women',
        slug: '/women',
        active: true
    },
    {
        name: 'Kids',
        slug: '/kids',
        active: true
    },
    {
        name: 'Explore',
        slug: '/explore',
        active: true,
        subItems: [
            {
                name: 'Casual sneakers',
                slug: '/explore'
            },
            {
                name: 'Designer sneakers',
                slug: '/explore'
            },
            {
                name: 'Athletic sneakers',
                slug: '/explore'
            },
            {
                name: 'Canvas sneakers',
                slug: '/explore'
            }
            ,
            {
                name: 'High top sneakers',
                slug: '/explore'
            }
        ]
    }
];

export const  categoryItems = [
    {
        id: 1,
        img: f1,
        name: 'Nike Air Max 27',
        type:'Skate Shoes',
        category:'men',
        text: 'Buy Now',
        price: '20000',    },
    {
        id: 2,
        img: f2,
        name: 'Nike Air Max',
        type:'sneakers',
        category:'men',
        text: 'Buy Now',
        price: '20000',    },
    {
        id: 3,
        img: f3,
        name: 'XVII',
        type:'Basketball shoes',
        category:'women',
        text: 'Buy Now',
        price: '20000',    },
    {
        id: 4,
        img: f4,
        name: 'MAX VII',
        type:'Running shoes',
        category:'kids',
        text: 'Buy Now',
        price: '20000'
    },
    {
        id: 5,
        img: fresh1,
        name: 'NIKE I',
        type: 'Sports Shoe',
        category:'kids',
        price: '20000',
        text: 'Buy Now'
    },
    {
        id: 6,
        img: fresh2,
        name: 'Nike VII',
        type: 'sneakers',
        category:'women',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 7,
        img: fresh3,
        name: 'Nike III',
        type: 'Boot',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 8,
        img: fresh4,
        name: 'Nike XI',
        type: 'Formal Shoe',
        category:'men',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 9,
        img: fresh5,
        name: 'Nike AB',
        type: 'Casual Shoe',
        category:'women',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 10,
        img: fresh6,
        name: 'IIV',
        type: 'Skate Shoe',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 11,
        img: p11,
        name: 'Nike Air Max 27',
        type:'Skate Shoes',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 12,
        img: p12,
        name: 'Nike Air Max',
        type:'sneakers',
        category:'men',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 13,
        img: p13,
        name: 'XVII',
        type:'Basketball shoes',
        category:'men',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 14,
        img: p14,
        name: 'MAX VII',
        type:'Running shoes',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 15,
        img: p15,
        name: 'NIKE I',
        type: 'Sports Shoe',
        category:'women',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 16,
        img: p16,
        name: 'Nike VII',
        type: 'sneakers',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 17,
        img: p17,
        name: 'Nike III',
        type: 'Boot',
        category:'women',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 18,
        img: p18,
        name: 'Nike XI',
        type: 'Formal Shoe',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 19,
        img: p19,
        name: 'Nike AB',
        type: 'Casual Shoe',
        category:'women',   
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 20,
        img: p20,
        name: 'IIV',
        type: 'Skate Shoe',
        category:'women',   
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 21,
        img: p21,
        name: 'IIV',
        type: 'Skate Shoe',
        category:'kids',
        text: 'Buy Now',
        price: '20000',
    },
    {
        id: 22,
        img: p22,
        name: 'IIV',
        type: 'Skate Shoe',
        category:'men',
        text: 'Buy Now',
        price: '20000',
    }

]