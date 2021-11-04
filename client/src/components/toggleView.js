const ToggleView = () => {
    return ( 
        <div className ='hidden md:block'>
        <svg className = 'w-[40px] mb-3'  viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="41.3333" rx="10" fill="white" />
            <rect x="6.6665" y="6.66675" width="16" height="12.6667" rx="2" fill="black" />
            <rect x="6.6665" y="22.6666" width="16" height="12.6667" rx="2" fill="black" />
            <rect x="27.3335" y="22.6666" width="16" height="12.6667" rx="2" fill="black" />
            <rect x="27.3335" y="6.66675" width="16" height="12.6667" rx="2" fill="black" />
        </svg>
        <svg className = 'w-[40px] mb-3'  viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="42.9867" rx="10" fill="black" />
            <rect x="8.31982" y="8.15308" width="35.36" height="5.54667" rx="2.77333" transform="rotate(-0.852883 8.31982 8.15308)" fill="white" />
            <rect x="8.31982" y="19.2458" width="35.36" height="5.54667" rx="2.77333" fill="white" />
            <rect x="8.31982" y="30.3391" width="35.36" height="5.54667" rx="2.77333" fill="white" />
        </svg>

    </div>
     );
}
 
export default ToggleView;