import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../firebase";

export default function AlertDialog({
    photo,
    updateCounter,
    setUpdateCounter,
}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleNo = () => {
        setOpen(false);
    };

    const handleYes = async () => {
        const photoRef = ref(storage, photo.id);

        // Delete the file
        deleteObject(photoRef)
            .then(() => {
                // File deleted successfully
                // console.log("good job!");
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                // console.log("photo not deleted");
            });
        await deleteDoc(doc(db, "photos", photo.id));
        setOpen(false);
        setUpdateCounter(updateCounter + 1);
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
            >
                Delete Photo
            </Button>
            <Dialog
                open={open}
                onClose={handleNo}
                aria-labelledby="delete-photo"
                aria-describedby="delete-photo-description"
            >
                <DialogTitle id="delete-photo">
                    {"Delete this photo permanently?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="delete-photo-description">
                        This action cannot be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleNo}>No</Button>
                    <Button onClick={handleYes}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
