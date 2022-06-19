import { Card, CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"
import './characters.css'

function Characters() {
    return (
        <Container className="body">
            <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Felonious Gru
                    </Typography>
                    <Typography>
                    Gru is a tall, bald man with blue eyes, long nose and broad, powerful physique; and dresses in a light grey sweater underneath a black collared coat along with a striped grey scarf, black trousers, and shoes. He has a thick accent, and his arms and legs are notably disproportionate in size to his body.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Minions
                    </Typography>
                    <Typography>
                        Minions are a species of tiny yellow henchmen; they look like unusually dressed Mike and Ike candies. They're earnestly driven by the desire to serve an evil boss, though they often screw up because they're selfish, easily distracted, and generally inept.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Agnes
                    </Typography>
                    <Typography>
                    Agnes Gru is one of Gru and Lucy's three adopted daughters, alongside her big sisters Margo and Edith. She is the youngest child of the three sisters. She greatly adores unicorns, as shown on various occasions.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Margo
                    </Typography>
                    <Typography>
                    Margo Gru is the oldest of the three orphan girls that Gru adopts. Before she was adopted, she was an orphan horribly treated by Miss Hattie. Like Edith and Agnes (Margo's younger sisters), Margo wished to be adopted by somebody who would love them.
                    </Typography>
                </CardContent>
            </Card>
             <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Edith
                    </Typography>
                    <Typography>
                    Edith Gru is the adopted middle child of Felonius Gru and Lucy Wilde. She has an older sister, Margo, and a younger sister, Agnes. She appears in all three Despicable Me films and several of the mini movies.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Characters