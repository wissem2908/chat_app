import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function RHFTextField({ name, helperText, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : helperText}
                    {...other}
                />
            )}
        />
    );
}

// Define PropTypes on the function itself
RHFTextField.propTypes = {
    name: PropTypes.string.isRequired,
    helperText: PropTypes.node,
};

export default RHFTextField;
