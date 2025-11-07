import React from "react";
import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    Logo,
    UserPicture
} from "./styles";
import { Button } from "../Button";
import logo from '../../assets/logo-dio.png';

const Header = ({ autenticado }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Logo src={logo} alt="Logo da dio" />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/101137538?v=4" alt="Foto do usuário" />
                    ) :
                        (<>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title={"Entrar"}></Button>
                            <Button title={"Cadastrar"}></Button>
                        </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };