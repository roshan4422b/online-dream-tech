import styles from "./technology-orbit.module.css";

const tools = [
  { name: "GitHub", className: "github", mark: <img src="/github.svg" alt="" /> },
  { name: "Node.js", className: "node", mark: <img src="/nodejs.svg" alt="" /> },
  { name: "Tailwind CSS", className: "tailwind", mark: <img src="/tailwindcss.svg" alt="" /> },
  { name: "Shopify", className: "shopify", mark: <img src="/shopify.svg" alt="" /> },
  { name: "Google", className: "google", mark: <img src="/google.svg" alt="" /> },
  { name: "WordPress", className: "wordpress", mark: <img src="/wordpress.svg" alt="" /> },
  { name: "ChatGPT", className: "chatgpt", mark: <img src="/chatgpt-white.svg" alt="" /> },
  { name: "Gemini", className: "gemini", mark: <img src="/gemini.svg" alt="" /> },
];

const connections = ["github", "node", "tailwind", "shopify", "google", "wordpress", "chatgpt", "gemini"];

export default function TechnologyOrbit() {
  return (
    <section className={styles.section} aria-labelledby="technology-title">
      <div className={styles.header}>
        <h2 className={styles.eyebrow}>TOOLS THAT POWER OUR WORK</h2>
      </div>
      <div className={styles.stage}>
        <div className={styles.connections} aria-hidden="true">
          {connections.map((connection) => <span key={connection} className={styles[connection]} />)}
        </div>
        <div className={styles.core}>
          <span className={styles.coreKicker}>BUILDING WITH</span>
          <h2 id="technology-title">Technologies<br />we master</h2>
          <span className={styles.coreDot} aria-hidden="true" />
        </div>
        {tools.map((tool) => (
          <div key={tool.name} className={`${styles.tool} ${styles[tool.className]}`} title={tool.name}>
            <span className={styles.toolMark}>{tool.mark}</span>
            <span className={styles.toolName}>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
