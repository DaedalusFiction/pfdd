import {
    Box,
    Button,
    Container,
    Divider,
    Input,
    TextField,
    Typography,
} from "@mui/material";
import {
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc,
    query,
    orderBy,
    limit,
    getDocs,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db, auth, provider, storage } from "../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import AdminUploadPhoto from "../components/AdminUploadPhoto";
import Photos from "./Photos";

const Admin01 = () => {
    const [updateText, setUpdateText] = useState("");
    const [isUpdateSubmitted, setIsUpdateSubmitted] = useState(false);
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [updates, setUpdates] = useState(null);
    const [photos, setPhotos] = useState(null);

    const login = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setCurrentUser(user);
                const userRef = doc(db, "users", result.user.uid);
                const userRefSnap = await getDoc(userRef);
                if (!userRefSnap.exists()) {
                    //creates new user info in firestore database
                    //admin must be set to true in database to allow uploading of recipes and photos
                    setIsAdmin(false);
                    setDoc(doc(db, "users", result.user.uid), {
                        UID: result.user.uid,
                        name: user.displayName,
                        admin: false,
                    });
                } else {
                    const userRef = doc(db, "users", result.user.uid);
                    const getTask = await getDoc(userRef).then((data) => {
                        setIsAdmin(data.data().admin);
                    });
                }

                // ...
            })
            .catch((error) => {});
    };

    // const handleChange = (e) => {
    //     setUpdateText(e.target.value);
    // };

    // const submitUpdate = async (e) => {
    //     const info = {
    //         createdAt: Date.now(),
    //         date: moment().format("DD MMMM YYYY"),
    //         content: updateText,
    //     };
    //     await addDoc(collection(db, "updates"), info).then(() => {
    //         document.getElementById("updateText").value = "";
    //         setIsUpdateSubmitted(true);
    //     });
    //     setIsUpdateSubmitted(true);
    // };

    // const getUpdates = async () => {
    //     // const querySnapshot = await getDocs(collection(db, "updates"));
    //     const q = query(
    //         collection(db, "updates"),
    //         orderBy("createdAt", "desc"),
    //         limit(30)
    //     );
    //     const querySnapshot = await getDocs(q);
    //     let newUpdates = [];
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         newUpdates = [...newUpdates, doc];
    //         setUpdates(newUpdates);
    //     });
    // };

    const getPhotoGallery = () => {
        setPhotos(true);
    };

    return (
        <Container sx={{ padding: "8rem 2rem" }}>
            <Typography variant="h1" gutterBottom>
                Admin
            </Typography>
            <Button
                variant="contained"
                onClick={login}
                sx={{ margin: "1em 0" }}
            >
                Log In With Google
            </Button>
            {/* <Button variant="contained" onClick={test}>
                test
            </Button> */}
            {/* {isAdmin && !isUpdateSubmitted && (
                <>
                    <Typography variant="h4">Enter Update:</Typography>
                    <TextField
                        id="updateText"
                        multiline
                        minRows={4}
                        value={updateText}
                        onChange={handleChange}
                        sx={{ minWidth: "55ch", margin: "1em 0 2em 0" }}
                    />
                    <br />
                    <Button variant="contained" onClick={submitUpdate}>
                        Submit Update
                    </Button>
                </>
            )}
            {isUpdateSubmitted && (
                <Typography>
                    Update Submitted! Refresh page and log in again to submit
                    another
                </Typography>
            )} */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    margin: "3rem 0",
                }}
            >
                {isAdmin && currentUser && <AdminUploadPhoto />}

                {!isAdmin && currentUser && (
                    <Typography sx={{ maxWidth: "45ch" }}>
                        The credentials you have used to log in are not
                        authorized to upload updates or photos. Please try
                        another account. Contact David if you are having
                        trouble.
                    </Typography>
                )}
                {/* {isAdmin && currentUser && (
                    <>
                        {!updates && (
                            <Button
                                variant="contained"
                                onClick={getUpdates}
                                sx={{ width: "fit-content" }}
                            >
                                Show Previous Updates
                            </Button>
                        )}
                        {updates &&
                            updates.map((update, index) => {
                                return (
                                    <AdminUpdateBox
                                        key={update.id}
                                        index={index}
                                        update={update}
                                        updates={updates}
                                        setUpdates={setUpdates}
                                    />
                                );
                            })}
                    </>
                )} */}
                {isAdmin && currentUser && (
                    <>
                        {!photos && (
                            <Button
                                variant="contained"
                                onClick={getPhotoGallery}
                                sx={{ width: "fit-content" }}
                            >
                                Show Photo Gallery
                            </Button>
                        )}
                        {photos && <Photos admin="true" />}
                    </>
                )}
            </Box>
        </Container>
    );
};

export default Admin01;
