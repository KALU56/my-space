import React from "react";

const Home: React.FC = () => {
 

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">My-Journal</h1>
        <nav>
          <button className="text-sm px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Broadcast
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          My-Journaling <br /> That’s Learn Broadcast
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          A platform where you can explore and learn through journaling and engaging broadcasts.
        </p>
      </main>

      {/* Footer/Decorative Element */}
      <footer className="flex items-center justify-center py-4 bg-gray-200">
        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
      </footer>
    </div>
  );
};

export default Home;
