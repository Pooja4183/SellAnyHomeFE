import { Approval, Delete, FormatBold, FormatItalic, FormatListBulleted, FormatListNumbered, FormatUnderlined, Save } from "@mui/icons-material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import AlertMessage from "../../component/custom/AlertMessage";
import { createBlog, createOrUpdateBlog, deleteBlog } from "../../store/adminAction";
import { CompositeDecorator, Editor, EditorState, Modifier, RichUtils, convertFromRaw, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const BlogForm = ({ selectedItem, editable, handleClose }) => {
  const dispatch = useDispatch();
  const [eventStatus, setEventStatus] = useState({
    isSuccess: false,
    msg: "",
    error: null,
  });

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: EditorState.createEmpty()
  });

  let editorState = EditorState.createEmpty();
  useEffect(() => {
    let isMounted = true;

    const initializeEditor = (selectedItem) => {
      if (selectedItem) {
        const contentState = convertFromRaw({
          ...selectedItem.content,
          entityMap: selectedItem.content.entityMap || {},
        });

        // Create a decorator to handle atomic blocks
        const decorator = new CompositeDecorator([
          {
            strategy: findImageEntities,
            component: ImageBlock,
          },
        ]);

        const newEditorState = contentState
          ? EditorState.createWithContent(contentState, decorator)
          : EditorState.createEmpty();

        setFormData((prevFormData) => ({
          ...prevFormData,
          ...selectedItem,
          content: newEditorState,
        }));
      } else {
        // Set initial editor state when there's no selectedItem
        const emptyEditorState = EditorState.createEmpty();
        setFormData((prevFormData) => ({
          ...prevFormData,
          content: emptyEditorState,
        }));
      }
    };

    initializeEditor(selectedItem);

    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
      isMounted = false;
    };
  }, [selectedItem]);

  const handleChange = (event) => {
    //const {  value, type, checked } = event.target;
    console.log("Name", event.target.name, event.target.value);
    const name =  event.target.name;
    const newValue =  event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleEditorChange = (newEditorState) => {
    console.log("Content::", newEditorState.getCurrentContent());
   
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: newEditorState,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form logic here
    let msg = "";
    console.log("Submitted", formData);
    try {
      const clickedButton = event.nativeEvent.submitter;
      console.log(
        "Clicked::",
        clickedButton.id,
        " Evaluate ",
        clickedButton.id === "approveBtn"
      );
      if (clickedButton.id === "approveBtn") {
        console.log("Submit button 1 clicked");
        // Access the updated formData value by using the callback function in setFormData
        if (editable) {
          await dispatch(createOrUpdateBlog(formData, "APPROVED"));
        } else {
          await dispatch(createBlog(formData, "APPROVED"));
        }

        msg = "Blog Data Saved And Approved Successfully!";
      } else {
        if (editable) {
          await dispatch(createOrUpdateBlog(formData, "DRAFT"));
        } else {
          await dispatch(createBlog(formData, "DRAFT"));
        }
        msg = "Blog Data Saved Successfully!";
      }

      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: "An Error Occured: " + error.message,
      });
    }
    setShowAlert(true);
  };

  const handleDelete = async (event) => {
    let msg = '';
    try {
      console.debug("Clicked Delete button");
      await dispatch(deleteBlog(formData));
      msg = `Blog ${formData.id} is Deleted Successfully!`;
      setEventStatus({
        isSuccess: true,
        msg: msg,
        error: null,
      });
      setShowAlert(true);
      // Hide the message and close the form after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
        handleClose();
      }, 3000);
    } catch (error) {
      setEventStatus({
        isSuccess: false,
        msg: null,
        error: "An Error Occured: " + error.message,
      });
    }
  }

  const [showAlert, setShowAlert] = useState(false);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const toggleInlineStyle = (style) => {
    handleEditorChange(RichUtils.toggleInlineStyle(formData.content, style));
  };

  const toggleBlockType = (blockType) => {
    handleEditorChange(RichUtils.toggleBlockType(formData.content, blockType));
  };
  
  

  return (
    <Paper elevation={24} sx={{ padding: 1, mb: 5 }}>
      <Grid
        container
        sx={{ paddingTop: 1, mb: 1, background: blue[200] }}
        justifyContent={"space-between"}
      >
        <Grid item xs={6} sm={6} lg={6}>
          <IconButton>
            <PersonAddAltIcon />
            <Typography
              variant="body1"
              sx={{ paddingLeft: 2, color: grey[900] }}
            >
              Blog : {formData.id}
            </Typography>
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={2} component={"form"} onSubmit={handleSubmit}>
        <Grid item xs={6}>
          <TextField
            label="Title"
            name="title"
            fullWidth
            value={formData.title}
            required
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item xs={6} pl={1}>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            id="saveBtn"
          >
            Save
            <Save sx={{ marginLeft: 1 }} />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ marginLeft: 1 }}
            id="approveBtn"
          >
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
        <Grid item>
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
      <Grid sx={{minHeight: "370px", width: '100%', pl: 4}}>
      <ToggleButtonGroup>
        <ToggleButton value="bold" onClick={() => toggleInlineStyle('BOLD')}>
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" onClick={() => toggleInlineStyle('ITALIC')}>
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underline" onClick={() => toggleInlineStyle('UNDERLINE')}>
          <FormatUnderlined />
        </ToggleButton>
        <ToggleButton value="bulleted" onClick={() => toggleBlockType('unordered-list-item')}>
          <FormatListBulleted />
        </ToggleButton>
        <ToggleButton value="numbered" onClick={() => toggleBlockType('ordered-list-item')}>
          <FormatListNumbered />
        </ToggleButton>
      </ToggleButtonGroup>
      <Button
        onClick={() => {
          const contentState = Modifier.insertText(
            formData.content.getCurrentContent(),
            formData.content.getSelection(),
            ' ',
            null,
          );

          const newEditorState = EditorState.push(formData.content, contentState, 'insert-characters');
          handleEditorChange(newEditorState);
        }}
      >
        Insert Image
      </Button>
      <Editor editorState={formData.content} onChange={handleEditorChange} readOnly={false}/>
        </Grid>
      </Grid>
        <Grid item xs={12} pt={5}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="saveBtn"
          >
            Save
            <Save sx={{ marginLeft: 1 }} />
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ marginLeft: 1 }}
            id="approveBtn"
          >
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

export default BlogForm;
