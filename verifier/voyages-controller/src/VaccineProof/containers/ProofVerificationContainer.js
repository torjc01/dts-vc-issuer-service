import React, { useState, useEffect }  from 'react';
import { Container, Spinner }          from 'reactstrap'
import { useTranslation }              from 'react-i18next'
import { fetchWithTimeout }            from '../../helpers/fetchWithTimeout'
import                                      '../../assets/styles/Forms.css';

function ProofVerificationContainer(props) {

    let INTERVAL = 5000; 
    let TIMEOUT  = 3000; 

    const { t } = useTranslation(['identite', 'vaccine']);

    const [presentation_exchange_id, setPresentationExchangeId] = useState(props.location.state.presentation_exchange_id)

    useEffect(() => {
        setPresentationExchangeId(props.location.state.presentation_exchange_id)
        getConnectionInfo()
    }
    , []);

	function getConnectionInfo() {
		try {
			fetchWithTimeout(`/present-proof/records/${presentation_exchange_id}`,
				{
					method: 'GET',
					headers: {
                        'X-API-Key': 'cqen-api-test',
						'Content-Type': 'application/json; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
						'Access-Control-Allow-Headers': 'Content-Type',
						'Access-Control-Max-Age': '86400'
					}
				}, TIMEOUT).then((
					resp => {
						try {
							resp.json().then((data => {
								if (data.state) {
									let intervalFunction;
									data.state === "request_sent" ? intervalFunction = setTimeout(getConnectionInfo, INTERVAL) : VerifyPresentation(presentation_exchange_id);
								} else {
									setTimeout(getConnectionInfo, INTERVAL)
								}
							}))
						} catch (error) {
							setTimeout(getConnectionInfo, INTERVAL)
						}
					}
				))
		} catch (error) {
			console.log(error);
			setTimeout(getConnectionInfo, INTERVAL)
		}
	}

    const VerifyPresentation = (presentation_exchange_id) => {
        fetch('/present-proof/records/' + presentation_exchange_id + '/verify-presentation', 
			{
				method : 'POST', 
				headers: {
                    'X-API-Key': 'cqen-api-test',
					'Content-Type'                      : 'application/json; charset=utf-8',
					'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Max-Age': '86400'
				},
				body:{}
			}
		).then(response => response.json())
         .then(data => {

            props.history.push('/proofDisplay', {
                connection_id                               : props.location.state.connection_id,
                vaccine: {
                    recipient_fullName                      : data.presentation.requested_proof.revealed_attrs.recipient_fullName.raw,
                    recipient_birthDate                     : data.presentation.requested_proof.revealed_attrs.recipient_birthDate.raw,
                    vaccine_dateOfVaccination               : data.presentation.requested_proof.revealed_attrs.vaccine_dateOfVaccination.raw,
                }
            })
        });
    }
 
    return (
        <Container className="mt-5 pt-5">
            <br /><br /><br /><br />
            <div className="text-center FormBox mt-5 pt-5">
                <h3 className="mb-5 pb-4 mt-2 header"> {t('identite:lblVerification')} </h3>
                <br />
                <p>
                    <h4>{t('identite:msgVerification1')} </h4>
                        {t('identite:msgVerification2')}
                </p>
                <p>
                    {t('identite:msgWait')}
                </p>
                <Spinner /> 
            </div>
        </Container>
    );
}

export default ProofVerificationContainer;