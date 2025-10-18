import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionDemo = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="text-start space-y-2">
            <div className="space-y-8 leading-relaxed ">
              <section>
                <h3 className="text-xl font-semibold mb-2">
                  1. Intro to Artificial Intelligence
                </h3>
                <p>
                  Structured and unstructured data, supervised and unsupervised
                  learning, Generative AI, and foundational models — what
                  exactly do they mean? Why study AI? Gain deep insights into
                  the field through a guided exploration that covers AI
                  fundamentals, the significance of quality data, essential
                  techniques, and advanced models like GPT, Llama, Gemini, and
                  Claude.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2">
                  2. Python Programming
                </h3>
                <p>
                  Mastering Python programming is essential to becoming a
                  skilled AI developer—no-code tools are insufficient. Python is
                  a modern, general-purpose programming language suited for web
                  apps, games, and data science. Its extensive library ecosystem
                  makes it ideal for building AI models.
                </p>
              </section>

              {/* Repeat same structure for 3–7 */}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionDemo;
