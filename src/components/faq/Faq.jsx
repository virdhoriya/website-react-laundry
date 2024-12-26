import "./faq.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "./faqData";

const Faq = () => {
  console.log(faqData);
  return (
    <section className="pt-20 pb-24">
      <div className="faq-main-container">
        <div className="flex justify-center items-center mb-24">
          <h1 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="text-[1.8rem] text-[#3c4b5d] leading-[3.4rem] font-semibold">
          <p className="mb-10">
            First and foremost, provide a convenient and easy to use laundry
            service for individuals to have their cleaning items picked up,
            professionally cleaned and delivered to and from their place of
            business/home.
          </p>
          <p className="mb-10">
            When you&apos;re searching for a better laundry service provider,
            turn to Sikka Cleaners. We are a superior resource for all of your
            laundry servicing needs, whether you operate an apartment community,
            condominium, or multi-family housing property. Discover our
            unparalleled customer service, experienced and friendly staff, and
            flexible approach.
          </p>
        </div>
        <div className="pt-14 pb-24 space-y-16">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex justify-center items-center mb-16">
                <h3 className="faq-sub-heading">{section.sectionTitle}</h3>
              </div>

              <div className="flex flex-col justify-center gap-12">
                {section.faqs.map((faq, faqIndex) => {
                  const { question, answer } = faq;
                  return (
                    <div
                      key={faqIndex}
                      className="shadow-xl border border-black/50 rounded-lg"
                    >
                      <Accordion>
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon
                              sx={{ fontSize: 30, color: "#161F5F" }}
                            />
                          }
                        >
                          <div className="faq-question">{question}</div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="faq-ans">{answer}</div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
