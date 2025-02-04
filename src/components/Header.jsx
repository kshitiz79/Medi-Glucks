
export default function Header() {
    return (
      <header className="bg-white shadow-md p-4 flex items-center justify-between mt-96">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Welcome, Admin</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Logout</button>
        </div>
      </header>
    );
  }
  