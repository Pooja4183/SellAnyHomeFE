
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsById } from '../../store/productAction';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items = [
  { id: 1, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3' },
];


const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);
  return (
    product && (
    <Box sx={{ flexGrow: 1,marginTop:15, border:0.5}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:5}}>
    <Grid item xs={2} sm={4} md={12}>
    <Carousel>
      {product.images.map(item => (
        <>
        <div key={item.id}>
          <h3>{product.description}</h3>
          <p>{product.address}</p>
          <p><b>{product.bed}</b>Bed | <b>{product.bath}</b> Bath | <b>{product.sqFt}</b> Sq. Ft</p>
          <p> <b>AED {product.price}</b></p>
          <img src={item} width="100%" height="500px"/>
         
        </div>
        </>
      ))}
    </Carousel>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={12}>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={6}>
          <Item>xs=2</Item>
        </Grid>
        <Grid item xs={2} sm={4} md={12}>
          <Item>xs=2</Item>
        </Grid>

     
    </Grid>
  </Box>
    )

  );
};

export default ProductDetail;





// product && (
//   <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
//     <CardGroup>
//       <Card>
//         <Card.Img height='400px' variant='top' src={product.image} />
//       </Card>
//       <Card>
//         <Card.Header>
//           <small className='text-muted'>
//             {' '}
//             Category: {product.category}{' '}
//           </small>
//         </Card.Header>
//         <Card.Body>
//           <Card.Title>{product.title}</Card.Title>
//           <Card.Text>{product.description}</Card.Text>
//           <AddToCart data={product} />
//         </Card.Body>
//         <Card.Footer>
//           <small className='text-muted'>
//             <span className='proText'>INR {product.price}</span>
//             <span className='pro'>
//               {product.rating !== undefined ? product.rating.rate : '0'}
//               <i
//                 className='fa fa-star'
//                 aria-hidden='true'
//                 style={{ color: 'Tomato' }}
//               ></i>
//               &nbsp;| Rating (
//               {product.rating !== undefined ? product.rating.count : '0'})
//             </span>
//           </small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Body>
//           <Card.Title>{product.title}</Card.Title>
//           <Card.Text></Card.Text>
//         </Card.Body>
//       </Card>
//     </CardGroup>
//   </Container>
// )
