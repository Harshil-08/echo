import SideBar from "./components/SideBar";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F8F6E3] dark:bg-[#1B262C] gap-4 select-none">
      <SideBar />
      <h1 className="text-7xl font-mono text-[#7AA2E3] dark:text-[#3282B8] mt-6">
        Echo
      </h1>
      <ToggleTheme />
    </div>
  );
}

export default App;
