import { useState } from "react";
import Card from "./Card";
import Detalhes from "./Detalhes";
import Anitta from "../assets/Anitta.png"
import Celine from "../assets/celine dion.avif"
import Jão from "../assets/Jão.avif"
import Luan from "../assets/luan Santana.jpg"
import Luisa from "../assets/Luisa sonza.avif"
import Marilia from "../assets/Marilia-Mendonca.jpg"

export default function Galeria() {
    const [detalhe, setDetalhe] = useState(null);

    function detalhar(tela, descricao, nome) {
        setDetalhe({ tela, descricao, nome });
        document.body.style.height = "150vh"
    }

    return (
        <>
            <h1>Galeria de Personagens</h1>
            <div>
                <Card legenda="Anitta" screen={Anitta} onClick={() => detalhar(Anitta, "Anitta, nome artístico de Larissa de Macedo Machado, é uma cantora, compositora e empresária brasileira, conhecida como uma das maiores estrelas da música pop no Brasil. Nascida em 30 de março de 1993, no Rio de Janeiro, ela se destacou por hits como Show das Poderosas, Bang e Envolver, que a projetaram internacionalmente. Com um estilo versátil, misturando funk, pop, reggaeton e outros ritmos, Anitta conquistou fãs no mundo todo, colaborando com artistas globais e se tornando uma das principais representantes da música brasileira no exterior", "Annita")} />
                <Card legenda="Celine dion" screen={Celine } onClick={() => detalhar(Celine, "Céline Dion é uma cantora canadense mundialmente famosa, conhecida por sua voz poderosa e emocionante. Nascida em 30 de março de 1968, no Quebec, ela se tornou um ícone da música pop e baladas românticas, com sucessos como My Heart Will Go On (tema de Titanic), The Power of Love e Because You Loved Me.", "Celine")} />
                <Card legenda="Marilia Mendonça" screen={Marilia} onClick={() => detalhar(Marilia, "ainha da Sofrência, Marília revolucionou o sertanejo com letras profundas e uma voz única. Ícone feminino do gênero, deixou hits eternos como Infiel e Graveto. Sua morte precoce, em 2021, chocou o Brasil.", "Marilia Mendonça")} />
                <Card legenda="Luan Santana" screen={Luan} onClick={() => detalhar(Luan, "Um dos maiores nomes do sertanejo, Luan Santana conquistou o Brasil com seu carisma e romantismo. Sucesso em festivais e estádios, tem clássicos como Te Esperando e Morena." , "Luan Santana")} />
                <Card legenda="Jão" screen={Jão} onClick={() => detalhar(Jão, "BebCantor e compositor brasileiro, Jão se destaca no pop nacional com letras emotivas e performances marcantes. Sua música mistura vulnerabilidade e ousadia, com hits como Enquanto Me Beija e Idiota.", "Jão")} />
                <Card legenda="Luisa Sonza" screen={Luisa} onClick={() => detalhar(Luisa, "A grande estrela do pop brasileiro, Luísa Sonza é sinônimo de ousadia, reinvenção e poder vocal. De Devagarinho a Carnificina, ela domina charts e polêmicas com personalidade forte. Sua música discute empoderamento, relacionamentos e sexualidade, enquanto sua presença no palco e nas redes a torna uma das artistas mais influentes do país. Com projetos como Escândalo Íntimo, Luísa prova que é muito mais que hitmaker: é a voz de uma geração.", "Luiza Sonza")} />
            </div>

            {detalhe && (
                <Detalhes screen={detalhe.tela} legenda={detalhe.descricao} nome={detalhe.nome} />
            )}
        </>
    );
}