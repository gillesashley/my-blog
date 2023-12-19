import { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// An interface for the props of the CreatePostModal component.
interface CreatePostProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (postData: { title: string; content: string }) => void;
}

export default function CreatePostModal({
  open,
  onClose,
  onSubmit,
}: CreatePostProps) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  // Handle form submission.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title: postTitle, content: postContent });
  };

  return (
    // A modal to create a new post.
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="title">Title</InputLabel>
            <TextField
              id="title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="content">Content</InputLabel>
            <TextField
              id="content"
              multiline
              rows={4}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <FormHelperText>Enter your post content here.</FormHelperText>
          </FormControl>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
