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
import { Editor, EditorState, convertFromRaw, CompositeDecorator } from "draft-js";

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

  // Create a decorator to handle atomic blocks
  const decorator = new CompositeDecorator([
    {
      strategy: findImageEntities,
      component: ImageBlock,
    },
  ]);

  const editorState = EditorState.createWithContent(contentState, decorator);

    // Format the date
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(blog.updatedAt));

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
      <Card sx={{ wordSpacing: 2 }}>
        <CardActionArea>
          <Typography variant="h1" gutterBottom align={"center"}>
            {blog.title}
          </Typography>
        </CardActionArea>
        <CardContent>
          <Typography variant="caption">
            Published on {formattedDate}
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
const ImageBlock = ({ contentState, entityKey, block }) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return <img src={url} alt="blog-img" style={{ width: "100%" }} />;
};

// Strategy to find entities of type 'IMAGE'
function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "IMAGE"
      );
    },
    callback
  );
}

export default BlogDetail;
