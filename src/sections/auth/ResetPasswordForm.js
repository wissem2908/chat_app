import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { Stack, Alert, Button } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';

// Define the validation schema
const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email must be a valid email address"),

});



const defaultValues = {
    email: "demo@gmail.com",
   
};

const ResetPasswordForm = () => {
 

    // Initialize useForm with schema and default values
    const methods = useForm({
        resolver: yupResolver(ResetPasswordSchema), // Use LoginSchema here
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
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
                <RHFTextField name="email" label="Email address" />
                <Button fullWidth color="inherit" size="large" type="submit" variant="contained" sx={{
                bgColor:"text.primary",
                color:(theme)=>theme.palette.mode === "light" ? "common.white" : "grey.800",
                "&:hover": {
                    bgColor:"text.primary",
                    color:(theme)=> theme.palette.mode ==='light'? "common.white" :"grey.800"
                }

            }} >
Send Request
            </Button>

            </Stack>
         
        
        </FormProvider>
    );
};

export default ResetPasswordForm;
