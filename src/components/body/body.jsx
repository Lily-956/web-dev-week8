import { Typography } from '@mui/material'
import { Card, CardContent } from "@mui/material"
import { Container } from "@mui/system"

function Body() {
    return (
       <Container className="body">
           <Card sx={{maxWidth: "500px"}}>
               <CardContent>
                   <Typography variant="h6">
                       Cheese Cake
                   </Typography>
                   <Typography>
                       Cheese cake is an amazing dessert! 
                   </Typography>
               </CardContent>
           </Card>
        
           <Card sx={{maxWidth: "500px"}}>
               <CardContent>
                   <Typography variant="h6">
                       Cheese Cake
                   </Typography>
                   <Typography>
                       Cheese cake is an amazing dessert! 
                   </Typography>
               </CardContent>
           </Card>

       </Container>
    )
}

export default Body