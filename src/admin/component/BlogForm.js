import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import { Approval, Delete, PersonAddAlt, Save } from '@mui/icons-material';
import AlertMessage from '../../component/custom/AlertMessage';
import { createBlog, createOrUpdateBlog, deleteBlog } from '../../store/adminAction';
import { EditorState, ContentState, convertFromHTML, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { blue } from '@mui/material/colors';

const BlogForm = ({ selectedItem, editable, handleClose }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);


  const [eventStatus, setEventStatus] = useState({
    isSuccess: false,
    msg: '',
    error: null,
  });

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    content: EditorState.createEmpty(),
    state: ''
  });

  let isMounted = true;
  useEffect(() => {
    

    if (selectedItem) {
      if (selectedItem.content) {
        try {
          console.log("Selected Item Content", selectedItem.content);
          const contentState = convertFromRaw({
            ...selectedItem.content,
            entityMap: selectedItem.content.entityMap || {},
          });
  
          const newEditorState = contentState
            ? EditorState.createWithContent(contentState)
            : EditorState.createEmpty();
  
          setFormData((prevFormData) => ({
            ...prevFormData,
            ...selectedItem,
            content: newEditorState,
          }));
        } catch (error) {
          console.error('Error converting raw content:', error);
          // Handle the error, maybe set content to empty or show a fallback
        }
      } else {
        console.log("Here1")
        setFormData((prevFormData) => ({
          ...prevFormData,
          //title: selectedItem.title,
          //id: selectedItem.id,
          content: EditorState.createEmpty(),
        }));
      }
    } else {
      console.log("Her21")
      setFormData((prevFormData) => ({
        ...prevFormData,
        content: EditorState.createEmpty(),
      }));
    }
    return () => {
      isMounted = false;
    };
  }, [selectedItem]);
  

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditorStateChange = (editorState) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: editorState,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let msg = '';
    try {
      const currentContent = convertToRaw(formData.content.getCurrentContent());
      console.log("Raw Content", currentContent);
      const clickedButton = event.nativeEvent.submitter;
      console.log("Before Conversion FormData to Raw::", formData);

      console.log("Converted FormData to Raw::", formData);

      if (clickedButton.id === "approveBtn") {
        console.log("Submit button 1 clicked");
        // Access the updated formData value by using the callback function in setFormData
        if (editable) {
          await dispatch(createOrUpdateBlog(formData, currentContent,"APPROVED"));
        } else {
          await dispatch(createBlog(formData, currentContent, "APPROVED"));
        }

        msg = "Blog Data Saved And Approved Successfully!";
      } else {
        if (editable) {
          await dispatch(createOrUpdateBlog(formData, currentContent, "DRAFT"));
        } else {
          await dispatch(createBlog(formData, currentContent, "DRAFT"));
        }
        msg = "Blog Data Saved Successfully!";
      }


      console.log("Hello", msg);
      if(isMounted) {
        console.log("Event Status 1::", eventStatus);
        eventStatus.msg = msg;
        console.log("Event Status 2::", eventStatus);
        eventStatus.isSuccess = true;
        console.log("Event Status 3::", eventStatus);

      // setEventStatus((prevEventStatus) => ({
      //   ...prevEventStatus,
      //   isSuccess: true,
      //   msg: msg,
      //   error: null,
      // }));
    }
 
      console.log("Hello12", eventStatus);
    } catch (error) {
      console.log("Error::", error);
      if(isMounted) {
      setEventStatus((prevEventStatus) => ({
        ...prevEventStatus,
        isSuccess: false,
        msg: null,
        error: 'An Error Occurred: ' + error.message,
      }));
    }
    }
    if(isMounted) {
      setShowAlert(true);
    }
   
  };

  const handleDelete = async () => {
    let msg = '';
    try {
      console.debug('Clicked Delete button');
      await dispatch(deleteBlog(formData.id));
      msg = `Blog ${formData.id} is Deleted Successfully!`;
      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        handleClose();
      }, 3000);
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: 'An Error Occurred: ' + error.message,
      });
    }
  };



  return (
    <Paper elevation={24} sx={{ padding: 1, mb: 5 }}>
      <Grid
        container
        sx={{ paddingTop: 1, mb: 1, background: blue[200] }}
        justifyContent={'space-between'}
      >
        <Grid item xs={6} sm={6} lg={6}>
          <IconButton>
            <PersonAddAlt />
            <Typography variant="body1" sx={{ paddingLeft: 2, color: 'grey[900]' }}>
              Blog : {formData.id}
            </Typography>
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={2} component={'form'} onSubmit={handleSubmit}>
        <Grid item xs={6}>
          <TextField
            label="Title"
            name="title"
            fullWidth
            value={formData.title}
            required
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} pl={1}>
          <Button type="submit" variant="contained" color="primary" id="saveBtn">
            Save
            <Save sx={{ marginLeft: 1 }} />
          </Button>
          <Button type="submit" variant="contained" color="secondary" sx={{ marginLeft: 1 }} id="approveBtn">
            Save & Approve
            <Approval sx={{ marginLeft: 1 }} />
          </Button>
          {formData.id && (
            <Button
              type="button"
              variant="contained"
              color="error"
              sx={{ marginLeft: 0.5, mr: 0.5 }}
              id="deleteBtn"
              size="small"
              onClick={handleDelete}
            >
              DELETE
              <Delete />
            </Button>
          )}
        </Grid>
        <Grid item xs={12}> 
        {eventStatus.isSuccess && (
        <AlertMessage
          type="success"
          message={eventStatus.msg}
          open={showAlert}
          onClose={handleCloseAlert}
        />
      )}
      {eventStatus.error && (
        <AlertMessage
          type="error"
          message={eventStatus.error}
          open={showAlert}
          onClose={handleCloseAlert}
        />
      )}

        </Grid>
        <Grid item>
          <Editor
            editorState={formData.content}
            onEditorStateChange={handleEditorStateChange}
            toolbar={{
              options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image', 'remove'],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
            customBlockRenderFunc={(contentBlock) => {
              const type = contentBlock.getType();
              if (type === 'atomic') {
                return {
                  component: ImageBlock,
                  editable: false,
                  props: {},
                };
              }
              return null;
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} pt={5}>
        <Button type="submit" variant="contained" color="primary" id="saveBtn">
          Save
          <Save sx={{ marginLeft: 1 }} />
        </Button>
        <Button type="submit" variant="contained" color="secondary" sx={{ marginLeft: 1 }} id="approveBtn">
          Save And Approve
          <Approval sx={{ marginLeft: 1 }} />
        </Button>
        {formData.id && (
          <Button
            type="button"
            variant="contained"
            color="error"
            sx={{ marginLeft: 0.5, mr: 0.5 }}
            id="deleteBtn"
            size="small"
            onClick={handleDelete}
          >
            DELETE
            <Delete />
          </Button>
        )}
      </Grid>
    </Paper>
  );
};

// Custom component for rendering atomic block of type IMAGE
const ImageBlock = ({ block, contentState }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { url,src } = entity.getData();
  return <img src={url?url: src} alt="blog-img" style={{ width: '100%' }} />;
};

export default BlogForm;
