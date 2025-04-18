import React from 'react';
import { Github, ExternalLink, Brain, BarChart3, TrendingUp, MousePointerClick } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img
            src="https://raw.githubusercontent.com/asad09945/My-Protfolio/main/mypic.png"
            alt="Profile"
            className="rounded-full w-48 h-48 mx-auto mb-6 object-cover shadow-lg"
          />
          <h2 className="text-2xl font-medium text-gray-700 mb-2">Asad Ejaz</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">I am a Software Engineer!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Who can turns coffee into code, code into solutions, 
          and solutions into seamless apps! 
          
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* My Portfolio FrontEnd */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
        <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold">My Portfolio Front End Developement</h3>
          </div>
          <p className="text-gray-600 mb-4">
          Built dynamic, responsive, and user-friendly interfaces
           using JavaScript, CSS, and React. Focused on creating
            seamless user experiences with clean, 
          maintainable code and modern design practices.
          </p>
          <div className="flex space-x-4">
        <a
          href="https://github.com/asad09945/My-Protfolio"
          className="flex items-center text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 mr-1" /> Code
        </a>
          </div>
        </div>

        {/* My ATS BackEnd Using Python */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <Brain className="w-8 h-8 text-purple-600 mr-3" />
          <h3 className="text-xl font-semibold">My ATS Backend Development</h3>
        </div>
        <p className="text-gray-600 mb-4">
        Developed the back-end of My ATS using Python, 
        enabling efficient resume parsing, keyword matching, 
        and automated status updates.
        </p>
        <div className="flex space-x-4">
          <a
          href="https://github.com/asad09945/MyATS/tree/main/MyATS"
          className="flex items-center text-purple-600 hover:text-purple-800"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Github className="w-5 h-5 mr-1" /> Code
          </a>
        </div>
        </div>
        {/* My Click - Ad ML/AI Models */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
        <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
        <h3 className="text-xl font-semibold">My Click-Ad ML/AI Models</h3>
        </div>
        <p className="text-gray-600 mb-4">
        For the click ad project, I developed four machine 
        learning models to predict user engagement and optimize 
        bidding strategies. These models include a win predictor 
        to estimate ad success, a bid predictor to adjust bidding 
        prices dynamically, and two classifiers that categorize user 
        behavior based on historical interaction data. Together,
         they help optimize ad delivery and maximize conversions.
        </p>
        <div className="flex space-x-4">
        <a
        href="https://github.com/asad09945/Click-Ad-Project-/tree/main/RealTimeBidding-ML/notebooks"
        className="flex items-center text-green-600 hover:text-green-800"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Github className="w-5 h-5 mr-1" /> Code
        </a>
        <a
        href="https://github.com/asad09945/Click-Ad-Project-/tree/main/RealTimeBidding-ML/models"
        className="flex items-center text-green-600 hover:text-green-800"
        target="_blank"
        rel="noopener noreferrer"
        >
        <ExternalLink className="w-5 h-5 mr-1" /> Download Models
        </a>
        </div>
        </div>

          {/* Other ML Models */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <MousePointerClick className="w-8 h-8 text-red-600 mr-3" />
          <h3 className="text-xl font-semibold">Other ML/AI Models,EDA and ETL</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Predictive analytics system for optimizing CTR using user behavior analysis and A/B testing.
        </p>
        <div className="flex space-x-4">
          <a
        href="https://github.com/asad09945?tab=repositories"
        className="flex items-center text-red-600 hover:text-red-800"
        target="_blank"
        rel="noopener noreferrer"
          >
        <Github className="w-5 h-5 mr-1" /> Code
          </a>
          <a
        href="https://github.com/asad09945?tab=repositories"
        className="flex items-center text-red-600 hover:text-red-800"
        target="_blank"
        rel="noopener noreferrer"
          >
        <ExternalLink className="w-5 h-5 mr-1" /> Download Models
          </a>
        </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
        'Machine Learning',
        'Statistical Analysis',
        'Python',
        'JavaScript',
        'React',
        'SQL',
        'CSS',
        'Data Visualization',
        'C++',
        'Neural Networks',
          ].map((skill) => (
        <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center">
          <span className="text-gray-800 font-medium">{skill}</span>
        </div>
          ))}
        </div>
      </section>

      {/* Links Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-center mb-12">Connect with Me</h2>
        <div className="flex justify-center space-x-8">
          <a
        href="mailto:asad09945@gmail.com"
        className="text-blue-600 hover:text-black text-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
          >
        Email
          </a>
          <a
        href="https://github.com/asad09945?tab=repositories"
        className="text-blue-600 hover:text-black text-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
          >
        GitHub
          </a>
          <a
        href="https://www.linkedin.com/in/asad-ejaz-985b3b1ba/"
        className="text-blue-600 hover:text-black text-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
          >
        LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Asad Ejaz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
