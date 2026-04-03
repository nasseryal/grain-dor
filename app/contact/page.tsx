import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";

// Page contact — formulaire + infos pratiques
export default function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Contact"
            subtitle="Une question, un projet ? Écrivez-nous."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Formulaire */}
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>

          {/* Infos pratiques */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              {/* Adresse */}
              <div className="bg-cream rounded-2xl p-6 border border-brown/5">
                <h3 className="font-playfair text-lg font-semibold text-brown mb-3">
                  Notre adresse
                </h3>
                <p className="font-body text-brown-light text-sm leading-relaxed">
                  23 Rue des Torréfacteurs<br />
                  75011 Paris, France
                </p>
              </div>

              {/* Horaires */}
              <div className="bg-cream rounded-2xl p-6 border border-brown/5">
                <h3 className="font-playfair text-lg font-semibold text-brown mb-3">
                  Horaires d&apos;ouverture
                </h3>
                <div className="font-body text-brown-light text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Lundi – Vendredi</span>
                    <span className="font-semibold text-brown">8h – 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-semibold text-brown">9h – 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-terracotta">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Contact direct */}
              <div className="bg-cream rounded-2xl p-6 border border-brown/5">
                <h3 className="font-playfair text-lg font-semibold text-brown mb-3">
                  Contact direct
                </h3>
                <div className="font-body text-brown-light text-sm space-y-2">
                  <p>contact@graindor-demo.fr</p>
                  <p>01 23 45 67 89</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
