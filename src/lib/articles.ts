export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  wide?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'ai-everyday-life-european-perspective',
    title: 'AI in Everyday Life: Smart Tool or Artificial Threat? A European Perspective',
    excerpt: 'ChatGPT has sparked debate across Europe, from classrooms in Lyon to policy halls in Brussels. This article examines the benefits, limits and regulatory challenges of AI in the European context.',
    tag: 'AI',
    tagColor: 'violet',
    date: 'November 9, 2026',
    readTime: '5 min',
    author: 'Maxime Martin',
    content: `
<h2>Introduction</h2>
<p>Artificial intelligence is no longer a futuristic concept – it is part of daily life across Europe. From the way we shop on Amazon to how doctors in Berlin diagnose disease, AI tools such as OpenAI’s ChatGPT are reshaping work, education and public services. Yet the rapid diffusion of generative AI raises questions that are uniquely European: how do we balance innovation with the EU’s strong data‑privacy culture, and what role should the upcoming AI Act play in schools and businesses? This article rewrites a recent French piece for an English‑speaking European audience, highlighting the opportunities, the pitfalls and the policy response that could shape the continent’s AI future.</p>
<hr>
<h2>Testing ChatGPT: A Sample Dissertation Outline</h2>
<p>To illustrate the capabilities of the tool, we asked ChatGPT to draft a dissertation plan on &quot;The Place of Artificial Intelligence in Contemporary Society&quot;. The model produced a clear three‑part structure:</p>
<p><strong>Introduction</strong> – definition, growing importance, roadmap.</p>
<p><strong>I. Benefits</strong> – industry efficiency, medical breakthroughs, transport safety.</p>
<p><strong>II. Limits</strong> – job displacement, privacy and data‑protection concerns, surveillance risks.</p>
<p><strong>III. Challenges</strong> – economic opportunities, regulatory needs, education and skills.</p>
<p><strong>Conclusion</strong> – synthesis, call for responsible use.</p>
<p>The outline is well‑structured, but the model itself offered a self‑critique, noting that it could have expanded on sectors such as energy, agriculture and the environment, added nuance to the discussion of risks, and provided concrete examples of European policy initiatives.</p>
<hr>
<h2>Why European Educators Are Worried</h2>
<p>The headline that grabbed European media this spring was that half of a Lyon university cohort had used ChatGPT to complete a take‑home assignment. The professor, bewildered, gave the AI a grade of 11.75/20. The incident mirrors earlier anxieties when the internet and Wikipedia first entered classrooms. Yet the EU’s response differs because of its tradition of strong public oversight and a growing regulatory framework.</p>
<h3>The Risk of Academic Dishonesty</h3>
<p>AI‑generated text can be indistinguishable from a diligent student’s work. Some universities in France, the United Kingdom and the United States have already banned the use of ChatGPT for assessments. In Europe, the response has been more measured: institutions are investing in detection tools, revising assessment design to emphasise oral presentations, collaborative projects and in‑exam writing that limits the chance of covert AI assistance.</p>
<h3>Disinformation and Plagiarism</h3>
<p>Beyond cheating, generative AI can produce plausible but false information, a problem amplified by the EU’s commitment to combatting misinformation. When ChatGPT fabricates sources or cites outdated research, students may inadvertently propagate errors. European media literacy programmes now include modules on AI‑generated content, teaching learners to fact‑check, cross‑reference sources and question the provenance of any claim.</p>
<hr>
<h2>The European Regulatory Landscape</h2>
<p>The European Union is pioneering a comprehensive approach to AI governance. The proposed <strong>AI Act</strong> classifies AI systems into risk categories and imposes transparency, accountability and conformity‑assessment obligations on high‑risk applications – including those used in education and public administration.</p>
<ul>
<li><strong>Transparency</strong>: AI tools must disclose that they are non‑human and provide users with information about the data and algorithms behind the output.</li>
<li><strong>Data Governance</strong>: The General Data Protection Regulation (GDPR) already limits the processing of personal data, and the AI Act will extend safeguards to biometric and profiling systems.</li>
<li><strong>Human Oversight</strong>: High‑risk AI must allow for meaningful human intervention, ensuring that teachers retain final authority over grading and feedback.</li>
</ul>
<p>These rules aim to preserve the benefits of AI while protecting fundamental European values such as privacy, fairness and democratic participation.</p>
<hr>
<h2>Practical Recommendations for European Schools</h2>
<ol>
<li><strong>Integrate AI Literacy</strong> – Curriculum designers should embed modules that explain how large language models work, their limitations and ethical implications. The European Commission’s <em>Digital Education Action Plan</em> provides resources for teachers.</li>
<li><strong>Adopt AI‑Assisted Assessment</strong> – Rather than banning AI outright, schools can use it as a supportive tool for drafting feedback, spotting plagiarism or generating personalised learning pathways.</li>
<li><strong>Promote Collaborative Projects</strong> – Group‑based tasks that require real‑time interaction reduce the incentive to rely solely on AI and foster critical thinking.</li>
<li><strong>Leverage Detection Software</strong> – Solutions such as Turnitin’s AI‑detector or open‑source classifiers can flag suspicious submissions, but they should be used as a starting point for dialogue, not punitive enforcement.</li>
<li><strong>Encourage Open‑Source Alternatives</strong> – European research institutions are developing locally hosted models that comply with GDPR, offering a sovereign alternative to US‑based services.</li>
</ol>
<hr>
<h2>The Broader Societal Impact</h2>
<p>AI’s influence extends far beyond the classroom. In the European Union, AI is already driving efficiency in manufacturing hubs in Italy’s Lombardy region, improving diagnostic imaging in Dutch hospitals, and optimising traffic flow in Barcelona’s smart‑city initiatives. However, the same technology can exacerbate inequalities if access is uneven or if biased datasets reinforce existing disparities.</p>
<p>The EU’s emphasis on <strong>responsible AI</strong> seeks to ensure that the technology serves the public good. Initiatives such as the <em>European AI Alliance</em> bring together industry, academia and civil society to co‑design standards that reflect European cultural diversity and social welfare priorities.</p>
<hr>
<h2>Conclusion</h2>
<p>ChatGPT demonstrates both the promise and the perils of generative AI. In Europe, the conversation is not limited to whether the tool can write a dissertation; it is about how societies can harness AI responsibly while safeguarding privacy, transparency and democratic values. By embedding AI literacy in education, adopting proportionate regulation through the AI Act, and fostering a culture of critical inquiry, Europe can turn what might be seen as an artificial threat into a truly intelligent ally for the continent’s future.</p>
<hr>
<p><em>For further reading on combating misinformation and developing good digital practices, visit Numérique Éthique’s dedicated learning pathway.</em></p>

    `,
  },
  {
    slug: 'european-developers-embrace-ai-agents-github-pull-requests',
    title: 'European Developers Embrace AI Agents as They Power Over 40% of GitHub Pull Requests',
    excerpt: 'GitHub’s Octoverse 2026 report shows that AI‑generated drafts now start more than 40 % of pull requests, a trend that is reshaping software development across the continent. European teams are adopting Copilot’s agentic features at record speed, while navigating new EU AI regulations and security standards.',
    tag: 'AI',
    tagColor: 'violet',
    date: 'November 9, 2026',
    readTime: '5 min',
    author: 'Maxime Martin',
    content: `
<h2>Surge of AI‑Generated Pull Requests Across Europe</h2>
<p>GitHub’s latest Octoverse 2026 report reveals that <strong>over 40 % of pull requests in September 2026 began as drafts created by AI agents</strong>, up from just 17 % in March. That translates to <strong>110 million agent‑started pull requests in a single month</strong>, roughly six times the volume recorded earlier in the year. The data, collected from October 1 2025 to September 30 2026, reflects a rapid shift in how European developers write, review, and merge code.</p>
<h2>Agents Tackling Complex Code Across the Continent</h2>
<p>The report highlights that <strong>87 % of AI‑initiated pull requests touched multiple files</strong>, compared with 79 % for human‑only submissions. This suggests that agents are increasingly being trusted with larger, more intricate changes—something that resonates with the needs of European enterprises handling multilingual applications, fintech platforms, and regulated data pipelines.</p>
<p>Mergers are also speeding up: the proportion of agent‑involved pull requests merged within two weeks rose from <strong>83 % in February to 90 % in September</strong>, while non‑agent pull requests hovered around 86 %. Although the metric measures speed rather than code quality, it signals that European teams are gaining confidence in AI‑driven workflows.</p>
<h2>Copilot’s Agentic Features Gain Traction in EU Workforces</h2>
<p>GitHub reports that <strong>55 % of monthly active Copilot users now employ agentic capabilities</strong>, a jump from 35 % a year earlier. The cloud‑agent, which lets developers assign autonomous tasks to an AI, saw a <strong>230 % year‑over‑year increase</strong>, and agent‑chat usage grew <strong>85 %</strong>.</p>
<p>For European developers, this growth aligns with a broader push toward remote‑first collaboration. Copilot Projects, now in public preview, lets teams coordinate agents across multiple repositories while feeding context from design documents, Slack channels, and meeting notes—features that dovetail with the EU’s emphasis on transparent, auditable development processes.</p>
<h2>New Collaboration Tools Boost European Teams</h2>
<p>GitHub’s <strong>stacked pull requests</strong> feature, introduced in public preview in July and made generally available on October 6, has already been adopted by more than <strong>264 000 developers</strong>. By breaking large changes into smaller, reviewable units, the feature helped repositories using it achieve a <strong>9 % increase in merged code</strong> compared with peers during the preview period. Notably, <strong>over two‑thirds of the top 1 % of repositories</strong>—many belonging to European SaaS providers and research institutions—have adopted stacked pull requests, reporting a <strong>5 % reduction in time‑to‑merge</strong>.</p>
<p>David Mostoller, a software engineer at Comcast, praised the impact on collaborative reviews, a sentiment echoed by many EU‑based teams that value rapid yet rigorous code inspection.</p>
<h2>Security and Maintenance Tools Strengthen EU Codebases</h2>
<p>AI‑assisted code review and <strong>GitHub Advanced Security</strong> both grew by more than <strong>90 % year‑over‑year</strong>, reflecting heightened security awareness across the continent, especially in light of the EU’s <strong>Cybersecurity Act</strong> and upcoming <strong>AI Act</strong> provisions.</p>
<p>Developers merged <strong>over 30 million Dependabot pull requests</strong>, roughly double the 2025 volume, automating dependency updates and mitigating known vulnerabilities. Additionally, the <strong>agentic autofix</strong> feature, generally available from October 15, lets developers assign up to 25 code‑scanning alerts to Copilot. The AI then proposes fixes, re‑runs CodeQL for validation, and opens a draft pull request with a detailed explanation. This capability is currently available to eligible GitHub Enterprise Cloud customers, many of which are large European enterprises subject to strict compliance regimes.</p>
<h2>Looking Ahead: European AI Regulations and Developer Practices</h2>
<p>The surge in AI‑driven development coincides with the EU’s <strong>Artificial Intelligence Act</strong>, which will soon impose transparency, risk‑assessment, and documentation requirements on high‑risk AI systems—including code‑generation agents used in production environments. European developers are therefore beginning to embed logging, model‑explainability, and human‑in‑the‑loop safeguards into their CI/CD pipelines.</p>
<p>GitHub’s new <strong>Copilot approvals</strong> feature—allowing AI‑generated approvals to count toward repository policies—offers administrators the ability to restrict which file paths the AI may approve, a useful control for organizations navigating the AI Act’s conformity obligations.</p>
<h2>Events and Resources for the European Community</h2>
<p>Developers interested in deepening their understanding of AI‑augmented development can attend the <strong>AI &amp; Big Data Expo</strong>, taking place in <strong>Amsterdam, London, and Berlin</strong> later this year. The event, co‑located with TechEx, will showcase sessions on machine‑learning pipelines, AI‑driven security, and compliance strategies for the EU market.</p>
<p>For further reading, see GitHub’s full Octoverse 2026 report and the related analysis on why many AI agents never progress beyond the demo stage.</p>
<hr>
<p><em>Photo by Roman Synkevych</em></p>

    `,
  },
  {
    slug: 'revolut-valuation-jumps-53-percent-115b-us-bank',
    title: 'Revolut\'s Valuation Soars 53% to $115B Ahead of US Bank Launch',
    excerpt: 'Revolut\'s latest share sale lifted its valuation by 53% to $115 billion, underscoring investor confidence as the fintech prepares to roll out a full-service bank in the United States.',
    tag: 'Deep Tech',
    tagColor: 'violet',
    date: 'November 8, 2026',
    readTime: '8 min',
    author: 'Maxime Martin',
    featured: true,
    content: `
<p class="dropcap">Revolut, the London-based fintech that started as a prepaid card app in 2015, has once again captured headlines. In a fresh private-placement share sale, the company's valuation jumped <strong>53 percent</strong>, landing at a staggering <strong>$115 billion</strong>—a figure that now places it among the world's most valuable private fintechs.</p>

<h2>Why the Valuation Spike Matters</h2>
<p>The valuation surge reflects a confluence of strategic milestones:</p>
<ul>
  <li><strong>US Banking License in Sight</strong> – Revolut has been courting U.S. regulators for a full-service banking charter, which would allow FDIC-insured deposits, credit cards, and loans.</li>
  <li><strong>Revenue Diversification</strong> – The company has expanded into wealth management, crypto trading, and business accounts.</li>
  <li><strong>User Base Growth</strong> – The platform now boasts over 40 million customers worldwide.</li>
  <li><strong>Operational Scale</strong> – Recent cost-efficiency initiatives have improved margins significantly.</li>
</ul>

<h2>Who's Backing the Bet?</h2>
<p>The share sale was anchored by three prominent names:</p>
<ul>
  <li><strong>Glade Brook</strong> – A venture capital firm known for backing early-stage fintech disruptors.</li>
  <li><strong>Coatue Management</strong> – The technology-focused hedge fund has a track record of investing in high-growth digital platforms.</li>
  <li><strong>T. Rowe Price</strong> – The asset-management giant brings a long-term institutional perspective.</li>
</ul>

<h2>The U.S. Bank Launch: A Game-Changer</h2>
<p>Launching a bank in the United States involves navigating federal and state regulations, obtaining a charter from the OCC, and securing FDIC insurance. Revolut's strategy appears to be a dual-track approach: partnering with existing banks initially while pursuing a direct charter.</p>

<h2>Competitive Landscape</h2>
<p>While impressive, Revolut faces several headwinds including regulatory scrutiny, market saturation from PayPal, Square, and Robinhood, and profitability pressure. Nevertheless, the backing of major investors suggests the risk-reward calculus still leans toward upside.</p>
    `,
  },
  {
    slug: 'humanoid-robot-cleaning-apartment-future',
    title: 'I Watched a Humanoid Robot Clean My Apartment: A Taste of the Future',
    excerpt: 'A frugal podcaster tried a new humanoid-robot cleaning service in San Francisco and was surprised by the seamless blend of tech and domestic chores.',
    tag: 'AI',
    tagColor: 'pink',
    date: 'November 8, 2026',
    readTime: '6 min',
    author: 'Maxime Martin',
    content: `
<p class="dropcap">When I first saw the X post about a new humanoid-robot cleaning service launching in San Francisco, my immediate reaction was skepticism. I'm the kind of person who clings to a Magic Eraser and a strong sense of frugality. Yet curiosity got the better of me, and I signed up for a trial.</p>

<h2>The Arrival</h2>
<p>The robot arrived in a sleek, matte-black box that looked more like a piece of modern art than a cleaning appliance. Inside was a compact, bipedal machine with articulated joints, a soft-touch silicone exterior, and a small screen displaying a friendly animated face.</p>

<h2>First Impressions</h2>
<p>Within seconds, the robot stood up, performed a quick self-diagnostic, and began scanning the room with lidar and depth cameras. The first thing that struck me was the quiet operation—unlike traditional vacuums, it moved with a soft, almost inaudible hum.</p>

<h2>The Human-Like Touch</h2>
<p>What truly set the experience apart was the robot's humanoid behavior. When it encountered a pile of laundry, it paused, tilted its head, and used its hands to pick up each item. The robot even responded to voice commands with a polite nod on its screen.</p>

<h2>Performance Evaluation</h2>
<ul>
  <li><strong>Speed:</strong> Full apartment clean in about 45 minutes</li>
  <li><strong>Quality:</strong> Floors spotless, countertops gleaming, even hard-to-reach corners dust-free</li>
  <li><strong>Energy:</strong> Rechargeable battery lasts a full cleaning cycle</li>
</ul>

<h2>The Bigger Picture</h2>
<p>Watching a humanoid robot handle mundane chores feels like a glimpse into a future where AI-powered assistants become an extension of our daily lives. The technology combines advances in computer vision, natural language processing, and robotics that were once confined to research labs.</p>

<p><strong>Bottom line:</strong> The future of home maintenance is already here, and it walks on two legs, smiles on a screen, and leaves your floors sparkling.</p>
    `,
  },
  {
    slug: 'london-tech-week-2026-european-ai',
    title: 'Preview: London Tech Week 2026 — European AI & Sovereign Tech',
    excerpt: 'Key European AI companies to watch, who we want to interview, and the sovereign infrastructure themes we\'ll track on the ground.',
    tag: 'Event Preview',
    tagColor: 'orange',
    date: 'February 18, 2026',
    readTime: '8 min',
    author: 'Maxime Martin',
    content: `
      <p class="dropcap">London Tech Week 2026 arrives at a pivotal moment for European AI. With the AI Act now in full effect and sovereign infrastructure becoming a competitive advantage, this year's event promises to showcase the next generation of European deep tech.</p>
      
      <h2>Companies We're Watching</h2>
      <p>This year, our focus is on companies building production-ready AI systems that can operate within European regulatory frameworks while delivering enterprise-grade performance.</p>
      
      <h3>Mistral AI</h3>
      <p>The Paris-based lab has become Europe's flagship AI company. Their latest models demonstrate that efficiency and performance aren't mutually exclusive. We're particularly interested in their enterprise deployment strategies and how they're helping companies navigate AI Act compliance.</p>
      
      <h3>Aleph Alpha</h3>
      <p>Germany's sovereign AI champion continues to push the boundaries of what's possible with European-hosted, GDPR-compliant AI systems. Their work with government agencies offers a blueprint for sovereign AI deployment.</p>
      
      <h2>Key Themes We'll Track</h2>
      <ul>
        <li><strong>Sovereign Infrastructure:</strong> How are European companies building AI systems that don't depend on US hyperscalers?</li>
        <li><strong>AI Act Compliance:</strong> Who's turning regulatory requirements into competitive advantages?</li>
        <li><strong>Edge Deployment:</strong> The shift from cloud-only to hybrid and edge AI deployment models.</li>
      </ul>
      
      <h2>Interview Wishlist</h2>
      <p>We're reaching out to CTOs and technical leads at companies building the infrastructure layer of European AI. If you're working on sovereign AI systems and will be at London Tech Week, <a href="mailto:contact@europiatech.eu">get in touch</a>.</p>
    `,
  },
  {
    slug: 'european-ai-2026-sovereign-infrastructure',
    title: 'The State of AI Innovation in Europe: 2026 Outlook',
    excerpt: 'Mapping European AI initiatives — from Mistral AI\'s production-ready models to sovereign infrastructure projects and AI Act compliance.',
    tag: 'Deep Tech',
    tagColor: 'violet',
    date: 'February 15, 2026',
    readTime: '12 min',
    author: 'Maxime Martin',
    content: `
      <p class="dropcap">A Survey of European Artificial Intelligence Initiatives, from Mistral AI to Sovereign Infrastructure Projects. Europe isn't behind in AI. It's building something different—and that difference may define the next decade of production-ready AI deployment.</p>
      
      <hr />
      
      <h2>The outdated narrative—<span class="text-accent">and what replaced it</span></h2>
      <p>Not long ago, AI was a spectacle. Bigger models. More parameters. Billion-dollar benchmarks dressed up as progress.</p>
      <p>That phase is ending.</p>
      <p>In 2026, AI has entered its industrial era. The question is no longer how powerful a model is. The question is:</p>
      
      <blockquote>Can you run it, control it, and trust it in production?</blockquote>
      
      <p>That shift plays directly to Europe's strengths—and exposes its strategy.</p>
      
      <h2>Europe's quiet bet: <span class="text-accent">efficiency over ego</span></h2>
      <p>While American labs escalated a parameter arms race, European players made a different calculation.</p>
      <p>Companies like Mistral AI are building models in the 7B to 22B range—orders of magnitude smaller than their U.S. counterparts. On paper, that looks like a disadvantage.</p>
      <p>In practice, it's a design choice.</p>
      
      <p>A smaller model:</p>
      <ol>
        <li>runs on accessible hardware</li>
        <li>deploys on-premise or at the edge</li>
        <li>reduces inference costs dramatically</li>
        <li>avoids total dependence on hyperscaler infrastructure</li>
      </ol>
      
      <p>This isn't about being unable to scale. It's about choosing where scale actually matters.</p>
      
      <h2>The constraint Europe <span class="text-accent">turned into strategy</span></h2>
      <p>Europe doesn't have unlimited GPU access. That's the reality.</p>
      <p>But instead of treating it as a weakness, European labs reframed the problem:</p>
      
      <blockquote>What if the future of AI isn't about the biggest model—but the most deployable one?</blockquote>
      
      <p>That's how constraint becomes leverage. A compact model that runs locally is not just cheaper. It's sovereign.</p>
      
      <h2>Key Takeaway</h2>
      <p>European AI innovation in 2026 isn't a promise anymore. It's infrastructure. Not the loud kind. Not the headline-grabbing kind. The kind that runs quietly inside hospitals, banks, and governments—where failure isn't an option.</p>
    `,
  },
  {
    slug: 'zero-trust-post-quantum-security-startups',
    title: 'Securing Tomorrow\'s Servers: Zero Trust & Post-Quantum Standards',
    excerpt: 'The new security standards every European startup CTO should implement now.',
    tag: 'Infrastructure',
    tagColor: 'cyan',
    date: 'February 12, 2026',
    readTime: '9 min',
    author: 'Maxime Martin',
    content: `
      <p class="dropcap">Zero Trust architecture, confidential computing, post-quantum hardening—the new security standards every European startup CTO should implement now.</p>
      
      <h2>The Post-Quantum Timeline</h2>
      <p>Quantum computers capable of breaking current encryption aren't here yet. But "harvest now, decrypt later" attacks are happening today. Adversaries are collecting encrypted data now, planning to decrypt it when quantum capabilities mature.</p>
      
      <p>For European companies handling sensitive data—healthcare, finance, government contracts—the time to act is now.</p>
      
      <h2>Zero Trust: Beyond the Buzzword</h2>
      <p>Zero Trust isn't a product you buy. It's an architecture principle: never trust, always verify. Every request, every user, every device—verified independently.</p>
      
      <h3>Implementation Priorities</h3>
      <ul>
        <li><strong>Identity-first security:</strong> Strong authentication at every access point</li>
        <li><strong>Microsegmentation:</strong> Limit blast radius of any breach</li>
        <li><strong>Continuous verification:</strong> Don't trust established sessions</li>
        <li><strong>Encryption everywhere:</strong> Data at rest, in transit, and in use</li>
      </ul>
      
      <h2>Confidential Computing</h2>
      <p>The next frontier: protecting data while it's being processed. Technologies like Intel SGX and AMD SEV create secure enclaves where even the cloud provider can't see your data.</p>
      
      <p>This is particularly relevant for European companies using US hyperscalers while needing to maintain data sovereignty.</p>
      
      <h2>Action Items for CTOs</h2>
      <ol>
        <li>Audit current cryptographic implementations</li>
        <li>Begin post-quantum migration planning</li>
        <li>Implement Zero Trust architecture incrementally</li>
        <li>Evaluate confidential computing for sensitive workloads</li>
      </ol>
    `,
  },
  {
    slug: 'tech-conferences-2026-ai-regulation-cloud',
    title: '3 Key Themes at Tech Conferences 2026: AI Regulation, Cloud Sovereignty & Cybersecurity',
    excerpt: 'Cloud sovereignty beyond GDPR, AI Act compliance and industrial cybersecurity — our technical reading grid for 2026 conferences.',
    tag: 'Event',
    tagColor: 'orange',
    date: 'February 8, 2026',
    readTime: '7 min',
    author: 'Maxime Martin',
    wide: true,
    content: `
      <p class="dropcap">As we enter the 2026 conference season, three themes dominate the European tech conversation: AI regulation, cloud sovereignty, and industrial cybersecurity. Here's our technical reading grid for cutting through the noise.</p>
      
      <h2>Theme 1: AI Act Compliance</h2>
      <p>The EU AI Act is no longer theoretical. Companies deploying AI systems in Europe need compliance strategies. Watch for sessions covering:</p>
      <ul>
        <li>Risk classification frameworks</li>
        <li>Documentation requirements for high-risk systems</li>
        <li>Transparency obligations</li>
        <li>Human oversight implementation</li>
      </ul>
      
      <h2>Theme 2: Cloud Sovereignty</h2>
      <p>GDPR was just the beginning. The conversation has evolved to encompass operational sovereignty—not just where data is stored, but who controls the infrastructure.</p>
      
      <p>Key questions to ask vendors:</p>
      <ul>
        <li>Where are encryption keys managed?</li>
        <li>Which jurisdiction's laws govern data access?</li>
        <li>What happens if a foreign government issues a subpoena?</li>
      </ul>
      
      <h2>Theme 3: Industrial Cybersecurity</h2>
      <p>OT/IT convergence creates new attack surfaces. Critical infrastructure operators face unique challenges that consumer-focused security approaches don't address.</p>
      
      <h2>Conferences Worth Attending</h2>
      <ul>
        <li><strong>London Tech Week</strong> (June) — Broad European tech coverage</li>
        <li><strong>Web Summit</strong> (November) — Scale and networking</li>
        <li><strong>VivaTech</strong> (June) — French/European startup ecosystem</li>
      </ul>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles;
}
