import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnersCarousel.css";

import arghyam from "../assets/Partnerslogo/arghyam.png";
import casa from "../assets/Partnerslogo/casalogo.png";
import childline from "../assets/Partnerslogo/childline.jpeg";
import gpsvs from "../assets/Partnerslogo/gpsvs.png";
import igsss from "../assets/Partnerslogo/igsss.png";
import bfdw from "../assets/Partnerslogo/bfdw.png";
import misereor from "../assets/Partnerslogo/misereor.png";
import mpa from "../assets/Partnerslogo/mpa.png";
import ssp from "../assets/Partnerslogo/ssp.png";

const partners = [
    {
        name: "Arghyam",
        logo: arghyam,
        link: "https://arghyam.org/"
    },
    {
        name: "CASA",
        logo: casa,
        link: "https://casa-india.org/"
    },
    {
        name: "CHILDLINE",
        logo: childline,
        link: "https://www.childlineindia.org/"
    },
    {
        name: "GPSVS",
        logo: gpsvs,
        link: "https://gpsvs.org/"
    },
    {
        name: "IGSSS",
        logo: igsss,
        link: "https://igsss.org/"
    },
    {
        name: "BfdW",
        logo: bfdw,
        link: "https://www.brot-fuer-die-welt.de/en/bread-for-the-world/"
    }, 
    {
        name: "MISEREOR",
        logo: misereor,
        link: "https://www.misereor.org/"
    },
    {
        name: "Megh Pyne Abhiyan",
        logo: mpa,
        link: "https://meghpyneabhiyan.wordpress.com/"
    },
    {
        name: "Swayam Shikshan Prayog",
        logo: ssp,
        link: "https://swayamshikshanprayog.org/"
    }
];

const PartnersCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="partners-carousel-container">
            <h2 className="carousel-title">Our Partners</h2>
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index} className="partner-item">
                        <a href={partner.link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PartnersCarousel;
