import { useState } from "react";
import { Modal, TextField, Button } from "@mui/material";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title: postTitle, content: postContent });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <TextField
          label="Content"
          multiline
          rows={4}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Modal>
  );
}
