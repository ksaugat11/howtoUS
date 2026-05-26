import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-[family-name:var(--font-inter)]">
      <Navbar />
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="mb-4 text-5xl font-semibold uppercase tracking-wide text-blue-600">
          HowToUS
        </p>

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
    </main>
  );
}