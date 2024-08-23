import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxComponent = () => {
    const [offset, setOffset] = useState(0);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        sectionsRef.current.forEach((section, index) => {
            const image = section.querySelector('.image');
            const text = section.querySelector('.text');

            gsap.fromTo(
                image,
                { x: -200, opacity: 0 }, // Start position is off-screen to the left
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                text,
                { x: 200, opacity: 0 }, // Start position is off-screen to the right
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    const calculateTransform = (baseOffset, multiplier, maxScale, maxTranslateY) => {
        const scale = Math.min(1 + baseOffset * 0.0008, maxScale);
        const translateY = Math.min(baseOffset * multiplier, maxTranslateY);
        return `translateY(${translateY}px) scale(${scale})`;
    };

    const sections = [
        {
            id: 1,
            backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bengali_sweet_platter.jpg/2560px-Bengali_sweet_platter.jpg',
            text: 'Embark on a culinary journey that spans centuries, where each dish is a masterful blend of ancient traditions, aromatic spices, and heartfelt love. From the sizzling tandoors of the North to the delicate coconut-infused curries of the South, India\s food is a vibrant tapestry of flavors that tells the story of its diverse cultures and regions. Every bite is a celebration of heritage, where recipes passed down through generations are crafted with care, embodying the soul of a nation that finds unity in its incredible culinary diversity.',
            imageUrl: 'https://b.zmtcdn.com/data/pictures/1/21581/e071ed605ee5e76c7aed8bf6cea36297.jpg',
        },
        {
            id: 2,
            backgroundImage: 'https://www.shutterstock.com/image-photo/haldi-ceremony-wedding-rituals-260nw-2065835960.jpg',
            text: 'India\s culture is a living mosaic, intricately woven from the threads of its rich history, diverse traditions, and myriad art forms. It\s a land where every festival is a colorful explosion of joy, every dance tells an ancient tale, and every song carries the echoes of centuries past. From the majestic temples that stand as testaments to architectural brilliance, to the timeless rituals that bind communities together, Indian culture is a vibrant celebration of life in all its forms, a harmonious blend of old and new, where unity thrives in diversity.',
            imageUrl: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/12/a3.jpg',
        },
        {
            id: 3,
            backgroundImage: 'https://media.istockphoto.com/id/471366604/photo/portrait-of-indian-woman-with-colored-face-dancing-during-holi.jpg?s=612x612&w=0&k=20&c=5_yqVtsM5O6Vc9dhenmWU5eB3E5j0DDsiJhjhwV7hN4=',
            text: 'Indian dance is more than just movement; it\s a profound expression of the soul, where every gesture, every step, is imbued with meaning and emotion. Rooted in classical traditions like Bharatanatyam and Kathak, and blossoming into vibrant folk and contemporary forms, Indian dance is a language that transcends words, telling stories of gods and heroes, love and loss, with grace and elegance. Each performance is a connection to the past, a living narrative that reflects the depth and beauty of India\s cultural heritage, where rhythm and expression merge to create an art form that is timeless.',
            imageUrl: 'https://media.istockphoto.com/id/1221935714/photo/kathakali-kerala-classical-dance-men-unique-body-expression.jpg?s=612x612&w=0&k=20&c=l5jkczq7yyJocnBqNcntTEx-OoZevZNcXePnp05i_hc=',
        },
    ];

    return (
        <div className="relative bg-black">
            <div className="relative h-screen overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        transform: calculateTransform(offset, 0.5, 1.3, 400),
                        backgroundImage: `url('https://traveltriangle.com/blog/wp-content/uploads/2015/12/sunset-at-taj-mahalA-view-of-the-calm-and-beautiful-sunset-at-Taj-Mahal-in-Agra.jpg')`,
                        transformOrigin: 'center',
                        backgroundSize: 'cover',

                    }}
                />

                {/* Small picture with scroll effect */}
                <div
                    className="absolute top-16 left-1/2 transform -translate-x-1/2"
                    style={{
                        transform: `translateY(${offset * 0.2}px)`,
                    }}
                >
                    <img
                        src="https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o-1024x683.jpg"
                        alt="Small"
                        style={{
                            width: '20vw',
                            height: '50vh',
                        }}
                    />
                </div>
                <div
                    className="absolute bottom-7 left-1/4 transform -translate-x-1/2"
                    style={{
                        transform: `translateY(${offset * 0.2}px)`,
                    }}
                >
                    <img
                        src="https://media.istockphoto.com/id/532959840/photo/gulmarg-high-peaks.jpg?s=612x612&w=0&k=20&c=WP0MGH2QBSzAqrtYG4Ryr17303VkwoCfkONyjiruo7I="
                        alt="Small"
                        style={{
                            width: '20vw',
                            height: '50vh',
                        }}
                    />
                </div>
            </div>

            {/* Sections with zoom-in effect and popping images */}
            {sections.map((section) => (
                <div
                    key={section.id}
                    ref={(el) => (sectionsRef.current[section.id - 1] = el)}
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url('${section.backgroundImage}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        transform: calculateTransform(offset, 1 + (section.id - 1) * 0.1, 1.8, 400),
                        filter: 'brightness(70%) contrast(120%)', // Apply both brightness and contrast filters
                        transformOrigin: 'center',

                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-4">
                        {/* Left image appearing from the bottom and shifted to the right */}
                        <div className="w-1/3 transform image">
                            <img
                                src={section.imageUrl}  // Use the specific image URL for each section
                                alt="Image"
                                style={{
                                    width: '35%',
                                    height: '15rem',
                                    marginLeft: '30rem', // Shift towards the right
                                }}
                            />
                        </div>
                        {/* Right side text with sliding in from the right */}
                        <div className="w-1/2 text-white font-secondary text-sm ml-[-15rem]">
                            <div className="h-30 w-40">
                                <p className="text-xs" style={{ filter: 'brightness(3)' }}>  {/* Increased brightness */}
                                    {section.text}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ParallaxComponent;
