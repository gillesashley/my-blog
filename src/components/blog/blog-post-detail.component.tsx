import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";
import { fetchBlogPostById } from "../../utils/api.utils";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Check if postId is a valid number
      const numericPostId = Number(id);
      if (isNaN(numericPostId)) {
        console.error("Invalid postId:", id);
        return;
      }

      try {
        const data = await fetchBlogPostById(numericPostId);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post", error);
      }
    };

    fetchData();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>; // You can add a loading indicator
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body1">{post.body}</Typography>
      </CardContent>
    </Card>
  );
}
