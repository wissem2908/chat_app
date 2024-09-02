import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Eye, EyeSlash, Password } from 'phosphor-react';
import { Stack, Alert, IconButton, InputAdornment,Link, Button } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';

const RegisterForm = () => {

    // Define the validation schema
const RegisterSchema = Yup.object().shape({
    firstName:Yup.string().required("First Name is required"),
    lastName:Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required").email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"), // Ensure field name matches
});



const defaultValues = {
    firstName:"",
    lastName:"",
    email: "demo@gmail.com",
    password: "demo1234", // Ensure field name matches
};

    const [showPassword, setShowPassword] = useState(false);

    // Initialize useForm with schema and default values
    const methods = useForm({
        resolver: yupResolver(RegisterSchema), // Use LoginSchema here
        defaultValues,
    });

    const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods;

    const onSubmit = async (data) => {
        try {
            // Submit data to backend
            console.log(data); // For demonstration purposes
        } catch (error) {
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            });
        }
    };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={3} >
        {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
        </Stack>
        <Stack  direction={{xs:"column" , sm:"row"}}  spacing={2} >
<RHFTextField  name="firstName" label="First Name" />
<RHFTextField  name="lastName" label="Last Name" />
        </Stack>
        <Stack spacing={2}  sx={{my:2}} >
        <RHFTextField  name="email" label="Email" />
        <RHFTextField name="password" label="Password" type={showPassword ? 'text' : 'password'} InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowPassword(!showPassword);
                            }} >
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>

                        </InputAdornment>
                    )
                }} />
        </Stack>
        <Button fullWidth color="inherit" size="large" type="submit" variant="contained" sx={{
                bgColor:"text.primary",
                color:(theme)=>theme.palette.mode === "light" ? "common.white" : "grey.800",
                "&:hover": {
                    bgColor:"text.primary",
                    color:(theme)=> theme.palette.mode ==='light'? "common.white" :"grey.800"
                }

            }} >
Create Account
            </Button>
       
    </FormProvider>
  )
}

export default RegisterForm