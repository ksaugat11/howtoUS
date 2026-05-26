import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-[family-name:var(--font-inter)]">
      <Navbar />
     {/* Features Section */}
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
    </main>
  );
}