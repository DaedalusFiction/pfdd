import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import { addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "../firebase";

const AdminUploadPhoto = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [sizeError, setSizeError] = useState(null);

    const [comment, setComment] = useState("");
    const [city, setCity] = useState("All");
    const cities = ["All"];

    const handlePhotoChange = (e) => {
        var file = e.target.files[0];

        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size > 2097152) {
                setSelectedPhoto(null);
                setSizeError("File size is too big! Must be smaller than 2MB!");
            } else {
                setSizeError(null);
                setSelectedPhoto(file);
                var reader = new FileReader();
                reader.onload = (e) => {
                    document.getElementById("preview").src = e.target.result;
                };

                reader.readAsDataURL(e.target.files[0]);
            }
        }
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    // const uploadPhotox = () => {
    //     const storageRef = ref(storage, `photos/${selectedPhoto.name}`);

    //     uploadBytesResumable(storageRef, selectedPhoto).then((snapshot) => {
    //         setIsPhotoUploaded(true);
    //     });
    // };

    const uploadPhoto = async (e) => {
        //uploads photo to firebase storage and form data to firestore database
        e.preventDefault();
        const storageRef = ref(storage, selectedPhoto.name);
        const uploadTask = uploadBytesResumable(storageRef, selectedPhoto);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //to show upload progress as percentage
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setUploadProgress(progress);
            },
            (error) => {
                // setUploadError(true);
            },
            () => {
                // creates firestore database entry
                // setUploadProgress(0);
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setDoc(doc(db, "photos", selectedPhoto.name), {
                        URL: downloadURL,
                        uploaded: Timestamp.fromDate(new Date(Date.now())),
                        comment: comment,
                        city: city,
                        createdAt: Date.now(),
                    });
                });
                setSelectedPhoto(null);
                setComment("");
                setIsPhotoUploaded(true);
                document.getElementById("photoInput").value = null;
            }
        );
    };

    return (
        <>
            <Typography variant="h4">Upload Photo</Typography>
            <input
                type="file"
                id="photoInput"
                // value={selectedPhoto}
                onChange={handlePhotoChange}
                sx={{ width: "fit-content" }}
                accept="image/png, image/jpeg"
            />
            {sizeError && <Typography>{sizeError}</Typography>}
            {selectedPhoto && (
                <img
                    id="preview"
                    src={selectedPhoto}
                    alt="selected"
                    style={{ maxWidth: "15rem", height: "auto" }}
                />
            )}
            <Typography variant="h6">Enter Comment</Typography>
            <TextField
                id="updateText"
                multiline
                minRows={2}
                value={comment}
                onChange={handleCommentChange}
                sx={{
                    minWidth: "45ch",
                    maxWidth: "55ch",
                    // margin: "1em 0 2em 0",
                }}
            />
            <FormControl>
                <FormLabel id="cities-label">Category</FormLabel>
                <RadioGroup
                    aria-labelledby="cities-label"
                    defaultValue="All"
                    name="radio-buttons-group"
                    onChange={handleCityChange}
                    row
                >
                    {cities.map((city) => {
                        return (
                            <FormControlLabel
                                key={city}
                                value={city}
                                control={<Radio />}
                                label={city}
                            />
                        );
                    })}
                    {/* <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                    />
                    <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                    /> */}
                </RadioGroup>
            </FormControl>
            {selectedPhoto && (
                <Button
                    variant="contained"
                    onClick={uploadPhoto}
                    sx={{ width: "fit-content" }}
                >
                    Submit Photo
                </Button>
            )}
            {uploadProgress > 0 && (
                <Typography>{uploadProgress.toFixed(2)}%</Typography>
            )}
            {isPhotoUploaded && <Typography>Photo Uploaded!</Typography>}
        </>
    );
};

export default AdminUploadPhoto;
