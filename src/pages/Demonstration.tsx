import { useState } from 'react';
import {  RotateCcw, Filter, Group } from 'lucide-react';

interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
  salary: number;
}

interface GroupedResult {
  city: string;
  count: number;
  avgSalary: number;
  totalSalary: number;
}

export default function Demonstration() {
  const initialData: DataItem[] = [
    { id: 1, name: "John Doe", age: 28, city: "New York", salary: 75000 },
    { id: 2, name: "Jane Smith", age: 34, city: "San Francisco", salary: 95000 },
    { id: 3, name: "Bob Johnson", age: 45, city: "Chicago", salary: 85000 },
    { id: 4, name: "Alice Brown", age: 29, city: "New York", salary: 72000 },
    { id: 5, name: "Charlie Wilson", age: 38, city: "San Francisco", salary: 98000 },
    { id: 6, name: "Diana Miller", age: 31, city: "Chicago", salary: 78000 },
    { id: 7, name: "Edward Davis", age: 42, city: "New York", salary: 88000 },
    { id: 8, name: "Frank Thomas", age: 36, city: "San Francisco", salary: 92000 }
  ];

  const [data, setData] = useState<DataItem[]>(initialData);
  const [processing, setProcessing] = useState(false);
  const [operation, setOperation] = useState<'none' | 'filter' | 'group'>('none');
  const [result, setResult] = useState<DataItem[] | GroupedResult[] | null>(null);

  const simulateProcessing = (callback: () => void) => {
    setProcessing(true);
    setTimeout(() => {
      callback();
      setProcessing(false);
    }, 1000);
  };

  const handleFilter = () => {
    setOperation('filter');
    simulateProcessing(() => {
      const filtered = data.filter(item => item.salary > 80000);
      setResult(filtered);
    });
  };

  const handleGroup = () => {
    setOperation('group');
    simulateProcessing(() => {
      const grouped = data.reduce((acc, curr) => {
        acc[curr.city] = acc[curr.city] || { city: curr.city, count: 0, avgSalary: 0, totalSalary: 0 };
        acc[curr.city].count += 1;
        acc[curr.city].totalSalary += curr.salary;
        acc[curr.city].avgSalary = Math.round(acc[curr.city].totalSalary / acc[curr.city].count);
        return acc;
      }, {} as Record<string, GroupedResult>);
      setResult(Object.values(grouped));
    });
  };

  const reset = () => {
    setOperation('none');
    setResult(null);
    setData(initialData);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apache Spark Simulation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a simplified simulation of Spark's data processing capabilities.
            Select an operation to see how Spark would process the data.
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
  <div className="flex flex-wrap gap-4 justify-center">
    {/* Filter by Salary button */}
    <button
      onClick={() => handleFilter()}
      disabled={processing}
      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50"
    >
      <Filter className="w-5 h-5 mr-2" />
      Filter Salary GT 80k
    </button>

    {/* Filter by City button */}
    <button
      onClick={() => handleFilter()}
      disabled={processing}
      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50"
    >
      <Filter className="w-5 h-5 mr-2" />
      Filter by City (e.g., New York)
    </button>

    {/* Group by City button */}
    {/* <button
      onClick={handleGroup}
      disabled={processing}
      className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors disabled:opacity-50"
    >
      <Group className="w-5 h-5 mr-2" />
      Group by City
    </button> */}

    {/* Reset button */}
    <button
      onClick={reset}
      disabled={processing}
      className="flex items-center px-6 py-3 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors disabled:opacity-50"
    >
      <RotateCcw className="w-5 h-5 mr-2" />
      Reset
    </button>
  </div>
</div>


        {/* Processing Animation */}
        {processing && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        )}

        {/* Results Section */}
        <div className="space-y-8">
          {/* Original Data */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Original Dataset</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.age}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.salary)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  {operation === 'filter' ? 'Filtered Results' : 'Grouped Results'}
                </h2>
              </div>
              <div className="overflow-x-auto">
                {operation === 'filter' ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {(result as DataItem[]).map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.age}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.city}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.salary)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Salary</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {(result as GroupedResult[]).map((item) => (
                        <tr key={item.city}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.city}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.count}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.avgSalary)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}