
function ToggleBackground(){
    function white(){
        document.querySelector('.App-header')?.classList.toggle('white');
        document.querySelector('.App-text')?.classList.toggle('black')
      }

    return (
        <button onClick={white} className='btn'>
                 Сменить фон
            </button>
      
      );

   
}

export default ToggleBackground;