import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import {
  Editor,
  EditorState,
  convertFromRaw,
  AtomicBlockUtils,
} from "draft-js";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.admin.blogs.find((blog) => blog._id === id)
  );

  if (!blog) {
    return <div>Loading...</div>;
  }

  const contentState = convertFromRaw({
    ...blog.content,
    entityMap: blog.content.entityMap || {},
  });

  // Function to handle image block rendering
  const blockRenderer = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === "atomic") {
      const entity = contentBlock.getEntityAt(0);
      if (entity) {
        const entityType = contentState.getEntity(entity).getType();
        if (entityType === "IMAGE") {
          const data = contentState.getEntity(entity).getData();
          return {
            component: ImageBlock,
            editable: false,
            props: {
              src: data.url,
            },
          };
        }
      }
    }
  };

  const editorState = EditorState.createWithContent(
    contentState,
    null,
    null,
    null,
    blockRenderer
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: "10%",
        pl: "10%",
        pr: "10%",
        pb: "2%",
      }}
    >
      <Card sx={{ wordSpacing: 2, borderBottom:1, boxShadow: "none", borderColor: "lightgray" }}>
        <CardActionArea>
          <Typography variant="h1" gutterBottom align={"center"}>
            {blog.title}
          </Typography>
        </CardActionArea>
        <CardContent>
          <Typography variant="caption">
            Published on {blog.updatedAt}
          </Typography>
        </CardContent>
        <CardContent>
          <Editor editorState={editorState} readOnly={true} />
        </CardContent>
      </Card>
    </Box>
  );
};

// Custom component for rendering atomic block of type IMAGE
const ImageBlock = ({ src }) => {
  
  return <img src={src} alt="blog-img" style={{ width: "100%" }} />;
};

export default BlogDetail;
