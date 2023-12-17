// import { useState } from 'react'
import './App.css'
import { useStateContext } from './context/ContextProvider'
import { FiSettings } from "react-icons/fi"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SideBar from './components/SideBar';
function App() {
  const { activeMenu, themeSettings, setThemeSetting, currentColor, currentMode, isClicked } = useStateContext();


  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed left-4 z-[1000] bottom-4'>
          <TooltipComponent content={'تنظیمات'} position='TopRight'>
            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white' style={{ background: currentColor, borrderRadius: '50%' }}
              onClick={() => setThemeSetting(true)}
            >
              <FiSettings />

            </button>
          </TooltipComponent>



        </div>
        {activeMenu ? (
          <div className={`w-72 fixed shrink-0  z-[
            ${isClicked.cart ? "10" : "10009"}
          ] dark: bg-secondary-dark bg-white`}>
            <SideBar />

          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>

            <SideBar className='w-0' />

          </div>
        )}




      </div>

    </div>
  )
}

export default App