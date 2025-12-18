import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Main container with max width and padding */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-20">
        {/* Two-column grid layout */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left column - Hero/Sidebar (sticky on large screens) */}
          <div className="lg:sticky lg:top-20 lg:h-screen lg:flex lg:flex-col lg:justify-between">
            <div>
              <h1 className="text-5xl font-bold">Your Name</h1>
              <h2 className="text-2xl text-slate-300 mt-3">Your Title</h2>
              <p className="text-slate-400 mt-4 max-w-sm">
                Your tagline goes here
              </p>

              {/* Navigation - we'll build this next */}
              <nav className="mt-16">
                <p className="text-slate-500">Navigation will go here</p>
              </nav>
            </div>

            {/* Footer/Social links - we'll build this later */}
            <div className="mt-16 lg:mt-0">
              <p className="text-slate-500">Social links will go here</p>
            </div>
          </div>

          {/* Right column - Content area */}
          <div className="mt-16 lg:mt-0">
            <section id="about" className="mb-16">
              <h3 className="text-slate-500 text-sm uppercase tracking-widest mb-4">
                About
              </h3>
              <p className="text-slate-400">Your bio content will go here...</p>
            </section>

            <section id="experience" className="mb-16">
              <h3 className="text-slate-500 text-sm uppercase tracking-widest mb-4">
                Experience
              </h3>
              <p className="text-slate-400">
                Experience content will go here...
              </p>
            </section>

            <section id="projects" className="mb-16">
              <h3 className="text-slate-500 text-sm uppercase tracking-widest mb-4">
                Projects
              </h3>
              <p className="text-slate-400">Projects content will go here...</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
