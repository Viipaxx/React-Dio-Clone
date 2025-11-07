import { Header } from '../../components/Header'
import { Column, Container, LoginText, PolicyText, SubtitleCadastro, Title, TitleCadastro, Wrapper } from './styles'
import { Input } from '../../components/Input'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { api } from '../../services/api';
import bcrypt from 'bcryptjs';
import { useEffect } from 'react';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').max(12, 'No máximo 12 caracteres').required('Campo obrigatório'),
}).required()


const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = async (formData) => {
        try {

            const { data } = await api.get(`users?email=${formData.email}`)
            if (data.length === 0) {

                const hashedPassword = await bcrypt.hash(formData.password, 10)
                const userData = {
                    ...formData,
                    password: hashedPassword
                }

                await api.post("users", userData)
                console.log("Usuário cadastrado com sucesso!")
                navigate('/feed')

            } else {
                alert("E-mail já cadastrado.")
            }
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            alert("Ocorreu um erro ao tentar cadastrar.");
        }
    };

    useEffect(() => {
        document.title = 'Cadastro | DIO Clone'
    }, [])

    return (
        <div>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors.name?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson />} />
                            <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />} />
                            <Button title="Cria minha conta" variant='secondary' type="submit"></Button>
                        </form>
                        <PolicyText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</PolicyText>
                        <p>Já tenho conta. <LoginText onClick={() => navigate('/login')}>Fazer login</LoginText></p>
                    </Wrapper>
                </Column>
            </Container>

        </div>
    )
}

export { Cadastro }
