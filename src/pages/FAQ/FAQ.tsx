import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq() {

  const faqs = [
    {
      question: "How to log-in ?",
      answer: "Sign-in using your STI Microsoft Office 365 account. If you don't know your account yet, get your credentials from the School Laboratory Facilitator or refer to your Registration and Assessment Form to get your official school email address. You may locate it at the lower-left corner of the form."
    },
    {
      question: "My default password is not working ?",
      answer: "Verify the password from your School Laboratory Facilitator. You may also request for a new one by approaching the School Laboratory Facilitator then ask for a password reset."
    },
    {
      question: "Balances ?",
      answer: "To validate your balances, check with the Registrar's Office for clarification. "
    },
  ]

  return (
    <>
      <Typography>
        Frequently Asked Questions
      </Typography>
      {faqs.map((item) => {
        return (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              <Typography sx={{
                fontFamily: 'default',
                fontSize: 16,
                letterSpacing: 2,
                lineHeight: 1,
                fontWeight: 'bold'
              }}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{
                fontFamily: 'default',
                fontSize: 16,
                lineHeight: 2,
              }}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  );
}

export default Faq;