export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">        
        {/* Logo */}
    <span className="text-2xl font-bold text-blue-600 font-[family-name:var(--font-poppins)] -ml-21"> 
                 HowToUS
        </span>

        {/* Nav Links */}
        <div className="hidden gap-8 md:flex">
          <a href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Roadmap</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Checklist</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Universities</a>
        </div>

        {/* Sign In Button */}
       <a href="/signin" className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
         Sign In
       </a>
      </div>
    </nav>
  );
}