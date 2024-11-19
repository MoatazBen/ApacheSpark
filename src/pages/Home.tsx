import { ArrowRight, Zap, Database, Brain, Share2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'Lightning Fast',
      description: 'Process data up to 100x faster than traditional systems with in-memory computation'
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Unified Engine',
      description: 'Handle SQL, streaming, ML, and graph processing with a single engine'
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: 'Machine Learning',
      description: 'Built-in MLlib library for scalable machine learning pipelines'
    },
    {
      icon: <Share2 className="w-6 h-6 text-orange-500" />,
      title: 'Distributed Processing',
      description: 'Scale from one to thousands of nodes with linear efficiency'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Welcome to Apache Spark Overview
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the power of Apache Spark, the unified analytics engine for big data processing.
              From batch processing to machine learning, Spark handles it all with lightning speed.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/explanation"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demonstration"
                className="inline-flex items-center px-6 py-3 border border-orange-600 text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition-colors"
              >
                See Demo
                <PlayCircle className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">100x</div>
              <div className="mt-2 text-gray-600">Faster than traditional systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">1000+</div>
              <div className="mt-2 text-gray-600">Contributing organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600">180+</div>
              <div className="mt-2 text-gray-600">Countries using Spark</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}