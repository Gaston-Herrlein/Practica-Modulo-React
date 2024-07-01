// import { CardBody, CardImg, CardImgOverlay, CardTitle, CardFooter } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const AdCard = ({imgSRC, title, description, price, sale}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSRC} />
      <Card.ImgOverlay>
        <div className="d-flex justify-content-end">
          <span className='bg-secondary text-white px-1 rounded'>{sale ? "Compra": "Venta"}</span>
        </div>
      </Card.ImgOverlay>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>{description}</Card.Text> */}
        <Button variant="primary">+Info</Button>
      </Card.Body>
      <Card.Footer className='text-end'>
        <small className="text-muted">{price}</small>
      </Card.Footer>
    </Card>
  );
}