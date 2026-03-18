import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import ProjectViewer from './components/ProjectViewer'
import ProjectAccess from './components/ProjectAccess'
import './App.css'

const SUPPORT_EMAIL = 'tanushsbuisness@gmail.com'
const LAST_UPDATED = 'March 17, 2026'
const DEVELOPER_NAME = 'Tanush Shrivastava'

const PRIVACY_SECTIONS = [
  {
    title: '1. Information We Collect',
    blocks: [
      {
        heading: 'Account Information',
        paragraphs: [
          'When you sign in to SiteSnap, you may use Sign in with Apple or Google Sign-In. Through these authentication methods and Firebase Authentication, we may receive limited account information such as your name, your email address, and a unique account identifier.',
          'We do not collect or store your password directly.',
        ],
      },
      {
        heading: 'Project and Photo Data',
        paragraphs: [
          'SiteSnap lets you create projects and organize job-site photos. Data you create may include project names, project details, photo metadata, timestamps, GPS location information, notes, tags, and other information you add while using the app.',
        ],
      },
      {
        heading: 'Subscription Information',
        paragraphs: [
          'SiteSnap offers paid monthly subscriptions through Apple’s App Store. Subscription status may be used to enable or limit access to paid features.',
          'We do not collect or store payment card numbers or billing details.',
        ],
      },
    ],
  },
  {
    title: '2. How We Use Information',
    paragraphs: [
      'We use information to authenticate your account, let you sign in and use SiteSnap, store and display your projects and photos, sync data across your devices, support sharing and export features, manage subscription-based access, maintain app security and functionality, and provide support when needed.',
      'We do not sell your personal information.',
    ],
  },
  {
    title: '3. How Information Is Stored',
    paragraphs: [
      'Authentication-related information is processed through Firebase Authentication and the sign-in provider you choose, such as Apple or Google.',
      'Project data and photos may be stored using Firebase services.',
      'Photos stored in Firebase are not intended to be publicly accessible through a public database or open website listing. Access is intended to occur through the client-side app experience and authorized app functionality.',
    ],
  },
  {
    title: '4. Third-Party Services',
    blocks: [
      {
        heading: 'Firebase',
        paragraphs: [
          'SiteSnap uses Firebase for authentication, storage, and related backend functionality.',
        ],
      },
      {
        heading: 'Sign in with Apple',
        paragraphs: [
          'If you use Sign in with Apple, Apple may provide a unique identifier and, depending on your settings, your email address and name.',
        ],
      },
      {
        heading: 'Google Sign-In',
        paragraphs: [
          'If you use Google Sign-In, Google may provide basic profile information such as your name and email address.',
        ],
      },
      {
        heading: 'Subscriptions and Billing',
        paragraphs: [
          'SiteSnap offers monthly subscriptions through Apple’s App Store and App Store Connect infrastructure.',
          'All purchases, renewals, cancellations, and billing transactions are processed through Apple.',
          'SiteSnap does not process payment cards directly and does not store full billing information.',
          'Apple may collect and process payment information according to its own privacy policies and terms.',
        ],
      },
    ],
  },
  {
    title: '5. Data Retention',
    paragraphs: [
      'We retain account-related information only as needed to provide authentication, app access, and related support.',
      'Projects and photos may remain stored until you delete them, delete your account, or the data is otherwise removed through app functionality or our systems.',
      'If your account is deleted upon request, your authentication access to SiteSnap will be removed, and we will take reasonable steps to delete associated account data under our control, subject to technical, legal, and operational constraints.',
    ],
  },
  {
    title: '6. Account Deletion',
    paragraphs: [
      'At this time, SiteSnap does not provide an in-app self-service account deletion feature.',
      `If you would like your account deleted, you may contact us at ${SUPPORT_EMAIL}. Upon request, we can delete your account from Firebase on our side.`,
      'Deleting your account may remove your ability to sign in and may result in deletion of associated data under our control, including stored project and photo data tied to that account, subject to technical limitations and backup retention windows.',
    ],
  },
  {
    title: '7. Data Sharing',
    paragraphs: [
      'We do not sell, rent, or share your personal information with third parties for advertising or marketing purposes.',
      'We rely on third-party providers only as necessary to operate SiteSnap, such as Apple, Google, and Firebase.',
    ],
  },
  {
    title: '8. Advertising',
    paragraphs: [
      'SiteSnap does not display third-party advertising in the app.',
      'Because SiteSnap does not serve ads, this policy does not describe ad targeting, ad personalization, or ad measurement practices for the app.',
    ],
  },
  {
    title: '9. Security',
    paragraphs: [
      'We take reasonable measures to protect information used by the app. However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '10. Children’s Privacy',
    paragraphs: [
      'SiteSnap is not directed to children under 13, and we do not knowingly collect personal information from children under 13.',
      'If we become aware that we have collected personal information from a child under 13, we will take reasonable steps to delete it.',
    ],
  },
  {
    title: '11. International Users',
    paragraphs: [
      'If you use the app outside your home country, your information may be processed in countries where our service providers operate.',
    ],
  },
  {
    title: '12. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. If we make changes, we will update the “Last Updated” date above.',
      'Your continued use of SiteSnap after changes become effective means you accept the revised Privacy Policy.',
    ],
  },
  {
    title: '13. Contact Us',
    paragraphs: [
      'If you have questions about this Privacy Policy or would like to request account deletion, contact us at:',
    ],
    contactEmail: SUPPORT_EMAIL,
  },
]

const TERMS_SECTIONS = [
  {
    title: '1. Use of the App',
    paragraphs: [
      'SiteSnap is a mobile application designed to help users capture, organize, manage, and share job-site photos and project records.',
      'You may use the app only in compliance with these Terms and all applicable laws.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'You must be legally permitted to use the app under the laws of your jurisdiction.',
      'If you are under the age required to enter into a binding agreement in your jurisdiction, you may use the app only with appropriate permission from a parent or legal guardian.',
    ],
  },
  {
    title: '3. Accounts and Authentication',
    paragraphs: [
      'To access certain features, you may need to sign in using Sign in with Apple or Google Sign-In.',
      'Authentication is managed through Firebase.',
      'You are responsible for maintaining the security of your chosen sign-in account and for any activity associated with it.',
    ],
  },
  {
    title: '4. User Data and Content',
    paragraphs: [
      'You may create and store projects, photos, notes, tags, and related records within the app. You are responsible for the content you create, upload, and manage.',
      'You represent that you have the rights and permissions needed for any content you upload or share through SiteSnap.',
      'You are responsible for maintaining your own backups and for reviewing the accuracy of any project record, timestamp, location data, note, or exported material before relying on it.',
    ],
  },
  {
    title: '5. Acceptable Use',
    list: [
      'Use the app in violation of any law or regulation',
      'Attempt to interfere with or disrupt the app or related systems',
      'Attempt to gain unauthorized access to any account, service, or data',
      'Upload or share content that infringes the rights of others or violates applicable law',
      'Use the app in a way that could harm the developer, the app, or other users',
    ],
    intro: 'You agree not to:',
  },
  {
    title: '6. Account Deletion and Termination',
    paragraphs: [
      `At this time, users cannot delete their accounts directly from within the app. If you want your account deleted, you may contact us at ${SUPPORT_EMAIL}, and we may delete your account from Firebase on our side.`,
      'We may suspend or terminate access to the app if necessary for security, abuse prevention, legal compliance, technical reasons, or non-payment of subscription fees handled through the App Store.',
    ],
  },
  {
    title: '7. Availability and Changes',
    paragraphs: [
      'We may modify, update, suspend, or discontinue all or part of the app at any time, with or without notice.',
      'We do not guarantee that the app will always be available, error-free, or uninterrupted.',
    ],
  },
  {
    title: '8. Payments and Subscriptions',
    paragraphs: [
      'SiteSnap may offer monthly auto-renewing subscriptions through Apple’s App Store.',
      'All purchases are processed through Apple’s App Store payment system. Payment transactions are subject to Apple’s terms and conditions.',
      'Subscription billing, renewals, cancellations, and refunds are handled by Apple according to App Store policies.',
      'SiteSnap does not store or process payment card information directly.',
    ],
  },
  {
    title: '9. No Professional Advice',
    paragraphs: [
      'SiteSnap is provided as a documentation and organizational tool only. It does not provide legal, construction, engineering, inspection, safety, or professional advice.',
      'You are solely responsible for reviewing and verifying any photo, note, timestamp, location data, project record, or export before using it in real-world decisions, disputes, reports, or compliance workflows.',
    ],
  },
  {
    title: '10. Disclaimer of Warranties',
    paragraphs: [
      'The app is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.',
      'To the fullest extent permitted by law, we disclaim all warranties, including warranties of merchantability, fitness for a particular purpose, non-infringement, and availability.',
    ],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
      `To the fullest extent permitted by law, ${DEVELOPER_NAME} will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, revenue, business, or use arising out of or related to your use of the app.`,
      'Your use of the app is at your own risk.',
    ],
  },
  {
    title: '12. Third-Party Services',
    paragraphs: [
      'The app may rely on third-party services, including Apple, Google, and Firebase. We are not responsible for the availability, accuracy, or practices of third-party services.',
      'Your use of those services may also be governed by their own terms and policies.',
    ],
  },
  {
    title: '13. Intellectual Property',
    paragraphs: [
      `All rights, title, and interest in and to SiteSnap, excluding user-created content, are owned by ${DEVELOPER_NAME} or its licensors.`,
      'You may not copy, modify, distribute, sell, reverse engineer, or exploit any part of the app except as allowed by law.',
    ],
  },
  {
    title: '14. Changes to These Terms',
    paragraphs: [
      'We may update these Terms from time to time. If we do, we will update the “Last Updated” date above.',
      'Your continued use of the app after updated Terms become effective means you accept the revised Terms.',
    ],
  },
  {
    title: '15. Governing Law',
    paragraphs: [
      `These Terms are governed by the laws of the jurisdiction in which ${DEVELOPER_NAME} operates, without regard to conflict of law principles.`,
    ],
  },
  {
    title: '16. Contact',
    paragraphs: ['If you have questions about these Terms, contact:'],
    contactEmail: SUPPORT_EMAIL,
  },
]

function Nav({ legalMode = false }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a className="nav-brand nav-brand-link" href="/" aria-label="SiteSnap home">
          <img src="/logo.png" alt="SiteSnap" className="nav-logo" />
          <span className="nav-name">SiteSnap</span>
        </a>
        {legalMode ? (
          <div className="legal-nav-links">
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms-of-service">Terms</a>
            <a href="/account-deletion">Account deletion</a>
          </div>
        ) : (
          <div className="nav-actions">
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-cta" href="#download">
              Download
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

function LegalSection({ section }) {
  return (
    <section className="legal-section">
      <h2>{section.title}</h2>
      {section.intro ? <p>{section.intro}</p> : null}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.blocks?.map((block) => (
        <div key={block.heading} className="legal-block">
          <h3>{block.heading}</h3>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}
      {section.list ? (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.contactEmail ? (
        <p>
          <a className="legal-link" href={`mailto:${section.contactEmail}`}>
            {section.contactEmail}
          </a>
        </p>
      ) : null}
    </section>
  )
}

function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <div className="legal-page">
      <Nav legalMode />
      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-shell">
            <div className="legal-eyebrow">{eyebrow}</div>
            <h1 className="legal-title">{title}</h1>
            <div className="legal-meta">Last Updated: {LAST_UPDATED}</div>
            <p className="legal-intro">{intro}</p>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy Policy for SiteSnap"
      intro="SiteSnap (“SiteSnap,” “the App,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how information is collected, used, stored, and disclosed when you use the SiteSnap mobile application on iOS and iPadOS. By using SiteSnap, you agree to this Privacy Policy."
    >
      {PRIVACY_SECTIONS.map((section) => (
        <LegalSection key={section.title} section={section} />
      ))}
    </LegalLayout>
  )
}

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="Terms of Service for SiteSnap"
      intro="These Terms of Service (“Terms”) govern your use of the SiteSnap mobile application on iOS and iPadOS. By downloading, accessing, or using SiteSnap, you agree to these Terms. If you do not agree, do not use the app."
    >
      {TERMS_SECTIONS.map((section) => (
        <LegalSection key={section.title} section={section} />
      ))}
    </LegalLayout>
  )
}

function AccountDeletionPage() {
  return (
    <LegalLayout
      eyebrow="Account Deletion"
      title="Account Deletion / Privacy Choices for SiteSnap"
      intro="This page explains how SiteSnap users can request account deletion or ask questions about privacy choices."
    >
      <section className="legal-section">
        <h2>Account Deletion</h2>
        <p>At this time, SiteSnap does not support in-app self-service account deletion.</p>
        <p>If you would like your account deleted, please send a request to:</p>
        <p>
          <a className="legal-link" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>Please include the email address associated with your SiteSnap account.</p>
        <p>Once your request is processed, your account can be deleted from Firebase on our side.</p>
      </section>

      <section className="legal-section">
        <h2>What Happens When Your Account Is Deleted</h2>
        <p>When your account is deleted:</p>
        <ul>
          <li>your authentication access to SiteSnap will be removed</li>
          <li>you will no longer be able to sign in using that deleted account for SiteSnap unless a new account is created later</li>
          <li>data associated with that account that is under our control may be deleted, including stored projects and photos, subject to technical limitations and backup retention windows</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>Other Privacy Requests</h2>
        <p>If you have questions about your data or privacy choices, contact:</p>
        <p>
          <a className="legal-link" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          For more information, please review our{' '}
          <a className="legal-link" href="/privacy-policy">
            Privacy Policy
          </a>{' '}
          and our{' '}
          <a className="legal-link" href="/terms-of-service">
            Terms of Service
          </a>.
        </p>
      </section>
    </LegalLayout>
  )
}

function HomePage() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <ProjectAccess />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  )
}

function NotFoundPage() {
  return (
    <LegalLayout
      eyebrow="404"
      title="Page not found"
      intro="The page you requested does not exist. You can return to the SiteSnap homepage or use the legal links below."
    >
      <section className="legal-section">
        <p>
          <a className="legal-home-link" href="/">
            Back to home
          </a>
        </p>
      </section>
    </LegalLayout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectViewer />} />
        <Route path="/project/:token" element={<ProjectViewer />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms-of-service" element={<TermsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
