import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../context/ContextProvider'
import { SlPuzzle } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md'

function SideBar() {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 1024) {
            setActiveMenu(false);

        }
    }
    return (
        <div className='mr-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>

            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        {/* <Link to='/' onClick={handleCloseSidebar} className='items-center gap-3 mr-3 flex text-xl font-bold tracking-tight dark:text-white text-slate-900'>
                            <span className='border-2 border-gray-500 p-[5px] flex items-center justify-center '>
                                <SlPuzzle className='text-xl' />

                            </span>
                            <span>
                                پازلــــــ
                            </span>
                        </Link> */}
                        <TooltipComponent enableRtl={true} content="بستن منو" position='BottomCenter'>
                            <button type='button' onClick={
                                () => {
                                    setActiveMenu((prev) => !prev)
                                }
                            }
                            className='text-xl rounded-full p-1 hover:bg-light-gray dark:bg-gray-500
                            ml-4 mt-4 block dark:text-gray-50 lg:hidden'
                             >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>


                    </div>
                </>
            )}



        </div>
    )
}

export default SideBar
