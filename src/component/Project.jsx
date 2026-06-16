import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants/projects';
import { Button, SectionContainer, SectionHeader, SectionGrid } from '../components/shared';
import { ANIMATION_DELAY } from '../utils/constants';

/**
 * Projects Portfolio Component
 * Displays completed roofing and aluminum projects
 */
export default function Project() {
  const navigate = useNavigate();

  const renderProjectCard = (project, index) => (
    <div
      key={project.id}
      className="group relative overflow-hidden rounded-2xl bg-slate-900/50 ring-1 ring-white/10 transition-all hover:ring-amber-200/50"
      data-aos="flip-left"
      data-aos-delay={index * ANIMATION_DELAY.sm}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-200 ring-1 ring-inset ring-amber-200/20">
            {project.category}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 leading-6">{project.description}</p>
      </div>
    </div>
  );

  return (
    <SectionContainer bgColor="bg-slate-950">
      <SectionHeader
        subtitle="Our work"
        title="Featured Projects"
        description="Explore our portfolio of completed roofing and aluminum projects, showcasing our commitment to quality craftsmanship and customer satisfaction."
      />

      <div className="mt-16">
        <SectionGrid items={PROJECTS} renderItem={renderProjectCard} />
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <Button onClick={() => navigate('/contact')}>Request a Quote</Button>
      </div>
    </SectionContainer>
  );
}