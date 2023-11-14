// BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { convertFromRaw, stateToHTML } from 'draft-js-export-html';
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

  const renderContent = (contentState) => {
    if (!contentState || !contentState.blocks) {
      return null;
    }

    const entityMap = contentState.entityMap || {};

    const textBlocks = [];
    let imageBlock = null;

    contentState.blocks.forEach((block, index) => {
      switch (block.type) {
        case 'unstyled':
          textBlocks.push(<div key={index} dangerouslySetInnerHTML={{ __html: block.text }} />);
          break;
        case 'atomic':
          if (block.entityRanges.length > 0) {
            const entityKey = block.entityRanges[0].key;
            const entity = entityMap[entityKey];
            if (entity.type === 'IMAGE') {
              imageBlock = <img key={index} src={entity.data.url} alt={block.text} />;
            }
          }
          break;
        default:
          break;
      }
    });

    return { textBlocks, imageBlock };
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 20 }}>
      <Card sx={{ maxWidth: 800, boxShadow: 'none' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.content ? renderContent(blog.content).textBlocks : 'No content available'}
          </Typography>
          {renderContent(blog.content).imageBlock}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogDetail;
