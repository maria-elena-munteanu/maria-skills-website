export default function Home() {
  const skills = [
    {
      category: "📧 Communication & Messaging",
      items: [
        "Gmail - send, read, organize emails",
        "WhatsApp & Telegram - messaging automation",
        "Voice messages with natural Romanian voice (ElevenLabs)",
        "Audio transcription (speech-to-text)"
      ]
    },
    {
      category: "📅 Organization & Scheduling",
      items: [
        "Google Calendar management",
        "Automated reminders (cron jobs)",
        "Recurring tasks (daily, weekly, monthly)",
        "Deadline monitoring with automatic notifications"
      ]
    },
    {
      category: "🔍 Research & Information",
      items: [
        "News aggregation (Brave Search, Google News, RSS)",
        "Web search for any topic",
        "Content extraction from websites",
        "Location search (restaurants, clinics, stores)",
        "Weather and forecasts"
      ]
    },
    {
      category: "💻 Coding & Development",
      items: [
        "Claude Code for complex coding (Python, JavaScript, etc.)",
        "Create and modify files (text, CSV, JSON, etc.)",
        "Run shell commands (Linux, Git, npm, etc.)",
        "GitHub: create repos, commit, push, PRs",
        "Deploy: Firebase, Render.com",
        "Domain management: purchase and configure on Cloudflare"
      ]
    },
    {
      category: "🎨 Design & Media",
      items: [
        "Image generation (DALL-E 3, Gemini)",
        "PDF editing with natural language instructions",
        "Extract frames from video (ffmpeg)",
        "Image processing (resize, convert)"
      ]
    },
    {
      category: "📊 Google Workspace",
      items: [
        "Gmail: read, send, organize emails",
        "Calendar: add/modify events",
        "Drive: create/modify documents, spreadsheets",
        "Docs/Sheets: edit and generate reports",
        "Contacts: manage contacts"
      ]
    },
    {
      category: "🤖 AI & Automation",
      items: [
        "Integrate Gemini, Claude, GPT for complex tasks",
        "Create automated scripts (Python, Bash, Node.js)",
        "Spawn sub-agents for complex background tasks"
      ]
    },
    {
      category: "🗂️ Information Management",
      items: [
        "Long-term memory (MEMORY.md + daily notes)",
        "Search through past memories",
        "Document important decisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Maria Elena Munteanu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            AI Personal Assistant
          </p>
          <p className="text-lg text-gray-400">
            Your digital right hand - automating tasks, managing communications, and streamlining workflows
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {section.category}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 text-gray-300">
            <div>
              <span className="text-purple-400">📧 Email:</span> maria.elena.munteanu88@gmail.com
            </div>
            <div>
              <span className="text-purple-400">📱 Phone/WhatsApp:</span> +40750296532
            </div>
          </div>
          <p className="mt-6 text-gray-400">
            Working for <span className="text-purple-400 font-semibold">Gabriel Ursan</span> - Managing businesses, organizing personal life, and representing interests in communication with teams, clients, and partners.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>© 2026 Maria Elena Munteanu - AI Personal Assistant</p>
          <p className="mt-2 text-sm">Powered by OpenClaw, ElevenLabs, Claude, and cutting-edge AI technology</p>
        </div>
      </div>
    </div>
  );
}
