import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, person, social } from "@/resources";
import styles from "@/components/about/about.module.scss";
import React from "react";

const CALENDAR_LINK = "https://calendly.com/hacksbynuman/30min";
const PAGE_TITLE = "Numan Rajkotiya";
const PAGE_DESCRIPTION =
  "Offensive security consultant specializing in identifying and exploiting real-world vulnerabilities.";

const heroLinks = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nmmcon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/nmmcon",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hacksbynmmcon@proton.me",
  },
];

/* ── Inline SVGs for each service card ── */
const ShieldSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const TargetSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>
);

const UsersSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CloudSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const LayersSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const LockSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const services = [
  {
    SvgIcon: ShieldSVG,
    title: "Penetration Testing",
    description:
      "Comprehensive security assessments of web applications, networks, APIs, and mobile applications to identify exploitable vulnerabilities before attackers do.",
    items: [
      "Web Application Testing",
      "Network Penetration Testing",
      "API Security Assessment",
      "Mobile App Testing",
    ],
  },
  {
    SvgIcon: TargetSVG,
    title: "Red Teaming",
    description:
      "Adversary simulation exercises that test your organization's detection and response capabilities against realistic attack scenarios.",
    items: [
      "Full-scope Red Team Operations",
      "Assumed Breach Scenarios",
      "Purple Team Exercises",
      "Detection Gap Analysis",
    ],
  },
  {
    SvgIcon: UsersSVG,
    title: "Social Engineering",
    description:
      "Test your human security layer through phishing campaigns, pretexting, and physical security assessments.",
    items: [
      "Phishing Simulations",
      "Vishing Campaigns",
      "Physical Security Testing",
      "Security Awareness Training",
    ],
  },
  {
    SvgIcon: CloudSVG,
    title: "Cloud Security",
    description:
      "Security assessment and hardening of cloud infrastructure across AWS, Azure, and GCP environments.",
    items: [
      "Cloud Configuration Review",
      "IAM Security Assessment",
      "Container Security",
      "Serverless Security Testing",
    ],
  },
  {
    SvgIcon: LayersSVG,
    title: "Threat Modelling",
    description:
      "Systematic analysis of your systems to identify potential threats, vulnerabilities, and attack vectors before they're exploited.",
    items: [
      "STRIDE Analysis",
      "Attack Tree Development",
      "Risk Prioritization",
      "Mitigation Roadmaps",
    ],
  },
  {
    SvgIcon: LockSVG,
    title: "Security Advisory",
    description:
      "Strategic security guidance and consulting to help build and mature your security program.",
    items: [
      "Security Program Development",
      "Vendor Security Reviews",
      "Incident Response Planning",
      "Compliance Guidance",
    ],
  },
];

const stats = [
  { value: "50+", label: "Engagements" },
  { value: "100%", label: "Client Retention" },
  { value: "24/7", label: "Availability" },
];

export async function generateMetadata() {
  return Meta.generate({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    baseURL: baseURL,
    path: "/",
  });
}

export default function About() {
  return (
    <Column fillWidth>
      <style>{`
        .hero-left {
          width: 30%;
          min-height: 100dvh;
          border-right: 1px solid var(--neutral-alpha-medium);
          flex-shrink: 0;
        }
        .hero-right {
          flex: 1;
          min-height: 100dvh;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }
        .cert-item {
          flex: 1 1 calc(33.333% - 12px);
          min-width: 200px;
        }
        @media (max-width: 768px) {
          .hero-left {
            width: 100%;
            min-height: auto;
            border-right: none;
            border-bottom: 1px solid var(--neutral-alpha-medium);
          }
          .hero-right {
            min-height: auto;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .cert-item {
            flex: 1 1 100%;
          }
          .section-padded {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-left {
            width: 35%;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cert-item {
            flex: 1 1 calc(50% - 8px);
          }
        }
      `}</style>

      <Schema
        as="webPage"
        baseURL={baseURL}
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/"
        author={{
          name: person.name,
          url: `${baseURL}/`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── HERO — full viewport, 30/70 split ── */}
      <Row
        fillWidth
        style={{ minHeight: "100dvh" }}
        s={{ direction: "column" }}
      >
        {/* ── LEFT 30% — profile ── */}
        <Column
          horizontal="center"
          vertical="center"
          gap="m"
          paddingX="l"
          paddingY="xl"
          className="hero-left"
        >
          <Avatar src={person.avatar} size="xl" />

          <Row gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            <Text variant="body-default-s" onBackground="neutral-weak">
              Pune / India
            </Text>
          </Row>

          {/* Social Icons — hardcoded */}
          <Row gap="8" wrap horizontal="center" fitWidth paddingTop="4">
            {heroLinks.map((item) => (
              <React.Fragment key={item.name}>
                <Row s={{ hide: true }}>
                  <Button
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    weight="default"
                    variant="secondary"
                  />
                </Row>
                <Row hide s={{ hide: false }}>
                  <IconButton
                    size="l"
                    href={item.link}
                    icon={item.icon}
                    variant="secondary"
                  />
                </Row>
              </React.Fragment>
            ))}
          </Row>
        </Column>

        {/* ── RIGHT 70% — bio content ── */}
        <Column
          vertical="center"
          gap="0"
          paddingX="xl"
          paddingY="xl"
          className="hero-right"
        >
          {/* Schedule Call pill */}
          <Row
            fitWidth
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            radius="full"
            padding="4"
            gap="8"
            vertical="center"
            marginBottom="l"
            style={{ backdropFilter: "blur(var(--static-space-1))" }}
          >
            <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
            <Row paddingX="8">Schedule a call</Row>
            <IconButton
              href={CALENDAR_LINK}
              data-border="rounded"
              variant="secondary"
              icon="chevronRight"
            />
          </Row>

          {/* Group 1 — Name + Role */}
          <Column gap="4" marginBottom="l">
            <Heading variant="display-strong-xl">
              Numan Rajkotiya
            </Heading>
            <Text variant="display-default-xs" onBackground="neutral-weak">
              Offensive Security Consultant
            </Text>
          </Column>

          {/* Group 2 — Bio */}
          <Column gap="8" marginBottom="l" style={{ maxWidth: "600px" }}>
            <Text variant="body-default-l">
              I help organizations secure their full attack surface — from external-facing applications and internal infrastructure to cloud environments and the human layer.
            </Text>
            <Text variant="body-default-l">
              Every engagement is scoped around your threat landscape and delivered with the depth your security posture actually requires.
            </Text>
          </Column>

          {/* Group 3 — Stats */}
          <Row gap="40" wrap fitWidth marginBottom="l">
            {stats.map((stat) => (
              <Column key={stat.label} gap="4">
                <Heading
                  variant="display-strong-m"
                  style={{ color: "var(--brand-strong)" }}
                >
                  {stat.value}
                </Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {stat.label}
                </Text>
              </Column>
            ))}
          </Row>

          {/* Scroll hint */}
          <Row fitWidth vertical="center" gap="8" style={{ opacity: 0.4 }}>
            <Icon name="chevronDown" size="s" onBackground="neutral-weak" />
            <Text variant="label-default-s" onBackground="neutral-weak">
              Scroll to explore
            </Text>
          </Row>
        </Column>
      </Row>

      {/* ── BELOW THE FOLD — Services ── */}
      <Column
        fillWidth
        paddingX="xl"
        paddingTop="xl"
        paddingBottom="xl"
        gap="l"
        className="section-padded"
      >
        <Column gap="8">
          <Heading as="h2" variant="display-strong-s">
            Services
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            On-demand security services tailored to your organization&apos;s needs
          </Text>
        </Column>

        <div className="services-grid">
          {services.map(({ SvgIcon, title, description, items }) => (
            <Column
              key={title}
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              radius="l"
              padding="24"
              gap="16"
              style={{
                backdropFilter: "blur(var(--static-space-1))",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Icon Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "var(--brand-alpha-weak)",
                  border: "1px solid var(--brand-alpha-medium)",
                  color: "var(--brand-on-background-weak)",
                  flexShrink: 0,
                }}
              >
                <SvgIcon />
              </div>

              <Heading as="h3" variant="heading-strong-m">
                {title}
              </Heading>

              <Text variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>

              <div style={{ height: "1px", background: "var(--neutral-alpha-medium)", width: "100%" }} />

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.2em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  listStyleType: "disc",
                }}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    style={{ color: "var(--brand-on-background-weak)", paddingLeft: "4px" }}
                  >
                    <span style={{ color: "var(--neutral-on-background-medium)", fontSize: "var(--font-size-body-s)", lineHeight: "var(--line-height-body-s)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Column>
          ))}
        </div>
      </Column>

      {/* ── WHY WORK WITH ME ── */}
      <Column
        fillWidth
        paddingX="xl"
        paddingTop="xl"
        paddingBottom="xl"
        gap="l"
        className="section-padded"
        style={{ borderTop: "1px solid var(--neutral-alpha-medium)" }}
      >
        <Column gap="8">
          <Heading as="h2" variant="display-strong-s">
            Why Work With Me
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The difference between a test that checks a box and one that actually reduces risk
          </Text>
        </Column>

        <Column
          fillWidth
          border="brand-alpha-medium"
          background="brand-alpha-weak"
          radius="l"
          padding="24"
          gap="8"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "220px", height: "220px", borderRadius: "50%",
            background: "radial-gradient(circle, var(--brand-alpha-medium) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <Text
            variant="display-default-xs"
            style={{ color: "var(--brand-on-background-weak)", fontStyle: "italic", maxWidth: "700px" }}
          >
            &ldquo;Security gaps only matter in context. I show you not just what&apos;s exposed, but how it gets exploited and what it costs you if it does.&rdquo;
          </Text>
        </Column>
      </Column>

      {/* ── CERTIFICATIONS & CREDENTIALS ── */}
      <Column
        fillWidth
        paddingX="xl"
        paddingTop="xl"
        paddingBottom="xl"
        gap="l"
        className="section-padded"
        style={{ borderTop: "1px solid var(--neutral-alpha-medium)" }}
      >
        <Column gap="8">
          <Heading as="h2" variant="display-strong-s">
            Certifications &amp; Credentials
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Industry-recognized qualifications backing every engagement
          </Text>
        </Column>

        <Row fillWidth gap="16" wrap>
          {[
            { name: "CISSP", full: "Certified Information Systems Security Professional", color: "#457b9d" },
            { name: "OSCP", full: "Offensive Security Certified Professional", color: "#e63946" },
            { name: "CRTP", full: "Certified Red Team Professional", color: "#e76f51" },
          ].map(({ name, full, color }) => (
            <Row
              key={name}
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              radius="l"
              padding="16"
              gap="16"
              vertical="center"
              className="cert-item"
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div
                style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: `${color}22`,
                  border: `1.5px solid ${color}66`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <Column gap="2">
                <Text variant="label-strong-m">{name}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">{full}</Text>
              </Column>
            </Row>
          ))}
        </Row>
      </Column>

      {/* ── CTA FOOTER ── */}
      <Column
        fillWidth
        paddingX="xl"
        paddingY="xl"
        horizontal="center"
        vertical="center"
        gap="l"
        className="section-padded"
        style={{
          borderTop: "1px solid var(--neutral-alpha-medium)",
          background: "var(--brand-alpha-weak)",
          textAlign: "center",
        }}
      >
        <Heading variant="display-strong-m" style={{ textAlign: "center" }}>
          Ready to test your defenses?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "480px", textAlign: "center" }}>
          Let&apos;s find your vulnerabilities before the attackers do. Reach out to discuss your security needs.
        </Text>
        <Row gap="12" wrap horizontal="center">
          <Button
            href={CALENDAR_LINK}
            prefixIcon="calendar"
            label="Schedule a Call"
            size="l"
            variant="primary"
          />
          <Button
            href="mailto:hacksbynmmcon@proton.me"
            prefixIcon="email"
            label="Send an Email"
            size="l"
            variant="secondary"
          />
        </Row>
      </Column>

    </Column>
  );
}