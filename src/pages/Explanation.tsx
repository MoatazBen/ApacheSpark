import { Database, Layers, Activity, Brain, Share2 } from 'lucide-react';

export default function Explanation() {
  const components = [
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Resilient Distributed Datasets (RDDs)',
      description: 'The fundamental data structure of Spark. RDDs are immutable collections of objects spread across a cluster, providing fault tolerance through lineage information.',
      code: `// Example RDD operation
val textFile = sc.textFile("data.txt")
val counts = textFile
  .flatMap(line => line.split(" "))
  .map(word => (word, 1))
  .reduceByKey(_ + _)`
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: 'DataFrames and Spark SQL',
      description: 'A distributed collection of data organized into named columns. Provides a domain-specific language for structured data manipulation.',
      code: `// Example DataFrame operation
val df = spark.read.json("data.json")
df.filter($"age" > 21)
  .select("name", "age")
  .groupBy("age")
  .count()`
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-500" />,
      title: 'Spark Streaming',
      description: 'Extension of the core Spark API for processing live data streams. Enables scalable, high-throughput, fault-tolerant stream processing.',
      code: `// Example Streaming operation
val streaming = spark.readStream
  .format("kafka")
  .option("subscribe", "topic")
  .load()
  
streaming.writeStream
  .outputMode("append")
  .format("console")
  .start()`
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Machine Learning (MLlib)',
      description: 'Distributed machine learning framework above Spark Core. Provides common learning algorithms and utilities.',
      code: `// Example ML Pipeline
val pipeline = new Pipeline()
  .setStages(Array(
    tokenizer,
    hashingTF,
    lr
  ))
  
val model = pipeline.fit(training)`
    },
    {
      icon: <Share2 className="w-8 h-8 text-orange-500" />,
      title: 'GraphX',
      description: 'Distributed graph processing system built on top of Spark. Provides an API for expressing graph computation.',
      code: `// Example Graph operation
val graph = Graph(users, relationships)
val degrees = graph.degrees
val maxDegree = degrees.reduce(max)`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Apache Spark
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apache Spark is a unified analytics engine for large-scale data processing.
            Let's explore its key components and features.
          </p>
        </div>

        <div className="space-y-16">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    {component.icon}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900">
                    {component.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {component.description}
                </p>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-orange-400">
                    <code>{component.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Spark?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Speed
              </h3>
              <p className="text-gray-600">
                Run workloads 100x faster than traditional Hadoop MapReduce in memory,
                or 10x faster on disk.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ease of Use
              </h3>
              <p className="text-gray-600">
                Write applications in Java, Scala, Python, R, and SQL with over 80
                high-level operators.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Generality
              </h3>
              <p className="text-gray-600">
                Combine SQL, streaming, and complex analytics in the same application.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compatibility
              </h3>
              <p className="text-gray-600">
                Run on Hadoop, Mesos, Kubernetes, standalone, or in the cloud.
                Access data in HDFS, Cassandra, HBase, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}