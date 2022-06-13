import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    Select,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ModalImage from "react-modal-image";
import useGetPhotos from "../hooks/useGetPhotos";
import UpdatePhotoComment from "../components/UpdatePhotoComment";
import DeletePhoto from "../components/DeletePhoto";

const Photos = ({ admin }) => {
    const city = "All";

    //used to get React to rerender
    const [updateCounter, setUpdateCounter] = useState(1);

    const [lastVisible, setLastVisible] = useState(false);

    // const [photoComment, setPhotoComment] = useState("");
    let [photos, snap] = useGetPhotos(city, lastVisible, updateCounter);

    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "7vw" }}>
            <Typography
                variant="h2"
                sx={{
                    margin: "1em 0 .75em 0",
                }}
            >
                Photos
            </Typography>
            <Grid item xs={12} md={10}>
                <div className="gallery">
                    {photos &&
                        photos.map((photo, index) => {
                            return (
                                <div
                                    key={index}
                                    className="modal-image-container"
                                >
                                    <ModalImage
                                        className="gallery-photo"
                                        small={photo.data().URL}
                                        medium={photo.data().URL}
                                        alt={photo.data().comment}
                                    />

                                    <Typography
                                        // variant="p"
                                        sx={{
                                            color: "var(--fc-light)",
                                            fontSize: ".9em",
                                            lineHeight: "1.2em",
                                            padding: "0 .5em",
                                            fontstyle: "italic",
                                        }}
                                    >
                                        {photo.data().comment}
                                    </Typography>

                                    {admin && (
                                        <UpdatePhotoComment
                                            photo={photo}
                                            updateCounter={updateCounter}
                                            setUpdateCounter={setUpdateCounter}
                                        />
                                    )}
                                    {admin && (
                                        <DeletePhoto
                                            updateCounter={updateCounter}
                                            setUpdateCounter={setUpdateCounter}
                                            photo={photo}
                                        />
                                    )}
                                </div>
                            );
                        })}
                </div>
            </Grid>
        </Container>
    );
};

export default Photos;
