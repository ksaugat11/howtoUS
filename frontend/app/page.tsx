import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 text-gray-900 font-[family-name:var(--font-inter)]">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto flex flex-1 max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
        
        <h1 className="mb-6 max-w-4xl font-[family-name:var(--font-poppins)] text-4xl font-bold leading-tight md:text-6xl">
          Your step-by-step guide to studying in the United States
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">
          HowToUS helps students understand the F-1 student process, from
          choosing universities to preparing documents, getting an I-20, filling
          DS-160, and practicing for the visa interview.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
            Get Started
          </button>
          <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100">
            View F-1 Roadmap
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-[family-name:var(--font-poppins)] text-3xl font-bold text-gray-900">
            Everything you need in one place
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 text-3xl">🗺️</div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">F-1 Roadmap</h3>
              <p className="text-sm text-gray-600">Follow a clear step-by-step guide from choosing universities to getting your visa.</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 text-3xl">📋</div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">Document Checklist</h3>
              <p className="text-sm text-gray-600">Never miss a document. Track everything you need for your application.</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 text-3xl">🎓</div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">University Finder</h3>
              <p className="text-sm text-gray-600">Explore universities that match your budget, major, and academic profile.</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 text-3xl">🎤</div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">Visa Interview Prep</h3>
              <p className="text-sm text-gray-600">Practice common F-1 visa interview questions and feel confident on the day.</p>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center font-[family-name:var(--font-poppins)] text-3xl font-bold text-gray-900">
            How it works
          </h2>
          <p className="mb-12 text-center text-gray-500">
            Three simple steps to start your US study journey
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">Create your account</h3>
              <p className="text-sm text-gray-600">Sign up for free and tell us about your background and goals.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">Follow the roadmap</h3>
              <p className="text-sm text-gray-600">Go through each step of the F-1 process with clear guidance.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-poppins)] text-lg font-semibold">Get your F-1 visa</h3>
              <p className="text-sm text-gray-600">Complete your checklist, ace your interview, and start your journey.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 md:flex-row">

          

          <p className="text-sm text-gray-500">
            © 2025 HowToUS. Built to help international students.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">About</a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Contact</a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Privacy</a>
          </div>

        </div>
      </footer>

    </main>
  );
}