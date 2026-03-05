import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Services() {
    const containerRef = useRef(null);

    const services = [
        {
            id: 0,
            title: "Web Design & UX/UI",
            icon: "web",
            description: "Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions."
        },
        {
            id: 1,
            title: "No-code Development",
            icon: "code",
            description: "Building robust, scalable applications without writing a single line of code, faster."
        },
        {
            id: 2,
            title: "MVP Prototyping",
            icon: "rocket_launch",
            description: "Rapidly turning your ideas into testable products to validate market fit in weeks, not months."
        },
        {
            id: 3,
            title: "Ongoing Design Partner",
            icon: "handshake",
            description: "Continuous design support to keep your product fresh, consistent, and growing with your business."
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Use fromTo to ensure starting state is explicit and correct
        tl.fromTo('.service-heading',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1 }
        )
            .fromTo('.service-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                },
                '-=0.4'
            )
            .fromTo('.service-image',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                },
                '-=0.6'
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-32">
                        <div id="waypoint-services" className="service-heading w-1.5 h-1.5 bg-accent-new rounded-full mb-4"></div>
                        <h2 className="service-heading text-[36px] font-semibold text-primary mb-5 leading-tight tracking-[-0.02em]">From idea to scale.<br />We master our craft<span id="waypoint-services-period" className="inline-block">.</span></h2>
                        <div className="service-heading flex items-center gap-4 mb-10">
                            <a className="inline-flex items-center gap-2 text-[13px] font-semibold border border-border-light bg-white text-primary px-4 py-2 rounded-pill hover:bg-gray-50 transition-colors shadow-sm group" href="#">
                                Start A Project <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                            </a>
                        </div>

                        <div className="space-y-3">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="service-card bg-white rounded-2xl p-5 border border-gray-100 shadow-subtle hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-5">
                                        <span className="w-12 h-12 rounded-2xl flex-shrink-0 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-[18px] text-primary mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                                            <p className="text-[15px] text-text-secondary leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group mt-8 lg:mt-0 self-center perspective-[2000px]">
                        <div className="service-image relative rounded-[40px] overflow-hidden border border-white/40 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] bg-black max-w-[540px] ml-auto transition-transform duration-700 group-hover:rotate-y-2 group-hover:rotate-x-1">
                            <img alt="Coding and development" className="w-full h-auto object-cover opacity-90 scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuhNar5WmNa_O_drZATeadC-wGnIfaZbJgEPQyTBCCCHk7uGaHkrltTTGHLGZ5BFuc0gujx4izQAAt0OrOYobEzOjUSqfDdM_FAVj4iORBg5myIxcc__IBJdlRDxIwvNkLsMpl7feqDMj4VO6YvLraWHjISHDBc_CmYPljUXbXlNXo3zcp5q70UsakaBdrzQZNZH5k7MW-OZghL3rLCODTpNpGWArsXswuqYPR25zPHiTSJRtxQvW8dIQyD8uOq35YWhSQOJYDZ8" />

                            {/* Glass overlay card */}
                            <div className="absolute bottom-10 left-10 right-10 translate-y-0 group-hover:-translate-y-3 transition-transform duration-700 ease-out">
                                <div className="bg-[#1e1e1e]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-gray-300 font-mono text-[13px] shadow-2xl">
                                    <div className="flex gap-2 mb-5">
                                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm"></span>
                                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm"></span>
                                        <span id="waypoint-services-terminal" className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm"></span>
=======
        <section className="py-12 bg-background">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-32">
                        <div className="w-1.5 h-1.5 bg-accent-new rounded-full mb-4"></div>
                        <h2 className="text-[36px] font-semibold text-primary mb-5 leading-tight tracking-[-0.02em]">From idea to scale.<br />We master our craft.</h2>
                        <div className="flex items-center gap-4 mb-10">
                            <a className="inline-flex items-center gap-2 text-[13px] font-semibold border border-border-light bg-white text-primary px-4 py-2 rounded-pill hover:bg-gray-50 transition-colors shadow-sm group" href="#">
                                Start A Project <span className="material-symbols-outlined text-[15px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                        <div className="space-y-0 border-t border-border-light/50">
                            <div className="bg-white rounded-[12px] p-5 border border-border-light shadow-subtle cursor-pointer transition-all my-3">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded bg-background border border-border-light flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-[18px]">web</span>
                                        </span>
                                        <h4 className="font-bold text-[15px] text-primary">Web Design & UX/UI</h4>
                                    </div>
                                    <span className="material-symbols-outlined text-text-primary text-[18px]">expand_less</span>
                                </div>
                                <p className="text-[14px] text-text-secondary pl-[44px] leading-relaxed">
                                    Crafting sleek, user-focused interfaces in Figma that drive engagement and conversions.
                                </p>
                            </div>
                            <div className="p-5 border-b border-border-light cursor-pointer flex justify-between items-center group transition-all hover:bg-white/50">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white border border-border-light flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">code</span>
                                    </span>
                                    <h4 className="font-medium text-[15px] text-text-secondary group-hover:text-primary transition-colors">No-code Development</h4>
                                </div>
                                <span className="material-symbols-outlined text-text-secondary/50 text-[18px]">expand_more</span>
                            </div>
                            <div className="p-5 border-b border-border-light cursor-pointer flex justify-between items-center group transition-all hover:bg-white/50">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white border border-border-light flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                                    </span>
                                    <h4 className="font-medium text-[15px] text-text-secondary group-hover:text-primary transition-colors">MVP Prototyping</h4>
                                </div>
                                <span className="material-symbols-outlined text-text-secondary/50 text-[18px]">expand_more</span>
                            </div>
                            <div className="p-5 border-b border-border-light cursor-pointer flex justify-between items-center group transition-all hover:bg-white/50">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white border border-border-light flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">handshake</span>
                                    </span>
                                    <h4 className="font-medium text-[15px] text-text-secondary group-hover:text-primary transition-colors">Ongoing Design Partner</h4>
                                </div>
                                <span className="material-symbols-outlined text-text-secondary/50 text-[18px]">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group mt-8 lg:mt-0 self-center">
                        <div className="relative rounded-[24px] overflow-hidden border border-border-light shadow-2xl bg-black max-w-[480px] ml-auto">
                            <img loading="lazy" alt="Coding and development" className="w-full h-auto object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuhNar5WmNa_O_drZATeadC-wGnIfaZbJgEPQyTBCCCHk7uGaHkrltTTGHLGZ5BFuc0gujx4izQAAt0OrOYobEzOjUSqfDdM_FAVj4iORBg5myIxcc__IBJdlRDxIwvNkLsMpl7feqDMj4VO6YvLraWHjISHDBc_CmYPljUXbXlNXo3zcp5q70UsakaBdrzQZNZH5k7MW-OZghL3rLCODTpNpGWArsXswuqYPR25zPHiTSJRtxQvW8dIQyD8uOq35YWhSQOJYDZ8" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-[#1e1e1e]/90 backdrop-blur border border-white/10 rounded-lg p-4 text-gray-300 font-mono text-[12px] shadow-2xl">
                                    <div className="flex gap-1.5 mb-2">
                                        <span className="w-2 h-2 rounded-full bg-[#FF5F56]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                                        <span className="w-2 h-2 rounded-full bg-[#27C93F]"></span>
>>>>>>> Stashed changes
                                    </div>
                                    <div className="space-y-3 font-medium">
                                        <p className="text-gray-500">// Initialize growth engine</p>
                                        <p><span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">scale</span> = <span className="text-[#F78C6C]">true</span>;</p>
                                        <p><span className="text-[#C792EA]">if</span> (scale) {"{"}</p>
                                        <div className="pl-5 relative border-l-2 border-white/10 ml-1">
                                            <p><span className="text-[#C3E88D]">launchSuccess</span>();</p>
                                            <p className="text-gray-500 text-xs mt-2">/* Systems optimal */</p>
                                        </div>
                                        <p>{"}"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements behind image */}
                        <div className="absolute -z-10 top-12 -right-12 w-full h-full bg-gradient-to-br from-primary/30 to-accent-new/30 rounded-[40px] blur-3xl opacity-50 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
