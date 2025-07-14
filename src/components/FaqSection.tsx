import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What's included in the templates?",
      answer: "Each template includes full source code, documentation, deployment guides, and lifetime updates. All built with modern tech stacks like Next.js, TypeScript, and Tailwind CSS."
    },
    {
      question: "Can I use these for commercial projects?",
      answer: "Yes! All Pro and Enterprise plans include commercial licenses. You can use our templates and AI agents in client projects and your own products."
    },
    {
      question: "How do the AI agents work?",
      answer: "Our AI agents are powered by GPT-4 and trained on best practices. They generate production-ready code, help with debugging, and can be integrated into your existing workflow."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. No questions asked."
    },
    {
      question: "How often do you release new products?",
      answer: "We release new templates and AI agents monthly for Pro subscribers, with major updates quarterly."
    }
  ];

  return (
    <section id="faq" className="scroll-snap-section py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-4">
            <span className="text-gradient">Frequently Asked</span> Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our products and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

