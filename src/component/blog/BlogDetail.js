import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { stateToHTML } from 'draft-js-export-html';
import { ContentState, EditorState, convertFromRaw } from "draft-js";
import placeholderImg from '../../images/news.jpg';
import styles from './blog.module.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.admin.blogs.find((blog) => blog._id === id)
  );

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 20 }}>
      <Card sx={{ maxWidth: 800, boxShadow: 'none' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {stateToHTML(convertFromRaw({ ...blog.content, entityMap: blog.content.entityMap || {} })) }
          </Typography>
         
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogDetail;
