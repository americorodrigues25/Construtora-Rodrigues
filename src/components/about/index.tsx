import { FaCheckCircle } from "react-icons/fa";
import Button from "../button";

const About = () => {
    return (
        <section id="about" className="bg-slate-100 px-3 h-auto">
            <div className="max-w-7xl mx-auto py-16">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-20">
                    <div className="relative justify-center w-10/12">
                        <img src="./src/assets/image/about-img-1.png" alt="" className = "w-full" />
                    </div>
                    <div className="flex flex-col gap-5 md:px-10 lg:px-0">
                        <h2 className="text-orange-600 text-2xl font-bold uppercase">Sobre nós</h2>
                        <p className="text-slate-950 font-bold text-4xl lg:text-5xl">Prestamos o melhor serviço de construção</p>
                        <p className="text-slate-600">Somos especialistas em construção de prédios e casas, oferecendo soluções inovadoras e personalizadas. Com uma equipe qualificada, garantimos obras de qualidade, cumprindo prazos com transparência. Utilizamos materiais de primeira linha e tecnologia avançada para assegurar durabilidade e segurança. Nosso foco é transformar suas ideias em realidade com excelência.</p>
                        <div className="grid grid-cols-2 gap-4"> 
                            <div className="flex items-center">
                                <FaCheckCircle className="mr-2 text-orange-600" />
                                <p className="text-slate-600">Trabalhadores profissionais</p>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="mr-2 text-orange-600" />
                                <p className="text-slate-600">Qualidade garantida</p>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="mr-2 text-orange-600" />
                                <p className="text-slate-600">Vasta experiência</p>
                            </div>
                            <div className="flex items-center">
                                <FaCheckCircle className="mr-2 text-orange-600" />
                                <p className="text-slate-600">Orçamentamos o seu projeto</p>
                            </div>
                        </div>
                        <div className="">
                            <Button text="Ver projetos" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;
