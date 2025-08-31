import Card from 'react-bootstrap/Card';
import profile from '../assets/annitmated/img/profile-pic.jpg'
function Cards() {
  return (
    <Card className='shadow' style={{ width: '20rem',height: '590px' }}>
      <Card.Img variant="top" src={profile} />
      <Card.Body>
        <Card.Text>
          <ul  className='list-unstyled table  '>
            <li className='fw-bolder p-1'>Name: Waqar Ahmed</li><hr />
            <li className='fw-bolder p-1'>Age: 30</li><hr />
            <li className='fw-bolder p-1'>Phone: 03162709897</li><hr />
            <li className='fw-bolder p-1'>Nationlity: Pakistan</li><hr />
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;