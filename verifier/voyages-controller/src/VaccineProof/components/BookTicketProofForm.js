import   React, { useState }  from 'react';
import { Button, Col, Container, FormGroup, Input, Label, Row }         
                              from 'reactstrap';
import   Success              from '../../assets/images/success.png'; 
import { useTranslation }     from 'react-i18next'; 
import { returnIssuer }       from '../../helpers/NavigationHelpers';

function BookTicketProofForm(props) {

  const [vaccine_dateOfVaccination, setvaccine_dateOfVaccination] = useState(props.data.vaccine.vaccine_dateOfVaccination);   
  const [recipient_fullName, setrecipient_fullName]               = useState(props.data.vaccine.recipient_fullName); 
  const [recipient_birthDate, setrecipient_birthDate]             = useState(props.data.vaccine.recipient_birthDate);

  const { t } = useTranslation(['translation','vaccine']); 
    
  return (
    <Container className="my-5">
      <Row form>
        <Col lg={7}>
          
          <h3>{t('vaccine:lblVaccineProof')}</h3>
          <hr />

          <FormGroup row>
            <Label for="recipient_fullName" sm={6}>
            {t('vaccine:recipient_fullName')}
            </Label>
            <Col sm={10}>
              <Input type="text" name="recipient_fullName" id="recipient_fullName" value={recipient_fullName} disabled />
            </Col>
          </FormGroup>
          
          <FormGroup row>
            <Label for="recipient_birthDate" sm={6}>
            {t('vaccine:recipient_birthDate')}
            </Label>
            <Col sm={10}>
              <Input type="text" name="recipient_birthDate" id="recipient_birthDate" value={recipient_birthDate} disabled />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="vaccine_dateOfVaccination" sm={6}>
            {t('vaccine:vaccine_dateOfVaccination')}
            </Label>
            <Col sm={10}>
              <Input type="text" name="vaccine_dateOfVaccination" id="vaccine_dateOfVaccination" value={vaccine_dateOfVaccination} disabled />
            </Col>
          </FormGroup>
          <br />
          <hr /> 
        </Col>
        
        <Col lg={5} className="text-center proof-left-col">
          <img className="text-center w-25" src={Success} alt="proof-banner" />

          <h4 className="ml-md-5 pb-4 mt-4">
            {t('vaccine:vaccine_verified')}
          </h4>

          <p className="ml-md-5 pb-4 mt-2" style={{textAlign: 'justify'}}>
          {t('vaccine:proofMessage')}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BookTicketProofForm;