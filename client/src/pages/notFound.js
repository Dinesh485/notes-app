const PageNotFound = () => {
    return ( 
        <div className= 'h-full w-full flex items-center justify-center'>
            <div className = 'flex items-center flex-col'>
            <svg className = 'w-16 mb-5 fill-current text-black dark:text-white lg:w-24' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.001 14c-2.332 0-4.145 1.636-5.093 2.797l.471.58c1.286-.819 2.732-1.308 4.622-1.308s3.336.489 4.622 1.308l.471-.58c-.948-1.161-2.761-2.797-5.093-2.797zm-3.501-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
            <h1 className = 'font-medium text-xl text-center dark:text-white md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Page not found</h1>
            </div>
           
        </div>
     );
}
 
export default PageNotFound;