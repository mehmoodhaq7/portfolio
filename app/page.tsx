import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MouseGlow } from "@/components/MouseGlow";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { TextReveal } from "@/components/TextReveal";
import { TelemetryDash } from "@/components/TelemetryDash";
import { Mail, MapPin, ExternalLink, Award, BookOpen } from "lucide-react";
import * as motion from "framer-motion/client";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/>
      <path d="M9 18c-4.5 1.5-5-2.5-7-3"/>
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Portfolio() {
  const techStack = [
    "AWS", "EKS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", 
    "ArgoCD", "Prometheus", "Grafana", "Python", "Bash", "Linux"
  ];

  return (
    <main className="flex flex-col items-center min-h-screen overflow-x-hidden selection:bg-[#FF8E3E]/30 selection:text-white relative bg-[#000000]">
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none bg-dot-pattern" /> 

      <div className="w-full max-w-5xl flex flex-col items-start relative z-10 px-6 py-16 md:py-20">
        <AnimatedSection delay={0.1} className="py-0">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF5C2B]/30 bg-[#FF5C2B]/10 px-4 py-1.5 text-xs text-[#FF8E3E] font-mono tracking-wide shadow-[0_0_15px_rgba(255,92,43,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8E3E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8E3E]"></span>
              </span>
              SYSTEM ONLINE // AVAILABLE FOR HIRE
            </div>
            
            <div className="flex flex-col gap-2">
              <TextReveal 
                text="Mehmood Ul Haq" 
                as="h1"
                className="text-6xl md:text-8xl font-black tracking-tighter text-white/95" 
              />
              <TextReveal 
                text="DevOps & Cloud Engineer" 
                className="text-2xl md:text-4xl font-bold tracking-tight text-white/40" 
                delay={0.5} 
              />
            </div>

            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-white/60 font-sans mt-2">
              I architect, automate, and secure production-grade cloud infrastructure. 
              Specializing in scalable CI/CD pipelines, container orchestration, and resilient systems on AWS.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-4 font-mono text-sm text-white/50">
              <a href="mailto:mehmoodulhaq97@gmail.com" className="flex items-center gap-2 hover:text-[#FF8E3E] transition-colors"><Mail size={16}/> Email</a>
              <a href="https://github.com/mehmoodhaq7" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FF8E3E] transition-colors"><GithubIcon size={16}/> GitHub</a>
              <a href="https://linkedin.com/in/nednmehmoodhaq" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#FF8E3E] transition-colors"><LinkedinIcon size={16}/> LinkedIn</a>
              <span className="flex items-center gap-2 text-[#FF8E3E]"><MapPin size={16} className="text-[#FF8E3E]"/> Lahore, Pakistan</span>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="py-6">
           <InteractiveTerminal />
        </AnimatedSection>
      </div>

      <AnimatedSection className="w-full relative z-10 py-0 overflow-hidden border-t border-white/5 bg-black/50 backdrop-blur-md pb-0">
         <InfiniteMarquee items={techStack} />
      </AnimatedSection>

      <div className="w-full max-w-5xl flex flex-col items-start relative z-10 px-6 py-10 pb-24">
        <AnimatedSection className="mt-8">
          <div className="mb-10">
             <h2 className="text-4xl font-bold tracking-tight text-white/90">System Capabilities</h2>
             <p className="text-white/50 mt-2 font-mono text-sm leading-relaxed">01 // CORE_EXPERTISE</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 w-full h-auto">
             <div className="md:col-span-2 md:row-span-1 group relative flex flex-col justify-end gap-3 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md hover:border-[#FF5C2B]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FF5C2B]/5 to-transparent pointer-events-none" />
                <h3 className="z-10 text-2xl font-bold text-white tracking-tight group-hover:text-[#FF8E3E] transition-colors">Cloud Architecture (AWS)</h3>
                <p className="z-10 text-white/60 leading-relaxed font-sans mt-2">
                  Deep experience designing highly available architectures using EC2, VPC, IAM, S3, RDS, EKS, Lambda, and CloudWatch. Strong focus on security, observability, and cost-optimization.
                </p>
             </div>

             <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="md:col-span-1 md:row-span-2 group relative flex flex-col gap-6 p-8 rounded-2xl border border-[#FF5C2B]/20 bg-[#0a0a0a]/80 backdrop-blur-md hover:border-[#FF5C2B]/50 transition-all duration-500 justify-center items-center text-center overflow-hidden shadow-lg"
             >
                <div className="absolute top-0 right-0 p-32 bg-[#FF5C2B] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
                <Award className="w-16 h-16 text-[#FF8E3E] mb-2 z-10 drop-shadow-[0_0_15px_rgba(255,92,43,0.6)]" />
                <div className="z-10">
                   <h3 className="text-xl font-bold text-white tracking-tight">AWS Certified</h3>
                   <p className="text-[#FF8E3E] font-medium mt-1 drop-shadow-md">Solutions Architect</p>
                   <p className="text-sm text-white/40 mt-5 font-mono">Validation No:</p>
                   <p className="text-xs text-white/50 font-mono bg-white/5 py-1 px-2 rounded mt-1">Oacaca4f1dc348b0a</p>
                   <p className="text-xs text-[#FF8E3E] mt-4 uppercase tracking-widest bg-[#FF5C2B]/10 py-1.5 px-3 rounded-full inline-block border border-[#FF5C2B]/20">Feb 2026</p>
                </div>
             </motion.div>

             <div className="md:col-span-1 md:row-span-1 h-full">
                <TelemetryDash />
             </div>

             <div className="md:col-span-1 md:row-span-1 group relative flex flex-col justify-end gap-3 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md hover:border-[#FF5C2B]/30 transition-all duration-500">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF8E3E] transition-colors">CI/CD & DevSecOps</h3>
                <p className="text-white/60 text-sm leading-relaxed mt-1">Jenkins, GitHub Actions, ArgoCD, SonarQube, Trivy, Terrascan, Gitleaks, Prometheus, Grafana.</p>
             </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-20">
          <div className="mb-10 flex flex-col gap-2">
             <h2 className="text-4xl font-bold tracking-tight text-white/90">Production Systems</h2>
             <p className="text-white/50 font-mono text-sm leading-relaxed">02 // ARCHITECTURE_&_DEPLOYMENTS</p>
          </div>
          
          <div className="flex flex-col gap-8 w-full">
            <ProjectCard 
              title="BoardGame Enterprise Pipeline"
              description="Architected and deployed a full end-to-end CI/CD pipeline on AWS for a Java Spring Boot application. Automated build, test, multi-layer security scanning (Trivy, SonarQube, KubeAudit), artifact management via Nexus, and high availability containerization onto a self-managed Kubernetes cluster. Included full observability stack with Prometheus and Grafana."
              tags={["Jenkins", "Maven", "SonarQube", "Nexus", "Docker", "Kubernetes", "Prometheus", "Grafana", "AWS EC2"]}
              detailed
            />
            <ProjectCard 
              title="HiveBox End-to-End DevSecOps Ecosystem"
              description="Production-grade GitOps pipeline deployed on AWS EKS via Terraform. Provisioned complete VPC infrastructure with managed node groups. Implemented ArgoCD for declarative sync and self-healing. Integrated multi-layer DevSecOps (Dependabot, Trivy, SonarCloud, Terrascan) with distributed caching via Valkey and object storage with MinIO."
              tags={["Python", "Flask", "Helm", "Kustomize", "Terraform", "GitHub Actions", "Loki", "AWS EKS"]}
              detailed
            />
            <ProjectCard 
              title="AWS Infrastructure Automation"
              description="Provisioned a production-ready VPC with public subnets, Internet Gateways, and EC2 instances via Terraform. Automated complex IAM role creation using YAML-driven dynamic configurations with least-privilege principles. Deployed S3-hosted static applications securely utilizing custom modularized Terraform logic."
              tags={["Terraform", "AWS API", "HCL", "IAM", "VPC", "S3", "EC2"]}
              detailed
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <div className="mb-10 flex flex-col gap-2">
             <h2 className="text-4xl font-bold tracking-tight text-white/90">Education</h2>
             <p className="text-white/50 font-mono text-sm leading-relaxed">03 // ACADEMIC_BACKGROUND</p>
          </div>
          
          <div className="w-full flex flex-col md:flex-row items-start gap-6 p-8 md:p-10 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md relative overflow-hidden group hover:border-[#FF5C2B]/30 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 p-5 rounded-xl border border-white/10 bg-white/5 group-hover:bg-[#FF5C2B]/10 group-hover:text-[#FF8E3E] transition-colors duration-500 flex-shrink-0 group-hover:scale-110">
               <BookOpen className="text-white/60 group-hover:text-[#FF8E3E] transition-colors" size={32} />
            </div>
            <div className="relative z-10 flex flex-col w-full">
               <h3 className="text-2xl font-bold text-white tracking-tight">CECOS University of IT & Emerging Sciences</h3>
               <p className="text-[#FF8E3E] font-medium mt-2 text-lg">Bachelor of Science — Computer Science</p>
               <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-sm text-white/60 w-full">
                 <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md"><MapPin size={14}/> Peshawar, Pakistan</span>
                 <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">Graduated: Oct 2025</span>
                 <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md shadow-[0_0_10px_rgba(255,92,43,0.1)] text-[#FF8E3E]">CGPA: 3.2 / 4.0</span>
               </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full mt-24">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-10 md:p-16 rounded-3xl border border-[#FF5C2B]/30 bg-[#0A0A0A]/80 backdrop-blur-xl relative overflow-hidden group shadow-[0_0_50px_rgba(255,92,43,0.1)] hover:shadow-[0_0_80px_rgba(255,92,43,0.2)] transition-shadow duration-700">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF5C2B]/10 via-transparent to-[#FF5C2B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5C2B]/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF5C2B]/80 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-[1500ms] ease-in-out" />

              <div className="z-10 relative max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to fortify your cloud infrastructure?</h2>
                 <p className="text-white/60 text-xl flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Systems active. Available for immediate impact.
                 </p>
              </div>
              <a href="mailto:mehmoodulhaq97@gmail.com" className="z-10 mt-10 md:mt-0 flex items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-4 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,92,43,0.4)] hover:text-[#FF5C2B] active:scale-95 cursor-pointer">
                 Initialize Contact <ExternalLink size={20} />
              </a>
           </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
