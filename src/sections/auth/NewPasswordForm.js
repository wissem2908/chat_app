import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink } from "react-router-dom"
import FormProvider from '../../components/hook-form/FormProvider';
import { Eye, EyeSlash, Password } from 'phosphor-react';
import { Stack, Alert, IconButton, InputAdornment, Link, Button } from '@mui/material';
import RHFTextField from '../../components/hook-form/RHFTextField';

// Define the validation schema
const NewPasswordSchema = Yup.object().shape({

    newPassword: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string().required("Password is required").oneOf([Yup.ref('newPassword'), null], 'Password must match'),
});



const defaultValues = {
    newPassword: "",
    confirmPassword: "", // Ensure field name matches
};

const NewPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Initialize useForm with schema and default values
    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema), // Use LoginSchema here
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

                <RHFTextField name="newPassword" label="New Password" type={showPassword ? 'text' : 'password'} InputProps={{
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


                <RHFTextField name="confirmPassword" label="Confirm Password" type={showPassword ? 'text' : 'password'} InputProps={{
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


            <Button component={RouterLink} fullWidth color="inherit" size="large" type="submit" variant="contained" sx={{
                bgColor: "text.primary",
                color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
                "&:hover": {
                    bgColor: "text.primary",
                    color: (theme) => theme.palette.mode === 'light' ? "common.white" : "grey.800"
                }

            }} >
                Submit
            </Button>
            </Stack>

        </FormProvider>
    );
};

export default NewPasswordForm;
