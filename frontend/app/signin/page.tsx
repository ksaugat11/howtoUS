import Navbar from "@/components/Navbar";

export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 font-[family-name:var(--font-inter)]">
      <Navbar />

      <section className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 pt-20">
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
          
          <h1 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
            Welcome back
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            Sign in to your HowToUS account
          </p>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700">
            Sign In
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/signup" className="font-medium text-blue-600 hover:underline">
              Sign up
            </a>
          </p>

        </div>
      </section>
    </main>
  );
}