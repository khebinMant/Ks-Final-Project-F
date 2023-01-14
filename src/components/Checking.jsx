import { CircularProgress, Grid } from '@mui/material'

export const Checking = () => {
    return (
        <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' , backgroundColor: '#020F2A', padding: 4 }}
        >

            <Grid   
                container 
                direction='row'
                justifyContent='center'
                alignItems='center'
                item
                sx={{  width: { sm: 450 }}}>
                <CircularProgress color='warning'/>
            </Grid>
        </Grid>
    )
}
