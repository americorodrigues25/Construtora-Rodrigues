import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import favicon from '../../assets/image/favicon.png';

const Footer = () => {
    return (
        <footer className="bg-slate-950 px-3 h-auto">
            <div className="max-w-7xl mx-auto py-14">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div>
                        <div className="flex gap-3 pb-5">
                            <img src={favicon} alt="" />
                            <h2 className="text-lg font-semibold text-slate-200">Construtora Rodrigues</h2>
                        </div>
                        <p className="text-slate-400 pb-3">Fornecemos segurança<br />e confiança nos lares</p>
                        <p className="text-slate-400">Email: americo.200422@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-200 pb-5">Empresa</h2>
                        <p className="text-slate-400 pb-3">Sobre nós</p>
                        <p className="text-slate-400 pb-3">Serviços</p>
                        <p className="text-slate-400">Projetos</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-200 pb-5">Informação</h2>
                        <p className="text-slate-400">Avenida Paulista, 2400</p>
                        <p className="text-slate-400 pb-3">Brasil - SP</p>
                        <p className="text-slate-400">08:00 - 18:00</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-200 pb-5">Redes Sociais</h2>
                        <div className="flex gap-5 text-orange-600 text-3xl">
                            <FaFacebook />
                            <RiInstagramFill />
                            <FaSquareXTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;