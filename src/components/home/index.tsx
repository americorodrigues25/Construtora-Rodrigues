import { useState, useEffect } from 'react';
import Button from '../button';
import { FaArrowRight } from "react-icons/fa";
import ImageHome from '../../assets/image/home-img-1.png';
import ImageHome2 from '../../assets/image/home-img-2.png';

const Home = () => {
    const [contagemAnos, setcontagemAnos] = useState(0);
    const [contagemProjetos, setcontagemProjetos] = useState(0);

    useEffect(() => {
        const experienceTarget = 10;
        const projectsTarget = 120;

        const experienceInterval = setInterval(() => {
            setcontagemAnos((prevCount) => {
                if (prevCount < experienceTarget) {
                    return prevCount + 1;
                } else {
                    clearInterval(experienceInterval);
                    return prevCount;
                }
            });
        }, 100);

        const projectsInterval = setInterval(() => {
            setcontagemProjetos((prevCount) => {
                if (prevCount < projectsTarget) {
                    return prevCount + 1;
                } else {
                    clearInterval(projectsInterval);
                    return prevCount;
                }
            });
        }, 20);

        return () => {
            clearInterval(experienceInterval);
            clearInterval(projectsInterval);
        };
    }, []);

    return (
        <main className="bg-slate-950 py-20 md:py-32 px-3 h-auto">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-32">
                <div className="flex flex-col w-full md:px-10 lg:px-0 gap-y-4 mt-10">
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-200 leading-tight">Os melhores empreendimentos são feitos por nós</h1>
                    <p className="text-lg text-slate-400">Fornecemos os melhores serviços de design, construção e manutenção de casas e apartamentos para você e para sua família.</p>
                    <div className="flex gap-5">
                       <a href="#" target='_blank'><Button text = "Nossos Serviços" /></a>
                        <div className="flex items-center justify-center gap-5 hover:text-orange-700 duration-300 text-lg text-orange-600">
                            <button className="">Ver projetos</button>
                            <FaArrowRight />
                        </div>
                    </div>
                    <div className="flex mt-12">
                        <div className="mr-8">
                            <p className="text-5xl font-bold text-orange-600 pb-2">+{contagemAnos}</p>
                            <p className="text-lg text-slate-400">Anos de experiência</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-orange-600 pb-2">{contagemProjetos}</p>
                            <p className="text-lg text-slate-400">Projetos entregues</p>
                        </div>
                    </div>
                </div>

                <div className="relative w-full px-5 md:px-10 lg:px-0">
                    <img src={ImageHome} alt="Imagem 1" className="w-full" />
                    <img src={ImageHome2} alt="Imagem 2" className="hidden lg:flex lg:w-6/12 w-8/12 border-8 border-slate-950 absolute -left-20 -bottom-14" />
                </div>
            </div>
        </main>
    );
};

export default Home;
