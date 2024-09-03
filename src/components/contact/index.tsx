import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { FaPhone, FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";

const Contact = () => {
    return (
        <section id="contact" className="bg-slate-100 px-3 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center lg:text-left">
                    <h2 className="text-orange-600 text-2xl font-bold uppercase pb-1">Contate-nos</h2>
                    <p className="text-slate-950 font-bold text-4xl lg:text-5xl">Envie uma mensagem</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-16 gap-10">
                    <div className="w-full lg:w-2/5">
                        <img src="./src/assets/image/contact-img.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-3/5">
                        <div className="w-full h-52 rounded-sm border border-slate-950 flex flex-col items-center justify-center">
                            <div className="bg-slate-950 w-12 h-12 rounded-full flex justify-center items-center">
                                <IoLocationOutline className="text-slate-200 text-3xl" />
                            </div>
                            <p className="text-slate-950 text-lg font-bold py-2">Estamos localizados aqui</p>
                            <p className="text-slate-950">Avenida Paulista, 2400</p>
                            <p className="text-slate-950">Brasil - SP</p>
                        </div>
                        <div className="w-full h-52 rounded-sm border border-slate-950 flex flex-col items-center justify-center">
                            <div className="bg-slate-950 w-12 h-12 rounded-full flex justify-center items-center">
                                <FaPhone className="text-slate-200 text-xl" />
                            </div>
                            <p className="text-slate-950 text-lg font-bold py-2">Fale com a gente</p>
                            <p className="text-slate-950">(11) 12345-6789</p>
                            <p className="text-slate-950">(11) 3838-9292</p>
                        </div>
                        <div className="w-full h-52 rounded-sm border border-slate-950 flex flex-col items-center justify-center">
                            <div className="bg-slate-950 w-12 h-12 rounded-full flex justify-center items-center">
                                <RiMessage3Line className="text-slate-200 text-3xl" />
                            </div>
                            <p className="text-slate-950 text-lg font-bold py-2">Mande uma mensagem</p>
                            <div className="flex gap-3 text-2xl text-orange-600">
                                <IoLogoWhatsapp />
                                <FaFacebookMessenger />
                                <FaTelegramPlane />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
