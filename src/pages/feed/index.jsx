import { Link } from 'react-router-dom'

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import bannerImage from '../../assets/banner.svg';

import { Container, Column, Title, TitleHighlight } from './styles';
import { useEffect } from 'react';

const Feed = () => {

    
        useEffect(() => {
            document.title = 'Feed | DIO Clone'
        }, [])

    return (
        <div>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>

                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo
                        name="Vitor Paz"
                        image="https://avatars.githubusercontent.com/u/101137538?v=4"
                        percentual={100}
                    />
                    <UserInfo
                        name="Maria Silva"
                        image="https://avatars.githubusercontent.com/u/101137538?v=4"
                        percentual={18}
                    />
                    <UserInfo
                        name="João Souza"
                        image="https://avatars.githubusercontent.com/u/101137538?v=4"
                        percentual={61}
                    />
                    <UserInfo
                        name="Ana Oliveira"
                        image="https://avatars.githubusercontent.com/u/101137538?v=4"
                        percentual={41}
                    />
                    <UserInfo
                        name="Pedro Santos"
                        image="https://avatars.githubusercontent.com/u/101137538?v=4"
                        percentual={22}
                    />
                </Column>
            </Container>
        </div>
    )
}

export { Feed };