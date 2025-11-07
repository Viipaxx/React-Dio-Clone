import { useState, useCallback, useMemo } from "react";

const Teste = () => {

    const [age, setAge] = useState(21);
    const [nome, setNome] = useState('Vitor');

    const handleChangeName = useCallback(() => {
        setNome(prev => prev === "Vitor" ? "Gabriel" : "Vitor");
    }, []);

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atual', age, newAge);
        setAge(prev => prev === 21 ? 44 : 21);
    }, [age]);

    const calculo = useMemo(() => {
        console.log('Calculou', age)
        return 10 * age
    }, [age])



    console.log('Renderizou', calculo)

    return (
        <div>
            <p>
                Idade: {age}
            </p>
            <br />
            <p>
                Nome: {nome}
            </p>
            <br />
            <button onClick={handleChangeName}>Alterar Nome</button>
            <br />
            <button onClick={handleChangeAge}>Alterar Idade</button>
        </div>
    )
}


export { Teste };