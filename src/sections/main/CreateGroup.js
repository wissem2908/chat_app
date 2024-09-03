import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Stack } from '@mui/material';
import React from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import RHFTextField from '../../components/hook-form/RHFTextField';
import RHFAutocomplete from '../../components/hook-form/RHFAutocomplete';


const MEMBERS =['Name1','Name2','Name3','Name4','Name5']



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  const CreateGroupForm = ({handleClose}) =>{
// Define the validation schema
const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2,"Must have at least 2 members"),
});

const defaultValues = {
    title: "",
    members: [],
};

const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
});


const { reset, watch, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful,isValid } } = methods;


const onSubmit = async (data) => {
    try {
        // Submit data to backend
        console.log(data);
    } catch (error) {
        console.log(error);
        reset();
        setError("afterSubmit", {
            ...error,
            message: error.message,
        });
    }
};


return(
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}  >
             <Stack spacing={3}>
              
                <RHFTextField name="title" label="Title" />
                <RHFAutocomplete name="members" label="Members" multiple  freeSolo  options={MEMBERS.map((option)=>option)} ChipProps={{size:"medium"}} />
             <Stack spacing={2} direction="row"  alignItems={"center"} justifyContent={"end"}   >
                <Button onClick={handleClose}>
                    Cancel
                </Button>
<Button type="submit" variant="contained">
    Create
</Button>
             </Stack>

            </Stack>


    </FormProvider>
)
  }


const CreateGroup = (open,handleClose) => {
  return (
    <Dialog
    fullWidth
    maxWidth="xs"
    open={open}
    TransitionComponent={Transition}
    keepMounted
    sx={{p:4}}
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle sx={{mb:3}} >Create New Group</DialogTitle>
    <DialogContent>
    <CreateGroupForm handleClose={handleClose}  />
    </DialogContent>
  
  </Dialog>
  )
}

export default CreateGroup