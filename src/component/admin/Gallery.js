import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { useEffect } from 'react';

const Gallery=(itemss)=> {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        setItems(itemss.list);
    },[itemss, items]);
    
  return (
    <ImageList cols={3} rowHeight={164}>
      {items && items.map((item) => (
        <ImageListItem key={item} >
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default Gallery;
