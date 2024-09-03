import { BiBuildingHouse } from "react-icons/bi";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    const [slidePerview, setSlidePerview] = useState(3);

    const services = [
        { id: 1, title: "Construção de Habitações", description: "Temos os melhores profissionais trabalhando para deixar sua casa segura, eficaz e bonita" },
        { id: 2, title: "Construção de áreas residenciais", description: "Temos os melhores profissionais trabalhando para deixar sua casa segura, eficaz e bonita" },
        { id: 3, title: "Manutenção e reparos totais", description: "Temos os melhores profissionais trabalhando para deixar sua casa segura, eficaz e bonita" },
        { id: 4, title: "Instalação de água e esgotos", description: "Temos os melhores profissionais trabalhando para deixar sua casa segura, eficaz e bonita" },
        { id: 5, title: "Instalação de cerâmica e outros", description: "Temos os melhores profissionais trabalhando para deixar sua casa segura, eficaz e bonita" }
    ];

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 640) {
                setSlidePerview(1);
            } else if (width < 1024) {
                setSlidePerview(2);
            } else {
                setSlidePerview(3);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize); 
        };
    }, []);

    return (
        <>
            <div className="bg-slate-100 px-3 md:pt-14 md:px-0">
                <Swiper
                    slidesPerView={slidePerview}
                    pagination={{ clickable: true }}
                    navigation
                    spaceBetween={30}
                >
                    {services.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-slate-100 flex flex-col items-start justify-center gap-y-5 h-[340px] rounded-sm shadow-slate-950 shadow-2xl px-8">
                                <div className="bg-slate-950 w-12 h-12 rounded-full flex justify-center items-center">
                                    <BiBuildingHouse className="text-slate-200 text-3xl" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-950 uppercase">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-full h-40 bg-slate-950 -mt-40"></div>
        </>
    );
};

export default Slider;
