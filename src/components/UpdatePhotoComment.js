import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

export default function AlertDialog({
    photo,
    updateCounter,
    setUpdateCounter,
}) {
    const [open, setOpen] = useState(false);
    //chaning state to get rerender after changing comment or deleting photo
    const [photoComment, setPhotoComment] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleNo = () => {
        setOpen(false);
    };

    const handleYes = async () => {
        await updateDoc(doc(db, "photos", photo.id), {
            comment: photoComment,
        });
        setOpen(false);
        setUpdateCounter(updateCounter + 1);
    };

    const handlePhotoCommentChange = (e) => {
        setPhotoComment(e.target.value);
    };

    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{ marginBottom: ".5em" }}
            >
                Update Comment
            </Button>
            <Dialog
                open={open}
                onClose={handleNo}
                aria-labelledby="comment-update"
                aria-describedby="comment-update-description"
            >
                <DialogTitle id="comment-update">
                    {"Update this Comment?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-update-description">
                        Are you sure you want to update this item?
                    </DialogContentText>

                    <TextField
                        multiline
                        minRows={2}
                        defaultValue={photo.data().comment}
                        onChange={handlePhotoCommentChange}
                        sx={{
                            margin: ".5em 0",
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleNo}>No</Button>
                    <Button onClick={handleYes}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
