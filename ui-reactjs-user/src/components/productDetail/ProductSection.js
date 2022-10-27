import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Records from '../../server.json';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

export default function ProductSection() {
    const { id, itemID } = useParams();
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });
    if (itemID) {
        Records.find((item) => item.id === itemID);
    }
    // console.log(Records)
    // console.log(typeof itemID);
    const theme = {
        spacing: {
            marginTop: '20px',
        },
        tr: {
            background: '#2196f3',
            color: '#fff',
            '&:hover': {
                background: '#4dabf5',
            },
        },
    };

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Home
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/:id">
            {id}
        </Link>,
        <Link key="3" href="/:id" color="text.primary">
            {itemID}
        </Link>,
    ];

    const [open, setOpen] = React.useState(false);
    const alertClick = () => {
        setOpen(true);
    };
    const alertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Container>
                <Stack spacing={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
                <Grid container border={1} spacing={2}>
                    {Records.filter((item) => item.id == itemID).map((item) => (
                        <>
                            <Grid item xs={6}>
                                <Box component="img" sx={{ height: 480, width: 480 }} src={item.images} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography id="modal-modal-title" variant="h4" component="h6">
                                    {item.title}
                                </Typography>
                                <Typography id="modal-modal-title" variant="h4" component="h6">
                                    {item.price}
                                </Typography>
                                <div>{item.service && item.service.map((records) => <p>{records}</p>)}</div>
                                <div style={{ display: 'flex' }}>
                                    {item.size &&
                                        item.size.map((record) => (
                                            <p style={{ border: '1px solid black' }}>{record}</p>
                                        ))}
                                </div>

                                <Typography id="modal-modal-title" variant="h4" component="h6">
                                    {item.description}
                                </Typography>
                                <button onClick={() => setState({ isPaneOpen: true })}>
                                    Click me to open right pane!
                                </button>
                                <SlidingPane
                                    className="some-custom-class"
                                    overlayClassName="some-custom-overlay-class"
                                    isOpen={state.isPaneOpen}
                                    title="Giỏ hàng của tôi"
                                    subtitle="Optional subtitle."
                                    width=""
                                    onRequestClose={() => {
                                        // triggered on "<" on left top click or on outside click
                                        setState({ isPaneOpen: false });
                                    }}
                                >
                                    <div>And I am pane content. BTW, what rocks?</div>
                                    <br />
                                    <img src="img.png" />
                                </SlidingPane>
                                <Stack direction="row" spacing={2}>
                                    <Button sx={theme.tr} onClick={()=>{alertClick();}}>
                                        <IconButton>
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                        Thêm vào giỏ hàng
                                    </Button>
                                    <Snackbar open={open} autoHideDuration={2000} onClose={alertClose}>
                                        <Alert onClose={alertClose} severity="success" sx={{ width: '100%' }}>
                                            Thêm vào giỏ hàng thành công
                                        </Alert>
                                    </Snackbar>
                                    <Button variant="contained">Mua ngay</Button>
                                </Stack>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
