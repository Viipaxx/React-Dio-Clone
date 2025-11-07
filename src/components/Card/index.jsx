import React from 'react'
import { FiMessageCircle, FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'
import backgroundImage from '../../assets/backgroundImage.svg'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={backgroundImage} />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/101137538?v=4' />
                    <div>
                        <h4>Vitor Paz</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto dioo: um projeto para testar meus conhecimentos em ReactJS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#html #css #javascript #reactjs</h4>
                    <p>
                        <FiThumbsUp /> 10 <FiMessageCircle /> 2
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };