import Button from '../button';
import ImageProject1 from '../../assets/image/Predio1.jpg';
import ImageProject2 from '../../assets/image/predio2.jpg';
import ImageProject3 from '../../assets/image/casa1.jpg';

const Projects = () => {
    return (
        <section className="bg-slate-950 px-3 py-16">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col justify-center items-center pb-16 md:w-2/5 text-center mx-auto'>
                    <h2 className='text-orange-600 text-2xl font-bold uppercase'>Nossos projetos</h2>
                    <p className='text-slate-200 font-bold text-4xl lg:text-5xl'>Últimos projectos concluídos</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='w-full bg-slate-200 flex flex-col rounded-sm'>
                        <img src={ImageProject1} alt="" className='w-full h-64 object-cover rounded-t-sm' />
                        <div className='px-6 md:px-8 py-10 flex flex-col flex-grow'>
                            <div className='flex-grow'>
                                <p className='text-slate-600 font-medium text-lg pb-1'>Construção de hotel</p>
                                <h3 className='text-slate-950 font-bold text-2xl pb-1'>Hotel de luxo de 22 andares</h3>
                                <h4 className='text-slate-600 pb-5'>15 de Janeiro de 2024</h4>
                                <p className='pb-5'>Um hotel de luxo com 22 andares, construído com materiais de alta qualidade e design moderno, garantindo conforto e sofisticação para todos os hóspedes.</p>
                            </div>
                            <div className="pt-5 flex justify-center items-center">
                                <Button text="Detalhes completo" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-slate-200 flex flex-col rounded-sm'>
                        <img src={ImageProject2} alt="" className='w-full h-64 object-cover rounded-t-sm' />
                        <div className='px-6 md:px-8  py-10 flex flex-col flex-grow'>
                            <div className='flex-grow'>
                                <p className='text-slate-600 font-medium text-lg pb-1'>Construção de prédio</p>
                                <h3 className='text-slate-950 font-bold text-2xl pb-1'>Prédio com desig futurista</h3>
                                <h4 className='text-slate-600 pb-5'>30 de Abril de 20244</h4>
                                <p className='pb-5'>
                                    Um prédio de design futurista que une inovação e sustentabilidade. Um marco arquitetônico que redefine os padrões urbanos.
                                </p>
                            </div>
                            <div className="pt-5 flex justify-center items-center">
                                <Button text="Detalhes completo" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-slate-200 flex flex-col rounded-sm'>
                        <img src={ImageProject3} alt="" className='w-full h-64 object-cover rounded-t-sm' />
                        <div className='px-6 md:px-8  py-10 flex flex-col flex-grow'>
                            <div className='flex-grow'>
                                <p className='text-slate-600 font-medium text-lg pb-1'>Construção de casa</p>
                                <h3 className='text-slate-950 font-bold text-2xl pb-1'>Casa de luxo com 2 andares</h3>
                                <h4 className='text-slate-600 pb-5'>22 de Agosto de 2024</h4>
                                <p className='pb-5'>Uma casa de luxo de dois andares, projetada para oferecer o máximo em conforto e elegância, com espaços amplos e acabamentos de alto padrão.</p>
                            </div>
                            <div className="pt-5 flex justify-center items-center">
                                <Button text="Detalhes completo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
