import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useForm } from 'react-hook-form';

export default function CalculateShipping() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit=(data) => console.log(data)

    return (
        <Container maxWidth="xs">
            <h1 >Incluir / Editar / filtrar ( por todos os campos</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={5}>
            <TextField
            variant="outlined"
            label="Nome"    
            fullWidth
            autoComplete="name"
            autoFocus
            {...register("name", {required: "Digite um nome",})}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
            />
            <Box mt={2}>
            <TextField
            variant="outlined"
            label="Custo"    
            fullWidth
            autoComplete="number"
            autoFocus
            {...register("number", {required: "Digite um valor",})}
            error={!!errors?.number}
            helperText={errors?.number ? errors.number.message : null}
            /> 
            </Box>
            </Box>
            <Button type="submit" variant='contained' color="primary" fullWidth>CEP</Button>
            <Box mt={2}>
            <Button type="submit" variant='contained' color="secondary" fullWidth>Map</Button>
            </Box>
            </form>
        </Container>
    )
}
