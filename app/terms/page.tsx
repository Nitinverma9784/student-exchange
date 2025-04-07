import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-brand-600">Terms and Conditions</h1>

      <div className="prose max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: April 6, 2025</p>

        <p className="mb-6">
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the StudyShare
          platform operated by StudyShare Inc.
        </p>

        <p className="mb-6">
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users, and others who access or use the Service.
        </p>

        <p className="mb-6">
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the
          terms, then you may not access the Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Accounts</h2>

        <p className="mb-4">
          When you create an account with us, you must provide information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account on our Service.
        </p>

        <p className="mb-4">
          You are responsible for safeguarding the password that you use to access the Service and for any activities or
          actions under your password, whether your password is with our Service or a third-party service.
        </p>

        <p className="mb-4">
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware
          of any breach of security or unauthorized use of your account.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Content</h2>

        <p className="mb-4">
          Our Service allows you to post, link, store, share, and otherwise make available certain information, text,
          graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or
          through the Service, including its legality, reliability, and appropriateness.
        </p>

        <p className="mb-4">By posting Content on or through the Service, you represent and warrant that:</p>

        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            The Content is yours (you own it) or you have the right to use it and grant us the rights and license as
            provided in these Terms.
          </li>
          <li className="mb-2">
            The posting of your Content on or through the Service does not violate the privacy rights, publicity rights,
            copyrights, contract rights, or any other rights of any person.
          </li>
          <li className="mb-2">The Content does not violate any applicable law, regulation, or rule.</li>
          <li className="mb-2">
            The Content does not contain material that is defamatory, obscene, indecent, abusive, offensive, harassing,
            violent, hateful, inflammatory, or otherwise objectionable.
          </li>
          <li className="mb-2">
            The Content does not include any unsolicited promotional materials, spam, chain letters, pyramid schemes, or
            any other form of solicitation.
          </li>
        </ul>

        <p className="mb-4">
          We reserve the right to terminate the account of any user found to be infringing on a copyright.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Academic Integrity</h2>

        <p className="mb-4">
          StudyShare is committed to maintaining the highest standards of academic integrity. Users are prohibited from:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Sharing materials that promote academic dishonesty or cheating.</li>
          <li className="mb-2">
            Uploading exam papers or solutions that are not publicly released by educational institutions.
          </li>
          <li className="mb-2">
            Posting content that violates the academic integrity policies of educational institutions.
          </li>
          <li className="mb-2">Using the platform to complete assignments or exams on behalf of other students.</li>
        </ul>

        <p className="mb-4">
          Violation of these academic integrity guidelines may result in immediate termination of your account and
          removal of all associated content.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Copyright Policy</h2>

        <p className="mb-4">
          We respect the intellectual property rights of others. It is our policy to respond to any claim that Content
          posted on the Service infringes on the copyright or other intellectual property rights of any person or
          entity.
        </p>

        <p className="mb-4">
          If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has
          been copied in a way that constitutes copyright infringement, please submit your claim via email to
          copyright@studyshare.com, with the subject line: "Copyright Infringement" and include in your claim a detailed
          description of the alleged infringement.
        </p>

        <p className="mb-4">
          You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or
          bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>

        <p className="mb-4">
          In no event shall StudyShare, nor its directors, employees, partners, agents, suppliers, or affiliates, be
          liable for any indirect, incidental, special, consequential, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Your access to or use of or inability to access or use the Service;</li>
          <li className="mb-2">Any conduct or content of any third party on the Service;</li>
          <li className="mb-2">Any content obtained from the Service; and</li>
          <li className="mb-2">
            Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
            contract, tort (including negligence), or any other legal theory, whether or not we have been informed of
            the possibility of such damage.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes</h2>

        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
          material change will be determined at our sole discretion.
        </p>

        <p className="mb-4">
          By continuing to access or use our Service after any revisions become effective, you agree to be bound by the
          revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>

        <p className="mb-6">
          If you have any questions about these Terms, please contact us at support@studyshare.com.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild className="bg-brand-600 hover:bg-brand-700">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

