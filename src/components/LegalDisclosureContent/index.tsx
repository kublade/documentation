import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function LegalDisclosureContent(): ReactNode {
  return (
    <section className={styles.content}>
      <div className={clsx('container', styles.contentContainer)}>
        <Heading as="h3" className="text--primary">General provider information</Heading>
        <p className="text--bold">
          IPvX UG (haftungsbeschränkt)
        </p>
        <p>
          Leopoldstraße 2-8<br />
          32051 Herford<br />
          Northrhein-Westphalia, Germany
        </p>
        <p>
          Trade register number: HRB 18977<br />
          Registry Court: Amtsgericht Bad Oeynhausen<br />
          Represented by: Marcel Menk
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>Contact</Heading>
        <p>
          Phone:   <a href="tel:+4952211411690">+49 (0) 5221 1411690</a><br />
          Fax:   <a href="tel:+4952211411699">+49 (0) 5221 1411699</a><br />
          Email:   <a href="mailto:hi@ipvx.io">hi@ipvx.io</a>
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>VAT ID</Heading>
        <p>
          DE361636567
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>Information pursuant to § 55 para. 2 RStV (German Interstate Broadcasting Agreement)</Heading>
        <p className="text--bold">
          Marcel Menk
        </p>
        <p>
          Leopoldstraße 2-8<br />
          32051 Herford<br />
          Northrhein-Westphalia, Germany
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>Consumer dispute resolution/universal arbitration board</Heading>
        <p>
          We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>Liability for content</Heading>
        <p>
        As a service provider, we are responsible for our own content on these pages in accordance with general legislation. In line with the applicable laws, including the Digital Services Act (DSA), we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general legislation remain unaffected. However, liability in this regard is only possible from the point in time at which we become aware of a specific legal violation. Upon becoming aware of such infringements, we will remove the content in question without delay.
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>Liability for links</Heading>
        <p>
          Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any legal infringements, we will remove such links immediately.
        </p>
        <Heading as="h3" className={clsx('text--primary', styles.sectionHeader)}>Copyright</Heading>
        <p>
          The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
        </p>
      </div>
    </section>
  );
}
