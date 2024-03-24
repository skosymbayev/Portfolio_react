const detectDarkMode = () => {
    if( 
        window.matchMedia
        &&
        window.matchMedia('prefers-color-schemeL dark)').matches
    )
    {
        return 'dark';
    }
    return 'light';
}

export default detectDarkMode;