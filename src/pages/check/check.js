import main from 'lib/image/main_black.png';
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles(() =>
createStyles({
    Container: {
        width: '100%',
        height: '100%',
        margin: `0 auto`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '15px'
    },
    cardHeader: {
        padding: "12px"
    },
    ssrImg: {
        height: "120px",
    },
    cardTitle: {
        fontSize: '40px',
        color: '#FFE600',
        textShadow: `-1px 0 #333333, 0 1px #333333, 1px 0 #333333, 0 -1px #333333`,
    },
    subButton: {
        color: "#000",
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[600]
        }
    },

}),
);

export default function CheckPage() {
    useEffect(() => {
        document.title = "SSR-조회하기";
    });
    const classes = useStyles();
    

    return(
        <React.Fragment>
            <form className={classes.Container} name="apply" action="값을 보낼 주소" method="post">
                <Card>
                    <div className={classes.cardHeader}>
                        <img className={classes.ssrImg} src={main} alt={main}/>
                        <h1 className={classes.cardTitle}>지원서 조회</h1>
                    </div>

                    <CardContent>
                        <div>
                            <TextField 
                                id="emailInput" 
                                fullWidth
                                type="email"
                                margin="normal" 
                                label="이메일"
                            />
                            <TextField
                                id="passworldInput" 
                                fullWidth 
                                type="password" 
                                margin="normal"
                                label="비밀번호"
                            />
                        </div>
                    </CardContent>
                        
                    <CardActions>
                        <Button 
                            variant="contained"
                            className={classes.subButton} 
                            type="submit" 
                            fullWidth 
                            margin="normal" 
                            size="large">
                            조회하기
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </React.Fragment>
    );
}