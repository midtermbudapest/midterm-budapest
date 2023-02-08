import React from 'react';
const dateOptions = { weekday: undefined, year: 'numeric', month: 'long', day: 'numeric' };

const privacyPolicy = [
  {
    title: 'Data Protection',
    content: [
      'The data controller (hereinafter referred to as “<strong>Midtermbudapest</strong>” or “<strong>we</strong>”) in the sense of the GDPR and other national data protection laws of the member states as well as other data protection regulations is:',
      'Midtermbudapest (contact details in the imprint above)',
      'You can contact our data protection officer at the address indicated above with the addition ‘Data Protection Officer’ or by email to dpo@midtermbudapestgroup.com.',
    ],
  },
  {
    title: 'Collection and Use of Personal Data',
    content: [
      'When using our Website, we automatically collect data, or you voluntarily transfer them to us by contacting us, for example via a subscription form or email. Your personal data is only collected with your consent or as admissible under applicable data protection law (e. g. the EU General Data Protection Regulation (“<strong>GDPR</strong>”) and the Hong Kong - Data Protection set of data protection principles (“<strong>DPPs</strong>“). The Personal Data (Privacy) Ordinance <a href="https://www.dataguidance.com/legal-research/personal-data-privacy-ordinance-1996-amended" target="_blank" rel="nofollow noopener">(Cap. 486)</a> as amended in 2012 (“<strong>PDPO</strong>“) is the main legislation in Hong Kong. The type of data that will be collected in the contact form is set out on our Website in the respective contact form. Data transmitted through the contact form will be stored on our servers. We use the data you provide to us to process your inquiries. Unless specifically stated, we store personal data only as long as necessary to fulfill the purposes pursued.',
    ],
  },
  {
    title: 'Processing of Data when Browsing the Website',
    content: [
      'Every time the Website is accessed by a visitor, this Website collects general data and information in connection with your visit. This general data and information is stored in the log files of the server and concerns the following data:',
      [
        'browser types and versions used,',
        'operating systems used by the accessing system,',
        'the webpage from which an accessing system arrived on this Website (known as a referrer),',
        'sub-websites that are accessed on this Website via an accessing system,',
        'date and time of an access to the Website,',
        'IP address,',
        'internet service provider of the accessing system,',
        'other similar data and information aimed at averting danger in the event of attacks directed at our IT systems.',
      ],
      'When processing this usage data, we do not draw any conclusions as to the visitor. We need this data in order to',
      [
        'correctly deliver the content of the Website,',
        'optimize the content of this Website,',
        'ensure the permanent functionality of our IT systems and the technology underlying this Website as well as',
        'provide to authorities the information necessary for purposes of conducting e. g. criminal proceedings in the event of a cyberattack.',
      ],
      'The legal basis for this processing activity is EU Art. 6 (1) (f) GDPR. This data in anonymized form is analyzed statistically and with the aim of increasing data protection and data security. The anonymous data of the server log files is stored separately from all personal data provided by a visitor. This anonymized  data is statistically analyzed with the aim of increasing data protection and data security. The anonymous data log files are stored separately from all personal data provided by a visitor'
    ],
  },
  {
    title: 'Investor Relations subscription',
    content: [
      'If you register for our Investor Relations updates, we will use your email address to regularly inform you about Midtermbudapest and its companies, including but not limited to the company newsletter, corporate news, investor relations related information and invitations to events of Midtermbudapest Limited and its companies. Mandatory for receiving this information is the following data: first and last name, city and country, email address, job title and company. The following data can be added: voluntarily title (Mrs. or Mr.), phone number, and email address.',
      'To ensure that you are properly registered, that is, to prevent unauthorized subscriptions on behalf of third parties, we will use a double-opt-in process and send you a confirmation email after your first Investor Relations subscription; this email will request you to confirm the subscription.',
      'The legal basis for sending Investor Relations subscriptions is your consent in accordance with Art. 6 (1) (a) GDPR. In connection with your registration, we also store your IP address plus the date and time of registration and confirmation, so that we can trace and prove the registration at a later date. The legal basis for this storage is a legitimate interest within the meaning of Art. 6 (1) (f) GDPR, where the legitimate interest is in being able to prove the registration.',
      'You may object at any time via the cancellation link in the provided emails or by sending a message to our contact address indicated above free of charge. After cancellation, your email address will be removed from our distribution list, as far as you have not expressly consented to a further use of your data or we reserve the right to further data usage, which is permitted by law and about which we inform you in this Privacy Policy.',
    ],
  },
  {
    title: `Processing of Applicants' Data`,
    content: [
      'We collect and process personal information that an applicant provides via an online recruitment platform or by email/mail directly to us. Such personal information may include data on the applicant (name, address, contact information), the applicant’s qualification and professional background as well as other data provided by the applicant (“<strong>Applicants’ Data</strong>”). We will use Applicants’ Data for purposes of an application process, a respective resulting working (or similar) contract and/or for processing in our talent pool.',
      'Basis for the processing of Applicants’ Data for the purpose of concluding or performing contracts is Art. 88 GDPR, § 26 BDSG or Art. 6 (1) (b) GDPR. For the duration of an application process and for evidentiary purposes until deletion processing of Applicants’ Data may also be based on our legitimate interest according to Art. 6 (1) (f) GDPR. Further, we may process Applicants’ Data based on Art. 6 (1) (c) GDPR if required by law or for the purpose of defending against legal claims according to Art. 6 (1) (f) GDPR. In addition, any processing of Applicants’ Data may be based on an applicant’s consent according to Art. 6 (1) (a) GDPR.',
      'Applicants’ Data will be deleted within six months after a removal, withdrawal, or rejection of an applicant in a recruiting process. If an applicant is hired, Applicants’ Data will be electronically stored for approximately twelve months and further stored in printed form in the applicant’s personal file for the duration of the employment relationship based on Art. 88 GDPR, § 26 BDSG and thereafter.',
      'If an applicant grants the respective consent, we will file Applicants’ Data in our talent pool (usually for up to 24-month periods) based on Art. 6 (1) (a) GDPR. Applicants may revoke their consent at any time by sending an email to recruitment@Midtermbudapestgroup.com or through the means provided by our respective recruiting platform – upon revocation, the Applicants’ Data will be deleted within one month. Such a revocation of consent during an ongoing application process automatically constitutes a withdrawal of an application.',
      'We may forward Applicants’ Data to a subsidiary or to another company based on the applicant’s prior consent according to Art. 6 (1) (a) GDPR. Applicants’ Data might also be processed by third party service providers in accordance with the GDPR. In such cases we remain responsible for Applicants’ Data and ensure the processing by third party providers by way of data processing agreements according to Art. 28 GDPR or other legal means. Recipients of Applicants’ Data in such cases are for example the respective software or recruitment service providers.',
    ],
  },
  {
    title: 'General Use of Cookies',
    content: [
      'In order to provide this Website and to improve its performance, we use cookies. Cookies are text files that are stored on your device. Cookies remain on your device and allow us to recognize your browser on the next visit (persistent cookies). You can set your browser to inform you about the cookie setting and disable cookies individually, or to disable cookies for specific cases or in general. Some cookies are necessary for the functions of the Website. If the usage of these cookies is not enabled on your device or in your browser, the functionality of our Website may be restricted.',
    ],
  },
  {
    title: 'Use of Google Analytics',
    content: [
      'This Website uses Google Analytics, a web analytics service provided by Google Ireland Limited, Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland (“<strong>Google</strong>”) that helps determine usage preferences and particularly popular areas of websites. Google Analytics uses methods that allow the analysis of the use of the Website, e. g. through cookies. The generated information about your use of this Website is transferred to a Google server in Europe and stored there. By activating the IP anonymization on this Website, the IP address will be shortened before transmission within the Member States of the European Union or in other Contracting States of the Agreement on the European Economic Area. Only in exceptional cases the full IP address will be transferred to a Google server in the USA and shortened there. The anonymized IP address transmitted by your browser under Google Analytics will not be merged with other Google data.',
      'You can prevent Google\'s processing of the data (including your IP address) generated by a cookie and your use of the Website (including your IP address) as well as the processing of this data by Google by downloading and installing the browser plug-in available under the following <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noreferrer noopener">link</a>. Alternatively, you can revoke your consent to the processing of your data through the use of this service on the Website.',
      'Further information on data protection regarding Google Analytics is available at Google’s data protection notice under “Google Analytics Cookies” available under the following <a href="https://support.google.com/analytics/answer/6004245?hl=en" target="_blank" rel="noreferrer noopener">link</a>.',
      'Further information on Google’s privacy policy is available <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noreferrer noopener">here</a>.',
      'The cookie lifetime is up to 24 months (this applies only to cookies which have been set by this Website) and the maximum storage period of used data is up to 26 months.',
      'The processing of data using Google Analytics is based on your consent according to Art. 6 (1) (a) GDPR.',
    ],
  },
  {
    title: 'Website Security',
    content: [
      'We use and constantly improve technical and organizational security measures to protect the information provided to us and prevent personal data from being accidentally or intentionally altered, deleted, or accessed by unauthorized persons.',
    ],
  },
  {
    title: 'Rights of the data subject',
    content: [
      'If your personal data is processed, you are considered a data subject within the meaning of the GDPR and you have the following rights against Midtermbudapest as data controller:'
    ],
  },
  {
    title: 'Right of Access',
    content: [
      'Right to information according to Art. 15 GDPR: You have the right to obtain information about the personal data processed by us, the processing purposes, the categories of processed personal data, the recipients or categories of recipients to whom your data was or are being disclosed, the planned period of storage or the criteria for determining the duration of storage, the right of correction, deletion, limitation of processing, objection to processing, complaint to a supervisory authority, the origin of your data, if they were not collected by us, the existence of automated decision-making including profiling and possibly significant information on the logic applied and the scope and intended impact of such processing, as well as your right to be informed of what guarantees according to Art. 46 GDPR exist in case of redirection of data in third countries.'
    ],
  },
  {
    title: 'Right to Correction',
    content: [
      'Right to correction according to Art. 16 GDPR: You have the right to immediate correction of incorrect data concerning you and/or completion of incomplete data.',
    ],
  },
  {
    title: 'Right to Deletion',
    content: [
      'Right to deletion according to Art. 17 DSGVO: You have the right to demand the deletion of your personal data if the requirements of Art. 17 (1) GDPR are met. This right does not apply if the processing is necessary for the exercise of the right to freedom of expression and information, for the fulfillment of a legal obligation, for reasons of public interest or for the pursuit, exercise or defense of rights.',
    ],
  },
  {
    title: 'Right to Restriction of Processing',
    content: [
      'Right to restriction of processing according to Art. 18 GDPR: You have the right to demand the restriction of the processing of your personal data provided that the correctness of your data is verified, if you refuse to delete your data due to inadmissible data processing and instead restrict the processing of your data, if you need your data for the assertion, exercise, or defense of legal rights, after we no longer require these data for their purpose, or if you have objected for reasons of your particular situation, as long as it is not ascertained, whether our legitimate reasons prevail.',
    ],
  },
  {
    title: 'Information to Third Parties',
    content: [
      'Right to information in accordance with Art. 19 GDPR: If you exercise the right to correct, delete, or limit the processing towards the responsible contact, this person is obliged to inform all recipients who have been disclosed personal data about the correction, deletion, or limitation of processing of the data, unless this is impossible or requires a disproportionate effort. You have the right to be informed about the respective recipients.',
    ],
  },
  {
    title: 'Right to Data Portability',
    content: [
      'Right to data portability according to Art. 20 GDPR: You have the right to receive your personal data provided to us in a structured, common, and machine-readable format or to request transmission to another responsible person, insofar as this is technically feasible.',
    ],
  },
  {
    title: 'Right to Withdraw the Declaration of Consent under Data-Processing Law',
    content: [
      'Right to revoke granted consent according to Art. 7 (3) GDPR: You have the right to revoke consent provided in the processing of data at any time with effect for the future. In the case of revocation, we will delete the respective data immediately, as far as further processing cannot be legally justified for processing without consent. The revocation of consent does not affect the lawfulness of the processing carried out on the basis of the consent until the revocation.',
    ],
  },
  {
    title: 'Right to file a Complaint with a Supervisory Authority',
    content: [
      'Right to file a complaint according to Art. 77 GDPR: If you consider the processing of your personal data a violation of the GDPR, you have the right to file a complaint to a supervisory authority, in particular in the member state of your location, your place of work, or the place of alleged infringement.',
    ],
  },
  {
    title: 'Right to Objection',
    content: [
      'If you have given your consent (Art. 6 (1) (a) GDPR) to the processing of your data, you can withdraw your consent at any time. Such a withdrawal influences the permissibility of processing your personal data after you have provided it to us.',
      'If we base the processing of your personal data on the weighing of interests (Art. 6 (1) (f) GDPR), you may object to the processing at any time. In the event of your justified objection, we will either stop or adjust data processing or point out to you our compelling reasons worthy of protection, on the basis of which we will continue (possibly limited) processing.',
      'You can object to the processing of your personal data for purposes of advertising and data analysis at any time. You can inform us about your objection under the above-mentioned contact details.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'Contact us via email for any questions regarding your personal data.',
    ],
  }
];
export default function PrivacyPolicy() {
  const lastUpdate = new Date('20232-02-09');
  return (
    <div
      className="text-xxs privacy-policy"
    >
      <h2>Privacy Policy</h2>
      <div
        className="privacy-inner"
      >
        <p>
          Our Privacy Policy clarifies how we handle and process your personal data with regard to the website <a href="https://www.midtermbudapest.com" rel="noreferrer noopener" target="_blank">www.midtermbudapest.com</a> or connected sub-websites (“<strong>Website</strong>”) and your respective rights.
        </p>
        {privacyPolicy.map(({ title, content }) => (
          <section key={title}>
            <h6 className="text-xxs">{title}</h6>
            {content.map((item) => typeof item === 'string' ? (
              <p key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ) : (
              <ul key={JSON.stringify(item)}>
                {item.map((p) => (
                  <li key={p} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </ul>
            ))}
          </section>
        ))}
        <div>
          Last update: <time dateTime={lastUpdate}>{lastUpdate.toLocaleDateString('en', dateOptions)}</time>
        </div>
      </div>
    </div>
  );
}
