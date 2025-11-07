import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import bannerImage from '../../assets/banner.svg';

import { Container, Title, TitleHighlight, TextContent } from './styles';
import { useEffect } from 'react';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

    useEffect(() => {
        document.title = 'Home | DIO Clone'
    }, [])

    return (
        <div>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras
                        do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title={"Começar Agora"} variant='secondary' onClick={handleClickSignIn} />
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem principal" />
                </div>
            </Container>
        </div>
    )
}

export { Home };