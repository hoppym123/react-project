import { useNavigate } from 'react-router-dom';
const Warranty = () => {
  const navigate = useNavigate();
  return (
    <section id="warranty" className="bg-slate-900 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Warranty Information</h2>
        </div>
        <div className="space-y-6">
          <div data-aos="slide-up" className="rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Installation Warranty</h3>
            <p className="text-slate-300 leading-7">On every roof done by our company, we offer a standard two-year warranty covering installation defects.</p>
          </div>
          <div data-aos="slide-up" data-aos-delay="100" className="rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Material Warranty</h3>
            <p className="text-slate-300 leading-7">We also provide a 5-year warranty on materials, ensuring that any issues arising from material defects will be addressed promptly.</p>
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className="rounded-2xl bg-slate-950/50 p-8 ring-1 ring-white/10">
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Peace of Mind</h3>
            <p className="text-slate-300 leading-7">Our warranties are designed to give you peace of mind and confidence in the quality of our work. For more details or to make a warranty claim, please contact our customer service team.</p>
          </div>
        </div>
        <div className="mt-10 text-center" data-aos="zoom-in">
          <button onClick={() => navigate('/contact')} className="rounded-full bg-amber-200 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition-colors">
                        Contact Us for Warranty Claims
          </button>
        </div>
      </div>
    </section>
  );
};

export default Warranty;