import GlobalPartnersHero from "@/components/GlobalPartnersHero/page";
import PartnerCatalog from "@/components/PartnerCatalog/page";
import PartnershipStrengths from "@/components/PartnershipStrengths/page";
import PartnerFAQ from "@/components/PartnerFaq/page";
import { CTASection } from "@/components/CtaSection/page";
import { CONTACT_INFO } from "@/lib/constants";

export default function GlobalPartnersPage() {
    return (
        <main>
            <GlobalPartnersHero />
            <PartnerCatalog />
            <PartnershipStrengths />
            <PartnerFAQ />
            {/* <CTASection /> */}
            <CTASection
                title="Become Our Partner"
                subtitle="Scaling your supply chain starts with the right alliance. Let's discuss your next collection."
                primaryButton={{
                    label: "Contact Us",
                    href: `mailto:${CONTACT_INFO.email}`,
                }}
                backgroundImage="https://i.postimg.cc/3NcsYzxX/multi-colored-garments-hanging-coathangers-boutique-store-generated-by-ai.jpg"
            />
        </main>
    );
}