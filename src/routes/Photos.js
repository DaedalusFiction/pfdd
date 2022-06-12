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
import React from "react";

const Photos = () => {
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
            <Typography>No photos yet. Check back soon!</Typography>
            {/* <div className="photos">
                <Typography variant="h2" sx={{ margin: "2rem" }}>
                    Latest Photos
                </Typography>
                <Box
                    sx={{ minWidth: 120, display: { xs: "flex", md: "none" } }}
                >
                    <FormControl fullWidth>
                        <InputLabel id="city-label">City</InputLabel>
                        <Select
                            labelId="city-label"
                            id="city-dropdown"
                            value={city}
                            label="City"
                            onChange={handleCityChange}
                        >
                            {cities.map((city) => {
                                return (
                                    <MenuItem key={city} value={city}>
                                        {city}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={2}>
                        <FormControl
                            sx={{
                                margin: "0 3rem",
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            <FormLabel
                                sx={{ fontSize: "2rem" }}
                                id="cities-label"
                            >
                                City
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="cities-label"
                                name="cities"
                                defaultValue="All"
                                onChange={handleCityChange}
                            >
                                {cities &&
                                    cities.map((city) => {
                                        return (
                                            <FormControlLabel
                                                key={city}
                                                value={city}
                                                control={<Radio />}
                                                label={city}
                                            />
                                        );
                                    })}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
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
                                                    updateCounter={
                                                        updateCounter
                                                    }
                                                    setUpdateCounter={
                                                        setUpdateCounter
                                                    }
                                                />
                                            )}
                                            {admin && (
                                                <DeletePhoto
                                                    updateCounter={
                                                        updateCounter
                                                    }
                                                    setUpdateCounter={
                                                        setUpdateCounter
                                                    }
                                                    photo={photo}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        onClick={loadMorePhotos}
                        sx={{ margin: "2rem" }}
                    >
                        Next Page
                    </Button>
                </Box>
            </div> */}
        </Container>
    );
};

export default Photos;
