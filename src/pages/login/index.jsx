import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import {
    Container,
    Title,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    TitleLogin,
    Wrapper
} from './styles';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api';
import bcrypt from 'bcryptjs';
import { useEffect } from 'react';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').max(12, 'No máximo 12 caracteres').required('Campo obrigatório'),
}).required()

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}`)
            if (data.length === 0) {
                alert("Usuário não encontrado.")
                return
            }

            const user = data[0]
            const isValid = await bcrypt.compare(formData.password, user.password)

            if (isValid) {
                console.log("Login realizado com sucesso!")
                navigate('/feed')
            } else {
                alert("Senha incorreta.")
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error)
        }
    };

        useEffect(() => {
            document.title = 'Login | DIO Clone'
        }, [])

    return (
        <div>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant='secondary' type="submit"></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={() => navigate('/cadastro')}>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </div>
    )
}

export { Login };