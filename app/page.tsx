"use client";

import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MouseGlow } from "@/components/MouseGlow";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { TextReveal } from "@/components/TextReveal";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { CapabilityCard } from "@/components/CapabilityCard";
import {
  Mail,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Cloud,
  Box,
  GitBranch,
  Code2,
  ShieldCheck,
  Activity,
} from "lucide-react";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Portfolio() {
  const techStack = [
    "AWS",
    "EKS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "ArgoCD",
    "Prometheus",
    "Grafana",
    "Python",
    "Bash",
    "Linux",
  ];

  const capabilities = [
    {
      icon: Cloud,
      title: "Cloud Architecture (AWS)",
      description:
        "Secure, highly available AWS infrastructure across real projects — VPC, IAM, EKS, Lambda, RDS, CloudFront, CloudWatch.",
      tags: ["EC2", "VPC", "IAM", "S3", "EKS", "Lambda", "CloudWatch"],
    },
    {
      icon: Box,
      title: "Kubernetes & Containers",
      description:
        "Full lifecycle container orchestration — from Dockerfile to GitOps deployment on self-managed clusters and EKS.",
      tags: ["Kubernetes", "Docker", "Helm", "Kustomize", "ArgoCD", "EKS"],
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description:
        "Automated pipelines from commit to production — build, test, scan, and release in one workflow.",
      tags: ["Jenkins", "GitHub Actions", "ArgoCD", "Nexus"],
    },
    {
      icon: Code2,
      title: "Infrastructure as Code",
      description:
        "Terraform-driven provisioning with reusable modules — VPC, EC2, EKS, IAM fully versioned and automated.",
      tags: ["Terraform", "HCL", "AWS", "Reusable Modules"],
    },
    {
      icon: ShieldCheck,
      title: "DevSecOps",
      description:
        "Security at every pipeline stage — static analysis, container scanning, secret detection, and quality gates on every commit.",
      tags: ["SonarQube", "Trivy", "Terrascan", "Gitleaks", "Dependabot"],
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description:
        "Full-stack observability — custom metrics, Grafana dashboards, and Loki log aggregation.",
      tags: ["Prometheus", "Grafana", "Loki", "CloudWatch"],
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen overflow-x-hidden selection:bg-[#D96A36]/30 selection:text-white relative bg-[#000000]">
      <Navbar />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none bg-dot-pattern" />

      <div className="w-full max-w-5xl flex flex-col items-start relative z-10 px-6 py-16 md:py-20">
        <AnimatedSection delay={0.1} className="py-0">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B7410E]/30 bg-[#B7410E]/10 px-4 py-1.5 text-xs text-[#D96A36] font-mono tracking-wide shadow-[0_0_15px_rgba(255,92,43,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D96A36] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D96A36]"></span>
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
              I automate the gap between code and production — pipelines,
              containers, and cloud infrastructure that don&apos;t need
              babysitting.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-4 font-mono text-sm text-white/50">
              <a
                href="mailto:mehmoodulhaq97@gmail.com"
                className="flex items-center gap-2 hover:text-[#D96A36] transition-colors"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://github.com/mehmoodhaq7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D96A36] transition-colors"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/mehmoodhaq"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D96A36] transition-colors"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <span className="flex items-center gap-2 text-[#D96A36]">
                <MapPin size={16} className="text-[#D96A36]" /> Lahore, Pakistan
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-4">
          <InteractiveTerminal />
        </AnimatedSection>
      </div>

      <AnimatedSection className="w-full relative z-10 py-0 overflow-hidden border-t border-white/5 bg-black/50 backdrop-blur-md" delay={0.1}>
        <InfiniteMarquee items={techStack} />
      </AnimatedSection>

      <div className="w-full max-w-5xl flex flex-col items-start relative z-10 px-6 py-6 pb-16">
        {/* ── 01 // System Capabilities ── */}
        <section id="expertise" className="w-full scroll-mt-20">
          <AnimatedSection className="mt-4">
            <div className="mb-10">
              <h2 className="text-4xl font-bold tracking-tight text-white/90">
                System Capabilities
              </h2>
              <p className="text-white/50 mt-2 font-mono text-sm leading-relaxed">
                01 // CORE_EXPERTISE
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {capabilities.map((cap, index) => (
                <CapabilityCard
                  key={cap.title}
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                  tags={cap.tags}
                  index={index}
                />
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ── 02 // Certification ── */}
        <section id="certifications" className="w-full scroll-mt-20">
          <AnimatedSection className="mt-16" variant="fadeLeft">
            <div className="mb-6">
              <p className="text-white/50 font-mono text-sm leading-relaxed">
                02 // CERTIFICATION
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
              <Award size={22} className="text-[#D96A36] flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white tracking-tight whitespace-nowrap">
                  AWS Certified Solutions Architect – Associate
                </h3>
                <span className="text-xs text-white/40 font-mono truncate">
                  Validation: 0acaca4f1dc348b0a32293afbeb10bcf
                </span>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[10px] text-[#D96A36] uppercase tracking-widest bg-[#B7410E]/10 py-1 px-2.5 rounded-full border border-[#B7410E]/20 font-mono">
                  FEB 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-green-500">
                    Active
                  </span>
                </span>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── 03 // Production Systems ── */}
        <section id="projects" className="w-full scroll-mt-20">
          <AnimatedSection className="mt-16">
            <div className="mb-10 flex flex-col gap-2">
              <h2 className="text-4xl font-bold tracking-tight text-white/90">
                Production Systems
              </h2>
              <p className="text-white/50 font-mono text-sm leading-relaxed">
                03 // ARCHITECTURE_&_DEPLOYMENTS
              </p>
            </div>

            <div className="flex flex-col gap-8 w-full">
              <ProjectCard
                title="BoardGame Enterprise Pipeline"
                description="Architected and deployed a full end-to-end CI/CD pipeline on AWS for a Java Spring Boot application. Automated build, test, multi-layer security scanning (Trivy, SonarQube, KubeAudit), artifact management via Nexus, and high availability containerization onto a self-managed Kubernetes cluster. Included full observability stack with Prometheus and Grafana."
                tags={[
                  "Jenkins",
                  "Maven",
                  "SonarQube",
                  "Nexus",
                  "Docker",
                  "Trivy",
                  "Kubernetes",
                  "Prometheus",
                  "Grafana",
                  "AWS EC2",
                ]}
                githubUrl="https://github.com/mehmoodhaq7/boardgame-cicd-pipeline"
                index={0}
                detailed
              />
              <ProjectCard
                title="HiveBox End-to-End DevSecOps Ecosystem"
                description="Production-grade GitOps pipeline deployed on AWS EKS via Terraform. Provisioned complete VPC infrastructure with managed node groups. Implemented ArgoCD for declarative sync and self-healing. Integrated multi-layer DevSecOps (Dependabot, Trivy, SonarCloud, Terrascan) with distributed caching via Valkey and object storage with MinIO."
                tags={[
                  "Python",
                  "Terraform",
                  "AWS EKS",
                  "Helm",
                  "Kustomize",
                  "ArgoCD",
                  "GitHub Actions",
                  "Trivy",
                  "SonarCloud",
                  "Terrascan",
                  "Dependabot",
                  "Prometheus",
                  "Grafana",
                  "Loki",
                ]}
                githubUrl="https://github.com/mehmoodhaq7/hivebox"
                index={1}
                detailed
              />
              <ProjectCard
                title="AWS Infrastructure Automation"
                description="Provisioned a production-ready VPC with public subnets, Internet Gateways, and EC2 instances via Terraform. Automated complex IAM role creation using YAML-driven dynamic configurations with least-privilege principles. Deployed S3-hosted static applications securely utilizing custom modularized Terraform logic."
                tags={[
                  "Terraform",
                  "HCL",
                  "AWS VPC",
                  "EC2",
                  "IAM",
                  "S3",
                  "Reusable Modules",
                ]}
                githubUrl="https://github.com/mehmoodhaq7/Terraform_labs-projects"
                index={2}
                detailed
              />
            </div>
          </AnimatedSection>
        </section>

        {/* ── 04 // Education ── */}
        <AnimatedSection className="mt-16" variant="fadeScale">
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-4xl font-bold tracking-tight text-white/90">
              Education
            </h2>
            <p className="text-white/50 font-mono text-sm leading-relaxed">
              04 // ACADEMIC_BACKGROUND
            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-start gap-6 p-8 md:p-10 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md relative overflow-hidden group hover:border-[#B7410E]/30 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 p-5 rounded-xl border border-white/10 bg-white/5 group-hover:bg-[#B7410E]/10 group-hover:text-[#D96A36] transition-colors duration-500 flex-shrink-0 group-hover:scale-110">
              <BookOpen
                className="text-white/60 group-hover:text-[#D96A36] transition-colors"
                size={32}
              />
            </div>
            <div className="relative z-10 flex flex-col w-full">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                CECOS University of IT & Emerging Sciences
              </h3>
              <p className="text-[#D96A36] font-medium mt-2 text-lg">
                Bachelor of Science — Computer Science
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6 font-mono text-sm text-white/60 w-full">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">
                  <MapPin size={14} /> Peshawar, Pakistan
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">
                  Graduated: Oct 2025
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md shadow-[0_0_10px_rgba(255,92,43,0.1)] text-[#D96A36]">
                  CGPA: 3.2 / 4.0
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <section id="contact" className="w-full scroll-mt-20">
          <AnimatedSection className="w-full mt-16">
            <div className="flex flex-col gap-10 p-10 md:p-16 rounded-3xl border border-[#B7410E]/30 bg-[#0A0A0A]/80 backdrop-blur-xl relative overflow-hidden group shadow-[0_0_50px_rgba(255,92,43,0.1)] hover:shadow-[0_0_80px_rgba(255,92,43,0.2)] transition-shadow duration-700">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#B7410E]/10 via-transparent to-[#B7410E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7410E]/80 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#B7410E]/80 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-[1500ms] ease-in-out" />

              <div className="z-10 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                    Ready to fortify your cloud infrastructure?
                  </h2>
                  <p className="text-white/60 text-lg flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Systems active. Available for immediate impact.
                  </p>
                </div>
              </div>

              <div className="z-10 relative w-full">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </main>
  );
}
