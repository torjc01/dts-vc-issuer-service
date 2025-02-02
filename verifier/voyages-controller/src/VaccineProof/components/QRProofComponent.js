import React                from 'react';
import QRCode               from 'qrcode.react'
import { useTranslation }   from 'react-i18next'

function QRProofComponent(props) {

    const { t } = useTranslation(['translation','vaccine']);
	const content = JSON.parse(props.value); 
	
	return (
        <div>
            <h2>{t('vaccine:vaccineProof')}</h2>
            <p>{t('vaccine:vaccineQRMsg')}</p>
            <QRCode value={content.invitation.invitation_url} size={400}/>
        </div>
        
	);
}

export default QRProofComponent;