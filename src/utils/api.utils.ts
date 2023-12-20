const apiUrl = "https://jsonplaceholder.typicode.com/posts";

interface Post {
    id: number;
    title: string;
    body: string;
}

export const fetchBlogPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to handle it in the component if needed
    }
};

export async function fetchBlogPostById(postId: number) {

    try {
        const response = await fetch(`${apiUrl}/${postId}/`);
        if (!response.ok) {
            throw new Error("Failed to fetch blog post");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching blog post:", error);
        throw error;
    }
}
