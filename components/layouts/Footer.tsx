import Logo from "../Logo"

interface Iprops {
    hamburger : boolean
  }

export default function Footer ({ hamburger}: Iprops) : JSX.Element {
     return  <footer className={` ${hamburger ? 'hidden' : ''} bg-white z-20 max-[770px]:p-4 w-full p-8`}>
        <div className="flex items-center flex-col">
            <div className="flex w-full  items-center max-[770px]:flex-col max-[770px]:gap-10 justify-between">
                <span className="max-[770px]:self-start">
                <Logo/>
                </span>
                <ul className="flex items-center justify-center flex-col md:flex-row max-[770px]:gap-4 gap-8 ">
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" >My projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" >Inspiration</a>
                    </li>
                </ul>
            </div>
            <hr className="my-8 w-11/12" />
            <span className="block font-extralight text-sm text-center">© 2023 <a href="#" className="hover:underline">Thierry</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
    
}