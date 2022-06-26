import { Card, CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"
import CardMedia from '@mui/material/CardMedia';
import './characters.css'

function Characters() {
    return (
        <div className="body">
            <div className='column'>
            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="http://sev.h-cdn.co/assets/17/11/2560x1280/landscape-1489513520-dru.jpg"
                    alt="Gru + his twin brother"
                />
                <CardContent>
                    <Typography variant="h6">
                        Felonious Gru
                    </Typography>
                    <Typography>
                    Gru is a tall, bald man with blue eyes, long nose and broad, powerful physique; and dresses in a light grey sweater underneath a black collared coat along with a striped grey scarf, black trousers, and shoes. He has a thick accent, and his arms and legs are notably disproportionate in size to his body.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="https://i.pinimg.com/originals/a3/10/01/a31001bb30f280a503f10c954f202465.jpg"
                    alt="Agnes looking happy"
                />
                <CardContent>
                    <Typography variant="h6">
                        Agnes
                    </Typography>
                    <Typography>
                    Agnes Gru is one of Gru and Lucy's three adopted daughters, alongside her big sisters Margo and Edith. She is a very naive, sweet, and innocent child, which is why Margo is so protective of her. She's a 6-year-old little girl who greatly adores unicorns, as shown on various occasions.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth: "500px"}} className='cardo'>
             <CardMedia
                    component="img"
                    height="140"
                    image="https://i.insider.com/59552bbb298d4ae20d8b479e?width=1000&format=jpeg&auto=webp"
                    alt="Edith looking smug"
                />
                <CardContent>
                    <Typography variant="h6">
                        Edith
                    </Typography>
                    <Typography>
                    Edith Gru is the adopted middle child of Felonius Gru and Lucy Wilde. She has an older sister, Margo, and a younger sister, Agnes. She appears in all three Despicable Me films and several of the mini movies.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="https://www.looper.com/img/gallery/why-margo-from-despicable-me-sounds-so-familiar/intro-1587389462.jpg"
                    alt="Margo jumping"
                />
                <CardContent>
                    <Typography variant="h6">
                        Margo
                    </Typography>
                    <Typography>
                    Margo Gru is the oldest of the three orphan girls that Gru adopts. Before she was adopted, she was an orphan horribly treated by Miss Hattie. Like Edith and Agnes (Margo's younger sisters), Margo wished to be adopted by somebody who would love them.
                    </Typography>
                </CardContent>
            </Card>
            </div>

            <div className='column'>
            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/3/1404386894976/despicable-me-009.jpg?width=620&quality=85&auto=format&fit=max&s=eff1df753d5ff2ad5fb27039a162d4ad"
                    alt="Minions"
                />
                <CardContent>
                    <Typography variant="h6">
                        Minions
                    </Typography>
                    <Typography>
                    The Minions are small, yellow, cylindrical creatures, who have one or two eyes. They are the signature characters of the Despicable Me series. They bring much of the comedy in the film, AKA the scene-stealer of the movie. Rhey speak in an incomprehensible language, called Minionese, occasionally switching to English. 
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="https://y.yarn.co/48c8b858-7677-46b7-bda4-f0d62f385538_screenshot.jpg"
                    alt="Dr Nefario with his mouth open"
                />
                <CardContent>
                    <Typography variant="h6">
                        Dr. Nefario
                    </Typography>
                    <Typography>
                    Joseph Albert Nefario, most commonly referred to as Dr. Nefario, is a major character in Despicable Me and a former major antagonist in Despicable Me 2. He is Gru's gadgeteer, residing in his underground lair and laboratories. He builds and designs most of Gru's machines.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="https://www.cheatsheet.com/wp-content/uploads/2022/02/Despicable-Me-2-Lucy-voiced-by-Kristen-Wiig-1200x649.jpg"
                    alt="Lucy Wilde in a cupcake shop"
                />
                <CardContent>
                    <Typography variant="h6">
                        Lucy Wilde
                    </Typography>
                    <Typography>
                    Lucy Wilde is the deuteragonist of Despicable Me 2 and the tritagonist of Despicable Me 3. She is from an organization called the Anti-Villain League, Gru's love interest and later become his wife at the end.
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{maxWidth: "500px"}} className='cardo'>
            <CardMedia
                    component="img"
                    height="140"
                    image="https://pbs.twimg.com/ext_tw_video_thumb/1466529120632856584/pu/img/Y8gBeCR84Vtz1cZ8.jpg"
                    alt="Kyle looking evil but happy"
                />
                <CardContent>
                    <Typography variant="h6">
                        Kyle
                    </Typography>
                    <Typography>
                    Kyle is a pet dog of the Gru family, belonging to Gru, and then given to Agnes. Kyle was originally a vicious, aggressive, ferocious, and monstrous blue creature that even Gru had trouble controlling. 
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default Characters