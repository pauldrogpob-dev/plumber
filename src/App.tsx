import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Wrench,
  Flame,
  Bath,
  ShieldCheck,
  Users,
  CheckCircle,
  Home,
  Clock
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans antialiased">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-neutral-900 text-lg tracking-tight">WJ McNabb</span>
                <span className="font-normal text-neutral-500 text-lg hidden lg:inline"> Plumbing</span>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="tel:4123882512"
                className="hidden sm:flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(412) 388-2512</span>
              </a>
              <a
                href="tel:4123882512"
                className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-sm hover:shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] gradient-mesh grain-overlay flex items-center pt-20">
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-600">Licensed & Insured in Pittsburgh</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pittsburgh's Trusted Plumber{' '}
              <span className="text-[#1E40AF]">for 40+ Years</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              WJ McNabb Plumbing handles every repair, install, and emergency across Pittsburgh, with licensed plumbers who show up on time and explain your options before any work starts.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="tel:4123882512"
                className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold px-8 py-4 rounded-lg border border-neutral-200 transition-all hover:border-neutral-300"
              >
                Our Services
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-neutral-200/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E40AF]" />
                <span className="text-sm text-neutral-600">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1E40AF]" />
                <span className="text-sm text-neutral-600">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#1E40AF]" />
                <span className="text-sm text-neutral-600">Family Owned Since 1984</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Expert Plumbing Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From minor fixes to major installations, we handle it all with precision and care.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Service 1 - Large card */}
            <motion.div
              className="group relative bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] rounded-2xl p-8 lg:p-10 min-h-[280px] lg:min-h-[320px] flex flex-col justify-end overflow-hidden md:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-6 right-6 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Wrench className="w-8 h-8 lg:w-10 lg:h-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                  Drain & Sewer Cleaning
                </h3>
                <p className="text-white/80 text-lg max-w-xl">
                  Slow drains and backed-up sewers cleared fast, with a real fix that keeps them flowing.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 translate-y-1/2" />
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="group relative bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl p-8 min-h-[280px] flex flex-col justify-end overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Flame className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                  Water Heater Service
                </h3>
                <p className="text-white/80">
                  Repair, replacement, and install for hot water you can count on every morning.
                </p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="group relative bg-neutral-900 rounded-2xl p-8 min-h-[280px] flex flex-col justify-end overflow-hidden lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Bath className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'url("/image.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                  Kitchen & Bath Plumbing
                </h3>
                <p className="text-white/80">
                  Faucets, toilets, sinks, and showers fixed right the first time, no mess left behind.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Pittsburgh's Plumbing Family Since 1984
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Second-generation family business with over 40 years serving Pittsburgh homes. Licensed, background-checked technicians who respect your home and clean up after the job.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                100% satisfaction guarantee. If you're not happy, we redo the work absolutely free.
              </p>

              <div className="space-y-4">
                {[
                  'Licensed & Background-Checked Technicians',
                  'Upfront Pricing, No Surprises',
                  'Same-Day Service Available',
                  'We Respect Your Home & Clean Up'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#1E40AF]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#1E40AF]" />
                    </div>
                    <span className="font-medium text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image.png"
                  alt="WJ McNabb Plumbing team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-neutral-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-neutral-900">40+</div>
                    <div className="text-sm text-neutral-500">Years Serving Pittsburgh</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-900 leading-relaxed mb-8">
              "Called McNabb on a Saturday when our basement started flooding. They were out within the hour, found the problem, and fixed it for a fair price. No upsell, no runaround. These are the only plumbers we call now."
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mb-3">
                <span className="text-lg font-semibold text-neutral-600">SM</span>
              </div>
              <div className="font-semibold text-neutral-900">Sarah M.</div>
              <div className="text-neutral-500">Mount Lebanon</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Band */}
      <section className="relative py-20 lg:py-28 bg-[#1E40AF] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Don't wait for a small leak to become a big repair.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get a plumber who does it right.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="tel:4123882512"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#1E40AF] font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              (412) 388-2512
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Schedule Service
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="font-semibold text-white text-lg">WJ McNabb Plumbing</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-neutral-400 text-sm">
              <span>Pittsburgh, PA</span>
              <span className="hidden sm:inline">|</span>
              <a href="tel:4123882512" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (412) 388-2512
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
            <p className="text-neutral-500 text-sm">
              WJ McNabb Plumbing | Pittsburgh, PA | (412) 388-2512
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
