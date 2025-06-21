import { aboutData } from "@/constants/about";

export default function About() {
  return (
    <div id="about">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {aboutData.intro}
            </h1>
          </div>

          {/* Vision Section */}
          <div className="mb-10 px-6 py-8 bg-gray-50 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              My Vision
            </h2>
            <p className="text-lg text-gray-600">{aboutData.vision}</p>
          </div>

          {/* Passion Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-xl text-center text-white">
            <h2 className="text-2xl font-semibold mb-4">What Drives Me</h2>
            <p className="text-lg">{aboutData.passion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
