import React, { useState, useEffect }       from 'react'
import { Container, Button, Col, Spinner }  from 'reactstrap'
import { useTranslation } 					from 'react-i18next' 
import QRProofComponent                     from '../components/QRProofComponent'
import { GET_API_SECRET }                   from '../../config/constants'
import { fetchWithTimeout }                 from '../../helpers/fetchWithTimeout'
import { GET_SCHEMA_NAME }                  from '../../config/constants'
import { GET_SCHEMA_VERSION }               from '../../config/constants'
import                                           '../../assets/styles/LoginContainer.css'


function QRVerificationContainer(props){

	const { t } = useTranslation(['translation', 'vaccine']); 

	let INTERVAL    = 5000; 
	let TIMEOUT     = 3000; 
	let schemaName = "vaccine"; 
	let version ="1.2";

    useEffect(() => {
        getConnectionInfo()
    }, []);

    function getConnectionInfo() {
		
		try {
			fetchWithTimeout(`/connections/${props.location.state.invitation.connection_id}`,
				{
					method : 'GET',
					headers: {
                        'X-API-Key': 'cqen-api-test',
						'Content-Type' : 'application/json; charset=utf-8',
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
									data.state === "invitation" ? intervalFunction = setTimeout(getConnectionInfo, INTERVAL) : clearIntervalFunction(intervalFunction);
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
    
    function clearIntervalFunction(intervalFunction) {
		clearInterval(intervalFunction);
		requestProof()
    }
    

    function requestProof(){
		fetch(`/present-proof/send-request`, 
			{
				method : 'POST', 
				headers: {
					'X-API-Key': 'cqen-api-test',
					'Content-Type' : 'application/json; charset=utf-8',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
					'Access-Control-Max-Age': '86400'
				},
				body: JSON.stringify( 
				{
					"connection_id" : `${props.location.state.invitation.connection_id}`,
					"trace" : "true", 
					"comment" : "Vaccination proof validation", 
					"proof_request" : {
						"name"    : "vaccine", 
						"version" : "1.2", 
						"requested_attributes" : {

							"recipient_birthDate": {
								"name": "recipient_birthDate",
								"restrictions": [
									{"schema_name": schemaName,
                        			"schema_version": version}
								]
							},
							"recipient_fullName": {
								"name": "recipient_fullName",
								"restrictions": [
									{"schema_name": schemaName,
                        			"schema_version": version}
								]
							}, 
							"vaccine_dateOfVaccination": {
								"name": "vaccine_dateOfVaccination",
								"restrictions": [
									{"schema_name": schemaName,
                        			"schema_version": version}
								]
							}, 
						}, 
						"requested_predicates" : {}
					}
				}
				)}).then(response => response.json())
					.then(data => {
						props.history.push('/proofResult', {
							presentation_exchange_id: data.presentation_exchange_id,
							connection_id           : props.location.state.invitation.connection_id,
						}
                    );
				});
	}
    
    return(
        <div className="Root" style={{ backgroundColor: '#FCF8F7', display: "flex" }}>
			<Container >
				<Col>
					<QRProofComponent value={JSON.stringify(props.location.state)} />
				</Col>
			</Container>
		</div> 
    ); 
}

export default QRVerificationContainer; 