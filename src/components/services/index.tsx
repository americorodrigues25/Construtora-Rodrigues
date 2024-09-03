import Button from "../button";

const Services = () => {
    return (
        <>
            <section id="services" className="bg-slate-100 px-3">
                <div className="max-w-7xl mx-auto md:px-10 lg:px-0">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-5 lg:gap-0">
                        <div className="lg:w-1/5 flex flex-col gap-5">
                            <h2 className="text-orange-600 text-2xl font-bold uppercase">Nossos serviços</h2>
                            <p className="text-slate-950 font-bold text-4xl lg:text-5xl">Serviços de construção de alta qualidade</p>
                        </div>
                        <div className="lg:w-2/5">
                            <p>Oferecemos serviços de construção de alta qualidade, desde a execução de projetos personalizados e construção de habitações até manutenção, reparos e instalação de sistemas de água e esgoto, garantindo segurança, eficiência e beleza em cada detalhe.</p>
                        </div>
                        <div className="lg:w-auto">
                            <Button text="Contactar agora" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;
