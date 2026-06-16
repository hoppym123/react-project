import { useNavigate } from 'react-router-dom';
import services from '../constants/services';
import { Button, SectionContainer, SectionHeader, SectionGrid } from '../components/shared';
import { ANIMATION_DELAY } from '../utils/constants';

/**
 * Services Page Component
 * Displays all available roofing and aluminum services
 */
export default function Services() {
  const navigate = useNavigate();

  const renderServiceCard = (service, index) => (
    <div
      key={service.id}
      className="group relative overflow-hidden rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10 transition-all hover:ring-amber-200/50 hover:bg-slate-950/80"
      data-aos="zoom-in"
      data-aos-delay={index * ANIMATION_DELAY.sm}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors mb-3">
        {service.title}
      </h3>
      <p className="text-slate-400 leading-6 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-slate-300">
            <span className="mr-2 text-amber-200">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button
          onClick={() => navigate('/contact')}
          className="text-sm font-semibold text-amber-200 hover:text-amber-100 transition-colors"
          aria-label={`Request quote for ${service.title}`}
        >
          Request Quote →
        </button>
      </div>
    </div>
  );

  return (
    <SectionContainer bgColor="bg-slate-900">
      <SectionHeader
        subtitle="Our services"
        title="Complete Roofing & Aluminum Solutions"
        description="From installation to repair, we provide comprehensive roofing and aluminum services with quality materials and expert craftsmanship."
      />

      <div className="mt-16">
        <SectionGrid items={services} renderItem={renderServiceCard} />
      </div>

      {/* Custom Solutions CTA */}
      <div className="mt-16 text-center">
        <div className="rounded-2xl bg-gradient-to-r from-amber-200/10 to-amber-200/5 p-8 ring-1 ring-amber-200/20">
          <h3 className="text-2xl font-semibold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact us for a free consultation and personalized quote
            tailored to your specific needs.
          </p>
          <Button onClick={() => navigate('/contact')}>
            Get Free Consultation
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}