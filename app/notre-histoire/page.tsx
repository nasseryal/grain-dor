import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Page "Notre Histoire" — storytelling fictif du torréfacteur
export default function NotreHistoire() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Notre Histoire"
            subtitle="De la passion du café à l'artisanat de la torréfaction"
          />
        </AnimatedSection>

        {/* Section fondation */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div
              className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/histoire-1.jpg')" }}
            />
            <div>
              <h3 className="font-playfair text-2xl font-bold text-brown mb-4">
                Tout a commencé en 2018
              </h3>
              <p className="font-body text-brown-light leading-relaxed mb-4">
                Après dix ans passés dans l&apos;industrie du café, notre fondateur Marc Delacroix décide de tout quitter pour ouvrir son propre atelier de torréfaction dans le 11e arrondissement de Paris.
              </p>
              <p className="font-body text-brown-light leading-relaxed">
                Son obsession : trouver les meilleurs grains du monde et les torréfier avec une précision artisanale, pour révéler des arômes que les grandes marques industrielles ignorent.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Les 3 piliers */}
        <AnimatedSection className="mb-16">
          <h3 className="font-playfair text-2xl font-bold text-brown text-center mb-10">
            Nos trois piliers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Sourcing direct",
                text: "Nous achetons directement aux producteurs, sans intermédiaires. Des prix justes pour eux, une traçabilité totale pour vous.",
              },
              {
                icon: "🔥",
                title: "Torréfaction artisanale",
                text: "Chaque lot est torréfié en petites quantités dans notre atelier. Pas de production de masse — chaque grain compte.",
              },
              {
                icon: "🤝",
                title: "Commerce équitable",
                text: "Nous payons nos producteurs 40% au-dessus du prix du marché. Un café de qualité commence par le respect de ceux qui le cultivent.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-cream rounded-2xl p-6 text-center border border-brown/5">
                <span className="text-4xl mb-4 block">{pillar.icon}</span>
                <h4 className="font-playfair text-lg font-semibold text-brown mb-3">
                  {pillar.title}
                </h4>
                <p className="font-body text-sm text-brown-light leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Section philosophie */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div
              className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/histoire-2.jpg')" }}
            />
            <div>
              <h3 className="font-playfair text-2xl font-bold text-brown mb-4">
                Du grain vert à votre tasse
              </h3>
              <p className="font-body text-brown-light leading-relaxed mb-4">
                Nos grains voyagent depuis les hauts plateaux d&apos;Éthiopie, les vallées colombiennes ou les volcans indonésiens jusqu&apos;à notre atelier parisien.
              </p>
              <p className="font-body text-brown-light leading-relaxed mb-4">
                Nous torréfions chaque semaine en petits lots de 15 kg maximum. Résultat : un café toujours frais, aux arômes intacts, livré dans les 48 heures suivant la torréfaction.
              </p>
              <p className="font-body text-brown-light leading-relaxed">
                Chaque sachet porte sa date de torréfaction — notre garantie de fraîcheur absolue.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
