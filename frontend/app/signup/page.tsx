import Navbar from "@/components/Navbar";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 font-[family-name:var(--font-inter)]">
      <Navbar />

      <section className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 pt-20">
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">

          <h1 className="mb-2 font-[family-name:var(--font-poppins)] text-2xl font-bold text-gray-900">
            Create your account
          </h1>
          <p className="mb-6 text-sm text-gray-500">
            Start your US study journey with HowToUS
          </p>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
              <option value="">Select your country</option>
              <option value="np">Nepal</option>
              <option value="in">India</option>
              <option value="bd">Bangladesh</option>
              <option value="pk">Pakistan</option>
              <option value="lk">Sri Lanka</option>
              <option value="ng">Nigeria</option>
              <option value="gh">Ghana</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700">
            Create Account
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/signin" className="font-medium text-blue-600 hover:underline">
              Sign in
            </a>
          </p>

        </div>
      </section>
    </main>
  );
}