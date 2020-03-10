import main from 'lib/image/main_black.png';
import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
        margin: `0 auto`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '15px'
    },
    card: {
        width: '800px'
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
    formControl: {
        minWidth: 120,
        marginTop: '16px',
        marginButtom: '8px',
        textAlign: 'start',
    },
    subButton: {
        fontSize: '20px',
        fontWeight: 'bolder',
        color: "#000",
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[600]
        }
    },

}),
);

export default function ApplyPage() {
    
useEffect(() => {
    document.title = "SSR-지원하기";
});
const classes = useStyles();
    return(
        <React.Fragment>
            <form className={classes.Container} name="apply" action="값을 보낼 주소" method="post">
                <Card className={classes.card} >
                    <div className={classes.cardHeader}>
                        <img className={classes.ssrImg} src={main} alt={main}/>
                        <h1 className={classes.cardTitle}>지원서</h1>
                    </div>
                    <CardContent>
                        <div>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="fieldLabel">분야 선택</InputLabel>
                            <Select
                                labelId="field"
                                id="field"
                            >
                                <MenuItem value="Forensic">Forensic</MenuItem>
                                <MenuItem value="Pwnable">Pwnable</MenuItem>
                                <MenuItem value="Web Hacking">Web Hacking</MenuItem>
                                <MenuItem value="Web FrontEnd Development">Web FrontEnd Development</MenuItem>
                                <MenuItem value="BackEnd Development">BackEnd Development</MenuItem>
                                <MenuItem value="App Development">App Development</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="gradeLabel">학년 선택</InputLabel>
                            <Select
                                labelId="grade"
                                id="grade"
                            >
                                <MenuItem value="1">1학년</MenuItem>
                                <MenuItem value="2">2학년</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="majorLabel">학과 선택</InputLabel>
                            <Select
                                labelId="major"
                                id="major"
                            >
                                <MenuItem value="I">정보보안계열</MenuItem>
                                <MenuItem value="N">USN보안과</MenuItem>
                                <MenuItem value="H">해킹보안과</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="classNumLabel">반 선택</InputLabel>
                            <Select
                                labelId="classNum"
                                id="classNum"
                            >
                                <MenuItem value="1">1반</MenuItem>
                                <MenuItem value="2">2반</MenuItem>
                                <MenuItem value="3">3반</MenuItem>
                                <MenuItem value="4">4반</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel id="studentNumLabel">번호 선택</InputLabel>
                            <Select
                                labelId="studentNum"
                                id="studentNum"
                            >
                                <MenuItem value="1">1번</MenuItem>
                                <MenuItem value="2">2번</MenuItem>
                                <MenuItem value="3">3번</MenuItem>
                                <MenuItem value="4">4번</MenuItem>
                                <MenuItem value="5">5번</MenuItem>
                                <MenuItem value="6">6번</MenuItem>
                                <MenuItem value="7">7번</MenuItem>
                                <MenuItem value="8">8번</MenuItem>
                                <MenuItem value="9">9번</MenuItem>
                                <MenuItem value="10">10번</MenuItem>
                                <MenuItem value="11">11번</MenuItem>
                                <MenuItem value="12">12번</MenuItem>
                                <MenuItem value="13">13번</MenuItem>
                                <MenuItem value="14">14번</MenuItem>
                                <MenuItem value="15">15번</MenuItem>
                                <MenuItem value="16">16번</MenuItem>
                                <MenuItem value="17">17번</MenuItem>
                                <MenuItem value="18">18번</MenuItem>
                                <MenuItem value="19">19번</MenuItem>
                                <MenuItem value="20">20번</MenuItem>
                                <MenuItem value="21">21번</MenuItem>
                                <MenuItem value="22">22번</MenuItem>
                                <MenuItem value="23">23번</MenuItem>
                                <MenuItem value="24">24번</MenuItem>
                                <MenuItem value="25">25번</MenuItem>
                                <MenuItem value="26">26번</MenuItem>
                            </Select>
                        </FormControl>

                            <TextField 
                                id="nameInput" 
                                fullWidth
                                type="name"
                                margin="normal" 
                                label="이름"
                            />
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
                            <TextField
                                id="contentInput" 
                                fullWidth 
                                type="text" 
                                margin="normal"
                                multiline
                                rows="3"
                                rowsMax="20"
                                label="자기소개"
                                placeholder="자기소개는 자유양식 입니다."
                            />
                            <span id="countNumber">0/500</span>
                        </div>
                    </CardContent>
                        
                    <CardActions>
                        <Button 
                            variant="contained"
                            className={classes.subButton} 
                            type="submit" 
                            fullWidth
                            size="large"
                            >
                            지원하기
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </React.Fragment>
    );
}