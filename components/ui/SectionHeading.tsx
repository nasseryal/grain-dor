// Titre de section réutilisable — style serif + ligne décorative
export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-brown mb-3">
        {title}
      </h2>
      {/* Ligne décorative terracotta */}
      <div className="w-16 h-0.5 bg-terracotta mx-auto mb-4" />
      {subtitle && (
        <p className="font-body text-brown-light text-base sm:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
