import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";
const Faqs = () => {
  const faqs = [
    {
      questions: "What is the return policy?",
      answers: `Most unopened items in new condition and returned within 90 days will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store.</p><p>Online purchases may be returned via a major parcel carrier.`,
    },
    {
      questions: `How long does it take to process a refund?`,
      answers: `We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we will process it within 4-5 business days. It may take up to 7 days after we process the return to reflect in your account, depending on your financial institution's processing time.`,
    },
    {
      questions: `What is the policy for late/non-delivery of items ordered online?`,
      answers: `Our local teams work diligently to make sure that your order arrives on time, within our normaldelivery hours of 9AM to 8PM in the recipient's time zone. During  busy holiday periods like Christmas, Valentine's and Mother's Day, we may extend our delivery hours before 9AM and after 8PM to ensure that all gifts are delivered on time. If for any reason your gift does not arrive on time, our dedicated Customer Service agents will do everything they can to help successfully resolve your issue.`,
    },
    {
      questions: `When will my credit card be charged?`,
      answers: `We'll attempt to securely charge your credit card at the point of purchase online. If there's a problem, you'll be notified on the spot and prompted to use another card. Once we receive verification of sufficient funds, your payment will be completed and transferred securely to us. Your account will be charged in 24 to 48 hours.`,
    },
    {
      questions: `What are you doing now?`,
      answers: `We'll attempt to securely charge Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                porro voluptas quos officiis commodi quasi iure doloremque at
                dolor alias assumenda, explicabo animi quibusdam sit. Corrupti
                iure pariatur officia doloremque`,
    },
  ];
  return (
    <div>
      <div className="w-full auto h-auto flex justify-center items-center py-5 bg-gray-100">
        <div className="w-[90%] h-full flex flex-col  ">
          <div className="text-[40px] font-serif font-medium">FAQs</div>
          <div className="w-full h-auto my-10">
            {faqs.map((items, i) => (
              <Accordion key={i} sx={{ background: "#f5f4f0" }}>
                <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                  <Typography> {items.questions}</Typography>
                </AccordionSummary>
                <AccordionDetails>{items.answers}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
