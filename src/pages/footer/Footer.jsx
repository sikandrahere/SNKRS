import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const footerItems = [
        {
            name: 'Products',
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
        },
        {
            name: 'Support',
            active: true,
            subItems: [
                {
                    name: 'Payment realeted',
                    slug: '/'
                },
                {
                    name: 'Order realeted',
                    slug: '/'
                },
                {
                    name: 'Customer support',
                    slug: '/'
                },
                {
                    name: 'Message us',
                    slug: '/'
                },
                {
                    name: 'Write us',
                    slug: '/'
                }

            ]
        },
        {
            name: 'Info',
            active: true,
            subItems: [
                {
                    name: 'About us',
                    slug: '/'
                },
                {
                    name: 'Careers',
                    slug: '/'
                },
                {
                    name: 'Press',
                    slug: '/'
                },
                {
                    name: 'Affiliates',
                    slug: '/'
                },
                {
                    name: 'Sustainability',
                    slug: '/'
                }

            ]
        },
        {
            name: 'Contact Us',
            active: true,
            contact: {
                email: 'snkrs@shoe.com',
                phone: '9166899875'
            }

        }
    ]
    return (
        <div className='footer'>
            <ul className='footer-items'>
                {footerItems.map((item) =>
                    item.active ? (
                        <li className='footer-item' key={item.name}>
                            {item.name}
                            {item.subItems && (
                                <ul className='footer-sub-items'>
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.name} className='footer-sub-item' onClick={()=>navigate(subItem.slug)}>{subItem.name}</li>
                                    ))}
                                </ul>
                            )}
                            {item.contact && (
                                <ul className='footer-contact'>
                                    <li>Email: {item.contact.email}</li>
                                    <li>Phone: {item.contact.phone}</li>
                                </ul>
                            )}

                        </li>
                    ) : null
                )}
            </ul>
            <div className='social-links'>
                <h4>KEEP IN TOUCH</h4>
                <div className='social-icons'>
                    <div onClick={()=>window.open('https://www.facebook.com/','_blank')}>
                        <FaFacebook />
                    </div>
                    <div onClick={()=>window.open('https://www.instagram.com/','_blank')}>
                        <FaInstagram />
                    </div>
                    <div onClick={()=>window.open('https://www.twitter.com/','_blank')}>
                        <FaTwitter />
                    </div>
                    <div onClick={()=>window.open('https://www.youtube.com/','_blank')}>
                        <FaYoutube />
                    </div>

                </div>
                <div className="license">
                <p>&copy; 2025 Snkrs. All rights reserved.</p>
            </div>

            </div>


        </div>
    )
}

export default Footer