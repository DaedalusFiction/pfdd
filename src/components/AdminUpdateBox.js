import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteUpdate from "../components/DeleteUpdate";
import UpdateUpdate from "../components/UpdateUpdate";

const AdminUpdateBox = ({ update, updates, setUpdates, index }) => {
    const [content, setContent] = useState("");
    const handleChange = (e) => {
        setContent(e.target.value);
    };
    return (
        <div className="news-item" key={update.id}>
            <Typography
                sx={{
                    fontSize: ".85em",
                    fontWeight: "bold",
                }}
            >
                {update.data().date}
            </Typography>
            <TextField
                id={update.id}
                index={index}
                multiline
                minRows={4}
                defaultValue={update.data().content}
                onChange={handleChange}
                sx={{
                    minWidth: "55ch",
                    margin: "1em 0 2em 0",
                }}
            />
            <Box sx={{ display: "flex", gap: "1em" }}>
                <UpdateUpdate
                    updateId={update.id}
                    update={update}
                    updates={updates}
                    setUpdates={setUpdates}
                    content={content}
                    // content={newContent}
                />
                <DeleteUpdate
                    updateId={update.id}
                    updates={updates}
                    setUpdates={setUpdates}
                />
            </Box>
        </div>
    );
};

export default AdminUpdateBox;
